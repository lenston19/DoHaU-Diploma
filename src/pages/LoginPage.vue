<template>
  <q-page class="q-container">
    <div class="row auth-row justify-center items-center">
      <div class="col-12 col-sm-8 col-md-6">
        <q-form @submit="auth()">
          <q-card bordered class="auth-card q-pa-md">
            <q-card-section>
              <div class="text-h4 text-bold">Вход</div>
            </q-card-section>

            <q-card-section class="q-pa-sm">
              <q-input outlined v-model="login" :rules="[(val) => !!val || 'Поле обязательное для заполнения']"
                label="Номер телефона или Email" class="q-mb-sm" />
              <q-input type="password" outlined v-model="password"
                :rules="[(val) => !!val || 'Поле обязательное для заполнения']" label="Пароль" />
            </q-card-section>

            <q-card-actions>
              <q-btn label="Войти" color="accent" type="submit" class="full-width q-pa-md" />
            </q-card-actions>
          </q-card>
        </q-form>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const $router = useRouter()

const login = ref('');
const password = ref('');

const auth = () => {

  if (login.value === 'test' && password.value === 'test123') {
    $router.push('/main')
  } else {
    login.value = ''
    password.value = ''
  }
}
</script>
