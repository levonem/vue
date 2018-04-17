<template>
	<v-form @submit.prevent v-model="valid" ref="form" lazy-validation>
		<v-text-field
				label="Name"
				v-model="name"
				:rules="nameRules"
				:counter="10"
				required
		/>
		<v-text-field
				label="E-mail"
				v-model="email"
				:rules="emailRules"
				required
		/>
		<v-text-field
				label="Password"
				v-model="password"
				:rules="passRules"
				type="password"
				required
		/>
		<v-btn
				@click="submit"
				:disabled="!valid"
				type="submit"
		>
			submit
		</v-btn>
		<v-btn @click="clear">clear</v-btn>
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
                return !!v || 'Name is required'},
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
	        password: '',
	        passRules: [
		        v => !!v || 'Password is required',
	          v => (v.length >= 4 && v.length <= 10) || 'Name must be more than 4 and less than 10 characters'
          ],
        }),

        methods: {
            submit() {
                console.log('this.$refs.form' ,this.$refs.form)
                console.log('this.$refs.form.validate()' ,this.$refs.form.validate())

                if (this.$refs.form.validate()) {
                    axios.post('/users.json', {
                        name: this.name,
                        email: this.email,
		                    password: this.password
                    }).then(this.$router.push('/user'))
                }
            },
            clear() {
                this.$refs.form.reset()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
