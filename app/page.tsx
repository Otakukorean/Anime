import Hero from "@/components/Hero";
import Image from "next/image";
import Trending from "./components/Trending";
import Newer from "./components/Newer";
import Popular from "./components/Popular";

export default function Home() {
  return (
  <div>
      <Hero />
      <Trending />
      <Newer />
      <Popular />
  </div>
  );
}
