export default function SignupPage() {
  return (
    <main className="container flex min-h-screen items-center justify-center py-12">
      <div className="card w-full max-w-md p-8 shadow-soft">
        <p className="text-sm text-muted">Create account</p>
        <h1 className="mt-2 text-3xl font-semibold">Start with sohiltrader</h1>

        <form className="mt-8 space-y-4">
          <input
            className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
            placeholder="Full Name"
          />
          <input
            className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
            placeholder="Email"
          />
          <input
            className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="w-full rounded-2xl bg-primary px-4 py-3 font-medium text-white">
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
