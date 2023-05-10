let inp  = document.querySelector(".text")
let a = document.querySelector(".btn1")
let b = document.querySelector(".btn2")
let c = document.querySelector(".btn3")
let d = document.querySelector(".btn4")
let e = document.querySelector(".btn5")
let h2= document.querySelector(".text_select") 


a.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toUpperCase()
}

c.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toLowerCase()
}
b.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = `${inpvalue.charAt(0).toUpperCase()}${inpvalue.slice(1)}`
}
e.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.italics()

}
d.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.bold()
}
f.onclick = () => {
    let inpvalue = inp.value
    h2.style.textDecoration = "underline";
    h2.innerHTML = inpvalue.toUpperCase()
}