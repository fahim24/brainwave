import MI from "../assets/managerI.svg";
import TI from "../assets/tasksI.svg";
import SI from "../assets/sharingI.svg";
import DI from "../assets/deadlineI.svg";
import P1 from "../assets/pattern1.svg";
import { Divider } from "antd";

const AboutSection = () => {
	return (
		<section className="bg-[#F4F7FA] relative">
			<img
				src={P1}
				alt="pattern"
				className="hidden md:block absolute left-0 top-1/4 -translate-y-1/2 "
			/>
			<div className="container mx-auto px-10">
				<div className="py-24 flex flex-col gap-20">
					<div className="flex flex-col gap-10 items-center w-full md:w-3/4 lg:w-1/2 mx-auto">
						<p className="text-CRed font-bold text-sm uppercase">Why choose us</p>
						<h3 className="text-CDark text-3xl font-bold text-center">
							People choose us because we serve the best for everyone
						</h3>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-5/6 mx-auto gap-14">
						<div className="flex gap-8">
							<img src={MI} alt="Icon" />
							<div className="flex flex-col gap-4 text-CDark">
								<h4 className="text-xl font-bold">Dedicated project manager</h4>
								<p className="opacity-70">
									With lots of unique blocks, you can easily build a page without coding. Build your
									next landing page.
								</p>
							</div>
						</div>
						<div className="flex gap-8">
							<img src={TI} alt="Icon" />
							<div className="flex flex-col gap-4 text-CDark ">
								<h4 className="text-xl font-bold">Organized tasks</h4>
								<p className="opacity-70">
									With lots of unique blocks, you can easily build a page without coding. Build your
									next landing page.
								</p>
							</div>
						</div>
						<div className="flex gap-8">
							<img src={SI} alt="Icon" />
							<div className="flex flex-col gap-4 text-CDark">
								<h4 className="text-xl font-bold">Easy feedback sharing</h4>
								<p className=" opacity-70">
									With lots of unique blocks, you can easily build a page without coding. Build your
									next landing page.
								</p>
							</div>
						</div>
						<div className="flex gap-8">
							<img src={DI} alt="Icon" />
							<div className="flex flex-col gap-4 text-CDark">
								<h4 className="text-xl font-bold">Never miss deadline</h4>
								<p className=" opacity-70">
									With lots of unique blocks, you can easily build a page without coding. Build your
									next landing page.
								</p>
							</div>
						</div>
					</div>
				</div>
				<Divider />
				<div className="py-16 flex flex-col md:flex-row justify-between gap-y-10">
					<div className="text-CDark basis-1/2 flex flex-col gap-5">
						<h2 className="text-3xl font-bold text-center md:text-left">
							Ready to launch your next project?
						</h2>
						<p className="text-lg opacity-65 text-center md:text-left">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page.
						</p>
					</div>
					<div className="flex justify-center items-center">
						<button className="bg-CBlue text-white font-bold rounded-lg px-4 py-3 hover:opacity-90">
							Get started a project
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
