function makeid(l) {
  var res=" ";
	var char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	//res+=randomcharacter;
	for (var i=0;i<l;i++){
		res+=char_list.charAt(
			Math.floor(
			Math.random()*char_list.length
	)
)
	}

		return res.trim();
	}
	// write your code here
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
