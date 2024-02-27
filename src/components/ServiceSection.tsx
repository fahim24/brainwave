import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pat1 from "../assets/pattern2.svg";
import DI from "../assets/designerI.svg";
import WI from "../assets/programmingI.svg";
import CI from "../assets/notesI.svg";

const ServiceSection = () => {
	return (
		<section className="container mx-auto px-10 py-24">
			<div className="flex flex-col gap-10 items-center w-full md:w-3/4 lg:w-1/2 mx-auto">
				<p className="text-CRed font-bold text-sm uppercase">Our services</p>
				<h3 className="text-CDark text-3xl font-bold text-center">
					We provide great services for our customers based on needs
				</h3>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 relative">
				<img
					src={Pat1}
					alt="pattern"
					className="absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 z-[-1]"
				/>
				<div className="bg-CHover rounded-lg px-8 py-10 flex flex-col md:flex-row lg:flex-col gap-10">
					<img src={DI} alt="icon" className="h-32" />
					<div className="flex flex-col gap-10">
						<div className="flex flex-col gap-4 text-white text-center">
							<h3 className="text-2xl font-bold">Graphic Design</h3>
							<p className="text-center opacity-65">
								With lots of unique blocks, you can easily build a page without coding. Build your
								next landing page.
							</p>
						</div>
						<button className="text-white font-bold flex gap-3 items-center justify-center hover:text-CDark">
							Learn more
							<span>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</button>
					</div>
				</div>
				<div className="bg-CBlue rounded-lg px-8 py-10 flex flex-col md:flex-row lg:flex-col gap-10 shadow1">
					<img src={WI} alt="icon" className="h-32" />
					<div className="flex flex-col gap-10">
						<div className="flex flex-col gap-4 text-white text-center">
							<h3 className="text-2xl font-bold">Web Development</h3>
							<p className="text-center opacity-65">
								With lots of unique blocks, you can easily build a page without coding. Build your
								next landing page.
							</p>
						</div>
						<button className="text-white font-bold flex gap-3 items-center justify-center hover:text-CDark">
							Learn more
							<span>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</button>
					</div>
				</div>
				<div className="bg-CRed rounded-lg px-8 py-10 flex flex-col md:flex-row lg:flex-col gap-10">
					<img src={CI} alt="icon" className="h-32" />
					<div className="flex flex-col gap-10">
						<div className="flex flex-col gap-4 text-white text-center">
							<h3 className="text-2xl font-bold">Content Writing</h3>
							<p className="text-center opacity-65">
								With lots of unique blocks, you can easily build a page without coding. Build your
								next landing page.
							</p>
						</div>
						<button className="text-white font-bold flex gap-3 items-center justify-center hover:text-CDark">
							Learn more
							<span>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
