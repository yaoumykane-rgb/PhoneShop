import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-900 p-8">
        <RegisterForm />
      </div>
    </div>
  );
}