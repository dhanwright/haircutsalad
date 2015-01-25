#pragma strict

static var hairCount:int;
static var startHairCount:int;

function Start () {
    hairCount = 0;
    generateFlatTop();
}

function Update () {

}

var hairPiece : HairPiece;

function generateFlatTop() {
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