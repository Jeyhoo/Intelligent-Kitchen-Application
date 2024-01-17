<template>
    <header class="flex">
        <div class="header-left flex">
            <h1>小菜冀利智平台</h1>
            <nav>
                <ul class="clearfix">
                    <li><a class="afirst" href="#">首页</a></li>
                    <li><a href="#">现有食材管理</a></li>
                    <li><a href="#">智能菜单生成</a></li>
                    <li><a href="#">美食菜谱</a></li>
                </ul>
            </nav>
        </div>
        <div class="header-right flex">
            <div class="userInfo">
                <img class="userHead" src="../assets/images/logo/userHead2.jpg" />
                <div class="userOther">
                    <h3 class="username">小菜鸡</h3>
                    <ul>
                        <li><a href="#">个人中心</a></li>
                        <li><a href="#">用户注册</a></li>
                        <li><a href="#">退出账号</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeadCom"
    }
</script>

<style scoped>

    /*
通用样式
*/
    .flex {
        display: flex;
        align-items: center;
    }
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }

    /*
    头部样式
    */

    .flex {
        display: flex;         /*使其内部元素呈现在一行里*/
        align-items: center;   /*使其内部元素垂直居中*/
    }


    header {
        height: 80px;
        background-color: #dbe3df;
        justify-content: space-between;  /*使其内部元素均匀的在水平分布，元素之间的间距均等*/
        box-sizing : border-box;         /*将改盒子模型变成width = 边框 + 内边距 + 内容， 原来width只是内容content的宽度*/
        padding: 0 30px;                 /*修改盒子的内边距上下为0，左右为30px.  声明一下为什么直接改外边距margin,是因为背景颜色不包括外边界*/
    }

    header h1 {
        height: 60px;
        width: 300px;
        margin: 0 10px 0 -10px;
        color: #4e4e4c;
        /*text-align: center;*/
        line-height: 60px;
        text-shadow: 5px 5px 5px #8b7575;
    }

    header nav {
        height: 80px;
        /*background-color: #b874ba;*/
        margin: 0 10px;
        line-height: 80px;   /*设置行高为父元素高度，目的是是文本垂直居中*/
    }

    header nav li {
        float: left;
        text-align: center;
        height: 80px;
    }

    header nav a {
        display: block;
        padding: 0 5px;
        color: #6e7d64;
        font-size: 20px;
        font-weight:bold;   /*字体加粗*/
    }

    .afirst {
        background-color: #9a9a93;   /*默认选中添加颜色*/
    }

    header nav a:hover {
        transition: 0.3s;
        background-color: #4e4e4c;
        color: #dbe3df;
    }

    .userInfo {
        height: 80px;
        width: 60px;
        cursor: pointer;  /*鼠标停留变小手*/
    }

    .userHead {
        height: 60px;
        display: block;
        border-radius:20px;  /*边框圆角*/
        margin: 10px auto;
    }

    .userOther {
        transition: 0.3s;   /*像素渐变效果*/
        border-radius:8px;  /*边框圆角*/
        height: 160px;
        width: 120px;
        position: relative;
        background-color: #fafaed;
        text-align: center;   /*文字水平居中*/
        transform: translate(-30px,0px);
        display: none;  /*默认隐藏*/
        box-shadow: 0 0 10px 1px #dcdcdc; /*盒子边框阴影效果*/
    }

    .userOther::before{
        transition: 0.3s;
        content: "";
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        top: -8px;
        transform: translateX(-50%);
        border-bottom: 10px solid #fafaed;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        opacity: 0;
    }

    .username {
        font-size: 15px;
        height: 50px;
        line-height: 50px;
    }

    .userInfo:hover .userOther{
        display: block;
        animation: userOther-show 0.3s linear 0s 1 normal;
        animation-fill-mode: forwards;
    }

    .userInfo:hover .userOther::before{
        opacity: 1;
    }

    @keyframes userOther-show {
        0%{display: none;opacity: 0;}
        100%{display: block;opacity: 1;}
    }

    .userOther ul{
        width: 100%;
    }

    .userOther li{
        transition: 0.1s;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 5px 0;
    }

    .userOther li:hover{
        background-color: #c2b6b6;
    }

    .userOther a {
        transition: 0.1s;
        color: #686161;
    }

    .userOther li:hover a {
        color: #fff;
    }

    .bod{
        position: absolute;
        /*border-top: 25px solid;*/
        border-bottom: 25px solid;
        border-left: 25px solid;
        border-right: 25px solid;
        border-top-color: #c47ff8;
        border-bottom-color: #fa4c4c;
        border-left-color: white;
        border-right-color: white;
        background-color: #dcb5b5;
        left: 50%;
        transform: translateX(-50%);
    }


</style>