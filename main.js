function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();

function makePatient(name,lastname,email,password){
 var obj={}
 obj.id=id()
 obj.name=name
 obj.lastname=lastname
 obj.email=email
 obj.password=password
 return obj
}
function Makedoctor(email,pass){
    var obj ={}
    obj.email=email
    obj.pass=pass
    obj.add=add
    obj.listpatients=[]
    return obj
}
var add=function(name,lastname,email,password){
var result=makePatient(name,lastname,email,password)
this.listpatients.push(result)

    }

var p=Makedoctor()

$("#create-account").on("click", function() {
const name=$("#name").val()
const lastname=$("#lastname").val()
const email=$("#email").val()
const password=$("#password").val()
p.add(name,lastname,email,password)
console.log(p)
});
$("#create-account").on("click", function() {
var DoctorJason = JSON.stringify(p);
localStorage.setItem('doctor', DoctorJason);
console.log(DoctorJason)
});
