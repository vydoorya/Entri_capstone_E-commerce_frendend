import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const userSignupSchema = yup
  .object({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required().min(6).max(20),
    // phone:yup.string().required().min(10).max(12),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
  })
  .required();

const UserSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(userSignupSchema),
  });
  
  const  onSubmit = async (data) => {
    try{
      const result = await axios.post("http://localhost:3000/api/v1/user/signup",data,
      {withCredentials:true}
      );
    console.log(result.data);
    }catch(error){
      console.log(error);
    }
  };



  return (
    <div className='flex justify-center items-center  bg-blue-200 h-screen'>
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3 rounded-lg shadow-md border p-6 w-1/4 bg-gray-100">
    <input
      {...register("email")}
      type="email"
      placeholder="Enter Your Email"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 justify-center text-center"
    />
    <p>{errors.email?.message}</p>
    <input
      {...register("firstName")}
      placeholder="Enter Your First Name"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
    />
    <p>{errors.firstName?.message}</p>
    <input
      {...register("lastName")}
      placeholder="Enter Your Last Name"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
    />
    <p>{errors.lastName?.message}</p>
    <input
      {...register("password")}
      type="password"
      placeholder="Enter Your Password"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
    />
    <p>{errors.password?.message}</p>
    <input
      {...register("confirmPassword")}
      type="password"
      placeholder="Confirm Password"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
    />
    <p>{errors.confirmPassword?.message}</p>
    <input
      type="submit" 
      className="rounded-md bg-blue-500 py-1 text-white cursor-pointer"
    />
  </form>
</div>

    
  );
}

export default UserSignup;


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import axios from 'axios';



// const userSignupSchema = yup
//   .object({
//     email: yup.string().email().required(),
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     password: yup.string().required().min(6).max(20),
//     phone:yup.string().required().min(10).max(12),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref('password'), null], 'Passwords must match')
//       .required(),
//   })
//   .required();

// const UserSignup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors } } = useForm({
//     resolver: yupResolver(userSignupSchema),
//   });
  
//   const  onSubmit = async (data) => {
//     try{
//       const result = await axios.post("http://localhost:3000/api/v1/user/signup",data,
//       {withCredentials:true}
//       );
//     console.log(result.data);
//     }catch(error){
//       console.log(error);
//     }
//   };
//   return (
//     <>
    
//     <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col gap-y-2 rounded-md border p-6">
//     <h1 className='flex justify-center text-green-700 text-5xl pb-3'>User Registration Page</h1>
//       <input
//         {...register("email")}
//         type="email"
//         placeholder="Enter Your Email"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 justify-center text-center"
//       />
//       <p className="block justify-center text-center">{errors.email?.message}</p>

//       <input
//         {...register("firstName")}
//         placeholder="Enter Your First Name"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
//       />
//       <p className="block justify-center text-center">{errors.firstName?.message}</p>

//       <input
//         {...register("lastName")}
//         placeholder="Enter Your Last Name"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
//       />
//       <p className="block justify-center text-center">{errors.lastName?.message}</p>

//       <input
//         {...register("password",)}
//         placeholder="Enter Your Password" 
//         type='password'
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
//       />
//       <p className="block justify-center text-center">{errors.password?.message}</p>

//       <input
//         {...register("confirmPassword")}
//         placeholder="Confirm Password" 
//         type='password'
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
//       />
//       <p className="block justify-center text-center">{errors.confirmPassword?.message}</p>

//         <input
//         {...register("phone")}
//         placeholder="Enter Phone Number"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
//       />
//       <p className="block justify-center text-center">{errors.phone?.message}</p>
//       <input
//         type="submit"
//         className="rounded-md bg-green-700 py-1 text-white cursor-pointer"
//       />
//     </form>
//     </>
//   );
// }

// export default UserSignup;
