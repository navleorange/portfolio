<style lang="scss" scoped>

#works_container{

    width: 100vw;
    height: 100vh;
    margin-top: 5%;

    @include mq(sp){
        margin-top: 20%;
        font-size: 10px;
    }

    .private_works_container, .team_works_container{
        // 2列中央揃えでcontentの表示
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    h1{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        height: 3.5rem;
        display: flex;
        align-items: center;
        background-color: #8dd98d33;
        border-left: solid 5px yellowgreen;
        border-bottom: solid 2px #d7d7d7;/*下線*/
        padding-left: 7px;
    }

    h2{
        text-align: center;
    }

    .private_works, .team_works{
        width: 100%;
        max-width: 600px;
        height: 250px;
        border: 1px solid gray;

        @include mq(sp){
            width: 100%;
            max-width: 300px;
            height: 200px;
        }

        @include mq(full){
            min-width: 600px;
            margin-left: 30px;
        }

        background-color: #E7E7EBB3;

        // 角を丸くする
        border-radius: 20px;

        // 子要素を上下左右中央揃え
        display: flex;
        flex-flow: column;
        margin-bottom: 25px;

        &:hover{
            // 浮き上がる
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
            transform: translateY(-0.1875em);
        }

        table{
            height: 70%;

            th{
                padding-left: 10px;
                &::after{
                    content: ":";
                }
            }

            td{
                padding-right: 10px;
            }

        }

    }

}

</style>

<script setup lang="ts">

// search /content/works contents 
const { data:content} = await useAsyncData("works", () =>
queryContent("works").find())

</script>

<template>
    <div id="works_container">

        <div class="private_works_container">
            <h1>個人開発</h1>
            <div v-for="private_content in content" :key="private_content._path">
                <div v-if="private_content._path.includes('private')">
                    <div class="private_works">
                        <h2>{{private_content.title}}</h2>
                        <table>
                            <tbody>
                                <tr><th>言語</th><td>{{private_content.lang}}</td></tr>
                                <tr><th>概要</th><td>{{private_content.description}}</td></tr>
                                <tr><th>GitHub</th><td><a v-bind:href="private_content.GitHub">リポジトリを見る</a> </td></tr>
                                <tr><th>説明</th><td><nuxt-link :to="private_content._path">説明を確認する</nuxt-link></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="team_works_container">
            <h1>チーム開発</h1>
            <div v-for="team_content in content" :key="team_content._path">
                <div v-if="team_content._path.includes('team')">
                    <div class="team_works">
                        <h2>{{team_content.title}}</h2>
                        <table>
                            <tbody>
                                <tr><th>言語</th><td>{{team_content.lang}}</td></tr>
                                <tr><th>概要</th><td>{{team_content.description}}</td></tr>
                                <tr><th>GitHub</th><td><a v-bind:href="team_content.GitHub">リポジトリを見る</a> </td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>