<script>
    export let nombre
    export let descripcion
    export let href
    export let src
    export let alt
</script>
<div class='producto'>
    <div><a {href}><img {src} {alt}></a></div>
    <h3>{nombre}</h3>
    <p>{descripcion}</p>
</div>

<style lang='scss'>
    .producto{
        margin-bottom: 20px;
        & div{
            & a{
                & img{
                    width: 100%;
                    height: 330px;
                    display: block;
                    margin: 0 auto;
                    padding: 20px;
                    object-fit: cover;
                }
            }
        }
        & h3{
            width: 100%;
            padding: 15px 20px;
            font-size: 35px;
            color: var(--secondary-color);
        }
        & p{
            width: 100%;
            padding: 0 20px;
            font-size: 22px;
            line-height: 35px;
            color: var(--primary-color);
        }
    }
</style>