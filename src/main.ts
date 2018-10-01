import Application, { DOMBuilder, RuntimeCompilerLoader, SyncRenderer } from '@glimmer/application';
import Resolver, { BasicModuleRegistry } from '@glimmer/resolver';
import moduleMap from '../config/module-map';
import resolverConfiguration from '../config/resolver-configuration';
import EmberRouter from './utils/routing/router';

export default class App extends Application {
  constructor() {
    let router = new EmberRouter();
    let moduleRegistry = new BasicModuleRegistry(moduleMap);
    let resolver = new Resolver(resolverConfiguration, moduleRegistry);
    const element = document.body;

    super({
      builder: new DOMBuilder({ element, nextSibling: null }),
      loader: new RuntimeCompilerLoader(resolver),
      renderer: new SyncRenderer(),
      resolver,
      rootName: resolverConfiguration.app.rootName
    });
  }
}
