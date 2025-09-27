// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return { x: 0, y: 0 };
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');
            this._defaultLocation = value;
        }
    });

} 
Circle.call({}, 1); // Manually setting 'this'
Circle.apply({}, [1, 2, 3]); // Manually setting 'this' with an array of arguments

const str= 'Hello World';

let x= 10;
let y = x;
x = 20;
console.log(x); // 20
console.log(y); // 10
// Primitives are copied by their value
let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;
console.log(obj1.value); // 20
console.log(obj2.value); // 20
// Objects are copied by their reference

const circle = new Circle(10);
// circle.location = { x: 1 }; // Dynamic nature of objects
// console.log(circle);
// const propertyName = 'center location';
// circle[propertyName] = { x: 2 };
// console.log(circle);
// // // Adding and removing properties
// delete circle.location;
// console.log(circle);

// for (let key in circle) {
    
//     if(typeof circle[key] !== 'function') {
//         console.log(key, circle[key]);
//     }
// }

// const keys = Object.keys(circle);
// console.log(keys);
// if ('radius' in circle) {
//     console.log('Circle has a radius.');
// }

function stopWatch(){
    let startTime, endTime;
    let duration = 0;
    let running = false;

    this.start= function (){
        if(running){
            throw new Error('Stopwatch has already started.');
        }
        running = true;
        startTime = new Date();
    }
    this.stop= function (){
        if(!running){
            throw new Error('Stopwatch is not started.');
        }
        running = false;
        endTime = new Date();
        const seconds = (endTime - startTime) / 1000;
        duration += seconds;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
    this.reset= function (){
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;
    }
}