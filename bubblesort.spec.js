describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a one element array', function() {
        expect( bubbleSort([1]) ).toEqual([1]);
    });

    it('handles a two element array', function() {
        expect( bubbleSort([2,1]) ).toEqual([1,2]);
    });

    it('handles a many element array', function() {
        expect( bubbleSort([2,1,3,9,4]) ).toEqual([1,2,3,4,9]);
    });

    it('only handles numbers', function () {
        expect( bubbleSort.bind(null, [1,2,'three',null,undefined,{}])).toThrowError(TypeError,'no');
    });

    //  it('only handles numbers', function () {
    //     expect( bubbleSort([1,2,'three',null,undefined,{}])).toEqual('Error');
    // });

});