
roomAPI=url_api;
building_id=getAllUrlParams().bid;
if(building_id){
	roomAPI=url_api+"/building/"+building_id;
	
	}
building_name=getAllUrlParams().bname;
if(building_name){
	$("#BuildingLable").html(building_name);
	
	}
console.log(building_id);


var app = new Vue({
  el: '#app',
  data: {
        roomArray: [],
        selected: 0
    },
	mounted() {
			axios.get(roomAPI)
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
var app = new Vue({
  el: '#BuildingsApp',
  data: {
        buildings: [],
        selected: 0,
		buil_id: building_id,
    },
	mounted() {
			axios.get(url_Buildings_api)
				 .then(response => {this.buildings= response.data});
	},
	methods:{
		changeBuilding(building){
			this.selected= building;
			if(building!=-1)
				window.location = "rooms.html?bid="+this.selected;//.id+"&bname="+this.selected.name;
			else
				window.location = "rooms.html";
		}
	}
});




