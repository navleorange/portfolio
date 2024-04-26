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
        &::before{
            content: "・";
        }
    }

    :deep(h2), :deep(h3), :deep(h4){
        // border-left: 0.125rem solid gray;
        position: relative;

        // 下線の代わり(長さを調節するため)
        &::after{
            content: '';
            display: block;
            position: absolute;
            left: 0%;
            bottom: -8px;
            width: 45%;
            height: 3px;
            background-color: #C0C6C9CC;
            border-radius: 20px;
        }

    }

}

</style>

<template>
    <div class="markdown_content">
        <slot />
    </div>
</template>