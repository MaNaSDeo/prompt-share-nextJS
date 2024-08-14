"use client";

import { SessionProvider } from "next-auth/react";

interface iProvider {
  children?: any;
  session?: any;
}

function Provider({ children, session }: iProvider) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Provider;
