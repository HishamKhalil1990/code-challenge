'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function that accepts an array of strings. Return the longest string.
------------------------------------------------------------------------------------------------ */

const longestString = (arr) => {
    // Solution code here...
    const str = arr.reduce((acc,ele)=>{
        let value;
        if (acc.length > ele.length){
            value = acc;
        }else{
            value = ele;
        }
        return value;
    },"a");
    return str;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function called isSimilar which takes two strings and returns true if they contain the same characters and false otherwise; if for example the two strings have the same characters and they are rearranged it will return true.
examples:

isSimilar("form","from")
=> true
isSimilar("farm","from")
=> false
isSimilar("cat","act")
=> true
------------------------------------------------------------------------------------------------ */

const isSimilar = (arr) => {
    // Solution code here...
    const str1 = arr[0];
    const str2 = arr[1];
    let status;
    if(str1 == undefined){
        status = false
    } else if (str1.length == str2.length ){
        const arr1 = str1.split("");
        const arr2 = str2.split("");
        const arr3 = arr1.filter(ele=>{
            let notExist = true;
            arr2.forEach(char => {
                if(char == ele){
                    notExist = false;
                }
            });
            return notExist;
        })
        if(arr3.length == 0){
            status = true;
        }else{
            status = false;
        }
    }else{
        status = false;
    }
    return status;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
    test('It should return the string that is the longest in length', () => {
        expect(longestString(['hello', 'future', '401', 'students', '!'])).toStrictEqual('students');
        expect(longestString(['rubber', 'ducks', 'dont', 'quack', '!'])).toStrictEqual('rubber');
    });
});

describe('Testing challenge 2', () => {
    test('It Should return true if the string contains the same characters and false if otherwise', () => {
        expect(isSimilar(['from', 'from'])).toStrictEqual(true);
        expect(isSimilar(['farm', 'from'])).toStrictEqual(false);
        expect(isSimilar(['cat', 'act'])).toStrictEqual(true);
        expect(isSimilar(['cat', 'at'])).toStrictEqual(false);
        expect(isSimilar(['duck', 'ckud'])).toStrictEqual(true);
        expect(isSimilar(['rubber', 'duck'])).toStrictEqual(false);
        expect(isSimilar([])).toStrictEqual(false);
    });
});
