<template>

	<footer>









<!--
skrót przy wykorzystaniu wtyczki emmet do tworzenia struktury kodu
.upp-footer+.down-footer -> tutaj naciskamy tab 
generuje się poniższa struktura
-->

<!-- polecenie emmet -->
<!-- .upp-footer>.container>.row>.col-md-4.col-12*3

w elemencie z klasami .col-md-4.col-12 wykonujemy poniższe polecenie emmeta
.upp-footer-col>.upp-footer-img+.upp-footer-p -->

<div class="upp-footer">
	<div class="container">

		<div class="row">
			
			<div class="col-md-4 col-12">
				
				<div class="upp-footer-col">
					<img 
						class="upp-footer-col-img"
						src="@/assets/logo.png" alt="logo">
					<p
						class="upp-footer-col-p">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam sapiente quia nulla magni laborum temporibus repudiandae fugiat inventore recusandae, aliquam cumque maiores veritatis soluta possimus ipsa, illum quasi nisi.
					</p>
				</div>

				<!-- <h2>test</h2> -->
			</div>

			<div class="col-md-4 col-12">
				
				<div class="upp-footer-col">

					<div class="upp-footer-col-header">
						RECENT POSTS
					</div>

					<!-- kod emmet -->
					<ul class="upp-footer-col-ul-normal">
						<li class="upp-footer-col-ul-normal-li">
							Lorem ipsum dolor
						</li>
						<li class="upp-footer-col-ul-normal-li">
							Lorem ipsum dolor
						</li>
						<li class="upp-footer-col-ul-normal-li">
							Lorem ipsum dolor
						</li>
					</ul>


				</div>

			</div>

			<div class="col-md-4 col-12">
				<div class="upp-footer-col">
					<div class="upp-footer-col-header">
						TAGS
					</div>
					
					<ul class="upp-footer-col-ul-tags">
						<li class="upp-footer-col-ul-tags-li">
							asdas
						</li>
						<li class="upp-footer-col-ul-tags-li">
							asdas
						</li>
						<li class="upp-footer-col-ul-tags-li">
							asdas
						</li>
					</ul>

				</div>

			</div>

		</div>

	</div>	
</div>


<div class="down-footer"></div>





<!-- 		<div class="container">
			<h3>Copyright Rafał Jaseniuk</h3>
		</div> -->

	</footer>

</template>

<script>
export default {
	name: 'AppFooter'
}
</script>
<style>	
.upp-footer {
	background: rgb(246, 246, 246);
}
.upp-footer-col {
	padding: 10px;
}
.upp-footer-col-img {
	max-width: 40%;
	display: block;
	text-align: left;
	padding-bottom: 15px;
}
.upp-footer-col-p {
	font-size: 14px;
	text-align: left; 
}


.upp-footer-col-header {
	font-size: 14px;
/*
	border-bottom-width: 1px;
	border-bottom-style: solid; 
	border-bottom-color: black;
	powyższe właściwości są tym samym co widzimy linijkę niżej, tylko w rozbudowanej wersji
*/
	border-bottom: 1px solid rgba(0, 0, 0, .1);
	/*
	poniższa właściwośc nadpiszę szerokośc borderu powyższej
	border-bottom-width: 4px;
	*/
	padding: 10px 0;
	margin-bottom: 15px;
	text-align: left;
	font-weight: 700;
}
.upp-footer-col-ul-normal,
.upp-footer-col-ul-tags {
	margin: 0;
	padding: 0;
	list-style-type: none;
	text-align: left;
}
.upp-footer-col-ul-tags-li {
	padding: 5px;
	margin-right: 5px;
	margin-top: 5px;
	background: black;
	border-radius: 10px;
	display: inline-block;
	text-transform: uppercase;
	color: white;
	font-size: 10px;
}
</style>