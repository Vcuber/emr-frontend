import React from 'react';
import Allergy from './Allergy';
import FamilyHistory from './FamilyHistory';
import Problem from './Problem';
import Procedure from './Procedure';

function Clinical() {

    return (
        <div>
            <Allergy />
            <FamilyHistory />
            <Problem />
            <Procedure />
        </div>
    )

}



export default Clinical
