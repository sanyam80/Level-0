function strReverse(str){
  var strLists=str.split("")
  var reverseStrLists=strLists.reverse();
  var reverseStr=reverseStrLists.join("");
  return reverseStr;

  // return str.split("").reverse().join("")
}

function isPalindrome(str){
  var reverse=strReverse(str);

  // if(reverse===str){
  //   return true
  // }
  // else{
  //   return false
  // }

  return str===reverse
}

function strConvert(obj){
  var dateStr={day:"",month:"",year:""};

  if(obj.day<10){
    dateStr.day="0"+obj.day;
  }
  else{
    dateStr.day=obj.day.toString();
  }

  if(obj.month<10){
    dateStr.month="0"+obj.month;
  }
  else{
    dateStr.month=obj.month.toString();
  }

  dateStr.year=obj.year.toString();

  return dateStr;
}

function dateFormat(obj){

  var datestr=strConvert(obj);

  var ddmmyyyy=datestr.day + datestr.month + datestr.year;
  var mmddyyyy=datestr.month + datestr.day + datestr.year;
  var yyyymmdd=datestr.year + datestr.month + datestr.day;
  var ddmmyy=datestr.day + datestr.month + datestr.year.slice(-2);
  var mmddyy=datestr.month + datestr.day + datestr.year.slice(-2);
  var yymmdd=datestr.year.slice(-2) + datestr.month + datestr.day;

  return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}

function reverseFunc(obj){
  var noOfFormat=dateFormat(obj);
  var flag=false;
  for(var i=0;i<noOfFormat.length;i++){
    if(isPalindrome(noOfFormat[i])){
      console.log(noOfFormat[i])
      flag=true
      break;
    }
  }
  return flag;
}


function isLeapYear(year) {
    if(year % 400 === 0) {
        return true;
    }
    if(year % 100 === 0) {
        return false;
    }
    if(year % 4 === 0) {
        return true;
    }
    return false;
}


// for next day 
function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 2) {
        if(isLeapYear(year)) {
            if(day > 29) {
                day = 1;
                month++;
            }
        }
        else {
            if(day > 28) {
                day  = 1;
                month++;
            }
        }
    }
    else {
        if(day > daysInMonth[month -1]) {
            day = 1;
            month++;
        }
    }

    if(month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

// for next day palindrome
function getNextPalindrome(obj){
  var count=0;
  var nextDate=getNextDate(obj);
  while(1){
    count++;
    var isPalind=reverseFunc(nextDate);
    if(isPalind){
      break;
    }
    else{
      nextDate=getNextDate(nextDate);
    }
  }
  return [count,nextDate]
}



// for previous days
function getPrevDate(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 3) {
        if(isLeapYear(year)) {
            if(day <1) {
                day = 29;
                month--;
            }
        }
        else {
            if(day < 1) {
                day  = 28;
                month--;
            }
        }
    }
    else {
        if(day < 1) {
            day = daysInMonth[month -1];
            month--;
        }
    }

    if(month < 1) {
        month = 12;
        year--;
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

// for previous day palindrome
function getPreviousPalindrome(obj){
  var count=0;
  var prevDate=getPrevDate(obj);
  while(1){
    count++;
    var isPalind=reverseFunc(prevDate);
    if(isPalind){
      break;
    }
    else{
      prevDate=getPrevDate(prevDate);
    }
  }
  return [count,prevDate]
}




var obj={
  day:28,
  month:2,
  year:2020
}

// console.log(reverseFunc(obj))
// console.log(getNextDate(obj))
// console.log(getNextPalindrome(obj))
// console.log(getPrevDate(obj))
// console.log(getPreviousPalindrome(obj))


const input_date=document.querySelector("#input")
const btn=document.querySelector("#btn-check")
const display1=document.querySelector("#output1")



btn.addEventListener("click",function clickhandler(){
  var inputVal=input_date.value;
  var formatted=inputVal.split("-")
  display1.style.display="block";
  var date={
    day:Number(formatted[2]),
    month:Number(formatted[1]),
    year:Number(formatted[0])
  }
  
  if(inputVal!==' '){
    var isReversed=reverseFunc(date)
    if(isReversed){
        display1.innerText="your birthday is palindrome";
    }
    else{
      var [count1,nextDate1]=getNextPalindrome(date);
      var [count2,nextDate2]=getPreviousPalindrome(date);
        if (count1>count2){
          display1.innerText=`the next palindrome date is ${nextDate2.day}-${nextDate2.month}-${nextDate2.year} and it is missed by ${count2} days!!`      
        }
        else{
          display1.innerText=`the next palindrome date is ${nextDate1.day}-${nextDate1.month}-${nextDate1.year} and it is missed by ${count1} days!!`
        }
     }
  } 
  else{
    display1.innerText="please enter the Birthdate"
  }

})