import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-900 p-8">
        <LoginForm />
      </div>
    </div>
  );
}