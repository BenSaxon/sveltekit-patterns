import { writable } from 'svelte/store';

export const storeTest = writable<string>('hello');
