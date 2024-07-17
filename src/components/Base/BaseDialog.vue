<template>
	<div :class="['dialog', { show: visible }]">
		<div class="dialog__header">
			<button class="dialog__close" @click="emits('close')">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#FFFFFF"
					class="icon"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
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

<style scoped lang="scss">
.dialog {
	position: absolute;
	height: 100%;
	width: 100%;
	max-width: 250px;
	transition: all 0.3s ease;

	display: flex;
	flex-direction: column;

	right: -100%;
	top: 0;
	bottom: 0;
	z-index: 10;

	background-color: rgba(38, 38, 38, 0.5);
	backdrop-filter: blur(16px);

	border: 1px solid var(--color-secondary);
	border-top-right-radius: var(--rounded);
	border-bottom-right-radius: var(--rounded);

	&.show {
		right: 0;
	}

	&__header {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding: 8px;
	}

	&__body {
		padding: 23px 15px 18px 15px;
		flex: 1 0 0;

		display: flex;
		flex-direction: column;
	}

	&__close {
		background: none;
		border: 0;
		cursor: pointer;
		color: #fff;
	}
}
</style>
