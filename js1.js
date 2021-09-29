var arr = [2,3,4,5,8];
arr.forEach(function(v,i,a){
	if(i%2==v%2){
		console.log("hatuk zangvac");
	}else{
		console.log("hatuk che");
	}
})


// let arr = [2,5,100];
// let arr2 = arr.map(function(v){
// 	return arr.join(); 
// })
// console.log(arr2);


// let arr = [1,2,8,9];
// let arr2 = arr.map(v=>v*v);
// console.log(arr2);


// let arr = ["hello",8,55,29,"hi","darling"];
// let arr2 = arr.filter(v=>{
// 	if(typeof v==="string" && v.length<=5){
// 		return v;
// 	}
// })
// console.log(arr2)


// let arr = [2,1,5,3,8,6]
// let arr2 = arr.filter(v=>v>4);
// console.log(arr2)



// function f(arr){
// 	var longestWord = arr[0];
// 	arr.forEach(function(word){
// 		if(word.length > longestWord.length) {
//       		longestWord = word;
//     	}
// 	})	
// 	return longestWord;
// }
// console.log(f(["Australia","Germany","United States of America"]));

	

