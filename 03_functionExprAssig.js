console.log('---------------------Step1---------------------');
var square = function(n1){
console.log(`square of n1 ${n1*n1}`);
}
square(5)
square(6)
square(25)
square(100)
square(67.89)
square(59)

console.log('---------------------Step2---------------------');
console.log(typeof square);
console.log('---------------------Step3---------------------');
var rectangleLength=function(num3,num4){
var area=num3*num4
return area
}
result=rectangleLength(499,917)
console.log(`area of the rectangle is - ${result}`);
console.log('---------------------Step4---------------------');
var swap=function(arg1,arg2){
    console.log(`before swap values are-${arg1},${arg2}`);
    var store=arg1
    arg1=arg2
    arg2=store
    console.log(`after swap values are- ${arg1},${arg2}`);
}
swap('mahi','raina')
swap('55','77')
console.log('---------------------Step5---------------------');
var string=function(string1){
    console.log(`total no of carectors available in string are -${string1.length}`);
    var char=string1.charAt(6)
    console.log(`carector at index 6 is - ${char}`);
    var char11=string1.charAt(11)
    console.log(`carector at index 11 is - ${char11}`);
    var totalLength=string1.length
    var lastCharNo=string1.charAt(totalLength-1)
    console.log(`last charector in string is- ${lastCharNo}`);
    console.log(`very first charector of string is- ${string1.charAt(0)}`);
    var totalWords=string1.split(' ')
    console.log(`total words availabe are - ${totalWords}`);
    var noOfwords=totalWords.length
    console.log(`square of total no of words available is - ${noOfwords*noOfwords}`);

}
string('JS the most popular language of internet')