function outer() {
    console.log('this(outer)=', this);
    const inner = function() {
        console.log('this - inner1 (old syntax)=', this );
    }
    const inner2 = () => {
        console.log('this - inner2 (old syntax)=', this );
    }
    inner();
    inner2();
}
outer.call({x:1});