import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { INVENTORY, LOCALSTORAGE_KEY } from '@/constants';
import type { IInventory } from '@/types';

function setDefaultValue(): IInventory[] {
	return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)!) ?? INVENTORY;
}

export const useInventoryStore = defineStore('inventoryStore', () => {
	const inventory = ref(setDefaultValue());
	const selected = ref<IInventory | null>(null);

	const select = (item: IInventory): void => {
		selected.value = inventory.value.find((i) => i.id === item.id) ?? null;
	};

	const resetSelect = (): void => {
		selected.value = null;
	};

	const getItem = (cellID: number): IInventory => {
		return inventory.value.find((i) => i.cell === cellID)!;
	};

	const update = (value: IInventory[]): void => {
		inventory.value = value;
	};

	const updateByCellId = (currentCellId: number, newCellId: number): void => {
		const idx = inventory.value.findIndex((i) => i.cell === currentCellId);

		inventory.value[idx].cell = newCellId;
	};

	const updateItemCount = (itemId: number, count: number): void => {
		const idx = inventory.value.findIndex((i) => i.id === itemId);
		inventory.value[idx].count = count;
	};

	const saveInLocalstorage = () => {
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inventory.value));
	};

	watch(inventory, () => saveInLocalstorage(), { deep: true });

	return {
		inventory,
		selected,
		resetSelect,
		select,
		getItem,
		update,
		updateByCellId,
		updateItemCount
	};
});
