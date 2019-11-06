<template>
    <div class="error">
        <h1>404</h1>
        <p>未找到资源</p>
        <input type="button" class="btn btn-primary" value="回到上一级" @click="toBack(0)">
        <input type="button" class="btn btn-primary" value="返回首页" @click="toBack(1)">
    </div>
</template>

<script>
    export default {
        name: "error",
        methods:{
            toBack(value){
                switch (value) {
                    case 0:
                        this.$router.back();
                        break;
                    case 1:
                        this.$router.push({path:"/index"});
                        break
                }
            }
        }
    }
</script>

<style scoped>

</style>
