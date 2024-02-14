import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import P1 from "../assets/product1.png";
import P2 from "../assets/product2.png";
import P3 from "../assets/product3.png";
import P4 from "../assets/product4.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductSection = () => {
	return (
		<div className="container mx-auto px-10 py-24">
			<div className="flex flex-col gap-20">
				<div className="flex flex-col gap-10 items-center w-full md:w-3/4 lg:w-1/2 mx-auto">
					<p className="text-CRed font-bold text-sm uppercase">Case studies</p>
					<h3 className="text-CDark text-3xl font-bold text-center">
						Our works describe why we are the best in the business
					</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2  gap-16">
					<div className="flex flex-col gap-8 md:row-start-1 row-span-2">
						<img src={P1} alt="product cover" className="object-cover rounded-lg" />
						<div className="flex flex-col gap-2 text-CDark px-8">
							<p className="opacity-70">Graphic Design</p>
							<h4 className="text-xl font-bold">Aura Branding Design</h4>
						</div>
					</div>
					<div className="flex flex-col gap-8 md:row-start-1 ">
						<img src={P2} alt="product cover" className="object-cover rounded-lg" />
						<div className="flex flex-col gap-2 text-CDark px-8">
							<p className="opacity-70">Graphic Design</p>
							<h4 className="text-xl font-bold">AB.S Snack Packaging</h4>
						</div>
					</div>
					<div className="flex flex-col gap-8 md:row-start-3 ">
						<img src={P3} alt="product cover" className="object-cover rounded-lg" />
						<div className="flex flex-col gap-2 text-CDark px-8">
							<p className="opacity-70">Web Development</p>
							<h4 className="text-xl font-bold">Gradient Website Development</h4>
						</div>
					</div>
					<div className="flex flex-col gap-8 md:row-start-2 row-span-2">
						<img src={P4} alt="product cover" className="object-cover rounded-lg" />
						<div className="flex flex-col gap-2 text-CDark px-8">
							<p className="opacity-70">Content Writing</p>
							<h4 className="text-xl font-bold">Magazine Content Writing</h4>
						</div>
					</div>
				</div>
				<button className="text-CBlue font-bold text-lg flex gap-3 items-center justify-center">
					See all works
					<span>
						<FontAwesomeIcon icon={faArrowRight} />
					</span>
				</button>
			</div>
		</div>
	);
};

export default ProductSection;
