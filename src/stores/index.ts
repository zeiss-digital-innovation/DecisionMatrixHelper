import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { Router } from 'vue-router';

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

  pinia.use((context) => {
    const storeId = context.store.$id;

    const serializer = {
      serialize: JSON.stringify,
      deserialize: JSON.parse,
    };
    const fromStorage = serializer.deserialize(
      localStorage.getItem(storeId) ?? ''
    );

    if (fromStorage) {
      context.store.$patch(fromStorage);
    }

    context.store.$subscribe((mutation, state) => {
      localStorage.setItem(storeId, serializer.serialize(state));
    });
  });
  return pinia;
});
