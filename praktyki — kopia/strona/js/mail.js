function wyslij_email(){
    const input = document.querySelector('mail')
    
var Aemail = document.getElementById('mail').value;
var Aimie = document.getElementById('imie').value;
    
if (Aemail == null){
    alert("Nic nie wpisałeś")
}
else {

Email.send({
        Host : "smtp.mailtrap.io",
        Username : "7076b35c13fd05",
        Password : "7d834218c1ea14",
        To : "them@website.com",
        From : 'xyz@mail.com',
        Subject : "Pomoc techniczna",
        Body : "Nazywam się " + Aimie + "\n" + "i poproszę o kontakt na " + Aemail + ".\n"
    }).then(
      message => alert(message)
    );
}
}