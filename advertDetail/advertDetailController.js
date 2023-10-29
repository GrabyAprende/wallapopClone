import { getAdvertisement } from "./advertDetailModel.js"
import { buildAdvertisement } from "./advertDetailView.js"

export const advertDetailController = async (advertDetailElement, advertisementId) => {

    try {
        const advertisementData = await getAdvertisement(advertisementId);
        renderAdvert(advertisementData, advertDetailElement)
    } catch (error) {
        alert(error)
    }
}

const renderAdvert = (advertData, advertDetailElement) => {
        const divElement = document.createElement('div');
        divElement.classList.add('advertisementDetails');

        divElement.innerHTML = buildAdvertisement(advertData);

        advertDetailElement.appendChild(divElement)
}
