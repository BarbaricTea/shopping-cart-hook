import Link from 'next/link';

export default function HeroMessage() {
  return (
    <main className="mx-auto mt-6 max-w-7xl px-4 sm:px-6  lg:px-8 ">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">New arrivals</span>{' '}
          <span className="block text-cyan-600 xl:inline">Spring 2022</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Thoughtfully designed objects for the workspace, home, and travel.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              href="/#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 md:px-10 md:py-4 md:text-lg"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
