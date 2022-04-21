import React from 'react'
import Service from "./Service"

const ServicesData = [
    {
        "title": "UX/UI Design",
        "imageUrl": "/ux-design.svg",
        "content": "We love what we do and we do it best. We are a team that's always looking for the best and effective tools that helps our clients grow their businesses."
    },
    {
        "title": "App Development",
        "imageUrl": "/web-dev.svg",
        "content": "We love what we do and we do it best. We are a team that's always looking for the best and effective tools that helps our clients grow their businesses."
    },
    {
        "title": "Graphic Design",
        "imageUrl": "/graphic-design.svg",
        "content": "We love what we do and we do it best. We are a team that's always looking for the best and effective tools that helps our clients grow their businesses."
    },
    {
        "title": "Website Development",
        "imageUrl": "/web.svg",
        "content": "We love what we do and we do it best. We are a team that's always looking for the best and effective tools that helps our clients grow their businesses."
    },
    {
        "title": "Photography",
        "imageUrl": "/photography.svg",
        "content": "We love what we do and we do it best. We are a team that's always looking for the best and effective tools that helps our clients grow their businesses."
    },
    {
        "title": "Branding",
        "imageUrl": "/branding.svg",
        "content": "We love what we do and we do it best. We are a team that's always looking for the best and effective tools that helps our clients grow their businesses."
    }
]

function IndexSectionC() {
    return (
        <div className="py-24 px-5 xl:px-0">
            <div className="max-w-6xl mx-auto font-display relative">
                <h1 className=" static z-50 text-3xl md:text-5xl pb-10 font-semibold">What we do.</h1>
                <div className="grid md:grid-cols-3 gap-10  lg:gap-y-20 relative z-10">
                    {ServicesData.map((data, i) => {
                        return <Service key={i} title={data.title} content={data.content} imageUrl={data.imageUrl} />
                    })}
                </div>
                <div className="absolute -z-50 top-0 right-0">
                    <h2 className="text-9xl lg:text-[200px] text-[#f4f4f4] leading-[80%] font-bold uppercase">Serv <span className="block">ices</span></h2>
                </div>
            </div>
        </div>
    )
}

export default IndexSectionC