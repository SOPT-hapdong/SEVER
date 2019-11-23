const express = require('express');
const router = express.Router();

const responseMessage = require('../util/responseMessage')
const statusCode = require('../util/statusCode')
const util = require('../util/utils')



/* GET users listing. */
router.get('/board', (req, res) => {

  const result =  [
    {
    "is_like": true,
    "board_category": "솝트네 기숙사",
    "board_explanation": "솝트야, 기숙사 사니?",
    },
    {
    "is_like": true,
    "board_category": "의류&화장품 장터",
    "board_explanation": "예쁜 옷과 화장품을 사고 팔아요!",
    },
    {
    "is_like": true,
    "board_category": "솝트네 학식",
    "board_explanation": "학식 사진과 맛을 공유해용",
    },
    {
    "is_like": true,
    "board_category": "끝말잇기",
    "board_explanation": "심심한 사람 모여라~! 끝말잇기 해요! ",
    },
     {
    "is_like": false,
    "board_category": "공부하기 싫을 때 소리지르는 게시판",
    "board_explanation": "아아각!!아앙아ㅏㄱ!!!으아앙아ㅏㄱ!!!!!!!!으악!!!",
    },
    {
    "is_like": false,
    "board_category": "솝트대학교 맛집",
    "board_explanation": "각자의 맛집을 소개해 주세요. 숨은 맛집이면 더욱 굿~",
    },
    {
    "is_like": false,
    "board_category": "연애 게시판",
    "board_explanation": "애인 자랑 고민 여기서 눈치보지 말고 해요^^",
    },
]

  try {

      if(!result) {
          res.status(statusCode.BAD_REQUEST).send(util.successFalse(responseMessage.FAIL_FAVORITE,statusCode.BAD_REQUEST))
      } else {
          res.status(statusCode.OK).send(util.successTrue(responseMessage.SUCCESS_FAVORITE, result, statusCode.OK))
      }

  } catch (e) {
      console.log(e.message);
  }

});

module.exports = router;