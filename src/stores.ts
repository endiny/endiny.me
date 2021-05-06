import { createContext, useContext } from 'react';
import { CompletedGamesStore } from './completed-games/completed-games.store';
import { AuthStore } from './shared/auth/auth-store';

interface Stores {
	completedGamesStore: CompletedGamesStore;
	authStore: AuthStore,
}

const completedGamesStore = new CompletedGamesStore();
const authStore = new AuthStore();

export const stores: Stores = {
	completedGamesStore,
	authStore,
};

export const StoresContext = createContext(stores);
export function useStore() {
	return useContext(StoresContext);
}
