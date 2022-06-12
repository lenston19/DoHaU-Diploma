<template>
  <q-list>
    <q-item v-for="link in links" :key="link.name" :to="link.url" active-class="bg-accent" clickable>
      <q-item-section class="text-h6">{{
          link.name
      }}</q-item-section>
      <q-item-section avatar>
        <q-icon color="white" name="las la-arrow-left" />
      </q-item-section>
    </q-item>
  </q-list>
  <q-separator />
</template>

<script setup lang="ts">
import { navigationLinks } from 'types/index'

defineProps<{
  links: navigationLinks[]
}>()

</script>
