const Email = document.getElementById('Email');
const password = document.getElementById('password');

function checkEmail(input) {
    const re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
    } else {
        setErrormsg(input, 'Email is not valid');
    }
}

function checkPassword(input) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
        return true;
    } else {
        setErrormsg(input, 'invalid password use Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character');
        return false;

    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            setErrormsg(input, `${getFieldName(input)} is required`);
            return false;
        } else {
            setSuccessMsg(input);
            return true;
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validate(){
    checkEmail(Email);
    checkPassword(password);
    checkRequired([Email,password])
}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) 
    {return false;}
}

function setErrormsg(input, Errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = Errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}
function isFormValid() {
    const inputContainers = form.querySelectorAll(".form-control");
    let result = true;
    inputContainers.forEach((container) => {
      if (container.classList.contains("error")) {
        result = false;
      }
    });
    return result;
  }


// Event listeners
form.addEventListener('submit', function (e) {
    validate();
    if (isFormValid() == true) {
      form.submit();
    } else {
      e.preventDefault();
    }
  });