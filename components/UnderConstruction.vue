<style lang="scss" scoped>

.under_construction{
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: -1;

    .item{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 32px;

        img{
            max-width: 780px;
            max-height: 500px; 
        }

    }

    .credit_text{
        font-size: 10px;
        text-align: right;
    }

    span{

        @keyframes dot {
            0% {opacity: 0;}
            50% {opacity: 0.5;}
            100% {opacity: 1;}
        }

        @for $i from 1 through 3{

            &:nth-child(#{$i}){
                animation-name: dot;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
                animation-delay: 0.3s * $i;
            }
        }
    }

}

</style>

<script lang="ts" scoped>

let gifInfo = [
                { path: '/assets/gif/mogura.gif', copyright:"TELOPICT.com", isImported: false},
                { path: '/assets/gif/pc_hand.gif', copyright:"TELOPICT.com", isImported: false},
                { path: '/assets/gif/loading-hiyoko.gif', copyright:"ぴよたそ", isImported: false},
                { path: '/assets/gif/pasokon-hiyoko.gif', copyright:"ぴよたそ", isImported: false},
                { path: '/assets/gif/pasokon-hiyoko.gif', copyright:"ぴよたそ", isImported: false},
                { path: '/assets/gif/notePC_hito.gif', copyright:"フリイラくん", isImported: false},
            ];

export default {
    data(){
        return {
            gifUrl: "",
            copyRightString: "",
        }
    },
    mounted: function(){

        // import gif and replace url
        let importGifs = import.meta.glob('~/assets/gif/*.gif',{eager:true});

        for(const importGif in importGifs){
            gifInfo.filter(function(gifData){
                if(gifData.path == importGif){
                    gifData.path = importGifs[importGif].default;
                    gifData.isImported = true;
                }
            })
        }

        gifInfo = gifInfo.filter(gifUrl => gifUrl.isImported);

        // random choice

        if(gifInfo == undefined || gifInfo.length == 0){
            return;
        }

        const useImageIndex: number = Math.floor(Math.random() * gifInfo.length);

        this.gifUrl = gifInfo[useImageIndex].path;
        this.copyRightString = gifInfo[useImageIndex].copyright;
    },
}
</script>

<template>

    <div class="under_construction">
        <div class="item">
            <img :src="gifUrl" />
            <p class="credit_text">&copy; {{copyRightString}}</p>
            <p class>
                現在製作中です
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </p>
        </div>
    </div>

</template>