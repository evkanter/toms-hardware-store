import React from 'react';

import { LoremIpsumReader } from '../core/components/lorem-ipsum-reader';

export class SpecialsPage extends React.Component {

  constructor(props) {
    super(props);

    const pageTitle = 'Specials';
    const image = './images/specials.jpg';
    const loremIpsum = `Nam vehicula odio at nibh hendrerit luctus.  
              Cras ante lectus, fermentum nec rhoncus eu, pulvinar non turpis.
              Nulla nec lectus ut sapient fringilla hendrerit. 
              In sed est ut turpis viverra commodo blandit vel libero.
              Proin neque velit, congue eu tortor ut, volutpat aliquet enim.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Cras at fermentum diam.
              Ut aliquam dui quis lectus cursus mattis.
              Phasellus aliquam, leo non eleifend volutpat, neque leo aliquam leo, eget varius enim massa non purus.
              Sed sed lectus maximus lacus fermentum bibendum.
              Nulla dapibus eget felis feugiat elementum.
              Suspendisse et massa nunc.
              Aenean tortor lorem, iaculis et congue sit amet, facilisis vel leo.
              Quisque tincidunt quam ac nisi fringilla, ac facilisis nulla placerat.`;

    this.state= {title: pageTitle, loremIpsum: loremIpsum, image: image};
  }

  render() {
    return (
        <div>
          <LoremIpsumReader key={1} 
            loremIpsum={this.state.loremIpsum} 
            image={this.state.image} 
            title={this.state.title} />
        </div>
    );
  }
}