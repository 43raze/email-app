<script>
import NavbarAuth from './components/NavbarAuth.vue'
import LoginModal from './components/LoginModal.vue'
import RegisterModal from './components/RegisterModal.vue'
import MailSidebar from './components/MailSidebar.vue'
import MailContent from './components/MailContent.vue'
import SuccessfullRegistration from './components/SuccessfullRegistration.vue'
import MainPage from './components/MainPage.vue'

import { login, register } from './model/cl.js'

export default {
  components: {
    NavbarAuth,
    LoginModal,
    RegisterModal,
    MailSidebar,
    MailContent,
    SuccessfullRegistration,
    MainPage,
  },

  data() {
    return {
      accounts: [],
      showLogin: false,
      showRegister: false,
      isLoggedIn: false,
      successfullRegistration: false,
    }
  },

  methods: {
    openRegister() {
      this.showRegister = true
    },

    openLogin() {
      this.showLogin = true
    },

    handleRegister(nickname, password, firstName, lastName) {
      register(nickname, password, firstName, lastName)
      this.successfullRegistration = true
      this.showRegister = false
    },

    handleLogin(nickname, password) {
      login(nickname, password)
      this.isLoggedIn = true
      this.showLogin = false
    },
  },
}
</script>

<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <NavbarAuth
      :is-logged-in="isLoggedIn"
      @open-register="openRegister"
      @open-login="openLogin"
      @logout="isLoggedIn = false"
    />

    <div v-if="!isLoggedIn" class="flex-grow-1 d-flex flex-column">
      <SuccessfullRegistration
        v-if="successfullRegistration"
        @open-login="openLogin"
      />

      <MainPage v-else />
    </div>

    <div v-else class="d-flex flex-grow-1">
      <MailSidebar />
      <MailContent />
    </div>

    <RegisterModal
      v-model="showRegister"
      @submit-account="
        handleRegister(
          $event.nickname,
          $event.password,
          $event.firstName,
          $event.lastName
        )
      "
    />
    <LoginModal
      v-model="showLogin"
      @submit-login="handleLogin($event.nickname, $event.password)"
    />
  </div>
</template>
