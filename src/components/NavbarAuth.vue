<script>
import { BNavbar, BNavbarBrand, BButton } from 'bootstrap-vue-next'

export default {
  components: { BNavbar, BNavbarBrand, BButton },

  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['open-register', 'open-login', 'logout'],
}
</script>

<template>
  <BNavbar type="dark" variant="primary" class="justify-content-between">
    <BNavbarBrand href="#">Email App</BNavbarBrand>

    <div>
      <div v-if="!isLoggedIn">
        <BButton
          size="sm"
          variant="light"
          @click="$emit('open-login')"
          class="me-2"
        >
          Войти
        </BButton>

        <BButton size="sm" variant="success" @click="$emit('open-register')">
          Регистрация
        </BButton>
      </div>

      <BButton v-else size="sm" variant="danger" @click="$emit('logout')">
        Выйти
      </BButton>
    </div>
  </BNavbar>
</template>
