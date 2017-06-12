import React from 'react';

import { LoremIpsumReader } from '../core/components/lorem-ipsum-reader';

export class HomePage extends React.Component {

  constructor(props) {
    super(props);

    const pageTitle = 'Home';
    const image = './images/home.jpg';
    const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
    Integer enim dui, faucibus vestibulum libero nec, porttitor condimentum augue.
    Etiam rhoncus vestibulum odio.
    Vestibium ut mollis lorem.
    Donec vehicula lacus justo, ac venenatis lectus porttitor et.
    Sed in purus ac dolor bibendum ultricies.
    Quisque non nibh risus.
    Morbi varius, lacus et finibus auctor, eros libero tincidunt neque, nec consectetur erat massa sit amet nisl.
    Pellentesque vitae ante leo.  
    Fusce nisl nunc, vestibulum quis enim non, tempor semper risus.
    In pretium velit sit amet accumsan viverra, erat massa fringilla dui, vel tempor diam quam non lacus.
    Donec purus risus, lobortis et facilisis ac, luctus eget turpis.  
    Phasellus sit amet augue quis elit ultrices auctor id ornare magna.
    Aliquam sollicitudin sollicitudin sapien ac finibus lectus mattis quis.`;

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