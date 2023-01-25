<script>
	import { page } from "$app/stores";
	
	const navs = [ {title: "inicio",href: "/",}, { title: "productos", href: "/productos", }, { title: "el secadero", href: "/el-secadero", }, { title: "servicios", href: "/servicios", }, { title: "contacto", href: "/contacto", }, { title: "blog", href: "/blog", }, ]
	

	$: routeId = $page.route.id;
</script>

<footer>
	<ul>
		{#each navs as { title, href }}
			<li><a {href} class:active={routeId == href} {title}>{title}</a></li>
		{/each}
	</ul>
</footer>

<style lang='scss'>
	footer{
		width: 100%;
		height: 130px;
		max-width: var(--max-widthlg);
		margin: 0 auto;
		padding: 0 50px;
		color: var(--white-color);
		font-family: var(--canela);
		flex-shrink: 0;
		background: var(--primary-color);
		& ul{
			width: inherit;
			height: inherit;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 15px;
			& li a{
				transition: all .2s cubic-bezier(1, 0, 0, 1);
				&:hover{
					text-decoration: underline;
				}
			}
		}
	}
	.active{
		opacity: 0.6;
	}
</style>
