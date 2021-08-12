function addValue(){
    // get the operands value
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 + val2;
    var s1 = val1.toString();
    var s2 = val2.toString();
    var s3 = result.toString();

    var str = [ s1 , "+" , s2 , "=" , s3];
    var textarea = document.getElementById("calculationplace");
    textarea.value = str.join(" ");
}

function multiplyValue(){
    // get the operands value
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 * val2;
    var s1 = val1.toString();
    var s2 = val2.toString();
    var s3 = result.toString();

    var str = [ s1 , "x" , s2 , "=" , s3];
    var textarea = document.getElementById("calculationplace");
    textarea.value = str.join(" ");

}

function divideValue(){
    // get the operands value
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 / val2;
    var s1 = val1.toString();
    var s2 = val2.toString();
    var s3 = result.toString();

    var str = [ s1 , ":" , s2 , "=" , s3];
    var textarea = document.getElementById("calculationplace");
    textarea.value = str.join(" ");
}



