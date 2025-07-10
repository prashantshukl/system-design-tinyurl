import UrlModel from '../models/UrlModel.js'

function getCode(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}


const getShortUrl = async (req, res) => {
   
   try {

      const { longUrl } = req.body;
      const urlObj = await UrlModel.findOne({longUrl});

      if (!urlObj) {
         var code = getCode();
         var temp = await UrlModel.findOne({shortCode:code});

         while (temp) {
            code = getCode();
            temp = await UrlModel.findOne({shortCode:code});
         }

         const obj = new UrlModel({
            shortCode: code,
            longUrl: longUrl,
            createdAt: Date.now()
         });

         await obj.save();

         return res.json({success: true, shortUrl: `http://localhost:3004/tiny/${code}`});
      }
      
      return res.json({success: true, shortUrl: `http://localhost:3004/tiny/${urlObj.shortCode}`});
      
   } catch (error) {
      return res.json({sucess: false, message: error.message});
   }
}

const getLongUrl = async (req, res) => {
   const shortCode =  req.params.code;
   try {
      const urlObj = await UrlModel.findOne({shortCode});
      if (!urlObj) {
         return res.json({sucess: false, message: "Not Found"});
      }
      return res.redirect(urlObj.longUrl);
      
   } catch (error) {
      return res.json({sucess: false, message: error.message});
   }
}

export {getShortUrl, getLongUrl};