import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="max-w-[900px] mx-auto sticky top-0 z-50 flex">
			{/* Logo */}
			<div className="flex items-center gap-2 flex-1 justify-start">
				<Link href="/" className="font-bold text-xl text-white">
					Vinh Nguyen
				</Link>
			</div>
			{/* Menu */}
			<div className="flex gap-2 flex-1 justify-end">
				<Link
					href="/projects"
					className="btn btn-ghost btn-sm normal-case text-base"
				>
					Projects
				</Link>
				{/* <a
					href="#skills"
					className="btn btn-ghost btn-sm normal-case text-base"
				>
					Skills
				</a> */}
					{/* <Link
						href="/uses"
						className="btn btn-ghost btn-sm normal-case text-base"
					>
						Uses
					</Link> */}
				<Link
					href="/contact"
					className="btn btn-ghost btn-sm normal-case text-base"
				>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
