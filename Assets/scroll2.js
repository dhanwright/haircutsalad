#pragma strict

function Start () {

}

function Update () {
	
	var mr : MeshRenderer = GetComponent(MeshRenderer);
	
	var mat : Material = mr.sharedMaterial;
	
	var offset : Vector2 = mat.mainTextureOffset;
	
	offset.x -= Time.deltaTime / 15;
	
	mat.mainTextureOffset = offset;
}