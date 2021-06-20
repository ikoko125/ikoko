<template>
<div>
  <Header/>
  <main>
    <section id="top">
      <div>
      <h1>ikoko</h1>
      </div>
      <div id="covertop">
        <p>aaa</p>
      </div>


    </section>
    <section id="content">
    </section>
  </main>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
html{
  min-height: 100%;

}
h1{
  color: #f2f2f2;
  font-size: 5rem;
}
#covertop{
  background-image:url("/2021-05-15_13.33.20.png");
  background-size: cover;
}
#top{
  height: 100%;
  min-height: 700px;
  display: grid;
  grid-template-areas: "a1 a2";
  grid-template-columns: 1fr 1.5fr;
  max-width: 1300px;
  margin: 0 auto;
}
#content{
  padding: 5rem 0;
  width: 100%;
  background-color: #202337;
  color: #f2f2f2;
  font-size: 3.3rem;
}
</style>
