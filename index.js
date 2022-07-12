const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const userid = document.getElementById('userid');
const Email = document.getElementById('Email');
const phone = document.getElementById('phone');
const url =document.getElementById('url');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const inputFeild = document.getElementById('inputFeild')

function checkfullname(input) {
    const re = /^\S([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
    // const re = /^([A-Z|0-9][a-z|0-9]+ [A-z][a-z]+ [A-Z][a-z]+)$/;
    //const re = /^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$/
    if (re.test(input.value)) {
        setSuccessMsg(input);
    } else {
        setErrormsg(input, 'Name is not valid ,First letter should be capital');
    }
}

function checkfirstname(input) {
    const re = /^([A-Z|0-9][a-z|0-9]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
    } else {
        setErrormsg(input, 'Name is not valid');
    }
}



function checklastname(input) {
    // const re =/^[A-Z|0-9][a-z|0-9]+ [A-Z|0-9][a-z|0-9]+$/;
    //const re = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
    const re = /^[A-Za-z0-9][A-Za-z0-9]{3,15}$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
    } else {
        setErrormsg(input, 'Name is not valid');
    }
}

function checkuserid(input) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
        return true;
    } else {
        setErrormsg(input, 'invalid userid use Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character');
        return false;

    }
}

function checkEmail(input) {
    const re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
    } else {
        setErrormsg(input, 'Email is not valid');
    }
}

function checkphone(input) {
    const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
        return true;
    } else {
        setErrormsg(input, 'Phone Number is not valid');
        return false;
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

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        setErrormsg(input2, 'Passwords do not match');
    } else if (input2.value == "") {
        setErrormsg(input2, 'Password do not match')
        return false;
    } else {
        setSuccessMsg(input2);
    }
}

function isGenderSelected() {
    var genderMale = document.getElementById("radio1").checked;
    var genderFemale = document.getElementById("radio2").checked;
    var genderOther = document.getElementById("radio3").checked;
    if (genderFemale || genderMale || genderOther) {
        document.getElementById("showGenderError").innerHTML = "";
        return true;
    } else {
        document.getElementById("showGenderError").innerHTML =
            "Please select your gender!";
        document.getElementById("showGenderError").style.color = "tomato";
        return false;
    }
}
function imageValidation() {

    var fileInput = document.getElementById("file");
  
    var filePath = fileInput.value;
  
    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  
    if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type");
      fileInput.value = "";
      return false;
    } else {
      // Image preview
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("imagePreview").innerHTML =
            '<img src="' + e.target.result + '"/>';
        };
  
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
  }

function fileValidation() {

    var fileInput = document.getElementById("docfile");

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions = /(\.xlsx|\.pdf|\.docx|\.csv|\.doc|\.txt)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert("Invalid file type");
        fileInput.value = "";
        return false;
    } else {
        // Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("imagePreview").innerHTML =
                    '<docfile src="' + e.target.result + '"/>';
            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

function checkurl(input){
    const re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (re.test(input.value.trim())) {
        setSuccessMsg(input);
        return true;
    } else {
        setErrormsg(input, 'url is not valid');
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

function validate() {
    checkRequired([fullname, firstname, lastname,userid, Email, phone, password, confirmpassword,url]);
    checkfullname(fullname);
    checkfirstname(firstname);
    checklastname(lastname);
    checkuserid(userid);
    checkEmail(Email);
    checkphone(phone);
    checkPassword(password);
    checkPasswordsMatch(password, confirmpassword);
    isGenderSelected();
    checkurl(url);

}


function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) { return false; }
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