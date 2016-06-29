import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Restaurants = new Mongo.Collection("restaurants");

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
    this.render('welcome', {
        to:"main"
    });
});

Router.route('/restaurants', function() {
    this.render('navbar', {
        to:"navbar"
    });
    this.render('restaurants', {
        to:"main"
    });
});

Template.restaurant_form.events({
    "click .js-toggle-restaurant-form":function(event){
        //check logged in
        $("#restaurant_form").toggle('slow');
    },
    "submit .js-save-restaurant-form":function(event){
        var url = event.target.url.value;
        console.log("Restaurant entered is " + url);
        var id = this._id;
        Restaurants.insert({
            title: url,
            restaurant_id: id
        });
        $("#restaurant_form").toggle('slow');
        return false;
    }
});

Template.restaurant_list.helpers({
    restaurants: function() {
        console.log(this._id);
        return Restaurants.find({restaurant_id: this._id});
    }
    
});
