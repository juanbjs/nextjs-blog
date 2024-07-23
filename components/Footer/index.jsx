export default function Footer() {
  return (
    <section className="w-full">
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-4xl xl:px-0">
        <div>
          <p className="text-2xl font-bold">
            {'¿Te gustaría recibir más información?'}
          </p>
        </div>
        <div className="pt-4 pb-4">
          <form className="flex flex-col">
            <input className="mb-4" type="text" name="Nombre" placeholder="Nombre" />
            <input className="mb-4"type="text" name="Correo Electronico" placeholder="Correo Electronico" />
            <button className="btn-primary" type="submit">Suscribirme</button>
          </form>
        </div>
      </div>
    </section>
  )
}