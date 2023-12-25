// app/providers.tsx
"use client";
import { Toaster } from "react-hot-toast";
import { Next13ProgressBar } from "next13-progressbar";
import { ReduxProvider } from "./redux/provider";
import AuthProvider from "./context/auth-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <Next13ProgressBar
        height="2px"
        color="#fe883c"
        options={{ showSpinner: true }}
        showOnShallow
      />
      <ReduxProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </>
  );
}
