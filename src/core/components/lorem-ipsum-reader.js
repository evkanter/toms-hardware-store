import React from 'react';
import PropTypes from 'prop-types';

export class LoremIpsumReader extends React.Component {

  static propTypes = {
    loremIpsum: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
  }

  render() {
    return (
        <div className="LoremIpsum">
            <h1>{this.props.title}</h1>
            <div className="lorem-ipsum-container">
                <div className="left-image"><img alt={this.props.title} src={this.props.image} /></div>
                <div className="right-text"><p>{this.props.loremIpsum}</p></div>
            </div>            
        </div>
    );
  }
}