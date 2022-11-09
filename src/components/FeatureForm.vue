<template>
  <!-- dirty workaround -->
  <q-page style="min-height: 0px">
    <BasicForm v-model:id="store.currentFeature.id" />

    <q-select
      filled
      bottom-slots
      emit-value
      v-model="store.currentFeature.status"
      :options="status"
      label="Status"
    >
      <template v-slot:prepend>
        <q-icon name="priority_high" @click.stop />
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click.stop="store.currentFeature.status = Status.undefined"
          class="cursor-pointer"
        />
      </template>

      <template v-slot:hint> Field hint </template>
    </q-select>

    <q-toggle
      v-model="store.currentFeature.isExclusive"
      label="Exclusive Feature"
    ></q-toggle>
  </q-page>
</template>

<script lang="ts" setup>
import { Status } from './StatusEnum';
import BasicForm from 'src/components/BasicForm.vue';
import { useFeaturesStore } from 'stores/features';

const store = useFeaturesStore();

const props = defineProps<{
  id: string;
}>();
//const feature = store.currentFeature;
const status = Object.values(Status).filter((item) =>
  isNaN(parseInt(item.toString()))
);
</script>
