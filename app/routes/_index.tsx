import {type MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";

import {Button} from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    {title: "Remix + Shadcn Template"},
    {name: "description", content: "Remix + Shadcn Template"},
  ];
};

export default function Index() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}
    >
      <Button asChild>
        <Link to="home">Home</Link>
      </Button>
    </div>
  );
}
