<template>
	<div class="about">
		<v-progress-circular v-if="bool" indeterminate :size="70" :width="7" color="amber"
		                     class="mt-5 pt-5"></v-progress-circular>
		<v-list two-line v-else>
			<v-list-tile-content>
				name: {{ user.name }} || email: {{ user.email }}
			</v-list-tile-content>
		</v-list>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				user: '',
				bool: true,
			}
		},
		computed: {},
		created() {
			axios.get('/users.json')
				.then(res => {
					let data = res.data;
					for (let u in data) {
						if( u == this.$route.params.id){
							this.user = data[u]
						}
					}
					this.bool = false;
				})
				.catch(err => console.log(err))
		}
	}
</script>