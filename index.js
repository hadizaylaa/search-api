const userCardtemplate = document.querySelector("[data-user-template]");
const userCardcontainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
let user = [];
searchInput.addEventListener("input",(e)=>{
const value = e.target.value.toLowerCase() // what you will type in the search input is the value//this line make handle what you type in the search input
user.forEach(user=>{
    const isvisible  =user.name.toLowerCase().includes(value)|| user.email.toLowerCase().includes(value)
    user.element.classList.toggle('hide',!isvisible)//handle the search input
})
})
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>{
   user =  data.map(user => { //to make a new array
        const card = userCardtemplate.content.cloneNode(true).children[0];//run the template code
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.name;
        body.textContent = user.email;
        userCardcontainer.appendChild(card);//userCardcontainer is the father of the card
        return {name:user.name , email:user.email,element:card}
    });
});
