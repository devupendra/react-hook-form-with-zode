import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-950 text-gray-300 p-5">
      <h1 className="text-center text-white font-bold text-xl">Testing on Zod, React Hook Form and NextJS with Javascript</h1>
      <div className="border mx-auto max-w-2xl w-full mt-10 px-4 py-6 rounded-md border-gray-800">
        <h1 className="text-center text-lg font-medium text-white mb-6">Sample Form</h1>
        <Form />
      </div>
    </main>
  );
}
