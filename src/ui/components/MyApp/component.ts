import Component, { tracked } from '@glimmer/component';

export default class MyApp extends Component {
  @tracked
  path: string = "";

  constructor(){
    super(...arguments);
    window._router.register((infos) => {
      if(infos){
        this.path = infos.name;
      }
    });
    this.router = window._router;
  }

  @tracked
  get computed(){
    return `${this.path} from computed`
  }
}
