function find_Max_1s_row (array)
{
	var row = 0, i, j;
	for (i=0, j=ArrayLength - 1 ; i< ArrayLength ; i++)
	{
		while (array[i][j] == 1 && j >= 0)
		{
			row = i;
			j--;
		}
	}
	return row+1
}
var array = [[0, 1, 1, 1],[0, 0, 1, 1],[1, 1, 1, 1],[0, 0, 0, 0]];
let ArrayLength = array.length
console.log(find_Max_1s_row(array));