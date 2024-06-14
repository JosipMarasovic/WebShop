
export async function fetchAllBlogs() {
  try {
    const response = await fetch('http://localhost:3000/blog'); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }
}


export async function getAllProducts(){
  try{
    const response = await fetch(`http://localhost:3000/products`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }


}


export async function getCategories(){
  try{
    const response = await fetch(`http://localhost:3000/products/categories`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }

}

export async function getProductsByCategoryId(categoryId){
try{
  const response = await fetch(`http://localhost:3000/products/category/${categoryId}`)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error fetching blog data:', error);
  return [];
}
}




export async function getPopularCategoryProducts(categoryId){
  try{
    const response = await fetch(`http://localhost:3000/products/category/${categoryId}/popular`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }

}

export async function getProductById(id) {
  try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching product data:', error);
      throw error;
  }
}





export async function getPopularProducts(){
  try{
    const response = await fetch(`http://localhost:3000/products/popular`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }

}


export async function fetchCart(customerId) {
  try {
    const response = await fetch(`http://localhost:3000/cart/${customerId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cart data:', error);
    return [];
  }
}


export async function createCustomerAndAddToCart(customerData, productId, quantity) {
  try {
    const response = await fetch(`http://localhost:3000/cart/createCustomerAndAddToCart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ customerData, productId, quantity })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}






export async function addItemToCart(customerId, productId, quantity) {
  try {
    const response = await fetch(`http://localhost:3000/cart/add/${customerId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, quantity })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return null;
  }
}

export async function removeItemFromCart(customerId, productId) {
  try {
    const response = await fetch(`http://localhost:3000/cart/remove/${customerId}/${productId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error removing item from cart:', error);
    return null;
  }
}

export async function clearCart(customerId) {
  try {
    const response = await fetch(`http://localhost:3000/cart/clear/${customerId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error clearing cart:', error);
    return null;
  }
}


