import { decodeToken } from "../utils/decodeToken.js";
import { deleteAdvertisement, getAdvertisement } from "./advertDetailModel.js";
import { buildAdvertisement } from "./advertDetailView.js";

export const advertDetailController = async (
  advertDetailElement,
  advertisementId
) => {
  try {
    const advertisementData = await getAdvertisement(advertisementId);
    renderAdvert(advertisementData, advertDetailElement);
  } catch (error) {
    alert(error);
  }
};

const renderAdvert = (advertData, advertDetailElement) => {
  const divElement = document.createElement("div");
  divElement.classList.add("advertisementDetails");

  divElement.innerHTML = buildAdvertisement(advertData);

  const token = localStorage.getItem("token");

  if (!!token) {
    const userInfo = decodeToken(token);
    if (userInfo.userId == advertData.userId) {
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Borrar anuncio";
      divElement.appendChild(deleteButton);
      deleteButton.addEventListener("click", async () => {
        await deleteAdvertisement(advertData.id);
        window.location = "index.html";
      });
    }
  }
  advertDetailElement.appendChild(divElement);
};
