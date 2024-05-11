import { Copyright, Instagram, Mail } from "lucide-react";
import { Container } from "./container";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" bg-black h-48 w-full">
      <Container className="flex md:items-end text-white text-sm sm:text-base md:text-lg pb-5">
        <div className="flex flex-col md:flex-row  md:gap-y-0 gap-y-5 md:justify-between w-full pt-5 md:pt-0 ">
          <p className="text-center flex gap-x-2">
            <Copyright /> Furniture gallery Ltd.
          </p>
          <div className="flex gap-x-10 justify-between">
            <div>
              <p>Get in Touch</p>
              <p className="flex gap-x-2 items-center">
                <Mail />
                Email
              </p>
              <Link href="mailto:thecodeshop.ng@gmail.com">
                thecodeshop.ng@gmail.com
              </Link>
            </div>
            <div>
              <p>Socials</p>
              <p className="flex gap-x-2 items-center">
                <Instagram />
                Instagram
              </p>
              <p>
                <Link
                  href={" http://www.instagram.com/thecodeshop_ng"}
                  target="_blank"
                >
                  @thecodeshop_ng
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
