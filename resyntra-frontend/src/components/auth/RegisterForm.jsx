import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { registerSchema } from "@/validations/auth";
import useAuth from "@/hooks/useAuth";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import AuthButton from "./AuthButton";
import AuthFooter from "./AuthFooter";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register: registerAccount } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const passwordValue = watch("password");

  const onSubmit = async (values) => {
    try {
      setLoading(true);

      await registerAccount({
        username: values.username,
        email: values.email,
        password: values.password,
      });

      toast.success("Account created! Please sign in.");
      navigate("/login");
    } catch (error) {
      toast.error(
        error?.response?.data?.detail || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Create your account"
        subtitle="Start your AI-powered research journey"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <AuthInput
          label="Username"
          placeholder="Choose a username"
          icon={User}
          autoComplete="username"
          register={register("username")}
          error={errors.username}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={Mail}
          autoComplete="email"
          register={register("email")}
          error={errors.email}
        />

        <div className="space-y-2">
          <PasswordInput
            label="Password"
            placeholder="Create a password"
            autoComplete="new-password"
            register={register("password")}
            error={errors.password}
          />
          <PasswordStrength password={passwordValue} />
        </div>

        <PasswordInput
          label="Confirm password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <AuthButton loading={loading}>Create Account</AuthButton>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign in"
          to="/login"
        />
      </form>
    </AuthCard>
  );
};

export default RegisterForm;