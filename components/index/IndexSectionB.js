import React from 'react'
import Image from "next/image"
function IndexSectionB() {
    return (
        <div className="bg-[#f4f4f4] font-display py-10">
            <div className="flex flex-col px-5 md:flex-row max-w-6xl m-auto md:items-center xl:px-0">
                <div className="md:max-w-md lg:max-w-xl">
                    <Image src="/why-choose-us.svg" width="600px" height="600px" alt="atoncemedia - why choose us" />
                </div>
                <div className="md:max-w-sm md:pl-12 lg:max-w-xl">
                    <h2 className="text-3xl pt-9 md:pt-0 lg:text-5xl pr-24 font-semibold pb-10">Reasons why we are the team you need.</h2>
                    <div className="pb-6">
                        <h3 className="pb-4 font-semibold text-xl">Creativity</h3>
                        <p className="text-slate-700">First impression counts even in business, that&apos;s why we always create custom designs for each customer because we value that unique look and feel.</p>
                    </div>
                    <div>
                        <h3 className="pb-4 font-semibold text-xl">Dedication</h3>
                        <p className="text-slate-700">We love what we do and we do it best. We are a team that&apos;s always looking for the best and effective tools that helps our clients grow their businesses.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexSectionB