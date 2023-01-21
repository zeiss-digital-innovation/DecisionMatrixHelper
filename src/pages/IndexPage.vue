<template>
  <q-page class="flex justify-center items-center">
    <div class="q-pa-md row items-start q-gutter-md justify-evenly">
      <q-card style="width: 270px" v-for="card in cards" :key="card.route">
        <q-card-section avatar class="q-ml-lg q-mt-lg" horizontal>
          <q-icon size="md" :name="card.icon" color="secondary" />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">{{ card.title }}</div>
          <div class="text-subtitle2 text-accent">{{ card.subtitle }}</div>
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            color="primary"
            icon="arrow_forward_ios"
            :label="card.title"
            :to="card.route"
            no-caps
          />

          <q-space />

          <q-btn
            color="accent"
            round
            size="md"
            flat
            dense
            :icon="card.expanded.value ? 'keyboard_arrow_up' : 'help'"
            @click="card.expanded.value = !card.expanded.value"
          />
        </q-card-actions>
        <q-slide-transition>
          <div v-show="card.expanded.value">
            <q-card-section class="text-overline text-caption text-grey">
              {{ card.description }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cards = [
  {
    title: 'Wizard',
    subtitle: 'guided decision making',
    description:
      'The wizard will guide you during the decision making process. First you will add features, comparable properties, that you want to focus on. Afterwards you will be asked to add the alternatives you want to decide on. When you added at least two alternatives you can step further to decide on the given alternatives and features. In this step you need to assess each feature per alternative. The higher you assess a feature, that was already marked as important, the higher this decision will weight.',
    route: 'wizard',
    icon: 'auto_fix_normal',
    expanded: ref(false),
  },
  {
    title: 'Alternatives',
    subtitle: 'edit all alternatives',
    description:
      'With alternatives you describe the entities that you are trying to distinguish. Each alternative will be compared by the features you provide. Depending on the priorities of your features and the assessment per alternative you will generate a score that enables you to compare each given alternative.',
    route: 'alternatives',
    icon: 'build',
    expanded: ref(false),
  },
  {
    title: 'Features',
    subtitle: 'edit all features',
    description:
      'Features are defined as comparable properties of each Alternative. It will make more sense, if you choose features that are within the domain of the alternatives you are trying to compare against each other. With a given feature you need to determine their importance for you. Marking features as exclusive will automatically mark them as the most important feature. You can have more than one exclusive feature.',
    route: 'features',
    icon: 'checklist',
    expanded: ref(false),
  },
  {
    title: 'Decision Matrix',
    subtitle: 'evaluate each alternative per feature',
    description:
      'After you added at least one alternative and one feature the decision matrix will be available. With the matrix you have the opportunity to evaluate each feature per alternative. This assessment will be multiplied with the importance of that particular feature. For each feature given, all scores will be summed up. The resulting score will the base for the comparison. ',
    route: 'decisionMatrix',
    icon: 'functions',
    expanded: ref(false),
  },
];
</script>
