
import Image from "next/image";
import { Eye, Heart, MessageCircle, Users } from "lucide-react";

export default function HeroPhone() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff4d12]/15 blur-[90px]" />

      {/* Phone */}
      <div className="relative mx-auto w-[265px] sm:w-[280px]">
        <div className="relative aspect-[0.49] overflow-hidden rounded-[42px] border-[5px] border-[#242321] bg-black p-[5px] shadow-[0_25px_70px_rgba(40,25,15,0.22)] sm:rounded-[48px]">
          <div className="relative h-full overflow-hidden rounded-[34px] bg-[#171614] sm:rounded-[40px]">
            <Image
              src="/images/car-phone.jpg"
              alt="Premium car featured in our Dubai sourcing collection"
              fill
              priority
              sizes="280px"
              className="object-cover"
            />

            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />

            {/* Phone camera island */}
            <div className="absolute left-1/2 top-3 z-10 h-6 w-[82px] -translate-x-1/2 rounded-full bg-black" />

            {/* Content inside phone */}
            <div className="absolute inset-x-4 bottom-5 text-white sm:bottom-7">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] backdrop-blur">
                Featured vehicle
              </span>

              <h3 className="mt-3 text-2xl font-medium tracking-tight">
                Find your
                <br />
                next drive.
              </h3>

              <p className="mt-2 text-[10px] leading-4 text-white/70">
                Discover vehicles sourced around your preferences.
              </p>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                <div>
                  <p className="text-[9px] text-white/60">
                    YOUR NEXT CAR
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    Handpicked for you
                  </p>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff4d12]">
                  <Eye size={15} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Phone side buttons */}
        <span className="absolute -right-[6px] top-24 h-12 w-[3px] rounded-r bg-[#55514d]" />
        <span className="absolute -left-[6px] top-20 h-9 w-[3px] rounded-l bg-[#55514d]" />

        {/* Floating notification cards */}
        <div className="absolute -left-12 top-[15%] flex rotate-[-9deg] items-center gap-2 rounded-2xl border border-white/80 bg-[#ff6740] px-3 py-2.5 text-white shadow-[0_15px_35px_rgba(255,77,18,0.22)] sm:-left-16 sm:px-4">
          <Heart size={21} fill="white" />
          <div>
            <p className="text-xs font-bold">Your next car</p>
            <p className="text-[9px] text-white/80">Starts here</p>
          </div>
        </div>

        <div className="absolute -right-10 top-[28%] flex rotate-[7deg] items-center gap-2 rounded-xl border border-white bg-white px-3 py-2.5 shadow-xl sm:-right-14">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e9] text-[#ff4d12]">
            <Users size={17} />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-[#171614]">
              Made for you
            </p>
            <p className="text-[9px] text-[#82766f]">
              Personalised sourcing
            </p>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-7 flex items-center gap-2 rounded-xl border border-white bg-white px-3 py-2.5 shadow-xl sm:-left-12">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e9] text-[#ff4d12]">
            <MessageCircle size={17} />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-[#171614]">
              Tell us what you need
            </p>
            <p className="text-[9px] text-[#82766f]">
              We find the right match
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}