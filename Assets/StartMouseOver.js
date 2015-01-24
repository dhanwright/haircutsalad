#pragma strict

var newSprite : GameObject;
var currentSpritePosition : Vector3;

function OnMouseEnter(){

  //getting the current position of the current sprite if ever it can move;
  var currentSpritePosition = transform.position;

  //then make it invisible
  renderer.enabled = false;

  //give the new sprite the position of the latter
  newSprite.transform.position = currentSpritePosition;

  //then make it visible
  newSprite.renderer.enabled = true;
}

function OnMouseExit(){
  //just the reverse process
  renderer.enabled = true;
  newSprite.renderer.enabled = false;
}