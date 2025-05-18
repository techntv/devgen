import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import {
	IoIosArrowForward,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoTwitter,
} from "react-icons/io";
import {
	FaCss3,
	FaDatabase,
	FaHtml5,
	FaJs,
	FaPython,
	FaReact,
	FaAws,
	FaDocker,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";

export default function Home() {
	return (
		<div className="max-w-3xl mx-auto px-4 py-12">
			{/* Greeting Box */}
			<div className="rounded-lg mb-6 p-3 text-center bg-[#323234] backdrop-blur-md shadow">
				Hello, I&apos;m Vinh Nguyen, a frontend engineer based in Vietnam!
			</div>

			{/* Profile Section */}
			<div className="flex flex-col md:flex-row items-center mb-8">
				<div className="flex-1 text-center md:text-left">
					<h2 className="text-3xl font-bold mb-2">Vinh Nguyen</h2>
					<p className="text-white">
						Digital Craftsman (Developer / Investor / Entrepreneur)
					</p>
				</div>
				<div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 text-center">
					<div className="w-24 h-24 rounded-full border-2 border-white overflow-hidden inline-block">
						<Image
							src="/vinhnguyen.jpeg"
							alt="Profile image"
							width={100}
							height={100}
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</div>

			{/* Projects Section */}
			<section className="mb-10">
				<h3 className="text-2xl font-semibold mb-3">Projects</h3>
				<p className="mb-4 text-white">
					Vinh is a frontend engineer based in Ho Chi Minh City with a passion
					for building digital services/products like SaaS, Web Appllication,
					Website, Portfolio, Blog, etc.
				</p>

				<p className="mb-4 text-white">
					He love to work with Javascript, Python and AI. He has a knack for all
					things launching products, from planning and designing all the way to
					solving real-life problems with code.
				</p>

				<p className="mb-4 text-white">
					When not online, he loves hanging out with his camera, and discover
					hidden nature gems in Vietnam, Asia and around the world
				</p>

				<div className="mx-auto flex justify-center items-center">
					<Link
						href="/projects"
						className="btn bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
					>
						My projects <IoIosArrowForward className="ml-2" />
					</Link>
				</div>
			</section>

			<section className="mb-10">
				<h3 className="text-2xl font-semibold mb-3">Skills</h3>
				<div className="flex flex-wrap gap-2">
					{/* Frontend */}
					<FaHtml5 className="text-8xl text-teal-400 size-10 w-8 h-8" />
					<FaCss3 className="text-8xl text-teal-400 size-10 w-8 h-8" />
					<FaJs className="text-8xl text-teal-400 size-10 w-8 h-8" />
					<BiLogoTypescript className="text-8xl text-teal-400 size-10 w-8 h-8" />
					<FaReact className="text-8xl text-teal-400 size-10 w-8 h-8" />

					{/* Server Side */}
					<FaPython className="text-8xl text-teal-400 size-10 w-8 h-8" />
					<DiNodejs className="text-8xl text-teal-400 size-10 w-8 h-8" />

					{/* Database */}
					<FaDatabase className="text-8xl text-teal-400 size-10 w-8 h-8" />

					{/* Infrastructure */}
					<FaDocker className="text-8xl text-teal-400 size-10 w-8 h-8" />
					<FaAws className="text-8xl text-teal-400 size-10 w-8 h-8" />
				</div>
			</section>

			{/* On the Web Section */}
			<section className="mb-10">
				<h3 className="text-2xl font-semibold mb-3">On the web</h3>
				<ul className="">
					<li>
						<a
							href="https://github.com/craftzdog"
							target="_blank"
							rel="noreferrer"
						>
							<span className="inline-flex items-center px-4 py-2 transition text-teal-400 font-semibold">
								<IoLogoGithub className="mr-2 w-5 h-5" />
								@techntv
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://twitter.com/craftzdog"
							target="_blank"
							rel="noreferrer"
						>
							<span className="inline-flex items-center px-4 py-2 transition text-teal-400 font-semibold">
								<IoLogoTwitter className="mr-2 w-5 h-5" />
								@devgen
							</span>
						</a>
					</li>
					<li>
						<a
							href="https://instagram.com/craftzdog"
							target="_blank"
							rel="noreferrer"
						>
							<span className="inline-flex items-center px-4 py-2 transition text-teal-400 font-semibold">
								<IoLogoInstagram className="mr-2 w-5 h-5" />
								@devgen
							</span>
						</a>
					</li>
				</ul>

				{/* Grid Items */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<a
						href="https://www.youtube.com/devgen"
						target="_blank"
						rel="noreferrer"
						className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
					>
						<Image
							src="/window.svg"
							alt="Dev Gen"
							width={400}
							height={225}
							className="w-full h-32 object-cover"
						/>
						<div className="p-4">
							<h4 className="font-semibold">Dev Gen</h4>
							<p className="text-white text-sm">
								My YouTube channel (&gt;200k subs)
							</p>
						</div>
					</a>
					{/* <a
							href="https://www.inkdrop.app/"
							target="_blank"
							rel="noreferrer"
							className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
						>
							<Image
								src="/images/works/inkdrop_eyecatch.png"
								alt="Inkdrop"
								width={400}
								height={225}
								className="w-full h-32 object-cover"
							/>
							<div className="p-4">
								<h4 className="font-semibold">Inkdrop</h4>
								<p className="text-white text-sm">A Markdown note-taking app</p>
							</div>
						</a> */}
				</div>

				<h3 className="text-2xl font-semibold mb-3">Newsletter</h3>
				<p className="mb-4">
					Join me on a behind-the-scenes coding journey. Weekly updates on
					projects, tutorials, and videos
				</p>
				<div className="text-center my-4">
					<a
						href="https://www.devgen.substack.com/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-teal-700 transition"
					>
						<HiOutlineMail className="mr-2 w-5 h-5" />
						Sign up my newsletter here
					</a>
				</div>
			</section>
		</div>
	);
}
