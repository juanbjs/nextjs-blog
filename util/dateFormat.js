export function fullDateFormat(dateString) {
    // Crear un objeto Date a partir de la cadena de fecha
    const date = new Date(dateString);

    // Opciones de formato para la fecha
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    // Formatear la fecha usando las opciones
    return date.toLocaleDateString('es-ES', options);
}