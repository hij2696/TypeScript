var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 타입스크립트 기본 타입 정리
var named = 'hwang';
var age = 26;
var married = true;
var members = ['kim', 'park'];
var names = { name1: 'kim', name2: 'park' };
var a = undefined;
var b = null;
// 타입을 미리 정하기 애매할 때
var phone = 123; // union type
var notebook = [1, '2,', 3];
var obj = { a: '123' };
var mouse; // any
var keyboard; // unknown
// 함수에 타입 지정하는 방법
function multiple(input) {
    return input * 2;
}
multiple(30);
function minus(input) {
    // return input - 2; 에러 발생
}
// Narrowing & Assertion
function plus(input) {
    if (typeof input === 'string')
        return input + '1';
    else
        return input + 1;
}
function funcArr(input) {
    var arr = [];
    arr[0] = input;
}
var animal;
var injae = { name: 'hwanginjae', age: 26 };
var birthPlace = { region: 'seoul' };
var position = { x: 10, y: 20 };
// Literal Types
var monitor;
monitor = 123;
var me;
me = 'hwang';
function func1(input) {
    return 1;
}
var data = {
    name: 'kim'
};
function myFunction(a) {
}
myFunction(data.name);
var myFunction2 = function (input) {
    return 10;
};
var memberInfo = {
    name: 'hwang',
    age: 26,
    plusOne: function (input) {
        return input + 1;
    },
    changeName: function () {
        console.log('Do you want to change your name?');
    }
};
memberInfo.plusOne(memberInfo.age);
memberInfo.changeName();
// typescript로 HTML 변경과 조작할 때 주의점
var title = document.querySelector('#title');
if (title != null)
    title.innerHTML = '충성';
// if (title instanceof Element) title.innerHTML = '충성';
// if (title?.innerHTML != undefined) title.innerHTML = '충성';
// let title2 = document.querySelector('#title') as Element;
// title2.innerHTML = '충성';
var link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement)
    link.href = 'https://kakao.com';
var button = document.querySelector('#button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log('click!');
});
// class 만들 때 타입 지정
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.changeName = function (print) {
        console.log('hi ' + print);
    };
    return Person;
}());
var person1 = new Person('kim');
var person2 = new Person('hwang');
person1.changeName(person1.name);
;
var square = { color: 'red', width: 100 };
;
;
;
var student = { name: 'hwang', score: 123 };
var teacher = { name: 'park', age: 20, score: 456 };
// let cat :Cat = { name : 'injae' };
// rest parameter, destructuring 할 때 타입 지정
function allPlus() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    console.log(input);
}
allPlus(1, 5, 3, 5, 6, 6);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
var _a = ['hi', 100], var1 = _a[0], var2 = _a[1];
console.log(var1);
var _b = { tv: true, kind: 20 }, tv = _b.tv, kind = _b.kind;
console.log(tv);
function line(_a) {
    var tv = _a.tv, kind = _a.kind;
    console.log(tv, kind);
}
