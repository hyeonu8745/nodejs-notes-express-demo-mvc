exports.showHome = (req, res) => {
const notesCount = req.app.locals.noteModel.findAll().length;
res.render('home', { title: '홈', notesCount });
};