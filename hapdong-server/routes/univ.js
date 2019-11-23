const express = require('express');
const router = express.Router();

const responseMessage = require('../util/responseMessage')
const statusCode = require('../util/statusCode')
const util = require('../util/utils')



/* GET users listing. */
router.get('/news', (req, res) => {

    const result = [
        {
            "news_title": "투표합시다!",
            "news_content": "투표내요내요내요내요내",
            "news_like_count": 20,
            "news_comment_count": 45
        },
        {
            "news_title": "투표합시다!",
            "news_content": "투표내요내요내요내요내",
            "news_like_count": 20,
            "news_comment_count": 45
        }
    ]

    try {
        if(!result) {
            res.status(statusCode.BAD_REQUEST).send(util.successFalse(responseMessage.FAIL_UNIV, statusCode.BAD_REQUEST))
        } else {
            res.status(statusCode.OK).send(util.successTrue(responseMessage.SUCCESS_UNIV, result, statusCode.OK))
        }
    } catch (e) {
        console.log(e.message);
    }

});

module.exports = router;
