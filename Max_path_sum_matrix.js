function Max_path_sum_matrix(matrix)
{
	let res = -1;
	for(let i = 0; i < col; i++)
		res = Math.max(res, matrix[0][i]);
	for(let i = 1; i < matrix_length; i++)
	{
		res = -1;
		for(let j = 0; j < col; j++)
		{
			if (j > 0 && j < col - 1)
				matrix[i][j] += Math.max(matrix[i - 1][j],Math.max(matrix[i - 1][j - 1],matrix[i - 1][j + 1]));
			else if (j > 0)
				matrix[i][j] += Math.max(matrix[i - 1][j],matrix[i - 1][j - 1]);
			else if (j < col - 1)
				matrix[i][j] += Math.max(matrix[i - 1][j],matrix[i - 1][j + 1]);
			output = Math.max(matrix[i][j], res);
		}
	} return output;
}
let matrix = [ [ 1 ,2,3 ],[ 9,8,7],[ 4,5,6 ]];
let matrix_length = matrix.length
let col = matrix[1].length
console.log((Max_path_sum_matrix(matrix)));