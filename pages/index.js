import Image from "next/image";
export default function Home() {
  return (
    <div className="py-8 px-8 max-w-md mx-auto bg-white rounded-md shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <Image
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="/images/pp.png"
        alt="Profile Picture"
        width={100}
        height={100}
      />

      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <a href="https://www.linkedin.com/in/chitrang313/" target="_blank">
            <p class="text-lg text-black font-semibold">Hi, I am Chitrang</p>
          </a>

          <a href="https://www.ncoregames.com/" target="_blank">
            <p class="text-slate-700 font-bold">Software Engineer</p>
            <p class="text-slate-500 font-medium">Game & Web Developer</p>
            <p class="text-slate-500 font-medium">
              Brings ideas to life with code
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
