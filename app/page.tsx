import Image from "next/image";
import img1 from "@/public/slider/img1.jpg";
import img2 from "@/public/slider/img2.jpg";
import img3 from "@/public/slider/img3.jpg";
import img4 from "@/public/slider/img4.jpg";
import { ImageSlider } from "@/components/imageSlider";
import { Section } from "@/components/section";
import ImageCarousel from "@/components/carousel";

export default function Home() {
  const IMAGES = [
    { url: img1.src, alt: "Interior design One" },
    { url: img2.src, alt: "Interior design Two" },
    { url: img3.src, alt: "Interior design Three" },
    { url: img4.src, alt: "Interior design Four" },
  ];

  return (
    <main>
      <div className=" h-screen w-full flex flex-col">
        {/* <ImageSlider images={IMAGES} /> */}
        <ImageCarousel images={IMAGES} />
      </div>
      <Section />
    </main>
  );
}
