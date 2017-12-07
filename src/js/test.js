const calculator = {
    add: function () {
        var add1 = document.getElementById('add1').value;
        var add2 = document.getElementById('add2').value;
        var sum = Number(add1) + Number(add2);
        document.getElementById('AddResult').value = sum;
    },
    minus: function () {

    },
};


module.exports = calculator;