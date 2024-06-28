

export const addCart = async(product)=>{
    const url = new URL(`http://localhost:5000/cart`)
    const body = {id: product.id}
    const response = await fetch(url,{
      method: 'POST',
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(body)
    });
    if(!response.ok){
      throw new Error(`Http err! Status: ${response.status}`);
      
  }
  
  }