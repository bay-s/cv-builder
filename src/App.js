import { BrowserRouter, Routes, Route, useHref } from "react-router-dom"
import { createContext, useEffect, useRef, useState } from "react"
import supabase from "./supabase-config"
import Login from "./pages/login"
import Register from "./pages/register"
import Header from "./pages/header"
import Home from "./pages/home"
import Cookies from 'js-cookie'
import Footer from "./pages/footer"
import NotFound from "./pages/404.j"
import Invoice from "./pages/invoice"
import CvPage from "./pages/cv-page"
import CreateCv from "./pages/create-cv"
import CvExperience from "./pages/cv-experience"
import CreateCv2 from "./pages/create-cv2"


export const AppContext = createContext()

function App() {
  const [users,setUsers] = useState([]);
  const [isLogin,setIsLogin] = useState(false)
  const [data,setData] = useState([])

  const product = Cookies.get('product') 
  const productArr = product === undefined ? '' : JSON.parse(product)

  useEffect(() => {
    console.log(productArr);
    const user = getUsers()
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_IN') {
        // console.log('SIGNED_IN', session)
        const { data, error } = supabase.auth.setSession(session.refresh_token)
        // setIsLogin(true)
        setUsers(user)
        console.log("log int");
        // console.log(session.refresh_token);
      }
      if (event == 'TOKEN_REFRESHED') {
        // console.log('TOKEN_REFRESHED', session)
        const { data, error } = supabase.auth.setSession(session.refresh_token)
        // console.log(session.refresh_token);
      }
      if (event == 'SIGNED_OUT') {
        setIsLogin(false) 
        window.location.href = "/";
        console.log("logout");
      }
    })

  },[])


  const getUsers = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if(user){
      console.log("user logged in");
      console.log(user);
      setUsers(user)
      setIsLogin(true)
    }else{
      console.log("not login");
      setIsLogin(false)
    }
    const check =  user ? fetchData(user.id) :  setIsLogin(false)
  }

  const fetchData = async (id) => {
    const {data,error} = await supabase
    .from('Users')
    .select()
    .eq('user_id',id)
    .single()
    if(error){
      console.log(error);
    }
    if(data){
      setData(data)
      const check = data !== null ? setIsLogin(true)  : setIsLogin(false) 
    }
  }


      
const value = {
 data,
 users,
 isLogin,
 productArr
  }


  const [selectedOption, setSelectedOption] = useState('');
  
  const [datas,setDatas] = useState({
    about:'',
    firstname:'',
    surename:'',
    post:'',
    phone:'',
    email:'',
    city:'',
    province:'',
    start_date:null,
    end_date:null,
    birth_date:null,
    job_title:'',
    employer:'',
    city_job:'',
    country:'',
    school_name:'',
    school_location:'',
    school_graduate:null,
    school_field:''
   })

   
const handlerChange = (e) => {
       const {name,value} = e.target
       setDatas({...datas,
           [name]:value
           })
   }

const changeDate  = (name, date) => {
    setDatas(prevData => ({
      ...prevData,
      [name]: date
    }));
}


  const method = {
  selectedOption
   }
console.log(method);
  return (
<AppContext.Provider value={{value}}>
<BrowserRouter>
<Header />
    <Routes>
      <Route path='/' element={ <Home data={value.data} /> } /> 
      <Route path='/register/' element={ <Register /> } /> 
      <Route path='/login/' element={ <Login isLogin={isLogin} /> } /> 
      <Route path='/create-cv/:id' element={ <CreateCv changeDate={changeDate } datas={datas} handlerChange={handlerChange} method={method}/>} /> 
      <Route path='/cv-page/' element={ <CvPage /> } /> 
      <Route path='/create-cv2/' element={<CreateCv2 method={method} datas={datas} handlerChange={handlerChange}/> } /> 
      <Route path='*' element={<NotFound />} />
    </Routes>
</BrowserRouter>
<Footer />
</AppContext.Provider>

  );
}

export default App;


