// 1
function convertCtoF(celsius) {
	let fahrenheit = celsius * (9 / 5) + 32;
	return fahrenheit;
}

// 2
function reverseString(str) {
	return str.split('').reverse().join('');
}

// 3
function factorialize(num) {
	if (num === 0) {
		return 1;
	}
	return num * factorialize(num - 1);
}

// 4
function findLongestWordLength(str) {
	let words = str.split(' ');
	let maxLength = 0;

	for (let i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}

	return maxLength;
}  

// 5
function largestOfFour(arr) {
	const results = [];
	for (let i = 0; i < arr.length; i++) {
		let largestNumber = arr[i][0];
		for (let j = 1; j < arr[i].length; j++) {
			if (arr[i][j] > largestNumber) {
				largestNumber = arr[i][j];
			}
		}
		results[i] = largestNumber;
	}

	return results;
}

// 6
function confirmEnding(str, target) {
	return str.slice(str.length - target.length) === target;
}
	
// 7
function repeatStringNumTimes(str, num) {
	let accumulatedStr = "";

	for (let i = 0; i < num; i++) {
		accumulatedStr += str;
	}

	return accumulatedStr;
}

// 8
function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + "...";
	} else {
		return str;
	}
}

// 9
function findElement(arr, func) {
	return arr.find(func);
}

// 10
function booWho(bool) {
	return typeof bool === "boolean";
}
booWho(null);

// 11
function titleCase(str) {
	return str
		.toLowerCase()
		.split(" ")
		.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
		.join(" ");
}

// 12
function frankenSplice(arr1, arr2, n) {
	let localArr = arr2.slice();
	localArr.splice(n, 0, ...arr1);
	return localArr;
}
		
// 13
function bouncer(arr) {
	const filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) filteredArr.push(arr[i]);
	}
	return filteredArr;
}

// 14
function getIndexToIns(arr, num) {
	arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= num) return i;
	}

	return arr.length;
}

// 15
function mutation(arr) {
	return arr[1]
		.toLowerCase()
		.split("")
		.every(function(letter) {
			return arr[0].toLowerCase().indexOf(letter) !== -1;
		});
}

// 16
function chunkArrayInGroups(arr, size) {
	const newArr = [];
	for (let i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;
}