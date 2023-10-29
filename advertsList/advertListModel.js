
const transformAdvertisements = (adverts) => {
    return adverts?.map(advertisement => ({
        id: advertisement.id,
        photo: advertisement.photo,
        price: advertisement.price,
        adverName: advertisement.adverName,
        description: advertisement.description,
        type: advertisement.type,
    }))
}

export const getAdvertisements = async () => {
    const url = "http://localhost:8000/api/adverts?_expand=user";
    let parsedAdverts = [];
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(url);
        const adverts = await response.json();

        parsedAdverts = transformAdvertisements(adverts)

    } catch (error) {
        throw error;
    }

    return parsedAdverts;
}