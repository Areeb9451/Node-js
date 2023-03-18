//                             IFFI => Immediately Invoked Function Expression
// For using IFFI we have to cerate an anynomous function
// It runs by simply putting (); at the end of IFFI automatically

(function(){
    var a = 'Areeb Ahmad';
    console.log(a);
})();


// Here we can't acces the data from IFFI function directly as thier variable become private
//console.log(a)