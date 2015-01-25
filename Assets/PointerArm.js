#pragma strict

function Start () {
	transform.position = Vector3(0,0,-5.5);

}
var speed = 3;
var y_clamp          = new Vector2(-3, 3);
var x_clamp          = new Vector2(-8.5, 8.5);



function Update () {
	var horizontal = Input.GetAxis("LHorizontal");
	if(Mathf.Abs(horizontal) > 0.9){
		rigidbody2D.velocity.x = horizontal * speed;
	}
	
	var vertical = Input.GetAxis("LVertical");
	if(Mathf.Abs(vertical) > 0.9){
		rigidbody2D.velocity.y = vertical * speed;
	}
	transform.position.y = Mathf.Clamp(transform.position.y, y_clamp.x, y_clamp.y);
    transform.position.x = Mathf.Clamp(transform.position.x, x_clamp.x, x_clamp.y);
}
