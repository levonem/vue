<template>
	<v-layout row justify-center>
		<v-flex xs4>
			<register/>
		</v-flex>
	</v-layout>

</template>

<script>
    // @ is an alias to /src
    import Register from '@/components/Register.vue'

    export default {
        name: 'home',
        components: {
	        Register
        }
    }
</script>
