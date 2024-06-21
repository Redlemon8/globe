function validateForm(event) {
    // Empêche lasoumission du formulaire
    event.preventDefault();
    
    // Validation des champs
    const firstName = document.querySelector('.firstName input[name="firstName"]').value.trim();
    console.log(firstName);
    const name = document.querySelector('.name input[name="name"]').value.trim();
    console.log(name);
    const email = document.querySelector('.email input[name="email"]').value.trim();
    console.log(email);
    const password = document.querySelector('.password input[name="password"]').value.trim();
    console.log(password);


    if (firstName === '' || name === '' || email === '' || password === '') {
    alert('Veuillez remplir tout les champs.')
    return;
}

if (!isValidEmail(email)) {
    alert('Adresse email invalide.');
    return;
}

    // Envoi du formulaire
document.getElementById("myForm").submit();

}

function isValidEmail(email) {
    // Expression régulière pour vérifier l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Vérifie si l'adresse e-mail est valide
    return emailRegex.test(email);
}

    // Ecouteur d'événements pour la soumissiondu formulaire
    const form = document.getElementById('myForm');
    form.addEventListener('submit', validateForm);

