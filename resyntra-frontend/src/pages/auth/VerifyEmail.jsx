import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import { verifyEmail } from "@/api/auth";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const [loading, setLoading] = useState(Boolean(token));
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    verifyEmail(token)
      .then((response) => {
        setVerified(true);
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.detail || "This verification link is invalid or expired.");
      })
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title={verified ? "Email verified" : "Verify your email"}
          subtitle={
            verified
              ? "Your Resyntra account is ready."
              : token
                ? "Checking your verification link..."
                : "Open the verification link from your email to continue."
          }
        />
        <div className="mt-6">
          <Link
            to="/login"
            className="block rounded-xl bg-(--primary) px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-(--primary-hover)"
          >
            Continue to Sign In
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
};

export default VerifyEmail;