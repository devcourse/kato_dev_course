<template>
	<section class="single-post">


		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6">
					<div class="single-post-left">

						<div class="sinlge-post-left-header"></div>
						<div class="sinlge-post-left-content"></div>
					
					</div>
				</div>
				<div class="col-md-6">
					<div
						:style="{ 'backgroundImage': 'url(' + imageParalax + ')' }"
						class="single-post-right-img"
						alt="">
						</div>
				</div>
			</div>
		</div>


<!-- 		tytuł: <br>
		{{singlePost.title}} <br><br>
		treść: <br>
		{{singlePost.body}} -->

	</section>
</template>
<script>
	import paralaxImg from '@/assets/single-post.jpg'
	import axios from 'axios'
	export default {
		name: 'singlePost',
		props: ['postId'],
		data () {
			return {
				singlePost: [],
				imageParalax: paralaxImg
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
			// kod starej metody pobierania zmiennych 
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
<style>
	.single-post-right-img {
		height: 600px;
		width: 100%;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;		
	}
</style>
