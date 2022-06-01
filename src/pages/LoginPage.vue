<template>
  <q-page class="q-container">
    <div class="row auth-row justify-center items-center">
      <div class="col-12 col-sm-8 col-md-6">
        <q-card bordered class="auth-card q-pa-md">
          <q-card-section>
            <div class="text-h4 text-bold">Вход</div>
          </q-card-section>

          <q-card-section class="q-pa-sm">
            <q-input
              outlined
              v-model="login"
              :rules="[(val) => !!val || 'Поле обязательное для заполнения']"
              label="Номер телефона или Email"
              class="q-mb-sm"
            />
            <q-input
              type="password"
              outlined
              v-model="password"
              :rules="[(val) => !!val || 'Поле обязательное для заполнения']"
              label="Пароль"
            />
          </q-card-section>

          <q-card-actions>
            <q-btn label="Войти" color="accent" class="full-width q-pa-md" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const login = ref('');
const password = ref('');
</script>
