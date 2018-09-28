import Component from '@glimmer/component';
import Router from 'router_js';


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
   didTransition() {}
   willTransition() {}
   replaceURL() {}
   triggerEvent() {}
   getRoute(name: string) {
     console.log(name)
     debugger
     return myHandlers[name];
   }

   getSerializer(_name: string) {
   }

   updateURL(_name: string) {

   }
}
const router = new customRouter();
router.map(function(match) {
  match("/posts/:id").to("showPost");
  match("/posts").to("postIndex");
  match("/posts/new").to("newPost");
});



window._router = router;

export default class MyApp extends Component {

}
