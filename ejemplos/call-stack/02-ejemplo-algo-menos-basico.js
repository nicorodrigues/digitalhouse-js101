var num = 10;

function a() {
    console.log('Número: ', num2);
    b();
}

function b() {
    console.log('Número: ', num);
    c();
}

function c() {
    console.log('Casi ultimo');
    d();
}
function d() {
    console.log('Hello world');
}

a();

var num2 = 5;
