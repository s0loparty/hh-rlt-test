<template>
	<section class="dragger">
		<div class="dragger__wrap">
			<div @drop="onDrop($event)" class="dragger__items">
				<div
					v-for="cell in COUNT_CELL"
					:key="cell"
					:id="`${cell}`"
					@dragstart="startDrag($event, cell)"
					@dragenter.prevent
					@dragover.prevent
					@click="showInventoryInfo(cell)"
					:class="[
						'dragger__item',
						{ 'dragger__item--active': inventoryStore.selected?.cell === cell }
					]"
				>
					<div v-if="inventoryStore.getItem(cell)" class="dragger__item-wrap">
						<InventoryImage draggable="true" :cell="cell" />
						<div class="dragger__item-count">
							{{ inventoryStore.getItem(cell).count }}
						</div>
					</div>
				</div>
			</div>
			<BaseDialog :visible="!!inventoryStore.selected" @close="closeDialog">
				<InventoryCardInfo />
			</BaseDialog>
		</div>
	</section>
</template>

<script setup lang="ts">
import { COUNT_CELL } from '@/constants';
import { useInventoryStore } from '@/stores/inventory';
import InventoryImage from './InventoryImage.vue';
import InventoryCardInfo from './InventoryCardInfo.vue';

const inventoryStore = useInventoryStore();

const closeDialog = () => {
	inventoryStore.resetSelect();
};

const showInventoryInfo = (cell: number): void => {
	const item = inventoryStore.getItem(cell);
	if (!item) return;

	inventoryStore.select(item);
};

// NATIVE
const startDrag = (ev: DragEvent, cell: number): void => {
	// @ts-ignore
	ev.dataTransfer.dropEffect = 'move';
	// @ts-ignore
	ev.dataTransfer.effectAllowed = 'move';
	// @ts-ignore
	ev.dataTransfer.setData('cell', `${cell}`);
};

const onDrop = (ev: DragEvent) => {
	const prevCell = +ev.dataTransfer!.getData('cell');
	// @ts-ignore
	const dropCell = Number(ev.target.id);

	const dropCellNotEmpty = inventoryStore.getItem(dropCell);
	if (dropCellNotEmpty || dropCell === 0) return false;

	inventoryStore.updateByCellId(prevCell, dropCell);
};
</script>
