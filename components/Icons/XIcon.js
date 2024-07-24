import PropTypes from 'prop-types';

XIcon.propTypes = {
  href: PropTypes.string.isRequired,
};

export default function XIcon({href}) {
  return (
    <a href={href}
      target="_blank"
      className="p-2 rounded-lg flex items-center justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100 dark:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
      fill="none">
      <path
        d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
        fill="#111827" />
      </svg>
    </a>
  )
}