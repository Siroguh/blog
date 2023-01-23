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
    <div class='producto_piezas'>
        <span>Preparados</span>
        <div>
            <ul>
                <li>· Centro</li>
                <li>· Maza</li>
                <li>· Contra</li>
                <li>· Punta</li>
            </ul>
        </div>  
    </div>
    <a href="/" class='producto_enlace'>Saber Más</a>
</div>

<style lang='scss'>
    .producto{
        & div{
            & a{
                & img{
                    width: 100%;
                    display: block;
                    margin: 0 auto;
                    padding: 20px;
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
        &_piezas{
            color: var(--primary-color);
            & span{
                padding: 15px 20px 0 20px;
                font-size: 16px;
                text-transform: uppercase;
            }
            & div ul{
                width: 200px;
                padding: 0 20px;
                display: grid;
                grid-template-rows: repeat(2,minmax(0,1fr));
                grid-template-columns: repeat(2,minmax(0,1fr));
            }
        }
        &_enlace{
            width: 150px;
            height: 70px;
            padding: 0 20px;
            margin: 20px 20px;
            display: grid;
            align-items: center;
            justify-items: center;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            border-radius: 50%;
            text-transform: uppercase;
            transition: .2s ease-in-out all;
            &:hover{
                color: var(--white-color);
                background-color: var(--primary-color);
            }
        }
    }
</style>