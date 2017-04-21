<!-- TODO: Hãy viết thành một component hoàn chỉnh -->

<template lang="html">
    <div>
        <span class="col-md-1" v-for="item in things" style="text-align: center;">
            <img abc="1" :src="'/public/image/' + item.photo" :alt="item.name" width="128" height="128"><br>
            <h3>{{ item.name }}</h3>
        </span>
    </div>
</template>

<script>
export default {
    props: ['things']
}
</script>
<style>
img{
        display:none;
    }
</style>