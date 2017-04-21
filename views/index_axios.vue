<template>
    <div id="app">
        <div class="abc123">
            <select v-model="selected" name="selectOpt" v-on:change="getList()">
                <option v-for="item in selectItems" :value="item.type">{{ item.name }}</option>
            </select>
            <p>Selected: {{selected}}</p>
        </div>
        <div class="gridview">
            <images :things="things"></images>
        </div>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				selected: 0,
				things: [],
				errorMsg: ''
			}
		},

		methods: {
			getList() {
				axios.post('/querydata', {
					selectedType: this.selected
				}).then(response => {
					console.log(response)
					this.things = response.data
				}).catch(error => {
					this.errorMsg = 'No user or no location'
					this.things = []
				})
			}
		}
	}
</script>

