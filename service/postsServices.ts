import Post from "@/model/posts";


export async function getPostBySlug(slug: string) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts/noticias/${slug}`, {
    method: 'GET',
  });

  const postData = res.json();
  const [post] = await Promise.all([postData])

  return post;
}

export async function getAllPosts() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts`, {
    method: 'GET',
  });

  const postsData = res.json();
  const [posts] = await Promise.all([postsData])

  return posts;
}

export async function getPostById(id: string) {
  const res = await fetch(`/api/posts/admin/${id}`, {
    method: 'GET',
  });

  const postData = res.json();
  const [post] = await Promise.all([postData])

  return post;
}


export async function create(formData: Post) {
  try {
    const response = await fetch("/api/posts/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error al crear el post:', errorData.message || response.statusText);
      throw new Error(errorData.message || 'Error al crear el post');
    }

    // Retornar los datos de la respuesta si es necesario
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error de red o de servidor:', error.message);
    throw error; // Propaga el error para manejarlo en otro lugar si es necesario
  }
};

export async function update(formData: Post) {
  try {
    const response = await fetch(`/api/posts/admin/${formData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error al crear el post:', errorData.message || response.statusText);
      throw new Error(errorData.message || 'Error al crear el post');
    }

    // Retornar los datos de la respuesta si es necesario
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error de red o de servidor:', error.message);
    throw error; // Propaga el error para manejarlo en otro lugar si es necesario
  }
};