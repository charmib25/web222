function validateForm() {
    var postalCode = document.getElementById("postalCode").value;
    console.log(postalCode);
    if (/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(postalCode)) {
        var fields = ["name", "address", "postalCode", "email", "city", "option"];
        if (document.getElementById("hRate").style.display === "block") {
            var fields = ["name", "address", "postalCode", "email", "city", "option", "rate"];
        }

        var i, l = fields.length;
        var fieldname;
        for (i = 0; i < l; i++) {
            fieldname = fields[i];
            if (document.forms["contactForm"][fieldname].value === "") {
                alert(fieldname + " can not be empty");
                return false;
            }
        }
        return true;        
    }else{
        alert("Please Enter Valid Postal Code");
        return false;
    }
        
}

document.getElementById("hiring").onclick = function () {
    document.getElementById("hRate").style.display = "block";
}
document.getElementById("question").onclick = function () {
    document.getElementById("hRate").style.display = "none";
}
document.getElementById("comment").onclick = function () {
    document.getElementById("hRate").style.display = "none";
}    