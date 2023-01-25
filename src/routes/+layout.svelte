<script>
  import "@unocss/reset/antfu.css"
  import '../app.css'

  import Nav from "$lib/components/Nav.svelte"
  import Footer from "$lib/components/Footer.svelte"
</script>

<div class="app">
	<Nav/>
	<div>
        <slot />
  	</div>
	<Footer/>
</div>

<style global lang='scss'>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		& div{
			display: flex;
			flex: 1 0 auto;
		}
  	}
	/*
		//////////////////////////////////
		//////ESTILOS DE TODA LA APP//////
		//////////////////////////////////
	*/
	:root{
		--primary-color: rgb(245, 59, 51);
		--secondary-color: rgb(84, 31, 43);
		--white-color: #fff;
		--dark-gray-color: #888;
		--canela: 'canela', arial;
	}
	@font-face{
		font-family: 'canela';
		src: url('fonts/Canela-Light.otf');
		font-weight: 400;
		font-style: normal;
		font-display: swap
	}
	body{
		height: 100%;
		font-family: var(--canela) !important;
	}
	html,
	body {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>