function showAlert() {
    var alert = document.getElementById("alert");
    alert.style.display = "block";
}
function closeAlert() {
    var alert = document.getElementById("alert");
    alert.style.display = "none";
}
document.adddEventListener("DOMContentLoaded", function() {
    var passInput = document.getElementById("pass");
    var cpassInput = document.getElementById("cpass");

    cpassInput.style.border = "1px solid default";
    var x = cpassInput.style.border

    cpassInput.addEventListener("input", function() {
        var pass = passInput.value;
        var cpass = cpassInput.value;

        if (cpass.trim() === "") {
            cpassInput.style.border = x;
        } else if (pass !== cpass) {
            cpassInput.style.border = "1px solid red";
        } else {
            cpassInput.style.border = "1px solid green";
        }
    });
});