import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

type SocialLinkProps = {
    social: "twitter" | "discord" | "github"
    url: string
}

const SocialLink = ({ social, url } : SocialLinkProps) => {
  let SocialIcon;

  switch (social) {
    case 'github':
      SocialIcon = FaGithub;
      break;
    case 'twitter':
      SocialIcon = FaTwitter;
      break;
    // Add more cases for other social media platforms if needed

    default:
      // Default to GitHub icon if no valid social platform is provided
      SocialIcon = FaGithub;
      break;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
      <SocialIcon size={20} />
    </a>
  );
};

export default SocialLink;
