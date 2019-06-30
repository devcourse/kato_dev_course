<template>
	<header>
		<div class="head-nav">

			<div class="container">
				<div class="row align-items-center">
					<div class="col-6">

						<div class="head-nav-left">
							<div class="head-nav-left-single">
								June 29, 2019
							</div>

							<router-link
								v-for="link in menuTwo" 
								:key="link.id"
								class="head-nav-left-single":to="link.route">
								{{link.name}}
							</router-link>	


						</div>

					</div>

					<div class="col-6">
						<div class="head-nav-right">
							
							<iconSocial
								v-for="icon in social_icons"
								:key="icon.id"
								:aHref="icon.href"
								:imgSrc="icon.url"
								:imgAlt="icon.name"/>

<!-- 							<div
								v-for="icon in social_icons"
								:key="icon.id" 
								class="head-nav-right-single">
								<a :href="icon.href">
									<img
										class="head-nav-right-single-img"
										:src="icon.url"
										:alt="icon.alt">
								</a>
							</div> -->

						</div>
					</div>
				</div>
			</div>

		</div>

		<nav class="head-navigation">
			<div class="container">
				<div class="row">
					<div class="col-2">
						<img 
							class="head-navigation-logo-img" 
							src="@/assets/logo.png" 
							alt="">
					</div>
					<div class="col-10">
						<ul class="head-navigation-ul">
							<li 
								v-for="link in menuOne"
								:key="link.id"
								class="head-navigation-ul-li">
								<router-link
									class="head-navigation-ul-li-a"
									:to="link.route">
									{{link.name}}
								</router-link>
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
import iconTwitter from '@/assets/icon-twitter.png'
import iconFb from '@/assets/icon-fb.png'
import iconInsta from '@/assets/icon-instagram.png'

import iconSocial from '@/components/IconSocial.vue'

export default {
	name: 'AppHeader',
	components: {
		iconSocial
	},
	data () {
		return {
			social_icons: [
				{
					url: iconTwitter,
					href: 'https://twitter.com',
					name: 'twitter-icon'
				},
				{
					url: iconFb,
					href: 'https://facebook.com',
					name: 'facebook-icon'
				},
				{
					url: iconInsta,
					href: 'https://instagram.com',
					name: 'instagram-icon'
				}
			],
			menuOne: [
				{
					name: 'Home',
					route: '/'
				},
				{
					name: 'About',
					route: '/about'
				}
			],
			menuTwo: [
				{
					name: 'Home',
					route: '/'
				},
				{
					name: 'About',
					route: '/about'
				}
			]
		}
	}
}
</script>
<style>
.head-nav {
	padding:5px 0; 
	background: #222222;
	color:white;
	display: flex;
	align-items: center;
}
.head-nav-left,
.head-nav-right {
	display: flex;
}
.head-nav-left {
	justify-content: flex-start;
}
.head-nav-left-single {
	font-size: 12px;
	margin-right: 20px;
	color: rgb(187,187,187);
	text-decoration: none;
	text-transform: uppercase;
	transition: color .4s;
}
.head-nav-left-single:first-child {
	color: #ff4dac;
}
.head-nav-left-single:hover {
	text-decoration: none;
	color:#fff;
}
.head-nav-right {
	justify-content: flex-end;
}
.head-nav-right-single {
	align-content: flex-end;
	margin-left: 20px;
}
.head-nav-right-single-img {
	max-width: 60%;
}
.head-navigation {
	padding: 10px 0;
	box-shadow: 0px 3px 13px -8px rgba(0,0,0,0.75);
}
.head-navigation-logo-img {
	max-width: 100%;
}
.head-navigation-ul {
	list-style-type: none;
	display: flex;
	justify-content: flex-end;
	height: 100%;
    align-items: center;
    margin: 0;
}
.head-navigation-ul-li {
	text-transform: uppercase;
	margin-left:15px;
}
.head-navigation-ul-li > .head-navigation-ul-li-a  {
	color: black;
	text-decoration: none;
	transition: color .4s;
}
.head-navigation-ul-li:hover > .head-navigation-ul-li-a  {
	color: #e91e63;
}
.head-navigation-ul:last-child {
	margin-left:0;
}
</style>