<template>
	<div v-if="inventoryItem" class="inventory-card">
		<img :src="inventoryItem.source" :alt="inventoryItem.label" class="inventory-card__image" />
		<div class="inventory-card__body">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eos alias enim ducimus
				cupiditate nulla odio officia perspiciatis voluptas dolorum ipsa eveniet dignissimos
				adipisci sunt omnis at quia architecto modi quaerat quod incidunt, illum aut atque
				similique? Autem, accusamus. Recusandae laudantium sunt error pariatur officiis, magnam
				nobis totam nam est!
			</p>
			<pre>{{ inventoryItem }}</pre>
		</div>
		<div class="inventory-card__footer">
			<button
				v-show="!isAcceptRemove"
				@click="isAcceptRemove = true"
				class="btn btn--danger btn--full"
			>
				Удалить предмет
			</button>
			<form
				v-show="isAcceptRemove"
				@submit.prevent="handleItemUpdate"
				class="inventory-card__form"
			>
				<input
					type="number"
					class="input"
					min="1"
					placeholder="Введите количество"
					v-model="inventoryItemCount"
				/>
				<div class="inventory-card__form-wrap">
					<button
						class="btn btn--cancel btn--shadow"
						type="button"
						@click="isAcceptRemove = false"
					>
						Отмена
					</button>
					<button class="btn btn--shadow" style="background-color: #fa7272" type="submit">
						Подтвердить
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory';
import { computed, ref, watch } from 'vue';

const inventoryStore = useInventoryStore();

const inventoryItem = computed(() => inventoryStore.selected);

const isAcceptRemove = ref(false);
const inventoryItemCount = ref(0);

const handleItemUpdate = () => {
	if (!inventoryItem.value) return;
	inventoryStore.updateItemCount(inventoryItem.value.id, inventoryItemCount.value);
};

watch(inventoryItem, (item) => {
	if (!item) return;
	inventoryItemCount.value = item.count;
});
</script>

<style scoped lang="scss">
.inventory-card {
	display: flex;
	flex-direction: column;
	height: 100%;

	&__image {
		display: block;
		width: 130px;
		height: 130px;
		margin: 0 auto;
	}

	&__body {
		padding: 16px 0;
		margin: 20px 0;
		border-top: 1px solid var(--color-secondary);

		overflow: auto;
		flex: 1 0 0;
	}

	&__footer {
		padding-top: 16px;
		border-top: 1px solid var(--color-secondary);
	}

	&__form {
		display: grid;
		gap: 20px;

		&-wrap {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 10px;
		}
	}
}
</style>
