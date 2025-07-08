import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="mb-8 text-center text-white">
        Feel free to reach out for collaboration, project inquiries, or just to connect!
      </p>
      <div className="flex flex-row gap-6 items-center justify-center">
        <a
          href="mailto:vinhnguyen.dev@gmail.com"
          className="flex items-center gap-4 px-6 py-4 rounded-lg bg-[#323234] hover:bg-[#2d2d2f] transition text-white shadow"
        >
          <HiOutlineMail className="w-7 h-7 text-teal-400" />
        </a>
        <a
          href="https://github.com/techntv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-6 py-4 rounded-lg bg-[#323234] hover:bg-[#2d2d2f] transition text-white shadow"
        >
          <IoLogoGithub className="w-7 h-7 text-teal-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/vinhnguyen-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-6 py-4 rounded-lg bg-[#323234] hover:bg-[#2d2d2f] transition text-white shadow"
        >
          <IoLogoLinkedin className="w-7 h-7 text-teal-400" />
        </a>
      </div>
    </div>
  );
}
