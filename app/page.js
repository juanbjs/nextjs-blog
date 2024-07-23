import MiniPost from "@/components/PostTemplate/MiniPost";

const text = '<div><figure class=""><img decoding="async" width="1024" height="576" src="https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1024x576.jpg"></figure><p>Aquí se actualizará diariamente la designación de árbitras correspondiente a todos los partidos de la CONMEBOL Libertadores Futsal Femenina 2024, que se disputa en Cochabamba – Bolivia, del 21 al 28 de julio.</p><p><br role="presentation" data-uw-rm-sr=""></p><ul> <li><a href="https://www.conmebol.com/noticias/designacion-de-arbitras-para-la-conmebol-libertadores-futsal-femenina-2024/" data-type="post" data-id="385292" data-uw-rm-brl="PR" data-uw-original-href="https://www.conmebol.com/noticias/designacion-de-arbitras-para-la-conmebol-libertadores-futsal-femenina-2024/"><strong>Fecha 1 – 21/07</strong></a></li></ul><p></p><p><br role="presentation" data-uw-rm-sr=""></p><p style="font-size:9px"><strong><em>CONMEBOL.com</em></strong></p></div>';

  const post = {
    title: 'Nvidia enfrenta demanda de autores por usar su obra sin permiso para entrenar IA NeMo, marcando un hito en la disputa de derechos de autor en IA generativa.',
    slug: 'designacion-de-arbitras-para-la-conmebol-libertadores-futsal-femenina-2024',
    main_img: 'https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1024x576.jpg',
    date: 'julio 20, 2024',
    time: '11:37 am',
    extract: 'Aquí se actualizará diariamente la designación de árbitras correspondiente a todos los partidos de la CONMEBOL Libertadores Futsal Femenina 2024, que se disputa en Cochabamba – Bolivia, del 21 al 28 de julio.',
    text: text
  };

  const postArray = [
    post
  ]

export default function Home() {
  return (
    <section className="w-full">
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-4xl xl:px-0">
        <div className="pt-8 pb-8 ">
          <div className="main-post">
            <h6 className="font-bold">{'Notas destacadas'}</h6>
            <div className="posts grid grid-cols-2 grid-rows-3 gap-4">
              <div className="row-span-3">

              </div>
              {
              postArray.map(item => (
                <div key={`minipost-${item.slug}`} className="row-span-1">
                  <MiniPost post={item} />
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
