import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log(`Solicitud recibida en: ${request.headers}`);
  const requestHeaders = new  Headers(request.headers)
  requestHeaders.set("By","ProgramandoWeb");
  const response =  NextResponse.next({
    request:{
      headers:requestHeaders
    }
  });
  return response;
}

