import React from 'react';
import { useForm } from 'react-hook-form';

const UserSignup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 rounded-md border p-6">
      <input
        {...register("email")}
        type="email"
        placeholder="Enter Your Email"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 justify-center text-center"
      />
      <input
        {...register("firstName")}
        placeholder="Enter Your First Name"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <input
        {...register("lastName")}
        placeholder="Enter Your Last Name"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Enter Your Password"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm Password"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <input
        type="submit"
        className="rounded-md bg-blue-500 py-1 text-white cursor-pointer"
      />
    </form>
  );
}

export default UserSignup;