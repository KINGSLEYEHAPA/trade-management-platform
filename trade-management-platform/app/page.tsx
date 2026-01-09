import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-left gap-4 bg-gray-900 p-4">
      <Card className="p-4 bg-amber-600 w-72 h-48 rounded-lg">
        <h2 className="text-white font-bold mb-2">shadcn/ui Test Card </h2>
        <Button className="mt-8 cursor-pointer text-destructive bg-secondary">Click Me</Button>
      </Card>

      <div className="animate-bounce bg-red-500 p-4 text-white mt-16  ">
  Hello Animation
</div>
    </main>
  );
}
