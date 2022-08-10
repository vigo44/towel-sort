
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return ([]);
  matrix.map((item, index)=> index%2? item.reverse(): item );
  let result =[];
  for (let i=0; i<matrix.length; i++) {
    result = [...result, ...matrix[i]];
  }
  return (result);
}
