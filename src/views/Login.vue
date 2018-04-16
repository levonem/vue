<template>
	<v-flex>
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
		<h1 v-if="showUser" :class="[ user ? 'green--text' : 'red--text' ]">
			<div v-if="user">
				<p>name: {{ user.name }}</p>
				<p>Email: {{ user.email }}</p>
			</div>
			<span v-else> INVALID USER </span>
		</h1>
	</v-flex>
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
			user: null,
			showUser: false,
		}),
		methods: {
			submit() {
				if (this.$refs.form.validate()) {
					axios.get('/users.json')
						.then(res => {
							const data = res.data;
							for (let user in data) {
								console.log(data[user].name == this.name)
								this.user = data[user].name == this.name ? data[user] : false;
								console.log(this.user)
								break
							}
							this.showUser = true
						})
				}
			}
		},
	}
</script>

<style scoped>

</style>