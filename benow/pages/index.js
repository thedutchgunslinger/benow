import Head from "next/head";
import Image from "next/image";
import Logo from "../public/logo.png";
import Insta from "../public/instagram-brands.svg";
import Twitter from "../public/twitter-brands.svg";
import Marquee from "react-easy-marquee";
import Favicon from "../public/favicon.png";

export default function Home() {
  const images = [Logo, Logo, Logo, Logo];
  const imagesDesktop = [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo];


  return (
    <>
      <Head>
        <title>BenowMedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={Favicon} />
      </Head>
      <div className="pagecontainer">
        <Image src={Logo} height={70} width={100} alt="BenowMedia Logo" />
        <h1 id="headerText">
          Awsome, you&apos;ve already found us! <br />
          But our site is not ready yet.
        </h1>
        <p id="subHeaderText">
          We are working hard to make it ready for you.
          <br />
          But in the meantime we&apos;d love to help you trough our other
          channels!
        </p>
      </div>
      <div id="contactContainer">
        <p>Email: Info@benowmedia.com</p>
        <p>Phone: +316 284 121 72</p>
        <p>
          Addres: Zwarteweg 149 <br /> 1431 VL Aalsmeer
        </p>
        <a href="https://www.instagram.com/benowmediabv" target="blank">
          <Image src={Insta} alt="Instagram icon" width={35} height={35} />
        </a>
        <a href="https://twitter.com/BeNowMediaBV" target="blank">
          <Image src={Twitter} alt="Twitter icon" width={35} height={35} />
        </a>
      </div>
      <div id="mobileMarquee">
        <Marquee
          duration={20000}
          background="#642d95"
          height="50px"
          width="100%"
        >
          {images.map((image) => (
            <Image
              src={image}
              width={70}
              height={50}
              alt="BenowMedia Logo"
              key={Math.random()}
            />
          ))}
        </Marquee>
        <Marquee
          duration={20000}
          background="#642d95"
          height="50px"
          width="100%"
          reverse={true}
        >
          {images.map((image) => (
            <Image
              src={image}
              width={70}
              height={50}
              alt="BenowMedia Logo"
              key={Math.random()}
            />
          ))}
        </Marquee>
      </div>
      <div id="desktopMarquee">
        <Marquee
          duration={20000}
          background="#642d95"
          height="50px"
          width="800px"
        >
          {imagesDesktop.map((image) => (
            <Image
              src={image}
              width={70}
              height={50}
              alt="BenowMedia Logo"
              key={Math.random()}
            />
          ))}
        </Marquee>
        <Marquee
          duration={20000}
          background="#642d95"
          height="50px"
          width="800px"
          reverse={true}
        >
          {imagesDesktop.map((image) => (
            <Image
              src={image}
              width={70}
              height={50}
              alt="BenowMedia Logo"
              key={Math.random()}
            />
          ))}
        </Marquee>
        <Marquee
          duration={20000}
          background="#642d95"
          height="50px"
          width="800px"
        >
          {imagesDesktop.map((image) => (
            <Image
              src={image}
              width={70}
              height={50}
              alt="BenowMedia Logo"
              key={Math.random()}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
}
