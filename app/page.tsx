import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {session ? (
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome, {session.user.name}!
            </h1>
          </div>
        ) : (
          <p className="text-gray-900 dark:text-white">
            Please log in to view your profile.
          </p>
        )}
      </main>
    </div>
  );
}
