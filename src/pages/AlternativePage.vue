<template>
  <div class="q-pa-xl">
    <q-table
      :rows="store.tools"
      :columns="columns"
      :visible-columns="visibleColumns"
      :rows-per-page-options="[10]"
      row-key="features.id"
    >
      <template v-slot:top>
        <q-label class="text-h4 text-primary q-mr-md"></q-label>
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
            {{ props.row.name }}
            <q-popup-edit
              v-model.number="props.row.name"
              buttons
              label-set="Save"
              label-cancel="Close"
              :validate="nameValidation"
              @hide="nameValidation"
              v-slot="scope"
            >
              <q-input
                type="text"
                v-model.number="scope.value"
                hint="Enter a feature's name between 4 and 20 characters long"
                :error="errorNames"
                :error-message="errorMessageNames"
                dense
                autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="description" :props="props" auto-width>
            <q-label>{{ props.row.description }}</q-label>
          </q-td>
        </q-tr>
      </template>

      <template v-slot:bottom-row
        ><q-btn
          class="q-ma-md"
          color="primary"
          icon="add"
          label=""
          round
          dense
          @click="editorCard = true"
          no-caps
        ></q-btn
      ></template>
    </q-table>
  </div>

  <q-dialog v-model="editorCard">
    <q-card>
      <q-card-section>
        <FeatureForm v-model:id="store.currentAlternative.id"></FeatureForm>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Add Feature" />
        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FeatureForm from 'components/FeatureForm.vue';
import { Status } from 'components/StatusEnum';
import { useToolsStore } from 'src/stores/tools';

const store = useToolsStore();

const errorNames = ref(false);
const errorMessageNames = ref('');
const visibleColumns = ref(['name', 'description']);
const editorCard = ref(false);

function nameValidation(val: string) {
  if (val.length < 4 || val.length > 20) {
    errorNames.value = true;
    errorMessageNames.value =
      'The Name must be between 4 and 20 characters long!';
    return false;
  }
  errorNames.value = false;
  errorMessageNames.value = '';
  return true;
}
const columns = [
  {
    name: 'name',
    align: 'left',
    label: 'Alternative',
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
];
</script>
