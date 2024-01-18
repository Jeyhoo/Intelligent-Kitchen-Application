<template>
    <div class="section">
        <!-- 轮播图 -->
        <div class="carousel">
            <ul class="carousel-container">
                <li>
                    <img src="../assets/images/logo/userHead1.png">
                    <div>
                        <span>第一个轮播图的上半句</span>
                        <span>第一个轮播图的下半句</span>
                    </div>
                </li>
                <li>
                    <img src="../assets/images/logo/userHead1.png">
                    <div>
                        <span>第2个轮播图的上半句</span>
                        <span>第2个轮播图的下半句</span>
                    </div>
                </li>
                <li>
                    <img src="../assets/images/logo/userHead1.png">
                    <div>
                        <span>第三个轮播图的上半句</span>
                        <span>第三个轮播图的下半句</span>
                    </div>
                </li>
            </ul>
            <ul class="carousel-indexGroup">
            </ul>
        </div>
    </div>

</template>

<script>
    import "../assets/plugins/carousel/index.css"
    import "./_Home.css"
    import {Carousel} from "../assets/plugins/carousel/index"

    export default {
        name: "Home",
        data(){
            return{
                carousel:{
                    data:[
                        {}
                    ],
                    obj:null,
                }
            }
        },
        methods:{
            // 初始化
            init(){
                // 轮播图初始化
                this.initCarousel();
            },

            // 轮播图初始化
            initCarousel(){
                this.carousel.obj = new Carousel();
                this.carousel.obj.init();
            }
        },

        //DOM渲染后执行
        mounted() {
            this.init();
        },

        //离开页面时出发该函数
        beforeDestroy() {    
           this.carousel.obj.destroy();
        },
    }
</script>


<style scoped>
    .section{
        width: 100%;
        height: 100%;
    }
    .carousel{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .carousel-container span{
        display: block;
        width: 300px;
        position: absolute;
        right: 15%;
        top: 30%;
        font-size: 30px;
        white-space: nowrap;
        color: #fff;
        transform: translateX(200%);
        animation: carousel-span 0.3s linear 0s 1 normal;
        animation-fill-mode: forwards;
    }
    .carousel-container span + span{
        top: 40%;
        right: 5%;
        animation-delay: 0.1s;
    }
    @keyframes carousel-span {
        0%{transform: translateX(200%);}
        100%{transform: translateX(0%);}
    }
</style>