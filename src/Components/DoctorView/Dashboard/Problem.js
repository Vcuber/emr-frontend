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

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                <u>Problem</u>
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
                {...clinicalStatusProps}
                id="clinicalStatus"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Clinical Status" margin="normal" />}
            />
            <Autocomplete
                {...codeProps}
                id="code"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="code" margin="normal" />}
            />
            <Autocomplete
                {...evidenceCodeProps}
                id="evidenceCode"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Evidence Code" margin="normal" />}
            />
            <Autocomplete
                {...reactionSeverityProps}
                id="reactionSeverity"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Reaction Severity" margin="normal" />}
            />
            <Autocomplete
                {...severityProps}
                id="severity"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Severity" margin="normal" />}
            />
            <Autocomplete
                {...stageSummaryProps}
                id="stageSummary"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Stage Summary" margin="normal" />}
            />
            <Autocomplete
                {...stageTypeProps}
                id="stageType"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Stage Type" margin="normal" />}
            />
            <Autocomplete
                {...verificationStatusProps}
                id="verificationStatus"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Verification Status" margin="normal" />}
            />
            <br />
            <br />      
        </div>
    )
}

export default Problem
