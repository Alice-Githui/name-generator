let button = document.getElementById("button")
let showname=document.getElementById("showname")


button.addEventListener("click", function(event){
    let name="Alice Githui"
    event.preventDefault()

    event.target.textContent="My name is " + name
})