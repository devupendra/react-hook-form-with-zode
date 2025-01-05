"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema } from "@/utils/schema";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function onsubmit(data) {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: 12345678,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      alert("Submitting form failed.");
      return;
    }

    if (result.errors) {
      const errors = result.errors;
      if (errors.name) {
        setError("name", { type: "server", message: errors.name });
      } else if (errors.email) {
        setError("email", { type: "server", message: errors.email });
      } else if (errors.password) {
        setError("password", { type: "server", message: errors.password });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("Something went wrong.");
      }
    }
    // reset();
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
