import React from 'react'
import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'
export interface propTypes {
    backgroundImage: string
    title: string
    subTitle: string
    peopleJoined: string
}
const CampSite = ({ backgroundImage, title, subTitle, peopleJoined }: propTypes) => {
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-r-5xl 2xl:rounded-5xl`}>
            <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-blue-500'>
                <div className='flexCenter gap-4'>
                    <div className='rounded-full bg-green-50 p-4'>
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='bold-18 text-white'>{title}</h4>
                        <p className='regular-14 text-white'>{subTitle}</p>
                    </div>
                </div>

                <div className='flexCenter gap-6'>
                    <span className='flex -space-x-4 overflow-hidden'>
                        {PEOPLE_URL.map((ele) => (
                            <Image
                              className='inline-block h-10 w-10 rounded-full'
                                src={ele}
                                alt="person"
                                width={44}
                                height={44}
                            />
                        )
                        )}

                    </span>
                    <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
                </div>
            </div>
        </div>
    )
}

export default CampSite