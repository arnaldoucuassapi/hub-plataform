
export function Header() {
  return (
    <header className="w-full h-16 bg-zinc-100 text-zinc-900 flex items-center justify-between px-16">
      <h1 className="text-3xl font-extrabold text-zinc-900">hub.</h1>
      <nav className="flex items-center gap-8">
        <a href="#" className="hover:underline hover:transition-transform">Planos</a>
        <a href="#" className="hover:underline hover:transition-transform">Para quem é?</a>
        <a href="#" className="hover:underline hover:transition-transform">Login</a>

        <button 
          className="bg-violet-600 text-white font-medium px-6 py-2 rounded-full"
        >
          Inscrever-se
        </button>
      </nav>
    </header>
  )
}