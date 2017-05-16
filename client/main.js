import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './main.html';
const Posts = new Meteor.Collection('posts');

FlowRouter.route('/:page', {
  name: 'Posts.list'
});

Template.hello.onCreated(function helloOnCreated() {
  const instance = this;
  instance.autorun(function() {
    instance.subscribe('posts', FlowRouter.getParam('page'))
    instance.subscribe('featured')
  });
});

Template.hello.helpers({
  page(num) {
    return FlowRouter.pathFor('Posts.list');
  },
  posts() {
    return Posts.find({}, {
      limit: 5,
      sort: {
        name: 1
      }
    })
  },
  featured_posts() {
    return Posts.find({
      featured: true
    }, {
      sort: {
        name: 1
      }
    });
  }
});
