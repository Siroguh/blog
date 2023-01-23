<script>
	import { page } from "$app/stores";
    const navs = [ { title: "tienda", href: "/tienda", },/*{title: "inicio",href: "/",}, */{ title: "productos", href: "/productos", }, { title: "el secadero", href: "/el-secadero", }, { title: "servicios", href: "/servicios", }, { title: "contacto", href: "/contacto", }, { title: "blog", href: "/blog", }, ]
	$: routeId = $page.route.id;

	import { fade } from 'svelte/transition';

	import MediaQuery from "$lib/components/technical/MediaQuery.svelte";
    import { Hamburger } from 'svelte-hamburgers';
    let open;

    import Cerdovillarroya from "$lib/components/svg/cerdovillarroya.svelte";
</script>

<MediaQuery query="(max-width: 799px)" let:matches>
	{#if matches}
    <header>
        <nav class='navsmall'>
            <div class='navsmall_container'>
                <div class='cerdo'><a href="/"><Cerdovillarroya/></a></div>
                <div class='hamburguer'><Hamburger bind:open type='vortex' --color="rgb(245, 59, 51)" --active-color='white' --hover-opacity='0.7' --hover-opacity-active='1'/></div>
            </div>
            {#if open}
            <div class='navsmall_ul' in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100, delay: 300 }}>
                <ul in:fade={{ duration: 150, delay: 250 }} out:fade={{ duration: 100, delay: 100 }}>
                    {#each navs as { title, href }}
                        <li><a {href} class:active={routeId == href} {title} on:click={() => (open = !open)}>{title}</a></li>
                    {/each}
                </ul>
            </div>
            {/if}
        </nav>
    </header>
	{/if}
</MediaQuery>
<MediaQuery query="(min-width: 800px)" let:matches>
	{#if matches}
		<nav class='navbig'>
			<ul>
                {#each navs as { title, href }}
                    <li><a {href} class:active={routeId == href} {title} on:click={() => (open = !open)}>{title}</a></li>
                {/each}
			</ul>
		</nav>
	{/if}
</MediaQuery>
<style lang='scss'>
    header{
        width: 100%;
        height: 100px;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .navsmall{
        width: 100%;
        height: 100px;
        position: relative;
        background-color: var(--white-color);
        & .cerdo{
            padding-bottom: 10px;
        }
        &_container{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 30px;
            & .hamburguer{
                position: absolute;
                top: 20px;
                right: 20px;
                z-index: 12;
            }
        }
        &_ul{
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            position: absolute;
			background-color: var(--primary-color);
			z-index: 11;
            & ul{
                width: 100vw;
				height: 100vh;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 20px;
				font-size: 35px;
                color: var(--white-color);
				background-color: rgb(245, 59, 51);
            }
        }
    }
    .navbig{
		width: 100%;
		height: 130px;
		color: var(--primary-color);
		& ul {
			width: inherit;
			height: inherit;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 25px;
			font-size: 30px;
			& li a{
				transition: all 1s ease-in-out;
				&:hover{
					border-bottom: 1px solid var(--primary-color);
					margin-bottom: -1px;
				}
			}
		}
	}
</style>