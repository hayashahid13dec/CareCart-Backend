const axios = require('axios');

async function getHotelData(req, res) {
  try {
    const originalUrl = req.originalUrl;
    // Extract the 'url' parameter from the originalUrl
    const urlMatch = originalUrl.match(/url=([^&]+)/);
    
    if (urlMatch) {
      const url = decodeURIComponent(urlMatch[1]);
      const response = await axios.get(url, {
        headers: {
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip'
        }
      });
      
      const finalresult = response.data.category_results.map((item) => ({
        brand: item.product.brand, // ?item.product.brand:null,
        price: item.offers.primary.price, // ?item.offers.primary.price:null,
        title: item.product.title, // ?item.product.title:null,
        description: item.product.feature_bullets[0],
        imageurl: item.product.images[0],
  
  }));
      
      res.json({success: true, categories: finalresult});
    } else {
      res.status(400).json({ message: 'Missing or invalid URL parameter.' });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json(error);
  }
}

module.exports = { getHotelData };