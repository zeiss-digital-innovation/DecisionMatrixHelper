<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title
          ><q-btn label="Decision Matrix Helper" flat to="/" icon="home" />
        </q-toolbar-title>
        <q-space />
        <q-btn
          dense
          flat
          icon="upload"
          @click="isLoading = true"
          label="Load"
        />
        <q-btn dense flat icon="save" @click="isSaving = true" label="Save" />
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
              <q-icon name="functions" /><q-badge
                v-if="alternativesStore.alternatives.length < 1"
                floating
                >{{ 'warning' }}</q-badge
              >
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
    <q-dialog v-model="isSaving" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="save" color="primary" text-color="white" />
          <span class="q-ml-sm q-mt-md"
            >You are going to download the state of the tool. Are you
            sure?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            icon="download "
            label="Download"
            color="primary"
            v-close-popup
            @click="handleStateDownload"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isLoading" persistent>
      <q-card>
        <q-toolbar class="bg-primary text-white">
          <q-icon name="upload" size="md" />
          <q-toolbar-title><span>Load</span> State from Disk</q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section class="row items-center">
          <span class="q-ml-sm q-mt-md"
            ><p>
              You are going to load a state from disk. This will erase the state
              you worked on so far.
            </p>
            <p
              class="text-warning text-bold text-center text-h6"
              v-if="filePicker"
            >
              Are you sure you want to do that?
            </p></span
          >
        </q-card-section>
        <q-card-section>
          <q-file
            v-model="filePicker"
            clearable
            accept=".dmh"
            counter
            label="Choose your file to upload"
          ></q-file
        ></q-card-section>

        <q-card-actions align="left">
          <q-checkbox
            v-if="filePicker"
            v-model="isSure"
            label="I want to replace the current state of the app"
          ></q-checkbox>
          <q-space />
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            icon="upload "
            label="Upload"
            color="primary"
            v-close-popup
            :disable="!filePicker || !isSure"
            @click="handleStateUpload"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { exportFile, LocalStorage } from 'quasar';
import { useAlternativesStore } from 'src/stores/alternative';
import { useFeaturesStore } from 'src/stores/features';
import { getActivePinia } from 'pinia';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const store = useFeaturesStore();
const alternativesStore = useAlternativesStore();

const leftDrawerOpen = ref(false);
const miniState = ref(false);

const isSaving = ref(false);
const isSure = ref(false);

const isLoading = ref(false);
const filePicker = ref<File>();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function drawerClick(e: Event) {
  if (miniState.value) {
    miniState.value = false;
    e.stopPropagation();
  }
}
function handleStateDownload(e: Event) {
  const storedData = JSON.stringify(LocalStorage.getAll(), null, 2);
  const status = exportFile(
    'DecisionMatrix.dmh',
    storedData,
    'application/json'
  );
  if (!status) {
    console.log('Failed to download file. Use different browser.');
  } // TODO: propper error handling
}

async function handleStateUpload() {
  if (!filePicker.value) return;
  const text = await filePicker.value.text();
  const data = JSON.parse(text);

  Object.keys(data).forEach((key) => {
    localStorage.setItem(key, Object(data[key]));
  });
  //TODO: find proper handling of store hydration
  // this is a dirty fix in order to override the store
  window.location.reload();
}
</script>
