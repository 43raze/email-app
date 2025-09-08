<script>
import NavbarAuth from './components/NavbarAuth.vue'
import LoginModal from './components/LoginModal.vue'
import RegisterModal from './components/RegisterModal.vue'
import MailSidebar from './components/MailSidebar.vue'
import MailContent from './components/MailContent.vue'
import { login, register } from './model/cl.js'

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
      accounts: [],
      isLoggedIn: false,
      showLogin: false,
      showRegister: false,
    }
  },

  methods: {
    openRegister() {
      this.showRegister = true
    },
    openLogin() {
      this.showLogin = true
    },
    handleRegister(account) {
      register(account)
      this.isLoggedIn = true
    },
    handleLogin(account) {
      login(account)
      this.isLoggedIn = true
    },
  },
}
</script>

<template>
  <div class="vh-100 d-flex flex-column">
    <NavbarAuth
      :is-logged-in="isLoggedIn"
      @open-register="openRegister"
      @open-login="openLogin"
      @logout="isLoggedIn = false"
    />

    <div class="d-flex flex-grow-1">
      <div v-if="!isLoggedIn" class="container mt-4 text-center">
        <h2>Добро пожаловать</h2>
        <p>Используйте кнопки вверху, чтобы войти или зарегистрироваться.</p>

        <LoginModal v-model="showLogin" @submit-login="handleLogin" />
        <RegisterModal
          v-model="showRegister"
          @submit-account="handleRegister"
        />
      </div>

      <template v-else>
        <MailSidebar />

        <MailContent />
      </template>
    </div>
  </div>
</template>
