<template>
	<div
		v-if="inventoryItem"
		@click="inventoryStore.select(inventoryItem)"
		class="dragger__item-wrap"
	>
		<img :src="inventoryItem.source" :alt="inventoryItem.label" class="dragger__item-image" />
		<div class="dragger__item-count">{{ inventoryItem.count }}</div>
	</div>
</template>

<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory';
import { computed } from 'vue';

const props = defineProps<{ index: number }>();

const inventoryStore = useInventoryStore();

const inventoryItem = computed(() => {
	return inventoryStore.getItem(props.index);
});
</script>
