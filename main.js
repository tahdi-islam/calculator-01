function DeleteMe(){
    document.getElementById("myResult").value = "";
}
function calculator(NewValue) {
    document.getElementById("myResult").value += NewValue;
}
function answer() {
    var a = document.getElementById("myResult").value;
    var b = eval(a);
    document.getElementById("myResult").value = b
}
