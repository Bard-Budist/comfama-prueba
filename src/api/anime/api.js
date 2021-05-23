const express = require('express');
const router = express.Router();
const {
  getAnimeQuery
} = require('../../service/anime/service')

router.get('/anime/:anime', async (res, req) => {
  try {
    const result = await getAnimeQuery(res.params.anime);
    req.send(JSON.parse(JSON.stringify(result)));
  } catch (error) {
    req.status(500).send("Error " + error)
  }
});

module.exports = router;