import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

interface ISocialLinks {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
  color: string;
}

const SocialBar = () : JSX.Element => {
  let socialLinks: ISocialLinks[] = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      url: "https://www.linkedin.com/in/konrad-milewski",
      color: "text-blue-600"
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      url: "https://github.com/milewsk",
      color: "text-gray-800",
    },
    {
      id: 6,
      name: "Email",
      icon: <HiOutlineMail size={30} />,
      url: "mailto:",
      color: "text-red-600"
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram size={30} />,
      url: "https://www.instagram.com/konradmilewski/",
      color: "text-pink-600"
    }
  ];

    
  return <>
    {socialLinks.map((link) => (
      <a
        key={link.id}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:${link.color} transition-colors p-1 hover:scale-110 h-8 w-8 md:10 lg:12 `}
      >
        {link.icon}
      </a>
    ))}
  </>; 
}

export default SocialBar;