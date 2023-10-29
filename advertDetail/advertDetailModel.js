import { sparrestApi } from "../utils/sparrestApi.js";

const parseAdvertisement = (advertisement) => {
    return {
        photo: advertisement.photo,
        adverName: advertisement.adverName,
        description: advertisement.description,
        price: advertisement.price,
        type: advertisement.type,
        id: advertisement.id,
    }
}

export const getAdvertisement = async (advertisementId) => {
    const endpoint = `api/adverts/${advertisementId}?_expand=user`;

    const advertisement = await sparrestApi().get(endpoint)

    return parseAdvertisement(advertisement);
}

export const deleteAdvertisement = async (advertisementId) => {
    const endpoint = `api/adverts/${advertisementId}`;

    await sparrestApi().delete(endpoint);
}