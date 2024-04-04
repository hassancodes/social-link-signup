
function daysLeft(){
    const date1 = new Date();
    const date2 = new Date('6/01/2024');
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    document.getElementById("days-left").innerHTML = diffDays;
    setTimeout(function() {
        document.getElementById("getting-access").click();
      }, 5000);
}

daysLeft();