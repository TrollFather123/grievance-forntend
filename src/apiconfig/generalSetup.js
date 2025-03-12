import axios from "axios";
import { authorizationToken } from 'src/consts/localStorage';
import { decrypt } from 'src/utils/encryptDecrypt';

const baseURL = import.meta.env.VITE_BACKEND_URL;
const useAuthentication = false;
let headers = { 'Content-Type': 'application/json'};
let fileHeader = { 'Content-Type': 'multipart/form-data' };
const client = axios.create({ baseURL: baseURL });

// AXIOS GET SERVICE
const axiosGet = async (url, headerAuthenticate = useAuthentication, customHeaders = {}, getAll = false, pagination = false, queryParams = {}) => {

    let parameters = {};
    
    // User Authentication
    let authorizationKey = window.localStorage.getItem(authorizationToken);
    if(authorizationKey) {
       authorizationKey = decrypt(authorizationKey);
       authorizationKey = 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5MjU0MTg1LCJpYXQiOjE3MzkxNjc3ODUsImp0aSI6ImZhNjI2MGZmNzljYTQxYjA5MWI4ZDU0M2NlZDU0MWM4IiwidXNlcl9pZCI6MjA3fQ.8JC5Sfcizn8p9KLzOA2ViGWIWYXUfM2soDyoUhUdVLA' ;
    }
    authorizationKey = 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5NjIyNDEzLCJpYXQiOjE3Mzk1MzYwMTMsImp0aSI6IjM1YTMzYjc2ZjI5ODQ2ZGJhMWYwNGFjZGJmNmUwMzk4IiwidXNlcl9pZCI6MjA3fQ.ixLBoBznJ6flctD93Pt5APl_IPBQFJBJn8JIfCfvDpI' ;
    if(headerAuthenticate && authorizationKey) {
       headers['Authorization'] = authorizationKey;
    }

    // Attach custom headers
    if (Object.keys(customHeaders).length > 0) {
        const merged = { ...headers, ...customHeaders };
        headers = merged;
    }

    // For Pagination
    if (getAll === false && pagination) {
        parameters = {
            page: pagination.currentPage,
            limit: pagination.perPage
        }
    }

    // Attach all query params
    if (Object.keys(queryParams).length > 0) {
        const mergedParams = { ...parameters, ...queryParams };
        parameters = mergedParams;
    }

    // Make request
    try {
        const response = await client.get(url, {
            headers: headers,
            params: parameters
        });
        return response.data;
    }
    catch (error) {
        console.error(error);
        if (error.response?.status === 401) {
              await sessionApiOut(error);
            throw error;
        } else {
            throw error;
        }
    }
}

// AXIOS POST SERVICE
const axiosPost = async (url, headerAuthenticate = useAuthentication, data = null, customHeaders = {}) => {

    // User Authentication
    let authorizationKey = window.localStorage.getItem(authorizationToken);
    if(authorizationKey) {
       authorizationKey = decrypt(authorizationKey);
       authorizationKey = 'Bearer '+ JSON.parse(authorizationKey) ;
    }
    if(headerAuthenticate && authorizationKey) {
       headers['Authorization'] = authorizationKey;
    }

    // Adding custom headers
    if (Object.keys(customHeaders).length > 0) {
        const merged = Object.assign(headers, customHeaders);
        headers = merged;
    }

    // Make request
    try {
        const response = await client.post(url, data, {
            headers: headers
        });
        return response.data;
    } catch (error) {
        console.error(error);
        if (error.response?.status === 401) {
            await sessionApiOut(error);
            throw error;
        } else {
            throw error;
        }
    }
}

// AXIOS PUT SERVICE
const axiosPut = async (url, headerAuthenticate = useAuthentication, data = null, customHeaders = {}) => {

   // User Authentication
   let authorizationKey = window.localStorage.getItem(authorizationToken);
   if(authorizationKey) {
      authorizationKey = decrypt(authorizationKey);
      authorizationKey = 'Bearer '+ JSON.parse(authorizationKey) ;
   }
   if(headerAuthenticate && authorizationKey) {
      headers['Authorization'] = authorizationKey;
   }

   // Adding custom headers
   if (Object.keys(customHeaders).length > 0) {
       const merged = Object.assign(headers, customHeaders);
       headers = merged;
   }

    // Adding custom headers
    if (Object.keys(customHeaders).length > 0) {
        const merged = [...headers, ...customHeaders];
        headers = merged;
    }

    // Make Call
    try {
        const response = await client.put(url, data, {
            headers: headers
        });
        return response.data;
    } catch (error) {
        console.error(error);
        if (error.response?.status === 401) {
            await sessionApiOut(error);
            throw error;
        } else {
            throw error;
        }
    }
}

// AXIOS PUT SERVICE
const axiosPatch = async (url, headerAuthenticate = useAuthentication, data = null, customHeaders = {}) => {

    // User Authentication
    let authorizationKey = window.localStorage.getItem(authorizationToken);
    if(authorizationKey) {
       authorizationKey = decrypt(authorizationKey);
       authorizationKey = 'Bearer '+ JSON.parse(authorizationKey) ;
    }
    if(headerAuthenticate && authorizationKey) {
       headers['Authorization'] = authorizationKey;
    }
 
    // Adding custom headers
    if (Object.keys(customHeaders).length > 0) {
        const merged = Object.assign(headers, customHeaders);
        headers = merged;
    }
 
     // Adding custom headers
     if (Object.keys(customHeaders).length > 0) {
         const merged = [...headers, ...customHeaders];
         headers = merged;
     }
 
     // Make Call
     try {
         const response = await client.patch(url, data, {
             headers: headers
         });
         return response.data;
     } catch (error) {
         console.error(error);
         if (error.response?.status === 401) {
             await sessionApiOut(error);
             throw error;
         } else {
             throw error;
         }
     }
 }

// AXIOS DELETE SERVICE
const axiosDelete = async (url, headerAuthenticate = useAuthentication, customHeaders = {}, queryParams = {}) => {

    let parameters = {};
    
    // User Authentication
    let authorizationKey = window.localStorage.getItem(authorizationToken);
    if(authorizationKey) {
       authorizationKey = decrypt(authorizationKey);
       authorizationKey = 'Bearer '+ JSON.parse(authorizationKey) ;
    }
    if(headerAuthenticate && authorizationKey) {
       headers['Authorization'] = authorizationKey;
    }

    // Attach custom headers
    if (Object.keys(customHeaders).length > 0) {
        const merged = { ...headers, ...customHeaders };
        headers = merged;
    }

    // Attach all query params
    if (Object.keys(queryParams).length > 0) {
        const mergedParams = { ...parameters, ...queryParams };
        parameters = mergedParams;
    }

    // Make call
    try {
        const response = await client.delete(url, {
            headers: headers,
            params: parameters
        });
        return response.data;
    } catch (error) {
        console.error(error);
        if (error.response?.status === 401) {
            await sessionApiOut(error);
            throw error;
        } else {
            throw error;
        }
    }
}

// AXIOS FILE POST SERVICE
const axiosFilePost = async (url, headerAuthenticate = useAuthentication, data = null, customHeaders = {}) => {

    // User Authentication
   let authorizationKey = window.localStorage.getItem(authorizationToken);
   if(authorizationKey) {
      authorizationKey = decrypt(authorizationKey);
      authorizationKey = 'Bearer '+ JSON.parse(authorizationKey) ;
   }
   if(headerAuthenticate && authorizationKey) {
    fileHeader['Authorization'] = authorizationKey;
   }

    // Adding Custom Header
    if (Object.keys(customHeaders).length > 0) {
        const merged = Object.assign(fileHeader, customHeaders);
        fileHeader = merged;
    }

    // Make Call
    try {
        const response = await client.post(url, data, {
            headers: fileHeader
        });
        return response.data;
    } catch (error) {
        console.error(error);
        if (error.response?.status === 401) {
            await sessionApiOut(error);
            throw error;
        } else {
            throw error;
        }
    }
}

// // SESSION LOGOUT 
const sessionApiOut = async (geterror) => {
    try {
        await localStorageRemove();
        console.error(geterror?.response?.data?.details);
        window.location.href = "/";
    } catch (error) {
        if (error?.response?.data.status === 401) {
            await localStorageRemove();
        }
        console.error(error?.response?.data?.message);
        window.location.href = "/";
    }
}

// CLEAR LOCAL STORAGE VARIABLES
const localStorageRemove = async () => {
    window.localStorage.clear();
}

export { axiosGet, axiosPost, axiosPut, axiosDelete, axiosFilePost, axiosPatch, sessionApiOut, localStorageRemove  };