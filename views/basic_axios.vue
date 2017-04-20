<!-- http://codepen.io/setholito/pen/PbxqRj -->
<template>
    <div id="app">
        <form @submit.prevent="search">
            <input v-model="username" placeholder="Enter a github username !"/>
        </form>
        <p v-if="data.name && data.location">
            {{ data.name }} {{ data.login }}
            is from
            {{ data.location }}
        </p>

        <p v-else>{{ errorMsg }}</p>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				username: '',
				data: [],  //Nhan response tu REST service
				errorMsg: ''
			}
		},

		methods: {
			search() {
				const api = `https://api.github.com/users/${this.username}`
				axios.get(api).then(response => {
					this.data = response.data
				}).catch(error => {
					this.errorMsg = 'No user or no location'
					this.data = []
				})
			}
		}
	}
</script>
<style lang="css">
</style>
