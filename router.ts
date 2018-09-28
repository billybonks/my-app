// const Router = dslBuilder();
//
// Router.map(function() {
//   this.route('login');
//   this.route('install');
//   this.route('repo', {path:'repo/:repo_id'}, function(){
//     this.route('stats');
//     this.route('manage', function(){
//       this.route('slack');
//       this.route('members');
//       this.route('workflows');
//     });
//
//     this.route('workflows', function() {
//       this.route('new');
//       this.route('edit', {path:'workflows/:workflow_id'});
//     });
//   });
// });
//
//
// function canNest(dsl: DSL) {
//   return dsl.parent !== 'application';
// }
//
// function getFullName(dsl: DSL, name: string, resetNamespace?: boolean) {
//   if (canNest(dsl) && resetNamespace !== true) {
//     return `${dsl.parent}.${name}`;
//   } else {
//     return name;
//   }
// }
//
// function createRoute(dsl: DSL, name: string, options: RouteOptions = {}, callback?: MatchCallback) {
//   let fullName = getFullName(dsl, name, options.resetNamespace);
//
//   if (typeof options.path !== 'string') {
//     options.path = `/${name}`;
//   }
//
//   dsl.push(options.path, fullName, callback, options.serialize);
// }
//
// route(name: string, options: any = {}, callback?: MatchCallback) {
//     let dummyErrorRoute = `/_unused_dummy_error_path_route_${name}/:error`;
//     if (arguments.length === 2 && typeof options === 'function') {
//       callback = options;
//       options = {};
//     }
//
//     assert(
//       `'${name}' cannot be used as a route name.`,
//       (() => {
//         if (options!.overrideNameAssertion === true) {
//           return true;
//         }
//
//         return ['basic', 'application'].indexOf(name) === -1;
//       })()
//     );
//
//     assert(
//       `'${name}' is not a valid route name. It cannot contain a ':'. You may want to use the 'path' option instead.`,
//       name.indexOf(':') === -1
//     );
//
//     if (this.enableLoadingSubstates) {
//       createRoute(this, `${name}_loading`, {
//         resetNamespace: options.resetNamespace,
//       });
//       createRoute(this, `${name}_error`, {
//         resetNamespace: options.resetNamespace,
//         path: dummyErrorRoute,
//       });
//     }
//
//     if (callback) {
//       let fullName = getFullName(this, name, options.resetNamespace);
//       let dsl = new DSL(fullName, this.options);
//
//       createRoute(dsl, 'loading');
//       createRoute(dsl, 'error', { path: dummyErrorRoute });
//
//       callback.call(dsl);
//
//       createRoute(this, name, options, dsl.generate());
//     } else {
//       createRoute(this, name, options);
//     }
// }
