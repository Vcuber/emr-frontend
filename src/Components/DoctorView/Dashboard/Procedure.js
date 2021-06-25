import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { bodySite } from '../../../JSON/bodySite';
import { codeData } from '../../../JSON/code';
import { complication } from '../../../JSON/complication';
import { focalDeviceAction } from '../../../JSON/focalDeviceAction';
import { performerFunction } from '../../../JSON/performerFunction';
import { reasonCode } from '../../../JSON/reasonCode';
import { statusReason } from '../../../JSON/statusReason';
import { usedCode } from '../../../JSON/usedCode';

function Procedure() {

    const bodySiteProps = {
        options: bodySite,
        getOptionLabel: (option) => option.display,
    };

    const category = [
        {code: 24642003, display: "Psychiatry procedure or service"},
        {code: 409063005, display: "Counselling"},
        {code: 409073007, display: "Education"},
        {code: 387713003, display: "Surgical Procedure"},
        {code: 103693007, display: "Diagnostic Procedure"},
        {code: 46947000, display: "Chiropractic Manipulation"},
        {code: 410606002, display: "Social Service Procedure"},
    ];

    const categoryProps = {
        options: category,
        getOptionLabel: (option) => option.display,
    };

    const codeProps = {
        options: codeData,
        getOptionLabel: (option) => option.display,
    };

    const complicationProps = {
        options: complication,
        getOptionLabel: (option) => option.display,
    };

    const focalDeviceActionProps = {
        options: focalDeviceAction,
        getOptionLabel: (option) => option.display,
    };

    const followUp = [
        {
          code: 18949003,
          display: "Change of dressing",
        },
        {
          code: 30549001,
          display: "Removal of suture",
        },
        {
          code: 241031001,
          display: "Removal of drain",
        },
        {
          code: 35963001,
          display: "Removal of staples",
        },
        {
          code: 225164002,
          display: "Removal of ligature",
        },
        {
          code: 447346005,
          display: "Cardiopulmonary exercise test",
        },
        {
          code: 229506003,
          display: "Scar tissue massage",
        },
        {
          code: 274441001,
          display: "Suction drainage",
        },
        {
          code: 394725008,
          display: "Diabetes medication review",
        },
        {
          code: 359825008,
          display: "Cytopathology, review of bronchioalveolar lavage specimen",
        }
      ];

    const followUpProps = {
        options: followUp,
        getOptionLabel: (option) => option.display,
    };

    const outcome = [
        {
          code: 385669000,
          display: "Successful",
        },
        {
          code: 385671000,
          display: "Unsuccessful",
        },
        {
          code: 385670004,
          display: "Partially successful",
        }
      ];

    const outcomeProps = {
        options: outcome,
        getOptionLabel: (option) => option.display,
    };

    const performerFunctionProps = {
        options: performerFunction,
        getOptionLabel: (option) => option.display,
    };

    const reasonCodeProps = {
        options: reasonCode,
        getOptionLabel: (option) => option.display,
    };

    const status = [
        {
          code: "preparation",
          display: "Preparation",
        },
        {
          code: "in-progress",
          display: "In Progress",
        },
        {
          code: "not-done",
          display: "Not Done",
        },
        {
          code: "on-hold",
          display: "On Hold",
        },
        {
          code: "stopped",
          display: "Stopped",
        },
        {
          code: "completed",
          display: "Completed",
        },
        {
          code: "entered-in-error",
          display: "Entered in Error",
        },
        {
          code: "unknown",
          display: "Unknown",
        }
      ];

    const statusProps = {
        options: status,
        getOptionLabel: (option) => option.display,
    };

    const statusReasonProps = {
        options: statusReason,
        getOptionLabel: (option) => option.display,
    };

    const usedCodeProps = {
        options: usedCode,
        getOptionLabel: (option) => option.display,
    };

    const comps = [
      {id:"bodySite", label: "Body Site", props: bodySiteProps},
      {id:"category", label: "Category", props: categoryProps},
      {id:"codeData", label: "Code", props: codeProps},
      {id:"complication", label: "Complication", props: complicationProps},
      {id:"focalDeviceAction", label: "Focal Device Action", props: focalDeviceActionProps},
      {id:"followUp", label: "Follow Up", props: followUpProps},
      {id:"outcome", label: "Outcome", props: outcomeProps},
      {id:"performerFunction", label: "Performer Function", props: performerFunctionProps},
      {id:"reasonCode", label: "Reason Code", props: reasonCodeProps},
      {id:"status", label: "Status", props: statusProps},
      {id:"statusReason", label: "Status Reason", props: statusReasonProps},
      {id:"usedCode", label: "Used Code", props: usedCodeProps},
    ];

    return (
        <div>
            <Typography variant="h4" gutterBottom>
              <u>Procedure</u>
              <Divider />
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
        </div>
    )
}

export default Procedure
