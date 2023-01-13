<template>
  <q-page padding>
    <q-table
      flat
      title="Results"
      :rows="rows"
      :columns="columns"
      row-key="feature"
      :pagination="initialPagination"
      separator="vertical"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td :props="props" v-for="(col, index) in props.row" :key="index"
            >{{ col }}
          </q-td>
        </q-tr>
      </template>

      <template v-slot:bottom-row>
        <q-tr>
          <td class="bg-grey-2"><b>Sum:</b></td>
          <q-td
            class="bg-grey-2"
            align="center"
            v-for="(alternative, index) in store.alternatives"
            :key="index"
            >{{ alternative.score }}</q-td
          >
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
import { useAlternativesStore } from 'src/stores/alternative';
import { useFeaturesStore } from 'src/stores/features';
import { ref } from 'vue';

const store = useAlternativesStore();
const featureStore = useFeaturesStore();

// Create a map of feature names to scores, with the scores for each alternative
const featureScores = store.alternatives.reduce((acc: any, alternative) => {
  alternative.assessments.forEach((assessment) => {
    const featureName = featureStore.getFeatureById(assessment.feature.id).name;
    if (!acc[featureName]) {
      acc[featureName] = {
        feature: featureName, // Use the feature name as the value for the first column in the row
      };
    }

    // Add the score for the current alternative to the scores for the current feature
    if (assessment.feature.isExclusive)
      acc[featureName][alternative.name] = assessment.score * 5;
    else {
      acc[featureName][alternative.name] =
        assessment.score * assessment.feature.status;
    }
  });
  return acc;
}, {});

// Create the rows for the table by extracting the values from the featureScores map
const rows = Object.values(featureScores);

const cols = ref(
  store.alternativeNames.map((alternativeName) => ({
    name: alternativeName,
    label: alternativeName,
    field: 'name',
    align: 'center',
  }))
);
const columns = [
  { name: 'feature', label: 'Feature', field: 'feature', align: 'left' },
  ...cols.value,
];

const initialPagination = {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 10,
};
</script>
