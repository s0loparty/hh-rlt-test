import type { Ref } from 'vue';

export type TGhostElement = Ref<Element | null> | null;

export interface IInventory {
	id: number;
	label: string;
	count: number;
	cell: number;
	source: string;
}

export interface IGhostDragOptions {
	element: TGhostElement;
	cell: number | null;
	reset: Function;
}
