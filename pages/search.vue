<style lang="scss" scoped>

#search_container{
    width: 100vw;
    height: 100vh;
    margin-top: 5%;
}

</style>

<template>
    <div id="search_container">
        <ContentDoc path="/search/test" v-slot="{ doc }">
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </div>
</template>