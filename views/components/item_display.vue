<!-- TODO: Hãy viết thành một component hoàn chỉnh -->
<template lang="html">
    <div>
        <span v-for="item in things">
        <img :src="'/public/image/' + item.photo" :alt="item.name" width="128" height="128">
        </span>
    </div>
</template>

<script>

export default {
    props : ["things"]
}
</script>

<style lang="css">
</style>