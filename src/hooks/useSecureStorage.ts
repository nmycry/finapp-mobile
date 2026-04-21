import * as SecureStore from 'expo-secure-store';

export function useSecureStorage() {
  async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  async function get(key: string) {
    return SecureStore.getItemAsync(key);
  }

  async function remove(key: string) {
    await SecureStore.deleteItemAsync(key);
  }

  return { save, get, remove };
}
