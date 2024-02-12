import axios from "axios";

const searchImages = async (term) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID iYnJEr8-Y1Z6gJJyvW7wy7yRTaOK7VR8RLSN_0uIk3U',
        'Accept-Version': 'v1', // API'nin güncel versiyonunu belirtin
        'Access-Control-Allow-Origin': '*', // CORS başlığı - Bu başlık sunucu tarafından eklenmeli, istemci tarafından eklenemez
      },
      params: {
        query: term,
      }
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export default searchImages;

  //app.js de apı.js i import edersek burada kullanabilriz
