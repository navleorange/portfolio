<style lang="css">
body{
    /* font-family: "DotGothic16", sans-serif; */
    font-family: "M PLUS 1", sans-serif;
}
</style>

<style lang="scss" scoped>

/* 一旦ここにcssを直接かく(いい方法を模索中) */

#profile_container{
    background-color: wheat;
    width: 100vw;
    height: 100vh;
}

#self_introduce{
    
    background-color: aqua;
    width: auto;
    height: 50%;
    display: flex;
    justify-content: center;

    @include mq(sp){
        background-color: black;
        display: block;
    }

    #top_page_icon{
        width: auto;
        height: auto;
        margin: 33px 33px;
        border-radius: 50%;
        object-fit: cover;

        @include mq(sp){
            height: 10%;
            margin-bottom: 0px;
        }

    }

    .profile_text{
        background-color: red;
        display: grid;
        place-items: center;
        width: 30%;
        margin-top: 30px;

        h2, p{
            margin: 0px;
        }

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
                <h2> 名前: navleorange</h2>
                <p>生年月日: {{birthDay.year}}年{{birthDay.month}}月{{birthDay.day}}日 {{age}}歳</p>
                <p>出身地: 静岡県</p>
                <p>サークル: <a href="https://szpp-dev-team.github.io">SZPP</a></p>
            </div>
        </div>

    </div>
</template>