#pragma strict

function Start () {
		var go = GetComponent(SpriteRenderer);
		var words = Resources.LoadAll("Words");
		var sprite : Sprite = words[Random.Range(0, words.Length)];
		go.sprite = sprite;
}

function Update () {

}