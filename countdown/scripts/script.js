var app = angular.module('timer', []);

app.controller('timerController', function($scope) {
    $scope.startTimer = function() {
        document.getElementById('num').focus();
        var num = Number(document.getElementById('num').value);
        var dividend = 100 / num;

        if(document.getElementById('timeUnit').value === 's') {
            document.getElementById('prog').value = 100;
            var secondsTimer = setInterval(function() {
                document.getElementById('prog').value -= dividend;
                console.log(document.getElementById('prog').value);
                if(document.getElementById('prog').value <= 0) {
                    document.getElementById('prog').value = 0;
                    alert('timer is done!');
                    clearInterval(secondsTimer);

                }
            }, 1000);
        }
    }
});
