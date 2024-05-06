<style lang="scss" scoped>

.markdown_content{
    width: 80%;
    background-color: whitesmoke;

    // ブロックの中央揃え
    margin-left: auto;
    margin-right: auto;

    // 背景と文字の余白 上下 | 左右
    padding: 1% 3%;

    :deep(h1){
        height: 3.5rem;
        display: flex;
        align-items: center;
        background-color: #8dd98d33;
        border-left: solid 5px yellowgreen;
        border-bottom: solid 2px #d7d7d7;/*下線*/
        padding-left: 7px;
    }

    :deep(h2){
        margin-top: 35px;
    }

    :deep(h2), :deep(h3), :deep(h4){
        // border-left: 0.125rem solid gray;
        position: relative;
        height: 2.5rem;
        display: flex;
        width: 50%;
        align-items: center;
        background-color: #8dd98d33;
        border-left: solid 5px yellowgreen;
        border-bottom: solid 2px #d7d7d7;/*下線*/
        padding-left: 7px;

        @include mq(sp){
            width: 80%;
        }
    }

    :deep(h3), :deep(h4){
        height: 2rem;
        width: 35%;

        @include mq(sp){
            width: 70%;
        }
    }

    :deep(blockquote){
        border-left: 0.2rem solid #C0C6C9CC;
        padding-left: 10px;
    }

}

</style>

<template>
    <div class="markdown_content">
        <slot />
    </div>
</template>