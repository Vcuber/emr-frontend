import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { reactionExposureRoute } from '../../../JSON/reactionExposureRoute';
import { reactionManifestation } from '../../../JSON/reactionManifestation';
import { reactionSubstance } from '../../../JSON/reactionSubstance';
import { codeData } from '../../../JSON/code';


function Allergy() {
    
  const category = [
      {code: "food", display: "Food"},
      {code: "medication", display: "Medication"},
      {code: "environment", display: "Environment"},
      {code: "biologic", display: "Biologic"},
  ];

  const categoryProps = {
      options: category,
      getOptionLabel: (option) => option.display,
  };

  const clinicalStatus = [
      {lvl: "0", code: "active", display: "Active"},
      {lvl: "0", code: "inactive", display: "Inactive"},
      {lvl: "1", code: "resolved", display: "Resolved"},
  ];

  const clinicalStatusProps = {
      options: clinicalStatus,
      getOptionLabel: (option) => option.display,
  };

  const criticality = [
      {code: "low", display: "Low Risk"},
      {code: "high", display: "High Risk"},
      {code: "unable-to-assess", display: "Unable to Assess Risk"},
  ];
    
  const criticalityProps = {
      options: criticality,
      getOptionLabel: (option) => option.display,
  };

  const purpose = [
      {code: "bill", display: "Billing"},
      {code: "admin", display: "Administrative"},
      {code: "hr", display: "Human Resource"},
      {code: "payor", display: "Payor"},
      {code: "patinf", display: "Patient"},
      {code: "press", display: "Press"},
  ];
    
  const purposeProps = {
      options: purpose,
      getOptionLabel: (option) => option.display,
  };

  const reactionExposureRouteProps = {
      options: reactionExposureRoute,
      getOptionLabel: (option) => option.display,
  };

    const reactionManifestationProps = {
        options: reactionManifestation,
        getOptionLabel: (option) => option.display,
    };

    
    
    const reactionSubstanceProps = {
        options: reactionSubstance,
        getOptionLabel: (option) => option.display,
    };

    const type = [
      {code: "allergy", display: "Allergy"},
      {code: "intolerance", display: "Intolerance"},
    ];

    const typeProps = {
        options: type,
        getOptionLabel: (option) => option.display,
    };

    const verificationStatus = [
      {code: "unconfirmed", display: "Unconfirmed"},
      {code: "confirmed", display: "Confirmed"},
      {code: "refuted", display: "Refuted"},
      {code: "entered-in-error", display: "Entered in Error"},
    ];
    
    const verificationStatusProps = {
        options: verificationStatus,
        getOptionLabel: (option) => option.display,
    };
    
    const codeProps = {
        options: codeData,
        getOptionLabel: (option) => option.display,
    };
    
    return (
        <div>
            <Typography variant="h4" gutterBottom>
              <u>Allergy</u>
              <Divider />
            </Typography>
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
                {...criticalityProps}
                id="criticality"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Criticality" margin="normal" />}
            />
            <Autocomplete
                {...purposeProps}
                id="purpose"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Purpose" margin="normal" />}
            />
            <Autocomplete
                {...reactionExposureRouteProps}
                id="reactionExposureRoute"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Reaction Exposure Route" margin="normal" />}
            />
            <Autocomplete
                {...reactionManifestationProps}
                id="reactionManifestation"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Reaction Manifestation" margin="normal" />}
            />
            <Autocomplete
                {...reactionSubstanceProps}
                id="reactionSubstance"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Reaction Substance" margin="normal" />}
            />
            <Autocomplete
                {...typeProps}
                id="type"
                autoComplete
                includeInputInList
                renderInput={(params) => <TextField {...params} label="Type" margin="normal" />}
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

export default Allergy