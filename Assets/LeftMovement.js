#pragma strict

function Start () {
	transform.position = Vector3(-14, 1, 0);
}

var speed = 50;
var r = GetComponent(Rigidbody2D);

function Update () {

	var horizontal = Input.GetAxis("LHorizontal");
	if(Mathf.Abs(horizontal) > 0.99){
		r.velocity.x = horizontal * speed;
	}
	var vertical = Input.GetAxis("LVertical");
	if(Mathf.Abs(vertical) > 0.99){
		r.velocity.y = vertical * speed;
	}
	transform.position.y = Mathf.Clamp(transform.position.y, -6, 8);
	transform.position.x = Mathf.Clamp(transform.position.x, -21, -9);
}