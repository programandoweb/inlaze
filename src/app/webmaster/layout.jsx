"use client";
import useAsyncStorage from "@/hooks/useAsyncStorage";
import { useEffect, useState } from "react";
import FullWidth from "../../../components/Loading/fullWidth";
import { useRouter } from 'next/navigation';
import { setSession } from '../../store/Slices/userSlice';
import Dashboard from '../../../Theme/DashboardTenantWebmaster';
import { routes_modules } from './routes';
import { useDispatch } from 'react-redux';

const st          =   "user";
const thismodule  =   "Webmaster";

const RootLayout  =   ({ children })  =>  {
  const dispatch  =   useDispatch();
  const [loading, setLoading]    =   useState(true);    
  const   storage   =   useAsyncStorage(st);
  const   router    =   useRouter();

  useEffect(()=>{

    const checkSesion =   async()=>{
      const response  =   await storage.getData(st);

      if (!response) {
        return router.replace(`/auth/login`); 
      }else if(response.token && response.user && response.user.tenant_type && response.user.tenant_type && response.user.tenant_type.label!==thismodule){
        return router.replace(`/auth/login`); 
      }else if(response.token && response.user && response.user.tenant_type && response.user.tenant_type && response.user.tenant_type.label===thismodule){
        dispatch(setSession(response));
      } else if(!response.token){
        return router.replace(`/auth/login`); 
      }   
      setLoading(false) 
    }    
    checkSesion()

  },[])

  return (
    <>       
      
      {
        !loading&&(
          <Dashboard routes={routes_modules}>
            {
              children
            } 
          </Dashboard>
        )
      }      
      {
        loading&&(
          <FullWidth/>
        )
      }      
    </>
  )
}

export default RootLayout;