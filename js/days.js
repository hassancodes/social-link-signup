function daysLeft() {
    const date1 = new Date();
    const date2 = new Date('2026-01-01');
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("days-left").innerHTML = diffDays;
    setTimeout(() => {
        document.getElementById("getting-access").click();
    }, 5000);
}

daysLeft();
