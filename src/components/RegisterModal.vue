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
  <BModal id="register-modal" title="Регистрация">
    <BForm>
      <BFormGroup label="Никнейм">
        <BFormInput />
      </BFormGroup>

      <BFormGroup label="Пароль">
        <BFormInput type="password" />
      </BFormGroup>

      <BFormGroup label="Имя">
        <BFormInput />
      </BFormGroup>

      <BFormGroup label="Фамилия">
        <BFormInput />
      </BFormGroup>

      <BButton variant="success">Зарегистрироваться</BButton>
    </BForm>
  </BModal>
</template>
