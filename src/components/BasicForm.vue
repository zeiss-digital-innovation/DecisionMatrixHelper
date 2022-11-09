<template>
  <div class="text-h4 q-mb-md"></div>
  <q-input
    :rules="[(val : string) => !!val || 'Field is required']"
    filled
    bottom-slots
    v-model="store.currentFeature.name"
    label="Name"
    counter
    maxlength="35"
    debounce="500"
  >
    <template v-slot:prepend>
      <q-icon name="badge"></q-icon>
    </template>
    <template v-slot:append>
      <q-icon
        v-if="store.currentFeature.name !== ''"
        name="close"
        @click="store.currentFeature.name = ''"
        class="cursor-pointer"
      ></q-icon>
    </template>

    <template v-slot:hint> Field hint </template>
  </q-input>

  <q-input
    filled
    type="textarea"
    v-model="store.currentFeature.description"
    label="Description"
    counter
    maxlength="1000"
    autogrow
    debounce="500"
  >
    <template v-slot:prepend>
      <q-icon name="description"></q-icon>
    </template>
    <template v-slot:append>
      <q-icon
        v-if="store.currentFeature.description !== ''"
        name="close"
        @click="store.currentFeature.description = ''"
        class="cursor-pointer"
      ></q-icon>
    </template>

    <template v-slot:hint> Field hint </template>
  </q-input>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useFeaturesStore } from 'stores/features';

const store = useFeaturesStore();

const props = defineProps<{
  id: string;
}>();
</script>
