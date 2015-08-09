System.register([], function(exports_1) {
    var Welcome, UpperValueConverter;
    return {
        setters:[],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                    this.heading = 'Hello from home.ts via the router configured in app.ts';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                }
                Object.defineProperty(Welcome.prototype, "fullName", {
                    //Getters can't be observed with Object.observe, so they must be dirty checked.
                    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
                    //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
                    //@computedFrom('firstName', 'lastName')
                    get: function () {
                        return this.firstName + " " + this.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Welcome.prototype.welcome = function () {
                    alert("Welcome, " + this.fullName + "!");
                };
                return Welcome;
            })();
            exports_1("Welcome", Welcome);
            UpperValueConverter = (function () {
                function UpperValueConverter() {
                }
                UpperValueConverter.prototype.toView = function (value) {
                    return value && value.toUpperCase();
                };
                return UpperValueConverter;
            })();
            exports_1("UpperValueConverter", UpperValueConverter);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOlsiV2VsY29tZSIsIldlbGNvbWUuY29uc3RydWN0b3IiLCJXZWxjb21lLmZ1bGxOYW1lIiwiV2VsY29tZS53ZWxjb21lIiwiVXBwZXJWYWx1ZUNvbnZlcnRlciIsIlVwcGVyVmFsdWVDb252ZXJ0ZXIuY29uc3RydWN0b3IiLCJVcHBlclZhbHVlQ29udmVydGVyLnRvVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7WUFFQTtnQkFBQUE7b0JBQ0VDLFlBQU9BLEdBQUdBLHdEQUF3REEsQ0FBQ0E7b0JBQ25FQSxjQUFTQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDbkJBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO2dCQWFuQkEsQ0FBQ0E7Z0JBUENELHNCQUFJQSw2QkFBUUE7b0JBSlpBLCtFQUErRUE7b0JBQy9FQSxnR0FBZ0dBO29CQUNoR0Esc0dBQXNHQTtvQkFDdEdBLHdDQUF3Q0E7eUJBQ3hDQTt3QkFDRUUsTUFBTUEsQ0FBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsU0FBSUEsSUFBSUEsQ0FBQ0EsUUFBVUEsQ0FBQ0E7b0JBQzlDQSxDQUFDQTs7O21CQUFBRjtnQkFFREEseUJBQU9BLEdBQVBBO29CQUNFRyxLQUFLQSxDQUFDQSxjQUFZQSxJQUFJQSxDQUFDQSxRQUFRQSxNQUFHQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQUNISCxjQUFDQTtZQUFEQSxDQUFDQSxBQWhCRCxJQWdCQztZQWhCRCw2QkFnQkMsQ0FBQTtZQUVEO2dCQUFBSTtnQkFJQUMsQ0FBQ0E7Z0JBSENELG9DQUFNQSxHQUFOQSxVQUFPQSxLQUFLQTtvQkFDVkUsTUFBTUEsQ0FBQ0EsS0FBS0EsSUFBSUEsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTtnQkFDSEYsMEJBQUNBO1lBQURBLENBQUNBLEFBSkQsSUFJQztZQUpELHFEQUlDLENBQUEifQ==