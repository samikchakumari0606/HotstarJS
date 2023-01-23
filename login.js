
  function myName(n,e,p,u,m,d){
    this.name=n;
    this.email=e;
    this.password=p;
    this.username=u;
    this.mobile=m;
    this.description=d;
  }
async function register(){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let username=document.getElementById("username").value;
    let mobile=document.getElementById("mobile").value;
    let description=document.getElementById("description").value;

    let reg_data= new myName(name,email,password,username,mobile,description);
    console.log("reg_data",reg_data);

   const reg_url=`https://masai-api-mocker.herokuapp.com/auth/register`

    let res= await fetch(reg_url,{
        method:'POST',
        body:JSON.stringify(reg_data),
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data=await res.json();
    console.log("data",data);
}


async function login(){

    let login_data={
        username:document.getElementById("login_username").value,
        password:document.getElementById("login_password").value,

    }

 const login_url=`https://masai-api-mocker.herokuapp.com/auth/login`;
    let res= await fetch(login_url,{
        method:'POST',
        body:JSON.stringify(login_data),
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data=await res.json();
    let token=data.token;
    getProfile(login_data.username,token);
    console.log("data",data);
}


async function getProfile(username,token){

    let pro_url=`https://masai-api-mocker.herokuapp.com/user/${username}`;
    let res=await fetch(pro_url,{

        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,
        }
    })

    let data=await res.json();
    console.log("data",data);
}