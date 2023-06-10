<template>
	<v-card>
		<v-layout>
			<v-navigation-drawer
				v-model="drawer"
				:rail="rail"
				permanent
				@click="rail = false"
			>
				<v-list-item
					prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
					title="윤영진"
					nav
				>
					<template v-slot:append>
						<v-btn
							variant="text"
							icon="mdi-chevron-left"
							@click.stop="rail = !rail"
						></v-btn>
					</template>
				</v-list-item>

				<v-divider></v-divider>

				<v-list density="compact" nav>
					<v-list-item
						prepend-icon="mdi-home-city"
						title="Home"
						value="home"
					></v-list-item>
					<v-list-item
						prepend-icon="mdi-account"
						title="My Account"
						value="account"
					></v-list-item>
					<v-list-item
						prepend-icon="mdi-account-group-outline"
						title="Users"
						value="users"
					></v-list-item>
				</v-list>
			</v-navigation-drawer>
			<v-main style="height: 250px">
				<v-expansion-panels class="mb-6" style="align-self: flex-start">
					<v-expansion-panel v-for="i in 3" :key="i">
						<v-expansion-panel-title expand-icon="mdi-menu-down">
							오늘은 Vue 공부를 할거야
							<AppMisc></AppMisc>
						</v-expansion-panel-title>
						<v-expansion-panel-text
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</v-expansion-panel-text>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-main>
		</v-layout>
	</v-card>
</template>

<script setup>
import AppMisc from '@/components/AppMisc.vue';
import { ref } from 'vue';

let drawer = ref(true);
let rail = ref(true);
</script>
<style scoped></style>
