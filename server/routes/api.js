const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  var json = '[{"result":true, "count":42},{"result":false, "count":43}]';
  res.send(json);
});

module.exports = router;
