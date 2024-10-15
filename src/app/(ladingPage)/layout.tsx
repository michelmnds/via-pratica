import { Header, Footer } from "@/components/index";
import { PropsWithChildren } from "react";

export default async function LandingPageLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <video
          className="w-full mt-[60px] xl:mt-[80px] h-[calc(100vh-400px)] xl:h-[calc(100vh-300px)] object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        <div className="flex-center container m-auto flex-1 pt-[20px] xl:pt-[50px] py-7">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
