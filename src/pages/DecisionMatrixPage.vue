<template>
  <q-page
    padding
    class="bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <q-table
      title="Decision Matrix"
      :columns="columns"
      :rows="featuresStore.features"
      row-key="featuresStore.features.id"
    >
      <template v-slot:bottom-row>
        <q-tr>
          <q-td colspan="100%"> Bottom row </q-td>
        </q-tr>
      </template></q-table
    ></q-page
  >
</template>

<script setup lang="ts">
import { Feature, Alternative } from 'src/components/models';
import { Status } from 'src/components/StatusEnum';
import { useFeaturesStore } from 'src/stores/features';
import { useToolsStore } from 'src/stores/tools';

const featuresStore = useFeaturesStore();
const toolsStore = useToolsStore();

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Criteria',
    align: 'left',
    field: (row: Alternative) => row.name,
    format: (val: string) => `${val}`,
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'Description',
    align: 'left',
    field: (row: Alternative) => row.description,
    format: (val: string) => `${val}`,
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'Importance',
    align: 'left',
    field: (row: Feature) => Status[row.status] + ' (' + row.status + ')',
    format: (val: string) => `${val}`,
    sortable: true,
  },
];

toolsStore.tools.forEach((tool) => {
  columns.push({
    name: 'name',
    required: true,
    label: tool.name,
    align: 'left',
    field: (row) => tool.description,
    format: (val) => `${val}`,
    sortable: true,
  });
});
</script>
