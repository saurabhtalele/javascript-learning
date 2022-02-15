/* j is button obj will listen click event */
var add = document.getElementById("j");
console.log("hi");

let list = [];
add.addEventListener("click", myfunc);
function myfunc() {
    var num11 = document.getElementById("1num").value;
    var num22 = document.getElementById("2num").value;

    var num1 = Number(num11);
    var num2 = Number(num22);

    var total = document.getElementById("total");

    var c = num1 + num2;
    total.innerHTML = c;
    list.push(num1, num2, c);
    console.log(list);
};

/*To save list ob things */
var savee = document.getElementById("k");

savee.addEventListener("click", listt);
var liskt = document.getElementById("lisst");
function listt() {
    let listitem = "";

    for (let i = 0; i < list.length; i++) {

        listitem += "<li>" + list[i] + "</li>";


    }
    liskt.innerHTML = listitem;
}