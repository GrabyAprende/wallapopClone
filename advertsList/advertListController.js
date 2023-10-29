import { getAdvertisements } from "./advertListModel.js";
import { generateAdvert, renderEmptyState } from "./advertListView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js"

export const advertListController = async (advertList) => {
    advertList.innerHTML = '';
    let adverts = [];
    

    try {
        dispatchEvent('startLoadingAds', null, advertList);
        adverts = await getAdvertisements();
    } catch (error) {
        dispatchEvent('error', { type: "error", message: error }, advertList);
    } finally {
        dispatchEvent('finishLoadingAds', null, advertList);
    }

    if (adverts.length === 0) {
        advertList.innerHTML = renderEmptyState();
    } else {
        renderAdverts(adverts, advertList);

        const event = createCustomEvent('success', 'Anuncios cargados correctamente');
        advertList.dispatchEvent(event);
    }

}

const renderAdverts = (adverts, advertList) => {
    adverts.forEach(advertisement => {
        const advertsContainer = document.createElement('div');
        advertsContainer.classList.add('advertisement');

        advertsContainer.innerHTML = generateAdvert(advertisement);

        advertList.appendChild(advertsContainer)
    })
}

const createCustomEvent = (type, message) => {
    const event = new CustomEvent("advertisementsLoaded", {
        detail: {
            type: type,
            message: message
        }
    });

    return event;
}