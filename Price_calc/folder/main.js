
const arr = new Array();

var tbody = document.querySelector("tbody");

var count = 0;

var len;

function enter() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var tovar = document.getElementById("tovar").value;
  
  if (tovar === "") {
    alert("Напиши товар!");
    //window.location.href = "index.html";
  } else if (isNaN(n1) === true) {
    alert("Напиши цену!");
    //window.location.href = "index.html";
  } else if (isNaN(n2) === true) {
    alert("Напиши сколько штук");
  } else {
    arr.push(n1 * n2);
    table(tovar, n1, n2);
    len = arr.length;
  }
}

function table(tovar, n1, n2) {
  var tr = document.createElement("tr");
  tr.innerHTML =
    "<td>" + tovar + "</td>" + "<td>" + n2 + "</td>" + "<td>" + n1 + "</td>";
  tbody.appendChild(tr);
  count=count+1;
}


var butt = document.getElementById("la");
butt.addEventListener("click", function () {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  document.getElementById("sum").value = sum;
});

function del() {
  var sum = 0;
  len = len - 1;
  arr[len] = 0;
  
  for(var i = 0;i<arr.length;i++) {
    sum += arr[i];
    document.getElementById("sum").value = sum;
  }
  
if(sum == 0) {
  alert("empty basket");
}
tbody.deleteRow(count-1);
count=count-1;
}
