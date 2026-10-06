import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";
import { resetPassword } from "@/api/auth";
import { resetPasswordSchema } from "@/validations/auth";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || "";
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async (values) => {
    if (!token) {
      toast.error("This reset link is missing or invalid.");
      return;
    }

    try {
      setLoading(true);
      const response = await resetPassword({ token, password: values.password });
      toast.success(response.message);
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.detail || "Unable to reset your password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader title="Create a new password" subtitle="Choose a strong password for your Resyntra account." />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <PasswordInput
            label="New password"
            placeholder="Create a new password"
            autoComplete="new-password"
            register={register("password")}
            error={errors.password}
          />
          <PasswordInput
            label="Confirm password"
            placeholder="Re-enter your new password"
            autoComplete="new-password"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />
          <AuthButton loading={loading}>Reset Password</AuthButton>
          <Link to="/login" className="block text-center text-sm font-medium text-(--primary) hover:text-(--primary-hover)">
            Back to sign in
          </Link>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default ResetPassword;