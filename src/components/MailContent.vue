<script>
import { BFormInput, BFormTextarea, BFormGroup } from 'bootstrap-vue-next'

export default {
  components: { BFormInput, BFormTextarea, BFormGroup },

  data() {
    return {
      subject: 'Заголовок письма',
      from: 'sender@mail.com',
      to: 'you@mail.com',
      body: 'Это пример содержимого письма. Тут будет текст выбранного сообщения.',
    }
  },
}
</script>

<template>
  <div class="p-3 flex-grow-1">
    <BFormGroup label="От:" label-for="fromInput" class="mb-3">
      <BFormInput
        id="fromInput"
        v-model="from"
        type="email"
        placeholder="Введите адрес отправителя"
      />
    </BFormGroup>

    <BFormGroup label="Кому:" label-for="toInput" class="mb-3">
      <BFormInput
        id="toInput"
        v-model="to"
        type="email"
        placeholder="Введите адрес получателя"
      />
    </BFormGroup>

    <BFormGroup label="Тема:" label-for="subjectInput" class="mb-3">
      <BFormInput
        id="subjectInput"
        v-model="subject"
        placeholder="Введите тему письма"
      />
    </BFormGroup>

    <hr />

    <BFormTextarea
      v-model="body"
      rows="10"
      max-rows="20"
      placeholder="Введите текст письма..."
      class="email-textarea"
    />
  </div>
</template>
