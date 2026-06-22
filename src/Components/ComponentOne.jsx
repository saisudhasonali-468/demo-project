import React from 'react'
import ComponentOneChild from './C1Child';

function ComponentOne(){
    return (
        <div>
            <h1>First Heading</h1>
            <ComponentOneChild/>
        </div>
    )
}

export default ComponentOne;
