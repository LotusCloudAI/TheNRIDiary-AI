"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <main className="bg-zinc-900 rounded-2xl shadow-xl p-10 max-w-xl w-full text-center border border-zinc-800">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          The NRI Diary
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 mb-6">
          Welcome to the next-generation storytelling platform for NRIs.
        </p>

        {/* Status Badge */}
        <div className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-lg mb-8 text-sm font-medium">
          Neelima: Frontend Migration Successful
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition">
            Explore Stories
          </button>

          <button className="px-6 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-800 transition">
            Upload Story
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-zinc-500">
          Powered by Next.js + Firebase | Lotus Cloud
        </p>

      </main>
    </div>
  );
}