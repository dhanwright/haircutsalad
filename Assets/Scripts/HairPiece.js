#pragma strict

function OnTriggerEnter(other : Collider) {
    Debug.Log("HAIR! " + other.name);
    if (other.name == "Cylinder R" || other.name == "Cylinder L") {
        Debug.Log("FLY!");
        rigidbody.useGravity = true;
        rigidbody.AddRelativeForce(new Vector3(Random.Range(-300,300), Random.Range(100, 300), 0) * 2);
    }
}