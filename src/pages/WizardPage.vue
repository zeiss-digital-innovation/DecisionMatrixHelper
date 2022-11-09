<template>
  <q-page>
    <div class="q-ma-xl">
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
          <div class="q-gutter-md">
            <q-list class="col-8">
              <q-item
                v-for="feature in featureStore.features"
                :key="feature.id"
                clickable
                v-ripple
                @click="handleItemClicked(feature)"
              >
                <q-item-section>
                  <q-item-label>{{ feature.name }}</q-item-label>
                  <q-item-label caption lines="2">{{
                    feature.description
                  }}</q-item-label>
                </q-item-section>

                <q-item-section side top>
                  <q-item-label caption>{{
                    Status[feature.status]
                  }}</q-item-label>
                  <q-icon
                    v-if="feature.isExclusive === true"
                    name="priority_high"
                    color="accent"
                  ></q-icon>
                </q-item-section>
              </q-item>

              <q-separator spaced inset />
            </q-list>
            <div class="col-5">
              <FeatureForm v-model:id="featureStore.currentFeature.id" />
            </div>
          </div>
          <q-dialog
            v-model="showDetails"
            @hide="
              featureStore.currentFeature = {
                id: uuid(),
                name: '',
                description: '',
                status: Status.undefined,
                isExclusive: true,
              }
            "
          >
            <q-card style="min-width: 50vw">
              <q-card-section
                ><FeatureForm v-model:id="featureStore.currentFeature.id"
              /></q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn
                  v-close-popup
                  flat
                  color="warning"
                  label="Delete"
                  @click="showConfirmationDialog = true"
                />
                <q-btn
                  v-close-popup
                  flat
                  color="primary"
                  label="Save"
                  @click="handleSave"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-step>

        <q-step
          :name="2"
          title="Add Alternatives"
          caption="Create a list of all significant tools"
          icon="create_new_folder"
          :done="step > 2"
        >
          <div class="q-gutter-y-md column">
            <q-list class="col-8">
              <q-item
                v-for="tool in toolStore.tools"
                :key="tool.id"
                clickable
                v-ripple
              >
                <q-item-section>
                  <q-item-label>{{ tool.name }}</q-item-label>
                  <q-item-label caption lines="2">{{
                    tool.description
                  }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced inset />
            </q-list>
            <BasicForm v-model:id="toolStore.currentAlternative.id" />
          </div>
        </q-step>

        <q-step :name="3" title="Decision Matrix" icon="add_comment">
          <q-table
            title="Decision Matrix"
            :rows="featureStore.features"
            row-key="featureStore.features.id"
          />
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              @click="$refs.stepper.next()"
              color="primary"
              :label="step === 3 ? 'Finish' : 'Continue'"
            ></q-btn>
            <q-btn
              v-if="step < 3"
              label="Add"
              class="q-ml-sm"
              @click="handleAddFeature(featureStore.currentFeature)"
            ></q-btn>
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
    <pre>
      {{ featureStore.currentFeature }}
    </pre>
  </q-page>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid';
import { Feature } from 'src/components/models';
import { Status } from 'src/components/StatusEnum';
import { useFeaturesStore } from 'stores/features';
import FeatureForm from 'components/FeatureForm.vue';
import BasicForm from 'components/BasicForm.vue';
import { ref } from 'vue';
import { useToolsStore } from 'src/stores/tools';

const featureStore = useFeaturesStore();
const toolStore = useToolsStore();
const step = ref(1);
const showDetails = ref(false);

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
