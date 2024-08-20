import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

 const UserSignin = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {

    try{
        const output = await axios.post("http://localhost:3000/api/v1/user/signin",data,{withCredentials:true})
        console.log(output.data)
    }catch(err){
        console.log(err)
    }

  }


  return (

    <div className='flex justify-center items-center  bg-blue-200 h-screen'>
    <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col space-y-3 rounded-lg shadow-md border p-6 w-1/4 bg-gray-100">
      <input {...register("email")} placeholder="Email"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center" />
      <p>{errors.email?.message}</p>
        
      <input {...register("password")} 
      placeholder="Password" type="password"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"/>
      <p>{errors.password?.message}</p>
      
      <input type="submit" />
    </form>
    </div>
  );
}
export default UserSignin