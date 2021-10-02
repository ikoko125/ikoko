<template>
    <section id="news">
        <h2>News</h2>
        <div class="newslist">
          <ul>
            <li>News1</li>
            <li>News2</li>
            <li>News3</li>
            <li>News4</li>
            <li>News5</li>
          </ul>
        </div>
    </section>
</template>

<style scoped>

#news{
  padding: 5rem 0;
  width: 100%;
  background-color: #202337;
  color: #f2f2f2;
  font-size: 1.25rem;
}
#news *{
  box-sizing: border-box;
}
.newslist{
  width: 90%;
  margin: 0 auto;
  border-radius: 1rem;
  border:solid 2px #f1f1f1;
  padding: 1rem;
}
#news h2{
  font-size: 5rem;
  text-align:center;
}
#news li{
  border-bottom: solid 1px #bbb;
}
</style>