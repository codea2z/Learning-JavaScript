/* 
 * Paul Savage 
 * 25 March 2014 
 * My first JavaScript file in Netbeans and using GitHub
 */
function init()
{
    document.getElementById("panel").innerHTML="Hello... from an External JavaScript File!";
    window.alert("Document Loaded!");
}

window.onload = init;

