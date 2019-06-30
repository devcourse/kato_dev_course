<template>
	<div class="head-nav-right-single">
		<a :href="aHref">
		<img
			class="head-nav-right-single-img"
			:src="imgSrc"
			alt="">
		</a>
	</div>
</template>

<script>
export default {
  name: 'IconSocial',
  props: {
	aHref: '',
	imgSrc: ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
