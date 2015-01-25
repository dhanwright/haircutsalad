#pragma strict

static var hairCount:int;
static var startHairCount:int;

function Start () {
   
    var rand = Random.Range(0,100);

    if (rand < 50) {
        generateMohawk();
    } else {
        generateFlatTop();
    }

}

function Update () {

}

var hairPiece : HairPiece;

function generateFlatTop() {
    var numberOfObjects = 22;
    var radius_start = 1.7;
    var radius_increment = hairPiece.transform.lossyScale.y;
    var y_start = 3.4;
    var y_end = 6;
    var y_increment = (hairPiece.transform.lossyScale.y*0.8);

    var numberOfHairs:int = 0;

    for (var y = y_start; y < y_end; y += y_increment) {
        for (var radius = radius_start; radius > 0; radius -= radius_increment) {
            var no = numberOfObjects*radius;
            for (var i = 0; i < no; i++) {
                var angle = i * Mathf.PI * 2 / no;
                var pos = Vector3 (Mathf.Cos(angle), 0, Mathf.Sin(angle)) * radius;
                var hp = Instantiate(hairPiece);

                hp.transform.parent = transform;
                hp.transform.position = pos;
                hp.transform.position.y = y;
                numberOfHairs++;
            }
        }
    }
    setCounts(numberOfHairs);
}

function generateMohawk() {
    var numberOfLayers = 4;
    var radius_start = 4;
    var radius_increment = hairPiece.transform.lossyScale.x;

    var numberOfObjects = 15;
    var angle_start = Mathf.PI / 6;
    var angle_end   = (5*Mathf.PI) / 6;
    var angle_increment = getIncrement(angle_start, angle_end, numberOfObjects);

    var numberOfHairs:int = 0;

    for (var layer = 1; layer <= numberOfLayers; layer++) {
        var radius = (layer * radius_increment) + radius_start;

        for (var x = -3; x <= 3; x++) {
            for (var angle = angle_start; angle <= angle_end; angle += angle_increment) {
                var adjusted_angle = angle - Mathf.PI/2;
                var pos = Vector3(0, Mathf.Cos(adjusted_angle), Mathf.Sin(adjusted_angle)) * radius;
                var hp = Instantiate(hairPiece);

                hp.transform.parent = transform;
                hp.transform.position = pos;
                hp.transform.position.x = x * hp.transform.lossyScale.x;
                numberOfHairs++;
            }
        }
    }
    setCounts(numberOfHairs);
}

function getIncrement(start : float, end : float, number_of_increments : float) {
    return (end - start) / number_of_increments;
}

function setCounts(hairs:int) {
    Head.hairCount = hairs;
    Head.startHairCount = hairs;
}