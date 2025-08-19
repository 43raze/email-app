<script></script>

<template>
  <div class="topbar">
    <button
      class="btn btn-light d-md-none me-2"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasMenu"
    >
      &#9776;
    </button>
    <h5>Outlook clone</h5>

    <input
      type="text"
      class="form-control form-control-sm w-auto"
      placeholder="Поиск"
    />
  </div>

  <div class="container-fluid h-100 mt-4">
    <div class="row h-100">
      <div class="col-2 d-none d-md-block sidebar-desktop">
        <h6>Папки</h6>

        <ul class="nav flex-column">
          <li class="nav-item"><a href="#" class="nav-link">Входящие</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link">Отправленные</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">Черновики</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Спам</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Корзина</a></li>
        </ul>

        <button class="btn btn-primary w-100 mt-3">Новое письмо</button>
      </div>

      <div class="col-4 col-md-4 mail-list">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action mail-item">
            <div class="d-flex w-100 justify-content-between">
              <h6 class="mb-1">Иван Петров</h6>

              <small>10:24</small>
            </div>

            <p class="mb-1">Тема письма: Встреча завтра</p>

            <small>Привет, хотел уточнить по поводу встречи...</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action mail-item">
            <div class="d-flex w-100 justify-content-between">
              <h6 class="mb-1">HR Отдел</h6>

              <small>Вчера</small>
            </div>

            <p class="mb-1">Приглашение на собеседование</p>

            <small>Уважаемый кандидат, приглашаем Вас...</small>
          </a>
        </div>
      </div>

      <div class="col-8 col-md-6 mail-content">
        <h4>Тема письма: Встреча завтра</h4>

        <p><strong>От:</strong> Иван Петров &lt;ivan@example.com&gt;</p>

        <hr />

        <p>
          Привет, хотел уточнить по поводу встречи завтра. Удобно ли в 11:00?
        </p>
      </div>
    </div>
  </div>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Меню</h5>

      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>

    <div class="offcanvas-body">
      <h6>Папки</h6>
      <ul class="nav flex-column">
        <li class="nav-item"><a href="#" class="nav-link">Входящие</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Отправленные</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Черновики</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Спам</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Корзина</a></li>
      </ul>

      <button class="btn btn-primary w-100 mt-3">Новое письмо</button>
    </div>
  </div>
</template>
