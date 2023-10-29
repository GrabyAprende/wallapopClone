import { createAdvertisement } from "./advertCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const advertCreationController = (advertCreation) => {

    advertCreation.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(advertCreation);
        const adverName = formData.get("adverName");
        const description = formData.get("description");
        const price = formData.get("price");
        const typeInput = advertCreation.querySelector("#type");
        const fileInput = advertCreation.querySelector('#photo');

        try {
            dispatchEvent('startLoadingAds', null , advertCreation);

            await createAdvertisement(fileInput.files[0], adverName, description, price, typeInput.value);
            dispatchEvent('advertCreated', { type: "success", message: "Anuncio creado correctamente" }, advertCreation);
            window.location = "index.html";
        } catch (error) {
            dispatchEvent('advertCreated', { type: "error", message: "Error al crear el anuncio" }, advertCreation);
            dispatchEvent('error', { type: "error", message: error }, advertCreation);
        } finally {
            dispatchEvent('finishLoadingAds', null, advertCreation);
        }

    })
}