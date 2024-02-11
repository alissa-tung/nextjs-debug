"use client";

import { modify } from "@/lib/actions";

export default function C() {
  return (
    <form action={modify}>
      <button type="submit">modify</button>
    </form>
  );
}
