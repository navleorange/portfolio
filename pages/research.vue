<style lang="scss" scoped>

#search_container{
    width: 100vw;
    height: 100vh;
    margin-top: 5%;

    @include mq(sp){
        margin-top: 20%;
        font-size: 10px;
    }

}

</style>

<template>
    <div id="search_container">
        <ContentDoc path="/research/research" v-slot="{ doc }">
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </div>
</template>