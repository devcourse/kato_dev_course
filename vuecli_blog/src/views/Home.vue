<template>
	<section class="posts">
		<div class="container">
			<!-- kod emmet -->
<!-- .row>.single-post>.col-md-6.col-12+.col-md-6.col-12 -->
			
				<!-- dokończyć in da hause -->
				<div
					v-for="post in posts"
					:key="post.id" 
					class="single-post">

<div class="row">
	<div class="col-md-6 col-12">
		<!-- strona z darmowymi zdjęciami bardzo dobrej jakości -->
		<!-- https://unsplash.com/ -->
		<img
			class="single-post-left-img"
			src="@/assets/single-post.jpg"
			alt="">
	</div>
	<div class="col-md-6 col-12">


		<div class="single-post-right">
			<h3 class="single-post-right-title">
				<!-- 				
				post.title 
				jest równe
				response.data[numer_wpisu].title 
				-->
				{{post.title}}
			</h3>	
			<span class="single-post-right-date">
				12.07.2019
			</span>
			<p class="single-post-right-desc">
				{{limitChars(post.body, limitDesc)}}
			</p>
			<div class="single-post-right-footer">
				<div class="single-post-right-footer-left">
					<a
						class="single-post-right-footer-left-a"
						href="#">
							Czytaj więcej
						</a>
				</div>

				<div class="single-post-right-footer-right">
					<div class="single-post-right-footer-right-comments">
						<img
							class="single-post-right-footer-right-comments-icon"
							src="@/assets/icon-comments.png"
							alt="">
						<span class="single-post-right-footer-right-comments-count">
							0
						</span>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>

				</div>
		</div>
	</section>
</template>

<script>

import axios from 'axios'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data() {
  	return {
  		posts: [],
  		limitDesc: 80
  	}
  },
  methods: {
  	getPosts() {
  		return axios.get('https://jsonplaceholder.typicode.com/posts')
  	},
  	// string -> ciąg znaków który chcemy ograniczyć
  	// limit -> liczba ograniczająca np. 20 
limitChars (string, limit) {
	// wersja zwykła instrukcji warunkowej
	// let stringReturned = ''
	// if (string.length >= limit) {
	// 	stringReturned = string.substr(0,limit) + '..'
	// }
	// return stringReturned 

	// wersja skrócona instrukcji warunkowej
	return string.length >= limit ? string.substr(0,limit) + '..' : void 0

	// poniższy kod wrzucamy 
	// do template w miejscu gdzie listujemy wpisy
	// {{limitChars(post.body, 40)}}
}
  },
  created () {
  	const vm = this
  	this.getPosts()
  	// poniżej wykorzystanie skróconej wersji funkcji, 
  	// tzw funkcja strzałkowa
  	.then(response => {
  		console.log(response)
  		vm.posts = response.data
  	})
  	.catch(err => {
  		console.log(err)
  	})
	// wyciąganie z api za pośrednictwem zwykłej funkcji
	// function (response) {

	// }
	// wyciąganie z api za 
	// pośrednictwem skróconej funkcji strzałkowej
	// response => {
	// }

  }
}
</script>
<style>
.single-post {
	margin: 20px 0;
}
.single-post-left-img {
	width: 100%;
	border-radius: 8px;
	/*generator box-shadow https://www.cssmatic.com/box-shadow*/
	box-shadow: 0 8px 20px rgba(0,0,0,.1),0 10px 44px rgba(0,0,0,.14);
	transition: transform 0.4s;
}
.single-post-left-img:hover {
	transform: translate(0, -10px);
}
.single-post-right {
    text-align: left;
    padding: 23px;
    height: 100%;
}
.single-post-right-footer {
	display: flex;
    justify-content: space-between;
}
</style>