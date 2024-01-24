import CampSite from "./CampSite"
import Image from "next/image"

const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div>
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[744px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regualr-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost </strong>and Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image
          className="camp-quote"
          src="/quote.svg"
          alt="quote"
          width={186}
          height={219}
          />
        </div>
      </div>
    </section>
  )
}

export default Camp