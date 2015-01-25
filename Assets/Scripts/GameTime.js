#pragma strict

static var cuttingHair = true;

private var _isCustomerEntering = false;
private var _customerStartTime:float;
private var _customerStartPos:Transform;
private var _customer:GameObject;
private var _startingHairCount:int;

var customerSeatedPos:Transform;
var distanceToSeat:float = 18;

var customerEntranceSpeed = 5.0;


function Start () {
  //newCustomer();
  _customer = GameObject("Head");  //temp
  _startingHairCount = Head.hairCount;

  Debug.Log(Head.hairCount);



}

function Update () {
  if(_isCustomerEntering)
  {
    //customer animates in
    var distanceTraveled = (Time.time - _customerStartTime) * customerEntranceSpeed;
    var percentThere = distanceTraveled/distanceToSeat;
    _customer.transform.position = Vector3.Lerp(_customerStartPos.position, customerSeatedPos.position, percentThere);

    //slide in interface with goal objective for this sick cut as customer enters

    //reds to cut!
    if(_customer.transform.position == customerSeatedPos.position)
    {
      _isCustomerEntering = false;
      startCutting();
    }
  }

}

function newCustomer() {
  _customer = GameObject("Head");
  _isCustomerEntering = true;
  _customerStartTime = Time.time;
  _customerStartPos = customerSeatedPos;
  _customerStartPos.position.y -= distanceToSeat;

  //customer enters screen

  //set haircut request (20-100%)


}

function startCutting() {
  cuttingHair = true;

  //display tooltip to press start to end cut
}