enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
let backGroundColor = Color.Red;

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');

console.log(endsWithC);

let alternativeWay = (message as string).endsWith('c');