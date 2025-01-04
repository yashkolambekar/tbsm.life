"use client";

const Hero = () => {
    return (
        <>
            <div className="relative">
                <div className="w-full h-[100dvh] flex flex-col items-center justify-center overflow-clip bg-[rgba(0,0,0,0.5)]">    
                    <p className="teko text-[8em] italic h-[1em] mb-4">tbsm.life</p>
                    <p>A fan-ran platform for everyone who believes in Tera Bhai SeedheMaut</p>
                </div>
                <div className="w-full h-[100dvh] flex flex-col items-center justify-center overflow-clip absolute top-0 z-[-1]">
                <video className="w-full h-full object-cover" preload="none" autoPlay={true} loop={true} muted={true} src="/assets/videos/tbsmhero.mp4" />
                </div>
            </div>
        </>
    )
}

export default Hero;