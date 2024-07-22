export default function Footer() {
  return (
    <section className="w-full">
      <div className="max-w-screen-lg mr-auto ml-auto">
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