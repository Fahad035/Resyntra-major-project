import {
  ShieldCheck,
  UserPlus,
  LogIn,
  KeyRound,
  RefreshCw,
  Lock,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const AuthenticationContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <ShieldCheck className="h-4 w-4 text-(--primary)" />
          Developer
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Authentication
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Understand how authentication is used to protect Resyntra API
          resources and how clients should handle authenticated requests.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Resyntra uses authentication to associate protected operations with
          an authenticated user. Client applications should authenticate
          before accessing API resources that require user authorization.
        </p>
      </section>

      {/* Registration */}
      <section id="registration" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          User registration
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          New users can create an account through the registration workflow.
          Registration establishes the user account that will later be used
          to access protected research resources.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <UserPlus className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Create an account
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                Provide the information required by the registration endpoint
                and complete account creation before attempting authenticated
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Login */}
      <section id="login" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          User login
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Existing users can authenticate through the login workflow. A
          successful login provides the credentials required for subsequent
          authenticated requests.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <LogIn className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Authenticate before protected requests
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                Store authentication credentials securely and include the
                required access credential when calling protected API
                endpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access token */}
      <section id="access-token" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Access token
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The authentication response includes an access token that can be
          used to authorize protected API requests.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Bearer authentication
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                When bearer authentication is enabled, the access token is
                supplied with API requests using the standard Authorization
                header.
              </p>

              <div className="mt-3 overflow-x-auto rounded-lg border border-(--border) bg-(--background) px-3 py-2">
                <code className="text-[11px] text-(--foreground)">
                  Authorization: Bearer &lt;access_token&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refresh token */}
      <section id="refresh-token" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Refresh token
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Authentication responses may also include a refresh token. A refresh
          token can be used by an authentication flow to obtain a new access
          token when the current access token expires, depending on the
          backend configuration.
        </p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Handle refresh credentials securely
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
              Refresh credentials should be protected and should not be
              exposed through logs, public source code, or client-side
              configuration that can be accessed by unauthorized users.
            </p>
          </div>
        </div>
      </section>

      {/* Protected requests */}
      <section id="protected-requests" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Protected requests
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          After authentication, clients can use the access credential when
          making requests to protected resources.
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Authenticate the user.",
            "Receive the authentication credentials.",
            "Store credentials using an appropriate secure mechanism.",
            "Attach the access credential to protected requests.",
            "Handle expired or invalid credentials appropriately.",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-(--primary)/10 text-[10px] font-semibold text-(--primary)">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs text-(--muted-foreground)">
                {step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section id="security" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Security considerations
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: Lock,
              title: "Protect credentials",
              description:
                "Do not expose access or refresh tokens in public repositories, logs, screenshots, or URLs.",
            },
            {
              icon: ShieldCheck,
              title: "Use secure transport",
              description:
                "Production API communication should use HTTPS so credentials and research data are transmitted securely.",
            },
            {
              icon: AlertCircle,
              title: "Handle authentication errors",
              description:
                "Applications should respond appropriately when credentials are missing, invalid, or expired.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-(--foreground)">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Authentication flow */}
      <section id="authentication-flow" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Authentication flow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Register",
            "Login",
            "Receive token",
            "Authorize",
            "Access API",
          ].map((step, index, array) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-(--border) bg-(--surface) px-3 py-2 text-(--foreground)">
                {step}
              </span>

              {index !== array.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-(--muted-foreground)" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Best practices
        </h2>

        <div className="mt-5 space-y-2">
          {[
            "Keep authentication credentials private.",
            "Use HTTPS in production environments.",
            "Avoid storing tokens in insecure locations.",
            "Handle expired sessions gracefully.",
            "Do not include credentials in application logs.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-(--primary)" />

              <span className="text-xs text-(--muted-foreground)">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Back to introduction */}
      <div className="border-t border-(--border) pt-6">
        <button
          type="button"
          onClick={() => onSectionChange("introduction")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Back to
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Introduction
            </p>
          </div>

          <ArrowLeft className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default AuthenticationContent;