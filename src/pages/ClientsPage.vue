<template>
  <q-page class="q-container">
    <div class="row q-mt-md justify-center">
      <div class="col-12 col-lg-12">
        <q-table
          style="height: 400px"
          title="Клиентская база"
          :rows="row"
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
                @click="editRow(props)"
                icon="las la-pencil-alt"
              ></q-btn>
              <q-btn
                dense
                round
                flat
                color="grey"
                @click="deleteRow(props)"
                icon="las la-trash"
              ></q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const columns = [
  {
    name: 'id',
    label: '№',
    field: 'id',
  },
  {
    name: 'name',
    label: 'ФИО',
    align: 'center',
    field: 'name',
  },
  {
    name: 'phone_number',
    label: 'Телефон',
    align: 'center',
    field: 'phone_number',
  },
  {
    name: 'email',
    label: 'Email',
    align: 'center',
    field: 'email',
  },
  {
    name: 'password',
    label: 'Пароль',
    align: 'center',
    field: 'password',
  },
  {
    name: 'adress',
    label: 'Адрес',
    align: 'center',
    field: 'adress',
  },
  {
    name: 'birth_date',
    label: 'Дата рождения',
    align: 'center',
    field: 'birth_date',
  },
  {
    name: 'brach_id',
    label: 'Номер филиала',
    align: 'center',
    field: 'brach_id',
  },
  {
    name: 'action',
    align: 'center',
    label: 'Действия',
    field: '',
  },
];

const row = [
  {
    id: 0,
    name: 'Зубенко Михаил Петрович',
    phone_number: '+79999999999',
    email: 'zakupki@com.com',
    password: 'asdasdasdasdasd',
    adress: 'фывфывфывфыв',
    birth_date: '19.04.2000',
    brach_id: 1,
  },
  {
    id: 1,
    name: 'Зубенко Михаил Петрович',
    phone_number: '+79999999999',
    email: 'zakupki@com.com',
    password: 'asdasdasdasdasd',
    adress: 'фывфывфывфыв',
    birth_date: '19.04.2000',
    brach_id: 1,
  },
  {
    id: 2,
    name: 'Зубенко Михаил Петрович',
    phone_number: '+79999999999',
    email: 'zakupki@com.com',
    password: 'asdasdasdasdasd',
    adress: 'фывфывфывфыв',
    birth_date: '19.04.2000',
    brach_id: 1,
  },
  {
    id: 3,
    name: 'Зубенко Михаил Петрович',
    phone_number: '+79999999999',
    email: 'zakupki@com.com',
    password: 'asdasdasdasdasd',
    adress: 'фывфывфывфыв',
    birth_date: '19.04.2000',
    brach_id: 1,
  },
];

const editRow = (params) => {
  console.log(params);
};

const deleteRow = (params) => {
  console.log(params);
};
</script>
