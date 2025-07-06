"use client";

import TeamLayout from "./layout";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <TeamLayout>
      <div className={"teamLol"}>team</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </TeamLayout>
  );
}
