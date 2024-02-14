import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import P1 from "../assets/profile2.png";
import P2 from "../assets/profile4.png";
import P3 from "../assets/profile5.png";
import P4 from "../assets/profile6.png";

import Pat1 from "../assets/pattern6.svg";

const StorySection = () => {
	return (
		<section className="container mx-auto px-10">
			<div className="flex flex-col md:flex-row gap-x-20 gap-y-10 md:p-10 lg:p-20 ">
				<img src={P1} alt="person pic" className="rounded-full h-40 w-40 object-cover mx-auto" />
				<div className="flex flex-col gap-6">
					<div className="text-[#FCAD38] flex justify-center md:justify-start gap-2 order-2 md:order-1">
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
					</div>
					<q className="text-CDark font-bold text-2xl text-center md:text-left order-3 md:order-2">
						OMG! I cannot believe that I have got a brand new landing page after getting Albino. It
						was super easy to edit and publish.
					</q>
					<div className="flex flex-col gap-2 text-CDark text-center md:text-left order-1 md:order-3">
						<p className=" font-bold">Franklin Hicks</p>
						<p className="opacity-70">Web Developer</p>
					</div>
				</div>
			</div>
			<div className="border-t border-solid border-[#E7E9ED] w-full"></div>
			<div className="py-24 flex flex-col gap-20">
				<div className="w-full md:w-3/4 lg:w-2/5 flex flex-col gap-10">
					<p className="text-CRed text-sm uppercase font-bold">Our Story</p>
					<h3 className="text-CDark font-bold text-3xl">
						We know how everything works and why your business is failing over and over again.
					</h3>
				</div>
				<div className="flex flex-col lg:flex-row gap-x-32 gap-y-16">
					<div className="shrink-0">
						<img src={P2} alt="" className="" />
					</div>
					<div className="flex flex-col gap-10">
						<div className="flex justify-between items-center lg:-translate-y-1/4 order-2 lg:order-1">
							<div className="relative">
								<img src={P3} alt="" className="object-cover" />
								<img
									src={Pat1}
									alt=""
									className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"
								/>
							</div>
							<img src={P4} alt="" className="hidden md:block h-40 w-40 object-cover rounded-lg" />
						</div>
						<div className="w-full lg:w-3/4 order-1 lg:order-2">
							<p className="text-CDark opacity-70">
								We share common trends and strategies for improving your rental income and making
								sure you stay in high demand. With lots of unique blocks, you can easily build a
								page without coding. Build your next landing page.
							</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
					<div className="flex flex-col gap-4 text-CDark">
						<h2 className="font-bold text-3xl text-center">1M+</h2>
						<p className="opacity-70 text-center text-lg">
							Customers visit Omega every month to get their service done.
						</p>
					</div>
					<div className="flex flex-col gap-4 text-CDark">
						<h2 className="font-bold text-3xl text-center">92%</h2>
						<p className="opacity-70 text-center text-lg">
							Satisfaction rate comes from our awesome customers.
						</p>
					</div>
					<div className="flex flex-col gap-4 text-CDark">
						<h2 className="font-bold text-3xl text-center">4.9/5.0</h2>
						<p className="opacity-70 text-center text-lg">
							Average customer ratings we have got all over internet.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StorySection;
