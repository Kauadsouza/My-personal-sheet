import { redirect } from "next/navigation";

// The middleware handles locale routing. This fallback should never be hit,
// but redirects to root just in case.
export default function RootPage() {
  redirect("/");
}