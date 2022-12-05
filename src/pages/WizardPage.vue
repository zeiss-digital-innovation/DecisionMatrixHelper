<template>
  <q-page>
    <div class="q-ma-lg">
      <q-dialog v-model="showConfirmationDialog" persistent>
        <q-card>
          <q-card-section class="row items-center bg-warning text-white">
            <q-avatar icon="warning" text-color="white" />
            <span class="q-ml-sm"
              >Do you really want to delete this Feature?</span
            >
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              label="Delete"
              color="primary"
              v-close-popup
              @click="handleFeatureDelete"
            />
            <q-btn flat label="Cancel" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <q-step
          :name="1"
          title="Add Features"
          caption="Create a list of all significant features"
          icon="settings"
          :done="step > 1"
        >
          <FeaturesComponent />
        </q-step>

        <q-step
          :name="2"
          title="Add Alternatives"
          caption="Create a list of all significant tools"
          icon="create_new_folder"
          :done="step > 2"
        >
          <AlternativesComponent />
        </q-step>

        <q-step :name="3" title="Decision Matrix" icon="add_comment">
          <DecisionMatrixComponentVue />
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-space />
            <q-btn
              @click="$refs.stepper.next()"
              color="primary"
              :label="step === 3 ? 'Finish' : 'Continue'"
            ></q-btn>
            <!-- <q-btn
              v-if="step < 3"
              label="Add"
              class="q-ml-sm"
              @click="handleAddFeature(featureStore.currentFeature)"
            ></q-btn> -->
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Back"
              class="q-ml-sm"
            ></q-btn>
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid';
import { Feature } from 'src/components/models';
import { Status } from 'src/components/StatusEnum';
import { useFeaturesStore } from 'stores/features';
import FeaturesComponent from 'src/components/FeaturesComponent.vue';
import AlternativesComponent from 'src/components/AlternativesComponent.vue';
import { ref } from 'vue';
import { useAlternativesStore } from 'src/stores/alternative';
import DecisionMatrixComponentVue from 'src/components/DecisionMatrixComponent.vue';

const featureStore = useFeaturesStore();
const alternativeStore = useAlternativesStore();
const step = ref(1);
const showDetails = ref(false);
const features = ref([]);

const status = Object.values(Status).filter((item) =>
  isNaN(parseInt(item.toString()))
);
const currentSelectedId = ref('');
const showConfirmationDialog = ref(false);

function handleItemClicked(feature: Feature) {
  featureStore.currentFeature = {
    id: feature.id,
    name: feature.name,
    description: feature.description,
    status: feature.status,
    isExclusive: feature.isExclusive,
  };

  console.log('currentSelectedID: ' + currentSelectedId.value);
  showDetails.value = true;
}

function handleSave(): void {
  const currentStep = step.value;

  if (currentStep === 1) {
    handleSaveFeature();
  }

  if (currentStep === 2) {
    handleSaveTool();
  }
}
function handleSaveFeature(): void {
  let feature = {
    id: currentSelectedId.value,
    name: featureStore.currentFeature.name,
    description: featureStore.currentFeature.description,
    status: featureStore.currentFeature.status,
    isExclusive: featureStore.currentFeature.isExclusive,
  };

  featureStore.updateFeature(feature);
}

function handleAddFeature(feature: Feature): void {
  featureStore.addFeature(feature);
}

function handleFeatureDelete(): void {
  //TODO: impl. pinia delete
  //void this.$store.dispatch(
  //  'features/removeFeature',
  //  this.currentSelectedId
  //);
  console.log('DeleteFeature');
}
function handleSaveTool(): void {
  console.log('AddTool');
}
</script>
