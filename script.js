function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
//create an array for a situation 
const situations = ['lonely', 'heartbroken', 'celebrating' ];

//find the specific situation and return a message.
const advice = {
  lonely: [ 'He is always by you side', 'He will never leave you no matter what','He has loved you from the beginning of time'],
  heartbroken: ['He knows every tear you cry','He is close by to listen and comfort','He is grieving with you and can tell you He understands'],
  celebrating: ['His mercies are new each morning','Be joyful always','Come before Him with thanksgiving']
}
//find a bible verse for the situation. 
const bibleVerse = ['Deutoronomy 31:6 Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.','John 16:22 So with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy','Number 6:24-26 24 The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace.'];

// Store the 'wisdom' in an array
let biblelWisdom = []

  // Iterate over the object
function makeRandomMessage(){
    let bibleMessage = [];//initialize the bibleMessage everytime the function is called
    situations.forEach((situation,index) => {
        let arrayId = generateRandomNumber(advice[situation].length);//choose a random message for each situation
        biblelWisdom.push(`When you are feeling ${situation} know that God say: "${advice[situation][arrayId]}." Bible verse for you: "${bibleVerse[index]}"`);
    });
}    
       
function formatWisdom() { //add formatting to the random message
makeRandomMessage();
const formatted = biblelWisdom.join('\n');
console.log(formatted);
}
  
formatWisdom();