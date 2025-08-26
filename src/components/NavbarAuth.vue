<script>
import { BNavbar, BNavbarBrand, BButton } from 'bootstrap-vue-next'

export default {
  components: { BNavbar, BNavbarBrand, BButton },
}
</script>

<template>
  <BNavbar type="dark" variant="secondary" class="justify-content-between">
    <BNavbarBrand href="#">Email App</BNavbarBrand>

    <div>
      <BButton size="sm" variant="primary" class="me-2">Войти</BButton>
      <BButton size="sm" variant="success">Регистрация</BButton>
      <BButton size="sm" variant="danger" class="ms-2">Выйти</BButton>
    </div>
  </BNavbar>
</template>
