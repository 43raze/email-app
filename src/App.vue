<script>
import NavbarAuth from './components/NavbarAuth.vue'
import LoginModal from './components/LoginModal.vue'
import RegisterModal from './components/RegisterModal.vue'
import MailSidebar from './components/MailSidebar.vue'
import MailContent from './components/MailContent.vue'
import { register } from '@/model/cl.js'
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
      isLoggedIn: true, // для теста todo удалить
      accounts: [],
    }
  },

  methods: {
    handleRegister() {
      this.isLoggedIn = true
    },
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

        <RegisterModal @submit-registration="handleRegister" />
      </div>

      <template v-else>
        <MailSidebar />

        <MailContent />
      </template>
    </div>
  </div>
</template>
