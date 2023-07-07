import { Inter } from "next/font/google";
import Form from "@/components/Form";
import DataTable from "@/components/DataTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col md:flex-row min-h-screen items-center p-5 md:p-24 ${inter.className}`}>
      <Form />
      <DataTable />
    </main>
  );
}
