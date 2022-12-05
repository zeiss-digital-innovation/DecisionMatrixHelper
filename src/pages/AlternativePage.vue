<template>
  <div class="q-pa-lg"><AlternativesComponent></AlternativesComponent></div>
</template>

<script lang="ts" setup>
import { useFeaturesStore } from 'src/stores/features';
import AlternativesComponent from 'src/components/AlternativesComponent.vue';

const store = useFeaturesStore();
</script>
