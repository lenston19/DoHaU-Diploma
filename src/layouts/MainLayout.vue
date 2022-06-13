<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <q-icon name="las la-home" size="2rem"></q-icon>
          </q-avatar>
          <template v-if="$q.screen.lt.sm">ТСЖ</template>
          <template v-else>Товарищество собственников жилья</template>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      class="bg-primary text-white"
    >
      <div class="text-h5 text-center text-white q-my-md">Навигация</div>
      <q-separator />
      <EssentialLinks :links="mainLinks" />
      <div class="text-h5 text-center text-white q-my-md">Помещения</div>
      <EssentialLinks :links="premisesLinks" />
      <div class="text-h5 text-center text-white q-my-md">Услуги</div>
      <EssentialLinks :links="servicesLinks" />
      <div class="text-h5 text-center text-white q-my-md">Сотрудники</div>
      <EssentialLinks :links="employeesLinks" />
      <div class="text-h5 text-center text-white q-my-md">Счётчики</div>
      <EssentialLinks :links="countersLinks" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLinks from 'src/components/EssentialLinks.vue';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const mainLinks = [
  {
    name: 'Главная страница',
    url: '/main',
  },
  {
    name: 'Клиентская база',
    url: '/clients',
  },
  {
    name: 'Организации',
    url: '/organization',
  },
  {
    name: 'Филиалы',
    url: '/branches',
  },
];
const premisesLinks = [
  {
    name: 'Помещения',
    url: '/apartaments',
  },
  {
    name: 'Владельцы помещений',
    url: '/user-apartaments',
  },
];
const servicesLinks = [
  {
    name: 'Услуги',
    url: '/services',
  },
  {
    name: 'Категории услуг',
    url: '/',
  },
  {
    name: 'Стоимость услуг',
    url: '/',
  },
  {
    name: 'Заявки на услуги',
    url: '/',
  },
];
const employeesLinks = [
  {
    name: 'Сотрудники',
    url: '/employees',
  },
  {
    name: 'Должности',
    url: '/positions',
  },
];
const countersLinks = [
  {
    name: 'Счётчики',
    url: '/counters',
  },
  {
    name: 'Категории счётчиков',
    url: '/counters-type',
  },
  {
    name: 'Показания счётчиков',
    url: '/counters-readings',
  },
];
</script>
