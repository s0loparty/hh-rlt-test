<template>
	<section class="content">
		<main class="main">
			<TheAside />
			<TheDragger />
		</main>
		<TheFooter />
	</section>
	<TheThemeToggle />
</template>

<script setup lang="ts">
import TheAside from './components/TheAside.vue';
import TheDragger from './components/TheDragger.vue';
import TheFooter from './components/TheFooter.vue';

// yyy besish
// @ts-ignore
import TheThemeToggle from './components/TheThemeToggle.vue';
</script>
