<style lang="css">
body{
    /* font-family: "DotGothic16", sans-serif; */
    font-family: "M PLUS 1", sans-serif;
}
</style>

<style lang="scss" scoped>

#profile_container{
    background-color: wheat;
    width: 100vw;
    height: 100vh;
}

#self_introduce{
    
    background-color: aqua;
    width: auto;
    height: 50%;

    // 自己紹介を見やすい場所に変える
    margin-top: 8%;

    // iconとtextを横並びにする
    display: flex;
    justify-content: center;

    @include mq(sp){
        // スマホは縦
        display: block;

        // 自己紹介のサイズの調整
        height: 90%;
        margin-top: 15%;
    }

    #top_page_icon{

        // iconを円にする
        border-radius: 50%;
        object-fit: cover;

        @include mq(sp){
            // iconのサイズ (縦だと次の要素とぶつかるので横で指定)
            width: 75%;

            // 画像の左右中央揃え
            display: block;
            margin-left: auto;
            margin-right: auto;

            // self_introduceの上から少し離す
            position: relative;
            top: 5%;
        }

    }

    .profile_text{
        width: 30%;
        height: auto;

        // 文字中央
        text-align: center;

        @include mq(sp){
            width: 85%;
            height: auto;

            // textの左右中央揃え
            display: block;
            margin-left: auto;
            margin-right: auto;

            margin-top: 15%;
        }

        // 紹介内容を列挙する前のタイトル
        .profile_title{
            font-size: 1.2em;
            background: #5fc2f5;
            padding: 4px;
            color: #FFF;
            font-weight: bold;
            letter-spacing: 0.05em;
        }

        // 枠線
        margin: 2em 0;
        margin-left: 3%;
        background: #f1f1f1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);

        // text内の要素を左右中央揃え
        display: grid;
        place-items: center;

    }

}

#my_skills{
    // 自己紹介より少し離す
    margin-top: 8%;

    // h*を左右中央揃え
    text-align: center;

    table{
        // 左中中央揃え
        margin: auto;
    }

}

</style>

<script>

export default{
    data(){
        return {
            age: 0,
            birthDay: {
                day:18,
                month: 7,
                year: 2001,
            },
        };
    },
    created(){
        this.InitAge();
    },
    methods:{
        InitAge(){
            let birthDayDate = new Date(this.birthDay.year, this.birthDay.month);
            let today = new Date();
            this.age = today.getFullYear() - birthDayDate.getFullYear();
            let threshold_day = new Date(today.getFullYear(), this.birthDay.month, this.birthDay.day);

            if(today < threshold_day){
                this.age--;
            }
        },
    }
}
</script>


<template>
    <div id="profile_container">
        <div id="self_introduce">
            <img id="top_page_icon" src="~/assets/image/icon.png"> 
            <div class="profile_text">
                <div class="profile_title">簡単な自己紹介</div>
                <h2> アカウント: navleorange</h2>
                <p>生年月日: {{birthDay.year}}年{{birthDay.month}}月{{birthDay.day}}日 {{age}}歳</p>
                <p>出身地: 静岡県</p>
                <p>サークル: <a href="https://szpp-dev-team.github.io">SZPP</a></p>
            </div>
        </div>

        <div id="my_skills">
            <h2>スキル</h2>
            <table>
                <thread>
                    <tr><th>制作物・用途</th><th>使用したフレームワークや言語など</th></tr>
                    <tr><td>研究</td><td>Python, Java</td></tr>
                    <tr><td>このサイト</td><td>Nuxt3, Vue.js</td></tr>
                </thread>
            </table>
        </div>

    </div>
</template>