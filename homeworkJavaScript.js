  // 1. Please write a function that takes an array of words and returns the length of the shortest word.
  const words = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
  const getShortestWordLength = (w) => w.reduce((x, y) => Math.min(x, y.length), w[0].length);
  const shortestWordLength = getShortestWordLength(words);

  // implement getShortestWordLength function here

  console.log(shortestWordLength); // 5

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 2. Please write a function that takes an array of numbers and returns the largest (without using Math.max())
  const numbers = [2321, 421, 12, 9, 29, 19, 21, 12, 2, 32, 4, 541, 6, 7, 8];

  // implement getLargestNumber function here
  const getLargestNumber = (arr) => (arr.reduce((x, y) => x >= y ? x : y, arr[0]));

  // use the function for the following array:
  console.log(getLargestNumber(numbers)); // 2321

  // use the function for the following arrays as well:
  const numbers2 = [321, 321, 32, 12, 5321, 321, 44];

  console.log(getLargestNumber(numbers2)); // 5321

  const numbers3 = [9, 15, 22, 1, 873, 3215, 54, 987];

  console.log(getLargestNumber(numbers3)); // 3215

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 3. Please write a function that takes an array of words and a character and returns each word that has that character present in another array.
  const words2 = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
  const getWordsWithCharacter = (x, ch) => (x.filter(q => q.includes(ch)))
  const wordsWithA = getWordsWithCharacter(words2, 'a');

  console.log(wordsWithA); // ['bananas', 'tomatos, 'apples', 'pears', 'mangos', 'pineapples']

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 4. Please write a function that takes an array of words and inserts an asterisk (*) between each letter of each word.
  const words3 = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
  const getWordsWithAsterisk = (arr) => (arr.map(x => x.split("").join("*")));
  const wordsWithAsterisk = getWordsWithAsterisk(words3);

  // implement getWordsWithAsterisk function here
  // ...

  console.log(wordsWithAsterisk); // ['b*a*n*a*n*a*s', 't*o*m*a*t*o*s', 'a*p*p*l*e*s', 'p*e*a*r*s', 'k*i*w*i*s', 'm*a*n*g*o*s', 'p*i*n*e*a*p*p*l*e*s']

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 5. Please write a function that takes an array of words and returns the number of vowels in the array.
  const words4 = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
  const vowels = "aeiouAEIOU";
  const getNumberOfVowels = (arr) => (arr.reduce((x, y) => (y.split("").filter(q=>vowels.includes(q)).length) + x, 0))
  const numberOfVowels = getNumberOfVowels(words4);

  // implement getNumberOfVowels function here
  // ...

  console.log(numberOfVowels); // 18

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 6. Please write a function that takes an array of words and returns the number of palindromes in the array.
  const words5 = ['racecar', 'car', 'job', 'level', 'noon', 'madam', 'refer'];
  const isPalindrome = (n) => (n.split("").reverse().join("") === n.split("").join(""));
  const getNumberOfPalindromes = (arr) => (arr.reduce((x, y) => isPalindrome(y) + x, 0));
  const numberOfPalindromes = getNumberOfPalindromes(words5);

  // implement getNumberOfPalindromes function here
  // ...

  console.log(numberOfPalindromes); // 5

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 7. Please write a function that takes an object and returns the sum of all the values in the object.
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  };

  const getSumOfValues = (o) => (Object.values(o).reduce((x, y) => x + y, 0));
  const sum = getSumOfValues(obj);

  // implement getSumOfValues function here
  // ...

  console.log(sum); // 15


  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 8. Please write a function that takes an object and returns all the keys in an array.
  const obj2 = {
    banana: 'yellow',
    tomatoe: 'red',
    apple: 'green',
    pear: 'green',
    kiwi: 'green',
  };

  const getKeys = (obj) => (Object.keys(obj2));

  const keys = getKeys(obj2);

  // implement getKeys function here
  // ...

  console.log(keys); // ['banana', 'tomatoe', 'apple', 'pear', 'kiwi'];


  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 9. Please write a function that takes an object and returns all the values in an array.
  const obj3 = {
    banana: 'yellow',
    tomatoe: 'red',
    apple: 'green',
    pear: 'green',
    kiwi: 'green',
  };

  const getValues = (x) => Object.values(x);

  const values = getValues(obj3);

  // implement getValues function here
  // ...

  console.log(values); // ['yellow', 'red', 'green', 'green', 'green'];

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 10. Plese write an object with a method that returns the sum of all the values in the object.
  const obj4 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    sum() {
      return Object.values(this).reduce((x, y) => typeof y === 'number' ? x + y : x, 0);
    }
  };

  console.log(obj4.sum()); // 15

  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //

  // 11. Please write a function that takes an object and returns the number of values that are numbers.
  const obj5 = {
    a: 1,
    b: 'two',
    c: 3,
    d: 'four',
    e: 5
  };

  const getNumberOfValuesThatAreNumbers = (obj) => Object.values(obj).filter(x => typeof x === 'number').length;

  const numberOfValuesThatAreNumbers = getNumberOfValuesThatAreNumbers(obj5);

  // implement getNumberOfValuesThatAreNumbers function here
  // ...

  console.log(numberOfValuesThatAreNumbers); // 3


  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------------------- //


  /* 12. Given a person object, please do the following:
    Write a method called getFullName that returns the full name of the person.
    Write a method that checks if the age of the person is greater than 18.
    Write a method that gets the full adress of the person in a single string.
    Write a method that changes the street of the person to the given value (in the address object)
  */
  const person = {
      firstName: 'Gica',
      lastName: 'Popescu',
      age: 30,
      address: { 
        street: 'Barbu Vacarescu 12',
        city: 'Bucharest',
        state: 'Romania',
        zipCode: '12345',
        changeAddressStreet(newStreet) {
            this.street = newStreet;
        }
      },
      getFullName() {
        return `${this.firstName} ${this.lastName}`;
      },
      isOver18() {
        return this.age >= 18;
      },
      getFullAddress() {
        return Object.values(this.address)
                     .filter(x => typeof x === 'string')
                     .map(value => value)
                     .join(" ");
      }
  };

  console.log(person.getFullName()); // Gica Popescu

  console.log(person.isOver18()); // true

  console.log(person.getFullAddress()); // Barbu Vacarescu 12 Buchaest Romania, 12345

  person.address.changeAddressStreet('Lipscani 102');

  console.log(person.getFullAddress()); // Lipscani 102 Buchaest Romania, 12345