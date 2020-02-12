import React, { Component } from 'react';

class FilterImageData extends Component {
    
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });


        return (
            <select class="horn-type-filter">
                <option value="" selected>All Types</option>
                <option value="One Horn">One Horn</option>
                <option value="Land Goers">Land Goers</option>
            
           
            </select>
          );
    }
}
 
export default FilterImageData;