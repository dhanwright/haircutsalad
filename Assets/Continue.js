#pragma strict

function Start () {

}

function Update () {
	if(Controller.getInput("aButton")){
		Application.LoadLevel("dothedoodoodoo");
		}
	if(Controller.getInput("bButton")){
		Application.LoadLevel("title screen");
		}
}