using UnityEngine;
using System.Collections;

public class Words: MonoBehaviour{
public Sprite[] wordSprites;

void Awake()
{
	// load all frames in fruitsSprites array
	wordSprites = Resources.LoadAll<Sprite>("Words");
}

void Start ()
{
	// create the object
	GameObject words = new GameObject();
	words.transform.position = new Vector3(0f, 2.5f, 0f);
	// add a "SpriteRenderer" component to the newly created object
	words.AddComponent<SpriteRenderer>();
	// assign "fruit_9" sprite to it
	words.GetComponent<SpriteRenderer>().sprite = wordSprites[Random.Range(0, 14)];
	// to assign the 5th frame
}
}