<style lang="scss" scoped>

#works_container{
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
    <div id="works_container">
        <ContentDoc path="/works/works" v-slot="{ doc }">
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </div>
</template>