const BACKEND_URL = '/api'


// view my cart
const index = async () => {
    try {
      const res = await fetch(`${BASE_URL}/cart`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };


// create a cart
const create = async (formData) => {
    try {
        console.log('cart created')
        const res = await fetch(`${BASE_URL}/cart`, {
            method: 'POST',
            headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (error) {
    console.log(error);
    }
};




// update a cart

// 


export {
    signup, 
    
};
