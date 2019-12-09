var ejemplo = function () {
    console.log(this); // Hace referencia al objeto Global (o window en el navegador).
}

ejemplo();

var ejemplo2 = function () {
    console.log(this.a); // Hace referencia a la variable "a" definida en el scope global ya que estamos en el contexto global (window en el navegador).
}

var a = 5; // En el caso de node, esto no sirve ya que no se guarda en el contexto global. Para esto, deberíamos hacer global.a = 5;
// global.a = 5;

ejemplo2();