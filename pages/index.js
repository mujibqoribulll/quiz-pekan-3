import ButtonText from "@/components/buttons/button-text";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex bg-gray-900/30 h-screen items-center justify-center">
      <div>
        <h3 className="text-4xl font-bold text-white">Welcome to Todos App!</h3>
        <p className="text-gray-500 italic font-semibold py-4">
          Plan, organize, and conquer your day with ease. Let's get started!
        </p>
        <ButtonText
          label="Create Your First Task"
          onPress={() => router.push("/notes")}
          styleContainer="bg-white"
        />
      </div>
    </div>
  );
}
