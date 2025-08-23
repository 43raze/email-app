<script></script>

<template>
  <BContainer fluid class="vh-100 d-flex flex-column">
    <BNavbar type="dark" variant="primary">
      <BNavbarBrand href="#">📧 MyOutlook</BNavbarBrand>
    </BNavbar>

    <!-- Основная часть -->
    <BRow class="flex-grow-1">
      <!-- Левая панель -->
      <BCol cols="2" class="border-end bg-light">
        <div class="p-2">
          <BButton variant="primary" block class="mb-3"
            >✉️ Новое письмо</BButton
          >
          <BListGroup>
            <BListGroupItem active>Входящие</BListGroupItem>
            <BListGroupItem>Отправленные</BListGroupItem>
            <BListGroupItem>Черновики</BListGroupItem>
            <BListGroupItem>Удалённые</BListGroupItem>
          </BListGroup>
        </div>
      </BCol>

      <BCol cols="3" class="border-end overflow-auto">
        <BListGroup flush>
          <BListGroupItem>
            <strong>Иван Петров</strong> <br />
            Тема письма №1
          </BListGroupItem>
          <BListGroupItem>
            <strong>Google</strong> <br />
            Подтвердите вход
          </BListGroupItem>
          <BListGroupItem>
            <strong>Мария</strong> <br />
            Встреча завтра
          </BListGroupItem>
        </BListGroup>
      </BCol>

      <BCol cols="7" class="p-3">
        <BCard>
          <h5>Тема письма №1</h5>
          <p><strong>От:</strong> Иван Петров</p>
          <hr />
          <p>
            Привет! Это тестовое письмо в стиле Outlook. Тут можно отобразить
            текст письма и вложения.
          </p>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>
