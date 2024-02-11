import { read } from "@/lib/actions";

import C from "@/components/c";

export default async function Home() {
  const xs = await read();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{"[DEBUG]: " + xs}</p>
      <C />
    </main>
  );
}
