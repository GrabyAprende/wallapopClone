export const createAdvertisement = async (
  photo,
  adverName,
  description,
  price,
  type
) => {
  // Recuerda poner los parametros necesarios
  const photoUrl = await uploadImage(photo);

  const url = "http://localhost:8000/api/adverts";
  const token = localStorage.getItem("token");

  const body = {
    photo: photoUrl,
    adverName: adverName,
    description: description,
    price: price,
    type: type,
  };

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};

const uploadImage = async (image) => {
  let imageUrl;

  try {
    const uploadManager = new Bytescale.UploadManager({
      apiKey: "public_FW25biuB7FCTi4QPc78WebD9jExu",
    });

    const { fileUrl } = await uploadManager.upload({ data: image });

    imageUrl = fileUrl;
  } catch (error) {
    imageUrl = null;
  }

  return imageUrl;
};
