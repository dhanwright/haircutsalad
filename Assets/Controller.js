


static function getInput(request : String)
{
  var platform = {};
  if(Application.platform == RuntimePlatform.WindowsWebPlayer ||
    Application.platform == RuntimePlatform.WindowsPlayer  ||
    Application.platform == RuntimePlatform.WindowsEditor)
  {
    platform = windows;

  }
  else if(Application.platform == RuntimePlatform.OSXWebPlayer  ||
    Application.platform == RuntimePlatform.OSXPlayer  ||
    Application.platform == RuntimePlatform.OSXEditor  ||
    Application.platform == RuntimePlatform.OSXDashboardPlayer)
  {
    platform = mac;
  }
  else if(Application.platform == RuntimePlatform.LinuxPlayer)
  {
    platform = linux;
  }

  if(platform["axis"][request])
    {
      return Input.GetAxis(platform["axis"][request]);
    }
    if(platform["button"][request])
    {
      return Input.GetButton(platform["button"][request]);
    }

}


static var windows = {
  "axis": {
    "lHorizontal" : "AxisX",
    "lVertical" : "AxisY",
    "rHorizontal" :"Axis4",
    "rVertical" : "Axis5",
    "lTrigger" :"Axis9",
    "rTrigger" : "Axis10"
  },
  "button": {
    "aButton" :"Button0",
    "bButton" : "Button1",
    "xButton" : "Button2",
    "yButton" :"Button3",
    "startButton" : "Button7",
    "backButton" : "Button6",
    "lbButton" : "Button4",
    "rbButton" : "Button5",
    "lClick" : "Button8",
    "rClick" : "Button9"
  }
};


static var mac = {
  "axis": {
    "lHorizontal" : "AxisX",
    "lVertical" : "AxisY",
    "rHorizontal" :"Axis3",
    "rVertical" : "Axis4",
    "lTrigger" :"Axis5",
    "rTrigger" : "Axis6"
},
"button": {
    "aButton" :"Butto16",
    "bButton" : "Butto17",
    "xButton" : "Button18",
    "yButton" :"Button19",
    "startButton" : "Button9",
    "backButton" : "Button10",
    "lbButton" : "Button13",
    "rbButton" : "Button14",
    "lClick" : "Button11",
    "rClick" : "Button12"
  }
};

static var linux = {
  "axis": {
    "lHorizontal" : "AxisX",
    "lVertical" : "AxisY",
    "rHorizontal" :"Axis4",
    "rVertical" : "Axis5",
    "lTrigger" :"Axis3",
    "rTrigger" : "Axis6"
  },
  "button": {
    "aButton" :"Button0",
    "bButton" : "Button1",
    "xButton" : "Button2",
    "yButton" :"Button3",
    "startButton" : "Button7",
    "backButton" : "Button6",
    "lbButton" : "Button4",
    "rbButton" : "Button5",
    "lClick" : "Button9",
    "rClick" : "Button10"
  }
};


