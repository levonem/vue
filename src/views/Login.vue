<template>
	<v-flex>
		<v-form @submit.prevent v-model="valid" ref="form" lazy-validation>
			<v-text-field
					label="Name"
					v-model="name"
					:rules="nameRules"
					required
			/>

			<v-text-field
					label="Password"
					v-model="password"
					required
					type="password"
					:rules="passRules"
			/>
			<v-btn
					@click="submit"
					:disabled="!valid"
					type="submit"
			>
				submit
			</v-btn>
		</v-form>
		<!--<h1 v-if="showUser" :class="[ user ? 'green&#45;&#45;text' : 'red&#45;&#45;text' ]">-->
		<!--<div v-if="!user">-->
		<!--INVALID USER-->
		<!--</div>-->
		<!--</h1>-->
	</v-flex>
</template>

<script>
	import axios from 'axios'

	export default {
		data: () => ({
			valid: true,
			name: '',
			nameRules: [
				v => !!v || 'Name is required',
			],
			password: '',
			passRules: [
				v => !!v || 'Name is required',
			],
		}),
		watch: {},
		methods: {
			submit() {
				if (this.$refs.form.validate()) {
					axios.get('/users.json')
						.then(res => {
							const data = res.data;
							console.log('data', data)

							for (let user in data) {
								console.log(data[user].name)

								if (data[user].name == this.name) {
									if (data[user].password == this.password) {
										this.user = data[user];
										this.$router.push({name: 'userInfo', params: {id: user}});
									}
									console.log('this.user', this.user)
									break
								}
							}
						})
						.catch(err => console.log(err))

				}
			}
		},
	}
</script>

<style scoped>

</style>