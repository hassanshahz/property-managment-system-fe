"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState(false);

  //---------------------------------------- CHECK LOGIN STATUS TO PREVENT ROUTE ------------------------------------------
  const checkLoginStatus = () => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    return !!token;
  };

  useEffect(() => {
    if (checkLoginStatus()) {
      const role = localStorage.getItem("role")?.replace(/"/g, "");
      if (role === "admin") {
        router.push("/route/admin/home");
      } else if (role === "agent") {
        router.push("/route/agent/home");
      } else if (role === "agency") {
        router.push("/route/agency/home");
      } else {
        router.push("/route/user/home");
      }
    }
  }, [router]);

  //---------------------------------------- ONSUBMIT FUNCTION ------------------------------------------
  const onSubmit = async (data) => {
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/client/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("role", result.user.role);
        toast.success("🦄 Login successful!", {
          position: "top-right",
          autoClose: 1000,
        });

        setTimeout(() => {
          const role = result.user.role;
          if (role === "admin") {
            router.push("/route/admin/home");
          } else if (role === "agency") {
            router.push("/route/agency/home");
          } else if (role === "agent") {
            router.push("/route/agent/home");
          } else {
            router.push("/route/user/home");
          }
        }, 1000);
      } else {
        const result = await response.json();
        setError(result.message || "Login failed");
        toast.error(result.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred while trying to log in");
      toast.error("An error occurred while trying to log in");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center min-h-screen bg-[url('/Login.avif')] bg-cover bg-gray-100">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
        />
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-black">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <Image
              src="/Pencil3-Gradient.gif"
              alt="Pencil Gif"
              width={40}
              height={40}
              className="object-contain pb-6 ml-3"
            />
          </div>

          {/* //---------------------------------------- LOGIN FORM ------------------------------------------ */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                id="email"
                type="email"
                placeholder="Email"
                className="mt-1 p-2 border rounded w-full"
                autoComplete="username"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                id="password"
                type={visiblePassword ? "text" : "password"}
                placeholder="Password"
                className="mt-1 p-2 border rounded w-full"
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center mt-1">
              <Checkbox
                checked={visiblePassword}
                onCheckedChange={() => setVisiblePassword(!visiblePassword)}
              />
              <label htmlFor="password" className="ml-2">
                Show Password
              </label>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>

          {/* //---------------------------------------- LINK SIGN UP PAGE  ------------------------------------------ */}
          <div className="flex justify-between mt-6 text-blue-500 text-center">
            <Link href="/auth/signup">
              <div className="flex hover:underline ml-2">Sign Up Here</div>
            </Link>
            <div className="flex hover:underline cursor-pointer">
              <Link href={"/auth/forgot_password"}>Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
