#pragma strict

  static var lHorizontal : float;
  static var lVertical : float;
  static var rHorizontal : float;
  static var rVertical : float;
  static var dHorizontal : float;
  static var dVertical : float;
  static var lTrigger : float;
  static var rTrigger : float;
  static var aButton : boolean;
  static var bButton : boolean;
  static var xButton : boolean;
  static var yButton : boolean;
  static var startButton : boolean;
  static var backButton : boolean;
  static var lbButton : boolean;
  static var rbButton : boolean;
  static var lClick : boolean;
  static var rClick : boolean;

function Start () {

}

function Update () {
  if(Application.platform == RuntimePlatform.WindowsWebPlayer  ||
    Application.platform == RuntimePlatform.WindowsPlayer  ||
    Application.platform == RuntimePlatform.WindowsEditor)
  {
    lHorizontal = Input.GetAxis("AxisX");
    lVertical = Input.GetAxis("AxisY");
    rHorizontal = Input.GetAxis("Axis4");
    rVertical = Input.GetAxis("Axis5");
    //dHorizontal = Input.GetAxis("AxisX");
    //dVertical = Input.GetAxis("AxisX");
    lTrigger = Input.GetAxis("Axis9");
    rTrigger = Input.GetAxis("Axis10");

    aButton = Input.GetButton("Button0");
    bButton = Input.GetButton("Button1");
    xButton = Input.GetButton("Button2");
    yButton = Input.GetButton("Button3");
    startButton = Input.GetButton("Button7");
    backButton = Input.GetButton("Button6");
    lbButton = Input.GetButton("Button4");
    rbButton = Input.GetButton("Button5");
    lClick = Input.GetButton("Button8");
    rClick = Input.GetButton("Button9");

  }
  else if(Application.platform == RuntimePlatform.OSXWebPlayer  ||
    Application.platform == RuntimePlatform.OSXPlayer  ||
    Application.platform == RuntimePlatform.OSXEditor  ||
    Application.platform == RuntimePlatform.OSXDashboardPlayer)
  {
    lHorizontal = Input.GetAxis("AxisX");
    lVertical = Input.GetAxis("AxisY");
    rHorizontal = Input.GetAxis("Axis3");
    rVertical = Input.GetAxis("Axis4");
    //dHorizontal = Input.GetAxis("AxisX");
    //dVertical = Input.GetAxis("AxisX");
    lTrigger = Input.GetAxis("Axis5");
    rTrigger = Input.GetAxis("Axis6");

    aButton = Input.GetButton("Button16");
    bButton = Input.GetButton("Button17");
    xButton = Input.GetButton("Button18");
    yButton = Input.GetButton("Button19");
    startButton = Input.GetButton("Button9");
    backButton = Input.GetButton("Button10");
    lbButton = Input.GetButton("Button13");
    rbButton = Input.GetButton("Button14");
    lClick = Input.GetButton("Button11");
    rClick = Input.GetButton("Button12");

  }
  else if(Application.platform == RuntimePlatform.LinuxPlayer)
  {
    lHorizontal = Input.GetAxis("AxisX");
    lVertical = Input.GetAxis("AxisY");
    rHorizontal = Input.GetAxis("Axis4");
    rVertical = Input.GetAxis("Axis5");
    //dHorizontal = Input.GetAxis("AxisX");
    //dVertical = Input.GetAxis("AxisX");
    lTrigger = Input.GetAxis("Axis3");
    rTrigger = Input.GetAxis("Axis6");

    aButton = Input.GetButton("Button0");
    bButton = Input.GetButton("Button1");
    xButton = Input.GetButton("Button2");
    yButton = Input.GetButton("Button3");
    startButton = Input.GetButton("Button7");
    backButton = Input.GetButton("Button6");
    lbButton = Input.GetButton("Button4");
    rbButton = Input.GetButton("Button5");
    lClick = Input.GetButton("Button9");
    rClick = Input.GetButton("Button10");

  }
  else
  {
    throw new System.Exception("Unsupported Platform, guy.");
  }

}