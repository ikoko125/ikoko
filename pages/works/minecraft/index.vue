<template>
    <section>
        <div id="mctop">
            <div class="wrapper">
            <h1>Minecraft</h1>
            </div>
        </div>
        <h2>About</h2>
        <div id="intro">
            <p>Minecraftはレゴのようなブロックを使って様々なことをするゲームです。<a href="https://www.minecraft.net/en-us/partner">(一部の人はゲーム向けコンテンツ制作のため仕事をしている)</a></p>
            <p>minecraftは2009年にcave gameとしてリリースされた同人ゲームでした。その後2011年末ごろまでβリリースなどが続けられ、その後まもなく製品版としてリリースされ人気も増していきました</p>
            <p>日本での一般層への普及は2014年半ば頃ですが、ネットの住人たちが目をつけていたのは2010年末～2013年頃のことです。</p>
            <p>私は2012年の春先、小学6年生の頃にMinecraftを購入しました。(当時のプレイヤー人口は500万人程)これがのちほどのほぼすべての活動のきっかけとなっています。ある意味人生を壊されたコンテンツです。</p>

        </div>
    <h2>CATEGORY</h2>
    <div class="catw">
        <div class="cat">
            <nuxt-link to="/works/minecraft/RTM/">
            <div class = "sm smbg1">
                <div class="desc">
                    <p>RTM</p>
                </div>
            </div>
            </nuxt-link>
            <nuxt-link to="/works/minecraft/modern/">
            <div class = "sm smbg2">
                <div class="desc">
                    <p>MODERN BUILD</p>
                </div>
            </div>
            </nuxt-link>
            <nuxt-link to="/works/minecraft/server/">
                <div class = "sm smbg3">
                    <div class="desc">
                        <p>SERVER OPERATION</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/works/minecraft/other/">
            <div class = "sm smbg4">
                <div class="desc">
                    <p>OTHER BUILD</p>
                </div>
            </div>
            </nuxt-link>
        </div>
    </div>
    <!-- <h2>作品</h2>
        <div class="cat">
            <div class = "bigview bg1"></div>
            <div class = "bigview bg2"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
        </div> -->
    
    </section>
</template>



<style lang="scss" scoped src="./mctop.scss"></style>