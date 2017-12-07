

function add() {
    const in1 = document.getElementById('id1').value;
    const in2 = document.getElementById('in2').value;
    const tot = Number(in1) + Number(in2);

    document.getElementById('out1').value = tot;
}

module.exports = add;
