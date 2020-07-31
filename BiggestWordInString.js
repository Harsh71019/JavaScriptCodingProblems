var string = "Hey hello mothafucka"

function findLongestString() {
	var words = str.split(' ');
	var maxLength = 0;
	for (i = 0 ; i < words.length; i++) {
		if(words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	return maxLength;
}
console.log(findLongestString(string))

//Using reducer

function findLongestString() {
	return str.split(" ").reduce(function(x,y){
		return Math.max(x,y.length)
	},0)
}
console.log(findLongestString(string))

//Using advanced method

function  findLongestString(str) { 
	str = str.split(' ');
	console.log(str)
	if(str.length == 1) {
		return str.length[0]
	}

	if(str[0].length >= str[i].length){
		str.splice(1,1);
		return findLongestString(str.join(" "));
	}

	if(str[0].length <= str[i].length) {
		return findLongestString(str.slice(1,str.length).join(' '))
	}
	return str.length;	
}