let ethanage = document.getElementById('ethanage');

let today = new Date();

let age = today.getFullYear() - 1994;

if(today.getMonth() < 10) {
    age--;
} else {
    if(today.getMonth == 10 && today.getDate() < 4) {
        age--;
    } 
}

ethanage.innerText = age;