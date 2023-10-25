<script setup lang="ts">
const test = 'test';
const check = test == 'test';
console.log(check);
 
</script>

<template>
	<h1>Hello App!</h1>
	<p>
		<router-link to="/" class="btn btn-primary" >Go to Home</router-link>
		<router-link to="/about" class="btn btn-primary" >Go to About</router-link>
	</p>
	<router-view></router-view>
</template>
