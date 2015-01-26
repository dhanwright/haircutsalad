#pragma strict

function Start () {
	print (Application.loadedLevelName);
}

function Update () {
	if(Controller.getInput("startButton")){
  		Application.LoadLevel ("WinScreen");
  		}
	}
