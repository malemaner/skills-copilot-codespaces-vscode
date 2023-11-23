// Create web server
var express = require('express');
var router = express.Router();
var commentService = require('../services/comment-service');

router.get('/', function (req, res, next) {
    commentService.getAllComments(function (err, data) {
        if (err) {
            return res.status(500).json({success: false, message: err});
        }
        return res.json(data);
    })
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    commentService.getCommentById(id, function (err, data) {
        if (err) {
            return res.status(500).json({success: false, message: err});
        }
        return res.json(data);
    })
});

router.post('/', function (req, res, next) {
    var comment = req.body;
    commentService.addComment(comment, function (err, data) {
        if (err) {
            return res.status(500).json({success: false, message: err});
        }
        return res.json(data);
    })
});

router.put('/:id', function (req, res, next) {
    var comment = req.body;
    var id = req.params.id;
    commentService.updateComment(id, comment, {}, function (err, data) {
        if (err) {
            return res.status(500).json({success: false, message: err});
        }
        return res.json(data);
    })
});

router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    commentService.deleteComment(id, function (err, data) {
        if (err) {
            return res.status(500).json({success: false, message: err});
        }
        return res.json(data);
    })
});

module.exports = router;