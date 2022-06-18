<template>
  <q-page class="q-container">
    <div class="row q-my-md">
      <div class="col-12 col-lg-4">
        <q-btn color="primary" @click="isCreate = true">Добавить</q-btn>
      </div>
    </div>
    <div class="row q-my-md justify-center">
      <div class="col-12 col-lg-12">
        <q-table
          style="min-height: 400px; height: fit-content"
          title="Клиентская база"
          :rows="rows"
          :columns="columns"
          row-key="id"
          virtual-scroll
          :rows-per-page-options="[10]"
        >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn
                color="orange"
                dense
                round
                flat
                @click="(editableId = props.row.id), (isEdit = true)"
                icon="las la-pencil-alt"
              ></q-btn>
              <q-btn
                dense
                color="red"
                round
                @click="deleteById(props.row.id)"
                flat
                icon="las la-trash"
              >
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
    <q-dialog v-model="isCreate">
      <q-card style="max-width: 600px" class="full-width">
        <q-card-section>
          <div class="text-h6">Создать</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <form ref="createForm">
            <template
              v-for="field in columns.filter(
                (c) => c.name !== 'id' && c.name !== 'action'
              )"
              :key="field.name"
            >
              <p>{{ field.label }}</p>
              <input class="full-width q-mb-md q-pa-sm" :name="field.name" />
            </template>
          </form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            @click="create($refs.createForm)"
            flat
            label="Создать"
            class="bg-green"
            color="white"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isEdit">
      <q-card style="max-width: 600px" class="full-width">
        <q-card-section>
          <div class="text-h6">Редактировать</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <form ref="updateForm">
            <template
              v-for="field in columns.filter(
                (c) => c.name !== 'id' && c.name !== 'action'
              )"
              :key="field.name"
            >
              <p>{{ field.label }}</p>
              <input
                class="full-width q-mb-md"
                :value="rows.filter((r) => r.id === editableId)[0][field.name]"
                :name="field.name"
              />
            </template>
          </form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            @click="updateById(editableId, $refs.updateForm)"
            flat
            label="Изменить"
            class="bg-orange"
            color="white"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { graphqlRequest } from 'src/utils/crud';
import { ref, onMounted } from 'vue';
import { User } from 'src/@types';
const rows = ref<User[]>([]);
const columns = [
  {
    name: 'id',
    align: 'center',
    label: '№',
    field: 'id',
    sortable: true,
  },
  {
    name: 'name',
    align: 'center',
    label: 'Имя',
    field: 'name',
    sortable: true,
  },
  {
    name: 'email',
    align: 'center',
    label: 'E-mail',
    field: 'email',
    sortable: true,
  },
  {
    name: 'password',
    align: 'center',
    label: 'Пароль',
    field: 'password',
  },
  {
    name: 'phoneNumber',
    align: 'center',
    label: 'Телефон',
    field: 'phoneNumber',
    sortable: true,
  },
  {
    name: 'birthDate',
    align: 'center',
    label: 'Дата рождения',
    field: 'birthDate',
    sortable: true,
  },
  {
    name: 'address',
    align: 'center',
    label: 'Адрес',
    field: 'address',
    sortable: true,
  },
  {
    name: 'orgId',
    align: 'center',
    label: 'Организация',
    field: 'orgId',
    sortable: true,
  },
  {
    name: 'action',
    align: 'center',
    label: 'Действие',
    field: 'action',
  },
];
const isEdit = ref(false);
const isCreate = ref(false);
const editableId = ref();

const read = async () => {
  const response = await graphqlRequest(`query {
      showUserInfo {
        id
        name
        email
        password
        phoneNumber
        birthDate
        address
        orgId
      }
  }`);
  rows.value = response.data.showUserInfo;
};
const deleteById = async (id: number) => {
  await graphqlRequest(`mutation deleteUser{
      deleteUser(id:${id})
    }`);
  await read();
};
const updateById = async (id: number, form: any) => {
  let updatedData = {};
  new FormData(form).forEach((val, key) => {
    updatedData = {
      [key]: val,
      ...updatedData,
    };
  });
  const res = await graphqlRequest(`mutation{
  updateUser(
    id: ${id},
    name:" ${updatedData.name}",
    email: "${updatedData.email}",
    password: "${updatedData.password}",
    phoneNumber: "${updatedData.phoneNumber}",
    birthDate: "${updatedData.birthDate}",
    address: "${updatedData.address}",
    orgId: ${updatedData.orgId})
}`);
  console.log(res);
  editableId.value = undefined;
  await read();
};
const create = async (form: any) => {
  console.log('Hello there');

  let newData = {};
  new FormData(form).forEach((val, key) => {
    newData = {
      [key]: val,
      ...newData,
    };
  });
  let q = `mutation createUser($userInput: UserDataInput!){
      createUser(userInput:{
        name:" ${newData.name}",
        email: "${newData.email}",
        password: "${updatedData.password}",
        phoneNumber: "${newData.phoneNumber}",
        birthDate: "${newData.birthDate}",
        address: "${newData.address}",
        orgId: ${newData.orgId}})}`;
  const res = await graphqlRequest(q);
  console.log(res);
  await read();
};
onMounted(() => {
  read();
});
</script>
