import { Meteor } from 'meteor/meteor';

Restaurants = new Mongo.Collection("restaurants");

Meteor.startup(() => {
  // code to run on server at startup
    if (!Restaurants.findOne()){
        console.log("No restaurants yet. Creating starter data.");
        Restaurants.insert({
            title: "McD",
            createdOn: new Date()
                


        });
    }
});

