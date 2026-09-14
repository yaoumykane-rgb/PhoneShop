import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-[26px] font-bold text-neutral-900">Profil</h1>
        <p className="mt-1 text-[15px] text-neutral-500">Gère tes informations personnelles.</p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
        <ProfileForm />
      </div>
    </div>
  );
}