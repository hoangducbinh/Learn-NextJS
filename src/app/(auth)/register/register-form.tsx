
"use client"

import { z } from "zod"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterBody, RegisterBodyType } from "@/schemaValidations/auth.schema"
import envConfig from "@/config"


const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const RegisterForm =()=> {
  
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: '',
      name:'',
      password:'',
      confirmPassword:''
    },
  })
 
  async function onSubmit(values: RegisterBodyType) {
   const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,{
      body: JSON.stringify(values),
      headers:{
        "Content-Type": 'application/json'
      },
      method:'POST'
    }).then((res)=> res.json())
    console.log(result);
    
  }

  return (
  
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-[400px] w-full">
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}

        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
             
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
              
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
             
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
              
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
             
              <FormControl>
                <Input placeholder="Confirm Password" type="password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
              
        />
        <Button className="w-full !mt-8" type="submit">Sign Up</Button>
      </form>
    </Form>

  )
}


export default RegisterForm