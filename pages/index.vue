<template>
  <main class="home">
    <div class="home__banner">
      <h1 class="home__title">
        Hi, we are <span class="home__title--primary">Novit.ai</span>
      </h1>
      <div class="home__description">
        <markdown :markdown="markdown" />
      </div>
      <div class="home__actions">
        <a class="home__stuff" href="#services">How we can help you
          <down-icon />
        </a>
        <nuxt-link class="home__contact" to="/contact/">Contact us</nuxt-link>
      </div>
      <headshots />
    </div>
    <!-- services , centered title -->
    <p class="home__services-title">
      <span class="home__services-title--primary">Services</span>
    </p>

    <ol id="services" class="home__projects">
      <project-card v-for="project in projects" :key="project.title" :project="project" />
    </ol>
    <div v-if="allProjects.length > 4" class="home__projects-more">
      <nuxt-link to="/services/">See all services</nuxt-link>
      <see-more-icon />
    </div>

     <p class="home__services-title">
      <span class="home__services-title--primary">Blog</span>
    </p>
    <ol id="stuff" class="home__posts">
      <post-card v-for="post in posts" :key="post.title" :post="post" />
    </ol>
    <div v-if="allPosts.length>4" class="home__posts-more">
      <nuxt-link to="/blog/">See more blog posts</nuxt-link>
      <see-more-icon />
    </div>

    <p class="home__services-title">
      <span class="home__services-title--primary">Careers</span>
    </p>
    <ol id="stuff" class="home__posts">
      <post-card v-for="career in careers" :key="career.title" :post="career" />
    </ol>
    <div v-if="allCareers.length>4" class="home__posts-more">
      <nuxt-link to="/career/">See more job listings</nuxt-link>
      <see-more-icon />
    </div>
  </main>
</template>

<script>
import DownIcon from 'icons/KeyboardBackspace'
import { hydrateWhenIdle } from 'vue-lazy-hydration'
import { projectLoader, projectSlugs } from '~/contents/services'
import { postLoader, postSlugs } from '~/contents/blog'
import { careerLoader, careerSlugs } from '~/contents/career'
import PostCard from '~/components/PostCard'
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    DownIcon,
    SeeMoreIcon: DownIcon,
    Headshots: hydrateWhenIdle(() => import('~/components/Headshots')),
    PostCard,
    ProjectCard
  },
  async asyncData() {
    const { vue } = await import('~/contents/index.md')

    const posts = await Promise.all(
      postSlugs.map(async (postSlug) => {
        const post = await postLoader(postSlug)
        return {
          ...post.attributes
        }
      })
    )
    posts.sort((postA, postB) => postB.date - postA.date)

    const careers = await Promise.all(
      careerSlugs.map(async (careerSlug) => {
        const career = await careerLoader(careerSlug)
        return {
          ...career.attributes
        }
      })
    )
    careers.sort((careerA, careerB) => careerB.date - careerA.date)

    const projects = await Promise.all(
      projectSlugs.map(async (projectSlug) => {
        const project = await projectLoader(projectSlug)
        return {
          ...project.attributes
        }
      })
    )
    // projects.sort((projectA, projectB) => projectB.date - projectA.date)

    return {
      markdown: {
        vue
      },
      allPosts: posts,
      allProjects: projects,
      allCareers: careers,
      careers: careers.slice(0, 3),
      posts: posts.slice(0, 4),
      projects: projects.slice(0, 4)
    }
  },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss">
.home {
  $clip-path: polygon(100% 15%,
      50% 25%,
      45% 35%,
      100% 45%,
      100% 100%,
      50% 100%,
      0% 70%,
      0% 100%,
      100% 100%);
  @include page;
  @include dots($clip-path);
}

.home__banner {
  min-height: calc(100vh - 11.5rem);
  min-height: calc(var(--vh, 1vh) * 100 - 11.5rem);
  position: relative;

  @media (min-width: $breakpoint--md) {
    min-height: calc(100vh - 13rem);
    min-height: calc(var(--vh, 1vh) * 100 - 13rem);
  }
}

.home__title {
  @include title;
}

.home__title--primary {
  @include title--primary;
}

.home__description {
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: $breakpoint--md) {
    width: 60%;
  }
}

.home__actions {
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  @media (min-width: $breakpoint--md) {
    flex-direction: row;
  }
}

.home__stuff {
  @include button;
  @include button--primary;

  margin-right: 1rem;
  margin-bottom: 1rem;

  .material-design-icon {
    display: inline-block;
    margin-left: -0.15rem;
    margin-right: -0.35rem;
    transform: scale(0.95) rotate(-90deg);
  }
}

.home__contact {
  @include button;

  margin-bottom: 1rem;
}

.home__posts {
  display: grid;
  grid-gap: 1.5rem;
}

.home__projects {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;
  margin-top: 3rem;

  @media (min-width: $breakpoint--md) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

.home__services-title {
  @include title;

  margin-bottom: 3rem;
  margin-top: 3rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
}

.home__posts-more,
.home__projects-more {
  margin-top: 1rem;
  position: relative;
  text-align: right;

  .material-design-icon {
    pointer-events: none;

    svg {
      color: $color__primary;
      transform: rotate(180deg);
    }
  }

  a {
    @include link;

    &::after {
      content: '';
      inset: 0;
      position: absolute;
    }
  }
}
</style>
