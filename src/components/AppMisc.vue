<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" persistent width="1024">
			<template v-slot:activator="{ props }">
				<v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
			</template>
			<v-card>
				<v-card-title>
					<span class="text-h6">너의 할 일이 무엇인가</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12" sm="6" md="12">
								<v-text-field label="할일 제목*" required></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-textarea clearable label="Todo*" required></v-textarea>
							</v-col>
							<v-col cols="6" class="pb-0">
								<AppCalender></AppCalender>
							</v-col>
							<v-col cols="6" sm="6">
								<v-select
									:items="['0-17', '18-29', '30-54', '54+']"
									label="Age*"
									required
								></v-select>
							</v-col>
							<v-col cols="12" sm="6">
								<v-autocomplete
									:items="category"
									label="Interests"
									multiple
								></v-autocomplete>
							</v-col>
						</v-row>
					</v-container>
					<small>*indicates required field</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue-darken-1" variant="text" @click="dialog = false">
						Close
					</v-btn>
					<v-btn color="blue-darken-1" variant="text" @click="dialog = false">
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script setup>
import AppCalender from './AppCalender.vue';
import { ref } from 'vue';

let dialog = ref('false');
let category = ref([]);
</script>

<style lang="scss" scoped></style>
