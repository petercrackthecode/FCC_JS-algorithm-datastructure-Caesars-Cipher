function rot13(str) { // LBH QVQ VG!
  let regexpTest= new RegExp(/[A-Z]/);
  let decipherString= '';

  for (let index= 0; index < str.length; index++)	{
  	if (regexpTest.test(str[index]))	{
  		let takeChar;
  		if (regexpTest.test(String.fromCharCode(str.charCodeAt(index) - 13)))	{
  			takeChar= String.fromCharCode(str.charCodeAt(index) - 13);
  		}
  		else takeChar= String.fromCharCode(str.charCodeAt(index) + 13);

  		decipherString+= takeChar;
  	}
  	else decipherString+= str[index];
  }
  
  return decipherString;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));