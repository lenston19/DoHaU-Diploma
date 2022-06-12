<template>
  <q-page class="q-container flex items-center justify-evenly">
    <div class="row justify-center">
      <div class="col-12 col-lg-10">
        <q-card>
          <q-card-section>
            <div class="text-h5">
              Добро пожаловать на веб-платформу учёта услуг жкх “Товарищество собственников жилья”
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">
              На данном портале вы можете редактировать и просматривать любую интересующую вас информацию по вашему
              филиалу перейдя по ссылкам ниже или открыв выпадающее меню слева
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-h5">
              Основные таблицы представлены на страницах:
            </div>
          </q-card-section>
          <q-card-section class="row q-col-gutter-md">
            <div v-for="link in links" :key="link.name" class="col-12 col-md-3 col-lg-3 ">
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
    url: '/',
    name: 'Сотрудники'
  },
  {
    url: '/',
    name: 'Услуги'
  },
  {
    url: '/',
    name: 'Помещения'
  },
  {
    url: '/',
    name: 'Филиалы'
  },
  {
    url: '/',
    name: 'Счётчики'
  },
]
</script>
