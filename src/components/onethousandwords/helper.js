/* const wordCounter = (props) => {
	let topWords = {}
	let mostWords = {}
	let wordArr = entry.split(' ')
	const num = 5
	for (let i = 0; i < wordArr.length; i++) {
		if (!topWords[wordArr[i]]) {
			topWords[wordArr[i]] = 1
		} else {
			topWords[wordArr[i]] += 1
		}
	}

	Object.keys(topWords)
		.sort((a, b) => topWords[b] - topWords[a])
		.forEach((key, ind) => {
			if (ind < num) {
				mostWords[key] = topWords[key]
			}
		})

	const topArr = []
	Object.keys(mostWords).map((x) => topArr.push(x))
	return topArr
}

export { wordCounter } */
