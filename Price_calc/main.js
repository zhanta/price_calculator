
const arr = new Array();

var tbody = document.querySelector('tbody');

function enter() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var tovar = document.getElementById('tovar').value;
    //document.getElementById('result1').value = tovar;
    //document.getElementById('result').value =  n1*n2;
    
    arr.push(n1*n2); 

    table(tovar,n1,n2);

}

function table(tovar,n1,n2) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + tovar + '</td>' +
                       '<td>' + n2 + '</td>' +
                       '<td>' + n1 + '</td>';
        tbody.appendChild(tr);
}

 // СУММА ВСЕХ ЧИСЕЛ
var butt = document.getElementById('la');
butt.addEventListener("click", function() {
    var sum = 0;
    for(var i = 0;i<arr.length;i++) {
        sum +=arr[i];
    }
    document.getElementById('sum').value = sum;
});

