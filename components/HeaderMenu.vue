<style>
body{
    margin: 0;
}
</style>

<style lang="scss" scoped>

.header-nav{
    width: 100vw;
    background-color: yellowgreen;
    opacity: 0.9;

    // 上固定
    position: fixed;
    top: 0%;

    // 子要素を中央に
    align-items: center;

    &:hover{
        opacity: 1;
    }

    .hamburger_menu_button{
        display: none;

        @include mq(sp){
            // スマホのみ表示
            display: block;
        }
    }

    // Header Menu
    ul{
        // ・の削除
        list-style: none;

        // リンク先の横並び, 要素を右寄せ
        display: flex;
        justify-content: flex-end;

        li{

            .link_text{
                // 上下, 左右
                padding: 0.75em 1.25em;

                // 文字の枠
                -webkit-text-stroke-width: 0.25px;
                -webkit-text-stroke-color: white;

                // 文字色
                color: #C0C6C9;

                // 下線消し
                text-decoration: none;

                &:hover{
                    border: 2px solid white;
                    border-radius: 10px;

                    // 浮き上がる
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
                    transform: translateY(-0.1875em);
                }

            }

        }
        
    }

}

</style>

<script scoped>
    export default {
        data() {
            return {
                links: [
                    { label:"Top", isInternalLink: true , path: '/profile'},
                    { label:"制作物", isInternalLink: true , path: '/works'},
                    { label:"研究内容", isInternalLink: true , path: '/search'},
                ]
            }
        }
    }
</script>

<template>
    <header>
        <nav class="header-nav">

            <!-- スマホ用のハンバーガーメニュー -->
            <div class="hamburger_menu_button">
                <input type="checkbox">
            </div>

            <ul>
                <li v-for="(link, i) in links" :key="i">
                    <div v-if="link.isInternalLink" class="internal_link">
                        <NuxtLink :to="link.path" class="link_text">{{ link.label }}</NuxtLink>
                    </div>
                    <div v-else class="external_link">
                        <a :href="link.path" class="link_text">{{ link.label }}</a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>