const express = require('express');
const router = express.Router();

const responseMessage = require('../util/responseMessage')
const statusCode = require('../util/statusCode')
const util = require('../util/utils')



/* GET users listing. */
router.get('/popular', (req, res) => {

  const result = [
    {
    "board_category": "비밀게시판",
    "board_id": "솝트대 19학번",
    "board_content": "하.. 종강 도대체 언제 하나요?? 얼른 종강해서 푹 쉬고 싶네요.",
    "board_like_count": 20,
    "board_comment_count": 45,
    "board_date": "11/11"
    },
    {
    "board_category": "비밀게시판",
    "board_id": "솝트대 19학번",
    "board_content": "하.. 종강 도대체 언제 하나요?? 얼른 종강해서 푹 쉬고 싶네요.",
    "board_like_count": 20,
    "board_comment_count": 45,
    "board_date": "11/11"
    },
    {
    "board_category": "비밀게시판",
    "board_id": "솝트대 19학번",
    "board_content": "하.. 종강 도대체 언제 하나요?? 얼른 종강해서 푹 쉬고 싶네요.",
    "board_like_count": 20,
    "board_comment_count": 45,
    "board_date": "11/11"
    }
]

  try {

      if(!result) {
          res.status(statusCode.BAD_REQUEST).send(util.successFalse(responseMessage.FAIL_POPULAR,statusCode.BAD_REQUEST))
      } else {
          res.status(statusCode.OK).send(util.successTrue(responseMessage.SUCCESS_POPULAR, result, statusCode.OK))
      }

  } catch (e) {
      console.log(e.message);
  }

});

module.exports = router;