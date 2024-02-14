import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faLinkedin,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<section className="bg-CDark">
			<div className="container mx-auto px-10">
				<div className="py-16 flex flex-col md:flex-row justify-between gap-y-10">
					<div className="text-white basis-1/2 flex flex-col gap-5">
						<h2 className="text-3xl font-bold text-center md:text-left">
							Ready to launch your next project?
						</h2>
						<p className="text-lg opacity-65 text-center md:text-left">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page.
						</p>
					</div>
					<div className="flex justify-center items-center">
						<button className="bg-CBlue text-white font-bold rounded-lg px-4 py-3">
							Get started a project
						</button>
					</div>
				</div>
				<div className="border-t border-solid border-[#272B39] w-full"></div>
				<div className="py-24 flex flex-col lg:flex-row justify-between gap-y-10">
					<div className="flex flex-col gap-8 text-white basis-1/4 order-2 lg:order-1">
						<h3 className="text-3xl font-bold text-center md:text-left">Brainwave.io</h3>
						<p className="opacity-65 text-center md:text-left">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page.
						</p>
						<div className="flex justify-center md:justify-start gap-5">
							<a href="https://www.twitter.com" className="opacity-65 hover:text-CHover">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href="https://www.facebook.com" className="opacity-65 hover:text-CHover">
								<FontAwesomeIcon icon={faSquareFacebook} />
							</a>
							<a href="https://www.instagram.com" className="opacity-65 hover:text-CHover">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="https://www.linkedin.com" className="opacity-65 hover:text-CHover">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-x-20 gap-y-10 order-1 lg:order-2">
						<div className="flex flex-col items-center md:items-start text-center md:text-left text-white gap-5">
							<h6 className="opacity-65">Company</h6>
							<ul className="">
								<li>
									<a href="#" className="hover:text-CHover">
										About us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Contact us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Press
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-center md:items-start text-center md:text-left text-white gap-5">
							<h6 className="opacity-65">Product</h6>
							<ul className="">
								<li>
									<a href="#" className="hover:text-CHover">
										Features
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										News
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Help desk
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Support
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-center md:items-start text-center md:text-left text-white gap-5">
							<h6 className="opacity-65">Services</h6>
							<ul className="">
								<li>
									<a href="#" className="hover:text-CHover">
										Digital Marketing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Content Writing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										SEO for Business
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										UI Design
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-center md:items-start text-center md:text-left text-white gap-5">
							<h6 className="opacity-65">Legal</h6>
							<ul className="">
								<li>
									<a href="#" className="hover:text-CHover">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Terms & Conditions
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CHover">
										Return Policy
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
