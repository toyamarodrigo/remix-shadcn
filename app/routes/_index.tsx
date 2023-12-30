import { type MetaFunction } from "@remix-run/node";

import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Vite template + Shadcn" },
    { name: "description", content: "Remix Vite template + Shadcn" },
  ];
};

export default function Index() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <Button>SHADCN BUTTON</Button>
    </div>
  );
}
