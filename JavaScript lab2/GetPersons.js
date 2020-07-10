class Person
{
    constructor(firstName,lastName,age,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString()
    {
       // return this.firstName +" " + this.lastName +" "+"(age :"+ this.age +"  ,"+ "email :" +this.email+")" ;
       return `${this.firstName} ${this.lastName}  ${this.age}    ${this.email}`;
    }
}

function getPersonOf()
{
    const p1=new Person('Maria','Pettersson',22,'md@gmail.com');
    const p2=new Person('Lexicon');
    const p3=new Person('Stefan','Larsson',25);
    const p4=new Person('Peter','Jansson',24,'Ptr@live.com');
    return [p1,'\n',p2,'\n',p3,'\n',p4];
 
}
console.log("FirstName    "+" LastName"+" Age"+"  Email");
console.log(getPersonOf().toString());
