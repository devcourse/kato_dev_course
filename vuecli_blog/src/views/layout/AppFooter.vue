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
				<h2>test</h2>
			</div>

			<div class="col-md-4 col-12">
				<h2>test</h2>
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

</style>