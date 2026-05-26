// Route group: (auth) — groups auth-related pages without affecting the URL path.
// e.g. app/(auth)/login/page.tsx → /login  (NOT /auth/login)

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
}
