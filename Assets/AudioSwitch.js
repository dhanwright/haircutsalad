#pragma strict
var sec : float;
	
	@script RequireComponent(AudioSource)
	function Start()
	{
		yield WaitForSeconds(sec);
		audio.Play();
	}