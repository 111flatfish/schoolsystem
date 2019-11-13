<template>
    <div class="news">
        <!--头部-->

        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main class="container news">
            <!--搜索栏-->
            <div class="row clearfix search">
                <div class="col-md-8 column searchinput">
                    <!--搜索框-->
                    <div class="search">
                        <form class="searchform">
                            <input type="text" placeholder="搜索文章标题或标签" class="form-control txt">
                            <button type="button" value="搜索" class="btn form-control glyphicon glyphicon-search"></button>
                        </form>
                    </div>
                </div>
                <!--筛选栏-->
                <div class="col-md-4 column searchfilter">
                    <label for="">筛选：</label>
                    <select name="time" id="">
                        <option value="7">最近七天</option>
                        <option value="30">一个月</option>
                        <option value="6">半年</option>
                        <option value="360">一年</option>

                    </select>
                </div>
            </div>
            <!--展示内容区-->
            <div class="row clearfix content">
                <!--文章栏-->
                <div class="col-md-8 column article_content">
                    <!--文章显示区-->
                    <h3 style="text-align: left;margin-bottom: 30px">搜索结果：</h3>
                    <ul class="row clearfix">
                        <li class="media" v-for="item in curentNews" >
                            <div class="media-left">
                                <!--图片-->
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/1.jpeg" alt="图片">
                                </a>
                            </div>
                            <!--内容-->
                            <div class="media-body">
                                <!--标题-->
                                <h3 class="media-heading">{{item.title}}</h3>
                                <!--内容-->
                                <p>{{item.content}}</p>
                                <!--简介-->
                                <div class="dec">
                                    <span>{{item.create_time}}</span><span>预览数 {{item.view_num}}</span><span>标签
                                    <ul v-for="item2 in item.news_lable" style="display: inline-block">
                                        <li style="margin: 0 5px;border-radius: 4px;background-color: white;padding: 5px;box-shadow: 0 0 2px 2px rgba(0,0,0,.1)">{{item2}}</li>
                                    </ul>
                                </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!--页码栏-->
                    <div class="pageContainer">
                        <nav aria-label="Page navigation">
                            <ul class="pagination pagination-lg">
                                <!--上一页-->
                                <li @click="pagePreOrNext(-1)">
                                    <span aria-hidden="true">&laquo;</span>
                                </li>
                                <!--页码-->
                                <li v-for="(item,index) in pages" :key="index"  @click="select(item)"><span :class="{actived: item === currentPage}">{{item}}</span></li>
                                <!--下一页-->
                                <li @click="pagePreOrNext(1)">
                                    <span aria-hidden="true">&raquo;</span>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <!--广告栏-->
                <div class="col-md-4 column adv" v-for="item in adv">
                    <div class="adv_item">
                        <img src="../../../public/image/teacherheader/2.jpeg" alt="adv">
                        <div class="adv_item_txt">
                            {{item.introduce}}
                        </div>
                    </div>
                </div>
            </div>

        </main>
        <!--底部-->

    </div>
</template>

<script>
    // 引入组件
    import Banner from "../../components/banner"

    // 引入axios
    import axiosReq from "../../util/axiosConfig"

    //引入util函数
    import util from  "../../util"

    export default {
        name: "news",
        // 数据
        data(){
            return{
                // 文章数据
                news:[],               // 初始化页面获取的总文章
                curentNews:[],          //当前页渲染的文章

                // 页码栏数据
                currentPage:1,            //当前页，默认为1
                pageNum:5,                //一页最多显示的文章数
                totalPage:1,             //总页数

                // banner类型
                type:"news",
                // banner位置
                loc:"title",
                // 广告数据
                adv:[]
            }
        },
        // 组件
        components:{
            Banner
        },
        created() {
            // 初始化页面获取文章请求
            axiosReq.get("https://api.wulixianzhi.cn/index.php/index/index/getNews/num/20").then(data=>{
                this.totalPage = Math.ceil(data.data.length/this.pageNum);
                this.news = data.data;
                // 把标签值分割
                this.news.forEach((value)=>{
                    value.news_lable = value.news_lable.split(",");
                });
                // 默认显示第一页
                this.curentNews = this.news.slice(0,5);

            });

            // 广告栏初始化，必须在请求后获取高度
            util.newsInit();
            // 初始化获取广告信息
            axiosReq.get("getSomeAdv").then(data=>{
                this.adv = data.data;
            });
        },
        // 方法
        methods:{
            // 点击页码
            select(n){
                if(n === this.currentPage)return ;
                if(typeof n === "string")return ;
                this.currentPage = n;
                this.curentNews = this.news.slice((this.currentPage-1)*5,(this.currentPage-1)*5+5);

            },
            // 点击上一页或者下一页
            pagePreOrNext(n){
                this.currentPage += n;
                this.currentPage < 1?this.currentPage =1:this.currentPage>this.totalPage?this.currentPage = this.totalPage:null;
                this.curentNews = this.news.slice((this.currentPage-1)*5,(this.currentPage-1)*5+5);

            }
        },
        // 组件
        computed:{
            // 页码计算属性
            pages(){
                let c = this.currentPage;
                let t = this.totalPage;
                let p = this.pageNum;
                let arr = [];
                if(t <= 9 && t >0){
                    while (t > 0){
                        arr.push(t);
                        t--;
                    }
                    return arr.reverse();
                }else {
                    if(c <= 5){
                        return [1,2,3,4,5,6,7,"...",t];                              //第一种情况
                    }else if (c >= t - 5) {
                        return [1, '...', t-6, t-5, t-4, t-3, t-2, t-1, t] //第二种情况
                    } else {
                        return [1, '...',  c-2, c-1, c, c+1, c+2,  '...', t] //第三种情况
                    }
                }
            }

        }

    }



</script>

<style scoped>
    .news{
        background-color: #f4f5f7;
    }
    /*搜索栏*/
    .news .search{
        position: relative;
        margin-top: 15px;
    }
    .news .search input{
        font-size: 16px;
        height: 44px;
        padding: 0 10px;
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2);
        /*background-color:hsla(0,100%,100%,0.1);*/
    }
    .news .search input:focus{
        color: #00a1d6;
        box-shadow: 0 0 4px 2px rgba(0,161,214,.8);
    }
    .news .search button{
        position: absolute;
        right: 10px;
        top:0;
        width: 48px;
        height: 44px;
        border: none;
        padding: 0;
        font-size: 28px;
    }
    .news .search button:hover{
        color:#00a1d6;
    }
    .news .search select{
        height: 44px;
        font-size: 16px;
        width: 150px;
        border-radius: 4px;
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2);
        border: none;
        margin-top: 15px;
    }
    .news{
        padding: 0;

    }

    /*内容栏*/
    .content{
        margin: 40px 0 40px 0;
        border-radius: 4px;
    }
    .content .column{
        margin-bottom: 0;
    }
    .content ul .media{
        padding: 30px 10px;
        overflow: hidden;
        cursor: pointer;
        background-color: #eee;
        border-radius: 4px;
    }
    .content ul .media:hover{
        box-shadow: 0 0 2px 3px rgba(0,0,0,.1);
    }
    .content ul .media:hover .media-heading{
        color: #00a1d6;
    }
    .content ul .media .media-body{
        position: relative;
    }
    .content ul .media .media-body p{
        margin-top: 30px;
        font-size: 16px;
        color: #99a2aa;
        letter-spacing: 0;
        line-height: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
        margin-left: 20px;
        width: 650px;
    }

    .content ul .media .media-left img{
        width: 200px;
        height: 188px;
        margin: 2px;
        border-radius: 4px;
    }
    .content ul .media h3{
        text-align: left;
        font-weight: bold;
        margin-left: 20px;
        transition: .3s;
        vertical-align: top;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 650px;
    }
    .content ul .media .dec{
        position: absolute;
        left:20px;
        bottom: 20px;
        font-size: 16px;
    }
    .content ul .media .dec span{
        margin: 10px 20px;
        color: #99a2aa;
    }
    /*广告栏*/
    .content .adv_item{
        border-bottom: 1px solid #ccc;
        width: 100%;
        height: 466px;
        cursor: pointer;
    }
    .content .adv_item img{
        width: 100%;
        height: 100%;
    }
    .content .adv{
        padding: 10px 10px 10px 20px;
        margin-top: 20px;
        margin-bottom: 30px;
        position: relative;
        text-align: center;

    }
    .content .adv_item_txt{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20%;
        color: #00a1b6;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    }
    /*页码栏*/
    .pageContainer li{
        cursor: pointer;
    }
    .pageContainer li span{
        width: 50px;
    }
    .actived{
        background-color:#ffe284;
    }
    @media (max-width: 768px) {
        .searchinput,.searchfilter{
            display: inline-block;
            padding: 5px;
        }
        .news .search select{
            width: 70px;
            height: 30px;
        }
        .news .search input{
            height: 30px;
        }
        .news .search button{
            height: 30px;
            font-size: 22px;
            right: 0px;
        }
        .content{
            margin: 0;
        }
        .content h3{
            font-size: 18px;
        }
        .content .article_content h3{
            margin-bottom: 10px;
        }
        .content ul .media .media-left img{
            width: 120px;
            height: 100px;
        }
        .content ul .media{
            padding: 10px;
        }
        .content ul .media .media-body p{
            margin: 10px 0 10px 0;
            width: 210px;
        }
        .content ul .media .media-body .dec{
            left: 0;
            bottom: 0px;
            text-align: left;
            width: 210px;
        }
        .content ul .media .media-body span{
            margin: 5px;
            font-size: 12px;
        }
        .content ul .media .media-body .dec li{
            font-size: 12px;
        }
        .content ul .media .media-body .media-heading{
            margin-left: 0px;
        }

        .content .adv{
            margin-top: 0;
            padding-left: 10px;
        }
        .content .adv_item{
            height: 300px;
        }
        .pageContainer li span{
            width: 30px;
            text-align: center;
            padding: 5px;
        }

    }
</style>
