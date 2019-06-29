<template>
	<header>
		<div class="head-nav">

			<div class="container">
				<div class="row">
					<div class="col-6">
						<div class="head-nav-left">
							<div class="head-nav-left-single">
								June 29, 2019
							</div>
							<div class="head-nav-left-single">
								HOME
							</div>
							<div class="head-nav-left-single">
								ABOUT US
							</div>
							<div class="head-nav-left-single">
								TEAM
							</div>
						</div>

					</div>

					<div class="col-6">
						<div class="head-nav-right">
							<div class="head-nav-right-single">
								<img src="@/assets/icon-fb.png" alt="">
							</div>

							<div class="head-nav-right-single">
								<img src="@/assets/icon-instagram.png" alt="">
							</div>

							<div class="head-nav-right-single">
								<img src="@/assets/icon-twitter.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

		<nav class="head-navigation">
			<div class="container">
				<div class="row">
					<div class="col-2">
						<img class="head-navigation-logo-img" src="" alt="">
					</div>
					<div class="col-10">
						<ul class="head-navigation-ul">
							<li class="head-navigation-ul-li">
								<router-link to="/"> Home </router-link>
							</li>
							<li class="head-navigation-ul-li">
								<router-link to="/about"> About </router-link>
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'AppHeader'
}
</script>
<style>
.head-nav {
	height: 40px;
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
	margin-right: 20px;
}
.head-nav-left-single:first-child {
	color: #ff4dac;
}
.head-nav-right {
	justify-content: flex-end;
}
.head-nav-right-single {
	align-content: flex-end;
	margin-left: 20px;
}
.head-navigation {
	height: 100px;
	box-shadow: 0px 3px 13px -8px rgba(0,0,0,0.75);
}
.head-navigation-ul {
	list-style-type: none;
	display: flex;
	justify-content: flex-end;
}
.head-navigation-ul-li {
	margin-left:15px;
}
.head-navigation-ul:last-child {
	margin-left:0;
}
</style>