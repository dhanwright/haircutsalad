#pragma strict

function FixedUpdate () {
	if (BuzzCheck.isBuzzing){
        var newPosition : Vector2 = Random.insideUnitCircle * .3;
        transform.position.x = newPosition.x;
        transform.position.y = 1 + newPosition.y;
    };
};