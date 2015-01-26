#pragma strict

var speed:int = 1;

function Start () {
  Head.goalHair = Random.Range(20,101);
  var thing = GameObject.Find("Goal").GetComponent(UI.Text);
  thing.text = "Oh Hello.  I'd like "+ Head.goalHair + "% of my hair cut off.";

      Debug.Log(thing.text);

}

function Update () {



}