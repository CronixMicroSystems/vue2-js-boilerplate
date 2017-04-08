<template>
	<div class="app-viewport" id="file-list">
		<sidebar></sidebar>
		<header-bar></header-bar>

		<main class="main-content">
			<md-list class="md-double-line">
				<md-subheader class="md-inset">Folders</md-subheader>

				<md-list-item>
					<md-avatar class="md-avatar-icon">
						<md-icon>folder</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>Photos</span>
						<p>Jan 9, 2014</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>info</md-icon>
					</md-button>
				</md-list-item>

				<md-list-item>
					<md-avatar class="md-avatar-icon">
						<md-icon>folder</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>Recipes</span>
						<p>Jan 17, 2014</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>info</md-icon>
					</md-button>
				</md-list-item>

				<md-list-item>
					<md-avatar class="md-avatar-icon">
						<md-icon>folder</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>Work</span>
						<p>Jan 28, 2014</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>info</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-subheader class="md-inset">Files</md-subheader>

				<md-list-item>
					<md-avatar class="md-avatar-icon md-primary">
						<md-icon>insert_drive_file</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>Vacation Itinerary</span>
						<p>Jan 20, 2014</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>info</md-icon>
					</md-button>
				</md-list-item>

				<md-list-item>
					<md-avatar md-theme="orange" class="md-avatar-icon md-primary">
						<md-icon>collections</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>Kitchen Remodel</span>
						<p>Jan 10, 2014</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>info</md-icon>
					</md-button>
				</md-list-item>

				<md-list-item>
					<md-avatar md-theme="green" class="md-avatar-icon md-primary">
						<md-icon>view_list</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>Grocery Shop</span>
						<p>Jan 10, 2014</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>info</md-icon>
					</md-button>
				</md-list-item>

				<md-list-item>
					<md-avatar md-theme="orange" class="md-avatar-icon md-primary">
						<md-icon>collections</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>Weekend Pictures</span>
						<p>Jan 10, 2014</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>info</md-icon>
					</md-button>
				</md-list-item>
			</md-list>
		</main>
	</div>
</template>

<script>
  import header from '../components/common/header/'
  import sidebar from '../components/common/sidebar/'
  export default {
    name: 'app',
    components: {
      'header-bar': header,
      sidebar
    },
  }
</script>

<style lang="scss">
  	
</style>
