<template>
    <div class="div-all">
        <div class="lunbo">
            <ul class="lunbo-img">
                <li class="liimg"><img src="../assets/images/logo/userHead1.png"></li>
                <li class="liimg"><img src="../assets/images/logo/userHead2.jpg"></li>
                <li class="liimg"><img src="../assets/images/logo/userHead3.jpg"></li>
            </ul>
            <ul class="lunbo-index">
                <li class="pointer ss" id="ididi">。</li>
                <li class="pointer cc" >。</li>
                <li class="pointer gg" >。</li>
            </ul>
        </div>
        <div class="mytest">
            {{lunboIndex}} ---- {{lunboLength}} --- {{pointer}}
            <button @click="lunboFun()">哈哈</button>
        </div>
        </div>

</template>

<script>
    import {Carousel} from "../assets/js/util.js"

    export default {
        name: "Home",
        data(){
            return{
                lunboIndex: null,
                lunboLength: null,
                timer: null,
                pointer: null
            }
        },
        methods:{
            //初始化数据
            async initData() {
                this.lunboIndex = 0;
                this.lunboLength = document.getElementsByClassName("liimg").length;
                this.pointer = document.getElementsByClassName("pointer");
            },

            initLunbo(){
                this.timer = setInterval(this.lunboFun,2000);
            },

            //切换图片函数
            lunboFun(){
                //索引==最大长度，就把索引设置为最小，即从头开始
                if(this.lunboIndex === this.lunboLength){
                    this.lunboIndex = 0;
                }
                //隐藏上一个索引的图片 ,显示当前索引的
                document.getElementsByClassName("liimg")[this.lunboIndex].style.display = "block";
                this.pointer[this.lunboIndex].style.color = "#f5d4d4";
                if (this.lunboIndex === 0){
                    //修改最大索引的那张图为隐藏，当前索引为展示
                    document.getElementsByClassName("liimg")[this.lunboLength - 1].style.display = "none";
                    this.pointer[this.lunboLength - 1].style.color = "black";
                }else {
                    document.getElementsByClassName("liimg")[this.lunboIndex - 1].style.display = "none";
                    this.pointer[this.lunboIndex - 1].style.color = "black";
                }

                this.lunboIndex++;
            },

            //小圆圈列表悬浮事件触发更换并固定图片函数
            circleFun(){
                let that = this;
                for(let i = 0;i<this.pointer.length;i++){  //这里要使用let修饰变量， 不要用var,否则会产生变量的作用域穿透问题
                    this.pointer[i].addEventListener("click",function () {
                        console.log("iiii = "+i)
                        this.lunboIndex = i;   //将圈的索引值给图片
                        that.lunboFun();      //调用切换图片的函数
                        console.log("ddddddd")
                        //暂时关闭定时器执行
                        clearInterval(that.timer);
                        that.timer = null;
                    })
                    this.pointer[i].addEventListener("mouseleave",function () {
                        that.initLunbo();
                    })
                    //手指离开事件（针对移动端事件监听）
                    this.pointer[i].addEventListener("touchend",function () {
                        that.initLunbo();
                    })
                }
            },

            //鼠标离开小圆圈列表事件触发定时器
            circleMoveFun(){
                console.log("离开哈哈哈哈哈");
                this.timer = setInterval(this.lunboFun,2000);
            }

        },

        //DOM渲染前执行
        create() {

        },

        //DOM渲染后执行     执行一些需要依赖DOM元素的逻辑，如获取元素尺寸、绑定事件、设置定时器等
        mounted() {
            this.initData()
            this.initLunbo();
            this.circleFun();   //加载点击圈的函数
        },

        beforeDestroy() {    //离开页面时出发该函数， 取消定时器
            clearInterval(this.timer);
            this.timer = null;
        },
    }
</script>



<style scoped>

    .div-all {
        width: 100%;
        height: 711px;
        /*background-color: #868484;*/
        background: url("../assets/images/bg/bg3.jpg") no-repeat;
        background-size: 100% 700px;
    }

    .lunbo {
        width: 45%;
        height: 60%;
        background-color: #6e7d64;
        /*position: absolute;*/
        transform: translate(10%,55%);
    }

    .lunbo .lunbo-img{
        width: 100%;
        height: 100%;
    }

    .lunbo .lunbo-img li {
        width: 100%;
        height: 100%;
        display: none;
    }

    .lunbo img {
        width: 100%;
        height: 100%;
    }


    .lunbo-index {
        width: 20%;
        height: 8%;
         position: absolute;
        right: 10%;
        bottom: 5%;
        display: flex;         /*使其内部元素呈现在一行里*/
        align-items: center;   /*使其内部元素垂直居中*/
        font-size: 30px;
        color: #525c66;
    }

    /*.lunbo-index li {*/
    /*    cursor: pointer;  !*鼠标停留变小手*!*/
    /*}*/

    .lunbo-index li:hover {
        cursor: pointer;  /*鼠标停留变小手*/
        color: #f5d4d4;
    }

    .mytest {
        transform: translate(0,-300px);
    }

</style>