import { defineStore } from 'pinia';
import { Status } from 'src/components/StatusEnum';
import { Feature } from '../components/models';
import { v4 as uuid } from 'uuid';

export const useFeaturesStore = defineStore('features', {
  state: () => ({
    features: [
      {
        id: uuid(),
        name: 'Feature1',
        description: 'Feature description',
        status: Status.undefined,
        isExclusive: true,
      },

      {
        id: uuid(),
        name: 'Feature2',
        description: 'Feature description',
        status: Status.undefined,
        isExclusive: true,
      },
      {
        id: uuid(),
        name: 'Feature3',
        description: 'Feature description',
        status: Status.undefined,
        isExclusive: true,
      },
    ] as Feature[],
    currentFeature: {
      id: uuid(),
      name: 'FeatureName',
      description: 'Feature description',
      status: Status.undefined,
      isExclusive: true,
    },
  }),
  getters: {},
  actions: {
    addFeature(feature: Feature) {
      if (feature.name == '') return;
      if (this.features.find((feat) => feat.id === feature.id)) return;
      if (this.currentFeature.id === feature.id)
        this.currentFeature = {
          id: uuid(),
          name: 'FeatureName',
          description: 'Feature description',
          status: Status.undefined,
          isExclusive: true,
        };
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
      if (this.currentFeature.id === id) return this.currentFeature;
      return this.features?.filter((x: Feature) => x.id === id)[0];
    },
  },
});
