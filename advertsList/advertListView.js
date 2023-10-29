export const generateAdvert = (advertisement) => {
    return ` 
    <a href="./adDetail.html?id=${advertisement.id}"> 
        <div class="img-wrapper">
            <img src="${advertisement.photo}" alt="advertisement image">
        </div>
        <span>${advertisement.adverName} - </span> 
        <span>${advertisement.price} € - </span> 
        <span>${advertisement.type}</span>
    </a>
    `;
    }
    //estado de interfaz cuando no hay anuncios por error
    export const renderEmptyState = () => {
        return `<h3>No hay anuncios disponibles, disculpa las molestias.</h3>`
    }
    