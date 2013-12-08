/*
 *  Author: Shad Beard
 *  Github: Dahs81
 */

module.exports = outcast = (function () {

	// Helper function
	function convert (out) {
		var outArr;
		if (typeof out === 'string') {
			// Split based on a space - assume a string
			outArr = out.split(' ');
		} else if (out instanceof Array) {
			outArr = out;
		} else {
			console.log('An error has occurred.  Please use an array or space separated string');
		}

		return outArr;
	}

	function trim (arr) {
		var newArr = [];
		for (var i = 0; i < arr.length; i++) {
			newArr.push(arr[i].trim());
		}
		return newArr;
	}

	function comma (str) {
		var arr = str.split(',');
		arr = trim(arr);

		return arr;
	}

	// You can remove any amount from the array as you want.
	function remove (out, numToRemove) {
		var outArr = convert(out);

		// If no numToRemove is passed in, default to 1
		numToRemove = numToRemove || 1;

		while (numToRemove > 0) {
			var random = Math.floor((Math.random() * outArr.length - 1) + 1);
			outArr.splice(random, 1);
			numToRemove--;
		}
		
		return outArr;
	}

	// Picks one winner
	function winner (out) {
		out = convert(out);

		var random = Math.floor((Math.random() * out.length - 1) + 1);
		out = out[random];

		return [out];
	}

	return {
		remove: remove,
		winner: winner,
		comma: comma
	};
})();


