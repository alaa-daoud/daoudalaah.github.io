


var app = new Vue({
  el: '#BuildingsApp',
  data: {
        buildings: [],
        selected: 0
    },
	mounted() {
			axios.get(url_Buildings_api)
				 .then(response => {this.buildings= response.data});
	}
});