function copyFunction(){
    var checkBox = document.getElementById("same").checked;

    
    if(checkBox == true){
    var info1 = document.getElementById("shippName").value;
    var info2 = document.getElementById("shippZip").value;

    document.getElementById("billing").value = info1;
    document.getElementById("Zip").value = info2;
    }

    if(checkBox == false){
    document.getElementById("billing").value = " ";
    document.getElementById("Zip").value = " ";
    }

}