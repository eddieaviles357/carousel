import {render} from '@testing-library/react';
import Card from './Card';
import TEST_IMAGES from "./_testCommon.js";

it('should render without crashing', function() {
    const {caption, src} = TEST_IMAGES[0];
    render(
        <Card caption={caption} src={src} currNum={1} totalNum={TEST_IMAGES.length}/>
    )
});

it('matches snapshot', function() {
    const {caption, src} = TEST_IMAGES[0];
    const {asFragment} = render(
        <Card caption={caption} src={src} currNum={1} totalNum={TEST_IMAGES.length}/>
        );
    expect(asFragment()).toMatchSnapshot();
});