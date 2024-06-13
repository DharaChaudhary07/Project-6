class Shape {
    constructor() {}
  
    Rectangle(width, height) {
        console.log(`Rectangle area: ${width * height}`); 
        document.getElementById("rectangle").innerHTML = `Rectangle area: ${width * height}`;
    }
  
    Circle(radius) {
        console.log(`Circle area: ${3.14 * radius * radius}`)
        document.getElementById("circle").innerHTML = `Circle area: ${3.14 * radius * radius}`;
    }
  }

let shape1 = new Shape();
shape1.Rectangle(4, 5);

let shape2 = new Shape();
shape2.Circle(3);