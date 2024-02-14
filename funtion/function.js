function get_result(){

        //alert("welcome to codes with pankaj")

        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;

        result = +num1 + +num2;
        

        // alert(result);

        document.getElementById("result").innerHTML = result;

}