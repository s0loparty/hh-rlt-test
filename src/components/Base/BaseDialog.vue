<template>
	<div :class="['dialog', { show: visible }]">
		<div class="dialog__header">
			<button class="dialog__close" @click="emits('close')">
				<BaseIconClose />
			</button>
		</div>
		<div class="dialog__body">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	visible: boolean;
}>();

const emits = defineEmits(['close']);

defineOptions({
	name: 'BaseDialog'
});
</script>
