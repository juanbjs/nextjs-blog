import LastNews from "@/components/PostTemplate/LastNews";
import SimplePost from "@/components/PostTemplate/SimplePost";

export default function Page({ params }) {

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

  return (
    <>
      <SimplePost post={post} />
      <LastNews posts={postArray} />
    </>
  )
}