<template>
	<section class="dragger">
		<div class="dragger__wrap">
			<div ref="ghostElementRef" class="dragger__ghost-item">
				<InventoryImage v-if="ghostOptions.cell" :cell="ghostOptions.cell" />
			</div>
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
import useDragAndDrop from '@/use/draganddrop';
import InventoryImage from './InventoryImage.vue';
import InventoryCardInfo from './InventoryCardInfo.vue';
import { ref } from 'vue';
import type { TGhostElement } from '@/types';

const ghostElementRef = ref<TGhostElement>(null);
const { ghostOptions, onDrop, startDrag } = useDragAndDrop(ghostElementRef);
const inventoryStore = useInventoryStore();

const closeDialog = () => {
	inventoryStore.resetSelect();
};

const showInventoryInfo = (cell: number): void => {
	const item = inventoryStore.getItem(cell);
	if (!item) return;

	inventoryStore.select(item);
};
</script>
