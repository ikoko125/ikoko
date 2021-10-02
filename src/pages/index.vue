<template>
<div>
    <!-- <section id="top">
      <div>
      <h1>ikoko</h1>
      </div>
      <div id="covertop">
        <p>aaa</p>
      </div>
      
          

    </section> -->
    <section id="about1">
      <div>
        <div id="icon">
          <img alt="icon" src="/image/06X.webp">
          <nuxt-link to="/about" class="icon-ov">
            <p>>>More</p>
          </nuxt-link>
        </div>
        <div>
          <h2>いここ</h2>
          <p>ハヤテのごとくだいすき</p>
          <p>WEBサイトを作ったりMinecraftとかします</p>
          <p>芦原サーバー　鯖主</p>
          <p style="margin: 1.5rem 0;">
            <a href="https://qiita.com/ikoko125"><span class="qi">Qiita</span></a>
            <a href="https://github.com/ikoko125"><span class="gi">Github</span></a>
            <a href="https://twitter.com/ikoko125"><span class="tw">Twitter</span></a>
            <a href="https://www.pixiv.net/users/30420680"><span class="pi">Pixiv</span></a>
          </p>
          <p style="margin: 1.5rem 0;">
            <a href="https://togetter.com/li/1702544"><span class="tg">作品ツイートまとめ</span></a>
          </p>
        </div>
      </div>
    </section>
    
    <section id="content">
      <div id="content-w">
        <div id="t">
          <Container class="bg1">
            <nuxt-link to="/works/minecraft/">
              <h3 class="c-en">Minecraft</h3>
             </nuxt-link>
          </Container>
          <!-- <Container class="bg2">
            <h3 class="c-jp">磐島重工</h3>
          </Container>
          <Container class="bg3">
              <h3 class="c-jp">ハヤテのごとく！二次創作</h3>
          </Container>
          <Container class="bg4">
              <h3 class="c-jp">その他二次創作</h3>
          </Container>
          <Container class="bg5">
            <h3 class="c-jp">依頼案件</h3>
          </Container>
          <Container class="bg6">
            <h3 class="c-en">Design</h3>
          </Container>
          <Container class="bg7">
            <h3 class="c-en">Modes-fi</h3>
          </Container> -->
          <Container class="bg8">
            <nuxt-link to="/works/minecraft/server/">
            <h3 class="c-en">Server</h3>
            </nuxt-link>
          </Container>
          <!-- <Container class="bg9">
            <h3 class="c-en">Archive-Live</h3>
          </Container>
          <Container class="bg10">
            <h3 class="c-en">Archive-Live</h3>
          </Container> -->
        </div>
      </div>
    </section>
</div>
</template>

<script>
export default {
      data(){
    },
    methods:{
      
    }
}
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
