import Image from "next/image"

function Tech() {
    return (
        <div className="mb-8 px-5 xl:px-0">
            <div className="max-w-6xl m-auto">
                <div>
                    <h4 className="text-3xl md:text-5xl pb-10 font-bold">Technonologies <span className="sm:block"> we use.</span></h4>
                    <div>
                        <Image src="/tech.svg" width="450px" height="300px" alt="web technologies we use at atoncemedia" />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Tech;