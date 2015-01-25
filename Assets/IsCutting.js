#pragma strict

var isCutting : boolean;

function OnTriggerEnter (){
	isCutting = true;
}

function OnTriggerExit (){
	isCutting = false;
}