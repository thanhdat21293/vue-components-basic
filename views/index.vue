<template lang="html">
    <div>
        <h1>{{title}}</h1>
        <!--<form action="/" method="POST">-->
        <select v-model="selected" name="selectOpt">
            <option v-for="item in selectItems" :value="item.type">{{ item.name }}</option>
        </select>
        <!--<input type="submit">-->
        <!--</form>-->
        <div>
            <p>Selected: {{selected}}</p>
            <img v-for="link in showImg(selected)" :src="'/image/' + link.photo" :alt="link.name">
        </div>
        

    </div>
</template>

<script>
export default {
    data: function() {
        return {
        
        }
    }
}
</script>