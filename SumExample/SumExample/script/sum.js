function addValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 + val2;
    document.getElementById("sumplace").value = result;
}