<template>
<footer>
    <div id="ft">
        <div id="ftlogo">
            <Bantetsu id="flogo"></Bantetsu>
        </div>
        <div class="cpr"> 
            <a href="https://github.com/ikoko125/ikoko"><p>&copy; 2021 ikoko125 This site sourcecode is Licensed under MIT.</p></a>
            <a class="vs" href="https://github.com/ikoko125/ikoko"><p class="vs">View Source</p></a>
        </div>
    </div>
    <div id="fta">
        <div class="cpr2"> 
            <p>&copy; 2021 ikoko125 All rights reserved</p>
            <p>unless otherwise noted (e.g. Creative Commons license).</p>
        </div>
    </div>
    <!-- このサイトにて表記・使用されている自著である著作物の権利は例外表記(クリエイティブコモンズライセンス等)がない限り製作者に帰属します。 -->
</footer>
</template>

<style lang="scss" scoped>
    footer{
        #flogo{
        display: block;
        height: 42.5px;
      }
        a{
            text-align: center;
            color: #333;
        }
        // font-family: "Oswald", sans-serif;
        font-family: 'Alef', sans-serif;
        #ft{
            display: flex;
            justify-content: space-between;
            background-color: #f1f1f1;
            padding: 1rem;
            #ftlogo{
                display: flex;
                align-items: center;
            }
            .cpr{
                display: flex;
                align-items: center;
            }

            .cpr, .cpr2{
                a,p{
                    
                    // font-family: "Kosugi Maru", sans-serif;
                    display: inline-block;
                    text-decoration: none;
                    white-space: pre-line;
                    &:nth-child(2){
                        border-radius: 1rem;
                        background-color: #333;
                        padding: 0.25rem 0.75rem;
                        color: #f1f1f1;
                        margin: 0.5rem;
                    }
                    &:nth-child(3){
                        border-radius: 1rem;
                        background-color: #aaa;
                        padding: 0.25rem 0.75rem;
                        color: #f1f1f1;
                        margin: 0.5rem;
                    }
                }
            }
        }
        #fta{
            display: flex;
            justify-content: center;
            background-color: #ddd;
            padding: 0.5rem;
        }
    }
            .cpr2{
                p{
                text-align: center;
                    &:nth-child(2){
                        color: #888;
                    }
                }
            }
    @media screen and (max-width:780px) {
        #ftlogo{
            display: none;
        }
        #ft, #fta{
            font-size: 0.8rem;
        }
        #respcpr{
            font-size: 0.5rem;
            color: #888;
        }
        .vs{
                display: none !important;
            }
    }
    @media screen and (max-width:480px) {
        #ft{
            padding: 0.5rem !important;
            display: flex;
            flex-wrap: wrap;
            justify-content: center !important;
        }
        #ft, #fta{
            font-size: 0.8rem;
            letter-spacing: -0.035rem;
        }
        #respcpr{
            color: #888;
            letter-spacing: -0.035rem;
        }
        #ftlogo, #ftlogo p, #respshort{
            display: none;
        }
        .cpr, .cpr2{
            a,p{
                    &:nth-child(2){
                        padding: 0.2rem 0.45rem !important;
                        margin: 0.25rem !important;
                    }
            }
            
        }
        .cpr2{
            p{
                font-size: 1rem;
                line-height: 1rem;
            }
            p:nth-child(2){
                font-size: 0.8rem;
                line-height: 0.8rem;
            }
        }
    }
</style>