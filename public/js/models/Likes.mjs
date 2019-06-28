export default class Likes
{
	constructor()
	{
		//array hold holds liked breweries
		this.likes = [];
	}

	//Class methods

	addLike(id, name, address, phone)
	{
		//Holds all data attributes of the brewery
		const like = { id, name, address, phone };
		//Stores it in the liked array
		this.likes.push(like);

		//persist data in local storage
		this.persistData();

		return like;
	}

	deleteLike(id)
	{
		//Returns the index of the element that matches the id of the brewery
		const index = this.likes.findIndex(el => el.id === id);

		//Removes the element matching the index and ONLY that element
		this.likes.splice(index,1);
	}

	//Tests to see if the element is already liked
	isLiked(id)
	{
		return this.likes.findIndex(el => el.id === id) !== -1 //Return true if the index returned is not -1 
	}

	//Returns the number of liked breweries stored
	getNumLikes()
	{
		return this.likes.length;
	}

	//stores the likes in localStorage
	persistData()
	{
		//Stores the item in local storage as 'likes' in JSON format
		localStorage.setItem('likes', JSON.stringify(this.likes));
	}

	readStorage()
	{
		//retrieve the 'likes' from local storage
		const storage = JSON.parse(localStorage.getItem('likes'));

		//restore the likes from localStorage
		//set this.likes to what is stored in storage.
		if (storage) this.likes = storage;
	}
	
}