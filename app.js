const app = Vue.createApp({
    data(){
        return{
            enteredTask:'',
            tasks:[],
            isVissible:true,
            buttonStatus:'Hide'
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTask);
        },
        showHide(){
            this.isVissible=!this.isVissible;
            if(this.buttonStatus=='Hide'){
                this.buttonStatus="Show"
            }else{
                this.buttonStatus="Hide"
            }
        }
    }

});
app.mount('#assignment');