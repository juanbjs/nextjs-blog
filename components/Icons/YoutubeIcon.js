import PropTypes from 'prop-types';

YoutubeIcon.propTypes = {
  href: PropTypes.string.isRequired,
};

export default function YoutubeIcon({href}) {
  return (
    <a href={href}
      target="_blank"
      className="p-2 rounded-lg flex items-center justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100 dark:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 71"
      fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
        fill="#111827" />
      </svg>
    </a>
  )
}