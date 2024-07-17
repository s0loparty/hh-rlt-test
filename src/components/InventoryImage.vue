<template>
	<div class="dragger__item-image" :style="`background-image: url(${inventoryItem.source})`"></div>
</template>

<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory';
import { computed } from 'vue';
const props = defineProps<{ cell: number }>();

const inventoryStore = useInventoryStore();
const inventoryItem = computed(() => inventoryStore.getItem(props.cell));
</script>
