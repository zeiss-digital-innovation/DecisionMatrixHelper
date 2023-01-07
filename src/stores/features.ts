import { defineStore } from 'pinia';
import { Feature } from '../components/models';

export const useFeaturesStore = defineStore('features', {
  state: () => ({
    features: [] as Feature[],
  }),
  getters: {},
  actions: {
    addFeature(feature: Feature) {
      if (feature.name == '') return;
      if (this.features.find((feat) => feat.id === feature.id)) return;

      this.features.push(feature);
    },
    updateFeature(feature: Feature): void {
      console.log('updating: ', feature.id);
      this.features = this.features.map((feat) => {
        if (feat.id === feature.id) {
          return feature;
        }
        return feat;
      });
    },
    getFeatureById(id: string): Feature {
      return this.features?.filter((x: Feature) => x.id === id)[0];
    },
    getFeatureByName(name: string): Feature {
      return this.features?.filter((x: Feature) => x.name === name)[0];
    },
    deleteFeature(feature: Feature) {
      if (this.features.includes(feature))
        this.features = this.features.filter((feat) => feat.id !== feature.id);
    },
    deleteAllFeatures() {
      this.features.splice(0, this.features.length);
    },
  },
});
