import { useInventoryStore } from '@/stores/inventory';
import { reactive } from 'vue';
import type { IGhostDragOptions, TGhostElement } from '@/types';

const useDragAndDrop = (ghostElement: TGhostElement) => {
	const inventoryStore = useInventoryStore();

	const ghostOptions = reactive<IGhostDragOptions>({
		element: ghostElement,
		cell: null,
		reset: () => {
			ghostOptions.element = null;
			ghostOptions.cell = null;
		}
	});

	const startDrag = (ev: DragEvent, cell: number): void => {
		if (!ev.dataTransfer) return;

		ghostOptions.cell = cell;

		createGhostPreview(ev);

		ev.dataTransfer.dropEffect = 'move';
		ev.dataTransfer.effectAllowed = 'move';
		ev.dataTransfer.setData('cell', `${cell}`);
	};

	const onDrop = (ev: DragEvent) => {
		const target = ev.target as HTMLElement;

		if (!ev.dataTransfer || !target) return;

		const prevCell = +ev.dataTransfer!.getData('cell');
		const dropCell = Number(target.id);

		const dropCellNotEmpty = inventoryStore.getItem(dropCell);
		if (dropCellNotEmpty || dropCell === 0) return false;

		inventoryStore.updateByCellId(prevCell, dropCell);
		ghostOptions.reset();
	};

	function createGhostPreview(ev: DragEvent) {
		if (!ev.dataTransfer || !ghostOptions.element) return;

		ev.dataTransfer.setDragImage(ghostOptions.element, 50, 50);
	}

	return { startDrag, onDrop, ghostOptions };
};

export default useDragAndDrop;
