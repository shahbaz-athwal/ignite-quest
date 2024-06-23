"use client";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

import db from "@/lib/db";


export default function Home() {
  const { data: session }: { data: Session | null } = useSession();
  return (<>
  <Button
      onClick={() => {
        signIn();
      }}
    >
      SignIn
    </Button>
    <div>
      Signed in as {session?.user?.email} <br />
      <img src={session?.user?.image || ""} alt="" />
        <Button onClick={() => signOut()}>Sign out</Button>
    </div>
    </>
  );
}
