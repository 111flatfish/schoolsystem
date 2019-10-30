<template>
    <div class="article">
        <Header></Header>
        <Banner></Banner>
        <main class="container">
            <div class="row clearfix">
                <section>
                        <h3>文章标题</h3>
                        <div class="head">
                            <span>作者</span>
                            <time>发布时间</time>
                            <span>浏览量</span>
                            <span>标签</span>
                        </div>
                        <article class="content">
                            <p>正文（段落缩进看文章上传是否保存格式）
                                《生化危机1重置版》尽管没有传言中的全3D背景，但是其超高素质，逼真的光影效果让所有玩家一片惊呼。游戏中大量多边形构成的人物给人以照片般的逼真感觉。一切都是那么顺利，生化危机可以借助NGC强大的硬件功能重塑当年的辉煌。2002年4月30日，《生化危机1重置版》发售了。并且立刻登上了销售榜首，极大的带动了NGC的销售势头，使得NGC在很长一段时间内超过了PS2的销量，但是由于NGC主机本身定为就较为低龄化。 游戏中的亮点许多。首先给玩家感觉最突出的就是画面了，再就是新增的场景和新增加制作的剧情，游戏中多出的女实验体剧情也是很感人的。流程和解迷方面也是变化不少，就算你玩过PS版的《生化危机1》，也是绝对可能往往被哪个迷题卡住过不去。整体难度加大，就算在普通难度下被丧尸咬上没几口就GAME OVER，而HARD和新增加的挑战模式更是难上加难，所以玩家们可以当作新游戏来玩。隐藏要素和特别是新多的游戏模式非常具有挑战性。可以看出虽然是重制版，但制作人完全是当新游戏去全力制作的，非常具有诚意。
                            </p>
                        </article>
                </section>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"
    export default {
        name: "article",
        components:{
            Header,
            Footer,
            Banner
        }
    }

</script>

<style scoped>
main{
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
.article h3{
    font-size: 24px;
}
.article .head span{
    margin: 10px;
}
.article .content p{
    text-align: left;
    font-size: 18px;
    text-indent: 36px;
    padding: 10px 36px 10px 36px ;
    line-height: 28px;
}
</style>
