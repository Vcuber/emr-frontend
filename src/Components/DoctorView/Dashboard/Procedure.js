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
          "": ""
        },
        {
          code: 385671000,
          display: "Unsuccessful",
          "": ""
        },
        {
          code: 385670004,
          display: "Partially successful",
          "": ""
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

    return (
        <div>
            <Typography variant="h4" gutterBottom>
              <u>Procedure</u>
              <Divider />
            </Typography>
            <Autocomplete
                {...bodySiteProps}
                id="bodySite"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Body Site" margin="normal" />}
            />
            <Autocomplete
                {...categoryProps}
                id="category"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Category" margin="normal" />}
            />
            <Autocomplete
                {...codeProps}
                id="code"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="code" margin="normal" />}
            />
            <Autocomplete
                {...complicationProps}
                id="complication"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Complication" margin="normal" />}
            />
            <Autocomplete
                {...focalDeviceActionProps}
                id="focalDeviceAction"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Focal Device Action" margin="normal" />}
            />
            <Autocomplete
                {...followUpProps}
                id="followUp"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Follow Up" margin="normal" />}
            />
            <Autocomplete
                {...outcomeProps}
                id="outcome"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Outcome" margin="normal" />}
            />
            <Autocomplete
                {...performerFunctionProps}
                id="performerFunction"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Performer Function" margin="normal" />}
            />
            <Autocomplete
                {...reasonCodeProps}
                id="reasonCode"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Reason Code" margin="normal" />}
            />
            <Autocomplete
                {...statusProps}
                id="status"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Status" margin="normal" />}
            />
            <Autocomplete
                {...statusReasonProps}
                id="statusReason"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Status Reason" margin="normal" />}
            />
            <Autocomplete
                {...usedCodeProps}
                id="usedCode"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Used Code" margin="normal" />}
            />
        </div>
    )
}

export default Procedure
