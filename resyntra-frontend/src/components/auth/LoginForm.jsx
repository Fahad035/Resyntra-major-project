import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { loginSchema } from "@/validations/auth";
import useAuth from "@/hooks/useAuth";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import Divider from "./Divider";
import AuthButton from "./AuthButton";
import AuthFooter from "./AuthFooter";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);

      await login({
        email: values.email,
        password: values.password,
      });

      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error?.response?.data?.detail || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Welcome back"
        subtitle="Sign in to continue using Resyntra"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <AuthInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={Mail}
          autoComplete="email"
          register={register("email")}
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          register={register("password")}
          error={errors.password}
        />

        <RememberMe register={register} />

        <AuthButton loading={loading}>Sign In</AuthButton>

        <Divider />

        <AuthFooter
          text="Don't have an account?"
          linkText="Create account"
          to="/register"
        />
      </form>
    </AuthCard>
  );
};

export default LoginForm;