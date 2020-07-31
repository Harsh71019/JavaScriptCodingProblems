	const array = ['nemo'];
	const largeArray = new new Array(10000).fill("nemo");
	function findNemo (array) {
		let to = performance.now();
			for(let i = 0 ; i <= array.length; i++) {
				if (array[i] === 'nemo') {
					console.log('Nemo found')
				}
			}
			let t1 = performance.now();
			console.log("Time took to run this function is") + (t1 - t0) +"in Milliseconds"))
	}

	findNemo(array)

