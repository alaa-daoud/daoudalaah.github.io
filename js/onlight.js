url_api = "https://pure-basin-20770.herokuapp.com/api/rooms";
switch_light_url="/switch/light";
which_light_on_url="/light/on";
var app = new Vue({
  el: '#app',
  data: {
        roomArray: [],
        selected: -1
    },
	mounted() {
			axios.get(url_api + which_light_on_url)
				 .then(response => {this.roomArray = response.data});
				 
	},
	methods: {
		reload(){
			axios.get(url_api + which_light_on_url)
				 .then(response => {this.roomArray = response.data});
		},
        switchLight() {
            if(this.selected==-1)
				this.selected= ( document.getElementById("sel").options[sel.selectedIndex].text);
            axios.post(url_api + "/" + this.selected + switch_light_url)
                .then(this.reload());
            },
		changeSelect(){
			
			this.selected= document.getElementById("sel").options[sel.selectedIndex].text;
			
		}
		
    }	
	
});