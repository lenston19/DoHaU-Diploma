<template>
  <q-page class="q-container">
    <div class="row q-mt-md justify-center">
      <div class="col-12 col-lg-12">
        <!-- <q-table
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
        </q-table> -->
        {{ clientsList }}
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { User } from 'src/@types';
const props = defineProps<{
  worker: () => { data: User[] };
}>();

const { data: clientsList } = props.worker();
</script>
