function addTwo(num:number):number{
    return num+2
   // return "hello"
}

function getUpper(val:string){
    return val.toUpperCase()
}
function signUp(name:string,email:string,password:number,isPaid:boolean){}

//arrow function and default value
let loginUser = (name:string,email:string,isPaid:boolean = false)=>{}

const getHello =(s:string):string=>{
    return "";
}
const heros = ["thor","spiderman","ironman"]
heros.map((hero):string=>{
    return `hero is ${hero}`;
})
//void functions
function consoleError(errmsg:string):void{
    console.log(errmsg);
}
//never functions
function handleError(errmsg:string): void{
    throw new Error(errmsg);
}
signUp("kenneth","ken@infinite.com",3340,false);
loginUser("K","K@k.com")
addTwo(6);
getUpper("Kenneth");
export{};