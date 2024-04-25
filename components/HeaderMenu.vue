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

    // 子要素を右寄せに
    display: flex;
    justify-content: flex-end;

    // 子要素を中央に
    align-items: center;

    // ハンバーガーメニューを表示する時のcss
    &.hamburger_menu_active{
        // ボタンとメニュー要素を縦一列にする
        flex-flow: column;

        // メニューボタンを右寄せ
        align-items: flex-end;

        // メニューを右に出す
        width: 33%;
        right: 0;

        opacity: 0.5;

        // 境界をわかりやすくするために線をつける
        border-left: 0.5px solid gray;

        // 影を左側に少しつける
        box-shadow: -0.1rem -1rem 1rem black;

        // 変化に時間をつける
        // transition-duration: 2s;

        z-index: 100;
    }

    &:hover{
        opacity: 1;

        &.hamburger_menu_active{
            opacity: 0.9;
        }

    }

    #sp_hamburger_menu_header{
        display: none;

        @include mq(sp){
            &.hamburger_menu_active{
                display: block;

                width: 100vw;
                height: 60px;

                // 親要素の値を明示的に継承
                background-color: inherit;
                opacity: 0.6;

                // 上固定
                position: inherit;
                top: inherit;
            }
        }
    }

    .hamburger_menu_button{
        display: none;

        @include mq(sp){
            // スマホのみ表示
            position: relative;
            display: flex;
            justify-content: center;
            align-items: end;
            width: 50px;
            height: 50px;
            padding: 5px;
            cursor: pointer;
        }

        // ハンバーガーメニューの線
        span{
            position: absolute;
            display: block;
            width: 30px;
            height: 5px;
            background:darkcyan;

            @for $spanIndex from 1 through 3{
                &:nth-of-type(#{$spanIndex}){
                    top: 10px + 8px*$spanIndex;

                    &.transform{
                        
                        @if $spanIndex == 1{
                            top: 20px;
                            transform: rotate(45deg);

                            // 変化に時間をつける
                            transition-duration: 0.5s;
                        }
                        @else if $spanIndex == 2{
                            display: none;
                        }
                        @else{
                            top: 20px;
                            transform: rotate(-45deg);

                            // 変化に時間をつける
                            transition-duration: 1s;
                        }
                    }
                }
            }

        }

    }

    // Header Menu
    ul{
        // ・の削除
        list-style: none;

        // リンク先の横並び, 要素を右寄せ
        display: flex;
        justify-content: flex-end;

        @include mq(sp){
            // スマホは最初は表示しない
            display: none;

            // このクラスが付与されたら見えるようにする
            &.appear{
                // navと同じにする
                width: 100%;

                // 表示と縦指定
                display: flex;
                flex-flow: column;
                align-content: center;
            }

        }

        li{

            .internal_link{
                // ハンバーガーメニューを表示する時のcss
                &.hamburger_menu_active{
                    // 子要素を中央揃え
                    margin-bottom: 1.75rem;

                    // テキストを中央揃え
                    text-align: center;

                    // hoverで指定している行動の禁止
                    box-shadow: none;
                    transform: none;
                }
            }

            .link_text{
                // 上下, 左右
                padding: 0.75em 1.25em;

                font-size: 18px;

                // 文字の枠
                -webkit-text-stroke-width: 0.375px;
                -webkit-text-stroke-color: #C0C6C9;

                // 文字色
                // color: #C0C6C9;
                color: white;

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

<script lang="ts" scoped>
    export default {
        data() {
            return {
                isHamburgerMenuOpen: false,
                links: [
                    { label:"Top", isInternalLink: true , path: '/profile'},
                    { label:"研究内容", isInternalLink: true , path: '/research'},
                    { label:"制作物", isInternalLink: true , path: '/works'},
                ]
            }
        },
        methods:{
            hamburgerMenuClickEvent(){
                this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
            }
        }
    }
</script>

<template>
    <header>
        <nav v-bind:class="{'hamburger_menu_active': isHamburgerMenuOpen}" class="header-nav">

            <!-- spでメニュー表示時にヘッダーになり変わるもの -->
            <div id="sp_hamburger_menu_header" v-bind:class="{'hamburger_menu_active': isHamburgerMenuOpen}"></div>

            <!-- スマホ用のハンバーガーメニュー -->
            <div @click="hamburgerMenuClickEvent" class="hamburger_menu_button">
                <!-- ハンバーガーメニューの線 -->
                <span v-bind:class="{'transform': isHamburgerMenuOpen}"></span><span v-bind:class="{'transform': isHamburgerMenuOpen}"></span><span v-bind:class="{'transform': isHamburgerMenuOpen}"></span>
            </div>

            <ul v-bind:class="{'appear': isHamburgerMenuOpen}">
                <li v-for="(link, i) in links" :key="i">
                    <div v-if="link.isInternalLink" v-bind:class="{'hamburger_menu_active': isHamburgerMenuOpen}" class="internal_link">
                        <NuxtLink :to="link.path" class="link_text">{{ link.label }}</NuxtLink>
                    </div>
                    <div v-else v-bind:class="{'hamburger_menu_active': isHamburgerMenuOpen}" class="external_link">
                        <a :href="link.path" class="link_text">{{ link.label }}</a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>