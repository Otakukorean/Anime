"use client";


import React, { useEffect } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from './Navbar';

const Container = (
    {
        children
    }
 : {children : React.ReactNode}) => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
            <Navbar />
        <div className='pt-14 h-full w-full'>

     
        {children}
        </div>
        </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Container