import { useRouter } from 'next/router';
import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';

// Step 1: Create a context object
const MyContext = createContext();

function MyContextProvider(props) {

  const router = useRouter();
  const [user, setUser] = useState(() =>
    typeof window !== 'undefined' && localStorage.getItem('shopInUser')
      ? JSON.parse(localStorage.getItem('shopInUser'))
      : null
  );

  const [tempUser, setTempUser] = useState(() =>
    typeof window !== 'undefined' && localStorage.getItem('shopInUser')
      ? JSON.parse(localStorage.getItem('shopInUser'))
      : null
  );

  const [userToken, setUserToken] = useState(() =>
    typeof window !== 'undefined' && localStorage.getItem('userToken')
      ? JSON.parse(localStorage.getItem('userToken'))
      : null
  );


  // Login
  const login = async (phone, password) => {

    console.log(phone, password)
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ "phone": phone, "password": password })
    })
    const userData = await response.json();
    console.log('Inside Login', userData)
    if (response.status === 200) {
      setUser(userData)
      setTempUser(userData)
      setUserToken(userData.token)
      localStorage.setItem('shopInUser', JSON.stringify(userData))
      localStorage.setItem('userToken', JSON.stringify(userData.token))
      router.push(userData.isAdmin ? '/admin' : '/');
    } else {
      toast.error(userData.message)
    }
  }

  // Sign Up

  const SignUp = async (data, e) => {

    const createUser = {
      phone: data.phone,
      password: data.password,
    }
    console.log(createUser)

    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createUser),
    })
    const userData = await response.json();
    console.log(userData);
    if (response.status === 201) {
      setUser(userData.token)
      setUserToken(userData.token)
      localStorage.setItem('userToken', JSON.stringify(userData.token))
      router.push('/');

    } else {
      toast.error(userData.message)
    }
    e.target.reset();
  }


  // Logout user function
  const Logout = async () => {
    setUser(null)
    setUserToken(null)
    localStorage.removeItem('shopInUser');
    localStorage.removeItem('userToken');
    router.push('/');
  }

  const contextValue = {
    user,
    tempUser,
    userToken,
    login,
    SignUp,
    Logout,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };
