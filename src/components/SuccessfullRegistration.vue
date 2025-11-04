<script>
import { BButton } from 'bootstrap-vue-next'

export default {
  components: { BButton },

  emits: ['open-login'],
}
</script>

<template>
  <div
    class="container mt-1 d-flex flex-column justify-content-center h-100 align-items-center gap-2"
  >
    <h1 class="m-0 fw-normal text-primary">Вы успешно зарегистрировались!</h1>

    <BButton
      class="mt-4"
      size="sm"
      variant="primary"
      @click="$emit('open-login')"
    >
      Войти
    </BButton>
  </div>
</template>
