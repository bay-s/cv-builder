import supabase from "../supabase-config";


// GET USER
export async function getUserByName(name){
  const { data, error } = await supabase
  .from('users')
  .select()
  .eq('username',name)
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'get producthistory success',data:data}
    }
  }
}

