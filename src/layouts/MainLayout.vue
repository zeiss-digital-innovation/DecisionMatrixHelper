<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title
          ><q-btn label="Decision Matrix Helper" flat to="/" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :mini="!leftDrawerOpen || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="wizard">
            <q-item-section avatar>
              <q-icon name="auto_fix_normal" />
            </q-item-section>

            <q-item-section> Wizard </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Alternatives">
            <q-item-section avatar>
              <q-icon name="build" /><q-badge>{{
                alternativesStore.alternatives.length
              }}</q-badge>
            </q-item-section>

            <q-item-section> Alternatives </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="features">
            <q-item-section avatar>
              <q-icon name="checklist"></q-icon
              ><q-badge>{{ store.features.length }}</q-badge>
            </q-item-section>

            <q-item-section> Features </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="decisionmatrix">
            <q-item-section avatar>
              <q-icon name="functions" />
            </q-item-section>

            <q-item-section> Decision Matrix </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="miniState = true"
        ></q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAlternativesStore } from 'src/stores/alternative';
import { useFeaturesStore } from 'src/stores/features';
import { ref } from 'vue';

const store = useFeaturesStore();
const alternativesStore = useAlternativesStore();

const leftDrawerOpen = ref(false);
const miniState = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function drawerClick(e: Event) {
  if (miniState.value) {
    miniState.value = false;
    e.stopPropagation();
  }
}
</script>
