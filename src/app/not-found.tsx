import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <h1 className="font-heading text-5xl font-bold">Page not found</h1>
      <Button render={<Link href="/" />} nativeButton={false} className="h-12 px-6 text-base">
        Back to home
      </Button>
    </main>
  );
}
