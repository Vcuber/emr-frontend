import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import { bodySite } from '../../../JSON/bodySite';
import { codeData } from '../../../JSON/code';
import { evidenceCode } from '../../../JSON/evidenceCode';
import { stageSummary } from '../../../JSON/stageSummary';
import { stageType } from '../../../JSON/stageType';

function Problem() {

    const bodySiteProps = {
        options: bodySite,
        getOptionLabel: (option) => option.display,
    };

    const category = [
        {code: "problem-list-item", display: "Problem List Item"},
        {code: "encounter-diagnosis", display: "Encounter Diagnosis"},
    ];

    const categoryProps = {
        options: category,
        getOptionLabel: (option) => option.display,
    };

    const clinicalStatus = [
        {lvl: "0", code: "active", display: "Active"},
        {lvl: "1", code: "recurrence", display: "Recurrence"},
        {lvl: "1", code: "relapse", display: "Relapse"},
        {lvl: "0", code: "inactive", display: "Inactive"},
        {lvl: "1", code: "remission", display: "Remission"},
        {lvl: "1", code: "resolved", display: "Resolved"},
    ];

    const clinicalStatusProps = {
        options: clinicalStatus,
        getOptionLabel: (option) => option.display,
    };

    const codeProps = {
        options: codeData,
        getOptionLabel: (option) => option.display,
    };

    const evidenceCodeProps = {
        options: evidenceCode,
        getOptionLabel: (option) => option.display,
    };

    const reactionSeverity = [
        {code: "mild", display: "Mild"},
        {code: "moderate", display: "Moderate"},
        {code: "severe", display: "Severe"},
    ];

    const reactionSeverityProps = {
        options: reactionSeverity,
        getOptionLabel: (option) => option.display,
    };

    const severity = [
        {code: "24484000", display: "Severe"},
        {code: "6736007", display: "Moderate"},
        {code: "255604002", display: "Mild"},
    ];

    const severityProps = {
        options: severity,
        getOptionLabel: (option) => option.display,
    };

    const stageSummaryProps = {
        options: stageSummary,
        getOptionLabel: (option) => option.display,
    };

    const stageTypeProps = {
        options: stageType,
        getOptionLabel: (option) => option.display,
    };

    const verificationStatus = [
        {lvl: "0", code: "unconfirmed", display: "Unconfirmed"},
        {lvl: "1", code: "provisional", display: "Provisional"},
        {lvl: "0", code: "differential", display: "Differential"},
        {lvl: "0", code: "confirmed", display: "Confirmed"},
        {lvl: "0", code: "refuted", display: "Refuted"},
        {lvl: "0", code: "entered-in-error", display: "Entered in Error"},
    ];

    const verificationStatusProps = {
        options: verificationStatus,
        getOptionLabel: (option) => option.display,
    };

    const comps = [
        {id:"bodySite", label: "Body Site", props: bodySiteProps},
        {id:"category", label: "Category", props: categoryProps},
        {id:"clinicalStatus", label: "Clinical Status", props: clinicalStatusProps},
        {id:"codeData", label: "Code", props: codeProps},
        {id:"evidenceCode", label: "Evidence Code", props: evidenceCodeProps},
        {id:"reactionSeverity", label: "Reaction Severity", props: reactionSeverityProps},
        {id:"severity", label: "Severity", props: severityProps},
        {id:"stageSummary", label: "Stage Summary", props: stageSummaryProps},
        {id:"stageType", label: "Stage Type", props: stageTypeProps},
        {id:"verificationStatus", label: "Verification Status", props: verificationStatusProps},
    ];

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                <u>Problem</u>
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

export default Problem
