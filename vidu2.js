function myFunction() {
    document.getElementById("demo").innerHTML = "Paragragh changed.";
}

var a = 5, b = 7;
var x = 0.0;
if (a != 0) {
    x = -b/a;
    document.write("Nghiem cua phuong trinh la: " + x);
} else if (b != 0) {
    document.write("Phuong trinh vo nghiem");
} else {
    document.write("Phuong trinh co vo so nghiem");
}