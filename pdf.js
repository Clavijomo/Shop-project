const pdfMobile = document.querySelector('#pdf-mobile');

listener();
function listener () {
    pdfMobile.addEventListener('click', redirect)
}

function redirect() {
    window.location.href = 'https://drive.google.com/file/d/1qcIiPv9eS5tJO7fX7RlCUyBYUIkSspGc/view?usp=share_link';
}