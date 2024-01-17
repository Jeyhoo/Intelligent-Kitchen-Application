<template>
    <div class="index">
        <!-- 头部 -->
        <head-com></head-com>
        <!-- 主体 -->
        <main>
            <home-page></home-page>
        </main>

        <!-- 底部 -->
        <footer>.</footer>
        <div class="bod">

        </div>
    </div>
</template>

<script>
    import headCom from "../components/HeadCom";
    import homePage from "../pages/Home"

    export default {
        name: "Index",
        components: {
            headCom,
            homePage
        }
    }
</script>

<style scoped>

</style>