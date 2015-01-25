#pragma strict

function FixedUpdate () {
	var playerObject = GameObject.Find("Head");
	var contact = playerObject.GetComponent.<BuzzCheck>();
	if (contact.isBuzzing == true){
		var newPosition : Vector2 = Random.insideUnitCircle * .3;
		transform.position.x = newPosition.x;
		transform.position.y = 1 + newPosition.y;
		};
};