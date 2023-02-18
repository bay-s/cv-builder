import supabase from "../supabase-config";

// GET HISTORY

export async function GetHistory(id){
    const { data, error } = await supabase
    .from('checkout_history')
    .select()
    .eq('buyer_id',id)
     if(error){
      return {error:true,pesan:`Something wrong ${error.message}`}
    }else{
      if(data){
        console.log(data);
        return {error:false,pesan:'get history success',data:data}
      }
    }
  }
  
// GET ALL PRODUCT
export async function GetProduct(){
  const { data, error } = await supabase
  .from('product')
  .select()
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'get producthistory success',data:data}
    }
  }
}

// GET  PRODUCT DETAIL
export async function GetProductDetail(id){
  console.log(typeof id);
  const { data, error } = await supabase
  .from('product')
  .select()
  .eq('id',id)
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'get product history success',data:data}
    }
  }
}


// GET  PRODUCT seller
export async function GetProductSeller(id){
  const { data, error } = await supabase
  .from('product')
  .select()
  .eq('seller_id',id)
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'get producthistory success',data:data}
    }
  }
}

// GET USER
export async function getUserByName(name){
  const { data, error } = await supabase
  .from('Users')
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


// GET PRODUCT CONFIRM
export async function GetProductConfirm(args) {
  const { data, error } = await supabase
 .from('checkout_history')
 .select()
 .contains('seller_id', [`${args}`])
 if(error) return {error:true,pesan:`Something wrong ${error.message}`}
 else{
  console.log(data);
  return {error:false,pesan:'get history success',data:data}
 }
}



// GET  CHECKOUT PRODUCT
export async function GetCheckoutProduct(id){
  const { data, error } = await supabase
  .from('checkout_history')
  .select()
  .eq('checkout_id',id)
   if(error){
    return {error:true,pesan:`Something wrong ${error.message}`}
  }else{
    if(data){
      console.log(data);
      return {error:false,pesan:'get product history success',data:data}
    }
  }
}

