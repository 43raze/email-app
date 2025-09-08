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
}
</script>

<template>
  <BModal id="login-modal" title="Вход">
    <BForm>
      <BFormGroup label="Никнейм">
        <BFormInput />
      </BFormGroup>

      <BFormGroup label="Пароль">
        <BFormInput type="password" />
      </BFormGroup>

      <BButton variant="primary">Войти</BButton>
    </BForm>
  </BModal>
</template>
