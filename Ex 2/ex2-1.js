button.addEventListener('click', btnSendMail_Click);
button.onclick = function(){ 
    btnSendMail_Click()
 };
 button.classList.Add("btn", "btn-primary");

function btnSendMail_Click() {
    console.log('Button clicked; email sent');
  }
  
  (function() {
  
    var button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('ID', 'btnSendMail');
    button.setAttribute('value', 'Send Mail');
    button.setAttribute('onclick', 'btnSendMail_Click()');
    button.setAttribute('form', 'myform');
    document.body.appendChild(button);
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("formaction", "javascript: console.log('bye');")
}());
