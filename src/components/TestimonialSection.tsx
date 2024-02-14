import P from "../assets/profile1.png";
const TestimonialSection = () => {
	return (
		<div className="bg-CBlue">
			<div className="container mx-auto  bgI">
				<div className="px-10 py-24 flex flex-col items-center gap-8 text-white w-full md:w-3/4 lg:w-1/2 mx-auto ">
					<h6 className="text-CHover font-bold text-sm uppercase">Testimonial</h6>
					<q className="text-3xl font-bold text-center">
						Simply the best. Better than all the rest. I’d recommend this product to beginners and
						advanced users.
					</q>
					<div className="flex flex-col gap-3 items-center">
						<img src={P} alt="profile pic" className="rounded-full h-20" />
						<p>Ian Klein</p>
						<p className="opacity-65">Digital Marketer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
