var elem = function(id){return document.getElementById(id)}

//document.getElementById('first').onclick = function(){
//    alert("fdfds")
//}
//function check(){
   // alert(elem('two').value);
//}
elem('one').onclick = function () {
    alert(elem('two').value);
}




//function User(fullName) {
//    this.fullName = fullName;
//
//
//    Object.defineProperty(this, 'firstName', {
//            get: function() {
//                return this.fullName.split(' ')[0];
//            },
//            set: function(newFirstName) {
//                this.fullName = newFirstName + ' ' + this.lastName;
//            }
//    });
//    Object.defineProperty(this, 'lastName', {
//        get: function () {
//            var k = this.fullName.split(' ');
//            return k[1];
//        },
//        set: function (value) {
//            this.lastName = value;
//            var k = this.fullName.split(' ');
//            k[1] = value;
//            this.fullName = k;
//        },
//
//    })
//}
//var vasya = new User("Василий Пупкин");
//
//alert(vasya.firstName);
//alert(vasya.fullName);
//alert( Object.getOwnPropertyNames(User) ); // Василnпge

//function Calculator(){
//    var methods = {
//        '+': function (a,b) {
//            return a+b;
//        },
//        '-': function(a,b){
//            return a-b;
//        }
//    }
//
//    this.calculate = function(operation){
//        var mas = operation.split(' ');
//        var a = +mas[0];
//        var op = mas[1];
//        var b = +mas[2];
//
//        if (!methods[op] || isNaN(a) || isNaN(b)) {
//            return NaN;
//        }
//
//        return methods[op](+a,+b);
//    }
//
//    this.addMethod = function(name,func){
//        methods[name] = func;
//    }
//}
//
//
//var calc = new Calculator();
//calc.addMethod('*',function(a,b){
//    return a*b;
//});
//alert(calc.calculate('2 * 3'));

//function sum(a) {
//
//    var currentSum = a;
//
//    function f(b) {
//        currentSum += b;
//        return f;
//    }
//
//    f.toString = function() {
//        return currentSum;
//    };
//
//    return f;
//}
//
//alert( sum(1)(2) ); // 3
//alert( sum(5)(-1)(2) ); // 6
//alert( sum(6)(-1)(-2)(-3) ); // 0
//alert( sum(0)(1)(2)(3)(4)(5) ); // 15

//var arr= [1,2,3,4,5,6,7];
//
//function filter(array,func){
//    var val=[];
//    for(var i=0;i<array.length;i++){
//        if(func(array[i])){
//            val.push(array[i]);
//        }
//    }
//    return val;
//}
//
//function inBetween(a,b){
//    return function (x){
//        return a>=x && x<=b;
//    }
//}

////////////////////////////////////////////////////Создание функции для сортировки по полю(внутри сорта пишется поле и сортируется по нему)
//var users =[];
//for(var i=4;i>0;i--){
//    users[i]={
//        name: Math.random(),
//        age: i
//    };
//}
//
//
//function byfield (field){
//    return function (a,b){
//        return a[field]> b[field] ? 1:-1;   //a.field приняло бы филд после точки как точное название свойства,а так принимает как переменную и подставляет что надо
//    }
//}
//
//users.sort(byfield('name'));
//users.forEach(function(user){
//    alert(user.name);
//})

/////////////////////////////создание буфера и функционал к нему
//function makebuffer(){
//    var buf = '';
//      function check(rom) {
//        if(!rom)
//            return buf;
//        else
//            buf+=rom;
//
//    }
//    check.clear = function(){
//        buf = '';
//    }
//    return check;
//}
//
//
//
//var test= makebuffer();
//
//test('max');
//test(1);
//alert(test());
//test.clear();
//alert(test());
//////////////////////////////////////////////////
