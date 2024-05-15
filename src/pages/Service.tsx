import { Code, Global, PresentionChart } from "iconsax-react"
import { Link } from "react-router-dom"

function Service() {
  return (
    <div>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive IT Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From project management to software development, we offer a wide range of services to meet your
                business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
              <PresentionChart size="48" variant="TwoTone" />
              <h3 className="text-xl font-bold">Project Management</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Streamline your projects with our expert project management services. We'll help you stay on track and
                deliver results.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
              <Code size="48" variant="TwoTone" />
              <h3 className="text-xl font-bold">Software Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Bring your ideas to life with our expert software development team. We'll build custom solutions
                tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
              <Global size="48" variant="TwoTone" />
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Elevate your online presence with our web development services. We'll create a stunning, responsive
                website that drives results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Unlock Your Team's Potential</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our comprehensive IT services are designed to help your team achieve more. From streamlined project
              management to cutting-edge software development, we'll empower your business to reach new heights.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              to="/contactus"
            >
              Contact Us
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              to="/aboutus"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service