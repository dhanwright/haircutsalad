#pragma strict

function Start () {

}

function Update () {
	var horizontal = Input.GetAxis("Horizontal");
	if(Mathf.Abs(horizontal) > 0.9){
		rigidbody.velocity.x = horizontal * 15;
	}
	var vertical = Input.GetAxis("Vertical");
	if(Mathf.Abs(vertical) > 0.9){
		rigidbody.velocity.y = vertical * 15;
	}
}