document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault
    const nykonto = localStorage.getItem("nykonto")
if (nykonto){
    window.alert("Velkommen ukendte bruger")
} else {window.alert("Du er ikke logget ind"), location.href = "/logind.html"}

}
)