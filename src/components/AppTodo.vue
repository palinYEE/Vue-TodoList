<template>
	<v-expansion-panels class="mb-6" style="align-self: flex-start">
		<v-expansion-panel v-for="i in 1" :key="i">
			<v-expansion-panel-title expand-icon="mdi-menu-down">
				오늘은 Vue 공부를 할거야
				<AppMisc></AppMisc>
			</v-expansion-panel-title>
			<v-expansion-panel-text
				>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script setup>
import AppMisc from '@/components/AppMisc.vue';
</script>

<style lang="scss" scoped></style>
