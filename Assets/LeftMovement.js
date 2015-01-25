#pragma strict

function Start () {
	transform.position = Vector3(-14, 1, 0);
}

var speed = 50;

function Update () {

	var horizontal = Controller.lHorizontal;
	if(Mathf.Abs(horizontal) > 0.9){
		rigidbody.velocity.x = horizontal * speed;
	}
	var vertical = Controller.lVertical;
	if(Mathf.Abs(vertical) > 0.9){
		rigidbody.velocity.y = -vertical * speed;
	}
	transform.position.y = Mathf.Clamp(transform.position.y, -6, 8);
	transform.position.x = Mathf.Clamp(transform.position.x, -21, -9);
}