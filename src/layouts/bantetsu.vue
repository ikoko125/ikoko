<template>
  <div id="nuxt">
    <BantetsuHeader/>
    <main>
    <Nuxt />
    </main>
    <Bantetsufooter/>
  </div>
</template>

<script>
</script>
<style>


body{
  padding:0;
}
</style>
<style lang="scss" scoped>



*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/*スクロールバー全体*/
::-webkit-scrollbar {
  width: 10px;
}

/*スクロールバーの軌道*/
::-webkit-scrollbar-track {
border-radius: 10px;
box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
}

/*スクロールバーの動く部分*/
::-webkit-scrollbar-thumb {
background-color: rgba(0, 0, 50, .5);
border-radius: 10px;
box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
}
</style>