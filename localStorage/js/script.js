var checkForAndInsertStorage = function () {
    if(localStorage.getItem('email')) {
        document.getElementById('email').placeholder = '';
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('clear').style.display = 'inline';
    }
};

checkForAndInsertStorage();



document.getElementById('email').addEventListener('keyup', function() {
    localStorage.setItem('email', document.getElementById('email').value);
    if(document.getElementById('email').value.length > 0) {
        document.getElementById('clear').style.display = 'inline';
    } else {
        document.getElementById('clear').style.display = 'none';
    }
});

document.getElementById('clear').addEventListener('click', function() {
    localStorage.removeItem('email');
    document.getElementById('email').value = '';
    document.getElementById('email').placeholder = 'Email';
    window.location.reload()
});
