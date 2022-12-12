console.log('1]');
// console.log('1]','\n','\n','hi'); usinh '\n' for new line in one log 
var square = function (num) {
    console.log('Square of ',num,'=',num * num);
}
square(5); 
square(6); 
square(25);
square(100);
// ==========================
console.log('');
console.log('2]','Type Of square is ',typeof square);

// ==========================
console.log('');
console.log('3]');
var rectangleArea= function (length,width) {
    // result= length*width;
    console.log(' Length=',length,'\n','Width=',width,'\n','Area of Rectangle=',length*width,);
}
rectangleArea(499,917);
// ==========================
console.log('');
console.log('4]');
var swapValues=function (val1,val2) {
    console.log('Before Swap : ',val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log('After Swap  : ',val1,val2);
}
console.log('4 b.');swapValues("Virat","Anushka");
console.log('4 c.');swapValues(1000,2000);
// ==========================
console.log('');
console.log('5]');
var string=function (stringName) {
    console.log('String:',stringName);
    console.log('5 A. Total character =',stringName.length);
    console.log('5 B. character at index 6  :',stringName.charAt(6));
    console.log('5 C. character at index 11 :',stringName.charAt(11));
    console.log('5 D. Last character : ',stringName.charAt(stringName.length-1));
    console.log('5 E. First character: ',stringName.charAt(0));
    console.log('5 F.Length of String = ',stringName.length,'\n','   Square = ',stringName.length*stringName.length);
}
string("JS the most popular language")