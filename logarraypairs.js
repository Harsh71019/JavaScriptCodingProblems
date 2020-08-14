const alpha = ['a','b','c','d','e','f','g']

function pairs (array) {

	for (let i = 0 ; i < array.length ; i++) {
		for (let j = 0 ; j < array.length ; j++) {

			console.log(array[i] + array[j])

		}
	}
}

pairs(alpha)

//here the big O notation is n * n
//that is n square since it is a nested loop