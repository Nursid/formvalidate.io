const passClass = document.getElementsByClassName('password-check');
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
var flag = 1;
function toggle(data) {
    const UpperCase = new RegExp('(?=.*?[A-Z])');
    const LowerCase = new RegExp('(?=.*?[a-z])');
    const symbol = new RegExp('(?=.*?[#?!@$%^&*-])');
    const eightcharater = new RegExp('.{8,}');
    if (eightcharater.test(data)) {
        passClass[0].style.color = "green";
        flag=1;
    } else {
        passClass[0].style.color = "gray";
        flag=0;
    }
    if (LowerCase.test(data)) {
        passClass[1].style.color = "green";
        flag=1;
    } else {
        passClass[1].style.color = "gray";
        flag=0;
    }
    if (UpperCase.test(data)) {
        passClass[2].style.color = "green";
        flag=1;
    } else {
        passClass[2].style.color = "gray";
        flag=0;
    }
    if (symbol.test(data)) {
        passClass[3].style.color = "green";
        flag=1;
    } else {
        passClass[3].style.color = "gray";
        flag=0;
    }
}
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});
function check(elem) {
    // var password = document.getElementById('password');
    if (elem.value.length > 0) {
        if (elem.value != password.value) {
            document.getElementById('error').innerText = "Confirm password does not match";
            flag = 0;
        }
        else {
            document.getElementById('error').innerText = "";
            flag = 1;
        }
    }
    else {
        document.getElementById('error').innerText = "Please Enter confirm password";
        flag = 0;
    }
}
function sub() {
    if (flag === 1) {
        return true;
    }
    else {
        return false;
    }
}