function check() {
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;

    if (/^[a-zA-Z]+$/.test(username)) {
        alert("Valid username");
    } else {
        alert("Only letters allowed!");
    }

    if (isNaN(age) || age == "") {
        alert("Only numbers allowed!");
    } else {
        alert("Valid age");
    }
}