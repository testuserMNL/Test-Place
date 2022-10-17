const scriptURL = 'https://script.google.com/macros/s/AKfycbxMp8EKDCGY4QOLlTTca1jD-zEPLhZrKmkFkk_MOqN3qV0o-_jHv-OMDWR5mvQTUNPEbw/exec'
const form = document.forms['Email Subscribers']

const btnsend = document.querySelector('.btnsend');
const btnload = document.querySelector('.btn-loading');
const Alert = document.querySelector('.alerting');

form.addEventListener('submit', e => {
    e.preventDefault();
    btnload.classList.toggle('d-none');
    btnsend.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        btnload.classList.toggle('d-none');
        btnsend.classList.toggle('d-none');
        Alert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
})