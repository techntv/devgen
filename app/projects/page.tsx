export default function Page() {
	return (
		<section className="mx-auto px-4 py-12">
			{/* Hero Section with Background Image and Blur */}
			<div className="max-w relative h-72 md:h-96 w-full rounded-2xl overflow-hidden mb-12 flex items-center justify-center">
				<img
					src="/images/projects-bg.jpg"
					alt="Projects Hero"
					className="absolute inset-0 w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-2xl">
						Projects
					</h1>
					<p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-2xl font-semibold">
						A showcase of my favorite work, side projects, and collaborations
					</p>
				</div>
			</div>

			{/* Projects Grid */}
			<div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Project 1 */}
				<div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<div className="relative h-48 overflow-hidden">
						<img
							src="/images/project1.jpg"
							alt="Project 1"
							className="absolute inset-0 w-full h-full object-cover object-center"
						/>
					</div>
					<div className="p-4">
						<h2 className="text-xl font-bold mb-2">Project 1</h2>
						<p className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				{/* Project 2 */}
				<div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<div className="relative h-48 overflow-hidden">
						<img
							src="/images/project2.jpg"
							alt="Project 2"
							className="absolute inset-0 w-full h-full object-cover object-center"
						/>
					</div>
					<div className="p-4">
						<h2 className="text-xl font-bold mb-2">Project 2</h2>
						<p className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				{/* Project 2 */}
				<div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<div className="relative h-48 overflow-hidden">
						<img
							src="/images/project2.jpg"
							alt="Project 2"
							className="absolute inset-0 w-full h-full object-cover object-center"
						/>
					</div>
					<div className="p-4">
						<h2 className="text-xl font-bold mb-2">Project 2</h2>
						<p className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				{/* Project 2 */}
				<div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<div className="relative h-48 overflow-hidden">
						<img
							src="/images/project2.jpg"
							alt="Project 2"
							className="absolute inset-0 w-full h-full object-cover object-center"
						/>
					</div>
					<div className="p-4">
						<h2 className="text-xl font-bold mb-2">Project 2</h2>
						<p className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
