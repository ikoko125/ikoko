<template>
    <section id="works">
        <div>
        <h1>Works</h1>
        </div>
        <div class="ui-wrapper">
                <div class="Minecraft" @click="pagepre('/works/minecraft')" >
                    <p>MINECRAFT</p>
                </div>
                <div class="OtherFanfic" >
                    <p>FANFIC</p>
                </div>
                <div class="fanfichayate" >
                    <p>HAYATE-FANFIC</p>
                </div>
                <div class="ASHI" >
                    <p>ASHI</p>
                </div>
                <div class="Magicavoxel" >
                    <p>MAGICAVOXEL</p>
                </div>
                <div class="modesfi" >
                    <p>MODES-FI</p>
                </div>
                <div class="product" >
                    <p>PRODUCT</p>
                </div>
                <div class="Design" >
                    <p>DESIGN</p>
                </div>
                <div class="Illust" >
                    <p>ILLUST</p>
                </div>
            <div class="program" >
                <p>PROGRAM</p>
            </div>
            <div class="RTM" @click="pagepre('/works/minecraft/RTM')" key="u"  >
                <p>RTM</p>
            </div>
            <div class="ADD1" ></div>
            <div class="ADD2" ></div>
            <div class="ADD3" ></div>
            <div class="ADD4" ></div>
        </div>
        
    </section>   
</template>

<script>
export default {
    methods:{
        pagepre(url){
            setTimeout(() => this.$router.push(url),1000);
        }
    }
}
</script>

<style lang="scss" scoped>
    @keyframes inanim {
        0%{
            transform: (translateY(100px) rotateX(90deg));
        }
        100%{
            transform: (translateY(0px) rotateX(0deg));
        }
    }
    @for $i from 1 through 15 {
        .ui-wrapper div:nth-child(#{$i}) { 
            animation: 1s 0.1 + 0.05s * $i forwards inanim; 
        }
    }
    .ui-wrapper a{
        text-decoration: none;
    }
    .ui-wrapper div{
        transform: (translateY(100px) rotateX(90deg));
    }
    section{
        user-select: none;
        background-color: #070721;
        z-index: 5;
            h1{
                z-index: -1;
                top:-8vw;
                color: #505075;
                font-size: 15vw;
            }
            @media screen and (min-width:600px) {
                .ui-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 2fr 2fr;
                    gap: 0px 0px;
                    grid-auto-flow: row;
                    grid-template-areas:
                        "Illust Minecraft Minecraft program program"
                        "Illust Minecraft Minecraft modesfi modesfi"
                        "OtherFanfic Minecraft Minecraft modesfi modesfi"
                        "OtherFanfic ASHI ASHI Magicavoxel ADD1"
                        "product product fanfichayate fanfichayate fanfichayate"
                        "product product fanfichayate fanfichayate fanfichayate"
                        "ADD4 Design Design Design ADD3"
                        "ADD2 ADD2 RTM RTM RTM";
                      width: 97.5vw; 
                        height: 135vw; 
                        margin: 0 auto;
                        div{
                            transition: 0.5s cubic-bezier(.09,.66,.48,.99);
                            margin: 2.5px;
                            background-size: cover;
                            a, p{
                                color:#f1f1f1;
                                font-size:2.4vw;
                                background-color: #0005;
                                padding: 0.5rem;
                                font-family: 'Chakra Petch', sans-serif;
                            }
                        }
                        div:hover{
                            opacity: 0.7;
                            transform: scale(1.05);
                        }
                    }

                    
                                
            }
            @media screen and (max-width:600px) {
                                .ui-wrapper {
                        margin: 0 auto;
                        div{
                            transition: 0.5s cubic-bezier(.09,.66,.48,.99);
                            margin: 2.5px;
                            background-size: cover;
                            a,p{
                                color:#f1f1f1;
                                font-size: 1.5rem;
                                background-color: #0005;
                                padding: 1rem;
                                font-family: 'Chakra Petch', sans-serif;
                            }
                        }
                        div:hover{
                            opacity: 0.7;
                            padding-bottom: 100px;
                        }
                        .RTM { 
                        background-position-y: 50%;
                        }
                    }
            }
            .Minecraft { 
                        grid-area: Minecraft;  
                        background-color: #363;
                        background-image: url("/image/grid/grid1.png");
                        background-position-y: 50%;
                    }
                    .OtherFanfic { 
                        grid-area: OtherFanfic;  
                        background-color: #a13;
                        background-image: url("/image/grid/grid2.png");
                        background-position-x: 40%;
                    }
                    .fanfichayate { 
                        grid-area: fanfichayate;  
                        background-color: #713;
                        background-image: url("/image/grid/grid3.png");
                    }
                    .ASHI { 
                        grid-area: ASHI;  
                        background-color: #377;
                        background-image: url("/image/grid/grid4.png");
                        background-position-y: 30%;
                    }
                    .Magicavoxel { 
                        grid-area: Magicavoxel;  
                        background-color: #365;
                        background-image: url("/image/grid/grid5.png");
                    }
                    .modesfi { 
                        grid-area: modesfi;  
                        background-color: #363;
                        background-image: url("/image/grid/grid6.png");
                    }
                    .product { 
                        grid-area: product;  
                        background-color: #563;
                        background-image: url("/image/grid/grid7.png");
                        background-position-x: 50%;
                        }

                    .Design { 
                        grid-area: Design;  
                        background-color: #569;
                        background-image: url("/image/grid/grid8.png");
                        }

                    .Illust { 
                        grid-area: Illust;  
                        background-color: #52a;
                        background-image: url("/image/grid/grid9.png");
                        }

                    .program { 
                        grid-area: program;  
                        background-color: #5a4;
                        background-image: url("/image/grid/grid10.png");
                        }
                    .RTM { 
                        grid-area: RTM;  
                        background-color: #5a4;
                        background-image: url("/image/grid/grid11.png");
                        }


                    .ADD1 { grid-area: ADD1; }

                    .ADD2 { grid-area: ADD2; }

                    .ADD3 { grid-area: ADD3; }
                    .ADD4 { grid-area: ADD4; }

            
            
        
        
    }
</style>