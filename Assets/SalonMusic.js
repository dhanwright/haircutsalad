#pragma strict


function Start () {
	DontDestroyOnLoad(transform.gameObject);
}

function Update () {
	var audio = GetComponent(AudioSource);
	if(Application.loadedLevelName == "WinScreen"){
		audio.Stop();
		}
	if(Application.loadedLevelName != "WinScreen" && !audio.isPlaying)
		audio.Play();
}