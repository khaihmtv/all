var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);


var bob = new Author({ name: 'Bob Smith' });

bob.save(function (err) {
  if (err) return handleError(err);

  //Bob giờ đã tồn tại, đến lúc tạo tác phẩm rồi
  var story = new Story({
    title: "Bob goes sledding",
    author: bob._id    // gắn _id của tác giả Bob. ID này được tạo ra mặc định!
  });

  story.save(function (err) {
    if (err) return handleError(err);
    // Bob giờ đã có tác phẩm của mình
  });
});


Story.findOne({ title: 'Bob goes sledding' })
.populate('author') //Thay thế ID của tác giả bằng thông tin của tác giả!
.exec(function (err, story) {
  if (err) return handleError(err);
  //console.log('The author is %s', story.author.name);
  // in ra "The author is Bob Smith"
});