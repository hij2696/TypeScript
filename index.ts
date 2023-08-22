// 타입스크립트 기본 타입 정리
let named :string = 'hwang';
let age :number = 26;
let married :boolean = true;
let members :string[] = ['kim', 'park'];
let names :{name1 : string, name2: string} = {name1 : 'kim', name2: 'park'};
let a :undefined = undefined;
let b :null = null;

// 타입을 미리 정하기 애매할 때
let phone :(number | string) = 123; // union type
let notebook :(number | string)[] = [1, '2,', 3];
let obj :{a : (string | number)} = {a : '123'}
let mouse :any; // any
let keyboard :unknown; // unknown

// 함수에 타입 지정하는 방법
function multiple(input :number) :number {
  return input * 2;
}
multiple(30);

function minus(input? :number) :void {
  // return input - 2; 에러 발생
}

// Narrowing & Assertion
function plus(input :number | string) {
  if (typeof input === 'string') return input + '1';
  else return input + 1;
}

function funcArr(input :number | string) {
  let arr :number[] = [];
  arr[0] = input as number;
}

// type 키워드 & readonly
type Animal = string | number | undefined;
let animal :Animal;

type Hwang = { name :string, age :number };
let injae :Hwang = { name : 'hwanginjae', age : 26 };

type Locations = { readonly region? :string };
const birthPlace :Locations = { region : 'seoul' };
// birthPlace.region = 'busan'; readonly로 인해 에러 발생

type Name = string;
type Age = number;
type Persons = Name | Age; // | 연산자로 type을 extend 할 수 있음

type PositionX = { x : number };
type PositionY = { y : number };
type Position = PositionX & PositionY; // & 연산자로 object 타입 extend 할 수 있음
let position :Position = {x : 10, y : 20};

// Literal Types
let monitor :123;
monitor = 123;

let me :'hwang' | 'injae';
me = 'hwang';

function func1(input :'hello') :1 | 0 {
  return 1;
}

var data = {
  name : 'kim'
} as const

function myFunction(a : 'kim') {

}
myFunction(data.name);

// 함수와 methods에 type alias 지정
type FunctionType = (a :string) => number;

let myFunction2 :FunctionType = function(input) {
  return 10;
}

type Member = {
  name : string,
  age : number,
  plusOne : (input : number ) => number,
  changeName : () => void
}

let memberInfo :Member = {
  name : 'hwang',
  age : 26,
  plusOne(input) {
    return input + 1;
  },
  changeName : () => {
    console.log('Do you want to change your name?');
  }
}
memberInfo.plusOne(memberInfo.age);
memberInfo.changeName();

// typescript로 HTML 변경과 조작할 때 주의점
let title = document.querySelector('#title');
if (title != null) title.innerHTML = '충성';
// if (title instanceof Element) title.innerHTML = '충성';
// if (title?.innerHTML != undefined) title.innerHTML = '충성';
// let title2 = document.querySelector('#title') as Element;
// title2.innerHTML = '충성';

let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) link.href = 'https://kakao.com';

let button = document.querySelector('#button');
button?.addEventListener('click', function() {
  console.log('click!');
});

// class 만들 때 타입 지정
class Person {
  name :string;
  constructor(name :string) {
    this.name = name;
  }
  changeName(print :string) {
    console.log('hi ' + print)
  }
}

let person1 = new Person('kim');
let person2 = new Person('hwang');
person1.changeName(person1.name);

// interface로 Object에 타입 지정
interface Square {
  color : string,
  width : number
};

let square = { color : 'red', width : 100 };

interface Student {
  name : string
};

interface Student { // interface는 중복 선언 O (자동 extend 됨)
  score : number
};

interface Teacher extends Student {
  age : number
};

let student :Student = { name : 'hwang', score : 123 };
let teacher :Teacher = { name : 'park', age : 20, score : 456 };

type Animals = { name : string };
// type Animals = { name : string }; type은 중복 선언 X
type Cat = { name : number } & Animals;
// let cat :Cat = { name : 'injae' };

// rest parameter, destructuring 할 때 타입 지정
function allPlus(...input :number[]) {
  console.log(input);
}
allPlus(1, 5, 3, 5, 6, 6);

let arr = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

let [var1, var2] = ['hi', 100];
console.log(var1);
let { tv, kind } = { tv : true, kind : 20 };
console.log(tv);

function line({ tv, kind }) {
  console.log(tv, kind);
}