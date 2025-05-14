import React from 'react'



const Hero = () => {
  return (
    <div className="w-full min-h-screen">
        <div className="max-w-lg mx-auto flex justify-around">
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
            <div>
                <img src="/About/hero.avif" alt="" />

            </div>
        </div>
    </div>
  )
}

export default Hero;