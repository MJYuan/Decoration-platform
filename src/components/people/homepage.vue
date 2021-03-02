<template>
    <div class="box">
        <div class="inbox">
            <v-pie></v-pie>
            <v-infobox></v-infobox>
        </div>
        <div class="inbox">
            <v-process></v-process>
        </div>


    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.box{
    // width: 80%;
    // height: 100%;
    //display: flex;
}
.inbox{
    display: flex;
}
</style>