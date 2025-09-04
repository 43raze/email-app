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
    return { account: initAccount() }
  },

  methods: {
    submitAccount() {
      this.$emit('submit-account', { ...this.account })
      this.account = initAccount()
    },
  },
}
</script>

<template>
  <BModal v-bind:model-value="true" id="register-modal" title="Регистрация">
    <BForm @submit.prevent="submitAccount">
      <BFormGroup label="Никнейм">
        <BFormInput v-model="account.nickname" />
      </BFormGroup>

      <BFormGroup label="Пароль">
        <BFormInput v-model="account.password" type="password" />
      </BFormGroup>

      <BFormGroup label="Имя">
        <BFormInput v-model="account.firstName" placeholder="Enter your name" />
      </BFormGroup>

      <BFormGroup label="Фамилия" class="mb-2">
        <BFormInput v-model="account.lastName" />
      </BFormGroup>

      <BButton type="submit" variant="success"> Зарегистрироваться </BButton>
    </BForm>
  </BModal>
</template>
