type User={
    readonly _id:number;
    name:string;
    email:string;
    isActive:boolean
    creditcard?:number;
}

/*function createUser(user:User):User{
    return {name:"",email:"",isActive:true};
    }
createUser({name:"",email:"",isActive:true})*/



type cardNumber ={
    cardnumber: number
}
type cardDate = {
    carddate: string
}

type cardCvv = {
    cvv: number
}
type cardDetails = cardNumber & cardDate & cardCvv

let myuser : User ={
    _id: 1234,
    name:"kenneth",
    email:"ken@k.com",
    isActive: false
}