import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    return async ()=> {
        console.log("Token Refreshed hook ran");

        const response = await axios.get('/auth/refreshToken',{
            withCredentials: true
        });

        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.access_token);
        //     return{...prev,
        //         role: response.data.role,
        //         user_id: response.data.user_id,
        //         access_token: response.data.access_token}
        // });
        setAuth(response?.data);
        return response.data.access_token;
    }
//   return refresh;
}

export default useRefreshToken