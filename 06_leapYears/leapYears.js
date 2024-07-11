const leapYears = function(year) {
const divByfour = year % 4 ==0;
const century= year % 100 ==0;
const divBy400= year % 400 ==0;

if (divByfour &&
(!century||divBy400))
{return true;}
else{
return false;}
};

// Do not edit below this line
module.exports = leapYears;
