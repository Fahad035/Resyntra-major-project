import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import { forgotPassword } from "@/api/auth";
import { forgotPasswordSchema } from "@/validations/auth";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await forgotPassword(values);
      toast.success(response.message);
    } catch (error) {
      toast.error(error?.response?.data?.detail || "Unable to process the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Reset your password"
          subtitle="Enter your email and we'll send you a secure reset link."
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
          <AuthButton loading={loading}>Send Reset Link</AuthButton>
          <Link to="/login" className="block text-center text-sm font-medium text-(--primary) hover:text-(--primary-hover)">
            Back to sign in
          </Link>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgotPassword;