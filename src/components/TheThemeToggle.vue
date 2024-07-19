<template>
	<button @click="toggle">toggle</button>
</template>

<script setup>
const toggle = () => document.body.classList.toggle('dark');
</script>

<style scoped>
button {
	position: fixed;
	bottom: 30px;
	right: 30px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 0;
	background-color: rgb(255, 255, 255);
	box-shadow: 0 0 5px #4b4b4b;
	cursor: pointer;
}
</style>
