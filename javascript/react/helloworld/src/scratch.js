const obj = {
    x: 1,
    foo: function() {
        const bar = () => console.log( this );
        bar();
    }
};
obj.foo();