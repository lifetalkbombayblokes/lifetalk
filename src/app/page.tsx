import Image from "next/image";
import welcome_img_1 from "@/assets/thriiveatwork.svg";
import Avatar from "./components/avatar";
import Sila from "@/assets/sila.png";
import Runwal from "@/assets/runwal.jpg";
import AjantaPharma from "@/assets/ajanta-pharma.jpg";
import StockAxis from "@/assets/stockaxis.jpeg";
import formImg from "@/assets/contact-form.png";
import therapyImg from "@/assets/marriage-counseling.png";
import doveImg from "@/assets/pigeon.png";
import appstore from "@/assets/appstore.svg";
import googleplay from "@/assets/googleplay.svg";
import communcationImg from "@/assets/communcationImage.png";
import Accordion from "@/app/components/accordion";
import fore from "@/assets/psychologist.png";
import strip from "@/assets/Frame 870-01-01.png";
import VideoPlayer from "@/app/ui/video";
import Theraoist from "@/app/components/therapist";
import Link from "next/link";
import Slider from "./components/slider";
import ContactForm from "./components/contactForm";
import freeBanner from "@/assets/free-banner.jpg";
import MetaPixel from "@/app/components/MetaPixel";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

const clientLogo = [
  {
    logo: Sila,
    name: "sila",
  },
  {
    logo: Runwal,
    name: "runwal",
  },
  {
    logo: AjantaPharma,
    name: "ajanta pharma",
  },
  {
    logo: StockAxis,
    name: "stock axis",
  },
];

const accordionData = [
  {
    title: "What is Lifetalk's corporate wellness program?",
    content:
      "Lifetalk offers a comprehensive program providing 24/7 access to 1-on-1 coaching from verified psychologists. With customizable options for group-based wellness workshops, we tailor solutions to meet your company's specific needs",
  },
  {
    title: "Is it worth implementing a well-being program for your company?",
    content:
      "Starting a well-being program is worthwhile as it boosts morale and productivity, reduces absenteeism, showcases commitment to employee health, & attracts top talent.",
  },
  {
    title: "What topics can employees get help with through the program?",
    content:
      "Lifetalk covers a wide range of issues employees may face, including stress, anxiety, burnout, relationships, work-life balance, & personal growth.",
  },
  {
    title: "How much does the Corporate wellness program cost?",
    content:
      "Our affordable & customized pricing plans ensure accessibility as per your preferences. Contact us to find the perfect fit for your organization's budget.",
  },
];

const cardData = [
  {
    icon: "",
    heading: "For Corporates",
    para: "Thriving Employees, Thriving Business: See a rise in employee satisfaction, retention, and overall productivity. Lifetalk empowers your workforce to perform at their best.",
  },
  {
    icon: "",
    heading: "For Employees",
    para: "Feel empowered. Lifetalk provides tools and resources to manage stress, boost energy, and achieve your personal and professional goals.",
  },
  {
    icon: "",
    heading: "For Leaders",
    para: "Invest in your most valuable asset—your team. Lifetalk equips leaders to create a thriving workplace environment.",
  },
];

const unlockData = [
  {
    heading: "Life Coaching:",
    para: "Achieve your goals, both personally and professionally. Our coaches guide you in setting clear objectives, developing actionable plans, and boosting your productivity.",
  },
  {
    heading: "Stress Coaching:",
    para: "Feel calmer and more in control. Our stress management specialists equip you with effective techniques to manage emotional triggers and navigate stressful situations.",
  },
  {
    heading: "Love & Relationship Coaching:",
    para: "Build stronger connections. Expert guidance helps you navigate relationship dynamics, foster healthy communication, and resolve conflicts.",
  },
  {
    heading: "Sex Therapy:",
    para: "Enhance intimacy and well-being. We provide professional support to individuals and couples addressing sexual concerns, promoting a more fulfilling and satisfying experience.",
  },
];

export default async function Home() {
  return (
    <>
      <MetaPixel />

      <Link
        href={"https://api.whatsapp.com/send?phone=918451936776"}
        target="_blank"
        className="size-14 fixed right-5 bottom-5 z-50 hover:scale-95 transition-all"
      >
        <FaWhatsappSquare className="h-full w-full text-[#31D14F]" />
      </Link>

      <section>
        <div className="relative w-screen h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            loading="eager"
            className=" absolute z-[3]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
            width={700}
            height={700}
            src={fore.src}
          />
          <Image
            loading="eager"
            style={{ objectFit: "contain" }}
            className=" top-0 md:-left-[18%] md:h-[700px] -rotate-[9deg] scale-[1.75] md:scale-[1.25] md:rotate-0 md:-ml-16 absolute z-[2]  md:-top-[30%] md:left-0"
            alt=""
            width={1920}
            height={500}
            src={strip.src}
          />
          <VideoPlayer
            src="https://tsuahomfkoxepnrgbjcu.supabase.co/storage/v1/object/public/assets/banner800.mp4"
            width={700}
            height={700}
            className={""}
          />
        </div>
      </section>
      <section>
        <div className="page-width my-20">
          <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
            <Image
              src={freeBanner}
              alt="free"
              width={1920}
              height={400}
              className=" w-full mix-blend-darken aspect-square rounded-3xl"
            />

            <div className="flex justify-center flex-col  md:px-20">
              <h2 className="header-class  pb-4 pt-5 text-left heading text-[#2F8455]">
                Free Corporate Mental Wellness Assessment
              </h2>

              <p className="text-left">
                Know your company&rsquo;s mental wellness score, with a free
                assessment
              </p>
              <br />
              <div className="text-white flex items-center gap-2 mb-10">
                <p className="text-[#2F8455] header-class ">Register Now</p>
                <Link
                  aria-label="contact"
                  className="btn btn-circle hover:animate-pulse"
                  href="#contact-us"
                >
                  <svg
                    className="w-full h-full "
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="27" cy="27" r="27" fill="#2F8455" />
                    <path
                      d="M40.7071 27.7071C41.0976 27.3166 41.0976 26.6834 40.7071 26.2929L34.3431 19.9289C33.9526 19.5384 33.3195 19.5384 32.9289 19.9289C32.5384 20.3195 32.5384 20.9526 32.9289 21.3431L38.5858 27L32.9289 32.6569C32.5384 33.0474 32.5384 33.6805 32.9289 34.0711C33.3195 34.4616 33.9526 34.4616 34.3431 34.0711L40.7071 27.7071ZM14 28H40V26H14V28Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <section>
          <div className="bg-primary relative pt-8 md:pt-20">
            <div className="page-width">
              <div className="flex  flex-wrap justify-between">
                <div className=" w-full md:w-1/2">
                  <h1 className="footer-class text-white pb-2  heading">
                    Thrive at Work
                  </h1>
                  <p className="text-white ">
                    Corporate Mental Wellness at Your Workplace. Our program
                    goes beyond physical health, focusing on mental well-being,
                    financial fitness, and work-life balance for a holistic
                    approach to thriving.{" "}
                  </p>
                  <div className="text-white flex items-center pt-9 gap-2 mb-10">
                    <p>Request Callback</p>
                    <Link
                      aria-label="contact"
                      className="btn btn-circle btn-secondary hover:animate-pulse"
                      href="#contact-us"
                    >
                      <svg
                        width="27"
                        height="16"
                        viewBox="0 0 27 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className=" grid md:grid-cols-3 gap-4">
                    <div className="bg-[#DDDDDD] col-span-1 h-[200px]  rounded-xl">
                      <Image
                        width={171}
                        height={200}
                        src={welcome_img_1}
                        className="h-[200px] w-[171px] object-contain"
                        alt="illustration of girl sitting"
                      />
                    </div>
                    <div className="bg-[#EA1410] flex flex-col justify-center col-span-2 rounded-xl p-4">
                      <Avatar />
                      <div className="flex items-center  gap-2 pt-2">
                        <p className=" text-4xl md:text-6xl mb-0 text-white">
                          2K+
                        </p>
                        <p className="text-white ">
                          Lives have been
                          <br />
                          transformed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />

              <section className="flex flex-wrap items-start justify-between gap-4 ">
                <div className=" content-center  ">
                  <h1 className="heading  footer-class pb-2 text-white">
                    Not a Corporate Employee?{" "}
                  </h1>
                  <p className="text-white">
                    Download the App Now & Take a Session.
                  </p>
                </div>
                <div className=" flex md:grid grid-cols-2 gap-4 md:gap-8">
                  <Link
                    aria-label="apple app store logo"
                    href="https://apps.apple.com/in/app/lifetalk-wellness/id6470373147"
                    className=""
                  >
                    <Image
                      className=""
                      src={appstore}
                      alt="App Store"
                      width={203.95}
                      height={59}
                    />
                  </Link>
                  <Link
                    aria-label="google play store logo"
                    href={
                      "https://play.google.com/store/apps/details?id=com.ltcorporate.thriive&hl=en_IN"
                    }
                    className=""
                  >
                    <Image
                      src={googleplay}
                      alt="Google Play"
                      width={203.95}
                      height={59}
                    />
                  </Link>
                </div>
              </section>
            </div>
            <div className="absolute top-[100%] w-full z-0 overflow-x-clip ">
              <svg
                className="transform scale-x-[-1.5]"
                xmlns=" http://www.w3.org/2000/svg"
                viewBox="0 0 1440 200"
              >
                <path
                  className=" fill-primary"
                  fill=""
                  fillOpacity="1"
                  d="M0,128L40,138.7C80,149,160,171,240,181.3C320,192,400,192,480,176C560,160,640,128,720,106.7C800,85,880,75,960,69.3C1040,64,1120,64,1200,85.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <section className=" pt-20 md:pt-40">
          <div className="page-width">
            <h2
              id="about"
              className="heading  footer-class pb-2 text-[#736EC3]"
            >
              Empowering Your People,
              <br />
              <span className="text-secondary">
                Strengthening Your Business
              </span>
            </h2>
            <p className=" md:max-w-[50%]">
              At Lifetalk, we unlock mental wellness for your employees, fueling
              a thriving workplace. Our accessible resources empower individuals
              while fostering a culture of well-being.
            </p>
          </div>
        </section>
        <section>
          <div className="page-width">
            <div className="grid md:md:grid-cols-2 ">
              <VideoPlayer
                src="https://pwzxzpqqkjmunvutglwm.supabase.co/storage/v1/object/public/assets/1_1_session800__3_.mp4?t=2024-06-24T13%3A46%3A06.918Z"
                width={1920}
                height={400}
                className=" w-full mix-blend-darken md:max-h-[500px] "
              />
              {/* <video
                width="1920"
                height="400"
                preload="none"
                muted
                autoPlay
                playsInline
                className=" w-full mix-blend-darken md:max-h-[500px] "
              >
                <source
                  src={`https://tsuahomfkoxepnrgbjcu.supabase.co/storage/v1/object/public/assets/banner800.mp4?t=2024-06-12T11%3A40%3A36.667Z`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> */}

              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="text-left heading header-class  text-[#C84309]">
                  1:1 Sessions
                </h2>
                <p className="text-left">
                  Our convenient in-app platform connects employees with
                  certified coaches for one-on-one sessions. These personalized
                  sessions provide the support needed to overcome daily hurdles
                  and unlock optimal performance.
                </p>
                <div className="text-white flex items-center gap-2 mb-10">
                  <p className="text-[#C84309] header-class ">Get Started</p>
                  <Link
                    aria-label="contact"
                    className="btn btn-circle hover:animate-pulse"
                    href="#contact-us"
                  >
                    <svg
                      className="w-full h-full "
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="27" cy="27" r="27" fill="#C84309" />
                      <path
                        d="M40.7071 27.7071C41.0976 27.3166 41.0976 26.6834 40.7071 26.2929L34.3431 19.9289C33.9526 19.5384 33.3195 19.5384 32.9289 19.9289C32.5384 20.3195 32.5384 20.9526 32.9289 21.3431L38.5858 27L32.9289 32.6569C32.5384 33.0474 32.5384 33.6805 32.9289 34.0711C33.3195 34.4616 33.9526 34.4616 34.3431 34.0711L40.7071 27.7071ZM14 28H40V26H14V28Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="page-width">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="header-class pt-5 text-left heading text-[#2F8455]">
                  Interactive Group Workshops
                </h2>
                <p className="text-left">
                  Led by experienced facilitators, these engaging sessions equip
                  your team with practical strategies to navigate mental health
                  challenges, both at work and in their personal lives.
                </p>
                <div className="text-white flex items-center gap-2 mb-10">
                  <p className="text-[#2F8455] header-class ">Get Started</p>
                  <Link
                    aria-label="contact"
                    className="btn btn-circle hover:animate-pulse"
                    href="#contact-us"
                  >
                    <svg
                      className="w-full h-full "
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="27" cy="27" r="27" fill="#2F8455" />
                      <path
                        d="M40.7071 27.7071C41.0976 27.3166 41.0976 26.6834 40.7071 26.2929L34.3431 19.9289C33.9526 19.5384 33.3195 19.5384 32.9289 19.9289C32.5384 20.3195 32.5384 20.9526 32.9289 21.3431L38.5858 27L32.9289 32.6569C32.5384 33.0474 32.5384 33.6805 32.9289 34.0711C33.3195 34.4616 33.9526 34.4616 34.3431 34.0711L40.7071 27.7071ZM14 28H40V26H14V28Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <VideoPlayer
                src="https://tsuahomfkoxepnrgbjcu.supabase.co/storage/v1/object/public/assets/Untitled_design__2_.mp4?t=2024-06-12T11%3A42%3A04.206Z"
                width={1920}
                height={400}
                className=" w-full mix-blend-darken md:max-h-[500px] "
              />
            </div>
          </div>
        </section>
      </div>
      {/* New Section */}
      <section className="py-10  page-width">
        <div className="grid md:grid-cols-2 gap-4   ">
          <div className="col-span-1">
            <h2 className="heading  footer-class pb-2 text-[#26275F]">
              Why Lifetalk?
            </h2>
            {/* <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            </p> */}
          </div>
          <div className="col-span-1 flex items-end md:justify-end">
            <div className="flex items-center gap-2">
              <p className="text-primary font-semibold">Know More</p>
              <Link
                aria-label="contact"
                className="btn btn-circle btn-primary hover:animate-pulse"
                href="#contact-us"
              >
                <svg
                  width="27"
                  height="16"
                  viewBox="0 0 27 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  justify-between md:gap-10">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-grow w-96 items-center"
            >
              <div className="bg-[#0C64BC] rounded-full p-4 relative -bottom-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <div className="bg-[#8A84E2] p-7 rounded-[30px] flex-grow flex flex-col">
                <p className="text-base text-white pb-2 font-semibold text-center">
                  {item.heading}
                </p>
                <p className="text-white text-center">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* -- End of why choose us section --  */}
      <div className="bg-[#E5FFF2]/30">
        <section className="page-width pt-8 md:pt-20">
          <Theraoist />
        </section>
      </div>
      <div className="w-full z-0 overflow-x-clip">
        <svg
          className="y=-10%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <filter id="shadow" x="-50%" y="-8%" width="200%" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
              <feOffset dx="5" dy="3" result="offsetblur" />
              <feFlood floodColor="rgba(200, 240, 230, 0.5)" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            fill="#F8FFFB"
            fillOpacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,85.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            filter="url(#shadow)"
          ></path>
        </svg>
      </div>
      <section className="page-width">
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div className="col-span-1">
            <h2
              id="services"
              className="heading  footer-class pb-2 text-[#26275F]"
            >
              Unlock Your Potential
            </h2>
          </div>
          <div className="col-span-1 flex items-end justify-end">
            <Image src={doveImg} alt="dove" width={80} height={80} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 p-4">
          {/* First column with an image */}
          <div className="md:w-1/2">
            <Image
              src={therapyImg}
              alt="Therapies"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          {/* Second column with nested rows */}
          <div className="md:w-1/2 flex flex-col space-y-4">
            {/* First nested row */}
            <div className=" grid md:grid-cols-2">
              {unlockData.map((item, index) => (
                <div key={index} className="  md:p-4">
                  <div className="  w-16 h-16 bg-[#8A84E2] hover:bg-[#26275F] rounded-full flex items-center justify-center mb-2 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                  </div>
                  <h2 className="subheading header-class font-bold mb-1">
                    {item.heading}
                  </h2>
                  <p className="">{item.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*-- Client Carousel*/}
      <section className="md:pt-10 page-width">
        <h2 className="heading footer-class pb-2 text-[#26275F] text-center">
          Our Clientele
        </h2>

        <div className="flex justify-center items-center mt-5">
          <div className="carousel gap-16 carousel-center rounded-box items-center">
            <>
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  {clientLogo.map((item, index) => (
                    <li key={index}>
                      <Image
                        width={150}
                        height={150}
                        src={item.logo}
                        alt={item.name}
                        className=" object-contain aspect-square"
                      />
                    </li>
                  ))}
                </ul>
                <ul
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  aria-hidden="true"
                >
                  {clientLogo.map((item, index) => (
                    <li key={index}>
                      <Image
                        width={150}
                        height={150}
                        src={item.logo}
                        alt={item.name}
                        className=" object-contain aspect-square"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </>
          </div>
        </div>
      </section>
      <section>
        <div className="page-width pt-16 ">
          <div className="container mx-auto p-4">
            {/* First Row */}
            <div className="row mb-4">
              <h2
                id="contact-us"
                className="heading text-center footer-class pb-2 text-[#26275F]"
              >
                Corporate Wellness Solution At Your Fingertips
              </h2>
              <p className=" text-center">Discover what we can do for you!</p>
            </div>

            {/* Second Row */}
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col">
                {/* Image column */}
                <Image src={formImg} alt="" />
              </div>
              <div className="col content-center">
                {/* form column */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 page-width space-y-4 bg-[#C84309]">
        <Slider />
        <div className="flex items-center justify-center  pt-8 md:pt-0 pb-4">
          <Image
            src={communcationImg}
            alt="communication"
            width={80}
            height={80}
            className="mr-4 hidden md:block"
          />
          <h2 className="heading footer-class text-white">
            Mind Matters: Your Essential Psychologist{" "}
            <span className="">FAQ Guide </span>{" "}
          </h2>
        </div>
        <Accordion accordionData={accordionData} />

        <div className="flex items-center justify-between flex-wrap gap-4 md:pt-8">
          <div className="col-span-1">
            <p className=" text-white subheading footer-class pb-2">
              Still can&apos;t find your answer? <br />
              <span className="text-white">
                Contact us for personalized support and guidance!
              </span>
            </p>
          </div>
          <div className="col-span-1 flex items-end justify-end">
            <div className="flex items-center gap-2">
              <p className="text-white font-semibold">Connect With Us</p>
              <Link
                aria-label="contact"
                className="btn btn-circle btn-primary hover:animate-pulse"
                href="#contact-us"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 27 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
