import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { Button } from "~/components/ui/button";

export async function action() {
  return redirect("/login");
}

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Form action="/dashboard" method="post">
        <Button type="submit">Logout</Button>
      </Form>
    </div>
  );
}
