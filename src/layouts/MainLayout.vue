<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <q-icon name="las la-home" size="2rem"></q-icon>
          </q-avatar>
          Товарищество собственников жилья
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      class="bg-primary"
    >
      <div class="text-h5 text-center text-secondary q-my-md">
        Филиал
        <i class="las la-angle-down"></i>
      </div>
      <q-list>
        <q-item v-for="link in links" :key="link.name" :to="link.url" clickable>
          <q-item-section class="text-secondary text-h6">{{
            link.name
          }}</q-item-section>
          <q-item-section avatar>
            <q-icon color="secondary" name="las la-arrow-left" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const links = [
  {
    name: 'Логин',
    url: '/login',
  },
  {
    name: 'Клиентская база',
    url: '/clients',
  },
  {
    name: 'Логин',
    url: '/login',
  },
  {
    name: 'Логин',
    url: '/login',
  },
  {
    name: 'Логин',
    url: '/login',
  },
  {
    name: 'Логин',
    url: '/login',
  },
];
</script>
