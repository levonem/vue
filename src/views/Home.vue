<template>
	<v-layout row justify-center>
		<v-flex xs4>
			<HelloWorld/>
		</v-flex>
	</v-layout>

</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
