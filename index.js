let arr=[7,6,9,2,5,0];
arr.sort();
arr.reverse();
console.log("the second largest num :",arr[1]);
console.log("****************  2  ******************");

/***************  2    ***********************/
console.log("Find the Largest Three Elements:",arr.slice(0,3));
console.log("****************  4  ******************");

/***************  4    ***********************/
function check(arr) {
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {
     
        if (set.has(arr[i])) {
            return false;
        }
        
        set.add(arr[i]);
    }

    
    return true;
}



const array2 = [1, 2, 3, 2, 4, 5];


console.log( "the arr has unique value ?",check(array2));
console.log("****************  6  ******************");



// ****************  6  ***********************

function frq(arr) {

    const frequencyCounter = {};

    for (let num of arr) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }

    let maxFrequency = 0;
    let mostFrequentElement = null;

    
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > maxFrequency) {
            maxFrequency = frequencyCounter[key];
            mostFrequentElement = key;
        }
    }

    return mostFrequentElement;
}


const array0 = [1, 3, 2, 2, 1, 2, 3, 1, 2, 3, 3, 2];
const mostFrequent = frq(array0);
console.log("The most frequent element is:", mostFrequent);

console.log("***************  7  *******************");

// ****************  7  ***********************
const array1 = [9, 2, 4, 7, 5];
const item = 3;
const find = array1.includes(item);
console.log( find);
console.log("***************  8  *******************");

// ****************  8  ***********************
const array3=[1,5,7,3,9,2];
let sum=0;
for(let i=0;i<array3.length;i++)
{
    sum+=arr[i];
}
console.log("the sum =",sum);
console.log("**************  9  ********************");

// ****************  9  ***********************
 
function sort1(arr) {
    
    for (let i = 1; i < arr.length; i++) {
   
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
   
    return true;
}
const array4 = [1, 2, 3, 4, 5];
console.log(sort1(array4));
console.log("**************  10  ********************");

// ****************  10  ***********************

function check(arr) {
    const set = new Set();
    let count=0;

    for (let i = 0; i < arr.length; i++) {
     
        if (set.has(arr[i])) {
            count+=1;
            
        }
        
        set.add(arr[i]);
    }

    
    return count;
}



const array5 = [1, 2, 3, 2, 4,2,2,2, 5];


console.log( "the arr has Frequency value ?",check(array5));
console.log("*************  11  *********************");

// ****************  11  ***********************
const arr6=[1,2,4,5,7,9,6];
for (i=0;i<arr6.length;i++)
{
    if(arr6[i]%2 !== 0 && arr6[i]<100)
    {
        console.log(arr6[i]);
    }
}
console.log("**************  12  ********************");
// ****************  12  ***********************
for(i=1;i<13;i++)
{
    console.log(`7 * ${i} = ${7 * i}`);
}
console.log("************  13  **********************");
// ****************  13  ***********************
let sum1=0;
for(i=1;i<11;i++)
{
    sum1+=i;
}
console.log("sum =",sum1)
console.log("**************  14  ********************");
// ****************  14  ***********************
let fac=1;
for(i=1;i<11;i++)
{
    fac*=i;
}
console.log("10! =",fac);
console.log("***********  15  ***********************");
// ****************  15  ***********************
let sum2=0;
for(i=10;i<30;i++)
{
    if(i%2==0 && i>10 && i<30){
        sum2+=i;
    }
}
console.log("the sum of even num =", sum2);
console.log("*************  16  *********************");
// ****************  16  ***********************
function convert(num){
    return (num* 9/5) +32;
}
let num=20;
console.log(convert(num));
console.log("*************   17  *********************");
// ****************  17  ***********************
function convert2(num){
    return (num-32)*5/9;
}
let num1=68;
console.log(convert2(num1));
console.log("*************  18  *********************");
// ****************  18  ***********************
let sum3=0;
for(i=0;i<arr6.length;i++)
{
    sum3+=arr6[i];
}
console.log("the sum =",sum3)

console.log("***************  19  *******************");
// ****************  19  ***********************
console.log("the average =",sum3/arr6.length);

console.log("**************  20   ********************");
// ****************  20  ***********************
function positivenum(numbers) {

    return numbers.filter(num => num > 0);
}
const Array7 = [1,5,-9,6,-2,-8];
console.log("Positive numbers:", positivenum(Array7));

console.log("**************  21  ********************");
// ****************  21  ***********************
for(i=0;i<100;i++)
{
    let countr=0;
    for(j=0;j<=i;j++)
    {
        if(i%j==0)
        {
            countr++;
        }
    }
         if(countr==2)
        {
            console.log(i);
        }

}
console.log("**************  22  ********************");
// ****************  22  ***********************
function capital(text) {
   
    const words = text.split(" ");
    const capitalWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedText = capitalWords.join(" ");
    
    return capitalizedText;
}
const text = "hello world";
const capitalizedText = capital(text);
console.log("Capitalized text:", capitalizedText);
console.log("***************  23  *******************");
// ****************  23  ***********************    
function getWords(text) {
  
    const wordsArray = text.split(" ");
    return wordsArray;
}
const text1 = "This is a task ";
const words = getWords(text1);
console.log("Array of words:", words);
console.log("****************   24  ******************");
// ****************  24  ***********************  
function stringToAsciiArray(str) {
    const asciiArray = [];
    
    for (let i = 0; i < str.length; i++) {
      
        asciiArray.push(str.charCodeAt(i));
    }
    return asciiArray;
}


const text3 = "Hello, world!";
const asciiArray = stringToAsciiArray(text3);
console.log("Array of ASCII codes:", asciiArray);
console.log("**************  25  ********************");
// ****************  25  ***********************  
function binaryToDecimal(binaryString) {
   
    const decimalNumber = parseInt(binaryString, 2);
    return decimalNumber;
}
const binaryString = "101010";
const decimalNumber = binaryToDecimal(binaryString);
console.log("Decimal number:", decimalNumber);
console.log("***************  26  *******************");
// ****************  26  *********************** 
function generateRandomPhoneNumber() {
    const prefix = "010"; 
    const randomNumber = Math.floor(Math.random() * 1000000000); 
    const paddedNumber = randomNumber.toString().padStart(9, "0"); 
    return prefix + paddedNumber;
}

function generateRandomPhoneNumbers(count) {
    const phoneNumbers = [];
    for (let i = 0; i < count; i++) {
        phoneNumbers.push(generateRandomPhoneNumber());
    }
    return phoneNumbers;
}


const vodafonePhoneNumbers = generateRandomPhoneNumbers(50);
console.log("Random Vodafone phone numbers:", vodafonePhoneNumbers);


console.log("**************  29  ********************");
// ****************  29  *********************** 
function filterVodafoneNumbers(phoneNumbers) {

    const regex = /^050\d{7}$/;
    
   
    const vodafoneNumbers = phoneNumbers.filter(phoneNumber => regex.test(phoneNumber));
    
    return vodafoneNumbers;
}

const phoneNumbers = ["0501234567", "0557654321", "0509876543", "0561234567"];
const vodafoneNumbers = filterVodafoneNumbers(phoneNumbers);
console.log("Vodafone numbers:", vodafoneNumbers);
console.log("*****************  30  *****************");
// ****************  30  *********************** 
function selectRandomSubset(phoneNumbers, subsetSize) {
    const subset = [];
    
    
    subsetSize = Math.min(subsetSize, phoneNumbers.length);
    
  
    while (subset.length < subsetSize) {
        const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
        subset.push(phoneNumbers[randomIndex]);
    }
    
    return subset;
}


const phoneNumbers1 = ["0501234567", "0557654321", "0509876543", "0561234567", "0549876543"];
const subsetSize = 3; 
const randomSubset = selectRandomSubset(phoneNumbers1, subsetSize);
console.log("Random subset of phone numbers:", randomSubset);



