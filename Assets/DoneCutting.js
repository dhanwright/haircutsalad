#pragma strict

function Start () {

}

function Update () {
	if(Controller.getInput("startButton")){
    Debug.Log(Head.hairCount + "/" + Head.startHairCount);
  		Application.LoadLevel ("WinScreen");
  		}
	}
