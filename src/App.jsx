import React, { useContext, useEffect,useState } from 'react'
import './output.css';
import Login from './components/auth/Login';
import Empdash from './components/dashboard/Empdash';
import Admindash from './components/dashboard/Admindash';
import { getLocalStorage, setLocalStorage } from './utils/localstorage';
import {AuthContext} from './context/AuthProvider';
import Signup from './components/auth/signup';


const App = () => {

    const data=useContext(AuthContext);
    // console.log(data);
    const [dashboardSelector, setdashboardSelector] = useState('');
    const [user, setuser] = useState(null);

    

        const logouthandler=()=>{
         setuser(null);
         localStorage.setItem('loggedinuser','');
        }


     


        useEffect(()=>{

          const emp=getLocalStorage().emp;
          const ad=getLocalStorage().ad;

          setLocalStorage(emp,ad);
          console.log(data)

        })

     


        useEffect(()=>{
           if (data) {
            if (localStorage.getItem("loggedinuser")!=='') {
             const loggedin=JSON.parse(localStorage.getItem("loggedinuser"));

            if (loggedin) {
              
              const role=loggedin.role;
              const udata=loggedin.userdata;
              setuser(role);

              if (role=="employee") {
                setdashboardSelector(<Empdash empdata={udata}  logout={logouthandler} />);
              }else if(role=="admin"){
                setdashboardSelector(<Admindash data={data.emp} empdata={udata} logout={logouthandler}/>);
              }

        } 
            }
            }},[data]);





const handleLogin=(email,password)=>{
   if (data) {
    const emp= data.emp;
    const ad=data.ad;

      const empdata=emp.find((e)=>e.email==email && e.password==password);
      const addata=ad.find((e)=>e.email==email && e.password==password);
      if (empdata) {
        localStorage.setItem('loggedinuser',JSON.stringify({role:'employee',userdata:empdata}))
        console.log("this is employee"+empdata.name+empdata.id);
        setuser(empdata.name);
        setdashboardSelector(<Empdash empdata={empdata} logout={logouthandler}/>)

      }
     
      else if (addata) {
        localStorage.setItem('loggedinuser',JSON.stringify({role:'admin',userdata:addata}))
        console.log("this is admin"+addata.name+addata.id);
        setuser(addata.name);
        setdashboardSelector(<Admindash data={data.emp} empdata={addata} logout={logouthandler}/>)

      }else{
        alert("Invalid Crendentials");
      }

     
   }
  }

  

   

  const Signuphandler=(name,email,pass)=>{
    const data=JSON.parse(localStorage.getItem('employees'));
    if (data) {
      const empdata=data.find((e)=>e.email==email && e.password==pass);
      localStorage.setItem('loggedinuser',JSON.stringify({role:'employee',userdata:empdata}))
      setuser(name);
      setdashboardSelector(<Empdash empdata={empdata} logout={logouthandler}/>)
    }

  }
  const [logsigndash, setlogsigndash] = useState('log')


  const dashboradchange = (dash) => {
    setlogsigndash(dash); // Only store string state
  };


  return (
    <>
    
    <div style={{backgroundColor:'#111111'}} className=" w-screen h-screen" >
      {!user?  logsigndash === "log" ? (
        <Login Loginhandler={handleLogin} change={dashboradchange} />
      ) : (
        <Signup Signuphandler={Signuphandler} change={dashboradchange} />
      ) :dashboardSelector}
      {/* <Empdash/> */}
      {/* <Admindash/> */}
    </div>

    </>
  )
}

export default App
