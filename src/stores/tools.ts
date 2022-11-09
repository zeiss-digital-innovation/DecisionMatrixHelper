import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';
import { Alternative } from '../components/models';

export const useToolsStore = defineStore('Tools', {
  state: () => ({
    tools: [
      {
        id: uuid(),
        name: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor',
        features: [],
      },
      {
        id: uuid(),
        name: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor',
        features: [],
      },
      {
        id: uuid(),
        name: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor',
        features: [],
      },
    ] as Alternative[],
    currentAlternative: {
      id: uuid(),
      name: 'AlternativenName',
      description: 'Lorem ipsum dolor',
      features: [],
    },
  }),
  getters: {},
  actions: {
    addtool(tool: Alternative) {
      if (this.tools.find((feat) => feat.id === tool.id)) return;
      this.tools.push(tool);
      if (this.currentAlternative.id === tool.id) {
        this.currentAlternative = {
          id: uuid(),
          name: 'AlternativenName',
          description: 'Lorem ipsum dolor',
          features: [],
        };
      }
    },

    updatetool(alternative: Alternative): void {
      console.log('updating: ', alternative.id);
      this.tools = this.tools.map((feat) => {
        if (feat.id === alternative.id) {
          return alternative;
        }
        return feat;
      });
    },
    gettoolById(id: string): Alternative {
      if (this.currentAlternative.id === id) return this.currentAlternative;
      return this.tools?.filter((x: Alternative) => x.id === id)[0];
    },
  },
});
