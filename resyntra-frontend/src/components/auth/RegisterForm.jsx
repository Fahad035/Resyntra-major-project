import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { registerSchema } from "@/validations/auth";
import { registerUser } from "@/api/auth";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";
import AuthFooter from "./AuthFooter";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
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


    const onSubmit = async (values) => {
        if (values.password !== values.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            await registerUser({
                username: values.username,
                email: values.email,
                password: values.password,
            });

            toast.success("Account created successfully!");

            navigate("/login");
        } catch (error) {
            toast.error(
                error?.response?.data?.detail ||
                "Registration failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthCard>
            <AuthHeader
                title="Create Account"
                subtitle="Start your AI-powered research journey"
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                <AuthInput
                    label="Username"
                    placeholder="Enter username"
                    register={register("username")}
                    error={errors.username}
                />

                <AuthInput
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                    register={register("email")}
                    error={errors.email}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Create password"
                    register={register("password")}
                    error={errors.password}
                />

                <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm password"
                    register={register("confirmPassword")}
                    error={errors.confirmPassword}
                />

                <AuthButton loading={loading}>
                    Create Account
                </AuthButton>

                <AuthFooter
                    text="Already have an account?"
                    linkText="Sign In"
                    to="/login"
                />
            </form>
        </AuthCard>
    );
};

export default RegisterForm;