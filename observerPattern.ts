interface userInfo{
    id:number,
    name:string;
    email:string;
}

interface observer{
    register(userInfo:userInfo):void;
    unregister(userInfo:userInfo):void;
}

class store implements observer{

    private registeredUsers:Map<number,userInfo>=new Map();
    private productIsInStock:boolean=false;

    public register(usr:userInfo):void{
        this.registeredUsers.set(usr.id,usr);
        console.log("register successful")
    }

    public unregister(usr:userInfo):void{
        this.registeredUsers.delete(usr.id);
        console.log("unregistered successful")
    }

    public updateProduct(val:boolean){
        this.productIsInStock=true;
        this.notify();
    }
    private notify(){
        this.registeredUsers.forEach((val,key)=>{
            console.log("notified user",val.email)
        })
    }
}




class userDetails{
    userInfo!: userInfo;
    constructor(usr:number){
     this.userInfo={
        id:usr,
        name:'name'+usr,
        email:'name'+usr+'@gmail.com'
     };
     console.log("created acc succ"+usr);
    }
}

const Store= new store();
const usr1= new userDetails(1);
const usr2= new userDetails(2);
Store.register(usr1.userInfo);
Store.register(usr2.userInfo);
//notifies users
Store.updateProduct(true);


