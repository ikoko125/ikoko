<template>
<footer>
    <div id="ft">
        <div id="ftlogo">
            <p>ikoko</p>
        </div>
        <div class="cpr"> 
            <p>&copy; 2021 ikoko125 This site sourcecode is Licensed under MIT.</p>
            <a href="https://github.com/ikoko125/ikoko"><p>View Source</p></a>
        </div>
    </div>
    <div id="fta">
        <div class="cpr"> 
            <p>&copy; 2021 ikoko125 All rights reserved, unless otherwise noted (e.g. Creative Commons license).</p>
        </div>
    </div>
    <!-- このサイトにて表記・使用されている自著である著作物の権利は例外表記(クリエイティブコモンズライセンス等)がない限り製作者に帰属します。 -->
</footer>
</template>

<style lang="scss">
    footer{
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
                a,p{
                    display: inline-block;
                    text-decoration: none;
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
</style>