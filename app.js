let hesap = document.querySelector(".tustakimi");
let alt = document.querySelector(".altekran");
let ust = document.querySelector(".ustekran");

hesap.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")) {
        alt.innerHTML += e.target.innerHTML;
    } else if (e.target.classList.contains("islem")) {
        ust.innerHTML = alt.innerHTML + " " +  e.target.innerHTML;
        alt.innerHTML ="";
    } else if (e.target.classList.contains("AC")) {
        alt.innerHTML ="";
        ust.innerHTML ="";
    } else if (e.target.classList.contains("durum")) {
        alt.innerHTML = -alt.innerHTML;
    } else if (e.target.classList.contains("yuzde")) {
        alt.innerHTML = ust.innerHTML.slice(0, -2) * alt.innerHTML / 100;
        ust.innerHTML ="";
    } else if (e.target.classList.contains("esittir")) {
        Sonuc();
        ust.innerHTML =""
    }
});

const Sonuc = () => {
    if (ust.innerHTML.slice(-1) == "÷") {
    //    console.log(ust.innerHTML.slice(0, -2))
        alt.innerHTML = ((ust.innerHTML.slice(0, -2)) / alt.innerHTML).toFixed(2);
    } else if (ust.innerHTML.slice(-1) == "x") {
        alt.innerHTML = ((ust.innerHTML.slice(0, -2)) * alt.innerHTML);
    } else if (ust.innerHTML.slice(-1) == "-") {
        alt.innerHTML = ((ust.innerHTML.slice(0, -2)) - alt.innerHTML);
    } else if (ust.innerHTML.slice(-1) == "+") {
        alt.innerHTML = (Number(ust.innerHTML.slice(0, -2)) + Number(alt.innerHTML));
}}