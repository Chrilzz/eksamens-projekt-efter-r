// laver en eventlistener som loader hele siden og tjekker om brugeren på side findes i local storage
// If tjekker om der er et obejkt, ved navn nykonto i localstorage
// Else relokerer til logind siden.
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault
    const nykonto = localStorage.getItem("nykonto")
if (nykonto){
    window.alert("Velkommen ukendte bruger")
} else {window.alert("Du er ikke logget ind"), location.href = "/logind.html"}

}
)