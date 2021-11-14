import { h } from 'preact';
import Banner from '../src/components/banner';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Banner', () => {
    test('Banner renders heading', () => {
        const context = shallow(<Banner onBannerClicked={(): void => { /* no op */ }} />);
        expect(context.find('.heading').text()).toBe('Web Projects');
    });
});
