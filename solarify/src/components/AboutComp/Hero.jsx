import React from 'react'
const iconArray=[
    {
        id:1,

        icon:"45",
        heading:"Released Projects",
        desc:"Successfully finished projects within deadline"
    }
]


const Hero = () => {
  return (
    <div className="w-full min-h-screen">
        <div className="w-[80%] mx-auto flex justify-between">
            <div className="flex flex-col gap-10">
                <h1 className="text-5xl font-bold">ABOUT SOLARIFY.</h1>
                <div className="flex w-full ">
                    <div className="border-r-2 p-2 flex flex-col">
                        icons
                        <h1>heading</h1>
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <div className="w-80">
                <img className="w-full" src="/About/hero.avif" alt="" />

            </div>
        </div>
    </div>
  )
}

export default Hero;