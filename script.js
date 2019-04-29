
var myList=['0','10','25','38'];

const numbers= [0,10,25,38];

for(var i=0; i<myList.length;i++){
    alert('You have the numbers '+myList[i]+ ' to choose from on the list.');
};

average= (numbers[0]+numbers[1]+numbers[2]+numbers[3])/4;

alert('The average of these numbers is:'+average+' which can be rounded down to 18.');

console.table(myList);

console.log('The average of these numbers is: '+average);

console.log('Which can be rounded down to:');
console.log(parseInt(average));
