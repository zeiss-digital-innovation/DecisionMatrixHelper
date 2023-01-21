<template>
  <q-page>
    <div class="q-ma-lg">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
        flat
        class="justify-between"
      >
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
          caption="Create a list of all significant alternatives"
          icon="create_new_folder"
          :done="step > 2"
        >
          <AlternativesComponent />
        </q-step>

        <q-step
          :name="3"
          title="Decision Matrix"
          caption="Evaluate each alternative per feature"
          icon="add_comment"
        >
          <DecisionMatrixComponentVue />
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation align="right">
            <q-space />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Back"
              class="q-ml-sm"
            ></q-btn>
            <q-btn
              @click="$refs.stepper.next()"
              color="primary"
              :label="step === 3 ? 'Finish' : 'Continue'"
            ></q-btn>
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import FeaturesComponent from 'src/components/FeaturesComponent.vue';
import AlternativesComponent from 'src/components/AlternativesComponent.vue';
import { ref } from 'vue';
import DecisionMatrixComponentVue from 'src/components/DecisionMatrixComponent.vue';

const step = ref(1);
</script>
