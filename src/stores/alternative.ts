import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';
import { Alternative, Assessment, Feature } from '../components/models';
import { useFeaturesStore } from './features';
import { LocalStorage } from 'quasar';

const featureStore = useFeaturesStore();

export const useAlternativesStore = defineStore('Alternatives', {
  state: () => ({
    alternatives: [] as Alternative[],
    isAssessed: false,
  }),
  getters: {
    alternativeNames: (state) => {
      return state.alternatives.map((alternative) => alternative.name);
    },
    assessmentByAlternative: (state) => (alternative: Alternative) => {
      const alternativeFromState = state.alternatives.find(
        (alt) => alt.id === alternative.id
      );
      if (alternativeFromState) {
        return alternativeFromState.assessments;
      }
      return [];
    },
  },
  actions: {
    addAlternative(alternative: Alternative) {
      if (this.alternatives.find((feat) => feat.id === alternative.id)) return;
      this.alternatives.push(alternative);
    },

    updateAlternative(alternative: Alternative): void {
      this.alternatives = this.alternatives.map((feat) => {
        if (feat.id === alternative.id) {
          return alternative;
        }
        return feat;
      });
    },

    assessAllFeaturesOfAlternative(alternative: Alternative) {
      const initialValue = 0;
      alternative.score = alternative.assessments.reduce(
        (accumulator, assessment) =>
          accumulator + assessment.score * assessment.feature.status,
        initialValue
      );
      if (alternative.score < 0) alternative.score = 0;
    },

    updateAlternativeWithFeature(feature: Feature) {
      this.alternatives.forEach((alternative) => {
        const filteredAssessments = alternative.assessments.filter(
          (assessment) => assessment.feature.id === feature.id
        );
        if (filteredAssessments.length === 0) {
          const newAssessment = {
            id: uuid(),
            feature: feature,
            justification:
              'justification ' + (alternative.assessments.length + 1),
            score: 0,
          };
          return alternative.assessments.push(newAssessment);
        }
      });
    },
    getAlternativeByName(name: string): Alternative {
      return this.alternatives?.filter((x: Alternative) => x.name === name)[0];
    },
    getAlternativeById(id: string): Alternative {
      return this.alternatives?.filter((x: Alternative) => x.id === id)[0];
    },
    deleteAlternative(alternative: Alternative) {
      if (this.alternatives.includes(alternative))
        this.alternatives = this.alternatives.filter(
          (alt) => alt.id !== alternative.id
        );
    },
    deleteAssessmentWithFeature(feature: Feature) {
      this.alternatives.forEach((alternative) => {
        const filteredAssessments = alternative.assessments.filter(
          (assessment) => assessment.feature.id !== feature.id
        );
        if (filteredAssessments.length > 0) {
          alternative.assessments = filteredAssessments;
        } else {
          alternative.assessments = [] as Assessment[];
        }
      });
    },

    deleteAllAlternatives() {
      this.alternatives.splice(0, this.alternatives.length);
    },
  },
});
