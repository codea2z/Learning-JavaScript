/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function stringify(argA, argB, argC, argD)
{
    var str = argA + " " + argB + " " + argC + " " + argD + "<br>";
    return str;
}

function init ()
{
    // Statements to be executed go here
    document.getElementById("panel").innerHTML = 
            stringify("JavaScript", "In", "Easy", "Steps");
    document.getElementById("panel").innerHTML += 
            stringify("Written", "by", "Mike", "McGrath");
}

document.addEventListener("DOMContentLoaded", init, false);

