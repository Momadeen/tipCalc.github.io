
function calculateTip(){
    var billAm, rate, peopleSh, totalTip, tip;
    billAm = document.getElementById("billAm").value;
    rate = document.getElementById("rate").value;
    peopleSh = document.getElementById("peopleSh").value;
    calcBtn = document.getElementById("calcBtn");
    totalTip = document.getElementById("totalTip");
    tip = document.getElementById("tip");


    // validate input 
    if(billAm === "" || rate == 0) {
        alert("Please enter values");
        return;
    }

    // check if people sharing less than 1
    if(peopleSh === "") {
        alert("If you only sharing bill type 1");
    }

    // Calculate a bill
    var total = (billAm * rate) / peopleSh;

    // round to two decimal places
    total = Math.round(total * 100) / 100;

    // to get 2 numbers after decimal point;
    total = total.toFixed(2);

    // display tip
    $(document).ready(function(){
        $("#totalTip").fadeIn().find($(".result")).addClass("re-ani");
        totalTip.style.display = "block";
        tip.innerHTML = total;
    });


};

// when click on btn fire function

calcBtn.onclick = function(){
    calculateTip();
}

$(document).ready(function(){
    $("i.fa-times").on("click", function(){
        totalTip.style.display = "none";
    });
});

