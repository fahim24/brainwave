import P1 from "../assets/profile3.png";
import Pat1 from "../assets/pattern3.svg";
import Pat2 from "../assets/pattern4.svg";
import Pat3 from "../assets/pattern5.svg";
import NavSection from "./NavSection";
const HeroSection = () => {
	return (
		<div className="relative">
			<div className="bg-[#f4f7fa] w-full h-full absolute top-0 left-0 z-[-2]"></div>
			<div className="bgI2 absolute w-full h-full top-0 left-0 z-[-1]"></div>
			<section className="container mx-auto px-10 ">
				<NavSection />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 py-20 lg:py-40">
					<div className="flex flex-col gap-10">
						<p className="text-CRed text-sm font-bold uppercase">Let’s shift your business</p>
						<h1 className="text-CDark font-bold text-5xl md:text-6xl">
							Shift your business fast with Shade Pro.
						</h1>
						<p className="text-CDark opacity-70 text-lg">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next consultancy website within few minutes.
						</p>
						<div>
							<button className="bg-CBlue text-white font-bold rounded-lg px-4 py-3">
								Get started a project
							</button>
						</div>
					</div>
					<div className="relative h-fit w-fit mx-auto">
						<img src={P1} alt="person pic" className="obejct-cover rounded-full " />
						<img
							src={Pat1}
							alt="pattern"
							className="absolute top-0 left-1/4 -translate-x-3/4 -translate-y-1/2 "
						/>
						<img src={Pat2} alt="pattern" className="absolute left-0 top-3/4" />
						<img src={Pat3} alt="pattern" className="absolute top-3/4 right-10" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
