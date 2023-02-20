import { BrowserRouter, Routes, Route, useHref, useNavigate } from "react-router-dom"
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
import { PDFViewer } from '@react-pdf/renderer';

export const AppContext = createContext()

const App = () => {
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



  const [selectedOption, setSelectedOption] = useState('');
  const [skills, setSkills] = useState([
  
  ]);
  const [newSkill, setNewSkill] = useState('');
  
  
const addSkill = (e) => {
  e.preventDefault();
  if(newSkill.length < 1){
alert('INPUT CANT BE EMPTY')
return 
  }
  setSkills([...skills, newSkill]);
  setNewSkill('');
};

const getInputSkill = (e) => {
  setNewSkill(e.target.value);
};

const deleteSkill = (index) => {
  const updatedSkills = [...skills];
  updatedSkills.splice(index, 1);
  setSkills(updatedSkills);
  console.log(skills);
};




  const [datas,setDatas] = useState({
    about:'',
    firstname:'',
    surename:'',
    post:'',
    phone:'',
    email:'',
    city:'',
    province:'',
    birth_date:null,
    start_date:null,
    end_date:null,
    job_title:'',
    employer:'',
    city_job:'',
    country:'',
    school_name:'',
    school_location:'',
    school_graduate:null,
    school_field:'',
    skills:[]
   })

   const [data2,setData2] = useState({
    start_date:[],
    end_date:[],
    job_title:[],
    employer:[],
    city_job:[],
    country:[],
    school_name:[],
    school_location:[],
    school_graduate:[],
    school_field:[]
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

  const submitEducation = () => {
  // e.preventDefault()

  setData2({...data2,
    school_name: [...data2.school_name,datas.school_name],
    school_location: [...data2.school_location,datas.school_location],
    school_graduate: [...data2.school_graduate,datas.job_title],
    school_field: [...data2.school_field,datas.school_field],
    })

    setDatas({...datas,
      school_name:'',
      school_location:'',
      school_graduate:null,
      school_field:'',
      })
  }

  const submitExperience = () => {
    // e.preventDefault()

    setData2({...data2,
      start_date: [...data2.start_date,datas.start_date],
      end_date: [...data2.end_date,datas.end_date],
      job_title: [...data2.job_title,datas.job_title],
      employer: [...data2.employer,datas.employer],
      city_job: [...data2.city_job,datas.city_job],
      country: [...data2.country,datas.country],
      })

    setDatas({...datas,
      start_date:null,
      end_date:null,
      job_title:'',
      employer:'',
      city_job:'',
      country:'',
      })
 
  }
   
  const value = {
    users,
    isLogin,
    productArr,
    handlerChange,
    data:datas,
    data2,
    changeDate,
    submitExperience,
    submitEducation,
    deleteSkill,
    getInputSkill,
    addSkill,
    skills
}
   
   
  return (
<AppContext.Provider value={{value}}>
<BrowserRouter>
<Header />
    <Routes>
      <Route path='/' element={ <Home data={value.data} /> } /> 
      <Route path='/register/' element={ <Register /> } /> 
      <Route path='/login/' element={ <Login isLogin={isLogin} /> } /> 
      <Route path='/create-cv/:id' element={ <CreateCv />} /> 
      <Route path='/print/' element={ <CvPage /> } /> 
      <Route path='/create-cv2/' element={<CreateCv2 method={method} datas={datas} handlerChange={handlerChange}/> } /> 
      <Route path='*' element={<NotFound />} />
    </Routes>
</BrowserRouter>
<Footer />
</AppContext.Provider>

  );
}

export default App;


