function Validate(){
    var nameValue = document.getElementById("fName").value;
    var namePattern = /^([A-Z][a-z]+(-[A-Z])?[a-z]+)$/;
    
    var surnameValue = document.getElementById('fSurname').value;
    var surnamePattern = /^([A-Z][a-z]+)$/;
    
    var nicknameValue = document.getElementById('fNickname').value;
    
    var emailValue = document.getElementById('fEmail').value;
    var emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
    var currentDivisionValue = document.getElementById('fCurrentDivision').value;
    var desiredDivisionValue = document.getElementById('fDesiredDivision').value;
    
    var deadlineDay = new Date(document.getElementById("fDeadline").value);
    var today = new Date();

    if (!namePattern.test(nameValue || nameValue.length<3)) {
    
        alert("The name is not valid, darling!");

        return false;
    }

    if(!surnamePattern.test(surnameValue || surnameValue.length<3)){
    
        alert("The surname is not valid, darling!");

        return false;
    }

    if(!emailPattern.test(emailValue)){

        alert("I expect valid email, darling!")
        
        return false;
    }

    if(currentDivisionValue==desiredDivisionValue){

        alert("Choose division to be coached to different from the current one, darling!")

        return false;
    }

    if(deadlineDay.getTime() < today.getTime()){

        alert("I don't have time machine and i can't finish the coach today!")

        return false;
    }

    return true;
}


// Sticky


// window.onscroll = function() {sticky()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function sticky() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }