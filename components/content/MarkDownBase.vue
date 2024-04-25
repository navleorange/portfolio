<style lang="scss" scoped>

.markdown_content{
    width: 80%;
    background-color: whitesmoke;

    // ブロックの中央揃え
    margin-left: auto;
    margin-right: auto;

    // 背景と文字の余白 上下 | 左右
    padding: 1% 3%;

    :deep(h2), :deep(h3), :deep(h4){
        // border-left: 0.125rem solid gray;
        border-bottom: 0.25rem solid #C0C6C9CC;
    }

}

</style>

<template>
    <div class="markdown_content">
        <slot />
    </div>
</template>