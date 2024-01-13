//unions
let score: string | number = 3;

score = "33";

type user={
    name: string;
    id:number;
}

type Admin={
    username:string;
    id:number;
}

let systemuser: user | Admin = {name:"kenneth",id:33}

systemuser={username:"Karani",id: 33};

//arrays

let Data : number[] = [1,2,3,4];
let Data2:string[] = ["1","2","3"];
let Data3 : (string | number)[] = [1,"hello",3,4];

//functions
function myDetails(id: number | string){
    if(typeof id === "string"){
        id.toLocaleLowerCase();
    }else{
        id + 2;
    }
}
