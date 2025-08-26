<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue-next'

export default {
  components: { BListGroup, BListGroupItem },
}
</script>

<template>
  <div class="border-end bg-light vh-100 p-3" style="width: 220px">
    <BListGroup flush>
      <BListGroupItem active variant="secondary">Входящие</BListGroupItem>
      <BListGroupItem>Отправленные</BListGroupItem>
      <BListGroupItem>Черновики</BListGroupItem>
      <BListGroupItem>Корзина</BListGroupItem>
    </BListGroup>
  </div>
</template>
