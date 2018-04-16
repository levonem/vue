<template>
	<div class="about">
		<v-progress-circular v-if="bool" indeterminate :size="70" :width="7" color="amber"
		                     class="mt-5 pt-5"></v-progress-circular>
		<v-list two-line v-else>
			<v-list-tile-content
					v-for="u in users"
			> name: {{ u.name }} || email: {{ u.email }}
			</v-list-tile-content>
		</v-list>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				users: '',
				bool: true,
			}
		},
		computed: {},
		created() {
			axios.get('/users.json')
				.then(res => {
					let data = res.data;
					let users = [];
					for (let d in data) {
						users.push(data[d])
					}
					this.users = users;
					this.bool = false;
				})
				.catch(err => console.log(err))
		}
	}
</script>