#pragma strict

function Start () {

}
var speed = 3;

function Update () {
	var horizontal = Input.GetAxis("LHorizontal");
	if(Mathf.Abs(horizontal) > 0.9){
		rigidbody2D.velocity.x = horizontal * speed;
	}
	var vertical = Input.GetAxis("LVertical");
	if(Mathf.Abs(vertical) > 0.9){
		rigidbody2D.velocity.y = vertical * speed;
	}
	}
