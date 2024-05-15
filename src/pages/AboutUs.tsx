import ourmission from "../assets/our-mission.png"
import ourvission from "../assets/our-vission.png"
import ourexpertise from "../assets/aboutus-our-expertise.jpg"

function AboutUs() {
  return (
    <div>
      <section className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48">
        <div className="absolute inset-0 bg-[#4338ca] bg-gradient-to-r from-[#4338ca] to-[#6366f1] "></div>
        <div className="container px-4 md:px-6">
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">About Our IT Company</h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              Discover how our team of experts can transform your business with cutting-edge project management and
              software development services.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800 ">
              About Us
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Empowering Businesses with Innovative IT Solutions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At our company, we are dedicated to transforming businesses with cutting-edge IT solutions. Our mission is
              to provid
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t-2">
        <div className="container px-4 md:px-6 ">
          <div className="space-y-6 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Experts Behind Our Success
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our talented team of project managers, software developers, and designers are dedicated to delivering
              exceptional results for our clients.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-3">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">KB</span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Krunal Bhadesiya</h3>
                  <p className="text-gray-500 dark:text-gray-400">Web Devloper And Software Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">HP</span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Himanshu Patel</h3>
                  <p className="text-gray-500 dark:text-gray-400">Software Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">HP</span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Harsh Patel</h3>
                  <p className="text-gray-500 dark:text-gray-400">Web Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">John Davis</h3>
                  <p className="text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t-2">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Delivering Innovative IT Solutions
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to provide cutting-edge project management and software development services that help our
                clients achieve their business goals. We believe in delivering innovative solutions that drive growth and
                efficiency.
              </p>
            </div>
            <img
              src={ourmission}
              width="550"
              height="310"
              alt="Mission"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t-2">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <img
              src={ourvission}
              width="550"
              height="310"
              alt="Values"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">Our Vision</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforming Businesses with Cutting-Edge IT Solutions
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our vision is to be the leading provider of innovative IT solutions that empower businesses to achieve
                their goals. We strive to continuously evolve our services and stay at the forefront of technology to
                deliver exceptional value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">
                Our Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Transforming Businesses with Cutting-Edge IT Solutions
              </h2>
              <p className="text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experts specializes in delivering innovative project management and software development
                services that drive growth and efficiency for our clients. We stay at the forefront of technology to
                provide cutting-edge solutions that help businesses achieve their goals.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 text-white border-white hover:bg-white hover:text-[#4338ca]">
                Learn More
              </button>
            </div>
            <img
              src={ourexpertise}
              width="550"
              height="310"
              alt="Expertise"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs