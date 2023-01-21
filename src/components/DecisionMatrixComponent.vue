<template>
  <q-card v-if="store.alternatives.length > 0" flat class="bg-grey-2">
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

      <q-tab-panels v-if="featureStore.features.length > 0" v-model="tab">
        <q-tab-panel :name="tab" class="q-pa-none">
          <q-splitter v-model="splitterModel">
            <template v-slot:before>
              <q-scroll-area style="height: 45vh">
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
                  </q-tab>
                </q-tabs>
              </q-scroll-area>
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
                      @click="
                        handleCurrentFeatureSettings(
                          featureStore.getFeatureByName(innerTab)
                        )
                      "
                      ><q-badge label="Beta" floating></q-badge
                    ></q-btn>
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-card-section horizontal>
                  <q-card-section class="col-7" style="min-height: 45vh">
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
      <q-card v-else flat class="q-pa-md"
        ><q-card-section>
          <p class="text-h6">You did not add any features before.</p>
          <p class="subtitle">
            Therefore features could not be listed. Try to add a feature
            beforehand or go back to the main menu.
          </p>
        </q-card-section>
        <q-btn
          class="q-mr-md"
          color="primary"
          label="Add features first"
          to="features"
        ></q-btn>
        <q-btn label="Go back" to="/"></q-btn>
      </q-card>
    </q-card-section>

    <q-card-actions
      v-if="store.alternatives.length > 0 && featureStore.features.length > 0"
      align="left"
    >
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
  <q-card flat v-else>
    <q-card-section>
      <p class="text-h6">You did not add any alternatives before.</p>
      <p class="subtitle">
        Therefore a decision could not be made. Try to add an alternative
        beforehand or go back to the main menu.
      </p>
    </q-card-section>
    <q-btn
      class="q-mr-md"
      color="primary"
      label="add alternatives first"
      to="alternatives"
    ></q-btn>
    <q-btn label="Go back" to="/"></q-btn>
  </q-card>
  <q-dialog v-model="showSettings">
    <q-card>
      <q-card-section>
        <q-input
          style="min-width: 128px"
          label="Name"
          v-model="featureStore.getFeatureByName(innerTab).name"
          type="textarea"
          :readonly="isReadOnly"
          autogrow
          borderless
          dense
        ></q-input>

        <q-input
          label="Description"
          v-model="featureStore.getFeatureByName(innerTab).description"
          type="textarea"
          :readonly="isReadOnly"
          autogrow
          borderless
          dense
        ></q-input>
        <q-checkbox
          v-model="featureStore.getFeatureByName(innerTab).isExclusive"
        />

        <q-select
          style="min-width: 180px"
          label="Priority"
          map-options
          v-model="featureStore.getFeatureByName(innerTab).status"
          :disable="featureStore.getFeatureByName(innerTab).isExclusive"
          emit-value
          borderless
          dense
        ></q-select>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useAlternativesStore } from 'src/stores/alternative';
import { useFeaturesStore } from 'src/stores/features';
import { ref } from 'vue';
import {} from 'src/components/StatusEnum';
import {} from 'quasar';
import { Feature } from './models';

const store = useAlternativesStore();
const featureStore = useFeaturesStore();

const tab = ref(store.alternatives[0]?.name);
const innerTab = ref(featureStore.features[0]?.name);
const splitterModel = ref(20);
const isReadOnly = ref(false);
const showSettings = ref(false);

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

function handleCurrentFeatureSettings(feature: Feature) {
  if (!feature) return;
  showSettings.value = true;
}
</script>
