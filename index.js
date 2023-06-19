class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    set area(area) {
        this.radius= Math.sqrt(area/Math.PI);
    }
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    }
}