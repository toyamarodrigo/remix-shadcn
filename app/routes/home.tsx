import {Link} from "@remix-run/react";
import {Button} from "~/components/ui/button";

export default function IndexHome() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1>Home Route</h1>
      <Button asChild>
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
}
