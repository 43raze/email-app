<script>
import { randId } from '@/model/shared'
import {
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
} from 'bootstrap-vue-next'

const currentAccount = () => ({
  id: randId,
  nickname: '',
  password: '',
  firstName: '',
  lastName: '',
})

export default {
  components: { BModal, BForm, BFormGroup, BFormInput, BButton },
  emits: ['submit-registration'],

  data() {
    return { account: currentAccount() }
  },

  methods: {
    submitRegister() {},
  },
}
</script>

<template>
  <BModal v-bind:model-value="true" id="register-modal" title="Регистрация">
    <BForm @submit.prevent="submitRegister">
      <BFormGroup label="Никнейм">
        <BFormInput :value="nickname" @input="nickname = $event.target.value" />
      </BFormGroup>

      <BFormGroup label="Пароль">
        <BFormInput
          type="password"
          :value="password"
          @input="password = $event.target.value"
        />
      </BFormGroup>

      <BFormGroup label="Имя">
        <BFormInput
          placeholder="Enter your name"
          :value="firstName"
          @input="firstName = $event.target.value"
        />
      </BFormGroup>

      <BFormGroup label="Фамилия" class="mb-2">
        <BFormInput :value="lastName" @input="lastName = $event.target.value" />
      </BFormGroup>

      <BButton type="submit" variant="success"> Зарегистрироваться </BButton>
    </BForm>
  </BModal>
</template>
