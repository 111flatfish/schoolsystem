<template>
    <div class="achievement">
        <!--头部-->
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main class="container">
            <!--成绩展示区-->
            <div class="row clearfix">
                <div class="col-sm-6 col-md-3" v-for="item in currentGrade">
                    <div class="thumbnail">
                        <!--图片-->
                        <img src="../../../public/image/teacherheader/2.jpeg" alt="grade">
                        <!--描述-->
                        <div class="caption">
                            <h3>{{item.name}}</h3>
                            <p>{{item.school}}</p>
                        </div>
                    </div>
                </div>
            </div>
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
        </main>
        <!--底部-->

    </div>
</template>

<script>
    // 引入组件
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"

    // 引入axios
    import axiosReq from  "../../util/axiosConfig"
    export default {
        name: "achievement",
        data(){
            return{
                // 成绩数据
                grades:[],               // 初始化页面获取的总成绩数
                currentGrade:[],          //当前页渲染的成绩

                // 页码栏数据
                currentPage:1,            //当前页，默认为1
                pageNum:12,                //一页最多显示的成绩数
                totalPage:1,             //总页数

                // banner类型
                type:"achievement",
                // banner位置
                loc:"title"

            }
        },
        components:{
            Header,
            Footer,
            Banner
        },
        created() {
            // 初始化页面获取成绩请求
            axiosReq.get("https://api.wulixianzhi.cn/index.php/index/index/getStudentGrade/num/20").then(data=>{
                this.totalPage = Math.ceil(data.data.length/this.pageNum);
                this.grades = data.data;
                // 默认显示第一页
                this.currentGrade = this.grades.slice(0,12);
            });
        },
        // 方法
        methods:{
            // 点击页码
            select(n){
                if(n === this.currentPage)return ;
                if(typeof n === "string")return ;
                this.currentPage = n;
                this.currentGrade = this.grades.slice((this.currentPage-1)*12,(this.currentPage-1)*12+12);

            },
            // 点击上一页或者下一页
            pagePreOrNext(n){
                this.currentPage += n;
                this.currentPage < 1?this.currentPage =1:this.currentPage>this.totalPage?this.currentPage = this.totalPage:null;
                this.currentGrade = this.grades.slice((this.currentPage-1)*12,(this.currentPage-1)*12+12);

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
.achievement{
    background-color: #f4f5f7;
}
.achievement .thumbnail:hover{
    box-shadow: 0 0 5px 3px rgba(0,0,0,.2);
    cursor: pointer;
}
.achievement .thumbnail img{
    width: 310px;
    height: 310px;
}
.achievement .thumbnail p{
    font-weight: bold;
}
main{
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
main .thumbnail p{
    font-size: 18px;
}
main nav{
    height: 100px;
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
</style>
