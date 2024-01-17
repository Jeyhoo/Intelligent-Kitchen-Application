/*
工具类js
*/

/**
 * 轮播图工具
 * @params option：初始化配置项，不写则启动默认配置
 */
export class Carousel{
    constructor(option = {}){
        this.index = 0; //当前索引
        this.domSource = option.domSource; //轮播图组件库
        this.length = dom.length;   //轮播图数据长度
        this.indexGroup = option.indexGroup || document.getElementsByClassName("carousel"); //索引按钮组
        this.auto = typeof option.auto != "undefined" ? option.auto : true; //自动轮播
        this.speed = option.speed || 3000; //轮播速度
        this.timer = null;
        console.log("构造器完毕")
    }

    //轮播图初始化
    init(isDestroy){
        //对象销毁，进行销毁定时器
        if(isDestroy){
            clearInterval(this.timer);
            this.timer = null;
        }
        //配置省缺轮播图dom绑定，则绑定默认dom元素，或异常抛出
        if(!domSource){
            let domFinded = document.getElementsByClassName("carousel");
            if(domFinded){
                this.domSource = domFinded[0]
            }else{
                throw new Error("轮播图初始化错误，需要指定dom元素")
            }
        }
        // 检查缺少索引按钮组，则为其添加上
        if(!indexGroup){
            // coding
        }

        //启动轮播
        this.auto()
    }

    //轮播图定时器逻辑
    auto(){
        this.timer = setInterval(()=>{
            this.next();
            goto();
        },this.speed)

        //劫持speed属性更新，注销原有定时器，并重置定时器
        Object.defineProperty(this,"speed",{
            //coding
            // get(){
            //     //
            // },
            // set(){
            //     //
            // }
        })
    }

    //下一张
    next(){
        if(this.index < this.length-1){
            this.index++;
        }else{
            this.index = 0;
        }
        this.goto();
    }

    //上一张
    prev(){
        if(this.index > 0){
            this.index--;
        }else{
            this.index = this.length-1;
        }
        this.goto();
    }

    //显示指定索引
    goto(){
        //coding
        if(arguments.length){
            this.index = arguments[0];
        }
        //重置所有的class
        Array.from(this.domSource.children).map(item=>{
            item.classList.remove("active");
        })
        //高亮显示某一个class
        this.domSource[index].classList.add("active");

        console.log("跳转指定索引")
    }
}