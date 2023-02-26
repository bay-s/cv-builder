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
import CvPage from "./pages/cv-page"
import CreateCv from "./pages/create-cv"
import CreateCv2 from "./pages/create-cv2"
import Template from "./pages/template"
import CvTemplate2 from "./pages/cv-template2"
import CvTemplate from "./pages/cv-template"
import CvPage2 from "./pages/cv-page2"


export const AppContext = createContext()

const App = () => {
  const [users,setUsers] = useState([]);
  const [isLogin,setIsLogin] = useState(false)
  const [data,setData] = useState([])

  const product = Cookies.get('product') 
  const productArr = product === undefined ? '' : JSON.parse(product)
  const template = Cookies.get('template') 
  const templatetArr = template=== undefined ? '' : JSON.parse(template)
  
  
  useEffect(() => {

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
    .from('users')
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
    fullname:'',
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
    skills:[],
    hide:false,
    imgUpload:'',
    url:'',
    name:'',
    imgName:'',
    template:templatetArr
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

const ImageChange = event => {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const randName =  (Math.random() + 1).toString(36).substring(3);
      const imgStr = img.name.split(".")
      setDatas({...datas,
        imgUpload: URL.createObjectURL(img),
        url:img,
        name:img.name,
        hide:true,
        imgName:`${randName}.${imgStr[1]}`
         })
         console.log(URL.createObjectURL(img));
      }
      console.log(datas.imgUpload);
  };

const changeDate  = (name, date) => {
    setDatas(prevData => ({
      ...prevData,
      [name]: date
    }));
}


  const method = {
  selectedOption
   }
console.log(datas.template);
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
   
  const chooseTemplate = (id) => {
    // e.preventDefault()
    // const name = e.target.dataset.template
    console.log(id);
    setDatas({...datas,
     template:id,
      })

  }

  const value = {
    users,
    userData:data,
    chooseTemplate,
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
    skills,
    ImageChange 
}
   
 
let templates;
switch (datas.template) {
  case 'template0':
    templates = <CvPage />;
    break;
  case 'template1':
    templates = <CvPage2 />;
    break;
  default:
    templates = null;
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
      {/* <Route path='/print/' element={ <CvPage /> } />  */}
      <Route path='/print/' element={ isLogin ? templates : <Login isLogin={isLogin} />} /> 
      <Route path='/create-cv2/' element={<CreateCv2 method={method} datas={datas} handlerChange={handlerChange}/> } /> 
      <Route path='/template/' element={ isLogin ?  <Template /> :  <Login isLogin={isLogin} />  } /> 
      <Route path='/template2/' element={ <CvTemplate /> } /> 

      <Route path='*' element={<NotFound />} />
    </Routes>
</BrowserRouter>
<Footer />
</AppContext.Provider>

  );
}

export default App;


