<template>
  <q-card style="width: 80vw" flat class="bg-grey-2">
    <q-card-section>
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <!--  hack for blank space left top -->
        <div style="width: 16vw"></div>
        <q-tab
          v-for="alternative in store.alternatives"
          :key="alternative.id"
          :name="alternative.name"
          :label="alternative.name"
          ><q-badge>{{ alternative.score }}</q-badge></q-tab
        >
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab">
        <q-tab-panel :name="tab" class="q-pa-none">
          <q-splitter v-model="splitterModel">
            <template v-slot:before>
              <q-tabs
                v-model="innerTab"
                inline-label
                vertical
                class="text-teal"
              >
                <q-tab
                  v-for="assessment in store.getAlternativeByName(tab)
                    .assessments"
                  :key="assessment.id"
                  :name="
                    featureStore.getFeatureById(assessment.feature.id).name
                  "
                  icon="checklist"
                  :label="
                    featureStore.getFeatureById(assessment.feature.id).name
                  "
                  :class="
                    featureStore.getFeatureById(assessment.feature.id)
                      .isExclusive
                      ? 'text-warning'
                      : 'text-secondary'
                  "
                >
                  <!-- <q-badge
                    color="secondary"
                    v-if="
                      !featureStore.getFeatureById(assessment.feature.id)
                        .isExclusive || isEditable
                    "
                    ><q-rating
                      color="white"
                      v-model="
                        featureStore.getFeatureById(assessment.feature.id)
                          .status
                      "
                      max="4"
                      :readonly="
                        !isEditable ||
                        featureStore.getFeatureById(assessment.feature.id)
                          .isExclusive
                      "
                    ></q-rating>
                    <q-checkbox
                      size="sm"
                      v-if="isEditable"
                      keep-color
                      color="secondary"
                      v-model="
                        featureStore.getFeatureById(assessment.feature.id)
                          .isExclusive
                      "
                      dense
                  /></q-badge> -->
                </q-tab>
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="innerTab"
                animated
                transition-prev="slide-down"
                transition-next="slide-up"
              >
              </q-tab-panels>
              <q-card flat class="text-black q-mt-md" align="justify">
                <q-item>
                  <q-item-section class="col-6">
                    <q-item-label
                      >{{ featureStore.getFeatureByName(innerTab)?.name }}
                    </q-item-label>
                    <q-item-label caption>
                      {{ featureStore.getFeatureByName(innerTab)?.description }}
                    </q-item-label>
                  </q-item-section>
                  <q-item-section class="col-1">
                    <q-btn
                      icon="settings"
                      flat
                      size="small"
                      dense
                      color="accent"
                      ><q-badge label="Beta" floating></q-badge
                    ></q-btn>
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-card-section horizontal>
                  <q-card-section class="col-7">
                    <q-input
                      v-if="
                        store
                          .getAlternativeByName(tab)
                          .assessments.find(
                            (feat) =>
                              feat.feature.id ===
                              featureStore.getFeatureByName(innerTab).id
                          ) != undefined
                      "
                      type="textarea"
                      autogrow
                      v-model="
                        store
                          .getAlternativeByName(tab)
                          .assessments.filter(
                            (feat) =>
                              feat.feature.id ===
                              featureStore.getFeatureByName(innerTab).id
                          )[0].justification
                      "
                    ></q-input>
                  </q-card-section>

                  <q-separator vertical />

                  <q-card-section class="col-4">
                    <q-rating
                      v-if="
                        store
                          .getAlternativeByName(tab)
                          .assessments.find(
                            (feat) =>
                              feat.feature.id ===
                              featureStore.getFeatureByName(innerTab).id
                          ) != undefined
                      "
                      v-model="
                        store
                          .getAlternativeByName(tab)
                          .assessments.filter(
                            (feat) =>
                              feat.feature.id ===
                              featureStore.getFeatureByName(innerTab).id
                          )[0].score
                      "
                      color="secondary"
                      size="lg"
                    />
                  </q-card-section>
                </q-card-section>
              </q-card>
            </template>
          </q-splitter>
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>

    <q-card-actions align="left">
      <q-space />
      <q-btn
        class="q-ma-sm"
        icon="refresh"
        @click="handleAssessment"
        color="secondary"
      ></q-btn>
      <q-btn
        class="q-ma-sm"
        label="results"
        icon-right="check"
        color="primary"
        to="results"
        @click="handleAssessment"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { useAlternativesStore } from 'src/stores/alternative';
import { useFeaturesStore } from 'src/stores/features';
import { ref } from 'vue';
import {} from 'src/components/StatusEnum';

const store = useAlternativesStore();
const featureStore = useFeaturesStore();

const tab = ref(store.alternatives[0]?.name);
const innerTab = ref(featureStore.features[0]?.name);
const splitterModel = ref(20);
const isEditable = ref(false);

function handleAssessment() {
  store.alternatives.forEach((alternative) =>
    store.assessAllFeaturesOfAlternative(alternative)
  );
  store.alternatives.sort((alt1, alt2) => {
    //desc
    if (alt1.score > alt2.score) return -1;

    if (alt1.score < alt2.score) return 1;

    return 0;
  });
  store.isAssessed = true;
}
</script>
