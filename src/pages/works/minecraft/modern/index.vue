<template>
<section>
    <h1>工事中です</h1>
    <div class="cat">
            <!-- <div class = "bigview bg1"></div>
            <div class = "bigview bg2"></div> -->
            <div class="view bg1"></div>
            <div class="view bg2"></div>
            <div class="view bg3"></div>
            <div class="view bg4"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
        </div>
</section>
</template>

<style lang="scss" scoped>
    #mctop{
    background-image: url(/image/minecraft/view6.webp);
    background-size: cover;
    background-position-y: 80%;
    .wrapper{
        background-color: #05050575;
        padding: 3rem 0;
    }
}
.ap-enter-active , .ap-leave-active{
transition: all 1s 0.6s;
}
.ap-enter {
 opacity: 0;
}
section{
    h2{
        max-width:1400px;
        margin: 0 auto;
        padding-left: 1vw;
        color: #f1f1f1cc;
        font-size: 10vw;
        font-family: 'Chakra Petch', sans-serif;
        border-left: solid 3vw rgb(243, 221, 23);
    }
    @media  screen and (min-width:800px) {
        h2{
            font-size: 6vw;
        }
    }
    @media  screen and (min-width:1024px) {
        h2{
            font-size: 5vw;
        }
    }
    @media  screen and (min-width:1400px) {
        h2{
            font-size: 4.5rem
        }
    }
    color: #f1f1f1;
    background-color: rgb(37, 18, 31);
    #intro{
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: #1118;
        margin-bottom: 1rem;
        
        font-family: "Shippori Mincho" , serif;
        p{
            width: 90%;
            max-width: 1400px;
            margin: 0 auto;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-right: 2.5rem;
            a{
                text-decoration: none;
                color: rgb(243, 221, 23);
            }
        }
    }
    .catw{
        background-color: #050505;
    }
    @media screen and (min-width:1024px) {
        .cat{
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
        }
    }
    .cat{
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        .view{
        padding: 50% 0;
        margin: 5px;
        background-color: #f1f1f1;
        }
        .bigview{
            width: 490px;
            height: 240px;
            margin: 5px;
            background-color: #f1f1f1;
            background-size: cover;

        }
        a{
            display: block;
            width: 90%;
            height: 250px;
            margin: 5px;
            transition: 0.5s;
            .sm{
                transition: 0.5s;
                height: 100%;
                width: 100%;
                background-size: cover;
                overflow: hidden;
                .desc{
                    transition: 0.5s;
                    margin-top: 1rem;
                        padding: 0.6rem;
                        padding-left: 1rem;
                        padding-right: 6rem;
                    background-color: rgb(243, 221, 23);
                    //border-bottom: solid 10px #cc4c35;
                    color: #111;
                    
                    display: block;
                        display: inline-block;
                    p{
                        font-family: 'Chakra Petch', sans-serif;
                        user-select: none;
                    }
                    
                }
                &:hover{
                    opacity: 0.8;
                    .desc{
                        transform: none;
                    }
                }
            }
        }
        @media screen and (min-width:1024px) {
            a{
                width: 45%;
            }
        }
        @media screen and (max-width:860px) {
            .desc{
                font-size: 2rem;
                transform: none;
                    padding-left: 0.6rem !important;
                    padding-right: 4rem !important;
            }
            
        }
        @media  screen and (min-width:860px) {
            .desc{
                    transform: translateX(-100%);
                    font-size: 2.35rem;
            }
            
        }
        .bg1{
            background-image: url(/image/minecraft/build1/view1.webp);
            background-size: cover;
            background-position-y: 70%;
        }
        .bg2{
            background-image: url(/image/minecraft/build1/view2.webp);
            background-size: cover;
            background-position-x: 40%;
        }
        
        .bg3{
            background-image: url(/image/minecraft/build1/view3.webp);
            background-size: cover;
            background-position-x: 50%;
        }
        .bg4{
            background-image: url(/image/minecraft/build1/view4.webp);
            background-size: cover;
        }
    }
}

</style>