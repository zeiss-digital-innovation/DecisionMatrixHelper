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
  getters: {},
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

    // updateAlternatives(features: Feature[]): void {
    //   console.log('refreshing');
    //   this.alternatives.forEach((alternative) => {
    //     if (alternative.assessments.length < features.length) {
    //       // new feature was added
    //       const assessedFeatures = new Array(features.length) as Feature[];

    //       alternative.assessments.forEach((assessment) => {
    //         assessedFeatures.push(assessment.feature);
    //       });
    //       const diff = features.filter(
    //         (feat) => !assessedFeatures.includes(feat)
    //       );
    //       diff.forEach((element) => {
    //         alternative.assessments.push({
    //           id: uuid(),
    //           feature: element,
    //           justification: '',
    //           score: 0,
    //         });
    //       });
    //     } else if (alternative.assessments.length > features.length) {
    //       // feature was deleted
    //       const assessedFeatures = new Array(features.length) as Feature[];

    //       alternative.assessments.forEach((assessment) => {
    //         assessedFeatures.push(assessment.feature);
    //       });
    //       const diff = assessedFeatures.filter(
    //         (feat) => !features.includes(feat)
    //       );
    //       diff.forEach((element) => {
    //         alternative.assessments = alternative.assessments.filter(
    //           (assessment) => assessment.feature.id !== element.id
    //         );
    //       });
    //     } else return;
    //   });
    // },
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
