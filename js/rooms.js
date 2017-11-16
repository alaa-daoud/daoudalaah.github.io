url_api = "https://pure-basin-20770.herokuapp.com/api/rooms";
switch_light_url="/switch/light";
switch_ringer_url="/switch/ringer";
var app = new Vue({
  el: '#app',
  data: {
        roomArray: [],
        selected: 0
    },
	mounted() {
			axios.get(url_api)
				 .then(response => {this.roomArray = response.data});
	},
	methods: {
        switchLight(room) {
            this.selected = room;
            axios.post(url_api + "/" + room.id + switch_light_url)
                .then(response => {this.roomArray = response.data});
            },
        switchRinger(room) {
            this.selectedRoom = room;
            axios.post(url_api + "/" + room.id + switch_ringer_url)
                .then(response => {this.roomArray = response.data});
        },

    }	
	
});