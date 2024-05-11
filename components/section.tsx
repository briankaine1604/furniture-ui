import Image from "next/image";
import { Container } from "./container";

export const Section = () => {
  const images = [
    { id: "1", src: "/mapped/img1.jpg", town: "Malverne East", no: "065" },
    { id: "2", src: "/mapped/img2.jpg", town: "Rosewood Hills", no: "066" },
    { id: "3", src: "/mapped/img3.jpg", town: "Lakeside Grove", no: "067" },
    { id: "4", src: "/mapped/img4.jpg", town: "Springfield Park", no: "068" },
    { id: "5", src: "/mapped/img5.jpg", town: "Oakwood Terrace", no: "069" },
    { id: "6", src: "/mapped/img6.jpg", town: "Cedar Ridge", no: "070" },
  ];

  return (
    <div className=" h-full w-full flex flex-col">
      <Container className=" flex flex-col">
        <section className="flex justify-between py-24">
          <div className=" max-w-3xl text-2xl md:text-3xl text-left tracking-wide ">
            At Furniture Gallery, we redefine living spaces with our curated
            collection of custom-designed furniture. From timeless classics to
            modern innovations, our pieces blend elegance and functionality
            seamlessly. Explore our gallery and elevate your home with our
            unique style.
          </div>
          <div className="flex">
            <div className="w-[40px] h-[10px] bg-gray-200" />
            <div className="h-[28px] w-[10px] bg-gray-200" />
          </div>
        </section>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {images.map((image) => (
              <div key={image.id} className="flex flex-col gap-y-3">
                <div className=" relative w-full h-[374px]">
                  <Image
                    src={image.src}
                    fill
                    alt="Interior design pictures"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col pb-16">
                  <p className=" text-2xl font-light flex gap-x-2 relative max-w-20">
                    {image.no}{" "}
                    <span className="w-5 border-t border-black absolute right-0 top-1/2"></span>
                  </p>
                  <p className=" text-gray-400 text-2xl font-light">
                    {image.town}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
