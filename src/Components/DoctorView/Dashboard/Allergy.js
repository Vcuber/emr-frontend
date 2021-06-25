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
    
    const comps = [ {id:"category", label: "Category", props: categoryProps},
                    {id:"clinicalStatus", label: "Clinical Status", props: clinicalStatusProps},
                    {id:"code", label: "Code", props: codeProps},
                    {id:"criticality", label: "Criticality", props: criticalityProps},
                    {id:"purpose", label: "Purpose", props: purposeProps},
                    {id:"reactionExposureRoute", label: "Reaction Exposure", props: reactionExposureRouteProps},
                    {id:"reactionManifestation", label: "Reaction Manifestation", props: reactionManifestationProps},
                    {id:"reactionSubstance", label: "Reaction Substance", props: reactionSubstanceProps},
                    {id:"type", label: "Type", props: typeProps},
                    {id:"verificationStatus", label: "Verification Status", props: verificationStatusProps}, 
                ];
    return (
        <div>
            <Typography variant="h4" gutterBottom>
              <u>Allergy</u>
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
            <br />
            <br />
        </div>
    )
}

export default Allergy