import Footer from "@/components/Footer";
import INCIListing from "@/components/INCIListing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 w-full gap-y-8">
      <h1 className="font-extrabold text-emerald-950 text-5xl">INCII → UNII</h1>
     <INCIListing />
      <Footer />
    </main>
  );
}
