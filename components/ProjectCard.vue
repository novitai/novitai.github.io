<template>
  <li class="project-card">
    <div class="project-card__image">
      <lazy-image
        :src="project.image"
        :alt="title"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
    <div class="project-card__content">
      <h2 class="project-card__title">
        <nuxt-link :to="project.link" class="project-card__link">
          {{ title }}
        </nuxt-link>
      </h2>
      <p class="project-card__description">{{ project.description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.project.titleShort || this.project.title
    }
  }
}
</script>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    .project-card__image::after {
      opacity: 0.5;
    }
  }
}

.project-card__image {
  background-color: $color__body;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  width: calc(100% - 1.5rem);
  z-index: -1;

  &::after {
    background-image: linear-gradient($color__primary--muted, $color__primary);
    content: '';
    inset: 0;
    opacity: 0;
    position: absolute;
    transition: opacity 150ms $transition__normal;
  }

  .lazy {
    inset: 0;
    position: absolute;

    picture {
      height: 100%;
      padding-bottom: 0;
      width: 100%;

      .lazy__image {
        object-position: top left;
      }
    }
  }
}

.project-card__content {
  background-color: $color__body--overlay;
  border: $border-weight solid $color__primary--muted;
  border-radius: $border-radius;
  box-shadow: $box-shadow--small;
  flex-grow: 1;
  margin-top: -3rem;
  margin-left: 1.5rem;
  padding: 1.5rem;
  padding-top: 1rem;
  transition: box-shadow 150ms $transition__normal,
    border-color 150ms $transition__normal;

  &:hover {
    border-color: $color__primary;
    box-shadow: $box-shadow;
  }
}

.project-card__title {
  @include h3;

  display: inline-block;
  margin-bottom: 0.5rem;
}

.project-card__link {
  @include link($color__body--overlay, $heading: true);

  &::after {
    content: '';
    inset: 0;
    position: absolute;
  }
}
</style>
