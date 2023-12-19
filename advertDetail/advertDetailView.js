export const buildAdvertisement = (advertisement) => {
  return `
    <img src="${advertisement.photo}" alt="advertisement image">
    <div>Nombre: ${advertisement.adverName}</div> 
    <div>Descripcion: ${advertisement.description}</div>
    <div>Precio: ${advertisement.price} €</div> 
    <div>Tipo: ${advertisement.type}</div>
    `;
};
