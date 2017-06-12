import React from 'react';

import { LoremIpsumReader } from '../core/components/lorem-ipsum-reader';

export class LocationPage extends React.Component {

  constructor(props) {
    super(props);

    const pageTitle = 'Location';
    const image = './images/locations.jpg';
    const loremIpsum = `Sed hendrerit augue eu lectus ultricies sollicitudin.  
            Aliquam consequat, odio vitae pretium tempor, justo lacus vestibulum dui, non euismod urna tortor vel nulla.
            Fusce nisl nisi ultrices in sagittis sed, fermentum ac est.
            Nunc vulputate ultrices accumsan.
            Nunc tempus aliquet tincidunt.
            Donec aliquam libero nec lectus mollis aliquet.
            Duis pretium orci vel nibh condimentum auctor.
            Morbi ut magna ut ligula cursus fermentum.
            Fusce molestie neque nisi, non sagittis risus egestas id.`;
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