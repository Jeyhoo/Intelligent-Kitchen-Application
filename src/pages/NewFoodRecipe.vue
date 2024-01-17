<template>
    <div class="recipe-all">
        <div class="recipe-head flex">
           <div class="flex head-left">
               <div class="flex select">
                   <label for="sort">菜系:</label>
                   <select id="sort" name="sort">
                       <option value="0">全部</option>
                       <option value="1">川湘菜</option>
                       <option value="2">东北菜</option>
                       <option value="3">云南菜</option>
                       <option value="4">粤菜</option>
                       <option value="5">河北菜</option>
                   </select>
               </div>

               <div class="flex select">
                   <label for="flavour">口味:</label>
                   <select id="flavour" name="flavour">
                       <option value="0">全部</option>
                       <option value="1">酸辣</option>
                       <option value="2">酱香</option>
                       <option value="3">清淡</option>
                       <option value="4">微辣</option>
                       <option value="5">齁甜</option>
                   </select>
               </div>

               <div class="flex select">
                   <input type="checkbox" id="hun" name="hunsu" value="1">
                   <label for="hun">荤菜</label>
                   <input type="checkbox" id="su" name="hunsu" value="2">
                   <label for="su">素菜</label>
               </div>
           </div>
            <div class="flex query">
                <label>
                    <input type="text" placeholder="输入菜品或食材名称">
                </label>
                <span class="button">查询</span>
            </div>
        </div>

        <div class="recipe-main">
            <ul class="flex list">
                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>荤的</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>齁甜</span></div>
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <h4 class="title">宫保鸡丁</h4>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

                <li>
                    <div class="moedl-top flex">
                        <img src="../assets/images/logo/userHead2.jpg">
                        <div class="text-info">
                            <a href="#"><h4 class="title">宫保鸡丁</h4></a>
                            <p class="discript"> 宫保鸡丁是一道中国传统菜肴，家家户户都会在来客之时坐上一道这样的美味。其中主要......</p>
                        </div>
                    </div>

                    <div class="modle-bottom flex">
                        <div><span>齁甜</span></div>
                        <div><span>荤的</span></div>
                        <div><span>难度适中</span></div>
                        <div><span>aaaa</span></div>
                        <div><span>顶顶顶</span></div>
                        <div><span>难度适中</span></div>
                    </div>
                </li>

            </ul>

        </div>
    </div>

</template>

<script>
    import Index from "../views/Index";
    export default {
        name: "NewFoodRecipe",
        components: {Index}
    }
</script>

<style scoped>

    .flex {
        display: flex;         /*使其内部元素呈现在一行里*/
        align-items: center;   /*使其内部元素垂直居中*/
    }

    .recipe-all {
        width: 100%;
        /*height: 1000px;*/
        /*background-color: #deced1;*/
    }

    .recipe-head {
        width: 100%;
        height: 160px;
        background-color: #91cece;
        justify-content: space-between;  /*使其内部元素均匀的在水平分布，元素之间的间距均等*/
        box-sizing : border-box;         /*将改盒子模型变成width = 边框 + 内边距 + 内容， 原来width只是内容content的宽度*/
        padding: 0 50px;                 /*修改盒子的内边距上下为0，左右为30px.  声明一下为什么直接改外边距margin,是因为背景颜色不包括外边界*/
        border-bottom: solid #908585 2px;
    }

    .recipe-head div {
        width: 45%;
        height: 100px;
        /*background-color: #d0c8c9;*/
    }

    .recipe-head .query input {
        display: block;
        height: 30px;
        /*background-color: #b0dcec;*/
        border: solid #7e95a7 1px;
        border-radius: 5px;
    }

    .recipe-head .query .button {
        display: block;
        background-color: deepskyblue;
        width: 50px;
        height: 30px;
        margin-left: 30px;
        text-align: center;
        line-height: 30px;
        border: solid 1px #e7dee1;
        border-radius:10px;  /*边框圆角*/
        cursor: pointer;  /*鼠标停留变小手*/
        color: #ddffff;
        user-select: none;   /*取消文本选中*/
    }

    .recipe-head .query .button:hover {
        background-color: #5ec7ea;
    }

    .recipe-head label {
        display: block;
        font-size: 20px;
        /*margin: 0 20px 0 50px;*/
        white-space: nowrap; /* 防止文本换行 */
    }

    .head-left {
        justify-content: space-between;  /*使其内部元素均匀的在水平分布，元素之间的间距均等*/
    }

    .recipe-head .select {
        width: 30%;
        /*background-color: #8cc9ab;*/
    }

    .recipe-head select {
        width: 150px;
        height: 30px;
        margin-left: 10px;
        border: solid #7e95a7 1px;
        border-radius: 5px;
        font-size: 16px;
    }

    .recipe-head .select input {
        display: block;
        margin-left: 15px;
        cursor: pointer;  /*鼠标停留变小手*/
    }



/*    列表布局   */

    .recipe-main ul {
        flex-wrap: wrap;
        background-color: #cbdbdb;
    }

    .recipe-main ul li {
        box-sizing : border-box;         /*将改盒子模型变成width = 边框 + 内边距 + 内容， 原来width只是内容content的宽度*/
        width: 21%;
        height: 300px;
        background-color: #ebf3e5;
        margin: 2%;                          /*边距也用百分比，不然如果边距写死，那么在改变窗口大小的时候会导致每行的li盒子数量变化，并且会导致最右侧边距改变的较大*/
        border: solid 1px;
    }

    .recipe-main ul li:hover {
        /*border:solid 2px #4e1212;*/
        box-shadow: 0 0 15px #393107; /*设置外发光   设置阴影大小、模糊程度和颜色 */
    }

    .moedl-top {
        width: 100%;
        height: 75%;
        /*background-color: #dbe3df;*/
    }

    .modle-bottom {
        width: 100%;
        height: 25%;
        /*background-color: #634d76;*/
    }

    li img {
        width: 60%;
        height: 100%;
    }

    .text-info {
        width: 40%;
        height: 100%;
        /*background-color: #02212b;*/
    }

    .title {
        box-sizing : border-box;         /*将改盒子模型变成width = 边框 + 内边距 + 内容， 原来width只是内容content的宽度*/
        padding: 0 10px;                 /*修改盒子的内边距上下为0，左右为30px.  声明一下为什么直接改外边距margin,是因为背景颜色不包括外边界*/
        width: 100%;
        height: 30%;
        /*background-color: #dbe3df;*/
        text-align: center;
        line-height: 60px;
    }

    .discript {
        box-sizing : border-box;         /*将改盒子模型变成width = 边框 + 内边距 + 内容， 原来width只是内容content的宽度*/
        padding: 10px 10px;                 /*修改盒子的内边距上下为0，左右为30px.  声明一下为什么直接改外边距margin,是因为背景颜色不包括外边界*/
        width: 100%;
        height: 67%;
        /*background-color: #fa4c4c;*/
        font-size: 17px;
        overflow: hidden;
    }

    .modle-bottom {
        flex-wrap: wrap;
    }

    .modle-bottom div {
        background-color: #cdb92b;
        margin: 0 10px;
        padding: 0 10px;
        font-size: 18px;
        color: #eadbdb;
        border-radius: 7px;
    }

</style>