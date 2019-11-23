const express = require('express');
const router = express.Router();

const responseMessage = require('../util/responseMessage')
const statusCode = require('../util/statusCode')
const util = require('../util/utils')



/* GET users listing. */
router.get('/users/info', (req, res) => {

  const result = {
      "user_name": "익명의 대학생",
      "user_univ": "솝트대 19학번",
      "posting_count": 21,
      "comment_count": 21,
      "scrap_count": 21,
      "user_image": "https://sopt-server.s3.ap-northeast-2.amazonaws.com/1573884765891.png"
  }

  try {

      if(!result) {
          res.status(statusCode.BAD_REQUEST).send(util.successFalse(responseMessage.FAIL_USER,statusCode.BAD_REQUEST))
      } else {
          res.status(statusCode.OK).send(util.successTrue(responseMessage.SUCCESS_USER, result, statusCode.OK))
      }

  } catch (e) {
      console.log(e.message);
  }

});

module.exports = router;
