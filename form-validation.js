function validateForm(event) {
    // Empêche lasoumission du formulaire
    event.preventDefault();
    
    // Validation des champs
    const firstName = document.querySelector('.firstName input[name="firstName"]').value.trim();
    consolelog(firstName);
    const name = document.querrySelector('.name input[name="name"]').value.trim();
    consolelog(name);
    const email = document.querrySelector('.email input[name="email"]').value.trim();
    consolelog(email);
    const password = document;querrySelector('.password input[name="password"]').value.trim()
    consolelog(password);


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

