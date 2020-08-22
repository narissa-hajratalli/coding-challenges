const app = new Vue({
    el: "#app",
    data: {
        loggedin : false,
        JWT: "",
        loginUN: "",
        loginPW: "",
        createUN: "",
        createPW: "",
        devURL: "http://localhost:3000",
        prodURL: null,
        user: null,
        token: null,
        notes: []
    },
    methods: {
        //////////// LOGIN /////////////
        handleLogin: function(event){
            event.preventDefault()
            const URL = this.prodURL ? this.prodURL : this.devURL
            // console.log(URL)
            const user = {
                username: this.loginUN,
                password:this.loginPW
            }
            fetch(`${URL}/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error){
                        alert('Error logging in')
                    } else {
                        this.user = data.user
                        this.token = data.token
                        this.loggedin = true
                        this.getNotes()
                        this.loginPW = ""
                        this.loginUN = ""
                    }
                })
        },

        //////////// LOG OUT /////////////
        handleLogout: function() {
            this.user = null
            this.token = null
            this.loggedin = false
            this.notes = ''
        },

        //////////// CREATE USER /////////////
        handleSignup: function(){
            const URL = this.prodURL ? this.prodURL : this.devURL
            const user = {
                username: this.createUN,
                password:this.createPW
            }
            fetch(`${URL}/users`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then((data) => {
                    if (data.error){
                        alert('Sign up unsuccessful')
                    } else {
                        alert('Sign up successful')
                    }
                })
            this.createPW = ""
            this.createUN = ""
        },

        //////////// GET - SHOW NOTES /////////////
        getNotes: function(){
            const URL = this.prodURL ? this.prodURL : this.devURL
            fetch(`${URL}/notes`, {
                method: "get",
                headers:{
                    Authorization: `bearer ${this.token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.notes = data
                })
        },

        //////////// CREATE - CREATE NOTES /////////////
        createNote: function() {
            const URL = this.prodURL ? this.prodURL : this.devURL
            const note = {
                message: this.newNote
            }
            fetch(`${URL}/notes`,{
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${this.token}`
                },
                body: JSON.stringify(note)
            }).then(response => {
                this.newNote=""
                this.getNotes()
            })

        }
    }
})