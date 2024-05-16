function fn()
{
    var un = document.getElementById("uname");
    var ps = document.getElementById("pass");

    if(un.value.trim()=="" && ps.value.trim()=="")
    {
        document.getElementById("unameh6").innerHTML="Username Required";
        document.getElementById("passh6").innerHTML="Password Required";
        un.style.border="1px solid red";
        ps.style.border="1px solid red";
        return false;


        //alert("Username and Password Required");
    }
    else if(ps.value.trim()=="")
    {
        document.getElementById("passh6").innerHTML="Password is required";
        //alert("Password is Required");
        ps.style.border="1px solid red";

        return false;
    }
    else if(un.value.trim()=="")
    {
        document.getElementById("unameh6").innerHTML="Username is required";
        //alert("Username is Required");
        un.style.border="1px solid red";

        return false;
    }
    else if(un.value.trim()=="manish" && ps.value.trim()=="vishwakarma")
    {
       // document.getElementById("btnh6").innerHTML="Username and Password is matching";
        alert("Username and Password is Matching");
        return true;
    }
    else if(un.value.trim()=="virat" && ps.value.trim()=="kohli")
    {
        //document.getElementById("btnh6").innerHTML="Username and Password is matching";
        
        alert("Username and Password is Matching");
        return true;
    }
    else{
        document.getElementById("btnh6").innerHTML="Username and Password is not matching";

        //alert("Username and Password Not Matching");
        un.style.border="1px solid red";
        ps.style.border="1px solid red";
        document.getElementById("btn").style.display="none";

        return false;
    }
}