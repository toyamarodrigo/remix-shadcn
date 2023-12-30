import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, json, redirect, useActionData, useNavigation } from "@remix-run/react";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());
  const parsed = schema.safeParse(formData);

  if (!parsed.success) return json({ error: parsed.error.format() });

  const { username, password } = parsed.data;

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": `username=${username}; password=${password}; Path=/; HttpOnly; SameSite=Strict`,
    },
  });
}

export default function Login() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  const userError = actionData?.error.username?._errors[0];
  const passwordError = actionData?.error.password?._errors[0];

  const isLoggingIn = navigation.formAction === "/login";

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Form className="space-y-2 w-full max-w-sm" method="post">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="user">Username</Label>
          <Input
            required
            alt="username"
            autoComplete="username"
            data-testid="username-input"
            disabled={isLoggingIn}
            id="username"
            name="username"
            type="text"
          />
          {userError ? (
            <p className="text-red-500 text-xs italic">{userError}</p>
          ) : (
            <div className="text-red-500 text-xs italic" style={{ visibility: "hidden" }}>
              Error Username Message
            </div>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            required
            alt="password"
            autoComplete="current-password"
            data-testid="password-input"
            disabled={isLoggingIn}
            id="password"
            name="password"
            type="password"
          />
          {passwordError ? (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          ) : (
            <div className="text-red-500 text-xs italic" style={{ visibility: "hidden" }}>
              Error Password Message
            </div>
          )}
        </div>
        {isLoggingIn ? (
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde w-full"
            disabled={isLoggingIn}
            type="button"
          >
            <Loader2 className="w-6 h-6 animate-spin" />
          </Button>
        ) : (
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde w-full"
            type="submit"
          >
            Iniciar sesión
          </Button>
        )}
      </Form>
    </div>
  );
}
