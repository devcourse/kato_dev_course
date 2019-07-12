<template>
	<section class="single-post">
		tytuł: <br>
		{{singlePost.title}} <br><br>
		treść: <br>
		{{singlePost.body}}
	</section>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'singlePost',
		props: ['postId'],
		data () {
			return {
				singlePost: []
			}
		},
		/*
		pobieranie zmiennych params za pośrednictwem dostępu do globalnego
		obiektu $route, przy wykorzystaniu nasłuchiwania watch
		*/
		// kod starej metody pobierania zmiiennych 
		// przekazanych w params
		// watch: {
		// 	'$route': 'fetchData'
		// },
		methods: {
			getSinglePost() {
				return axios.get('https://jsonplaceholder.typicode.com/posts/' + this.postId)
			},
			// kod starej metody pobierania zmiiennych 
			// przekazanych w params
			// fetchData () {
			// 	this.postId = this.$route.params.postId
			// 	console.log(this.$route.params)
			// }
		},
		created () {
			this.getSinglePost()
			.then( response => {
				console.log(response)
				this.singlePost = response.data
			})
			.catch( err => {
				alert(err)
			})
			// kod starej metody pobierania zmiiennych 
			// przekazanych w params
			// console.log(this.$route.params)
			// this.postId = this.$route.params.postId
		}
	}
</script>
<style></style>
