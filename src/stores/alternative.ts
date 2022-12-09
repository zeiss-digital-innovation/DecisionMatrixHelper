import { defineStore } from 'pinia';
import { colors } from 'quasar';
import { Status } from 'src/components/StatusEnum';
import { v4 as uuid } from 'uuid';
import { Alternative, Feature } from '../components/models';
import { useFeaturesStore } from './features';

const featureStore = useFeaturesStore();

export const useAlternativesStore = defineStore('Alternatives', {
  state: () => ({
    alternatives: [
      {
        id: uuid(),
        name: 'Alternative1',
        description: 'Lorem ipsum dolor',
        assessments: [
          {
            id: uuid(),
            feature: {
              name: 'Feature5',
              description: 'Feature description',
              status: Status.undefined,
              isExclusive: true,
            },
            score: 0,
            justification: 'justification1',
          },
          {
            id: uuid(),
            feature: {
              name: 'Feature4',
              description: 'Feature description',
              status: Status.undefined,
              isExclusive: true,
            },
            score: 0,
            justification: 'justification2',
          },
        ],
      },
      {
        id: uuid(),
        name: 'Alternative2',
        description: 'Lorem ipsum dolor',
        assessments: [
          {
            id: uuid(),
            feature: {
              name: 'Feature5',
              description: 'Feature description',
              status: Status.undefined,
              isExclusive: true,
            },
            score: 0,
            justification: 'justification1',
          },
          {
            id: uuid(),
            feature: {
              name: 'Feature4',
              description: 'Feature description',
              status: Status.undefined,
              isExclusive: true,
            },
            score: 0,
            justification: 'justification2',
          },
        ],
      },
      {
        id: uuid(),
        name: 'Alternative3',
        description: 'Lorem ipsum dolor',
        assessments: [
          {
            id: uuid(),
            feature: {
              name: 'Feature1',
              description: 'Feature description',
              status: Status.undefined,
              isExclusive: true,
            },
            score: 0,
            justification: 'justification1',
          },
          {
            id: uuid(),
            feature: {
              name: 'Feature4',
              description: 'Feature description',
              status: Status.undefined,
              isExclusive: true,
            },
            score: 0,
            justification: 'justification2',
          },
        ],
      },
    ] as Alternative[],
    currentAlternative: {
      id: uuid(),
      name: 'AlternativenName',
      description: 'Lorem ipsum dolor',
      assessments: [],
      score: 0,
    },
  }),
  getters: {
    // getAlternativeById: (state) => {
    //   return (alternativeId: string) =>
    //     state.alternatives.find(
    //       (alternative) => alternative.id === alternativeId
    //     );
    // },
  },
  actions: {
    addAlternative(alternative: Alternative) {
      if (this.alternatives.find((feat) => feat.id === alternative.id)) return;
      this.alternatives.push(alternative);
    },

    updateAlternative(alternative: Alternative): void {
      console.log('updating: ', alternative.id);
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
      if (this.currentAlternative.id === id) return this.currentAlternative;
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
          (assessment) => assessment.feature.id != feature.id
        );
        if (filteredAssessments.length > 0) {
          alternative.assessments = filteredAssessments;
        }
      });
    },
    deleteAllAlternatives() {
      this.alternatives.splice(0, this.alternatives.length);
    },
  },
});
