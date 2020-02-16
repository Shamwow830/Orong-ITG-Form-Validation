function form(){
    let eType = document.getElementById("event").value;
    let eTitle = document.getElementById("title").value;
    let eDate1 = document.getElementById("date1").value;
    let eDate2 = document.getElementById("date2").value;
    let ePDate = document.getElementById("pdate").value;

    if (eType == "" || eTitle == "") {
        alert("Fill up necessary details");
        return false;
    }

    else if (eDate1 == "" || eDate2 == "" || ePDate == ""){
        alert("Pick necessary dates")
        return false;
    }

    else if (eDate1 > eDate2){
        alert("Start date should be before the end date")
        return false;
    }

    else if (ePDate > eDate1) {
        alert("Posting Date should be before the start date")
        return false;
    }

    else{
        alert("Event Form was saved")
    }
}