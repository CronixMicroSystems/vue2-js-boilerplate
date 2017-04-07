<template>
  	<div onload="this.created()" class="home_container">
        Hello!!!
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	name: 'home',
  	components: {
  		itemcontainer
  	},
    created(){
        console.log('!!!!!!!')
    }
}
</script>

<style lang="scss" scoped>
    .home_container{

    }
</style>
