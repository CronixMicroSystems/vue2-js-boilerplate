<template>
	<md-whiteframe md-elevation="3" class="main-toolbar">
		<md-toolbar>
			<div class="md-toolbar-container">
				<md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
					<md-icon>menu</md-icon>
				</md-button>

				<span style="flex: 1"></span>

				<md-button class="md-icon-button">
					<md-icon>search</md-icon>
				</md-button>

				<md-button class="md-icon-button">
					<md-icon>view_module</md-icon>
				</md-button>
			</div>
		</md-toolbar>
	</md-whiteframe>
</template>

<script>
export default {
	name: 'header',

	created(){console.log()}
}
</script>

<style lang="sass">

</style>
