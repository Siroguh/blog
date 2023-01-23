<script>
    export let src;
    export let alt;
</script>

<div class='hero'>
    <img {src} {alt} {...$$restProps}/>
</div>

<style>
    .hero{
        width: 100%;
        height: 670px;
        margin: 0 auto;
        margin-bottom: -60px;
        padding: 0;
    }
    .hero img{
        height: inherit;
        object-fit: cover;
        object-position: bottom;
    }
    @media screen and (min-width: 400px) {
        .hero{
            height: 290px;
        }
    }
</style>