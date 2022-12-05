<template>
  <div class="q-pa-lg"><FeatureComponent></FeatureComponent></div>
</template>

<script lang="ts" setup>
import { useFeaturesStore } from 'src/stores/features';
import FeatureComponent from 'src/components/FeaturesComponent.vue';

const store = useFeaturesStore();
</script>
