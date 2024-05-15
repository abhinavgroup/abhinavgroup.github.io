import { ArrowRight, ArrowSwapVertical, Award, LampOn, Lock, Monitor, SearchNormal1, ShieldSecurity, User } from "iconsax-react";
import heroimg from "../assets/hero-1.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:pt-24 lg:pt-32 border-y relative">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div className="">
                  <img src={heroimg} className=" w-5/6 inset-0 object-cover" alt="" />
                </div>
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    The Potential of Innovation with Abhinav Group: Empowering Your IT Solutions
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                    Unlock your company's full potential with our comprehensive project management and software
                    development services.
                  </p>
                  <div className="mt-6 space-x-4">
                    <Link to="/contactus" className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                      Get a Quote
                    </Link>
                    <Link to="/service" className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800 ">Our Services</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive IT Solutions</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    From project management to software development and web development, we offer a wide range of services
                    to help your business thrive.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
                <div className="grid gap-1 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <h3 className="text-lg font-bold">Project Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our experienced project managers ensure your projects are delivered on time and within budget.
                  </p>
                  <a
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50 gap-2"
                    href="#"
                  >
                    Learn More
                    <ArrowRight variant="TwoTone" />
                  </a>
                </div>
                <div className="grid gap-1 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <h3 className="text-lg font-bold">Software Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our team of skilled developers create custom software solutions tailored to your business needs.
                  </p>
                  <a
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50 gap-2"
                    href="#"
                  >
                    Learn More
                    <ArrowRight variant="TwoTone" />
                  </a>
                </div>
                <div className="grid gap-1 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <h3 className="text-lg font-bold">Web Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our web development experts create visually appealing and user-friendly websites tailored to your
                    business needs.
                  </p>
                  <a
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50 gap-2"
                    href="#"
                  >
                    Learn More
                    <ArrowRight variant="TwoTone" />
                  </a>
                </div>
                <div className="grid gap-1 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <h3 className="text-lg font-bold">IT Consulting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our IT experts provide strategic guidance to help you make informed decisions for your business.
                  </p>
                  <a
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50 gap-2"
                    href="#"
                  >
                    Learn More
                    <ArrowRight variant="TwoTone" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Abhinav Group IT Solutions?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are a team of experienced professionals dedicated to delivering exceptional IT services that drive
                  your business forward.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Expertise</h3>
                    <Award size={32} variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Our team of experts has years of experience in the IT industry, ensuring your projects are in capable
                    hands.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Reliability</h3>
                    <Lock size="32" variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    We are committed to delivering high-quality services and meeting your deadlines, ensuring your
                    projects are a success.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Innovation</h3>
                    <LampOn size={32} variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    We stay up-to-date with the latest technologies and industry trends, ensuring your business stays
                    ahead of the curve.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">R&amp;D</h3>
                    <SearchNormal1 size={32} variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Our dedicated R&amp;D team constantly explores new technologies and methodologies to provide
                    innovative solutions for our clients.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Scalability</h3>
                    <ArrowSwapVertical size={32} variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Our solutions are designed to scale with your business, ensuring you can meet growing demands without
                    disruption.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">User Experience</h3>
                    <User size={32} variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    We prioritize user experience in our solutions, ensuring your customers and employees have a seamless
                    and intuitive interaction with your systems.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">User Interface</h3>
                    <Monitor size="32" variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Our design team crafts visually appealing and intuitive user interfaces that enhance the overall
                    experience for your customers and employees.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Security Support</h3>
                    <ShieldSecurity size="32" variant="TwoTone" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Our security experts provide comprehensive support to ensure your systems and data are protected from
                    cyber threats.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">Contact Us</div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Let's discuss your IT needs
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Our team is ready to help you find the right IT solutions for your business. Get in touch with us
                    today to get started.
                  </p>
                  <Link to="/contactus" className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" >
                    Contact Us
                  </Link>
                </div>
                {/* <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">Our Clients</div>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    We've had the privilege of working with a diverse range of clients across various industries.
                  </p>
                  <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x rounded-lg border dark:border-gray-800">
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </main>
        {/* <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
    <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
      <div className="grid gap-1">
        <h3 className="font-semibold">Company</h3>
        <a href="#">About Us</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">News</a>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Services</h3>
        <a href="#">Project Management</a>
        <a href="#">Software Development</a>
        <a href="#">IT Consulting</a>
        <a href="#">Cloud Solutions</a>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Resources</h3>
        <a href="#">Blog</a>
        <a href="#">Case Studies</a>
        <a href="#">Whitepapers</a>
        <a href="#">FAQs</a>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Legal</h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Contact</h3>
        <a href="#">Email</a>
        <a href="#">Phone</a>
        <a href="#">Address</a>
        <a href="#">Support</a>
      </div>
    </div>
  </footer> */}
      </div>
    </div>
  )
}

export default Home