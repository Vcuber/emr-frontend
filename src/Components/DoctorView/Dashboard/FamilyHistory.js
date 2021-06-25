import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import { relationship } from '../../../JSON/relationship';
import { reasonCode } from '../../../JSON/reasonCode';
import { conditionOutcome } from '../../../JSON/conditionOutcome';
import { conditionCode } from '../../../JSON/conditionCode';

function FamilyHistory() {

    const conditionCodeProps = {
        options: conditionCode,
        getOptionLabel: (option) => option.display,
    };

    const conditionOutcomeProps = {
        options: conditionOutcome,
        getOptionLabel: (option) => option.display,
    };

    const dataAbsentReason = [
        {
          code: "subject-unknown",
          display: "Subject Unknown"
        },
        {
          code: "withheld",
          display: "Information Withheld"
        },
        {
          code: "unable-to-obtain",
          display: "Unable To Obtain"
        },
        {
          code: "deferred",
          display: "Deferred"
        }
      ];

    const dataAbsentReasonProps = {
        options: dataAbsentReason,
        getOptionLabel: (option) => option.display,
    };

    

    const reasonCodeProps = {
        options: reasonCode,
        getOptionLabel: (option) => option.display,
    };

    const relationshipProps = {
        options: relationship,
        getOptionLabel: (option) => option.display,
    };

    const sex = [
        {code: "male", display: "Male"},
        {code: "female", display: "Female"},
        {code: "other", display: "Other"},
        {code: "uknown", display: "Unknown"},
    ];

    const sexProps = {
        options: sex,
        getOptionLabel: (option) => option.display,
    };

    const status = [
        {code: "partial", display: "Partial"},
        {code: "completed", display: "Completed"},
        {code: "entered-in-error", display: "Entered in Error"},
        {code: "health-unknown", display: "Health Unknown"},
    ];

    const statusProps = {
        options: status,
        getOptionLabel: (option) => option.display,
    };

    const comps = [

        {id:"conditionCode", label: "Condition Code", props: conditionCodeProps},
        {id:"conditionOutcome", label: "Condition Outcome", props: conditionOutcomeProps},
        {id:"dataAbsentReason", label: "Data Absent Reason", props: dataAbsentReasonProps},
        {id:"reasonCode", label: "Reason Code", props: reasonCodeProps},
        {id:"relationship", label: "Relationship", props: relationshipProps},
        {id:"sex", label: "Sex", props: sexProps},
        {id:"status", label: "Status", props: statusProps},

    ];

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                <u>Family History</u>
            </Typography>
            {
                comps.map(val => (
                    <Autocomplete
                        {...val.props}
                        id={val.id}
                        autoComplete
                        includeInputInList
                        renderInput={(params) => <TextField {...params} label={val.label} margin="normal" />}
                    />
                ))
            }   
            <br />
            <br />
        </div>
    )
}

export default FamilyHistory
