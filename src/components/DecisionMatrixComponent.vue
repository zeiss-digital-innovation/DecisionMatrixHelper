<template>
  <q-card style="width: 80vw; height: 50vh">
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
      />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab">
      <q-tab-panel :name="tab" class="q-pa-none">
        <q-splitter v-model="splitterModel">
          <template v-slot:before>
            <q-tabs v-model="innerTab" vertical class="text-teal">
              <q-tab
                v-for="assessment in store.getAlternativeByName(tab)
                  .assessments"
                :key="assessment.id"
                :name="assessment.feature.name"
                icon="checklist"
                :label="assessment.feature.name"
                class="content-stretch"
                :class="
                  assessment.feature.isExclusive
                    ? 'text-warning'
                    : 'text-secondary'
                "
              />
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
            <q-card flat class="text-black" align="justify">
              <q-item class="q-ma-lg">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{
                    featureStore.getFeatureByName(innerTab)?.name
                  }}</q-item-label>
                  <q-item-label caption>
                    {{ featureStore.getFeatureByName(innerTab)?.description }}
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-rating
                    v-if="
                      store
                        .getAlternativeByName(tab)
                        .assessments.find(
                          (feat) => feat.feature.name === innerTab
                        ) != undefined
                    "
                    v-model="
                      store
                        .getAlternativeByName(tab)
                        .assessments.filter(
                          (feat) => feat.feature.name === innerTab
                        )[0].score
                    "
                    color="secondary"
                    size="lg"
                  />
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
                          (feat) => feat.feature.name === innerTab
                        ) != undefined
                    "
                    type="textarea"
                    v-model="
                      store
                        .getAlternativeByName(tab)
                        .assessments.filter(
                          (feat) => feat.feature.name === innerTab
                        )[0].justification
                    "
                  ></q-input>
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="col-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </q-card-section>
              </q-card-section>
            </q-card>
          </template>
        </q-splitter>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script setup lang="ts">
import { useAlternativesStore } from 'src/stores/alternative';
import { useFeaturesStore } from 'src/stores/features';
import { ref } from 'vue';

const store = useAlternativesStore();
const featureStore = useFeaturesStore();

const tab = ref(store.alternatives[0].name);
const innerTab = ref('');
const splitterModel = ref(20);
</script>
