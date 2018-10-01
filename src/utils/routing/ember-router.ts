import Router from 'router_js';
import HistoryLocation from './history-location';

class CustomRouter extends Router {
   constructor(){
     super(...arguments);
     this.handlers = arguments[0];
     this.subscribers = [];
     this.location = new HistoryLocation();
     this.location.initState();
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
     debugger
   },
   log(msg){
     console.log(msg);
   }
   getRoute(name: string) {
     return this.handlers[name];
   }

   getSerializer(_name: string) {
   }

   updateURL(_name: string) {
     debugger
     this.location.setURL(_name);
   }
}

export default CustomRouter;
