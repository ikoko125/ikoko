<template>
    <section>
        <div id="mctop">
            <div class="wrapper">
            <h1>Minecraft</h1>
            </div>
        </div>
        <h2>About</h2>
        <div id="intro">
            <transition name="mcap1" appear>
            <p>Minecraftはレゴのようなブロックを使って様々なことをするゲームです。<a href="https://www.minecraft.net/en-us/partner">(一部の人はゲーム向けコンテンツ制作のため仕事をしている)</a></p>
            </transition>
            <transition name="mcap1" appear>
            <p>minecraftは2009年にcave gameとしてリリースされた同人ゲームでした。その後2011年末ごろまでβリリースなどが続けられ、その後まもなく製品版としてリリースされ人気も増していきました</p>
            </transition>
            <transition name="mcap1" appear>
            <p>日本での一般層への普及は2014年半ば頃ですが、ネットの住人たちが目をつけていたのは2010年末～2013年頃のことです。</p>
            </transition>
            <transition name="mcap1" appear>
            <p>私は2012年の春先、小学6年生の頃にMinecraftを購入しました。(当時のプレイヤー人口は500万人程)これがのちほどのほぼすべての活動のきっかけとなっています。ある意味人生を壊されたコンテンツです。</p>
            </transition>

        </div>
        <h2>My Profile</h2>
        <div id="profile">
            <div id="ikk125">
                <img class="ikk125" src="/image/minecraft/ikk125.webp" alt="ikoko125">
            </div>
            <transition name="mcap1" appear>
            <div class="ikk124" :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">
                <div :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}" >
                    <p :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">MinecraftID</p>
                    <ul :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}"><li>ikoko1/ikoko125/ikoko173</li></ul>
                    <p :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">使用バージョン</p>
                    <ul :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}"><li>PC版1.7.10/1.12.2/1.16.4</li></ul>
                    <p :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">パソコンのスペック</p>
                    <ul :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">
                        <li :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">CPU: intel&trade; Core i7-7700</li>
                        <li :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">GPU: HP Geforce GTX 1060 3GB</li>
                        <li :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">RAM: 16GB</li>
                        <li :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">SOUNDCARD: Creative SoundBlaster X-fi Titanium</li>
                        <li :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">Speaker: Edifier e10</li>
                        <li :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">Keyboard: Logicool G910r</li>
                        <li :class="{'mcap1-enter' : scrollY <= 400, 'mcap1-enter-active' : scrollY > 400}">Mouse: Logicool G300s</li>
                    </ul>
                </div>
                <div class="lr">
                    <p>ikoko125-profile</p>
                </div>
            </div>
            </transition>
            
        </div>
        <h2>CASCU</h2>
        <div id="cascu">
            <div id="ikk126">
                <img class="ikk125" src="/image/cascu.webp" alt="ikoko125">
            </div>
            <p>建築の更なる発展を求めるため、芦原鯖1.12.2(新床市)は都市連合CASCUに参加しています。</p>
            <div class="ikk124">
                <div>
                    <h3>方針</h3>
                    <p>"CASCU(カスク)は完全招待制のMINECRAFT都市連合です。MINECRAFT都市開発を牽引し、完全招待制にする事により今までの都市連合にない、美しさを追求するCASCUは、都市連合組織に対する新たなアプローチを熟考します。
より沢山の人々が知る都市、美への探究心、都市同士のコミュニティ活性化、建築意欲の増進を目的に、日々活動しています。"</p>
                
                </div>
                <div class="lr">
                    <p>CASCU</p>
                </div>
                <p class="btn"><a href="https://cascuofficial.wixsite.com/cascu/about-cascu"><span>learn more</span></a><a href="https://cascuofficial.wixsite.com/cascu"><span>CASCU Official</span></a></p>
            </div>
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

<script>
export default {
    data() {
        return{
            scrollY: 0
        }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped src="./mctop.scss"></style>