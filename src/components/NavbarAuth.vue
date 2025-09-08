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
  <BNavbar type="dark" variant="secondary" class="justify-content-between">
    <BNavbarBrand href="#">Email App</BNavbarBrand>

    <div>
      <template v-if="!isLoggedIn">
        <BButton
          size="sm"
          variant="primary"
          @click="$emit('open-login')"
          class="me-2"
        >
          Войти
        </BButton>

        <BButton size="sm" variant="success" @click="$emit('open-register')">
          Регистрация
        </BButton>
      </template>

      <template v-else>
        <BButton size="sm" variant="danger" @click="$emit('logout')">
          Выйти
        </BButton>
      </template>
    </div>
  </BNavbar>
</template>
