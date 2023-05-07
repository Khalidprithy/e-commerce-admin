import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';

// Step 1: Create a context object
const MyContext = createContext();

function MyContextProvider(props) {
  const router = useRouter();
  const [user, setUser] = useState(() =>
    Cookies.get('shopInUser')
      ? JSON.parse(Cookies.get('shopInUser'))
      : null
  );

  const [tempUser, setTempUser] = useState(() =>
    Cookies.get('shopInUser')
      ? JSON.parse(Cookies.get('shopInUser'))
      : null
  );

  const [userToken, setUserToken] = useState(() =>
    Cookies.get('userToken')
      ? JSON.parse(Cookies.get('userToken'))
      : null
  );

  const [isLoading, setIsLoading] = useState(false);

  // Login
  const login = async (phone, password) => {
    setIsLoading(true);
    console.log(phone, password);
    const response = await fetch(
      'https://e-commerce-admin-fv58.onrender.com/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ phone: phone, password: password }),
      }
    );
    const userData = await response.json();
    console.log('Inside Login', userData);
    setIsLoading(false);
    if (response.status === 200) {
      setUser(userData);
      setTempUser(userData);
      setUserToken(userData.token);
      Cookies.set('shopInUser', JSON.stringify(userData), { secure: true });
      Cookies.set('userToken', JSON.stringify(userData.token), { secure: true });
      router.push(userData.isAdmin ? '/admin' : '/');
    } else {
      toast.error(userData.message);
    }
  };

  // Sign Up

  const SignUp = async (data, e) => {
    const createUser = {
      phone: data.phone,
      password: data.password,
    };
    console.log(createUser);

    const response = await fetch(
      'https://e-commerce-admin-fv58.onrender.com/api/auth/signup',
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createUser),
      }
    );
    const userData = await response.json();
    console.log(userData);
    if (response.status === 201) {
      setUser(userData.token);
      setUserToken(userData.token);
      Cookies.set('userToken', JSON.stringify(userData.token), { secure: true });
      router.push('/');
    } else {
      toast.error(userData.message);
    }
    e.target.reset();
  };

  // Logout user function
  const Logout = async () => {
    setUser(null);
    setUserToken(null);
    Cookies.remove('shopInUser', { secure: true });
    Cookies.remove('userToken', { secure: true });
    router.push('/');
  };

  const contextValue = {
    user,
    tempUser,
    userToken,
    isLoading,
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
