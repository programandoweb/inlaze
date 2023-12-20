import { usePathname , useSearchParams  } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../store/Slices/errorSlice';
import { clearInputErrors } from '../store/Slices/errorInputsSlice';
import { clearSession } from '../store/Slices/userSlice';
import useAsyncStorage from './useAsyncStorage';
import { useRouter } from 'next/navigation';

let BACKEND   =   process.env.NEXT_PUBLIC_BACKENDREMOTE;
const test    =   true;

//const BACKEND   =   process.env.NEXT_PUBLIC_BACKENDREMOTE;
let token       =   false;

const useFormData = (endPoint,autoload) => {
  const searchParams  =   useSearchParams();
  const user_storage  =   useAsyncStorage("user");
  const router        =   useRouter();
  const page          =   searchParams.get("page");
  const per_page      =   searchParams.get("per_page");
  const pathname      =   usePathname();
  const dispatch      =   useDispatch();
  const reduxSession                =   useSelector((state) => state.user.session) || null;
  const reduxFormData               =   useSelector((state) => state.formInputs.data) || null;
  const [loading, setLoading]       =   useState(false);
  const [formData, setFormData]     =   useState({}); //para usar en formularios
  const [response, setResponse]     =   useState({}); //para respuestas del bk, ojporque pouede sobre escribir cuando se hacen más de un llamado
  const [dataSet,setDataSet]        =   useState([]); //para usar en listados 
  const [paginator,setPaginator]    =   useState([]);
  const [percentage,setPercentage]  =   useState(0);
  

  const backend   =   BACKEND;

  if (!endPoint) {
    endPoint = `${BACKEND}${pathname}`;
  }


  const onChange = useCallback((event) => {
    dispatch(clearInputErrors());
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }, []);


  const handleRequest = async (url, method, body, isFileUpload = false) => {
    try {
      setDataSet([]);
  
      if(body&&body.id){
        method="PUT";
      }

      if (!url.includes("?")) {
        url += "?";
      }
  
      if (page) {
        url += "&page=" + page;
      }
  
      if (per_page) {
        url += "&per_page=" + per_page;
      }else{
        url += "&per_page="+process.env.NEXT_PUBLIC_RESULT_X_PAGE;
      }

  
      setLoading(true);
      dispatch(clearInputErrors());
  
      token = (reduxSession && reduxSession.token) || null;
      
  
      // Configuración básica de la solicitud
      const requestOptions = {
        method,
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      };

      if (body&&reduxFormData&&reduxFormData.params) { 

        body.reduxParams  =   reduxFormData;
        
      }
  
      // Agregar cuerpo a la solicitud si es necesario y no es una solicitud GET o HEAD
      if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        if (isFileUpload) {
          // Si se espera una carga de archivos, usa FormData
          const formData = new FormData();
          
          Object.entries(body).forEach(([key, value]) => {
            formData.append(key, value);
          });
  
          // Añade un evento de progreso para la carga de archivos
          const xhr = new XMLHttpRequest();
          xhr.open(method, url, true);
  
          xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
              const percentComplete = (event.loaded / event.total) * 100;
              // Actualiza el estado del porcentaje de subida
              setPercentage(percentComplete);
            }
          });
  
          // Configura las cabeceras
          if (token) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
          }


          xhr.addEventListener('load', () => {
            // La solicitud se completó correctamente, y ahora puedes manejar la respuesta
            if (xhr.status === 200) {
              const responseData = JSON.parse(xhr.responseText);
              // Haz algo con la respuesta del backend
              //console.log(responseData);
              
              if (responseData && responseData.data) {
                //setFormData(responseData.data);
                dispatch(setError(`Atención: ${responseData.message}`));
                setResponse(responseData.data);
                return responseData && responseData.data;

              }        

              return responseData && responseData.data;

            } else {
              // Maneja el caso en que la solicitud no fue exitosa
              dispatch(setError(`Error: ${xhr.status}`));
            }
          });
  
          // Envía la solicitud con FormData
          xhr.send(formData);
          
          return;
        } else {
          requestOptions.body = JSON.stringify(body);
          requestOptions.headers['Content-Type'] = 'application/json';
        }
      }

      const response = await fetch( method==="GET"?url:url.replace(/\/new/g, '') ,requestOptions);
  
      if (!response.ok) {
        const data_error = await response.json();
        console.log(data_error.message)

        if(data_error.message.includes("Route [login] not defined.")){
          /*limpiamos redux y la sesión*/
          dispatch(clearSession());  
          user_storage.removeData();
          return router.replace(`/auth/login`);
        }
        dispatch(setError(`Error ${data_error.status+": "+data_error.message||": "+response.status}`));
        return;
      }

      const data = await response.json();

      if (response.status&&data.message&&method!=='GET') {
        if(!data.success && ((data.code && data.code!=="SUCCESS") || !data.code)){
          let message_new = "";
          if (data.data&&Object.entries(data.data).length>0) {
            Object.entries(data.data).map((row,key)=>{
              return message_new  += row[0]+" "+row[1]+ (key+1===Object.entries(data.data).length?"":",")
            })
          }
          dispatch(setError(`Error: ${data.message}  ${message_new}` ));          
        }else{
          dispatch(setError(`Buenas noticias: ${data.message}`));          
        }        
      }      
  
      if (data && data.data && data.data.data) {
        setDataSet(data.data.data);
      }
  
      if (data && data.data) {
        setPaginator(data.data);
        setFormData(data.data);
      }
      
      setResponse(data.data);

      /*
      if(dispatch&&clearInputs){
        //dispatch(clearInputs());
      }
      */
      
      
      return data && data.data;

    } catch (error) {
      
      dispatch(setError(error.code + ' ' + error.message));
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const simplePost = async (endPoint,formData) => {
    return await handleRequest(endPoint,'POST',formData)
  };

  const simpleGet = async (endPoint,formData) => {
    return await handleRequest(endPoint,'GET',formData)
  };

  const simpleDelete = async (endPoint) => {
    return await handleRequest(endPoint,'DELETE')
  };
  
  const handleSubmit = async (e) => {
    if (e&&e.preventDefault) {
      e.preventDefault();        
    }    
    return await handleRequest(endPoint,'POST',formData)
  };

  const handleSubmitUpload =   async (formData) => {
    const upload_endpoint  =   BACKEND +"/multimedia";
    return await handleRequest(upload_endpoint,'POST',formData,true)
  };

  const request = async (url, method) => {
    // No envíes un cuerpo en las solicitudes GET
    const requestBody = method === 'GET' || method === 'HEAD' ? null : formData;
    return await handleRequest(url || endPoint, method || 'GET', requestBody);
  };

  
  useEffect(()=>{
    if (autoload) {
      request();  
    }    
  },[searchParams])
  
  
  return {  
            loading, 
            formData, 
            onChange, 
            setFormData, 
            handleSubmit ,
            handleSubmitUpload, 
            request, 
            dataSet , 
            paginator,
            percentage,
            pathname,
            response,
            simplePost,
            simpleGet,
            simpleDelete,
            backend
          };
};

export default useFormData;
