import type { IInventory } from './types';

export const COUNT_CELL = 25;

export const LOCALSTORAGE_KEY = 'INVENTORY';

export const INVENTORY: IInventory[] = [
	{
		id: 1,
		label: 'Зелёный',
		count: 4,
		cell: 1,
		source: '/images/item-green.png'
	},
	{
		id: 2,
		label: 'Оранжевый',
		count: 2,
		cell: 2,
		source: '/images/item-orange.png'
	},
	{
		id: 3,
		label: 'Сиреневый',
		count: 5,
		cell: 3,
		source: '/images/item-lilac.png'
	}
];
