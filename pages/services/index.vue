<template>
  <main class="projects">
    <h1 class="projects__title" align="center">
      Our <span class="projects__title--primary">Services</span>
    </h1>
    <ol class="projects__projects">
      <project-card
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </ol>
  </main>
</template>

<script>
import { projectLoader, projectSlugs } from '~/contents/services'
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  async asyncData() {
    const projects = await Promise.all(
      projectSlugs.map(async (projectSlug) => {
        const project = await projectLoader(projectSlug)
        return {
          ...project.attributes
        }
      })
    )

    return {
      projects
    }
  },
  head() {
    return {
      title: 'Services'
    }
  }
}
</script>

<style lang="scss">
.projects {
  $clip-path: polygon(
    0% 30%,
    0% 20%,
    100% 10%,
    100% 20%,
    100% 30%,
    80% 50%,
    100% 80%,
    100% 100%,
    60% 100%,
    0% 70%,
    0% 100%,
    100% 100%,
    100% 20%
  );
  @include page;
  @include dots($clip-path);
}

.projects__title {
  @include title;
}

.projects__title--primary {
  @include title--primary;
}

.projects__projects {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;

  @media (min-width: $breakpoint--md) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}
</style>
