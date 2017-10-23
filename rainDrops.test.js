const expect = require('chai').expect;
const rainDrops = require('./rainDrops');

// 1
it('should give output pling when passed 9',()=>{
    expect(rainDrops(9)).to.equal('pling')
});
// 2
it('should give output plang when passed 10',()=>{
    expect(rainDrops(10)).to.equal('plang')
});
// 3
it('should give output plong when passed 14',()=>{
    expect(rainDrops(14)).to.equal('plong')
});
// 4
it('should give output plingplang when passed 15 and ',()=>{
    expect(rainDrops(15)).to.equal('plingplang')
});
// 5
it('should give output plingplangplong when passed 105',()=>{
    expect(rainDrops(105)).to.equal('plingplangplong')
});
// 6
it('should give output plingplangplong when passed 0',()=>{
    expect(rainDrops(0)).to.equal('plingplangplong')
});
// 7
it('should give output pling when passed 9',()=>{
    expect(rainDrops(-9)).to.equal('pling')
});
// 8
it('should give output number 4 when passed 4 ',()=>{
    expect(rainDrops(4)).to.equal(4)
});
// 9
it('should give output: please enter a number. when passed a string',()=>{
    expect(rainDrops('string')).to.equal('please enter a number')
});
// 10
it('should give output pling when passed -9',()=>{
    expect(rainDrops(-9)).to.equal('pling')
});
 