/* eslint-disable */

// Boolean Data Type
let aBoolean: boolean = true;

console.log(`Boolean => ${aBoolean}`);
// Boolean => true

// Number Data Type
let aNumber: number = 21;
aNumber = 21.0;

aNumber = 0x15;
aNumber = 0b00010101;
aNumber = 0o25;

console.log(`Number => ${aNumber}`);
// Number => 21

// String Data Type
let aString: string = 'This is a string';
// prettier-ignore
aString = "This is another string";

console.log(`String => ${aString}`);
// String => This is another string

let aTemplateString: string = `Template string => ${aString}`;

console.log(aTemplateString);
// Template string => This is another string

// Any Data Type
let aAny: any = 12;
aAny = 'Reassigned as a string';

console.log(`Any => ${aAny}`);
// Any => Reassigned as a string
