﻿#pragma strict

function OnTriggerEnter(other : Collider) {
    Debug.Log("HAIR! " + other.name);
    if (other.name == "Cylinder R" || other.name == "Arm L Collider" || other.name == "Scissor1 Collider" || other.name == "Scissor2 Collider" || other.name == "Buzzer1 Collider" || other.name == "Buzzer2 Collider" || other.name == "Buzzer3 Collider" || other.name == "Buzzer4 Collider" || other.name == "Buzzer5 Collider" || other.name == "Buzzer6 Collider" || other.name == "Arm R Collider") {
        Debug.Log("FLY!");
        rigidbody.useGravity = true;
        rigidbody.AddRelativeForce(new Vector3(Random.Range(-300,300), Random.Range(100, 300), 0) * 2);
    }
}