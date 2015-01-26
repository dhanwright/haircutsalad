#pragma strict

function Start () {

}

function Update () {
	if(Controller.getInput("startButton")){
  		Application.LoadLevel ("WinScreen");
  		}
	}
