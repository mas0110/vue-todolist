const {
        createApp 
    } = Vue 

    createApp({
        data() {
            return {
                newTask:'',
                tasks:[
                    'farei compiti',
                    'farei la spesa',
                    'pulire casa',
                ]
            }
        },
        created(){

        },
        methods:{
            addTask(){

                if(this.newTask !== ''){

                    this.tasks.push(this.newTask)
                }

                this.newTask = ''
            },
            removetask(index){
                this.tasks.splice(index, 1)
            },
        },
    }).mount('#app')