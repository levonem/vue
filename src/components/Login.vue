<template>
	<v-form v-model="valid" ref="form" lazy-validation>
		<v-text-field
				label="Name"
				v-model="name"
				:rules="nameRules"
				:counter="10"
				required
		/>

		<v-btn
				@click="submit"
				:disabled="!valid"
		>
			submit
		</v-btn>
	</v-form>
</template>

<script>
	import axios from 'axios'

	export default {
		data: () => ({
			valid: true,
			name: '',
			nameRules: [
				v => {
					return !!v || 'Name is required'
				},
				v => (v && v.length <= 10) || 'Name must be less than 10 characters'
			],
			user: null
		}),
		methods: {
			submit() {
				if (this.$refs.form.validate()) {
					axios.get('/users.json')
						.then(res => {
							const data = res.data;
							for (let user in data) {
								this.user = data[user] === name? data[user]: 'INVALID USER'
							}

						})
				}
			}
		},
	}
</script>

<style scoped>

</style>