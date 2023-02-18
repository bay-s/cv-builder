import supabase from "../supabase-config";

export async function insertUserData(id,values){
    console.log(values);
    const {data,error} = await supabase 
    .from('Users')
    .insert({
      username:values.username,
      fullname:values.fullname,
      email:values.email,
      user_id:id,
      role:'normal',
      main_role:values.main_role
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
  .from('Users')
  .update({
     username:args.username,
     fullname:args.fullname,
     biodata:args.biodata,
     adress:args.adress,
     saldo:args.saldo
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

// INSERT HISTORY

export async function CheckoutProduct(id,args,amount){
  const randName =  (Math.random() + 1).toString(36).substring(3);
  const { data, error } = await supabase
  .from('checkout_history')
  .insert({
     buyer_id:id,
     total_product:args.item,
     total_price:args.total_price,
     product_id:args.id,
     product_name:args.name,
     checkout_id:randName,
     seller_id:args.seller_id
    })
  .select()
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      const UpdtSaldo = await updateSaldo(amount,id)
      return {error:false,pesan:'checkout success',data:data}
    }
  }
}


// UPDATE SALDO

export async function updateSaldo(amount,id){
  const { data, error } = await supabase
  .from('Users')
  .update({
     saldo:amount
    })
  .eq('user_id',id)
  .select()
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'Update saldo success',data:data}
    }
  }
}


// INSERT PRODUCT
export async function InsertProduct(id,args){
  const { data, error } = await supabase
  .from('product')
  .insert({
     qty:args.qty,
     title:args.title,
     desc:args.quill,
     seller_id:id,
     thumbnail:args.imgUrl,
     price:args.price
    })
  .select()
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'Add Product success',data:data}
    }
  }
}


// CHANGE STATUS CONFIRM
export async function ChangeConfirmStatus(id){
  const { data, error } = await supabase
  .from('checkout_history')
  .update({
    status:true
    })
  .eq('checkout_id',id)
  .select()
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
  console.log(data);
      return {error:false,pesan:'Update status success',data:data}
  }
}