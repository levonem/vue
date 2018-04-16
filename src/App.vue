<template>
	<v-app id="app">
		<v-toolbar>
			<v-spacer/>
			<v-toolbar-items>
				<v-btn to="/">Register</v-btn>
				<v-btn to="/user">Users</v-btn>
				<v-btn to="/login">Login</v-btn>
			</v-toolbar-items>
			<v-spacer/>
		</v-toolbar>
		<v-content>
			<v-container grid-list-md text-xs-center>
				<transition
						mode="out-in"
						:duration="{ enter: 300, leave: 200 }"
						enter-active-class="animated slideInLeft"
						leave-active-class="animated slideOutRight"
				>
					<router-view/>
				</transition>
			</v-container>
		</v-content>
	</v-app>
</template>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
</style>
