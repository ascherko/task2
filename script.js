function start() {
    circle();
    paralelepiped();
    ellipse();
    square();
    rectangle();
    right_triangle()
}
function paralelepiped() {
    var paralelepiped = document.getElementById("paralelepiped");

    a = document.getElementById("paralelepipedA").value;
    b = document.getElementById("paralelepipedB").value;
    angle = document.getElementById("paralelepipedCut").value;

    paralelepiped.style.height = (a * 37.936267) / 15 + "px";
    paralelepiped.style.width = (b * 37.936267) / 15 + "px";
    paralelepiped.style.transform = "skew(" + angle * -1 + "deg)";

    document.getElementById("paralelepipedArea").value = (a * b * Math.sin(angle * Math.PI / 180)).toFixed(3);
    document.getElementById("paralelepipedH").value = (document.getElementById("paralelepipedArea").value / a).toFixed(3);
}

function circle() {
    var circle = document.getElementById("circle");

    r = document.getElementById("circleRadius").value;

    circle.style.height = ((r * 2) * 37.936267) / 15 + "px";
    circle.style.width = ((r * 2) * 37.936267) / 15 + "px";

    document.getElementById("circleArea").value = (Math.PI * Math.pow(r, 2)).toFixed(3);
    document.getElementById("circleL").value = (2 * Math.PI * r).toFixed(3);
}

function ellipse() {
    var ellipse = document.getElementById("ellipse");

    ellipse_hr = document.getElementById("ellipseHR").value;
    ellipse_vr = document.getElementById("ellipseVR").value;

    ellipse.style.height = ((ellipse_vr * 2) * 37.936267) / 15 + "px";
    ellipse.style.width = ((ellipse_hr * 2) * 37.936267) / 15 + "px";

    document.getElementById("ellipseArea").value = (Math.PI * ellipse_hr * ellipse_vr).toFixed(3);

    //2π * sqrt( (a2 + b2) / 2 )
    document.getElementById("ellipseL").value = (2 * 3.14 * Math.sqrt((ellipse_vr * ellipse_vr + ellipse_hr * ellipse_hr) / (2 * 1.0))).toFixed(3)
}

function square() {
    var square = document.getElementById("square");

    a = document.getElementById("squareA").value;

    square.style.height = (a * 37.936267) / 10 + "px";
    square.style.width = (a * 37.936267) / 10 + "px";

    document.getElementById("squareD").value = (Math.sqrt(2) * a).toFixed(3);
    document.getElementById("squareArea").value = (Math.pow(a, 2)).toFixed(3);
}

function rectangle() {
    var rectangle = document.getElementById("rectangle");

    a = document.getElementById("rectangleA").value;
    b = document.getElementById("rectangleB").value;

    rectangle.style.height = (a * 37.936267) / 10 + "px";
    rectangle.style.width = (b * 37.936267) / 10 + "px";

    document.getElementById("rectangleD").value = (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))).toFixed(3);
    document.getElementById("rectangleArea").value = (a * b).toFixed(3);
}

function right_triangle() {
    var right_triangle = document.getElementById("right_triangle");

    a = document.getElementById("rightTriangleA").value;
    b = document.getElementById("rightTriangleB").value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    right_triangle.style.borderBottom = (a * 37.936267) / 10 + "px" + " solid grey";
    right_triangle.style.borderRight = (b * 37.936267) / 10 + "px" + " solid transparent";

    document.getElementById("rightTriangleC").value = c.toFixed(3);
    document.getElementById("rightTriangleArea").value = ((a * b) / 2).toFixed(3);
    document.getElementById("rightTriangleCutA").value = (Math.asin(a / c) * 180 / Math.PI).toFixed(3) + "°";
    document.getElementById("rightTriangleCutB").value = (Math.asin(b / c) * 180 / Math.PI).toFixed(3) + "°";
    document.getElementById("rightTriangleCutC").value = 90 + "°";
    document.getElementById("rightTriangleH").value = ((a * b) / c).toFixed(3);
}