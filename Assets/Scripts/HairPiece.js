#pragma strict

var isCut = false;

function generateBrown(){
	var color = GetComponent(MeshRenderer);
	var g = Random.Range(55, 95);
	color.material.color = new Color32(142, g, 36, 255);
}
function generateBlonde(){
	var color = GetComponent(MeshRenderer);
	var r = Random.Range(144, 184);
	var g = Random.Range(162, 226);
	color.material.color = new Color32(r, g, 36, 255);
}
function generateBlack(){
	var color = GetComponent(MeshRenderer);
	var b = Random.Range(39, 86);
	color.material.color = new Color32(b, b, b, 255);
}

function Start(){
	if(Head.hairColor < 33) {
    	generateBlonde();
    } else if(33 < Head.hairColor && Head.hairColor < 66) {
    	generateBrown();
    } else {
    	generateBlack();
    }
}

function OnTriggerEnter(other : Collider) {

    if (other.name == "Cylinder R" || other.name == "Arm L Collider" || other.name == "Scissor1 Collider" || other.name == "Scissor2 Collider" || other.name == "Buzzer1 Collider" || other.name == "Buzzer2 Collider" || other.name == "Buzzer3 Collider" || other.name == "Buzzer4 Collider" || other.name == "Buzzer5 Collider" || other.name == "Buzzer6 Collider" || other.name == "Arm R Collider") {
        if (isCut == false)
        {
          Head.hairCount--;
        }
        isCut = true;
        collider.enabled = false;
        rigidbody.useGravity = true;
        rigidbody.AddRelativeForce(new Vector3(Random.Range(-300,300), Random.Range(100, 300), 0) * 2);
    }
}


function Update() {
    if (isCut && !renderer.isVisible) {
        Destroy(gameObject);
    }
}