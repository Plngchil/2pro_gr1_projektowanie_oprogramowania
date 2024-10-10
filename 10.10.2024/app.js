const body = document.querySelector("body")

const div = document.createElement("div")

body.appendChild(div)

div.style.width = "500px"
div.style.height = "500px"
div.style.border = "1px solid black"
div.style.textAlign = "center"
div.setAttribute("id", "testow0a10")

const button1 = document.createElement("button")
body.appendChild(button1)
button1.innerHTML = "żółty"
button1.style.borderRadius = "5px"
const button2 = document.createElement("button")
body.appendChild(button2)
button2.innerHTML = "czerwony"
button2.style.borderRadius = "5px"
button1.addEventListener("click", function(){
    div.style.backgroundColor = "yellow"
})
button2.addEventListener("click", function(){
    div.style.backgroundColor = "red"
})

const input1 = document.createElement("input")
input1.setAttribute("type", "color")
body.appendChild(input1)

const button3 = document.createElement("button")
body.appendChild(button3)
button3.innerHTML = "Zatwierdź kolor"
button3.style.borderRadius= "5px"
button3.addEventListener("click", function(){
    div.style.background = input1.value
})

const input2 = document.createElement("input")
div.appendChild(input2)

const button4 = document.createElement("button")
div.appendChild(button4)
button4.innerHTML = "Dodaj tekst"

button4.addEventListener("click", function(){
    let paragraf = document.createElement("p")
    paragraf.innerHTML = input2.value
    div.appendChild(paragraf)
})

const input3 = document.createElement("input")
body.appendChild(input3)

const button5 = document.createElement("button")
body.appendChild(button5)
button5.innerHTML = "Dodaj do listy"

const button6 = document.createElement("button")
body.appendChild(button6)
button6.innerHTML = "Usuń listę"

const list = document.createElement("ol")
body.appendChild(list)

button5.addEventListener("click", function(){
    let punkt = document.createElement("li")
    const button7 = document.createElement("button")
    button7.innerHTML = 'Delete'
    button7.addEventListener("click", function(){
        punkt.remove()
        button7.remove()
    })
    punkt.innerHTML = input3.value
    list.appendChild(punkt)
    list.appendChild(button7)
})
button6.addEventListener("click", function(){   
    list.remove()
})