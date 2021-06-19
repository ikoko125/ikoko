<template>
    <div class="c">
        <slot/>
    </div>
</template>

<style lang="scss">
    .c{
        border-radius: 0.5rem;
        margin: 1rem 0;
        color: #222;
        background-color: #f1f1f1;
        width: 100%;
        height: 40vw;
    }
    @media screen and (min-width:1024px) {
        .c{
            width: 47.5%;
            height: 25vw;
            max-height: 350px;
            }
    }
</style>