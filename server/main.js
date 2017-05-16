import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  const Posts = new Meteor.Collection('posts');
  if (Posts.find().count() === 0) {
    Posts.insert({
      featured: false,
      name: 'post 1'
    });
    Posts.insert({
      featured: false,
      name: 'post 2'
    });
    Posts.insert({
      featured: false,
      name: 'post 3'
    });
    Posts.insert({
      featured: false,
      name: 'post 4'
    });
    Posts.insert({
      featured: false,
      name: 'post 5'
    });
    Posts.insert({
      featured: true,
      name: 'post 6'
    });
    Posts.insert({
      featured: false,
      name: 'post 7'
    });
    Posts.insert({
      featured: false,
      name: 'post 8'
    });
    Posts.insert({
      featured: false,
      name: 'post 9'
    });
    Posts.insert({
      featured: false,
      name: 'post 10'
    });
    Posts.insert({
      featured: false,
      name: 'post 11'
    });
    Posts.insert({
      featured: true,
      name: 'post 12'
    });
  }

  // two subscriptions
  Meteor.publish('posts', function(page) {

    const skip = parseInt(page && page !== '' ? page : 0) * 5
    return Posts.find({}, {
      limit: 5,
      skip,
      sort: {
        name: 1
      }
    });
  });

  Meteor.publish('featured', function() {
    return Posts.find({
      featured: true
    }, {
      sort: {
        name: 1
      }
    });
  });
});
