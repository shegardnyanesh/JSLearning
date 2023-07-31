var string1 = "     Hey you are doing good, keep it up       ";
function stringHandsOn() {
  var string1 = "     Hey you are doing good, keep it up       ";
  console.log("-----------------------Step1-------------------------");
  console.log(`Given String is- ${string1}`);
  console.log("-----------------------Step2-------------------------");
  console.log(`length of string is - ${string1.length}`);
  console.log("-----------------------Step3-------------------------");
  console.log(`Before trim string length is- ${string1.length}`);
  var trimString = string1.trim();
  var afterTrimLength = trimString.length;
  console.log(`After trim string length is- ${afterTrimLength}`);
  console.log("-----------------------Step4-------------------------");
  var spacesNo = string1.length - afterTrimLength;
  console.log(`total no of spaces remaining after string- ${spacesNo}`);
  console.log("-----------------------Step5-------------------------");
  var firstChar = trimString.charAt(0);
  var lastChar = trimString.charAt(trimString.length - 1);
  console.log(
    `after string first charector- ${firstChar} ,last charector-${lastChar}`
  );
  console.log("-----------------------Step6-------------------------");
  var noOfWordsAfterSplit = trimString.split(" ");
  var totalNoWords = noOfWordsAfterSplit.length;
  console.log(`total no of words after trim- ${totalNoWords}`);
  console.log("-----------------------Step7-------------------------");
  var indexOfgood = trimString.indexOf("good");
  console.log(`index of word good is - ${indexOfgood}`);
  console.log("-----------------------Step8-------------------------");
  var sliceWords = trimString.slice(22);
  console.log(`Substring after slice 22 is-${sliceWords} `);
  console.log("-----------------------Step9-------------------------");
  var checkWord = trimString.endsWith("up");
  console.log(`check string ends with word up- ${checkWord}`);
  console.log("-----------------------Step10-------------------------");
  var checkword2 = trimString.startsWith("Hey");
  console.log(`check string is start with word Hey- ${checkword2}`);
  console.log("-----------------------Step10-------------------------");
}
stringHandsOn();
