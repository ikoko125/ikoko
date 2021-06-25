<template>
    <div class="c">
        <slot/>
    </div>
</template>

<style lang="scss">
    @for $i from 1 to 10{
        .bg#{$i}{
            background-image: url("/image/cards/card0#{$i}.webp");
            background-size: cover;
        }
    }

    .c{
        &:hover{
            filter: brightness(1.5);
        }
        position: relative;
        transition: 0.45s filter;
        overflow: hidden;
        z-index: 5;
        border-radius: 2vw;
        border: none;
        margin: 1rem 0;
        background-color: #f1f1f1;
        width: 100%;
        height: 40vw;
        font-size: 5vw;
        
        a{
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        position: absolute;
        color: #f1f1f1;
        text-decoration: none;

        }
    }
    .c-jp,.c-en{
        background:linear-gradient(to bottom, #002c 0%, #002c 25%,transparent 100%);
            padding: 0.75vw 0.75vw 3vw 0.75vw;
            filter: none;
    }
    
    .c-jp{
    font-family: "Shippori Mincho", serif;
    }
    .c-en{
        font-family: "Pattaya" ,cursive;
    }
    
    
    @media screen and (min-width:1024px) {
        .c{
            border-radius: 1rem;
            width: 47.5%;
            height: 25vw;
            max-height: 350px;
            font-size:2.5vw;
            }
        
        .c-jp,.c-en{
                padding: 1rem 1rem 3rem 1rem;
        }
    }
    
    @media screen and (min-width:1440px) {
        .c{
            font-size:2.25rem;
            }
    }
</style>