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
  firstName: '',
  lastName: '',
})

export default {
  components: { BModal, BForm, BFormGroup, BFormInput, BButton },

  emits: ['submit-account'],

  data() {
    return {
      account: initAccount(),
      showModal: false,
      errorMessage: '',
    }
  },

  methods: {
    submitAccount() {
      const { nickname, password, firstName, lastName } = this.account

      if (!nickname || !password || !firstName || !lastName) {
        this.errorMessage = 'Все поля обязательны для заполнения'
        return
      }

      this.$emit('submit-account', { ...this.account })

      this.showModal = false

      this.account = initAccount()
      this.errorMessage = ''
    },
  },
}
</script>

<template>
  <BModal
    v-model="showModal"
    id="register-modal"
    title="Регистрация"
    @ok.prevent="submitAccount"
  >
    <BForm @submit.prevent="submitAccount">
      <BFormGroup label="Никнейм">
        <BFormInput v-model.trim="account.nickname" />
      </BFormGroup>

      <BFormGroup label="Пароль">
        <BFormInput v-model.trim="account.password" type="password" />
      </BFormGroup>

      <BFormGroup label="Имя">
        <BFormInput
          v-model.trim="account.firstName"
          placeholder="Enter your name"
        />
      </BFormGroup>

      <BFormGroup label="Фамилия" class="mb-2">
        <BFormInput v-model.trim="account.lastName" />
      </BFormGroup>

      <p v-if="errorMessage" class="text-danger mb-2">
        {{ errorMessage }}
      </p>
    </BForm>
  </BModal>
</template>
