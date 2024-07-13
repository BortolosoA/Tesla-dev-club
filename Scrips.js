var forms = document.getElementById("forms")

function show(){ 
    forms.style.visibility = "visible";
    document.body.style.overflow = "hidden";
}

function hide() {
    forms.style.visibility = "hidden";
    document.body.style.overflow = "auto";
}