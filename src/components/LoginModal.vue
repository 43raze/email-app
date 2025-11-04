<script>
import { randId } from '@/model/shared.js'
import {
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
} from 'bootstrap-vue-next'

const initAccount = () => ({
  id: randId(),
  nickname: '',
  password: '',
})

export default {
  components: { BModal, BForm, BFormGroup, BFormInput, BButton },

  emits: ['submit-login'],

  data() {
    return {
      account: initAccount(),
      errorMessage: '',
      showModal: false,
    }
  },

  methods: {
    login() {
      const { nickname, password } = this.account

      if (!nickname || !password) {
        this.errorMessage = 'Все поля являются обязательными!'
        return
      }

      this.$emit('submit-login', { ...this.account })
      this.errorMessage = ''
    },
  },
}
</script>

<template>
  <BModal id="login-modal" title="Вход" @ok.prevent="login" v-model="showModal">
    <BForm>
      <BFormGroup label="Никнейм">
        <BFormInput v-model.trim="account.nickname" />
      </BFormGroup>

      <BFormGroup label="Пароль">
        <BFormInput type="password" v-model.trim="account.password" />
      </BFormGroup>

      <p class="text-danger" v-if="errorMessage">{{ errorMessage }}</p>
    </BForm>
  </BModal>
</template>
