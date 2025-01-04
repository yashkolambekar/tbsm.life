"use client";

const Hero = () => {
    return (
        <>
            <div className="relative">
                <div className="w-full h-[100dvh] flex flex-col items-center justify-center overflow-clip bg-[rgba(0,0,0,0.5)] p-2">    
                    <p className="teko text-[6em] md:text-[8em] italic h-[1em] mb-2 md:mb-4">tbsm.life</p>
                    <p className="text-balance text-center">A fan-ran platform for everyone who believes in <span className="font-bold">Tera Bhai SeedheMaut</span></p>
                </div>
                <div className="w-full h-[100dvh] flex flex-col items-center justify-center overflow-clip absolute top-0 z-[-1]">
                <video className="w-full h-full object-cover" preload="none" controls={false} autoPlay={true} loop={true} muted={true} src="/assets/videos/tbsmhero.mp4" />
                </div>
            </div>
        </>
    )
}

export default Hero;