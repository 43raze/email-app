<script>
import {
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
} from 'bootstrap-vue-next'

export default {
  components: { BModal, BForm, BFormGroup, BFormInput, BButton },
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
