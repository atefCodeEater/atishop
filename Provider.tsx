import * as React from "react";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ChildenProvider {
  children: React.ReactNode;
}

export function Provider({ children }: ChildenProvider) {
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
}
