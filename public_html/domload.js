/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function loaded()
{
    window.alert("Window Loaded");
}

function init()
{
    document.getElementById("panel").innerHTML = "Page Initialized";
    window.alert("DOM Loaded");
}

window.onload = loaded;
document.addEventListener("DOMContentLoaded", init, false);

