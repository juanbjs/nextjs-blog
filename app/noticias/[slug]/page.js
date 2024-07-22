import LastNews from "@/components/PostTemplate/LastNews";
import SimplePost from "@/components/PostTemplate/SimplePost";

export default function Page({ params }) {

  const text = '<div><figure class=""><img decoding="async" width="1024" height="576" src="https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1024x576.jpg" data-src="https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1024x576.jpg" alt="Aquí se actualizará diariamente la designación de árbitras correspondiente a todos los partidos de la CONMEBOL Libertadores Futsal Femenina 2024, que se disputa en Cochabamba – Bolivia, del 21 al 28 de julio." class="wp-image-382512 lazy loaded" data-srcset="https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1024x576.jpg 1024w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-300x169.jpg 300w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-768x432.jpg 768w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1536x864.jpg 1536w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-24x14.jpg 24w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-36x20.jpg 36w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-48x27.jpg 48w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1.jpg 1920w" data-sizes="(max-width: 1024px) 100vw, 1024px" sizes="(max-width: 1024px) 100vw, 1024px" srcset="https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1024x576.jpg 1024w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-300x169.jpg 300w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-768x432.jpg 768w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-1536x864.jpg 1536w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-24x14.jpg 24w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-36x20.jpg 36w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1-48x27.jpg 48w, https://cdn.conmebol.com/wp-content/uploads/2024/05/futsal_fem_16_9-1.jpg 1920w" data-was-processed="true" data-uw-rm-alt-original="" data-uw-rm-alt="CT"></figure><p>Aquí se actualizará diariamente la designación de árbitras correspondiente a todos los partidos de la CONMEBOL Libertadores Futsal Femenina 2024, que se disputa en Cochabamba – Bolivia, del 21 al 28 de julio.</p><p><br role="presentation" data-uw-rm-sr=""></p><ul> <li><a href="https://www.conmebol.com/noticias/designacion-de-arbitras-para-la-conmebol-libertadores-futsal-femenina-2024/" data-type="post" data-id="385292" data-uw-rm-brl="PR" data-uw-original-href="https://www.conmebol.com/noticias/designacion-de-arbitras-para-la-conmebol-libertadores-futsal-femenina-2024/"><strong>Fecha 1 – 21/07</strong></a></li></ul><p></p><p><br role="presentation" data-uw-rm-sr=""></p><p style="font-size:9px"><strong><em>CONMEBOL.com</em></strong></p></div>';

  const post = {
    title: 'Designación de Árbitras para la CONMEBOL Libertadores Futsal Femenina 2024',
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

  return (
    <>
      <SimplePost post={post} />
      <LastNews posts={postArray} />
    </>
  )
}