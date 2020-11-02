function openPop(){
    var newWin = window.open("/popup.html","","width=400px, height=600px")
    if(newWin == null) {
        alert("Nope");
    }
}

window.onload = openPop;