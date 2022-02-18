let person = {
	firstname:"vivekananda",
	lastname:"bediya",
	age:20,
	friends:function(){
		document.write(`my name is ${person.firstname+" "+person.lastname}`);
	}
};

person.friends()
