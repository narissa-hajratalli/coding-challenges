//when starting off view, just use one vue constructor function and put everything inside of that
//it is way easier to do it this way at first
//makes working with API data much easier

//new Vue type object, constructor function that you pass an object into
const app = new Vue({
    el: "#app", //el stands for element, we're attaching this Vue instance to the element that has an id of app, this is a css selector
    //we could also use classes, but we usually use ids 
    data: {
        hello: "Hello World",
        nums: [1, 2, 3, 4, 5],
        newNum: 0,
        even: true,
        posts: []
    },
    methods: { //this is where we store which functions we want to use only within our vue instance
        addNum: function(){ //in view we can only write normal functions, not arrow functions because we need the 'this' keyword
            this.nums.push(this.newNum)
        
        //Conditional rendering
        this.even = this.nums.length % 2 ===  0
        },
        getPosts: async function(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const myData = await response.json()

            this.posts = myData
        }
    }
}) 

