/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var global = "This is Worldwide Global news<hr>";

function us(obj)
{
    var local = "***This is United States Local news***<br>";
    obj.innerHTML += local; 
    obj.innerHTML += global;
}

function eu(obj)
{
    var local = "---This is European Local news---<br>";
    obj.innerHTML += local; 
    obj.innerHTML += global;
}

function init()
{
    //Statements to be executed go here
    var obj = document.getElementById("panel");
    obj.innerHTML = global;
    
    us(obj);
    eu(obj);
}

document.addEventListener("DOMContentLoaded", init, false);

