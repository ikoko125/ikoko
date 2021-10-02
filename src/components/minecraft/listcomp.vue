<template>
    <div class="lc">
        <nuxt-link class="lca" to="/">
            <div class="bgmc">
                <h3><slot/></h3>
            </div>
        </nuxt-link>
    </div>
</template>

<style lang="scss">

    @for $i from 1 to 10{
        .lca:nth-child(#{$i}){
            background-image: url("/image/cardsmc/card0#{$i}.png");
            background-size: cover;
        }
    }
    .lc{

        
    }
    .lca{
        display: inline-block;
        
        div{
            width: 300px;
            height: 100px;
            display: block;
            a,h3,p,h2,h1{
                text-align: left;
            display: block;
            color: #f2f2f2;
            text-decoration: none;
        }

        }
        
    }
    .lc:nth-child(odd){
            justify-content: right;
            text-align: right;
        }
</style>