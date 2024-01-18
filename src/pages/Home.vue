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
                <li class="pointer cc">。</li>
                <li class="pointer gg">。</li>
            </ul>
            <div class="some-discript">
                <div class="top-discript">
                    <p class="top-p">我是第一张图片的前半句 </p>
                    <p class="top-p">我是第二张图片的前半句  </p>
                    <p class="top-p"> 我是第三张图片的前半句 </p>
                </div>
                <div class="bottom-discript">
                    <p class="bottom-p">我是第一张图片的前后句 </p>
                    <p class="bottom-p">我是第二张图片的前后句 </p>
                    <p class="bottom-p">我是第三张图片的前后句 </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                lunboIndex: null,
                lunboLength: null,
                timer: null,
                pointer: null,
                topP:null,
                bottomP:null
            }
        },
        methods:{
            //初始化数据
            async initData() {
                // this.lunboIndex = 0;
                this.lunboLength = document.getElementsByClassName("liimg").length;
                this.pointer = document.getElementsByClassName("pointer");
                this.topP = document.getElementsByClassName("top-p");
                this.bottomP = document.getElementsByClassName("bottom-p");
            },

            initLunbo(){
                this.timer = setInterval(this.lunboFun,2000,true);
                if(this.lunboIndex === null){
                    this.lunboIndex = 0;
                    this.lunboFun();
                }
            },

            //切换图片函数
            lunboFun(){
                console.log("[Home]lunboFun",this.lunboIndex,this.lunboLength)
                //索引==最大长度，就把索引设置为最小，即从头开始
                if(this.lunboIndex === this.lunboLength){
                    this.lunboIndex = 0;
                }
                console.log("[Home]lunboFun2",this.lunboIndex,this.lunboLength)
                //切换图片显示
                //重置全部状态
                Array.from(document.getElementsByClassName("liimg")).map(dom=>{dom.style.display = "none";})
                Array.from(this.pointer).map(dom=>{dom.style.color = "#a5b0bb";})
                document.getElementsByClassName("some-discript")[0].classList.remove("active");
                Array.from(this.topP).map(dom=>{dom.style.display = "none";})
                Array.from(this.bottomP).map(dom=>{dom.style.display = "none";})

                //显示当前索引的
                document.getElementsByClassName("liimg")[this.lunboIndex].style.display = "block";
                this.pointer[this.lunboIndex].style.color = "#2f3031";
                //将some-discript类的样式增加.active的高亮属性, 延时100ms为了避免浏览器优化而发生的：瞬间修改两次同一个元素的样式导致第一次修改失效
                setTimeout(()=>{
                    document.getElementsByClassName("some-discript")[0].classList.add("active");
                },100)
                this.topP[this.lunboIndex].style.display = "block";
                this.bottomP[this.lunboIndex].style.display = "block";


                this.lunboIndex++;
            },

            //小圆圈列表悬浮事件触发更换并固定图片函数
            circleFun(){
                let that = this;
                for(let i = 0;i<this.pointer.length;i++){  //这里要使用let修饰变量， 不要用var,否则会产生变量的作用域穿透问题
                    this.pointer[i].addEventListener("click",function () {
                        console.log("[Home]轮播图按钮组点击索引:",i)
                        that.lunboIndex = i;   //将圈的索引值给图片
                        that.lunboFun();      //调用切换图片的函数
                        //暂时关闭定时器执行
                        clearInterval(that.timer);
                        that.timer = null;
                    })
                    this.pointer[i].addEventListener("mouseleave",function () {
                        if(!that.timer){
                            that.initLunbo();
                        }
                    })
                    //手指离开事件（针对移动端事件监听）
                    // this.pointer[i].addEventListener("touchend",function () {
                    //     that.initLunbo();
                    // })
                }
            },

            //鼠标离开小圆圈列表事件触发定时器
            circleMoveFun(){
                console.log("[Home]鼠标移开");
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
        background-color: #868484;
        /*background: url("../assets/images/bg/bg3.jpg") no-repeat;*/
        background-size: 100% 700px;
        overflow: hidden;
    }

    .lunbo {
        width: 100%;
        height: 100%;
        background-color: #6e7d64;
        position: relative;
        /*transform: translate(10%,55%);*/
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
        width: 10%;
        height: 8%;
        position: absolute;
        left: 50%;
        transform: translate(-50%,0px);
        bottom: 5%;
        display: flex;         /*使其内部元素呈现在一行里*/
        align-items: center;   /*使其内部元素垂直居中*/
        justify-content: space-between;  /*使其内部元素均匀的在水平分布，元素之间的间距均等*/
        font-size: 40px;
        color: #a5b0bb;

    }

    .lunbo-index li:hover {
        cursor: pointer;  /*鼠标停留变小手*/
        color: #f5d4d4;
    }

    .some-discript {
        width: 35%;
        height: 30%;
        /*background-color: #5ec7ea;*/
        position: absolute;
        right: -35%;
        top: 20%;
    }

    .active {
        transition: 1s;
        right: 10%;
    }

    .some-discript p {
        width: 80%;
        margin-top: 20px;
        font-size: 35px;
        font-style:italic;   /*字体倾斜*/
        color: #070e44;
        white-space: nowrap; /* 防止文本换行 */
        text-shadow: 5px 5px 5px #8b7575; /*文字加阴影*/
        display: none;

    }

    .bottom-discript {
        transform: translate(20%,0);
    }

    /*@keyframes myfirst*/
    /*{*/
    /*    from {color: #070e44;}*/
    /*    to {color: yellow;}*/
    /*}*/


</style>