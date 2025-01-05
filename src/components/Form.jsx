"use client";

import { useState } from "react";
import CustomInput from "./CustomInput";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    if (password !== confirmPassword) {
      setErrors(["Password and Confirm password are not same."]);
      setIsSubmitting(false);
      return;
    }
    await new Promise((res) => setTimeout(res, 2000));
    setEmail("");
    setName("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li
                key={index}
                className="bg-red-100 text-red-500 px-4 py-2 rounded mb-3"
              >
                {error}
              </li>
            ))}
          </ul>
        )}
        <div className="mb-3 w-full sm:flex flex-row gap-4">
          <CustomInput
            value={name}
            label="Your Name"
            name="your-name"
            type="text"
            placeholder="Enter you name"
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            value={email}
            label="Your Email"
            name="your-email"
            type="email"
            placeholder="Enter you email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 w-full sm:flex flex-row gap-4">
          <CustomInput
            label="Create Password"
            value={password}
            name="your-password"
            type="password"
            placeholder="Create a strong password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomInput
            value={confirmPassword}
            label="Confirm Password"
            name="confirm-password"
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
