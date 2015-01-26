#pragma strict

function Start () {
      Debug.Log(Head.hairCount + "/" + Head.startHairCount);
      Debug.Log(100 - 100*Head.hairCount/(1+Head.startHairCount)+"%");

      var thing = GameObject.Find("Scorebox").GetComponent(UI.Text);
      thing.text = "Haircut: " + (100 - 100*Head.hairCount/(1+Head.startHairCount))+"%\n" +
        "Goal: " + Head.goalHair+"%";

      Debug.Log(thing.text);



}

function Update () {

}