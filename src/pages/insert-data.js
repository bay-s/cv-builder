import supabase from "../supabase-config";

export async function insertUserData(id,values){
    console.log(values);
    const {data,error} = await supabase 
    .from('users')
    .insert({
      username:values.username,
      fullname:values.fullname,
      email:values.email,
      user_id:id,
      role:'normal',
    })
    .select()
    if(error){
      console.log(error.message);
      return {error:true,pesan:`Something wrong ${error.message}`}
    }
    if(data){
      console.log('tes');
      return {error:false,pesan:`Register Success !`,data:data}
    }
}

export async function RegisterAccount(values){
  const { data, error } = await supabase.auth.signUp({
      email:values.email ,
      password:values.password 
    })
  if(error){
  return {error:true,pesan:`Something wrong ${error.message}`}
    }else {
return {error:false,pesan:`Register Success`,data:data}
    }
}

export async function UserLogin(values){
  const { data, error } = await supabase.auth.signInWithPassword({
    email:values.email,
    password:values.password,
  })

  if(error){
   return {error:true,pesan: `Something wrong ${error.message}`}
   }else{
     console.log(data);
     return {error:false,pesan:'Login success',data:data}
   }


}

// UPDATE USER PROFILE

export async function UpdateUserProfile(id,args){
  const { data, error } = await supabase
  .from('users')
  .update({
     username:args.username,
     fullname:args.fullname,
     biodata:args.biodata,
    })
  .eq('user_id',id)
  .select()
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'Update Profile success',data:data}
    }
  }
}
