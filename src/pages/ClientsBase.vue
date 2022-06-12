<template>
  <q-page class="q-container">
    <q-btn @click="isCreate = true">Добавить</q-btn>
    <div class="row q-mt-md justify-center">
      <div class="col-12 col-lg-12">
        <q-table
          style="height: 400px;"
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
                dense
                round
                flat
                color="grey"
                @click="(editableId = props.row.id), (isEdit = true)"
                icon="las la-pencil-alt"
              ></q-btn>
              <q-btn
                dense
                round
                @click="deleteById(props.row.id)"
                flat
                color="grey"
                icon="las la-trash"
              ></q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
    <q-dialog v-model="isCreate">
      <q-card>
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
              <input :name="field.name" />
            </template>
          </form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            @click="create($refs.createForm)"
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isEdit">
      <q-card>
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
            label="OK"
            color="primary"
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
  const res = await graphqlRequest(`mutation updateUser($id: Int!, $userInput: UserDataInput!){
      updateUser(id:${id}, userInput:{name:" ${updatedData.name}",email: "${updatedData.email}",phoneNumber: "${updatedData.phoneNumber}",birthDate: "${updatedData.birthDate}",address: "${updatedData.address}",orgId: ${updatedData.orgId}})
    }`);
  console.log(res);
  editableId.value = undefined;
  await read();
};
const create = async (form: any) => {
  let newData = {};
  new FormData(form).forEach((val, key) => {
    newData = {
      [key]: val,
      ...newData,
    };
  });
  let q = `mutation createUser($userInput: UserDataInput!){
      createUser(userInput:{name:" ${newData.name}",email: "${newData.email}",phoneNumber: "${newData.phoneNumber}",birthDate: "${newData.birthDate}",address: "${newData.address}",orgId: ${newData.orgId}})
    }`;

  const res = await graphqlRequest(q);
  console.log(res);
  await read();
};
onMounted(() => {
  read();
});
</script>
