<template>
  <form
    class="netlify-form"
    :name="`Test Form ${step}`"
    method="POST"
    :action="step > 1 && '/blog/nuxt-netlify-forms-and-recaptcha/success/'"
    data-netlify="true"
    @submit.prevent="onSubmit"
  >
    <input type="hidden" name="form-name" :value="`Test Form ${step}`" />
    <label>
      Your Name:
      <input type="text" name="name" />
    </label>
    <lazy-image
      v-if="step === 3"
      src="nuxt-netlify-forms-and-recaptcha/recaptcha.png"
      alt="reCAPTCHA widget"
      width="304px"
      sizes="304px"
    />
    <small v-if="step === 3">
      (This is a fake reCAPTCHA, just pretend you’ve clicked it)
    </small>
    <small v-if="step > 3">
      This site is protected by reCAPTCHA and the Google
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>
      and
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noreferrer"
      >
        Terms of Service
      </a>
      apply.
    </small>
    <div>
      <button type="submit">Send</button>
      {{ message }}
    </div>
  </form>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      message: null
    }
  },
  methods: {
    async onSubmit(event) {
      if (this.step < 5) {
        event.target.submit()
        return
      }

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(new FormData(event.target)).toString()
        })

        if (!response.ok) {
          throw new Error('Response was not successful')
        }

        this.message = 'Thanks!'
      } catch {
        this.message = 'Something went wrong, please try again.'
      }
    }
  }
}
</script>

<style lang="scss">
.netlify-form {
  background-color: $color__body--overlay;
  border-radius: $border-radius;
  box-shadow: $box-shadow--small;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  position: relative;

  .lazy {
    background-color: transparent;

    // stylelint-disable-next-line value-no-vendor-prefix
    image-rendering: -webkit-optimize-contrast;

    picture {
      border: $border-weight solid $color__text--muter;
      filter: drop-shadow(0 0 0.25rem rgb(0 0 0 / 10%));
    }
  }

  small {
    margin-top: -0.25rem;
  }

  button {
    margin-right: 1rem;
    max-width: 10rem;
    width: 100%;
  }

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}

.highlight + .netlify-form {
  margin-top: -0.5rem;
}
</style>
