<template>
    <section id="works">
        <div>
        <h1>Works</h1>
        </div>
        <div class="ui-wrapper">
            <transition name="show" appear>
                <div class="Minecraft" @click="pagepre('/works/minecraft')" key="u" v-show="viewcontrol">
                    <p>MINECRAFT</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="OtherFanfic" v-show="viewcontrol">
                    <p>FANFIC</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="fanfichayate" v-show="viewcontrol">
                    <p>HAYATE-FANFIC</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="ASHI" v-show="viewcontrol">
                    <p>ASHI</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="Magicavoxel" v-show="viewcontrol">
                    <p>MAGICAVOXEL</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="modesfi" v-show="viewcontrol">
                    <p>MODES-FI</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="product" v-show="viewcontrol">
                    <p>PRODUCT</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="Design" v-show="viewcontrol">
                    <p>DESIGN</p>
                </div>
            </transition>
            <transition name="show" appear>
                <div class="Illust" v-show="viewcontrol">
                    <p>ILLUST</p>
                </div>
            </transition>
            <transition name="show" appear>
            <div class="program" v-show="viewcontrol">
                <p>PROGRAM</p>
            </div>
            </transition>
            <transition name="show" appear>
            <div class="RTM" v-show="viewcontrol">
                <p>RTM</p>
            </div>
            </transition>
            <transition name="show" appear>
            <div class="ADD1" v-show="viewcontrol"></div>
            </transition>
            <transition name="show" appear>
            <div class="ADD2" v-show="viewcontrol"></div>
            </transition>
            <transition name="show" appear>
            <div class="ADD3" v-show="viewcontrol"></div>
            </transition>
            <transition name="show" appear>
            <div class="ADD4" v-show="viewcontrol"></div>
            </transition>
        </div>
        
    </section>   
</template>

<script>
export default {
    data(){
        return{
            viewcontrol: true
        }
    },
    mounted(){
        window.addEventListener('load', function() {
            this.viewcontrol = !this.viewcontrol;
            console.log(this.viewcontrol);
})
    },
    methods:{
        window : onload = function(){
            this.viewcontrol = !this.viewcontrol;
            console.log(this.viewcontrol);
        },
        pagepre(url){
            setTimeout(() => this.$router.push(url),1000);
        }
    },
}
</script>

<style lang="scss" scoped>
    .show-enter-active , .show-leave-active{
    transition: all 1s;
    }
    .show-enter {
     transform: (translateY(50px) rotateX(90deg));
    }
    @for $i from 1 through 15 {
        .show-enter-active:nth-child(#{$i}) { 
            transition: transform 0.8s 0.05s * $i ; 
        }
    }
    .ui-wrapper a{
        text-decoration: none;
    }
    section{
        user-select: none;
        background-color: #070721;
        z-index: 5;
            h1{
                z-index: -1;
                transform: translateY(-2vw);
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