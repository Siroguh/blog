<script>
	import { page } from "$app/stores"
    const navs = [ { title: "tienda", href: "/tienda", },/*{title: "inicio",href: "/",}, */{ title: "productos", href: "/productos", }, { title: "el secadero", href: "/el-secadero", }, { title: "servicios", href: "/servicios", }, { title: "contacto", href: "/contacto", }, { title: "blog", href: "/blog", }, ]
	$: routeId = $page.route.id

	import { fade } from 'svelte/transition'

	import MediaQuery from "$lib/components/technical/MediaQuery.svelte"
    import { Hamburger } from 'svelte-hamburgers'
    let open;

    import Cerdovillarroya from "$lib/components/svg/cerdovillarroya.svelte"
    import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
    import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'

    import { browser } from '$app/environment'

    let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true

    function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
        document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
    }   
</script>

<MediaQuery query="(max-width: 799px)" let:matches>
	{#if matches}
    <header>
        <nav class='navsmall'>
            <div class='navsmall_container'>
                <div class='cerdo'><a href="/"><Cerdovillarroya/></a></div>
                <button
                type="button"
                role="switch"
                aria-label="Toggle Dark Mode"
                aria-checked={isDarkMode}
                on:click={() => {
                  isDarkMode = !isDarkMode
                  localStorage.setItem('isDarkMode', isDarkMode.toString())
        
                  disableTransitionsTemporarily()
        
                  if (isDarkMode) {
                    document.querySelector('html').classList.add('dark')
                  } else {
                    document.querySelector('html').classList.remove('dark')
                  }
                }}
              >
                <MoonIcon class="hidden text-zinc-500 dark:block" />
                <SunIcon class="block text-zinc-400 dark:hidden" />
              </button>
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
            <slot/>
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
            <slot/>
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
        & button{
            position: absolute;
            z-index: 10;
            width: 25px;
            height: 25px;
            top: 36px;
            right: 90px;
        }
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