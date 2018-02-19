function goRobotGo(arr, pos = [0,0], path = []){
	var x = pos[1];
	var y = pos[0];
	var nopath = [];
	if(x <= arr[y].length-1 && arr[y][x+1] == true){
			arr[y][x] = 'checked'
			path.push([y,x])
			goRobotGo(arr, [y, x+1], path);
	}
	if(y < arr.length-1 && arr[y+1][x] == true){
			arr[y][x] = 'checked'
			path.push([y,x])
			goRobotGo(arr, [y+1, x], path)
	}
	if(x == arr[y].length-1 && y == arr.length-1){
		console.log(y, x);
		console.log(path);
		console.log(arr);
		console.log("We made it!");
	}
	else{
		console.log(path);
	}
}


goRobotGo(
[[true, false, true, true, true],
 [true, false, true, true, true],
 [true, false, true, true, true],
 [false, false, true, true, true],
 [true, false, true, true, true],
 [false, true, true, true, true]])


