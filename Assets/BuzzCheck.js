#pragma strict

var isBuzzing = false;

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "Arm_Buzzer" || col.gameObject.name == "Buzzer1 Collider" || col.gameObject.name == "Buzzer2 Collider" || col.gameObject.name == "Buzzer3 Collider" || col.gameObject.name == "Buzzer4 Collider" || col.gameObject.name == "Buzzer5 Collider" || col.gameObject.name == "Buzzer6 Collider")
    {
        isBuzzing = true;
    }
}
function OnCollisionExit(){
	isBuzzing = false;
}