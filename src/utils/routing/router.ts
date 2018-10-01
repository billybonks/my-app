import Router from 'router_js';
import HistoryLocation from './history-location';

let location = new HistoryLocation();
location.initState();



function setupRoutes () {
  var myHandlers = {}
  myHandlers.showPost = {
    model: function(params) {
      debugger
    },

    setup: function(post) {
      // render a template with the post
    }
  };

  myHandlers.postIndex = {
    model: function(params) {
      debugger
    },

    setup: function(posts) {
      // render a template with the posts
    }
  };

  myHandlers.newPost = {
    setup: function(post) {
      debugger
    }
  };

  class customRouter extends Router {
     constructor(){
       super(...arguments);
       this.subscribers = [];
     }
     register(subscriber){
       this.subscribers.push(subscriber);
     }
     didTransition() {
     }
     willTransition() {}
     replaceURL() {}
     triggerEvent(eventArgs) {
       this.subscribers.forEach(function(subscriber) {
         subscriber(...eventArgs);
       })
     }
     getRoute(name: string) {
       return myHandlers[name];
     }

     getSerializer(_name: string) {
     }

     updateURL(_name: string) {
       location.setURL(_name);
     }
  }

  const router = new customRouter();
  router.map(function(match) {
    match("/posts/:id").to("showPost");
    match("/posts").to("postIndex");
    match("/posts/new").to("newPost");
  });



  window._router = router;
}


export default class EmberRouter {
  constructor() {
    setupRoutes();
  }
}
