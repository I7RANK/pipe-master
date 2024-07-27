import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-20">
      <div className="flex flex-col items-center max-w-96 w-full mx-auto bg-red-600">
        <h1 className="text-5xl mb-16">Pipe Master</h1>
        <div>
          <Link href="/game" className="py-2 px-4 rounded-lg bg-slate-500">
            Play
          </Link>
        </div>
      </div>
    </main>
  );
}
