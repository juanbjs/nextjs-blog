import PropTypes from 'prop-types';

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Body({children}) {

  return (
    <section className="w-full">
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl xl:px-0">
        <div className="pt-8 pb-8 ">
          {children}
        </div>
      </div>
    </section>
  )
}