<template>
    <div class="teacher">
        <!--内容-->
        <main class="container teacher">
            <!--&lt;!&ndash;搜索框&ndash;&gt;-->
            <!--<div class="search row clearfix">-->
                <!--<form class="searchform col-md-offset-1 col-md-9">-->
                    <!--<input type="text" placeholder="搜索老师" class="form-control txt">-->
                    <!--<button type="button" value="搜索" class="btn form-control glyphicon glyphicon-search"></button>-->
                <!--</form>-->
            <!--</div>-->
            <div class="teacher_header">
                <h1>大咖往事</h1>
            </div>
            <!--老师内容-->
            <div class="row clearfix">
                <div class="col-md-10 content">
                    <div class="row clearfix teachercontent">
                        <!--文本-->
                        <div class="col-md-6  name">
                            <h1>田二妞</h1>
                            <p>毕业院校：中国传媒大学 </p>
                            <div class="teacher_lable">
                                <p>标签：</p>
                                <ul>
                                    <li>国家一级保护动物</li>
                                    <li>国家一级保护动物</li>
                                    <li>国家一级保护动物</li>
                                </ul>
                            </div>
                            <div class="teacher_achievement">
                                <p>教学成果：</p>
                                <ul>
                                    <li>中央戏剧学院 <span style="font-size: 30px;font-weight: bolder;">15</span> 名</li>
                                    <li>北京电影学院 <span style="font-size: 30px;font-weight: bolder;">15</span> 名</li>
                                    <li>中国传媒大学 <span style="font-size: 30px;font-weight: bolder;">15</span> 名</li>
                                </ul>
                            </div>
                        </div>
                        <!--轮播图片-->
                        <div class=" col-md-3 img">
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                <!-- Wrapper for slides -->
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="../../../public/image/teacherheader/2.jpeg" alt="teacher">
                                    </div>
                                    <div class="item">
                                        <img src="../../../public/image/teacherheader/3.jpg" alt="teacher">
                                    </div>
                                    <div class="item">
                                        <img src="../../../public/image/teacherheader/1.jpeg" alt="teacher">
                                    </div>
                                </div>

                                <!-- 切换图片 -->
                                <!--左-->
                                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev" style="border-radius: 4px">
                                    <span class="pre" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <!--右-->
                                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" style="border-radius: 4px">
                                    <span class="next" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <img src="../../../public/image/teacher/尖端横线.png" alt="尖端横线" width="100%">
                    </div>
                    <!--简介-->
                    <h3 style="text-align: left;margin-left: 30px;font-weight: bold">简介</h3>
                    <div class="row clearfix synopsis">
                        <article>
                            <p>2009年12月
                                鹿乃 twitter
                                鹿乃 twitter
                                左右在NICO注册账号
                                初次投稿是在2010年1月6日的恋爱サーキュレーション　她的声音很可爱， 所以被很多人认为是萝莉音。
                                因为她的日语发音不怎么标准，所以也被一部分人认为她是才刚学会日语的天朝人。
                                2010年1月下旬左右开始在NICO上活跃
                                5月25日上传的けいおん！！に负けた鹿乃がおちゃめ机能歌ってみた 在翻唱排名中获得了第五位的成绩，点击首次超过了10万次。7月23日上传的歌ってみた ハロ/ハワユ鹿乃，取得了首次歌ってみたカテラン（翻唱排行榜）排名第一名的记录。还有这首歌在26日的カテゴリ合算(分类合算，我的名单)中取得了第一名，第2天27日突破了10万次点播。而且这首歌还进了ボカロオリジナルを歌ってみた（V家原创歌曲翻唱）殿堂！已经加入了《Sevencolors》组合.
                                鹿乃
                                鹿乃(5张)
                                2011年1月6日以Sevencolors的名义发了第一张单曲专辑ばんび～の
                            </p>
                        </article>
                    </div>
                </div>
            </div>

            <!--导航条-->
            <!--<div class="row clearfix control col-md-offset-1 col-md-9">-->
                <!--<div class="col-lg-3 teacher_banner">-->
                     <!--<input type="button" value="上一个老师" class="btn btn-primary form-control">-->
                <!--</div>-->
                <!--<div class="col-lg-6 teacher_banner"></div>-->
                <!--<div class="col-lg-3 teacher_banner">-->
                    <!--<input type="button" value="下一个老师" class="btn btn-primary form-control">-->
                <!--</div>-->
            <!--</div>-->
        </main>

    </div>
</template>

<script>
    // 引入组件
    import Header from "../../components/header"
    import Footer from "../../components/footer"

    export default {
        name: "teacher",
        // 路由传参
        props:["id"],
        // 组件
        components:{
            Header,
            Footer
        },
        mounted() {
            // 老师图片轮播
            $(function () {
                $('.carousel').carousel({
                    // 切换时间
                    interval: 3000
                })
            });
        }
    }

</script>

<style scoped>
/*老师内容*/
.teacher{
    margin-top: 250px;
    margin-left: 7.33333333%;
    margin-bottom: 50px;
}
.teacher .teacher_header{
    background: url("../../../public/image/teacher/标题容器.png") no-repeat;
    background-size:433px 163px;
    background-position: 30% 10%;
    height: 200px;
    padding-top: 5px;
}
.teacher .teacher_header h1{
    text-align: center;
    margin-right: 30%;
    font-size: 71px;
}
.teacher .content{
    border: 1px solid #e5e5e5;
    /*margin: 15px;*/
    border-radius: 4px;
}
.teachercontent{
    margin: 0;
}
.teachercontent .name{
    padding: 30px 0 15px 0;
    line-height: 40px;
    margin-right: 15px;
}
.teachercontent .name ul li{
    font-size: 22px;
}
.teachercontent .name h1{
    font-size: 60px;
    text-decoration: underline;
}
.teachercontent .name p{
    font-size: 35px;
    color:#000;
    text-align: left;
    margin-left: 30px;
    margin-top: 30px;
}
.teachercontent .img{
    width: 380px;
    margin: 30px 0 10px 50px;
    border-radius: 4px;
}
.teachercontent .img img{
    height: 350px;
    border-radius: 4px;
}
.teachercontent .left,.right{
    background-image: none;
}
.teachercontent .left .pre{
    display: inline-block;
    background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
    background-size: 77px 77px;
    width: 77px;
    height: 77px;
    position: relative;
    top: 30%;
    left: -180%;
}
.teachercontent .right .next{
    display: inline-block;
    background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
    background-size: 77px 77px;
    width: 77px;
    height: 77px;
    transform: rotateY(180deg);
    position: relative;
    top: 30%;
    right: -132%;
}
.teacher .content .synopsis{
    padding: 25px;
    line-height: 25px;
    text-align: left;
    text-indent:25px
}
.teacher .content .synopsis p{
    font-size: 18px;
}
/*导航条*/
.teacher  .control{
    padding: 40px 0;
}
.teacher  .control .btn{
    height: 50px;
    margin-right: 15px;
}

/*搜索栏*/
.teacher .search{
    position: relative;
    margin: 30px 15px;
}
.teacher .search input{
    font-size: 16px;
    height: 48px;
    padding: 0 15px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 4px 2px rgba(0,0,0,.2);
    /*background-color:hsla(0,100%,100%,0.1);*/
}
.teacher .search input:focus{
    color: #00a1d6;
    box-shadow: 0 0 4px 2px rgba(0,161,214,.8);
}
.teacher .search button{
    position: absolute;
    right: 14px;
    top:0;
    width: 52px;
    height: 48px;
    border: none;
    padding: 0;
    font-size: 28px;
}
.teacher .search button:hover{
    color:#00a1d6;
}

@media (max-width: 768px) {
    .teachercontent .img{
        width: 320px;
    }
    .teachercontent .img img{
        width: 300px;
        height: 300px;
    }
    .teachercontent .name p,h1{
        margin: 10px;
    }
    .teacher_banner{
        display: inline-block;
    }
}
</style>
