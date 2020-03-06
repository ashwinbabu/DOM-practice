var userName = document.createElement("input"); // Creates an <input> element
userName.type = 'username';                         // Setting the <input> type to text box. 
userName.pattern=".+@globex.com";
userName.id='un';                       // Setting the name of the <input> to 'username'
userName.placeholder='username';                // Setting the placeholder of the <input> to 'username'
document.body.appendChild(userName);            // Adding the <input> tag to the body of the html

var password = document.createElement("input"); // Creates an <input> element
password.type = 'text';                         // Setting the <input> type to text box. 
password.id='pss';                              // Setting the name of the <input> to 'password'
password.placeholder='password';                // Setting the placeholder of the <input> to 'password'
document.body.append(password);                 // Adding the <input> tag to the body of the html

var button = document.createElement("button");  // Creating a button 
button.innerText='Submit';                      // Making the button name to Submit
document.body.appendChild(button);              // Adding the button to the html body
 
var mailFormat = /\w+@\w+\.(\w{2,3})$/g;                    // this is called a regular expression. You can google JS regular express for email in google
var passFormat = /[a-zA-Z\d@$!%*#?&]{7,}[@$!%*#?&]$/g;     // Creating a regular expression for password

button.onclick = function(){  // this function is executed when the button is clicked.
    if(userName.value == '' || password.value ==  '')   // Checking if the username and password is empty
        {
            alert("Field cannot be empty");
        }
    else if (userName.value.match(mailFormat) && password.value.match(passFormat))  // if the fields match then this block is executed
    {
        alert("WELCOMEEEEEE");
    }
    else {
        alert("Re-enter username and password");
    }
}

