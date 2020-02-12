import React, { Component } from 'react';

class Image extends Component {
    
    render() { 
        return <li>
            <div className="info-container">
                <h2>{this.props.imageData.name}</h2>
                <p className="image-type">{this.props.imageData.type}</p>
            </div>

            <div className="image-container">
                <img
                alt={this.props.imageData.url}
                src={this.props.imageData.url} />
            </div>
    <p className="horns">{this.props.imageData.horns}</p>
        </li> 

         
    }
}
 
export default Image;