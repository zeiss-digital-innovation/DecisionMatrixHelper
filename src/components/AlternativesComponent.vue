<template>
  <q-table
    flat
    title="Alternatives"
    :rows="store.alternatives"
    :columns="columns"
    :rows-per-page-options="[10]"
    row-key="id"
  >
    <template v-slot:top>
      <q-btn
        class="q-ma-sm"
        color="primary"
        icon="add"
        label=""
        @click="handleNewAlternativeEntry"
        no-caps
      ></q-btn>
      <q-btn
        class="q-ma-sm"
        color="secondary"
        icon="delete"
        label=""
        @click="handleDeleteAllAlternatives"
        no-caps
      ></q-btn>
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
          />
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
          ></q-input>
        </q-td>
        <q-td key="assessment" :props="props">
          <q-btn
            size="sm"
            color="accent"
            round
            dense
            @click="props.expand = !props.expand"
            :icon="props.expand ? 'remove' : 'add'"
          />
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
      <q-tr v-show="props.expand" :props="props">
        <q-td colspan="100%">
          <q-list
            dense
            v-for="assessment in props.row.assessments"
            :key="assessment.id"
          >
            <q-item class="justify-evenly">
              <q-input
                v-model="
                  featureStore.getFeatureById(assessment.feature.id).name
                "
                :input-class="
                  featureStore.getFeatureById(assessment.feature.id).isExclusive
                    ? 'text-warning'
                    : ''
                "
                readonly
                type="text"
                borderless
              ></q-input>

              <q-input
                style="min-width: 350px"
                type="textarea"
                v-model="assessment.justification"
                autogrow
              ></q-input>

              <q-rating
                v-model="assessment.score"
                size="md"
                class="q-ml-md"
              ></q-rating
            ></q-item>
          </q-list>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';
import { Alternative, Assessment } from './models';
import { useAlternativesStore } from 'src/stores/alternative';
import { useFeaturesStore } from 'src/stores/features';

const store = useAlternativesStore();
const featureStore = useFeaturesStore();
const isReadOnly = ref(false);
const visibleColumns = ref(['name', 'description', 'status', 'assessment']);
const columns = [
  {
    name: 'name',
    align: 'left',
    label: 'Alternatives',
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
    name: 'assessment',
    align: 'left',
    label: 'Features',
    field: (row: Alternative) =>
      row.assessments.filter((element) => element.feature.id === row.id)[0]
        ?.justification,
    sortable: true,
  },
  {
    name: 'delete',
    align: 'left',
    label: 'Delete',
    field: 'delete',
    sortable: false,
  },
];

function handleNewAlternativeEntry() {
  if (
    store.alternatives.length > 0 &&
    store.alternatives[store.alternatives.length - 1].name === 'new Alternative'
  )
    return;

  let assessments = new Array(featureStore.features.length) as Assessment[];

  for (let i = 0; i < featureStore.features.length; i++)
    assessments[i] = {
      id: uuid(),
      feature: featureStore.features[i],
      justification: 'justification ' + i,
      score: 0,
    };

  store.addAlternative({
    id: uuid(),
    name: 'Alternative ' + store.alternatives.length,
    description: 'new Alternative description',
    assessments: assessments,
    score: 0,
  });
}

function handleDeleteTableEntry(alternative: Alternative) {
  store.deleteAlternative(alternative);
}

function handleDeleteAllAlternatives() {
  store.deleteAllAlternatives();
}
</script>
