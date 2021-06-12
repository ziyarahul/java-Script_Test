function maximum(a, b, c)
    {
	return Math.max(Math.max(a, b), c);
    }
    function minimum(a, b, c)
        {
    	return Math.min(Math.min(a, b), c);
        }
    		function smallestDifferenceTriplet(array1, array2, array3, arrayLength)
    	    {
    		array1.sort(function(a, b){return a - b});
    		array2.sort(function(a, b){return a - b});
    		array3.sort(function(a, b){return a - b});
    		let res_min = 0, res_max = 0, res_mid = 0;
    		let i = 0, j = 0, k = 0;
    		let diff = 2147483647;
    		    while (i < arrayLength && j < arrayLength && k < arrayLength)
            		{
            			let sum = array1[i] + array2[j] + array3[k];
            			let max = maximum(array1[i], array2[j], array3[k]);
            			let min = minimum(array1[i], array2[j], array3[k]);
            			if (min == array1[i])
            				i++;
            			else if (min == array2[j])
            				j++;
            			else
            				k++;
            			if (diff > (max - min))
            			{
            				diff = max - min;
            				res_max = max;
            				res_mid = sum - (max + min);
            				res_min = min;
            			}
            	    }
            		return (res_max + ", " + res_mid + ", " + res_min);
            	}
let array1 = [5, 2, 8];
let array2 = [10, 7, 12];
let array3 = [9, 14, 6];
let arrayLength = array1.length;
console.log(smallestDifferenceTriplet(array1, array2, array3, arrayLength));