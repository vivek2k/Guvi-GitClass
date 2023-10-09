class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(sampleCircle) {
        return this.radius
    }

    getColor(sampleCircle) {
        return this.color
    }

    getArea(sampleCircle) {
        return Number(3.14 * this.radius * this.radius)
    }

    getCirumcumference(sampleCircle) {
        return Number(3.14 * 2 * this.radius)
    }

    setRadius(sampleRadius) {
        this.radius = sampleRadius
    }

    setRadius(sampleColor) {
        this.color = sampleRadius
    }
}


const circle1 = new Circle(10, "red")

console.log(circle1.getRadius())

console.log(circle1.getColor())

console.log(circle1.getArea())

console.log(circle1.getCirumcumference())

circle1.setRadius(20)

console.log(circle1.getRadius())

