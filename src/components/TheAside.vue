<template>
	<aside class="aside">
		<div class="aside__wrap">
			<img src="/images/aside-image.png" alt="image" class="aside__image" />
			<div class="aside__content">
				<div
					class="skeleton"
					style="--rounded: 8px; height: 26px; width: 190px; margin-bottom: 14px"
				></div>
				<div class="skeleton" style="--rounded: 8px; height: 10px; width: 155px"></div>

				<div class="skeleton" style="--rounded: 8px; height: 10px; width: 170px"></div>
				<div class="skeleton" style="--rounded: 8px; height: 10px; width: 160px"></div>
				<div class="skeleton" style="--rounded: 8px; height: 10px; width: 140px"></div>
				<div
					class="skeleton"
					style="--rounded: 8px; height: 10px; width: 80px; margin-top: 14px"
				></div>
			</div>
		</div>
	</aside>
</template>

<style scoped>
.aside__content {
	display: grid;
	gap: 16px;
}
.skeleton {
	margin: 0 auto;
}
</style>
