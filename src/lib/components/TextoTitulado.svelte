<div>
    <h3><slot/></h3>
    <span></span>
</div>

<style lang='scss'>
    div{
        width: fit-content;
        margin: 20px auto 20px auto;
        text-align: center;
        text-transform: uppercase;
        span{
            width: 65%;
            height: 1px;
            margin: 10px auto 0 auto;
            background-color: black;
        }
    }
</style>