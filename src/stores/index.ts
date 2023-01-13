import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { Router } from 'vue-router';
import { LocalStorage } from 'quasar';
import { ref, toRef, watch } from 'vue';
import { useFeaturesStore } from './features';
import { useAlternativesStore } from './alternative';
import AlternativePage4105eb7c from 'app/dist/pwa/assets/AlternativePage.4105eb7c';

/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router;
  }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia();

  // watch(
  //   pinia.state,
  //   (state) => {
  //     // persist the whole state to the local storage whenever it changes
  //     localStorage.setItem('piniaState', JSON.stringify(state));
  //   },
  //   { deep: true }
  // );
  // if (LocalStorage.has('piniaState')) {
  //   pinia.state.value = JSON.parse(LocalStorage.getItem('piniaState') ?? '');
  // }
  pinia.use((context) => {
    const storeId = context.store.$id;
    //TODO: Can conflict if stores get changed
    //const store = useAlternativesStore();

    const serializer = {
      serialize: JSON.stringify,
      deserialize: JSON.parse,
    };
    if (LocalStorage.has(storeId)) {
      const fromStorage = serializer.deserialize(
        LocalStorage.getItem(storeId) ?? ''
      );
      if (fromStorage) {
        context.store.$patch(fromStorage);
      }
    }

    context.store.$subscribe((mutation, state) => {
      LocalStorage.set(storeId, serializer.serialize(state));
    });
  });
  return pinia;
});
