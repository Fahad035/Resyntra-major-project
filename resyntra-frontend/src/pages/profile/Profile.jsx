import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";


import {
    ArrowUpRight,
    CalendarDays,
    Check,
    CheckCircle2,
    Clock3,
    Mail,
    ShieldCheck,
    Sparkles,
    User,
    Workflow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageLayout from "@/layouts/PageLayout";
import useAuth from "@/hooks/useAuth";

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const displayName =
        user?.full_name ||
        user?.name ||
        user?.username ||
        user?.email?.split("@")[0] ||
        "Researcher";

    const email = user?.email || "Email not available";

    const initials =
        displayName
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((name) => name.charAt(0).toUpperCase())
            .join("") || "R";

    const isVerified =
        user?.is_verified === true ||
        user?.email_verified === true ||
        user?.verified === true;

    const createdAt = user?.created_at
        ? new Date(user.created_at).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
        })
        : "Recently";

    return (
        <PageLayout>
            <div
                className="relative min-h-[calc(100vh-80px)] overflow-hidden"
                style={{
                    fontFamily: '"Space Grotesk", var(--font-sans), sans-serif',
                }}
            >
                {/* =========================================================
            BACKGROUND
        ========================================================= */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-[10%] -top-45 h-125 w-125 rounded-full bg-(--primary)/10 blur-[140px]" />

                    <div className="absolute -right-37.5 top-[25%] h-112.5 w-112.5 rounded-full bg-purple-500/10 blur-[140px]" />

                    <div className="absolute -bottom-50 left-[35%] h-100 w-100 rounded-full bg-cyan-500/5 blur-[130px]" />

                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                            backgroundSize: "64px 64px",
                        }}
                    />
                </div>

                {/* =========================================================
            CONTENT
        ========================================================= */}
                <main className="relative z-10 mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
                    {/* Breadcrumb */}
                    <div className="mb-8 flex items-center gap-2 text-xs tracking-wide text-(--muted-foreground)">
                        <span>Resyntra</span>
                        <span className="opacity-40">/</span>
                        <span className="text-foreground">Account</span>
                        <span className="opacity-40">/</span>
                        <span className="text-(--primary)">Profile</span>
                    </div>

                    {/* =======================================================
              PROFILE HERO
          ======================================================= */}
                    <section className="relative overflow-hidden rounded-4xl border border-border/60 bg-card/65 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
                        {/* Decorative lines */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--primary)/60 to-transparent" />

                        <div className="pointer-events-none absolute -right-25 -top-40 h-100 w-100 rounded-full bg-(--primary)/10 blur-[100px]" />

                        <div className="relative p-6 sm:p-8 lg:p-10">
                            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                                {/* Identity */}
                                <div className="flex items-center gap-5 sm:gap-7">
                                    {/* Avatar */}
                                    <div className="relative shrink-0">
                                        <div className="absolute -inset-2 rounded-full bg-(--primary)/10 blur-xl" />

                                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-(--primary)/30 bg-background/80 text-3xl font-semibold text-(--primary) shadow-xl sm:h-28 sm:w-28 sm:text-4xl">
                                            {initials}
                                        </div>

                                        {/* Online indicator */}
                                        <div className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-card bg-emerald-500">
                                            <span className="h-2 w-2 rounded-full bg-white" />
                                        </div>
                                    </div>

                                    <div>
                                        {/* Badge */}
                                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-(--primary)/20 bg-(--primary)/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-(--primary)">
                                            <Sparkles className="h-3.5 w-3.5" />
                                            Resyntra Researcher
                                        </div>

                                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                            {displayName}
                                        </h1>

                                        <div className="mt-2 flex items-center gap-2 text-sm text-(--muted-foreground)">
                                            <Mail className="h-4 w-4" />
                                            <span className="truncate">{email}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button
                                    type="button"
                                    onClick={() => navigate("/platform/workspace")}
                                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-(--primary) px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-(--primary)/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-(--primary)/30"
                                >
                                    Enter Research Workspace
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </div>

                            {/* Bottom identity metadata */}
                            <div className="mt-9 grid border-t border-border/60 pt-6 sm:grid-cols-3">
                                <MetaItem
                                    icon={ShieldCheck}
                                    label="Account"
                                    value={isVerified ? "Verified" : "Active"}
                                    positive={isVerified}
                                />

                                <MetaItem
                                    icon={CalendarDays}
                                    label="Member Since"
                                    value={createdAt}
                                />

                                <MetaItem
                                    icon={Workflow}
                                    label="Workspace"
                                    value="Ready"
                                    positive
                                />
                            </div>
                        </div>
                    </section>

                    {/* =======================================================
              MAIN GRID
          ======================================================= */}
                    <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
                        {/* =====================================================
                PERSONAL IDENTITY
            ===================================================== */}
                        <section className="rounded-[28px] border border-border/60 bg-card/55 p-6 backdrop-blur-xl sm:p-8">
                            <SectionHeading
                                icon={User}
                                eyebrow="Identity"
                                title="Personal Information"
                                description="Your identity within the Resyntra research environment."
                            />

                            <div className="mt-8 space-y-2">
                                <InformationRow
                                    icon={User}
                                    label="Display Name"
                                    value={displayName}
                                />

                                <InformationRow
                                    icon={Mail}
                                    label="Email Address"
                                    value={email}
                                />

                                <InformationRow
                                    icon={ShieldCheck}
                                    label="Email Verification"
                                    value={isVerified ? "Verified" : "Pending"}
                                    valueClassName={
                                        isVerified ? "text-emerald-500" : "text-amber-500"
                                    }
                                />

                                <InformationRow
                                    icon={CalendarDays}
                                    label="Member Since"
                                    value={createdAt}
                                />
                            </div>
                        </section>

                        {/* =====================================================
                ACCOUNT HEALTH
            ===================================================== */}
                        <section className="rounded-[28px] border border-border/60 bg-card/55 p-6 backdrop-blur-xl sm:p-8">
                            <SectionHeading
                                icon={ShieldCheck}
                                eyebrow="Security"
                                title="Account Health"
                                description="Your Resyntra account is ready."
                            />

                            <div className="mt-8 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            {isVerified ? "Everything looks good" : "Account active"}
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-(--muted-foreground)">
                                            Your account can access the Resyntra research workspace
                                            and its AI-powered tools.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Security status */}
                            <div className="mt-4 space-y-3">
                                <StatusItem
                                    label="Account access"
                                    status="Active"
                                    active
                                />

                                <StatusItem
                                    label="Email verification"
                                    status={isVerified ? "Verified" : "Pending"}
                                    active={isVerified}
                                />

                                <StatusItem
                                    label="Research workspace"
                                    status="Available"
                                    active
                                />
                            </div>
                        </section>
                    </div>

                    {/* =======================================================
              RESEARCH IDENTITY
          ======================================================= */}
                    <section className="relative mt-8 overflow-hidden rounded-[28px] border border-border/60 bg-card/55 backdrop-blur-xl">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -right-20 -top-25 h-72 w-72 rounded-full bg-(--primary)/10 blur-[90px]" />
                        </div>

                        <div className="relative p-7 sm:p-9">
                            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                                <div className="max-w-2xl">
                                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                                        <Sparkles className="h-4 w-4" />
                                        Research Identity
                                    </div>

                                    <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                                        Your research journey starts here.
                                    </h2>

                                    <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
                                        Discover literature, understand complex papers, identify
                                        research gaps, generate insights, and transform knowledge
                                        into meaningful academic work.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => navigate("/platform/workspace")}
                                    className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-(--primary)"
                                >
                                    Explore Workspace
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* =======================================================
              FOOTER STATUS
          ======================================================= */}
                    <div className="flex items-center justify-center gap-2 py-8 text-[11px] tracking-wide text-(--muted-foreground)">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Resyntra systems operational
                        <span className="opacity-30">•</span>
                        AI Research Environment
                    </div>
                </main>
            </div>
        </PageLayout>
    );
};

/* ===============================================================
   SECTION HEADING
=============================================================== */

const SectionHeading = ({
    icon: Icon,
    eyebrow,
    title,
    description,
}) => {
    return (
        <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-(--primary)">
                <Icon className="h-4 w-4" />
                {eyebrow}
            </div>

            <h2 className="mt-3 text-xl font-semibold tracking-tight">
                {title}
            </h2>

            <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
                {description}
            </p>
        </div>
    );
};

/* ===============================================================
   INFORMATION ROW
=============================================================== */

const InformationRow = ({
    icon: Icon,
    label,
    value,
    valueClassName = "",
}) => {
    return (
        <div className="group flex items-center justify-between gap-5 rounded-2xl border border-transparent px-4 py-4 transition-colors hover:border-border/60 hover:bg-background/40">
            <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/50">
                    <Icon className="h-4 w-4 text-(--muted-foreground)" />
                </div>

                <span className="text-sm text-(--muted-foreground)">
                    {label}
                </span>
            </div>

            <span
                className={`max-w-[50%] truncate text-right text-sm font-semibold ${valueClassName}`}
            >
                {value}
            </span>
        </div>
    );
};

/* ===============================================================
   META ITEM
=============================================================== */

const MetaItem = ({
    icon: Icon,
    label,
    value,
    positive = false,
}) => {
    return (
        <div className="flex items-center gap-3 border-border/60 py-2 sm:border-r sm:px-6 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0">
            <Icon className="h-4 w-4 text-(--muted-foreground)" />

            <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-(--muted-foreground)">
                    {label}
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                    {positive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    )}

                    <p
                        className={`text-sm font-semibold ${positive ? "text-emerald-500" : ""
                            }`}
                    >
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
};

/* ===============================================================
   STATUS ITEM
=============================================================== */

const StatusItem = ({
    label,
    status,
    active = false,
}) => {
    return (
        <div className="flex items-center justify-between rounded-xl border border-border/50 bg-background/30 px-4 py-3">
            <span className="text-xs text-(--muted-foreground)">
                {label}
            </span>

            <span className="flex items-center gap-1.5 text-xs font-semibold">
                {active ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                    <Clock3 className="h-3.5 w-3.5 text-amber-500" />
                )}

                <span className={active ? "text-emerald-500" : "text-amber-500"}>
                    {status}
                </span>
            </span>
        </div>
    );
};

export default Profile;