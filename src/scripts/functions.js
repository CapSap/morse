const alphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
};

export const encode = (input) => {
  const array = input.toLowerCase().split("");

  const result = array.map((character) => {
    // get an array of morse keys from obj. map through list and return when obj[key] (letter values) === character
    return Object.keys(alphabet).find((key) => alphabet[key] === character);
  });

  //make the text input into morse code
  return result.join(" ");
};

export const decode = (input) => {
  const array = input.split(" ");
  const result = array.map((character) => alphabet[character]);
  return result.join("");
};
