<style>

/* 一旦ここにcssを直接かく(いい方法を模索中) */

#self_introduce{
    width: 80%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
}

#top_page_icon{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
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
                <p>生年月日: {{birthDay.year}}年{{birthDay.month}}月{{birthDay.day}}日生まれ {{age}}歳</p>
                <p>出身地: 静岡県</p>
                <p>サークル: <a href="https://szpp-dev-team.github.io">SZPP</a></p>
                <p></p>
            </div>
        </div>

    </div>
</template>