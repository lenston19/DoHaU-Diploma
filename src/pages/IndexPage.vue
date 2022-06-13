<template>
  <q-page class="q-container flex items-center justify-evenly">
    <div class="row justify-center">
      <div class="col-12 col-lg-10">
        <q-card>
          <q-card-section>
            <div class="text-h5 text-center">
              Добро пожаловать на веб-платформу учёта услуг ЖКХ <br /><b
                >“Товарищество собственников жилья”</b
              >
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-justify">
              На данном портале вы можете редактировать и просматривать любую
              интересующую вас информацию по вашему филиалу перейдя по ссылкам
              ниже или открыв выпадающее меню слева
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-h5">
              Основные таблицы представлены на страницах:
            </div>
          </q-card-section>
          <q-card-section class="row q-col-gutter-md">
            <div
              v-for="link in links"
              :key="link.name"
              class="col-12 col-md-3 col-lg-3"
            >
              <q-btn :to="link.url" class="full-width" color="primary">
                {{ link.name }}
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const links = [
  {
    url: '/employees',
    name: 'Сотрудники',
  },
  {
    url: '/services',
    name: 'Услуги',
  },
  {
    url: '/apartaments',
    name: 'Помещения',
  },
  {
    url: '/branches',
    name: 'Филиалы',
  },
  {
    url: '/counters',
    name: 'Счётчики',
  },
];
</script>
