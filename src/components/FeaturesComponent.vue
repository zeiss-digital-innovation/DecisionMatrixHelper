<template>
  <q-table
    flat
    title="Features"
    :rows="store.features"
    :columns="columns"
    :visible-columns="visibleColumns"
    :rows-per-page-options="[10]"
    row-key="features.id"
  >
    <template v-slot:top>
      <q-btn
        class="q-ma-sm"
        color="primary"
        icon="add"
        label=""
        @click="handleNewFeatureEntry"
        no-caps
      ></q-btn>
      <q-btn
        class="q-ma-sm"
        color="secondary"
        icon="delete"
        label=""
        @click="handleDeleteAllFeatures"
        no-caps
      ></q-btn>
      <!-- <q-btn
        class="q-ma-sm"
        color="accent"
        icon="refresh"
        label="Sync Alternatives"
        @click="handleSyncWithAlternatives"
        no-caps
        ><q-badge label="Beta" floating></q-badge
      ></q-btn> -->
      <q-space />

      <q-select
        v-model="visibleColumns"
        multiple
        outlined
        dense
        options-dense
        :display-value="$q.lang.table.columns"
        emit-value
        map-options
        :options="columns"
        option-value="name"
        options-cover
        style="min-width: 150px"
      ></q-select>
      <q-btn
        class="q-ml-md"
        color="primary"
        icon-right="archive"
        label="Export to csv"
        no-caps
      ></q-btn>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props" auto-width>
          <q-input
            style="min-width: 128px"
            label="Name"
            v-model="props.row.name"
            type="textarea"
            :readonly="isReadOnly"
            autogrow
            borderless
            dense
          ></q-input>
        </q-td>
        <q-td key="description" :props="props">
          <q-input
            label="Description"
            v-model="props.row.description"
            type="textarea"
            :readonly="isReadOnly"
            autogrow
            borderless
            dense
          ></q-input> </q-td
        ><q-td key="isExclusive" :props="props" auto-width>
          <q-checkbox v-model="props.row.isExclusive" />
        </q-td>
        <q-td key="status" :props="props" auto-width>
          <q-select
            style="min-width: 180px"
            label="Priority"
            map-options
            v-model="props.row.status"
            :options="options"
            :disable="props.row.isExclusive"
            emit-value
            borderless
            dense
            :clearable="props.row.status != Status.undefined"
            @clear="props.row.status = Status.undefined"
            @update:model-value="handleStatusChange(props.row)"
          ></q-select>
        </q-td>

        <q-td key="delete" :props="props" auto-width>
          <q-btn
            class="q-ml-md"
            color="secondary"
            icon-right="delete"
            no-caps
            @click="handleDeleteTableEntry(props.row)"
          ></q-btn
        ></q-td>
      </q-tr>
    </template>

    <template v-slot:bottom-row></template>
  </q-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFeaturesStore } from 'src/stores/features';
import { Status } from 'components/StatusEnum';
import { v4 as uuid } from 'uuid';
import { Feature } from './models';
import { useAlternativesStore } from 'src/stores/alternative';
const store = useFeaturesStore();
const alternativesStore = useAlternativesStore();

const visibleColumns = ref([
  'name',
  'description',
  'status',
  'delete',
  'isExclusive',
]);
const isReadOnly = ref(false);

// const options = Object.values(Status).filter((item) =>
//   isNaN(parseInt(item.toString()))
// );

const options = [
  {
    label: Status[Status['very important']],
    value: Status['very important'],
  },
  {
    label: Status[Status.important],
    value: Status.important,
  },
  {
    label: Status[Status['less important']],
    value: Status['less important'],
  },
  {
    label: Status[Status.unimportant],
    value: Status.unimportant,
  },
  {
    label: Status[Status.undefined],
    value: Status.undefined,
  },
];

const columns = [
  {
    name: 'name',
    align: 'left',
    label: 'Features',
    field: 'name',
    sortable: true,
  },
  {
    name: 'description',
    align: 'left',
    label: 'Description (editable)',
    field: 'description',
    sortable: true,
  },
  {
    name: 'isExclusive',
    label: 'Exclusive Feature',
    field: 'isExclusive',
    sortable: true,
  },
  {
    name: 'status',
    align: 'center',
    label: 'Status',
    field: 'status',
    sortable: true,
  },

  {
    name: 'delete',
    label: '',
    field: 'delete',
  },
];

function handleStatusChange(feature: Feature) {
  console.log(feature);
  alternativesStore.updateAlternativeWithFeature(feature);
}

function handleNewFeatureEntry() {
  if (
    store.features.length > 0 &&
    store.features[store.features.length - 1].name === 'new Feature'
  )
    return;
  const newFeature = {
    id: uuid(),
    name: 'Feature ' + store.features.length,
    description: 'new Feature description',
    status: Status.undefined,
    isExclusive: false,
  };
  store.addFeature(newFeature);
  alternativesStore.updateAlternativeWithFeature(newFeature);
}

function handleDeleteTableEntry(feature: Feature) {
  store.deleteFeature(feature);
  alternativesStore.deleteAssessmentWithFeature(feature);
}
function handleDeleteAllFeatures() {
  let features = [...store.features];
  console.log(features);
  store.deleteAllFeatures();
  features.forEach((feat) =>
    alternativesStore.deleteAssessmentWithFeature(feat)
  );
}

function handleSyncWithAlternatives() {
  let features = [...store.features];
  features.forEach((feat) => {
    alternativesStore.updateAlternativeWithFeature(feat);
  });
}
</script>
