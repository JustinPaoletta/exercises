var checkForAndInsertStorage = function () {
    if(localStorage.getItem('email')) {
        document.getElementById('email').placeholder = '';
        document.getElementById('email').value = localStorage.getItem('email');
    }
};

checkForAndInsertStorage();

document.getElementById('email').addEventListener('keyup', function() {
    localStorage.setItem('email', document.getElementById('email').value);
});

document.getElementById('clear').addEventListener('click', function() {
    localStorage.removeItem('email');
    document.getElementById('email').placeholder = 'Email';
    document.getElementById('email').value = '';
});
