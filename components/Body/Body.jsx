import PropTypes from 'prop-types';

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Body({children, className}) {

  return (
    <section className={`w-full ${className}`}>
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:px-0">
        <div className="pt-8">
          {children}
        </div>
      </div>
    </section>
  )
}