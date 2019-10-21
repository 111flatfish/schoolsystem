<template>
        <div class="row clearfix banner">
            <div class="col-md-12 column">
                <div class="carousel slide" id="carousel-192428">
                    <!--指示灯-->
                    <ol class="carousel-indicators">
                        <li class="active" data-slide-to="0" data-target="#carousel-192428">
                        </li>
                        <li data-slide-to="1" data-target="#carousel-192428">
                        </li>
                        <li data-slide-to="2" data-target="#carousel-192428">
                        </li>
                    </ol>
                    <!--中间图片-->
                    <div class="carousel-inner">
                        <div class="item active">
                            <!--图片-->
                            <img alt="" src="http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/1/default.jpg"/>
                            <!--文字描述-->
                            <div class="carousel-caption">
                                <h4>
                                    First Thumbnail label
                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="" src="http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/2/default.jpg" />
                            <div class="carousel-caption">
                                <h4>
                                    Second Thumbnail label
                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="" src="http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/3/default.jpg" />
                            <div class="carousel-caption">
                                <h4>
                                    Third Thumbnail label
                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--左右箭头-->
                    <a class="left carousel-control" href="#carousel-192428" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></a>
                    <a class="right carousel-control" href="#carousel-192428" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style scoped>
.item img{
    margin: 0 auto;
}
.banner{
    width:1600px;
    height: 600px;
    margin: 0 auto;
}
</style>
