function validateFirstName(){
    var fname = document.getElementById("firstName").value;
    var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

    if(re1.test(fname)){
        document.getElementById("firstNamePrompt").style.color="green";
        document.getElementById("firstNamePrompt").innerHTML="<strong>Valid</strong>";
        return true;
    }
    else{
        document.getElementById("firstNamePrompt").style.color="red";
        document.getElementById("firstNamePrompt").innerHTML="<strong>Enter 2-15 characters</strong>";
        return false;
    }
}
function validateLastName(){
    var lname = document.getElementById("lastName").value;
    var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;

    if(re2.test(lname)){
        document.getElementById("lastNamePrompt").style.color="green";
        document.getElementById("lastNamePrompt").innerHTML="<strong>Valid</strong>";
        return true;
    }
    else{
        document.getElementById("lastNamePrompt").style.color="red";
        document.getElementById("lastNamePrompt").innerHTML="<strong>Enter 2-25 characters</strong>";
        return false;
    }
}
function validatePhone(){
    var phone = document.getElementById("phone").value;
    var re3 = /^\d{4}-\d{4}$/;

    if(re3.test(phone)){
        document.getElementById("phonePrompt").style.color="green";
        document.getElementById("phonePrompt").innerHTML="<strong>Valid</strong>";
        return true;
    }
    else{
        document.getElementById("phonePrompt").style.color="red";
        document.getElementById("phonePrompt").innerHTML="<strong>Use xxxx-xxxx format.</strong>";
        return false;
    }
}
function calc(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    // var book1 = undefined
    document.getElementById("radio1").value;
    // var book2 = undefined
    document.getElementById("radio2").value;
    var price = document.getElementById("price").value;

    document.getElementById("orderConfirm").innerHTML = "<h2>Order Summary:</h2>";
    document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toUpperCase() + "</br>" + phone + "</p>";
    // if(book1 != null)
    //     document.getElementById("orderConfirm").innerHTML += "<p>Enchanted</p>";
    // if(book2 != null)
    //     document.getElementById("orderConfirm").innerHTML += "<p>Sadness Curse</p>";
    document.getElementById("orderConfirm").innerHTML += "<p>Order Total: $" + price*quantity + "</p>";
}