#pragma strict

var speed            = 50;
var horizontal_input = "RHorizontal";
var vertical_input   = "RVertical";
var depth_in_input   = "Depth inR";
var depth_out_input  = "Depth outR";
var y_clamp          = new Vector2(-6, 8);
var x_clamp          = new Vector2(9, 21);
var z_clamp          = new Vector2(-4, 1.2);

function Update () {
    // Move left and right
    var horizontal = Controller.getInput(horizontal_input);
    if(Mathf.Abs(horizontal) > 0.9){
        rigidbody.velocity.x = horizontal * speed;
    }

    // Move up and down
    var vertical = Controller.getInput(vertical_input);
    if(Mathf.Abs(vertical) > 0.9){
        rigidbody.velocity.y = vertical * speed;
    }

    // Move in and out
    var depth_out = Controller.getInput(depth_out_input);
    if (depth_out > 0) {
        rigidbody.AddRelativeForce(Vector3.forward * speed * 1000);
    }
    var depth_in = Controller.getInput(depth_in_input);
    if (depth_in) {
        rigidbody.AddRelativeForce(Vector3.back * speed * 1000);
    }

    transform.position.y = Mathf.Clamp(transform.position.y, y_clamp.x, y_clamp.y);
    transform.position.x = Mathf.Clamp(transform.position.x, x_clamp.x, x_clamp.y);
    transform.position.z = Mathf.Clamp(transform.position.z, z_clamp.x, z_clamp.y);
}