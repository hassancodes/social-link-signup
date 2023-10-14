
function daysLeft(){
    alert("Hekii");
    const date1 = new Date();
    const date2 = new Date('11/23/2023');
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    document.getElementById("days-left").innerHTML = diffDays;
}

daysLeft();