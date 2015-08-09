System.register([], function(exports_1) {
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                    this.content = "Hello from app.ts";
                }
                App.prototype.configureRouter = function (config, router) {
                    config.title = 'Aurelia';
                    config.map([
                        { route: ['', 'welcome'], moduleId: '../home/home', nav: true, title: 'Welcome' }
                    ]);
                    this.router = router;
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5jb25maWd1cmVSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1lBRUE7Z0JBSUlBO29CQUNJQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxtQkFBbUJBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBRURELDZCQUFlQSxHQUFmQSxVQUFnQkEsTUFBMkJBLEVBQUVBLE1BQWNBO29CQUN2REUsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBQ3pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTt3QkFDUEEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsU0FBU0EsQ0FBQ0EsRUFBRUEsUUFBUUEsRUFBRUEsY0FBY0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsU0FBU0EsRUFBRUE7cUJBSXBGQSxDQUFDQSxDQUFDQTtvQkFFSEEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFDTEYsVUFBQ0E7WUFBREEsQ0FBQ0EsQUFuQkQsSUFtQkM7WUFuQkQscUJBbUJDLENBQUEifQ==