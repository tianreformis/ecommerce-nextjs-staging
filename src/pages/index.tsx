import HomeView from "@/components/view/home";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tian Store</title>
      </Head>
      <HomeView />
    </div>
  );
}
