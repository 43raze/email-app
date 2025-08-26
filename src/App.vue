<script>
import NavbarAuth from './components/NavbarAuth.vue'
import LoginModal from './components/LoginModal.vue'
import RegisterModal from './components/RegisterModal.vue'
import MailSidebar from './components/MailSidebar.vue'
import MailContent from './components/MailContent.vue'

export default {
  components: {
    NavbarAuth,
    LoginModal,
    RegisterModal,
    MailSidebar,
    MailContent,
  },

  data() {
    return {
      isLoggedIn: false, // для теста todo удалить
    }
  },
}
</script>

<template>
  <div class="vh-100 d-flex flex-column">
    <NavbarAuth />

    <div class="d-flex flex-grow-1">
      <div v-if="isLoggedIn" class="container mt-4">
        <h2>Добро пожаловать</h2>
        <p>Используйте кнопки "Войти" или "Регистрация".</p>

        <LoginModal />

        <RegisterModal />
      </div>

      <template v-else>
        <MailSidebar />

        <MailContent />
      </template>
    </div>
  </div>
</template>
