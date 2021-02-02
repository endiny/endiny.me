import { createContext, useContext } from 'react';
import { CompletedGamesStore } from './completed-games/completed-games.store';

interface Stores {
	completedGamesStore: CompletedGamesStore;
}
const completedGamesStore = new CompletedGamesStore();

export const stores: Stores = {
	completedGamesStore,
};

export const StoresContext = createContext(stores);
export function useStore() {
	return useContext(StoresContext);
}
