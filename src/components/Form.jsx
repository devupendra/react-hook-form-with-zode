"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, "Password should be atleast 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords are not same.",
    path: ["confirmPassword"],
  });

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function onsubmit(data) {
    await new Promise((res) => setTimeout(res, 1500));
    console.log(data);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-3 w-full sm:flex flex-row gap-4">
          {/* Name Input */}
          <div className="w-full mb-1.5">
            <label htmlFor={"name"} className="block mb-0.5">
              Your Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter you name"
              required
              className="placeholder:text-gray-700 border border-gray-700 text-white outline-none bg-inherit w-full py-2 rounded-md px-1 focus:border-green-400"
            />
            {errors.name && (
              <p className="py-0.5 px-2 text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="w-full mb-1.5">
            <label htmlFor={"name"} className="block mb-0.5">
              Your Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter you email"
              required
              className="placeholder:text-gray-700 border border-gray-700 text-white outline-none bg-inherit w-full py-2 rounded-md px-1 focus:border-green-400"
            />
            {errors.email && (
              <p className="py-0.5 px-2 text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="mb-3 w-full sm:flex flex-row gap-4">
          {/* Password Input */}
          <div className="w-full mb-1.5">
            <label htmlFor={"name"} className="block mb-0.5">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Create A Strong Password"
              required
              className="placeholder:text-gray-700 border border-gray-700 text-white outline-none bg-inherit w-full py-2 rounded-md px-1 focus:border-green-400"
            />
            {errors.password && (
              <p className="py-0.5 px-2 text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Confirm password Input */}
          <div className="w-full mb-1.5">
            <label htmlFor={"name"} className="block mb-0.5">
              Confirm Your Password Password
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm Your password"
              required
              className="placeholder:text-gray-700 border border-gray-700 text-white outline-none bg-inherit w-full py-2 rounded-md px-1 focus:border-green-400"
            />
            {errors.confirmPassword && (
              <p className="py-0.5 px-2 text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 w-full text-center">
          <button
            disabled={isSubmitting}
            className="px-6 py-1.5 rounded-full bg-green-500/50 disabled:bg-gray-700 hover:bg-green-500/80 transition-colors ease-in-out duration-500 text-white tracking-wide text-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
