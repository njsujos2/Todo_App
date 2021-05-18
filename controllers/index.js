var lst = require('../models/list');

class to_do {

    todo_get(req, res) {

        lst.find({}, (err, data) => {
            res.render('index', {
                data: data
            });
        })

    }

    todo_add(req, res) {

        lst.insertMany([{
            content: req.body.content
        }, ])
        res.redirect('/');

    }

    todo_delete(req, res) {

        let id = req.params.id_deleted;
        lst.findByIdAndRemove(id).exec();
        res.redirect('/')

    }

    todo_getUpdate(req, res) {

        let id = req.params.id_update;
        lst.find({}, (err, data) => {
            res.render('update', {
                data: data,
                id_equal: id
            });
        })

    }

    todo_postUpdate(req, res) {

        let id = req.params.id_update;
        lst.findById(id, (err, data) => {
            data.content = req.body.content;
            data.save();
        })
        res.redirect('/');

    }

}

module.exports = new to_do;