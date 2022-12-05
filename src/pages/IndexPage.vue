<template>
  <q-page>
    <div
      class="q-pa-md row items-start q-gutter-md justify-evenly fixed-center"
    >
      <q-card style="width: 220px" v-for="card in cards" :key="card.route">
        <q-card-section avatar class="q-ml-lg q-mt-lg" horizontal>
          <q-icon size="md" :name="card.icon" color="secondary" />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">{{ card.title }}</div>
          <div class="text-subtitle2">{{ card.subtitle }}</div>
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            color="primary"
            :label="'go to: ' + card.title"
            :to="card.route"
            no-caps
          />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="
              card.expanded.value ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
            "
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.',
    route: 'wizard',
    icon: 'auto_fix_normal',
    expanded: ref(false),
  },
  {
    title: 'Alternatives',
    subtitle: 'edit all alternatives',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.',
    route: 'alternatives',
    icon: 'build',
    expanded: ref(false),
  },
  {
    title: 'Features',
    subtitle: 'edit all features',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.',
    route: 'features',
    icon: 'checklist',
    expanded: ref(false),
  },
  {
    title: 'Decision Matrix',
    subtitle: 'show your decisions',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.',
    route: 'decisionMatrix',
    icon: 'functions',
    expanded: ref(false),
  },
];
</script>
