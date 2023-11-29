function makeClientOrDoctor(email,password,selected){
 var obj={}
 obj.email=email
 obj.password=password
 obj.selected=selected
 return obj
}
function MakeClientOrDoctor(){
    var obj ={}
    obj.add=add
    obj.listdoctors=[]
    obj.listpatients=[]
    return obj
}
var add=function(email,password,selected){
    var result=makeClientOrDoctor(email,password,selected)
    if(selected==="doctor"){
    this.listdoctors.push(result)}

    if(selected==="patient"){
    this.listpatients.push(result)}
    }

var p=MakeClientOrDoctor()

$("#create-account").on("click", function() {
const email=$("#email").val()
const password=$("#password").val()
var selected = $('input[name="one"]:checked').val();
p.add(email,password,selected)
window.location.href="login.html"
});

