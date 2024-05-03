import { ILoginFields, IRegisterFields } from "@/types/type";
import { STATUS } from "@/utils";
import api from "../middleware/middleware";

export const onLogin = async (payload: ILoginFields) => {
  try {
    const {data} = await api.post('/auth/login', payload);
    
    if (data.status === STATUS.UNPROCESSABLE_ENTITY) return { success: false, response: data.message };
    if(data.status === STATUS.BAD_REQUEST) return { success: false, response: data.message };

    localStorage.setItem("access-token", data.data.accessToken);
    return { success: true, response: data.message };
    
  } catch (error:any) {
    // console.error(error); 
    return { success: false, response:  error.response?.data?.message || "Something went wrong", };
  }
}

export const onRegister = async (payload: IRegisterFields) => {
    try {
        const response = await api.post('/auth/register', payload);

        if (response.status === STATUS.UNPROCESSABLE_ENTITY) return { success: false, response: response.data.message };
        if(response.status === STATUS.BAD_REQUEST) return { success: false, response: response.data.message };

        return { success: true, response: response.data };
        
    } catch (error) {
        console.error(error); 
        return { success: false, response: (error as any).response.data.message };
    }
}