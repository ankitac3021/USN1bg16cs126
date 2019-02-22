//decision making
/*var age=18;
if(age<18)
{
    console.log("minor");
}
else if(age>=18)
{
    console.log("major");
}

console.log("Using ternary operator")
//con?true:false
age>=18?console.log("major"):console.log("minor");
 function ankita(firstname,lastname)
 {
    console.log(firstname+' '+lastname);
 }
 ankita("ankita","chatterjee");

 //array .... in JS it need not hv all data of the same data type :)

 var names=['ankita','neha','gopu']; //name is a keyword ...so use names
 console.log(names[2]);
 console.log(names.length);
 names.push("usha");
 console.log(names);
 names.unshift("hindu");
 console.log(names);
 names.pop();
 console.log(names);
*/

 console.log("Challenge 1");
 var johnmass,johnheight,markheight,markmass;
johnmass=40;
markmass=60;
johnheight=161;
markheight=171;
var johnbmi,markbmi;
johnbmi=johnmass/(johnheight*johnheight);
markbmi=markmass/(markheight*markheight);
var compare=johnbmi>markbmi;
console.log('Is BMI of John greater than Mark? '+compare);

console.log("Challenge 2");
var tips=[0,0,0];
var bills=[124,48,268];
function calculator()
{
    for(var i=1;i<3;i++)
    {
    if(bills[i]<50)
    {
        tips[i]=(0.2*bills[i]);
        bills[i]=bills[i]+tips[i];
    }
    else if(bills[i]>200 && bills[i]<50)
    {
        tips[i]=(0.15*bills[i]);
        bills[i]=bills[i]+tips[i];
    }
    else
    {
        tips[i]=(0.1*bills[i]);
        bills[i]=bills[i]+tips[i];
    }
    }

    
}
 calculator();
  console.log('Tip array: '+tips);
    console.log('final bill array: '+bills);

    var myDetails={
        firstname: 'ankita',
        lastname: 'chatterjee',
        dob: 1999,
        family: ['ankita','ananta'],
        calcAge: function(birthyear){
            return 2019-birthyear;
        } 
    };

    console.log(myDetails.firstname);
    var z='dob';
    console.log(myDetails[z]);

    myDetails.dob=1998;
    console.log(myDetails);

    //new object
    var sujata=new Object();
    sujata.lastname='chatterjee';
    console.log(sujata);

    console.log('ankita is '+myDetails.calcAge(1999)+' years old.')
