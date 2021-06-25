import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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

    const reactionExposureRoute = [
      {
        code: 6064005,
        display: "Topical route",
        
      },
      {
        code: 10547007,
        display: "Auricular use",
        
      },
      {
        code: 12130007,
        display: "Intra-articular route",
        
      },
      {
        code: 16857009,
        display: "Vaginal use",
        
      },
      {
        code: 26643006,
        display: "Oral use",
        
      },
      {
        code: 34206005,
        display: "SC use",
        
      },
      {
        code: 37161004,
        display: "Rectal use",
        
      },
      {
        code: 37737002,
        display: "Intraluminal use",
        
      },
      {
        code: 37839007,
        display: "Sublingual use",
        
      },
      {
        code: 38239002,
        display: "Intraperitoneal use",
        
      },
      {
        code: 45890007,
        display: "Transdermal use",
        
      },
      {
        code: 46713006,
        display: "Nasal use",
        
      },
      {
        code: 47625008,
        display: "Intravenous use",
        
      },
      {
        code: 54471007,
        display: "Buccal use",
        
      },
      {
        code: 54485002,
        display: "Ophthalmic use",
        
      },
      {
        code: 58100008,
        display: "Intra-arterial use",
        
      },
      {
        code: 60213007,
        display: "Intramedullary route",
        
      },
      {
        code: 62226000,
        display: "Intrauterine route",
        
      },
      {
        code: 72607000,
        display: "Intrathecal route",
        
      },
      {
        code: 78421000,
        display: "Intramuscular use",
        
      },
      {
        code: 90028008,
        display: "Urethral use",
        
      },
      {
        code: 127490009,
        display: "Gastrostomy use",
        
      },
      {
        code: 127491008,
        display: "Jejunostomy use",
        
      },
      {
        code: 127492001,
        display: "Nasogastric use",
        
      },
      {
        code: 372449004,
        display: "Dental use",
        
      },
      {
        code: 372450004,
        display: "Endocervical use",
        
      },
      {
        code: 372451000,
        display: "Endosinusial use",
        
      },
      {
        code: 372452007,
        display: "Endotracheopulmonary use",
        
      },
      {
        code: 372453002,
        display: "Extra-amniotic use",
        
      },
      {
        code: 372454008,
        display: "Gastroenteral use",
        
      },
      {
        code: 372457001,
        display: "Gingival use",
        
      },
      {
        code: 372458006,
        display: "Intraamniotic use",
        
      },
      {
        code: 372459003,
        display: "Intrabursal use",
        
      },
      {
        code: 372460008,
        display: "Intracardiac use",
        
      },
      {
        code: 372461007,
        display: "Intracavernous use",
        
      },
      {
        code: 372463005,
        display: "Intracoronary use",
        
      },
      {
        code: 372464004,
        display: "Intradermal use",
        
      },
      {
        code: 372465003,
        display: "Intradiscal use",
        
      },
      {
        code: 372466002,
        display: "Intralesional use",
        
      },
      {
        code: 372467006,
        display: "Intralymphatic use",
        
      },
      {
        code: 372468001,
        display: "Intraocular use",
        
      },
      {
        code: 372469009,
        display: "Intrapleural use",
        
      },
      {
        code: 372470005,
        display: "Intrasternal use",
        
      },
      {
        code: 372471009,
        display: "Intravesical use",
        
      },
      {
        code: 372473007,
        display: "Oromucosal use",
        
      },
      {
        code: 372474001,
        display: "Periarticular use",
        
      },
      {
        code: 372475000,
        display: "Perineural use",
        
      },
      {
        code: 372476004,
        display: "Subconjunctival use",
        
      },
      {
        code: 404815008,
        display: "Transmucosal route",
        
      },
      {
        code: 404818005,
        display: "Intratracheal route",
        
      },
      {
        code: 404819002,
        display: "Intrabiliary route",
        
      },
      {
        code: 404820008,
        display: "Epidural route",
        
      },
      {
        code: 416174007,
        display: "Suborbital route",
        
      },
      {
        code: 417070009,
        display: "Caudal route",
        
      },
      {
        code: 417255000,
        display: "Intraosseous route",
        
      },
      {
        code: 417950001,
        display: "Intrathoracic route",
        
      },
      {
        code: 417985001,
        display: "Enteral route",
        
      },
      {
        code: 417989007,
        display: "Intraductal route",
        
      },
      {
        code: 418091004,
        display: "Intratympanic route",
        
      },
      {
        code: 418114005,
        display: "Intravenous central route",
        
      },
      {
        code: 418133000,
        display: "Intramyometrial route",
        
      },
      {
        code: 418136008,
        display: "Gastro-intestinal stoma route",
        
      },
      {
        code: 418162004,
        display: "Colostomy route",
        
      },
      {
        code: 418204005,
        display: "Periurethral route",
        
      },
      {
        code: 418287000,
        display: "Intracoronal route",
        
      },
      {
        code: 418321004,
        display: "Retrobulbar route",
        
      },
      {
        code: 418331006,
        display: "Intracartilaginous route",
        
      },
      {
        code: 418401004,
        display: "Intravitreal route",
        
      },
      {
        code: 418418000,
        display: "Intraspinal route",
        
      },
      {
        code: 418441008,
        display: "Orogastric route",
        
      },
      {
        code: 418511008,
        display: "Transurethral route",
        
      },
      {
        code: 418586008,
        display: "Intratendinous route",
        
      },
      {
        code: 418608002,
        display: "Intracorneal route",
        
      },
      {
        code: 418664002,
        display: "Oropharyngeal route",
        
      },
      {
        code: 418722009,
        display: "Peribulbar route",
        
      },
      {
        code: 418730005,
        display: "Nasojejunal route",
        
      },
      {
        code: 418743005,
        display: "Fistula route",
        
      },
      {
        code: 418813001,
        display: "Surgical drain route",
        
      },
      {
        code: 418821007,
        display: "Intracameral route",
        
      },
      {
        code: 418851001,
        display: "Paracervical route",
        
      },
      {
        code: 418877009,
        display: "Intrasynovial route",
        
      },
      {
        code: 418887008,
        display: "Intraduodenal route",
        
      },
      {
        code: 418892005,
        display: "Intracisternal route",
        
      },
      {
        code: 418947002,
        display: "Intratesticular route",
        
      },
      {
        code: 418987007,
        display: "Intracranial route",
        
      },
      {
        code: 419021003,
        display: "Tumor cavity route",
        
      },
      {
        code: 419165009,
        display: "Paravertebral route",
        
      },
      {
        code: 419231003,
        display: "Intrasinal route",
        
      },
      {
        code: 419243002,
        display: "Transcervical route",
        
      },
      {
        code: 419320008,
        display: "Subtendinous route",
        
      },
      {
        code: 419396008,
        display: "Intraabdominal route",
        
      },
      {
        code: 419601003,
        display: "Subgingival route",
        
      },
      {
        code: 419631009,
        display: "Intraovarian route",
        
      },
      {
        code: 419684008,
        display: "Ureteral route",
        
      },
      {
        code: 419762003,
        display: "Peritendinous route",
        
      },
      {
        code: 419778001,
        display: "Intrabronchial route",
        
      },
      {
        code: 419810008,
        display: "Intraprostatic route",
        
      },
      {
        code: 419874009,
        display: "Submucosal route",
        
      },
      {
        code: 419894000,
        display: "Surgical cavity route",
        
      },
      {
        code: 419954003,
        display: "Ileostomy route",
        
      },
      {
        code: 419993007,
        display: "Intravenous peripheral route",
        
      },
      {
        code: 420047004,
        display: "Periosteal route",
        
      },
      {
        code: 420163009,
        display: "Esophagostomy route",
        
      },
      {
        code: 420168000,
        display: "Urostomy route",
        
      },
      {
        code: 420185003,
        display: "Laryngeal route",
        
      },
      {
        code: 420201002,
        display: "Intrapulmonary route",
        
      },
      {
        code: 420204005,
        display: "Mucous fistula route",
        
      },
      {
        code: 420218003,
        display: "Nasoduodenal route",
        
      },
      {
        code: 420254004,
        display: "Body cavity route",
        
      },
      {
        code: 420287000,
        display: "Intraventricular route - cardiac",
        
      },
      {
        code: 420719007,
        display: "Intracerebroventricular route",
        
      },
      {
        code: 428191002,
        display: "Percutaneous route",
        
      },
      {
        code: 429817007,
        display: "Interstitial route",
        
      },
      {
        code: 445752009,
        display: "Intraesophageal route",
        
      },
      {
        code: 445754005,
        display: "Intragingival route",
        
      },
      {
        code: 445755006,
        display: "Intravascular route",
        
      },
      {
        code: 445756007,
        display: "Intradural route",
        
      },
      {
        code: 445767008,
        display: "Intrameningeal route",
        
      },
      {
        code: 445768003,
        display: "Intragastric route",
        
      },
      {
        code: 445769006,
        display: "Intracorpus cavernosum route",
        
      },
      {
        code: 445771006,
        display: "Intrapericardial route",
        
      },
      {
        code: 445913005,
        display: "Intralingual route",
        
      },
      {
        code: 445941009,
        display: "Intrahepatic route",
        
      },
      {
        code: 446105004,
        display: "Conjunctival route",
        
      },
      {
        code: 446407004,
        display: "Intraepicardial route",
        
      },
      {
        code: 446435000,
        display: "Transendocardial route",
        
      },
      {
        code: 446442000,
        display: "Transplacental route",
        
      },
      {
        code: 446540005,
        display: "Intracerebral route",
        
      },
      {
        code: 447026006,
        display: "Intraileal route",
        
      },
      {
        code: 447052000,
        display: "Periodontal route",
        
      },
      {
        code: 447080003,
        display: "Peridural route",
        
      },
      {
        code: 447081004,
        display: "Lower respiratory tract route",
        
      },
      {
        code: 447121004,
        display: "Intramammary route",
        
      },
      {
        code: 447122006,
        display: "Intratumor route",
        
      },
      {
        code: 447227007,
        display: "Transtympanic route",
        
      },
      {
        code: 447229005,
        display: "Transtracheal route",
        
      },
      {
        code: 447694001,
        display: "Respiratory tract route",
        
      },
      {
        code: 447964005,
        display: "Digestive tract route",
        
      },
      {
        code: 448077001,
        display: "Intraepidermal route",
        
      },
      {
        code: 448491004,
        display: "Intrajejunal route",
        
      },
      {
        code: 448492006,
        display: "Intracolonic route",
        
      },
      {
        code: 448598008,
        display: "Cutaneous route",
        
      },
      {
        code: 697971008,
        display: "Arteriovenous fistula route",
        
      },
      {
        code: 711360002,
        display: "Intraneural route",
        
      },
      {
        code: 711378007,
        display: "Intramural route",
        
      },
      {
        code: 714743009,
        display: "Extracorporeal route",
        
      },
      {
        code: 718329006,
        display: "Infiltration route",
        
      },
      {
        code: 1611000175109,
        display: "Sublesional route",
        
      },
      {
        code: 180677251000087100,
        display: "Intraventricular",
        
      },
      {
        code: 461657851000087100,
        display: "Translingual",
        
      }
    ];

  const reactionExposureRouteProps = {
      options: reactionExposureRoute,
      getOptionLabel: (option) => option.display,
  };

  const reactionManifestation = [
      {
        code: 109006,
        display: "Anxiety disorder of childhood OR adolescence",
        
      },
      {
        code: 122003,
        display: "Choroidal hemorrhage",
        
      },
      {
        code: 127009,
        display: "Spontaneous abortion with laceration of cervix",
        
      },
      {
        code: 129007,
        display: "Homoiothermia",
        
      },
      {
        code: 134006,
        display: "Decreased hair growth",
        
      },
      {
        code: 140004,
        display: "Chronic pharyngitis",
        
      },
      {
        code: 144008,
        display: "Normal peripheral vision",
        
      },
      {
        code: 147001,
        display: "Superficial foreign body of scrotum without major open wound but with infection",
        
      },
      {
        code: 150003,
        display: "Abnormal bladder continence",
        
      },
      {
        code: 151004,
        display: "Meningitis due to gonococcus",
        
      },
      {
        code: 162004,
        display: "Severe manic bipolar I disorder without psychotic features",
        
      },
      {
        code: 165002,
        display: "Accident-prone",
        
      },
      {
        code: 168000,
        display: "Typhlolithiasis",
        
      },
      {
        code: 171008,
        display: "Injury of ascending right colon without open wound into abdominal cavity",
        
      },
      {
        code: 172001,
        display: "Endometritis following molar AND/OR ectopic pregnancy",
        
      },
      {
        code: 175004,
        display: "Supraorbital neuralgia",
        
      },
      {
        code: 177007,
        display: "Poisoning by sawfly larvae",
        
      },
      {
        code: 179005,
        display: "Apraxia of dressing",
        
      },
      {
        code: 181007,
        display: "Hemorrhagic bronchopneumonia",
        
      },
      {
        code: 183005,
        display: "Autoimmune pancytopenia",
        
      },
      {
        code: 184004,
        display: "Withdrawal arrhythmia",
        
      },
      {
        code: 188001,
        display: "Intercostal artery injury",
        
      },
      {
        code: 192008,
        display: "Congenital syphilitic hepatomegaly",
        
      },
      {
        code: 193003,
        display: "Benign hypertensive renal disease",
        
      },
      {
        code: 195005,
        display: "Illegal abortion with endometritis",
        
      },
      {
        code: 198007,
        display: "Disease due to Filoviridae",
        
      },
      {
        code: 199004,
        display: "Decreased lactation",
        
      },
      {
        code: 208008,
        display: "Neurocutaneous melanosis sequence",
        
      },
      {
        code: 216004,
        display: "Delusion of persecution",
        
      },
      {
        code: 219006,
        display: "Alcohol user",
        
      },
      {
        code: 222008,
        display: "Acute epiglottitis with obstruction",
        
      },
      {
        code: 223003,
        display: "Tumor of body of uterus affecting pregnancy",
        
      },
      {
        code: 228007,
        display: "Lucio phenomenon",
        
      },
      {
        code: 241006,
        display: "Motor simple partial status",
        
      },
      {
        code: 242004,
        display: "Noninfectious jejunitis",
        
      },
      {
        code: 253005,
        display: "Sycosis",
        
      },
      {
        code: 257006,
        display: "Acne rosacea, erythematous telangiectatic type",
        
      },
      {
        code: 258001,
        display: "Pseudoknuckle pad",
        
      },
      {
        code: 264008,
        display: "Blind hypertensive eye",
        
      },
      {
        code: 276008,
        display: "Oxytocin poisoning",
        
      },
      {
        code: 279001,
        display: "Senile myocarditis",
        
      },
      {
        code: 281004,
        display: "Alcoholic dementia",
        
      },
      {
        code: 282006,
        display: "Acute myocardial infarction of basal-lateral wall",
        
      },
      {
        code: 290006,
        display: "Melnick-Fraser syndrome",
        
      },
      {
        code: 292003,
        display: "EEG finding",
        
      },
      {
        code: 297009,
        display: "Acute myringitis",
        
      },
      {
        code: 299007,
        display: "Paraffinoma of skin",
        
      },
      {
        code: 303002,
        display: "Apoplectic pancreatitis",
        
      },
      {
        code: 308006,
        display: "Pearly penile papules",
        
      },
      {
        code: 310008,
        display: "Penile boil",
        
      },
      {
        code: 313005,
        display: "Déjà vu",
        
      },
      {
        code: 317006,
        display: "Reactive hypoglycemia",
        
      },
      {
        code: 320003,
        display: "Cervical dilatation, 1cm",
        
      },
      {
        code: 324007,
        display: "Plaster ulcer",
        
      },
      {
        code: 330007,
        display: "Occipital headache",
        
      },
      {
        code: 335002,
        display: "Pylorospasm",
        
      },
      {
        code: 341009,
        display: "ABO incompatibility reaction",
        
      },
      {
        code: 349006,
        display: "Absent tendon reflex",
        
      },
      {
        code: 355001,
        display: "Hemorrhagic shock",
        
      },
      {
        code: 357009,
        display: "Closed fracture trapezoid",
        
      },
      {
        code: 358004,
        display: "Smallpox vaccine poisoning",
        
      },
      {
        code: 359007,
        display: "Kernicterus due to isoimmunization",
        
      },
      {
        code: 360002,
        display: "Acute radiation disease",
        
      },
      {
        code: 364006,
        display: "Acute left-sided heart failure",
        
      },
      {
        code: 366008,
        display: "Hidromeiosis",
        
      },
      {
        code: 368009,
        display: "Heart valve disorder",
        
      },
      {
        code: 369001,
        display: "Normal jugular venous pressure",
        
      },
      {
        code: 378007,
        display: "Morquio syndrome",
        
      },
      {
        code: 382009,
        display: "Legal history finding relating to child",
        
      },
      {
        code: 383004,
        display: "Finding of passive range of hip extension",
        
      },
      {
        code: 385006,
        display: "Secondary peripheral neuropathy",
        
      },
      {
        code: 387003,
        display: "Melanuria",
        
      },
      {
        code: 398002,
        display: "Left axis deviation greater than -90 degrees by EKG",
        
      },
      {
        code: 407000,
        display: "Congenital hepatomegaly",
        
      },
      {
        code: 408005,
        display: "Tooth chattering",
        
      },
      {
        code: 409002,
        display: "Food allergy diet",
        
      },
      {
        code: 426008,
        display: "Superficial injury of ankle without infection",
        
      },
      {
        code: 431005,
        display: "Hypertrophy of scrotum",
        
      },
      {
        code: 437009,
        display: "Abnormal composition of urine",
        
      },
      {
        code: 440009,
        display: "Persistent hyperphenylalaninemia",
        
      },
      {
        code: 442001,
        display: "Secondary hypopituitarism",
        
      },
      {
        code: 443006,
        display: "Cystocele affecting pregnancy",
        
      },
      {
        code: 447007,
        display: "Coach in sports activity accident",
        
      },
      {
        code: 450005,
        display: "Ulcerative stomatitis",
        
      },
      {
        code: 452002,
        display: "Blister of groin without infection",
        
      },
      {
        code: 460001,
        display: "Squamous metaplasia of prostate gland",
        
      },
      {
        code: 467003,
        display: "Old laceration of pelvic floor muscle",
        
      },
      {
        code: 470004,
        display: "Vitreous touch syndrome",
        
      },
      {
        code: 479003,
        display: "Graves' disease with pretibial myxedema AND with thyrotoxic crisis",
        
      },
      {
        code: 486006,
        display: "Acute vascular insufficiency",
        
      },
      {
        code: 488007,
        display: "Fibroid myocarditis",
        
      },
      {
        code: 490008,
        display: "Upper respiratory tract hypersensitivity reaction",
        
      },
      {
        code: 496002,
        display: "Closed traumatic dislocation of third cervical vertebra",
        
      },
      {
        code: 504009,
        display: "Androgen-dependent hirsutism",
        
      },
      {
        code: 517007,
        display: "Foreign body in hypopharynx",
        
      },
      {
        code: 518002,
        display: "Multiple aggregation",
        
      },
      {
        code: 520004,
        display: "Congenital bent nose",
        
      },
      {
        code: 527001,
        display: "Spontaneous fetal evolution, Roederer's method",
        
      },
      {
        code: 536002,
        display: "Glissonian cirrhosis",
        
      },
      {
        code: 539009,
        display: "Conjunctival argyrosis",
        
      },
      {
        code: 547009,
        display: "Hypersecretion of calcitonin",
        
      },
      {
        code: 548004,
        display: "13p partial trisomy syndrome",
        
      },
      {
        code: 554003,
        display: "2p partial trisomy syndrome",
        
      },
      {
        code: 555002,
        display: "Dicentra species poisoning",
        
      },
      {
        code: 563001,
        display: "Nystagmus",
        
      },
      {
        code: 568005,
        display: "Habit disorder",
        
      },
      {
        code: 586008,
        display: "Contact dermatitis due to primrose",
        
      },
      {
        code: 590005,
        display: "Congenital aneurysm of anterior communicating artery",
        
      },
      {
        code: 596004,
        display: "Premenstrual dysphoric disorder",
        
      },
      {
        code: 599006,
        display: "Persistent pneumothorax",
        
      },
      {
        code: 600009,
        display: "Pyromania",
        
      },
      {
        code: 602001,
        display: "Ross river fever",
        
      },
      {
        code: 607007,
        display: "Decreased vital capacity",
        
      },
      {
        code: 610000,
        display: "Spastic aphonia",
        
      },
      {
        code: 613003,
        display: "FRAXA - Fragile X syndrome",
        
      },
      {
        code: 615005,
        display: "Obstruction due to foreign body accidentally left in operative wound AND/OR body cavity during a procedure",
        
      },
      {
        code: 616006,
        display: "Sensorimotor disorder of eyelid",
        
      },
      {
        code: 626004,
        display: "Hypercortisolism due to nonpituitary tumor",
        
      },
      {
        code: 631002,
        display: "Transfusion reaction due to minor incompatibility",
        
      },
      {
        code: 634005,
        display: "Saddle boil",
        
      },
      {
        code: 640003,
        display: "Injury of pneumogastric nerve",
        
      },
      {
        code: 643001,
        display: "Hypertrophy of lip",
        
      },
      {
        code: 646009,
        display: "Idiopathic cyst of anterior chamber",
        
      },
      {
        code: 649002,
        display: "Open fracture of distal end of ulna",
        
      },
      {
        code: 651003,
        display: "Root work",
        
      },
      {
        code: 652005,
        display: "Gangrenous tonsillitis",
        
      },
      {
        code: 655007,
        display: "Abnormal fetal heart beat noted before labor in liveborn infant",
        
      },
      {
        code: 658009,
        display: "Injury of colon without open wound into abdominal cavity",
        
      },
      {
        code: 663008,
        display: "Pulmonary embolism following molar AND/OR ectopic pregnancy",
        
      },
      {
        code: 664002,
        display: "Delayed ovulation",
        
      },
      {
        code: 666000,
        display: "Poisoning by antivaricose drug AND/OR sclerosing agent",
        
      },
      {
        code: 675003,
        display: "Torsion of intestine",
        
      },
      {
        code: 682004,
        display: "Thrombosis complicating pregnancy AND/OR puerperium",
        
      },
      {
        code: 685002,
        display: "Acquired telangiectasia of small AND/OR large intestines",
        
      },
      {
        code: 701003,
        display: "Adult osteochondritis of spine",
        
      },
      {
        code: 703000,
        display: "Congenital adhesion of tongue",
        
      },
      {
        code: 714002,
        display: "Abrasion AND/OR friction burn of toe with infection",
        
      },
      {
        code: 715001,
        display: "Nontraumatic rupture of urethra",
        
      },
      {
        code: 718004,
        display: "Acute bronchiolitis with obstruction",
        
      },
      {
        code: 733007,
        display: "Superficial foreign body of groin without major open wound but with infection",
        
      },
      {
        code: 734001,
        display: "Opocephalus",
        
      },
      {
        code: 736004,
        display: "Abscess of hip",
        
      },
      {
        code: 750009,
        display: "Schistosoma mansoni infection",
        
      },
      {
        code: 755004,
        display: "Postgastrectomy phytobezoar",
        
      },
      {
        code: 756003,
        display: "Chronic rheumatic myopericarditis",
        
      },
      {
        code: 758002,
        display: "Cyst of uterus",
        
      },
      {
        code: 775008,
        display: "Open wound of head with complication",
        
      },
      {
        code: 776009,
        display: "Partial arterial retinal occlusion",
        
      },
      {
        code: 781000,
        display: "Cestrum diurnum poisoning",
        
      },
      {
        code: 786005,
        display: "Clinical stage I B",
        
      },
      {
        code: 787001,
        display: "Rheumatic mitral stenosis with regurgitation",
        
      },
      {
        code: 788006,
        display: "Disease-related diet",
        
      },
      {
        code: 792004,
        display: "CJD - Creutzfeldt-Jakob disease",
        
      },
      {
        code: 799008,
        display: "Sigmoid colon ulcer",
        
      },
      {
        code: 801006,
        display: "Insect bite, nonvenomous, of foot, infected",
        
      },
      {
        code: 805002,
        display: "Pneumoconiosis due to silica",
        
      },
      {
        code: 811004,
        display: "Flail motion",
        
      },
      {
        code: 813001,
        display: "Ankle instability",
        
      },
      {
        code: 815008,
        display: "Episcleritis",
        
      },
      {
        code: 816009,
        display: "Genetic recombination",
        
      },
      {
        code: 818005,
        display: "Third degree burn of multiple sites of lower limb",
        
      },
      {
        code: 825003,
        display: "Superficial injury of axilla with infection",
        
      },
      {
        code: 827006,
        display: "Late congenital syphilis, latent (+ sero., - C.S.F., 2 years OR more)",
        
      },
      {
        code: 832007,
        display: "Moderate major depression",
        
      },
      {
        code: 834008,
        display: "Chair-seated facing coital position",
        
      },
      {
        code: 841002,
        display: "Congenital absence of skull bone",
        
      },
      {
        code: 842009,
        display: "Consanguinity",
        
      },
      {
        code: 843004,
        display: "Poliomyelomalacia",
        
      },
      {
        code: 844005,
        display: "Finding relating to behavior",
        
      },
      {
        code: 845006,
        display: "Inferior mesenteric artery injury",
        
      },
      {
        code: 849000,
        display: "Total cataract",
        
      },
      {
        code: 857002,
        display: "Erythema simplex",
        
      },
      {
        code: 862001,
        display: "Anemia due to chlorate",
        
      },
      {
        code: 865004,
        display: "Hyperalimentation formula for ileus",
        
      },
      {
        code: 871005,
        display: "Contracted pelvis",
        
      },
      {
        code: 874002,
        display: "Therapeutic diuresis",
        
      },
      {
        code: 875001,
        display: "Chalcosis of eye",
        
      },
      {
        code: 888003,
        display: "Foetal or neonatal effect of maternal blood loss",
        
      },
      {
        code: 890002,
        display: "Deep third degree burn of elbow",
        
      },
      {
        code: 899001,
        display: "Axis I diagnosis",
        
      },
      {
        code: 903008,
        display: "Chorioretinal infarction",
        
      },
      {
        code: 904002,
        display: "Pinard's sign",
        
      },
      {
        code: 908004,
        display: "Superficial injury of interscapular region without infection",
        
      },
      {
        code: 919001,
        display: "Pseudohomosexual state",
        
      },
      {
        code: 928000,
        display: "Musculoskeletal disorder",
        
      },
      {
        code: 931004,
        display: "Gestation period, 9 weeks",
        
      },
      {
        code: 932006,
        display: "Flat affect",
        
      },
      {
        code: 934007,
        display: "Thalassemia intermedia",
        
      },
      {
        code: 943003,
        display: "Congenital retinal aneurysm",
        
      },
      {
        code: 954008,
        display: "Renon-Delille syndrome",
        
      },
      {
        code: 961007,
        display: "Erythema nodosum, acute form",
        
      },
      {
        code: 962000,
        display: "Disability evaluation, disability 6%",
        
      },
      {
        code: 964004,
        display: "Open wound of pharynx without complication",
        
      },
      {
        code: 965003,
        display: "Toxic amblyopia",
        
      },
      {
        code: 975000,
        display: "Anorectal agenesis",
        
      },
      {
        code: 978003,
        display: "Chronic infantile eczema",
        
      },
      {
        code: 981008,
        display: "Hemorrhagic proctitis",
        
      },
      {
        code: 984000,
        display: "Perirectal cellulitis",
        
      },
      {
        code: 987007,
        display: "Cellulitis of temple region",
        
      },
      {
        code: 991002,
        display: "Wide QRS complex",
        
      },
      {
        code: 998008,
        display: "Chagas' disease with heart involvement",
        
      },
      {
        code: 1003002,
        display: "Religious discrimination",
        
      },
      {
        code: 1020003,
        display: "Disease due to Nairovirus",
        
      },
      {
        code: 1023001,
        display: "Apneic",
        
      },
      {
        code: 1027000,
        display: "Biliary esophagitis",
        
      },
      {
        code: 1031006,
        display: "Open wound of trachea without complication",
        
      },
      {
        code: 1033009,
        display: "Thoracic arthritis",
        
      },
      {
        code: 1034003,
        display: "Mesenteric-portal fistula",
        
      },
      {
        code: 1038000,
        display: "Disacchariduria",
        
      },
      {
        code: 1045000,
        display: "Colonospasm",
        
      },
      {
        code: 1046004,
        display: "Ureteritis glandularis",
        
      },
      {
        code: 1051005,
        display: "Hyperplasia of islet alpha cells with gastrin excess",
        
      },
      {
        code: 1055001,
        display: "Stenosis of precerebral artery",
        
      },
      {
        code: 1059007,
        display: "Opisthorchiasis",
        
      },
      {
        code: 1070000,
        display: "Facial myokymia",
        
      },
      {
        code: 1073003,
        display: "Xeroderma pigmentosum group B",
        
      },
      {
        code: 1074009,
        display: "Glucocorticoid-responsive primary hyperaldosteronism",
        
      },
      {
        code: 1077002,
        display: "Septal infarction by EKG",
        
      },
      {
        code: 1079004,
        display: "Macular retinal cyst",
        
      },
      {
        code: 1085006,
        display: "Vulval candidiasis",
        
      },
      {
        code: 1089000,
        display: "Congenital sepsis",
        
      },
      {
        code: 1102005,
        display: "Intraerythrocytic parasitosis by Nuttallia",
        
      },
      {
        code: 1107004,
        display: "Early latent syphilis, positive serology, negative cerebrospinal fluid, with relapse after treatment",
        
      },
      {
        code: 1108009,
        display: "Female pattern alopecia",
        
      },
      {
        code: 1111005,
        display: "Normal sebaceous gland activity",
        
      },
      {
        code: 1112003,
        display: "Degenerative disorder of eyelid",
        
      },
      {
        code: 1116000,
        display: "Chronic aggressive type B viral hepatitis",
        
      },
      {
        code: 1124005,
        display: "Postpartum period, 6 days",
        
      },
      {
        code: 1125006,
        display: "Septicemia during labor",
        
      },
      {
        code: 1126007,
        display: "Knee locking",
        
      },
      {
        code: 1131009,
        display: "Congenital valvular insufficiency",
        
      },
      {
        code: 1134001,
        display: "Muehrcke lines",
        
      },
      {
        code: 1135000,
        display: "Solar retinitis",
        
      },
      {
        code: 1139006,
        display: "Confrontation (visual) test",
        
      },
      {
        code: 1140008,
        display: "Thermal hypesthesia",
        
      },
      {
        code: 1141007,
        display: "Circumoral paresthesia",
        
      },
      {
        code: 1145003,
        display: "DSD - Developmental speech disorder",
        
      },
      {
        code: 1150009,
        display: "Congenital microcheilia",
        
      },
      {
        code: 1151008,
        display: "Constricted visual field",
        
      },
      {
        code: 1152001,
        display: "Skin reaction negative",
        
      },
      {
        code: 1155004,
        display: "Myocardial hypertrophy, determined by electrocardiogram",
        
      },
      {
        code: 1156003,
        display: "Cavitary prostatitis",
        
      },
      {
        code: 1168007,
        display: "Allotype",
        
      },
      {
        code: 1184008,
        display: "Glasgow coma scale, 10",
        
      },
      {
        code: 1192004,
        display: "Familial amyloid neuropathy, Finnish type",
        
      },
      {
        code: 1194003,
        display: "Disease condition determination, well controlled",
        
      },
      {
        code: 1196001,
        display: "Chronic bipolar II disorder, most recent episode major depressive",
        
      },
      {
        code: 1197005,
        display: "Carbuncle of heel",
        
      },
      {
        code: 1201005,
        display: "Benign essential hypertension",
        
      },
      {
        code: 1203008,
        display: "Deep third degree burn of forehead AND/OR cheek with loss of body part",
        
      },
      {
        code: 1207009,
        display: "Optic disc glaucomatous atrophy",
        
      },
      {
        code: 1208004,
        display: "Gastroptosis",
        
      },
      {
        code: 1212005,
        display: "Juvenile dermatomyositis",
        
      },
      {
        code: 1214006,
        display: "Infection by Strongyloides",
        
      },
      {
        code: 1230003,
        display: "No diagnosis on Axis 1",
        
      },
      {
        code: 1232006,
        display: "Congenital articular rigidity with myopathy",
        
      },
      {
        code: 1239002,
        display: "Congenital anteversion of femoral neck",
        
      },
      {
        code: 1240000,
        display: "Lying prone",
        
      },
      {
        code: 1259003,
        display: "Schistosis",
        
      },
      {
        code: 1261007,
        display: "Multiple fractures of ribs",
        
      },
      {
        code: 1264004,
        display: "Injury of descending left colon without open wound into abdominal cavity",
        
      },
      {
        code: 1271009,
        display: "Knuckle pads, leuconychia and deafness",
        
      },
      {
        code: 1280009,
        display: "Isologous chimera",
        
      },
      {
        code: 1282001,
        display: "Laryngeal perichondritis",
        
      },
      {
        code: 1283006,
        display: "Visual acuity less than .02 (1/60, count fingers 1 meter) or visual field less than 5 degrees, but better than 5.",
        
      },
      {
        code: 1284000,
        display: "Abnormal jaw closure",
        
      },
      {
        code: 1286003,
        display: "Vitamin K deficiency coagulation disorder",
        
      },
      {
        code: 1287007,
        display: "Congenital absence of bile duct",
        
      },
      {
        code: 1297003,
        display: "Infection by Cladosporium carrionii",
        
      },
      {
        code: 1308001,
        display: "Complication of reimplant",
        
      },
      {
        code: 1310004,
        display: "Impaired glucose tolerance associated with genetic syndrome",
        
      },
      {
        code: 1317001,
        display: "Injury of ovary without open wound into abdominal cavity",
        
      },
      {
        code: 1318006,
        display: "Post-translational genetic protein processing",
        
      },
      {
        code: 1323006,
        display: "Kanamycin poisoning",
        
      },
      {
        code: 1332008,
        display: "Conjugated visual deviation",
        
      },
      {
        code: 1335005,
        display: "Peyronies disease",
        
      },
      {
        code: 1343000,
        display: "DTA - Deep transverse arrest",
        
      },
      {
        code: 1345007,
        display: "Hang nail",
        
      },
      {
        code: 1351002,
        display: "Iliac artery injury",
        
      },
      {
        code: 1356007,
        display: "Calculus of common duct with obstruction",
        
      },
      {
        code: 1361009,
        display: "Leucocoria",
        
      },
      {
        code: 1363007,
        display: "Fetal or neonatal effect of chronic maternal respiratory disease",
        
      },
      {
        code: 1367008,
        display: "Injury of superior mesenteric artery",
        
      },
      {
        code: 1370007,
        display: "Open fracture of metacarpal bone(s)",
        
      },
      {
        code: 1372004,
        display: "Unicornate uterus",
        
      },
      {
        code: 1376001,
        display: "Obsessive compulsive personality disorder",
        
      },
      {
        code: 1378000,
        display: "Supination-eversion injury of ankle",
        
      },
      {
        code: 1380006,
        display: "Agoraphobia without history of panic disorder with limited symptom attacks",
        
      },
      {
        code: 1383008,
        display: "Hallucinogen induced mood disorder",
        
      },
      {
        code: 1384002,
        display: "Diffuse cholesteatosis of middle ear",
        
      },
      {
        code: 1386000,
        display: "Intracranial hemorrhage",
        
      },
      {
        code: 1387009,
        display: "Solanum nigrum poisoning",
        
      },
      {
        code: 1388004,
        display: "Metabolic alkalosis",
        
      },
      {
        code: 1393001,
        display: "Lenz-Majewski dysplasia",
        
      },
      {
        code: 1395008,
        display: "Complication of ultrasound therapy",
        
      },
      {
        code: 1402001,
        display: "Frightened",
        
      },
      {
        code: 1412008,
        display: "Anterior subcapsular polar cataract",
        
      },
      {
        code: 1415005,
        display: "Inflammation of lymphatics",
        
      },
      {
        code: 1418007,
        display: "Hypoplastic chondrodystrophy",
        
      },
      {
        code: 1419004,
        display: "Injury of prostate without open wound into abdominal cavity",
        
      },
      {
        code: 1426004,
        display: "Necrotizing glomerulonephritis",
        
      },
      {
        code: 1427008,
        display: "Intraspinal abscess",
        
      },
      {
        code: 1430001,
        display: "Intracranial hemorrhage following injury without open intracranial wound AND with prolonged loss of consciousness (more than 24 hours) without return to pre-existing level",
        
      },
      {
        code: 1447000,
        display: "Icthyoparasitism",
        
      },
      {
        code: 1469007,
        display: "Miscarriage with urinary tract infection",
        
      },
      {
        code: 1474004,
        display: "Hypertensive heart AND renal disease complicating AND/OR reason for care during childbirth",
        
      },
      {
        code: 1475003,
        display: "Herpes labialis",
        
      },
      {
        code: 1478001,
        display: "Obliteration of lymphatic vessel",
        
      },
      {
        code: 1479009,
        display: "20q partial trisomy syndrome",
        
      },
      {
        code: 1482004,
        display: "Chalazion",
        
      },
      {
        code: 1486001,
        display: "Orbital congestion",
        
      },
      {
        code: 1488000,
        display: "PONV - Postoperative nausea and vomiting",
        
      },
      {
        code: 1489008,
        display: "External hordeolum",
        
      },
      {
        code: 1492007,
        display: "Congenital anomaly of large intestine",
        
      },
      {
        code: 1493002,
        display: "Acute endophthalmitis",
        
      },
      {
        code: 1499003,
        display: "Bipolar I disorder, single manic episode with postpartum onset",
        
      },
      {
        code: 1512006,
        display: "Congenital stricture of bile duct",
        
      },
      {
        code: 1515008,
        display: "Gorham disease",
        
      },
      {
        code: 1518005,
        display: "Splenitis",
        
      },
      {
        code: 1519002,
        display: "Congenital phlebectasia",
        
      },
      {
        code: 1521007,
        display: "Blister of buttock without infection",
        
      },
      {
        code: 1523005,
        display: "Clinical stage IV B",
        
      },
      {
        code: 1525003,
        display: "Blister of foot without infection",
        
      },
      {
        code: 1531000,
        display: "Nitrofuran derivative poisoning",
        
      },
      {
        code: 1532007,
        display: "Viral pharyngitis",
        
      },
      {
        code: 1534008,
        display: "Palsy of conjugate gaze",
        
      },
      {
        code: 1538006,
        display: "Central nervous system malformation in foetus affecting obstetrical care",
        
      },
      {
        code: 1539003,
        display: "Nodular tendinous disease of finger",
        
      },
      {
        code: 1542009,
        display: "Omphalocele with obstruction",
        
      },
      {
        code: 1544005,
        display: "Open dislocation of knee",
        
      },
      {
        code: 1551001,
        display: "Osteomyelitis of femur",
        
      },
      {
        code: 1556006,
        display: "Clark melanoma level 4",
        
      },
      {
        code: 1563006,
        display: "Protein S deficiency",
        
      },
      {
        code: 1567007,
        display: "Chronic gastric ulcer without hemorrhage, without perforation AND without obstruction",
        
      },
      {
        code: 1588003,
        display: "Heterosexual precocious puberty",
        
      },
      {
        code: 1592005,
        display: "Failed attempted termination of pregnancy with uremia",
        
      },
      {
        code: 1593000,
        display: "Infantile hemiplegia",
        
      },
      {
        code: 1606009,
        display: "Infection caused by Macracanthorhynchus hirudinaceus",
        
      },
      {
        code: 1608005,
        display: "Increased capillary permeability",
        
      },
      {
        code: 1639007,
        display: "Abnormality of organs AND/OR soft tissues of pelvis affecting pregnancy",
        
      },
      {
        code: 1647007,
        display: "Primaquine poisoning",
        
      },
      {
        code: 1648002,
        display: "Lymphocytic pseudotumor of lung",
        
      },
      {
        code: 1654001,
        display: "Steroid-induced glaucoma",
        
      },
      {
        code: 1657008,
        display: "Toxic effect of phosdrin",
        
      },
      {
        code: 1658003,
        display: "Closed fracture clavicle, lateral end",
        
      },
      {
        code: 1663004,
        display: "Tumor grade G2",
        
      },
      {
        code: 1667003,
        display: "Early fontanel closure",
        
      },
      {
        code: 1670004,
        display: "Cerebral hemiparesis",
        
      },
      {
        code: 1671000,
        display: "Sago spleen",
        
      },
      {
        code: 1674008,
        display: "Meesman's epithelial corneal dystrophy",
        
      },
      {
        code: 1679003,
        display: "Arthritis associated with another disorder",
        
      },
      {
        code: 1682008,
        display: "Transitory amino acid metabolic disorder",
        
      },
      {
        code: 1685005,
        display: "Rat-bite fever",
        
      },
      {
        code: 1686006,
        display: "Sedative, hypnotic AND/OR anxiolytic-induced anxiety disorder",
        
      },
      {
        code: 1694004,
        display: "Accessory lobe of lung",
        
      },
      {
        code: 1698001,
        display: "Ulcer of bile duct",
        
      },
      {
        code: 1703007,
        display: "Increased leg circumference",
        
      },
      {
        code: 1705000,
        display: "Closed fracture of base of neck of femur",
        
      },
      {
        code: 1708003,
        display: "Open dislocation of clavicle",
        
      },
      {
        code: 1714005,
        display: "Photokeratitis",
        
      },
      {
        code: 1717003,
        display: "Guttate hypomelanosis",
        
      },
      {
        code: 1723008,
        display: "Urethral stricture due to schistosomiasis",
        
      },
      {
        code: 1724002,
        display: "Infection caused by Crenosoma",
        
      },
      {
        code: 1734006,
        display: "Fracture of vertebral column with spinal cord injury",
        
      },
      {
        code: 1735007,
        display: "Thrill",
        
      },
      {
        code: 1739001,
        display: "Occipital fracture",
        
      },
      {
        code: 1742007,
        display: "Female hypererotism",
        
      },
      {
        code: 1744008,
        display: "Connation of teeth",
        
      },
      {
        code: 1748006,
        display: "Thrombophlebitis of deep femoral vein",
        
      },
      {
        code: 1755008,
        display: "Healed coronary",
        
      },
      {
        code: 1761006,
        display: "Biliary cirrhosis",
        
      },
      {
        code: 1763009,
        display: "Stromal keratitis",
        
      },
      {
        code: 1767005,
        display: "Fisher syndrome",
        
      },
      {
        code: 1769008,
        display: "Thoracodidymus",
        
      },
      {
        code: 1771008,
        display: "Insulin biosynthesis defect",
        
      },
      {
        code: 1776003,
        display: "RTA - Renal tubular acidosis",
        
      },
      {
        code: 1777007,
        display: "Increased molecular dissociation",
        
      },
      {
        code: 1778002,
        display: "Malocclusion due to abnormal swallowing",
        
      },
      {
        code: 1779005,
        display: "OFD II - Orofacial-digital syndrome II",
        
      },
      {
        code: 1794009,
        display: "Idiopathic corneal edema",
        
      },
      {
        code: 1816003,
        display: "Panic disorder with agoraphobia, severe agoraphobic avoidance AND mild panic attacks",
        
      },
      {
        code: 1821000,
        display: "Chemoreceptor apnea",
        
      },
      {
        code: 1822007,
        display: "Impaired glucose tolerance associated with pancreatic disease",
        
      },
      {
        code: 1824008,
        display: "Allergic gastritis",
        
      },
      {
        code: 1826005,
        display: "Granuloma of lip",
        
      },
      {
        code: 1828006,
        display: "Infestation caused by Gasterophilus hemorrhoidalis",
        
      },
      {
        code: 1829003,
        display: "Microcephalus",
        
      },
      {
        code: 1833005,
        display: "Phacoanaphylactic endophthalmitis",
        
      },
      {
        code: 1835003,
        display: "Necrosis of pancreas",
        
      },
      {
        code: 1837006,
        display: "Orciprenaline poisoning",
        
      },
      {
        code: 1845001,
        display: "Paraparesis",
        
      },
      {
        code: 1847009,
        display: "Endophthalmitis",
        
      },
      {
        code: 1848004,
        display: "Poisoning caused by gaseous anesthetic",
        
      },
      {
        code: 1852004,
        display: "Traumatic injury of sixth cranial nerve",
        
      },
      {
        code: 1855002,
        display: "Developmental academic disorder",
        
      },
      {
        code: 1856001,
        display: "Accessory nose",
        
      },
      {
        code: 1857005,
        display: "Congenital rubella syndrome",
        
      },
      {
        code: 1858000,
        display: "Infection caused by Stilesia globipunctata",
        
      },
      {
        code: 1860003,
        display: "Fluid volume disorder",
        
      },
      {
        code: 1865008,
        display: "Impaired intestinal protein absorption",
        
      },
      {
        code: 1869002,
        display: "Rupture of iris sphincter",
        
      },
      {
        code: 1881003,
        display: "Increased nutritional requirement",
        
      },
      {
        code: 1892002,
        display: "Star figure at the macula",
        
      },
      {
        code: 1896004,
        display: "Ectopic breast tissue",
        
      },
      {
        code: 1897008,
        display: "Amsinckia species poisoning",
        
      },
      {
        code: 1899006,
        display: "Autosomal hereditary disorder",
        
      },
      {
        code: 1903004,
        display: "Infestation caused by Psorergates ovis",
        
      },
      {
        code: 1908008,
        display: "von Willebrand disease, type IIC",
        
      },
      {
        code: 1909000,
        display: "Impairment level: better eye: severe impairment: lesser eye: near-total impairment",
        
      },
      {
        code: 1922008,
        display: "Congenital absence of urethra",
        
      },
      {
        code: 1926006,
        display: "Osteopetrosis",
        
      },
      {
        code: 1938002,
        display: "Emotional AND/OR mental disease in mother complicating pregnancy, childbirth AND/OR puerperium",
        
      },
      {
        code: 1939005,
        display: "Abnormal vascular flow",
        
      },
      {
        code: 1943009,
        display: "Left-right confusion",
        
      },
      {
        code: 1953005,
        display: "Congenital deficiency of pigment of skin",
        
      },
      {
        code: 1954004,
        display: "Dilated cardiomyopathy secondary to toxic reaction",
        
      },
      {
        code: 1955003,
        display: "Preauricular pit",
        
      },
      {
        code: 1959009,
        display: "Encephalartos species poisoning",
        
      },
      {
        code: 1961000,
        display: "Chronic polyarticular juvenile rheumatoid arthritis",
        
      },
      {
        code: 1963002,
        display: "PNH - Paroxysmal nocturnal hemoglobinuria",
        
      },
      {
        code: 1965009,
        display: "Normal skin pH",
        
      },
      {
        code: 1967001,
        display: "Congenital absence of forearm only",
        
      },
      {
        code: 1973000,
        display: "Sedative, hypnotic AND/OR anxiolytic-induced psychotic disorder with delusions",
        
      },
      {
        code: 1977004,
        display: "Oxymetholone poisoning",
        
      },
      {
        code: 1979001,
        display: "Focal choroiditis",
        
      },
      {
        code: 1980003,
        display: "Seromucinous otitis media",
        
      },
      {
        code: 1981004,
        display: "Urhidrosis",
        
      },
      {
        code: 1988005,
        display: "Late effect of injury to nerve roots, spinal plexus AND/OR other nerves of trunk",
        
      },
      {
        code: 1989002,
        display: "Burn of vagina AND/OR uterus",
        
      },
      {
        code: 2004005,
        display: "Normotensive",
        
      },
      {
        code: 2012002,
        display: "Fracture of lunate",
        
      },
      {
        code: 2024009,
        display: "Dilated cardiomyopathy secondary to metazoal myocarditis",
        
      },
      {
        code: 2028007,
        display: "Erythema induratum",
        
      },
      {
        code: 2032001,
        display: "Cerebral edema",
        
      },
      {
        code: 2036003,
        display: "Acquired factor VII deficiency disease",
        
      },
      {
        code: 2040007,
        display: "Neurogenic thoracic outlet syndrome",
        
      },
      {
        code: 2041006,
        display: "Eunuchoid gigantism",
        
      },
      {
        code: 2043009,
        display: "Alcoholic gastritis",
        
      },
      {
        code: 2053005,
        display: "Late effect of injury to blood vessels of thorax, abdomen AND/OR pelvis",
        
      },
      {
        code: 2055003,
        display: "Recurrent erosion syndrome",
        
      },
      {
        code: 2058001,
        display: "Bilateral loss of labyrinthine reactivity",
        
      },
      {
        code: 2061000,
        display: "Conductive hearing loss of combined sites",
        
      },
      {
        code: 2065009,
        display: "Autosomal dominant optic atrophy",
        
      },
      {
        code: 2066005,
        display: "Gastric ulcer with hemorrhage AND perforation but without obstruction",
        
      },
      {
        code: 2070002,
        display: "Burning sensation in eye",
        
      },
      {
        code: 2073000,
        display: "Delusions",
        
      },
      {
        code: 2087000,
        display: "Pulmonary nocardiosis",
        
      },
      {
        code: 2089002,
        display: "Pagets disease of bone",
        
      },
      {
        code: 2091005,
        display: "Pharyngeal diverticulitis",
        
      },
      {
        code: 2094002,
        display: "Carbon disulfide causing toxic effect",
        
      },
      {
        code: 2102007,
        display: "Deep corneal vascularization",
        
      },
      {
        code: 2103002,
        display: "Reflex sympathetic dystrophy of upper extremity",
        
      },
      {
        code: 2107001,
        display: "Anisomelia",
        
      },
      {
        code: 2109003,
        display: "Isolated somatotropin deficiency",
        
      },
      {
        code: 2114004,
        display: "Infection caused by Cysticercus pisiformis",
        
      },
      {
        code: 2116002,
        display: "Intramembranous bone formation",
        
      },
      {
        code: 2120003,
        display: "Weak cry",
        
      },
      {
        code: 2121004,
        display: "Ethopropazine poisoning",
        
      },
      {
        code: 2128005,
        display: "Disorder of adenoid",
        
      },
      {
        code: 2129002,
        display: "Edema of pharynx",
        
      },
      {
        code: 2132004,
        display: "Meconium in amniotic fluid noted before labor in liveborn infant",
        
      },
      {
        code: 2134003,
        display: "Diffuse pain",
        
      },
      {
        code: 2136001,
        display: "Open wound of jaw with complication",
        
      },
      {
        code: 2138000,
        display: "LSP - Left sacroposterior position",
        
      },
      {
        code: 2145000,
        display: "Anal intercourse",
        
      },
      {
        code: 2149006,
        display: "Decreased hormone production",
        
      },
      {
        code: 2158004,
        display: "Infection caused by Contracaecum",
        
      },
      {
        code: 2167004,
        display: "Retinal hemangioblastomatosis",
        
      },
      {
        code: 2169001,
        display: "Thoracic radiculitis",
        
      },
      {
        code: 2170000,
        display: "Gallop rhythm",
        
      },
      {
        code: 2176006,
        display: "Halogen acne",
        
      },
      {
        code: 2177002,
        display: "PHN - Post-herpetic neuralgia",
        
      },
      {
        code: 2186007,
        display: "Compensated metabolic alkalosis",
        
      },
      {
        code: 2198002,
        display: "Visceral epilepsy",
        
      },
      {
        code: 2202000,
        display: "Open posterior dislocation of distal end of femur",
        
      },
      {
        code: 2204004,
        display: "Acquired deformity of pinna",
        
      },
      {
        code: 2213002,
        display: "Congenital anomaly of vena cava",
        
      },
      {
        code: 2216005,
        display: "Nocturnal emission",
        
      },
      {
        code: 2217001,
        display: "Superficial injury of perineum without infection",
        
      },
      {
        code: 2219003,
        display: "Disability evaluation, disability 100%",
        
      },
      {
        code: 2224000,
        display: "Selenium poisoning",
        
      },
      {
        code: 2228002,
        display: "Scintillating scotoma",
        
      },
      {
        code: 2229005,
        display: "Chimera",
        
      },
      {
        code: 2231001,
        display: "Nerve plexus disorder",
        
      },
      {
        code: 2237002,
        display: "Painful breathing -pleurodynia",
        
      },
      {
        code: 2239004,
        display: "Previous pregnancies 6",
        
      },
      {
        code: 2241003,
        display: "X-linked absence of thyroxine-binding globulin",
        
      },
      {
        code: 2243000,
        display: "Hypercalcemia due to hyperthyroidism",
        
      },
      {
        code: 2245007,
        display: "Foreign body in nasopharynx",
        
      },
      {
        code: 2251002,
        display: "Primary hypotony of eye",
        
      },
      {
        code: 2256007,
        display: "Monovular twins",
        
      },
      {
        code: 2261009,
        display: "Obstetrical pulmonary fat embolism",
        
      },
      {
        code: 2268003,
        display: "Victim of homosexual aggression",
        
      },
      {
        code: 2284002,
        display: "Pulsating exophthalmos",
        
      },
      {
        code: 2295008,
        display: "Closed fracture of upper end of forearm",
        
      },
      {
        code: 2296009,
        display: "Iron dextran toxicity",
        
      },
      {
        code: 2298005,
        display: "Focal facial dermal dysplasia",
        
      },
      {
        code: 2301009,
        display: "Psychosomatic factor in physical condition, psychological component of unknown degree",
        
      },
      {
        code: 2303007,
        display: "Inguinal hernia with gangrene",
        
      },
      {
        code: 2304001,
        display: "Intervertebral discitis",
        
      },
      {
        code: 2307008,
        display: "Peripancreatic fat necrosis",
        
      },
      {
        code: 2308003,
        display: "Silent alleles",
        
      },
      {
        code: 2312009,
        display: "Reactive attachment disorder of infancy OR early childhood, inhibited type",
        
      },
      {
        code: 2314005,
        display: "Unprotected intercourse",
        
      },
      {
        code: 2326000,
        display: "Marriage annulment",
        
      },
      {
        code: 2339001,
        display: "Sexual overexposure",
        
      },
      {
        code: 2341000,
        display: "Infection caused by Moniliformis",
        
      },
      {
        code: 2351004,
        display: "Genetic transduction",
        
      },
      {
        code: 2355008,
        display: "Rud syndrome",
        
      },
      {
        code: 2359002,
        display: "Hyper-beta-alaninemia",
        
      },
      {
        code: 2365002,
        display: "Simple chronic pharyngitis",
        
      },
      {
        code: 2366001,
        display: "Late effect of dislocation",
        
      },
      {
        code: 2367005,
        display: "Acute hemorrhagic gastritis",
        
      },
      {
        code: 2374000,
        display: "Monofascicular block",
        
      },
      {
        code: 2385003,
        display: "Cellulitis of pectoral region",
        
      },
      {
        code: 2388001,
        display: "Normal variation in translucency",
        
      },
      {
        code: 2390000,
        display: "Acute gonococcal vulvovaginitis",
        
      },
      {
        code: 2391001,
        display: "Achondrogenesis",
        
      },
      {
        code: 2396006,
        display: "Malignant pyoderma",
        
      },
      {
        code: 2398007,
        display: "Quinidine toxicity by electrocardiogram",
        
      },
      {
        code: 2403008,
        display: "Dependence syndrome",
        
      },
      {
        code: 2415007,
        display: "Lumbosacral root lesion",
        
      },
      {
        code: 2418009,
        display: "Polyester fume causing toxic effect",
        
      },
      {
        code: 2419001,
        display: "Open wound of forehead with complication",
        
      },
      {
        code: 2420007,
        display: "Third degree burn of multiple sites of upper limb",
        
      },
      {
        code: 2432006,
        display: "Cerebrospinal fluid circulation disorder",
        
      },
      {
        code: 2435008,
        display: "Ascaridiasis",
        
      },
      {
        code: 2437000,
        display: "Placenta circumvallata",
        
      },
      {
        code: 2438005,
        display: "Iniencephaly",
        
      },
      {
        code: 2439002,
        display: "Purulent endocarditis",
        
      },
      {
        code: 2443003,
        display: "Hydrogen sulfide poisoning",
        
      },
      {
        code: 2452007,
        display: "Fetal rotation",
        
      },
      {
        code: 2463005,
        display: "Acquired heterochromia of iris",
        
      },
      {
        code: 2469009,
        display: "Onychomalacia",
        
      },
      {
        code: 2470005,
        display: "Brain damage",
        
      },
      {
        code: 2471009,
        display: "Intra-abdominal abscess postprocedure",
        
      },
      {
        code: 2472002,
        display: "Passes no urine",
        
      },
      {
        code: 2473007,
        display: "Intermittent vertical squint",
        
      },
      {
        code: 2477008,
        display: "Superficial phlebitis",
        
      },
      {
        code: 2492009,
        display: "Disorder of nutrition",
        
      },
      {
        code: 2495006,
        display: "Congenital cerebral arteriovenous aneurysm",
        
      },
      {
        code: 2496007,
        display: "Acalculia",
        
      },
      {
        code: 2506003,
        display: "Early onset dysthymia",
        
      },
      {
        code: 2513003,
        display: "Tinea capitis caused by Trichophyton",
        
      },
      {
        code: 2518007,
        display: "Cryptogenic sexual precocity",
        
      },
      {
        code: 2521009,
        display: "Bone conduction better than air",
        
      },
      {
        code: 2523007,
        display: "Salmonella pneumonia",
        
      },
      {
        code: 2526004,
        display: "Noninflammatory disorder of the female genital organs",
        
      },
      {
        code: 2528003,
        display: "Viremia",
        
      },
      {
        code: 2532009,
        display: "Choroidal rupture",
        
      },
      {
        code: 2534005,
        display: "Congenital absence of vena cava",
        
      },
      {
        code: 2538008,
        display: "Ketosis",
        
      },
      {
        code: 2541004,
        display: "Compulsive buying",
        
      },
      {
        code: 2554006,
        display: "Acute purulent pericarditis",
        
      },
      {
        code: 2556008,
        display: "Disease of supporting structures of teeth",
        
      },
      {
        code: 2560006,
        display: "Complex syndactyly of fingers",
        
      },
      {
        code: 2562003,
        display: "Athanasia trifurcata poisoning",
        
      },
      {
        code: 2576002,
        display: "Trachoma",
        
      },
      {
        code: 2581006,
        display: "Clasp knife rigidity",
        
      },
      {
        code: 2582004,
        display: "Deep third degree burn of multiple sites of lower limb",
        
      },
      {
        code: 2583009,
        display: "Filigreed network of venous valves",
        
      },
      {
        code: 2584003,
        display: "Cerebral degeneration in childhood",
        
      },
      {
        code: 2585002,
        display: "Pneumococcal pleurisy",
        
      },
      {
        code: 2589008,
        display: "Acute dacryoadenitis",
        
      },
      {
        code: 2591000,
        display: "Crush injury of shoulder region",
        
      },
      {
        code: 2593002,
        display: "Dubowitz syndrome",
        
      },
      {
        code: 2602008,
        display: "Hemarthrosis of shoulder",
        
      },
      {
        code: 2606006,
        display: "Boil of perineum",
        
      },
      {
        code: 2615004,
        display: "Graafian follicle cyst",
        
      },
      {
        code: 2618002,
        display: "Chronic recurrent major depressive disorder",
        
      },
      {
        code: 2622007,
        display: "Infected ulcer of skin",
        
      },
      {
        code: 2624008,
        display: "Prepubertal periodontitis",
        
      },
      {
        code: 2625009,
        display: "Senter syndrome",
        
      },
      {
        code: 2630008,
        display: "Open wound of finger without complication",
        
      },
      {
        code: 2634004,
        display: "Decreased blood erythrocyte volume",
        
      },
      {
        code: 2638001,
        display: "Hypercalcemia caused by a drug",
        
      },
      {
        code: 2640006,
        display: "Clinical stage 4",
        
      },
      {
        code: 2651006,
        display: "Closed traumatic dislocation of elbow joint",
        
      },
      {
        code: 2655002,
        display: "Invalidism",
        
      },
      {
        code: 2657005,
        display: "Overflow proteinuria",
        
      },
      {
        code: 2663001,
        display: "Palpatory proteinuria",
        
      },
      {
        code: 2665008,
        display: "Coordinate convulsion",
        
      },
      {
        code: 2683000,
        display: "Nonvenomous insect bite of axilla without infection",
        
      },
      {
        code: 2689001,
        display: "Dominant dystrophic epidermolysis bullosa with absence of skin",
        
      },
      {
        code: 2694001,
        display: "Myelophthisic anemia",
        
      },
      {
        code: 2704003,
        display: "Acute disease",
        
      },
      {
        code: 2707005,
        display: "Necrotizing enterocolitis",
        
      },
      {
        code: 2713001,
        display: "Closed pneumothorax",
        
      },
      {
        code: 2724004,
        display: "Auditory recruitment",
        
      },
      {
        code: 2725003,
        display: "Previous abnormality of glucose tolerance",
        
      },
      {
        code: 2733002,
        display: "Heel pain",
        
      },
      {
        code: 2736005,
        display: "Honeycomb atrophy of face",
        
      },
      {
        code: 2740001,
        display: "Gouty proteinuria",
        
      },
      {
        code: 2749000,
        display: "Congenital deformity of hip",
        
      },
      {
        code: 2751001,
        display: "Fibrocalculous pancreatic diabetes",
        
      },
      {
        code: 2761008,
        display: "Decreased stool caliber",
        
      },
      {
        code: 2764000,
        display: "Joint crackle",
        
      },
      {
        code: 2770006,
        display: "Fetal or neonatal effect of antibiotic transmitted via placenta and/or breast milk",
        
      },
      {
        code: 2772003,
        display: "Epidermolysis bullosa acquisita",
        
      },
      {
        code: 2775001,
        display: "Intra-articular loose body",
        
      },
      {
        code: 2776000,
        display: "Organic brain syndrome",
        
      },
      {
        code: 2781009,
        display: "Miscarriage complicated by delayed and/or excessive hemorrhage",
        
      },
      {
        code: 2782002,
        display: "Temporomandibular dysplasia",
        
      },
      {
        code: 2783007,
        display: "Gastrojejunal ulcer without hemorrhage AND without perforation",
        
      },
      {
        code: 2786004,
        display: "Epithelial ovarian tumor, International Federation of Gynecology and Obstetrics stage III",
        
      },
      {
        code: 2790002,
        display: "Impairment level: one eye: total impairment: other eye: not specified",
        
      },
      {
        code: 2805007,
        display: "Phosmet poisoning",
        
      },
      {
        code: 2806008,
        display: "Impaired psychomotor development",
        
      },
      {
        code: 2807004,
        display: "Chronic gastrojejunal ulcer with perforation",
        
      },
      {
        code: 2808009,
        display: "Infection caused by Prosthenorchis elegans",
        
      },
      {
        code: 2815001,
        display: "Sexual pyromania",
        
      },
      {
        code: 2816000,
        display: "Dilated cardiomyopathy secondary to myotonic dystrophy",
        
      },
      {
        code: 2818004,
        display: "Congenital vascular anomaly of eye",
        
      },
      {
        code: 2819007,
        display: "Magnesium sulfate poisoning",
        
      },
      {
        code: 2825006,
        display: "Abrasion and/or friction burn of gum without infection",
        
      },
      {
        code: 2828008,
        display: "Congenital stenosis of nares",
        
      },
      {
        code: 2829000,
        display: "Uhl disease",
        
      },
      {
        code: 2831009,
        display: "Pyloric antral vascular ectasia",
        
      },
      {
        code: 2835000,
        display: "Hemolytic anemia due to cardiac trauma",
        
      },
      {
        code: 2836004,
        display: "Butane causing toxic effect",
        
      },
      {
        code: 2838003,
        display: "Piblokto",
        
      },
      {
        code: 2840008,
        display: "Open fracture of vault of skull with cerebral laceration AND/OR contusion",
        
      },
      {
        code: 2850009,
        display: "Infection caused by Schistosoma incognitum",
        
      },
      {
        code: 2853006,
        display: "Macular keratitis",
        
      },
      {
        code: 2856003,
        display: "Vitamin A-responsive dermatosis",
        
      },
      {
        code: 2858002,
        display: "Postpartum sepsis",
        
      },
      {
        code: 2884008,
        display: "Spherophakia-brachymorphia syndrome",
        
      },
      {
        code: 2893009,
        display: "Anomaly of chromosome pair 10",
        
      },
      {
        code: 2897005,
        display: "Immune thrombocytopenia",
        
      },
      {
        code: 2899008,
        display: "Thought blocking",
        
      },
      {
        code: 2900003,
        display: "Fibromuscular dysplasia of renal artery",
        
      },
      {
        code: 2901004,
        display: "Altered blood passed per rectum",
        
      },
      {
        code: 2902006,
        display: "Decreased lymphocyte life span",
        
      },
      {
        code: 2904007,
        display: "Male infertility",
        
      },
      {
        code: 2910007,
        display: "Discharge from penis",
        
      },
      {
        code: 2912004,
        display: "Cystic-bullous disease of the lung",
        
      },
      {
        code: 2917005,
        display: "Transient hypothyroidism",
        
      },
      {
        code: 2918000,
        display: "Infection caused by Bacteroides",
        
      },
      {
        code: 2919008,
        display: "Nausea, vomiting and diarrhea",
        
      },
      {
        code: 2929001,
        display: "Arterial occlusion",
        
      },
      {
        code: 2935001,
        display: "Antiasthmatic poisoning",
        
      },
      {
        code: 2940009,
        display: "Intrabasal vesicular dermatitis",
        
      },
      {
        code: 2946003,
        display: "Osmotic diarrhea",
        
      },
      {
        code: 2951009,
        display: "Atopic cataract",
        
      },
      {
        code: 2955000,
        display: "Chronic ulcerative pulpitis",
        
      },
      {
        code: 2965006,
        display: "Nevoid congenital alopecia",
        
      },
      {
        code: 2967003,
        display: "Non-comitant strabismus",
        
      },
      {
        code: 2972007,
        display: "Occlusion of anterior spinal artery",
        
      },
      {
        code: 2973002,
        display: "Pelvic organ injury without open wound into abdominal cavity",
        
      },
      {
        code: 2978006,
        display: "Aneurysm of conjunctiva",
        
      },
      {
        code: 2981001,
        display: "Pulsatile mass of abdomen",
        
      },
      {
        code: 2989004,
        display: "Complication following molar AND/OR ectopic pregnancy",
        
      },
      {
        code: 2990008,
        display: "Lymphocytic leukemoid reaction",
        
      },
      {
        code: 2992000,
        display: "Pigmentary pallidal degeneration",
        
      },
      {
        code: 2994004,
        display: "Brain fag",
        
      },
      {
        code: 2999009,
        display: "Injury of ear region",
        
      },
      {
        code: 3002002,
        display: "Thyroid hemorrhage",
        
      },
      {
        code: 3004001,
        display: "Congenital dilatation of esophagus",
        
      },
      {
        code: 3006004,
        display: "Altered consciousness",
        
      },
      {
        code: 3009006,
        display: "Solanum malacoxylon poisoning",
        
      },
      {
        code: 3013004,
        display: "Open wound of ear drum without complication",
        
      },
      {
        code: 3014005,
        display: "Autoeczematization",
        
      },
      {
        code: 3018008,
        display: "Penetration of eyeball with magnetic foreign body",
        
      },
      {
        code: 3019000,
        display: "Closed anterior dislocation of elbow",
        
      },
      {
        code: 3021005,
        display: "Normal gastric acidity",
        
      },
      {
        code: 3023008,
        display: "Acute peptic ulcer without hemorrhage, without perforation AND without obstruction",
        
      },
      {
        code: 3032005,
        display: "Nonvenomous insect bite of cheek without infection",
        
      },
      {
        code: 3033000,
        display: "Bone AND/OR joint disorder of pelvis in mother complicating pregnancy, childbirth AND/OR puerperium",
        
      },
      {
        code: 3038009,
        display: "Acute lymphangitis of umbilicus",
        
      },
      {
        code: 3044008,
        display: "Vitreous prolapse",
        
      },
      {
        code: 3053001,
        display: "Poisoning caused by nitroglycerin",
        
      },
      {
        code: 3059002,
        display: "Acute lymphangitis of thigh",
        
      },
      {
        code: 3067005,
        display: "Weak C phenotype",
        
      },
      {
        code: 3071008,
        display: "Widow",
        
      },
      {
        code: 3072001,
        display: "Hormone-induced hypopituitarism",
        
      },
      {
        code: 3073006,
        display: "Ruvalcaba syndrome",
        
      },
      {
        code: 3084004,
        display: "Nonvenomous insect bite of gum without infection",
        
      },
      {
        code: 3089009,
        display: "Disability evaluation, impairment, class 7",
        
      },
      {
        code: 3094009,
        display: "Vomiting in infants AND/OR children",
        
      },
      {
        code: 3095005,
        display: "Induced malaria",
        
      },
      {
        code: 3097002,
        display: "Superficial injury of lip with infection",
        
      },
      {
        code: 3098007,
        display: "Ventricular septal rupture",
        
      },
      {
        code: 3105002,
        display: "Intron",
        
      },
      {
        code: 3109008,
        display: "Secondary dysthymia early onset",
        
      },
      {
        code: 3110003,
        display: "AOM - Acute otitis media",
        
      },
      {
        code: 3119002,
        display: "Brain stem laceration with open intracranial wound AND loss of consciousness",
        
      },
      {
        code: 3129009,
        display: "Infarction of ovary",
        
      },
      {
        code: 3135009,
        display: "OE - Otitis externa",
        
      },
      {
        code: 3140001,
        display: "Citrullinemia, subacute type",
        
      },
      {
        code: 3144005,
        display: "Staphylococcal pleurisy",
        
      },
      {
        code: 3158007,
        display: "Panic disorder with agoraphobia, agoraphobic avoidance in partial remission AND panic attacks in partial remission",
        
      },
      {
        code: 3160009,
        display: "Infertility of cervical origin",
        
      },
      {
        code: 3163006,
        display: "Acute adenoviral follicular conjunctivitis",
        
      },
      {
        code: 3168002,
        display: "Thrombophlebitis of intracranial venous sinus",
        
      },
      {
        code: 3185000,
        display: "Mood-congruent delusion",
        
      },
      {
        code: 3199001,
        display: "Sprain of shoulder joint",
        
      },
      {
        code: 3200003,
        display: "Sacrocoxalgia",
        
      },
      {
        code: 3208005,
        display: "Open wound of ossicles without complication",
        
      },
      {
        code: 3214003,
        display: "Invasive pulmonary aspergillosis",
        
      },
      {
        code: 3217005,
        display: "Open dislocation of sixth cervical vertebra",
        
      },
      {
        code: 3218000,
        display: "Mycotic disease",
        
      },
      {
        code: 3219008,
        display: "Disease type AND/OR category unknown",
        
      },
      {
        code: 3228009,
        display: "Closed fracture of the radial shaft",
        
      },
      {
        code: 3229001,
        display: "Tracheal ulcer",
        
      },
      {
        code: 3230006,
        display: "Illegal termination of pregnancy with afibrinogenemia",
        
      },
      {
        code: 3238004,
        display: "Pericarditis",
        
      },
      {
        code: 3239007,
        display: "Lymphocyte disorder",
        
      },
      {
        code: 3253007,
        display: "Dyschromia",
        
      },
      {
        code: 3254001,
        display: "Infection caused by Strongyloides westeri",
        
      },
      {
        code: 3259006,
        display: "Homeria species poisoning",
        
      },
      {
        code: 3261002,
        display: "Migratory osteolysis",
        
      },
      {
        code: 3263004,
        display: "Verumontanitis",
        
      },
      {
        code: 3272007,
        display: "Stomatocytosis",
        
      },
      {
        code: 3274008,
        display: "Flat chest",
        
      },
      {
        code: 3275009,
        display: "Behcet syndrome, vascular type",
        
      },
      {
        code: 3276005,
        display: "Toad poisoning",
        
      },
      {
        code: 3277001,
        display: "Terminal mood insomnia",
        
      },
      {
        code: 3282008,
        display: "Arc eye",
        
      },
      {
        code: 3283003,
        display: "Feeling of sand or foreign body in eye",
        
      },
      {
        code: 3286006,
        display: "Patient status determination, greatly improved",
        
      },
      {
        code: 3289004,
        display: "Anisometropia",
        
      },
      {
        code: 3291007,
        display: "Closed fracture of two ribs",
        
      },
      {
        code: 3298001,
        display: "Amnestic syndrome",
        
      },
      {
        code: 3303004,
        display: "Disease caused by Arenavirus",
        
      },
      {
        code: 3304005,
        display: "Bronchial compression",
        
      },
      {
        code: 3305006,
        display: "Disorder of lymphatic vessel",
        
      },
      {
        code: 3308008,
        display: "Atrophic-hyperplastic gastritis",
        
      },
      {
        code: 3310005,
        display: "Foreign body granuloma of skin",
        
      },
      {
        code: 3321001,
        display: "Renal abscess",
        
      },
      {
        code: 3323003,
        display: "Leukoplakia of penis",
        
      },
      {
        code: 3327002,
        display: "Acquired jerk nystagmus",
        
      },
      {
        code: 3331008,
        display: "Open fracture of neck of metacarpal bone",
        
      },
      {
        code: 3344003,
        display: "Toxic labyrinthitis",
        
      },
      {
        code: 3345002,
        display: "Idiopathic osteoporosis",
        
      },
      {
        code: 3355003,
        display: "Anti-common cold drug poisoning",
        
      },
      {
        code: 3358001,
        display: "Lichen ruber moniliformis",
        
      },
      {
        code: 3368006,
        display: "Dull chest pain",
        
      },
      {
        code: 3376008,
        display: "Pseudoptyalism",
        
      },
      {
        code: 3381004,
        display: "Open fracture of astragalus",
        
      },
      {
        code: 3387000,
        display: "Auditory discrimination aphasia",
        
      },
      {
        code: 3391005,
        display: "Negative for tumor cells",
        
      },
      {
        code: 3393008,
        display: "Phlebitis following infusion, perfusion AND/OR transfusion",
        
      },
      {
        code: 3398004,
        display: "Cadmium poisoning",
        
      },
      {
        code: 3401001,
        display: "Cercopithecus herpesvirus 1 disease",
        
      },
      {
        code: 3415004,
        display: "Cyanosis",
        
      },
      {
        code: 3419005,
        display: "Faucial diphtheria",
        
      },
      {
        code: 3421000,
        display: "Open blow-out fracture orbit",
        
      },
      {
        code: 3424008,
        display: "Heart rate fast",
        
      },
      {
        code: 3426005,
        display: "Retained magnetic intraocular foreign body",
        
      },
      {
        code: 3427001,
        display: "Nonglucosuric melituria",
        
      },
      {
        code: 3434004,
        display: "Myotonia",
        
      },
      {
        code: 3439009,
        display: "Severe combined immunodeficiency (SCID) due to absent peripheral T cell maturation",
        
      },
      {
        code: 3441005,
        display: "Disorder of sebaceous gland",
        
      },
      {
        code: 3446000,
        display: "Open fracture of T7-T12 level with spinal cord injury",
        
      },
      {
        code: 3449007,
        display: "Finger agnosia",
        
      },
      {
        code: 3456001,
        display: "Chronic progressive non-hereditary chorea",
        
      },
      {
        code: 3458000,
        display: "Myositis ossificans associated with dermato / polymyositis",
        
      },
      {
        code: 3461004,
        display: "Deep third degree burn of thumb",
        
      },
      {
        code: 3464007,
        display: "Infection caused by Oesophagostomum dentatum",
        
      },
      {
        code: 3468005,
        display: "Neonatal infective mastitis",
        
      },
      {
        code: 3469002,
        display: "Partial thickness burn of thumb",
        
      },
      {
        code: 3472009,
        display: "Spondylolisthesis, grade 4",
        
      },
      {
        code: 3474005,
        display: "Glycine max poisoning",
        
      },
      {
        code: 3480002,
        display: "Burn of wrist",
        
      },
      {
        code: 3482005,
        display: "Postoperative esophagitis",
        
      },
      {
        code: 3483000,
        display: "Chronic peptic ulcer with perforation",
        
      },
      {
        code: 3487004,
        display: "Pulmonary candidiasis",
        
      },
      {
        code: 3500002,
        display: "Open wound of ossicles with complication",
        
      },
      {
        code: 3502005,
        display: "Cervical lymphadenitis",
        
      },
      {
        code: 3503000,
        display: "Gender identity disorder of adolescence, previously asexual",
        
      },
      {
        code: 3505007,
        display: "Nonallopathic lesion of the arm",
        
      },
      {
        code: 3506008,
        display: "Stenosis of retinal artery",
        
      },
      {
        code: 3507004,
        display: "Abscess of thigh",
        
      },
      {
        code: 3511005,
        display: "Infectious thyroiditis",
        
      },
      {
        code: 3514002,
        display: "Peribronchial fibrosis of lung",
        
      },
      {
        code: 3519007,
        display: "Disorder of synovium",
        
      },
      {
        code: 3528008,
        display: "Restricted carbohydrate fat controlled diet",
        
      },
      {
        code: 3529000,
        display: "Infection caused by Sanguinicola",
        
      },
      {
        code: 3530005,
        display: "Bipolar 1 disorder, single manic episode, full remission",
        
      },
      {
        code: 3531009,
        display: "Intrapsychic conflict",
        
      },
      {
        code: 3533007,
        display: "Acute palmoplantar pustular psoriasis",
        
      },
      {
        code: 3539006,
        display: "Enteromenia",
        
      },
      {
        code: 3542000,
        display: "Laceration extending into parenchyma of spleen with open wound into abdominal cavity",
        
      },
      {
        code: 3544004,
        display: "Hair-splitting",
        
      },
      {
        code: 3545003,
        display: "Diastolic dysfunction",
        
      },
      {
        code: 3548001,
        display: "Brachial plexus disorder",
        
      },
      {
        code: 3549009,
        display: "Pancreatic acinar atrophy",
        
      },
      {
        code: 3558002,
        display: "Mesenteric infarction",
        
      },
      {
        code: 3560000,
        display: "Bilateral recurrent inguinal hernia",
        
      },
      {
        code: 3570003,
        display: "Increased blood erythrocyte volume",
        
      },
      {
        code: 3571004,
        display: "Megaloblastic anemia due to pancreatic insufficiency",
        
      },
      {
        code: 3577000,
        display: "Lattice retinal degeneration",
        
      },
      {
        code: 3585009,
        display: "Blinking",
        
      },
      {
        code: 3586005,
        display: "Psychogenic fugue",
        
      },
      {
        code: 3589003,
        display: "Syphilitic pericarditis",
        
      },
      {
        code: 3590007,
        display: "Enteroenteric fistula",
        
      },
      {
        code: 3591006,
        display: "Metabolic acidosis, normal anion gap, bicarbonate losses",
        
      },
      {
        code: 3598000,
        display: "Partial recent retinal detachment with single defect",
        
      },
      {
        code: 3611003,
        display: "Demeton poisoning",
        
      },
      {
        code: 3633001,
        display: "Abscess of hand",
        
      },
      {
        code: 3634007,
        display: "Legal termination of pregnancy complicated by metabolic disorder",
        
      },
      {
        code: 3639002,
        display: "Glossoptosis",
        
      },
      {
        code: 3640000,
        display: "Late effect of traumatic amputation",
        
      },
      {
        code: 3641001,
        display: "Infection caused by Coenurosis serialis",
        
      },
      {
        code: 3642008,
        display: "Steryl-sulfate sulfohydrolase deficiency",
        
      },
      {
        code: 3644009,
        display: "Macerated skin",
        
      },
      {
        code: 3649004,
        display: "Contusion, multiple sites of trunk",
        
      },
      {
        code: 3650004,
        display: "Congenital absence of liver,total",
        
      },
      {
        code: 3652007,
        display: "Overproduction of growth hormone",
        
      },
      {
        code: 3657001,
        display: "Osteospermum species poisoning",
        
      },
      {
        code: 3660008,
        display: "Lethal glossopharyngeal defect",
        
      },
      {
        code: 3662000,
        display: "Rolling hiatus hernia",
        
      },
      {
        code: 3677008,
        display: "Academic problem",
        
      },
      {
        code: 3680009,
        display: "Monocephalus tripus dibrachius",
        
      },
      {
        code: 3681008,
        display: "Thrombophlebitis of torcular Herophili",
        
      },
      {
        code: 3696007,
        display: "Functional dyspepsia",
        
      },
      {
        code: 3699000,
        display: "Transverse deficiency of arm",
        
      },
      {
        code: 3703002,
        display: "Ischiatic hernia with gangrene",
        
      },
      {
        code: 3704008,
        display: "Diffuse endocapillary proliferative glomerulonephritis",
        
      },
      {
        code: 3705009,
        display: "Congenital malformation of anterior chamber of eye",
        
      },
      {
        code: 3712000,
        display: "Degenerated eye",
        
      },
      {
        code: 3716002,
        display: "Thyroid goiter",
        
      },
      {
        code: 3720003,
        display: "Abnormal presence of hemoglobin",
        
      },
      {
        code: 3723001,
        display: "Joint inflammation",
        
      },
      {
        code: 3733009,
        display: "Congenital eventration of right crus of diaphragm",
        
      },
      {
        code: 3736001,
        display: "Open wound of thumbnail with tendon involvement",
        
      },
      {
        code: 3738000,
        display: "VH - Viral hepatitis",
        
      },
      {
        code: 3744001,
        display: "Hyperlipoproteinemia",
        
      },
      {
        code: 3745000,
        display: "Sleep rhythm problem",
        
      },
      {
        code: 3747008,
        display: "EC - Ejection click",
        
      },
      {
        code: 3750006,
        display: "Arteriospasm",
        
      },
      {
        code: 3751005,
        display: "Contusion of labium",
        
      },
      {
        code: 3752003,
        display: "Infection by Trichuris",
        
      },
      {
        code: 3754002,
        display: "Dysplasia of vagina",
        
      },
      {
        code: 3755001,
        display: "PRP - Pityriasis rubra pilaris",
        
      },
      {
        code: 3756000,
        display: "Static ataxia",
        
      },
      {
        code: 3759007,
        display: "Injury of heart with open wound into thorax",
        
      },
      {
        code: 3760002,
        display: "Familial multiple factor deficiency syndrome, type V",
        
      },
      {
        code: 3762005,
        display: "Bilateral recurrent femoral hernia with gangrene",
        
      },
      {
        code: 3763000,
        display: "Expected bereavement due to life event",
        
      },
      {
        code: 3783004,
        display: "Enamel pearls",
        
      },
      {
        code: 3797007,
        display: "Periodontal cyst",
        
      },
      {
        code: 3798002,
        display: "Premature birth of identical twins, both stillborn",
        
      },
      {
        code: 3815005,
        display: "Crohn disease of rectum",
        
      },
      {
        code: 3820005,
        display: "Inner ear conductive hearing loss",
        
      },
      {
        code: 3827008,
        display: "Aneurysm of artery of neck",
        
      },
      {
        code: 3830001,
        display: "Subcutaneous emphysema",
        
      },
      {
        code: 3841004,
        display: "Blister of cheek with infection",
        
      },
      {
        code: 3845008,
        display: "Duplication of intestine",
        
      },
      {
        code: 3855007,
        display: "Disorder of pancreas",
        
      },
      {
        code: 3859001,
        display: "Late effect of open wound of extremities without tendon injury",
        
      },
      {
        code: 3873005,
        display: "Failed attempted termination of pregnancy with acute necrosis of liver",
        
      },
      {
        code: 3885002,
        display: "ABO isoimmunization in pregnancy",
        
      },
      {
        code: 3886001,
        display: "Congenital fecaliths",
        
      },
      {
        code: 3899003,
        display: "Neutropenic typhlitis",
        
      },
      {
        code: 3900008,
        display: "Mixed sensory-motor polyneuropathy",
        
      },
      {
        code: 3902000,
        display: "Non dose-related drug-induced neutropenia",
        
      },
      {
        code: 3903005,
        display: "Closed traumatic pneumothorax",
        
      },
      {
        code: 3908001,
        display: "Infestation caused by Haematopinus",
        
      },
      {
        code: 3909009,
        display: "Coeur en sabot",
        
      },
      {
        code: 3913002,
        display: "Injury of gastrointestinal tract with open wound into abdominal cavity",
        
      },
      {
        code: 3914008,
        display: "Mental disorder in childhood",
        
      },
      {
        code: 3928002,
        display: "Zika virus disease",
        
      },
      {
        code: 3939004,
        display: "Bacterial colony density, transparent",
        
      },
      {
        code: 3944006,
        display: "X-linked placental steryl-sulfatase deficiency",
        
      },
      {
        code: 3947004,
        display: "High oxygen affinity hemoglobin polycythemia",
        
      },
      {
        code: 3950001,
        display: "Birth",
        
      },
      {
        code: 3951002,
        display: "Proctitis",
        
      },
      {
        code: 3972004,
        display: "Idiopathic insomnia",
        
      },
      {
        code: 3975002,
        display: "Deep third degree burn of lower limb",
        
      },
      {
        code: 3978000,
        display: "AIHA - Warm autoimmune hemolytic anemia",
        
      },
      {
        code: 3987009,
        display: "Congenital absence of trachea",
        
      },
      {
        code: 3993001,
        display: "Infection caused by Muellerius",
        
      },
      {
        code: 3999002,
        display: "Acute pyelitis without renal medullary necrosis",
        
      },
      {
        code: 4003003,
        display: "Alphavirus disease",
        
      },
      {
        code: 4004009,
        display: "Monster with cranial anomalies",
        
      },
      {
        code: 4006006,
        display: "Foetal tachycardia affecting management of mother",
        
      },
      {
        code: 4009004,
        display: "Lower urinary tract infection",
        
      },
      {
        code: 4016003,
        display: "Empyema of mastoid",
        
      },
      {
        code: 4017007,
        display: "Increased stratum corneum adhesiveness",
        
      },
      {
        code: 4022007,
        display: "Vulvitis circumscripta plasmacellularis",
        
      },
      {
        code: 4026005,
        display: "Interstitial mastitis associated with childbirth",
        
      },
      {
        code: 4030008,
        display: "Le Dantec virus disease",
        
      },
      {
        code: 4038001,
        display: "Myrotheciotoxicosis",
        
      },
      {
        code: 4039009,
        display: "Multiple vitamin deficiency disease",
        
      },
      {
        code: 4040006,
        display: "Hassall-Henle bodies",
        
      },
      {
        code: 4041005,
        display: "Congenital anomaly of macula",
        
      },
      {
        code: 4046000,
        display: "Degenerative spondylolisthesis",
        
      },
      {
        code: 4062006,
        display: "Lumbosacral plexus lesion",
        
      },
      {
        code: 4063001,
        display: "Achillodynia",
        
      },
      {
        code: 4069002,
        display: "Anoxic brain damage during AND/OR resulting from a procedure",
        
      },
      {
        code: 4070001,
        display: "Palinphrasia",
        
      },
      {
        code: 4075006,
        display: "Peganum harmala poisoning",
        
      },
      {
        code: 4082005,
        display: "Syphilitic myocarditis",
        
      },
      {
        code: 4088009,
        display: "Acquired hydrocephalus",
        
      },
      {
        code: 4089001,
        display: "Meningococcemia",
        
      },
      {
        code: 4092002,
        display: "Nonallopathic lesion of costovertebral region",
        
      },
      {
        code: 4103001,
        display: "Complex partial seizure",
        
      },
      {
        code: 4106009,
        display: "Rotator cuff rupture",
        
      },
      {
        code: 4107000,
        display: "Infertile male syndrome",
        
      },
      {
        code: 4113009,
        display: "Arrested hydrocephalus",
        
      },
      {
        code: 4120002,
        display: "Bronchiolitis",
        
      },
      {
        code: 4124006,
        display: "Insect bite, nonvenomous, of vagina, infected",
        
      },
      {
        code: 4127004,
        display: "Prostatic obstruction",
        
      },
      {
        code: 4129001,
        display: "Argyll-Robertson pupil",
        
      },
      {
        code: 4135001,
        display: "11p partial monosomy syndrome",
        
      },
      {
        code: 4136000,
        display: "Macrodactylia of toes",
        
      },
      {
        code: 4142001,
        display: "Muscular asthenopia",
        
      },
      {
        code: 4152002,
        display: "Acquired hypoprothrombinemia",
        
      },
      {
        code: 4160001,
        display: "Congenital anomaly of upper respiratory system",
        
      },
      {
        code: 4168008,
        display: "Tibial plateau chondromalacia",
        
      },
      {
        code: 4170004,
        display: "Ehlers-Danlos syndrome, procollagen proteinase resistant",
        
      },
      {
        code: 4174008,
        display: "Tripartite placenta",
        
      },
      {
        code: 4175009,
        display: "Infestation by Estrus",
        
      },
      {
        code: 4178006,
        display: "Partial recent retinal detachment with multiple defects",
        
      },
      {
        code: 4181001,
        display: "Normal peak expiratory flow rate",
        
      },
      {
        code: 4183003,
        display: "Charcot-Marie-Tooth disease, type IC",
        
      },
      {
        code: 4184009,
        display: "Congenital malformation of the endocrine glands",
        
      },
      {
        code: 4191007,
        display: "Scaphoid head",
        
      },
      {
        code: 4195003,
        display: "Duplication of anus",
        
      },
      {
        code: 4197006,
        display: "Disability evaluation, impairment, class 5",
        
      },
      {
        code: 4199009,
        display: "18p partial trisomy syndrome",
        
      },
      {
        code: 4208000,
        display: "Closed multiple fractures of both lower limbs",
        
      },
      {
        code: 4210003,
        display: "OH - Ocular hypertension",
        
      },
      {
        code: 4223005,
        display: "Parkinsonism caused by drug",
        
      },
      {
        code: 4224004,
        display: "Complication of infusion",
        
      },
      {
        code: 4225003,
        display: "Nasal tuberculosis",
        
      },
      {
        code: 4229009,
        display: "Phthisical eye",
        
      },
      {
        code: 4232007,
        display: "Chronic vulvitis",
        
      },
      {
        code: 4237001,
        display: "Suppurative pulpitis",
        
      },
      {
        code: 4240001,
        display: "Rupture of aorta",
        
      },
      {
        code: 4241002,
        display: "Listeria infection",
        
      },
      {
        code: 4242009,
        display: "18q partial monosomy syndrome",
        
      },
      {
        code: 4244005,
        display: "Urticaria neonatorum",
        
      },
      {
        code: 4248008,
        display: "Synovitis AND/OR tenosynovitis associated with another disease",
        
      },
      {
        code: 4249000,
        display: "Poor peripheral circulation",
        
      },
      {
        code: 4251001,
        display: "Internal eye sign",
        
      },
      {
        code: 4260009,
        display: "Sacral spinal cord injury without bone injury",
        
      },
      {
        code: 4262001,
        display: "Phlebitis of superior sagittal sinus",
        
      },
      {
        code: 4264000,
        display: "Chronic pericoronitis",
        
      },
      {
        code: 4269005,
        display: "Chronic gastrojejunal ulcer without hemorrhage AND without perforation",
        
      },
      {
        code: 4273008,
        display: "Closed posterior dislocation of elbow",
        
      },
      {
        code: 4275001,
        display: "Conjugate gaze spasm",
        
      },
      {
        code: 4278004,
        display: "Superficial foreign body of axilla without major open wound but with infection",
        
      },
      {
        code: 4283007,
        display: "Mirizzi syndrome",
        
      },
      {
        code: 4287008,
        display: "Chordee of penis",
        
      },
      {
        code: 4294006,
        display: "Isosexual precocious puberty",
        
      },
      {
        code: 4300009,
        display: "Deep third degree burn of forearm",
        
      },
      {
        code: 4301008,
        display: "Autoimmune state",
        
      },
      {
        code: 4306003,
        display: "Cluster B personality disorder",
        
      },
      {
        code: 4307007,
        display: "Pregestational diabetes mellitus AND/OR impaired glucose tolerance, modified White class F",
        
      },
      {
        code: 4308002,
        display: "RSIS - Repetitive strain injury syndrome",
        
      },
      {
        code: 4310000,
        display: "Third degree burn of wrist AND/OR hand",
        
      },
      {
        code: 4313003,
        display: "Acardiacus anceps",
        
      },
      {
        code: 4316006,
        display: "Myometritis",
        
      },
      {
        code: 4320005,
        display: "Factor V deficiency",
        
      },
      {
        code: 4324001,
        display: "Subacute cystitis",
        
      },
      {
        code: 4325000,
        display: "11q partial monosomy syndrome",
        
      },
      {
        code: 4332009,
        display: "Subarachnoid hemorrhage following injury without open intracranial wound AND with concussion",
        
      },
      {
        code: 4338008,
        display: "Arnold nerve reflex cough syndrome",
        
      },
      {
        code: 4340003,
        display: "Acrodermatitis chronica atrophicans",
        
      },
      {
        code: 4349002,
        display: "Open fracture of multiple sites of metacarpus",
        
      },
      {
        code: 4354006,
        display: "Open dislocation of scapula",
        
      },
      {
        code: 4356008,
        display: "Gingival soft tissue recession",
        
      },
      {
        code: 4359001,
        display: "Early congenital syphilis",
        
      },
      {
        code: 4364002,
        display: "Structure of associations",
        
      },
      {
        code: 4367009,
        display: "Hoover sign",
        
      },
      {
        code: 4373005,
        display: "Clubbing of nail",
        
      },
      {
        code: 4374004,
        display: "TV - Congenital tricuspid valve abnormality",
        
      },
      {
        code: 4381006,
        display: "Verbal paraphasia",
        
      },
      {
        code: 4386001,
        display: "Bronchospasm",
        
      },
      {
        code: 4390004,
        display: "Chronic lithium nephrotoxicity",
        
      },
      {
        code: 4397001,
        display: "Partial congenital duodenal obstruction",
        
      },
      {
        code: 4399003,
        display: "Acute hemorrhagic pancreatitis",
        
      },
      {
        code: 4403007,
        display: "Exclamation point hair",
        
      },
      {
        code: 4406004,
        display: "Congenital anomaly of male genital system",
        
      },
      {
        code: 4409006,
        display: "Combined methylmalonic acidemia and homocystinuria due to defects in adenosylcobalamin and methylcobalamin synthesis",
        
      },
      {
        code: 4410001,
        display: "Retroperitoneal hernia with obstruction",
        
      },
      {
        code: 4412009,
        display: "Digital nerve injury",
        
      },
      {
        code: 4414005,
        display: "Infection caused by Setaria",
        
      },
      {
        code: 4416007,
        display: "Heerfordt syndrome",
        
      },
      {
        code: 4418008,
        display: "Gangrenous ergotism",
        
      },
      {
        code: 4426000,
        display: "Ten previous induced terminations of pregnancy",
        
      },
      {
        code: 4434006,
        display: "BS - Bloom syndrome",
        
      },
      {
        code: 4439001,
        display: "Axenfeld-Schurenberg syndrome",
        
      },
      {
        code: 4441000,
        display: "Severe bipolar disorder with psychotic features",
        
      },
      {
        code: 4445009,
        display: "TB - Urogenital tuberculosis",
        
      },
      {
        code: 4448006,
        display: "Allergic headache",
        
      },
      {
        code: 4451004,
        display: "Illegal termination of pregnancy with renal tubular necrosis",
        
      },
      {
        code: 4461006,
        display: "Complication of administrative procedure",
        
      },
      {
        code: 4463009,
        display: "Indiana-Maryland type amyloid polyneuropathy",
        
      },
      {
        code: 4464003,
        display: "Rocio virus disease",
        
      },
      {
        code: 4465002,
        display: "Spherophakia",
        
      },
      {
        code: 4468000,
        display: "Oppenheim gait",
        
      },
      {
        code: 4470009,
        display: "Blanching of skin",
        
      },
      {
        code: 4473006,
        display: "Migraine with aura",
        
      },
      {
        code: 4477007,
        display: "Juvenile myopathy AND lactate acidosis",
        
      },
      {
        code: 4478002,
        display: "Multiple fractures of upper AND lower limbs",
        
      },
      {
        code: 4481007,
        display: "Abnormal gastric secretion regulation",
        
      },
      {
        code: 4483005,
        display: "Syphilitic punched out ulcer",
        
      }
  ];
    
    const reactionManifestationProps = {
        options: reactionManifestation,
        getOptionLabel: (option) => option.display,
    };

    const reactionSubstance = [
      {
        code: 102002,
        display: "Hemoglobin Okaloosa",
        
      },
      {
        code: 120006,
        display: "Ornithine racemase",
        
      },
      {
        code: 125001,
        display: "Ferrous sulfate Fe^59^",
        
      },
      {
        code: 126000,
        display: "Galactosyl-N-acetylglucosaminylgalactosylglucosylceramide alpha-galactosyltransferase",
        
      },
      {
        code: 130002,
        display: "Hemoglobin Hopkins-II",
        
      },
      {
        code: 131003,
        display: "Dolichyl-phosphate mannosyltransferase",
        
      },
      {
        code: 159002,
        display: "Ferrocyanide salt",
        
      },
      {
        code: 164003,
        display: "Phosphoenolpyruvate-protein phosphotransferase",
        
      },
      {
        code: 178002,
        display: "Uridyl diphosphate galactose",
        
      },
      {
        code: 186002,
        display: "HLA-Cw9 antigen",
        
      },
      {
        code: 187006,
        display: "Cyanocobalamin Co^57^",
        
      },
      {
        code: 200001,
        display: "Berberine",
        
      },
      {
        code: 217008,
        display: "Blood group antigen IH",
        
      },
      {
        code: 231008,
        display: "3-Hydroxyisobutyrate dehydrogenase",
        
      },
      {
        code: 238002,
        display: "Heptachlor",
        
      },
      {
        code: 261000,
        display: "Codeine phosphate",
        
      },
      {
        code: 296000,
        display: "Coumachlor",
        
      },
      {
        code: 322006,
        display: "Octylphenoxy P.H. ethanol",
        
      },
      {
        code: 327000,
        display: "^76^Arsenic",
        
      },
      {
        code: 329002,
        display: "^127^Antimony",
        
      },
      {
        code: 336001,
        display: "Fibrinogen Tokyo II",
        
      },
      {
        code: 340005,
        display: "Enzyme variant",
        
      },
      {
        code: 363000,
        display: "Fibrinogen San Juan",
        
      },
      {
        code: 370000,
        display: "beta>2S< Glycoprotein",
        
      },
      {
        code: 371001,
        display: "Acylcarnitine hydrolase",
        
      },
      {
        code: 377002,
        display: "Sparteine",
        
      },
      {
        code: 392001,
        display: "^151^Gadolinium",
        
      },
      {
        code: 395004,
        display: "Immunoglobulin pentamer",
        
      },
      {
        code: 412004,
        display: "Ribose-5-phosphate isomerase",
        
      },
      {
        code: 424006,
        display: "Citramalyl-CoA lyase",
        
      },
      {
        code: 425007,
        display: "Hemoglobin Nagoya",
        
      },
      {
        code: 432003,
        display: "Carminic acid",
        
      },
      {
        code: 438004,
        display: "2-Hydroxyglutarate dehydrogenase",
        
      },
      {
        code: 462009,
        display: "Urease (ATP-hydrolysing)",
        
      },
      {
        code: 472007,
        display: "Vegetable textile fiber",
        
      },
      {
        code: 476005,
        display: "CD1b - Cluster of differentiation antigen 1b",
        
      },
      {
        code: 498001,
        display: "Nitrilase",
        
      },
      {
        code: 501001,
        display: "Blood group antibody Sf^a^",
        
      },
      {
        code: 505005,
        display: "Blood group antibody M'",
        
      },
      {
        code: 506006,
        display: "3-Oxosteroid delta^1^-dehydrogenase",
        
      },
      {
        code: 515004,
        display: "Blood group antigen Giaigue",
        
      },
      {
        code: 519005,
        display: "Free protein S",
        
      },
      {
        code: 521000,
        display: "^197^Mercury",
        
      },
      {
        code: 529003,
        display: "Guanosine",
        
      },
      {
        code: 538001,
        display: "2,3-Dihydroxybenzoate 3,4-dioxygenase",
        
      },
      {
        code: 566009,
        display: "Acrosin",
        
      },
      {
        code: 576007,
        display: "Blood group antibody Duck",
        
      },
      {
        code: 578008,
        display: "Hemoglobin Jianghua",
        
      },
      {
        code: 584006,
        display: "Blood group antibody Wr^b^",
        
      },
      {
        code: 585007,
        display: "SP - Substance P",
        
      },
      {
        code: 591009,
        display: "2-Oxoisovalerate dehydrogenase (acylating)",
        
      },
      {
        code: 593007,
        display: "Blood group antibody Holmes",
        
      },
      {
        code: 594001,
        display: "2-Oxoglutarate synthase",
        
      },
      {
        code: 597008,
        display: "^247^Californium",
        
      },
      {
        code: 604000,
        display: "Plant sapogenin glycoside",
        
      },
      {
        code: 611001,
        display: "Hippurate hydrolase",
        
      },
      {
        code: 620005,
        display: "Trichlorophenol",
        
      },
      {
        code: 648005,
        display: "Oil of calamus",
        
      },
      {
        code: 662003,
        display: "Aeromonas proteolytica aminopeptidase",
        
      },
      {
        code: 668004,
        display: "^185^Osmium",
        
      },
      {
        code: 683009,
        display: "Mercuric acetate",
        
      },
      {
        code: 686001,
        display: "Plastoquinol-plastocyanin reductase",
        
      },
      {
        code: 693002,
        display: "Trichothecene",
        
      },
      {
        code: 698006,
        display: "Erythromycin lactobionate",
        
      },
      {
        code: 699003,
        display: "Coal tar extract",
        
      },
      {
        code: 704006,
        display: "Blood group antigen Rx",
        
      },
      {
        code: 732002,
        display: "N-valeraldehyde",
        
      },
      {
        code: 735000,
        display: "Blood group antigen Jobbins",
        
      },
      {
        code: 747006,
        display: "Oxamniquine",
        
      },
      {
        code: 773001,
        display: "Hemoglobin M-Iwate",
        
      },
      {
        code: 785009,
        display: "Dextranase",
        
      },
      {
        code: 804003,
        display: "Creosotic acid",
        
      },
      {
        code: 819002,
        display: "Lytic antibody",
        
      },
      {
        code: 850000,
        display: "Stizolobate synthase",
        
      },
      {
        code: 859004,
        display: "Peptide-N^4^-(N-acetyl-b-glucosaminyl) asparagine amidase",
        
      },
      {
        code: 860009,
        display: "Immunoglobulin, aggregated",
        
      },
      {
        code: 873008,
        display: "Urethan",
        
      },
      {
        code: 876000,
        display: "D antigen",
        
      },
      {
        code: 877009,
        display: "Carboxypeptidase A",
        
      },
      {
        code: 889006,
        display: "[Acetyl-CoA carboxylase] kinase",
        
      },
      {
        code: 896008,
        display: "Ice",
        
      },
      {
        code: 905001,
        display: "o-Dihydroxycoumarin O^7^-glucosyltransferase",
        
      },
      {
        code: 923009,
        display: "Complement component 2",
        
      },
      {
        code: 925002,
        display: "Sodium iodipamide",
        
      },
      {
        code: 963005,
        display: "Pyridoxine 4-dehydrogenase",
        
      },
      {
        code: 974001,
        display: "Adenosylmethionine decarboxylase",
        
      },
      {
        code: 979006,
        display: "Carbamate kinase",
        
      },
      {
        code: 993004,
        display: "Palladium compound",
        
      },
      {
        code: 1002007,
        display: "Mannotetraose 2-alpha-N-acetylglucosaminyltransferase",
        
      },
      {
        code: 1010008,
        display: "N-Acetylneuraminate monooxygenase",
        
      },
      {
        code: 1018001,
        display: "Nornicotine",
        
      },
      {
        code: 1025008,
        display: "^93^Molybdenum",
        
      },
      {
        code: 1047008,
        display: "Guanine deaminase",
        
      },
      {
        code: 1050006,
        display: "Melilotate 3-monooxygenase",
        
      },
      {
        code: 1057009,
        display: "Phosphate salt",
        
      },
      {
        code: 1065007,
        display: "E. coli periplasmic proteinase",
        
      },
      {
        code: 1080001,
        display: "^202^Thallium",
        
      },
      {
        code: 1091008,
        display: "Coagulation factor inhibitor",
        
      },
      {
        code: 1097007,
        display: "Blood group antigen M^A^",
        
      },
      {
        code: 1105007,
        display: "Isochorismate synthase",
        
      },
      {
        code: 1113008,
        display: "Pancreatic ribonuclease",
        
      },
      {
        code: 1137008,
        display: "^240^Uranium",
        
      },
      {
        code: 1149009,
        display: "Hemoglobin Barcelona",
        
      },
      {
        code: 1160000,
        display: "Antibody to antigen in ISBT system LU",
        
      },
      {
        code: 1166006,
        display: "Ti - Titanium",
        
      },
      {
        code: 1169004,
        display: "Hemoglobin Gower-2",
        
      },
      {
        code: 1171004,
        display: "Fibrinogen Kawaguchi",
        
      },
      {
        code: 1185009,
        display: "Hemoglobin Roseau-Pointe Ã  Pitre",
        
      },
      {
        code: 1189003,
        display: "Hemoglobin F-M-Osaka",
        
      },
      {
        code: 1190007,
        display: "Mephenoxalone",
        
      },
      {
        code: 1219001,
        display: "Diethyl xanthogen disulfide",
        
      },
      {
        code: 1223009,
        display: "Blood group antigen Marks",
        
      },
      {
        code: 1244009,
        display: "Fibrinogen Madrid I",
        
      },
      {
        code: 1248007,
        display: "Leucostoma neutral proteinase",
        
      },
      {
        code: 1269009,
        display: "Amikacin sulfate",
        
      },
      {
        code: 1272002,
        display: "Pteridine oxidase",
        
      },
      {
        code: 1273007,
        display: "Blood group antibody Evelyn",
        
      },
      {
        code: 1313002,
        display: "Nitrate reductase (cytochrome)",
        
      },
      {
        code: 1319003,
        display: "Blood group antibody K18",
        
      },
      {
        code: 1320009,
        display: "Hemoglobin Manitoba",
        
      },
      {
        code: 1325004,
        display: "Metocurine iodide",
        
      },
      {
        code: 1331001,
        display: "Methamidophos",
        
      },
      {
        code: 1334009,
        display: "Estradiol receptor",
        
      },
      {
        code: 1336006,
        display: "Deoxycortone",
        
      },
      {
        code: 1341003,
        display: "Hemoglobin Ta-li",
        
      },
      {
        code: 1346008,
        display: "Blue shade eosin stain",
        
      },
      {
        code: 1355006,
        display: "Coagulation factor IX Oxford 3 variant",
        
      },
      {
        code: 1368003,
        display: "Iodine 131",
        
      },
      {
        code: 1371006,
        display: "Blood group antigen Big",
        
      },
      {
        code: 1373009,
        display: "^93^Zirconium",
        
      },
      {
        code: 1381005,
        display: "^126^Iodine",
        
      },
      {
        code: 1394007,
        display: "Iron pentacarbonyl",
        
      },
      {
        code: 1396009,
        display: "Actinium",
        
      },
      {
        code: 1405004,
        display: "Blood group antibody M^e^",
        
      },
      {
        code: 1408002,
        display: "Blood group antibody 1123K",
        
      },
      {
        code: 1416006,
        display: "Radium compound",
        
      },
      {
        code: 1450002,
        display: "Methylpentynol",
        
      },
      {
        code: 1466000,
        display: "Cyclomaltodextrinase",
        
      },
      {
        code: 1471007,
        display: "Elastin",
        
      },
      {
        code: 1472000,
        display: "Adenosine-phosphate deaminase",
        
      },
      {
        code: 1476002,
        display: "Codeine sulfate",
        
      },
      {
        code: 1477006,
        display: "Hemoglobin Yatsushiro",
        
      },
      {
        code: 1496005,
        display: "Proto-oncogene",
        
      },
      {
        code: 1506001,
        display: "CH1 (ISBT symbol)",
        
      },
      {
        code: 1517000,
        display: "HLA - Human leukocyte antigen B21",
        
      },
      {
        code: 1530004,
        display: "6-Carboxyhexanoate-coenzyme A ligase",
        
      },
      {
        code: 1535009,
        display: "Nitrogen fluoride",
        
      },
      {
        code: 1536005,
        display: "Pargyline hydrochloride",
        
      },
      {
        code: 1540001,
        display: "Tellurium radioisotope",
        
      },
      {
        code: 1545006,
        display: "Uridine phosphorylase",
        
      },
      {
        code: 1557002,
        display: "Talc dusting powder",
        
      },
      {
        code: 1565004,
        display: "Blood group antibody Buckalew",
        
      },
      {
        code: 1575001,
        display: "Maltose tetrapalmitate",
        
      },
      {
        code: 1603001,
        display: "Cobalt isotope",
        
      },
      {
        code: 1607000,
        display: "Homoserine kinase",
        
      },
      {
        code: 1609002,
        display: "N-octyl isosafrole sulfoxide",
        
      },
      {
        code: 1634002,
        display: "Blood group antigen Ven",
        
      },
      {
        code: 1649005,
        display: "Blood group antigen Sul",
        
      },
      {
        code: 1656004,
        display: "Hemoglobin Shaare Zedek",
        
      },
      {
        code: 1660001,
        display: "Plant seeds",
        
      },
      {
        code: 1668008,
        display: "Ceforanide",
        
      },
      {
        code: 1672007,
        display: "Ligase",
        
      },
      {
        code: 1673002,
        display: "Xylenol",
        
      },
      {
        code: 1675009,
        display: "^86^Rubidium",
        
      },
      {
        code: 1676005,
        display: "Blood group antibody LW^ab^",
        
      },
      {
        code: 1681001,
        display: "Blood group antibody BLe^b^",
        
      },
      {
        code: 1696002,
        display: "12-Hydroperoxy eicosatetraenoic acid",
        
      },
      {
        code: 1701009,
        display: "^191^Gold",
        
      },
      {
        code: 1710001,
        display: "UA - Uric acid",
        
      },
      {
        code: 1726000,
        display: "Diamond",
        
      },
      {
        code: 1727009,
        display: "Deoxylimonate A-ring-lactonase",
        
      },
      {
        code: 1740004,
        display: "Deoxy cytidine triphosphate",
        
      },
      {
        code: 1764003,
        display: "Saccharopine dehydrogenase (nicotinamide adenine dinucleotide phosphate ^+^,L-glutamate-forming)",
        
      },
      {
        code: 1768000,
        display: "Sucrose phosphorylase",
        
      },
      {
        code: 1786002,
        display: "Leucine-transfer ribonucleic acid ligase",
        
      },
      {
        code: 1793003,
        display: "Sodium trichloroacetate",
        
      },
      {
        code: 1795005,
        display: "Glyodin",
        
      },
      {
        code: 1798007,
        display: "Hemoglobin Hammersmith",
        
      },
      {
        code: 1799004,
        display: "L-Lysine oxidase",
        
      },
      {
        code: 1823002,
        display: "Hemoglobin Tochigi",
        
      },
      {
        code: 1827001,
        display: "Ribonuclease T>1<",
        
      },
      {
        code: 1886008,
        display: "Verdoglobin",
        
      },
      {
        code: 1904005,
        display: "Galactoside 3-fucosyltransferase",
        
      },
      {
        code: 1914001,
        display: "von Willebrand factor antibody",
        
      },
      {
        code: 1916004,
        display: "Boroglycerin",
        
      },
      {
        code: 1940007,
        display: "Immunoglobulin, GM>21< allotype",
        
      },
      {
        code: 1944003,
        display: "Coagulation factor X Patient variant",
        
      },
      {
        code: 1956002,
        display: "Buclizine hydrochloride",
        
      },
      {
        code: 1971003,
        display: "Loxapine hydrochloride",
        
      },
      {
        code: 1975007,
        display: "Blood group antibody Niemetz",
        
      },
      {
        code: 1978009,
        display: "Site-specific methyltransferase (cytosine-specific)",
        
      },
      {
        code: 1985008,
        display: "Vomitus",
        
      },
      {
        code: 1991005,
        display: "Lignin",
        
      },
      {
        code: 2000001,
        display: "Heavy nitrogen",
        
      },
      {
        code: 2006007,
        display: "Inosine diphosphate",
        
      },
      {
        code: 2008008,
        display: "^67^Gallium",
        
      },
      {
        code: 2009000,
        display: "Cobalt carbonyl",
        
      },
      {
        code: 2017008,
        display: "Deoxyribonucleic acid topoisomerase",
        
      },
      {
        code: 2027002,
        display: "Alternaria serine proteinase",
        
      },
      {
        code: 2029004,
        display: "Fibrinogen Oslo II",
        
      },
      {
        code: 2038002,
        display: "Blood group antibody Bg^b^",
        
      },
      {
        code: 2039005,
        display: "sym-Norspermidine synthase",
        
      },
      {
        code: 2050008,
        display: "Choloylglycine hydrolase",
        
      },
      {
        code: 2064008,
        display: "L-Xylulokinase",
        
      },
      {
        code: 2082006,
        display: "Vitronectin receptor alpha chain",
        
      },
      {
        code: 2085008,
        display: "Oncogene protein TCL",
        
      },
      {
        code: 2088005,
        display: "Page blue G-90 stain",
        
      },
      {
        code: 2096000,
        display: "Nicotinamide adenine dinucleotide ^+^ adenosine diphosphate-ribosyltransferase",
        
      },
      {
        code: 2100004,
        display: "Sulfonethylmethane",
        
      },
      {
        code: 2101000,
        display: "Yeast proteinase B",
        
      },
      {
        code: 2125008,
        display: "Betazole",
        
      },
      {
        code: 2130007,
        display: "Cyclohexane-1,2-diol dehydrogenase",
        
      },
      {
        code: 2141009,
        display: "Hydrogen",
        
      },
      {
        code: 2147008,
        display: "Blood group antigen Paular",
        
      },
      {
        code: 2151005,
        display: "Pyridoxamine-pyruvate aminotransferase",
        
      },
      {
        code: 2154002,
        display: "Tagaturonate reductase",
        
      },
      {
        code: 2159007,
        display: "Acid red 27",
        
      },
      {
        code: 2163000,
        display: "Dicofol",
        
      },
      {
        code: 2168009,
        display: "Bisphosphoglycerate mutase",
        
      },
      {
        code: 2179004,
        display: "Malonate-semialdehyde dehydratase",
        
      },
      {
        code: 2189000,
        display: "Hemoglobin F-Dammam",
        
      },
      {
        code: 2194000,
        display: "^101^Rhodium",
        
      },
      {
        code: 2195004,
        display: "Tocainide hydrochloride",
        
      },
      {
        code: 2197007,
        display: "Boric acid topical agent",
        
      },
      {
        code: 2201007,
        display: "Bacteriopurpurin",
        
      },
      {
        code: 2208001,
        display: "Phenylserine aldolase",
        
      },
      {
        code: 2212007,
        display: "Fibrinogen Bethesda II",
        
      },
      {
        code: 2215009,
        display: "Azuresin",
        
      },
      {
        code: 2240002,
        display: "Guanidinobutyrase",
        
      },
      {
        code: 2249001,
        display: "Gentamicin sulfate",
        
      },
      {
        code: 2254005,
        display: "Orotate",
        
      },
      {
        code: 2260005,
        display: "Human leukocyte antigen DRw18",
        
      },
      {
        code: 2262002,
        display: "Cellulose polysulfatase",
        
      },
      {
        code: 2264001,
        display: "Selenium isotope",
        
      },
      {
        code: 2309006,
        display: "Au - Gold",
        
      },
      {
        code: 2311002,
        display: "Prostacyclin synthase",
        
      },
      {
        code: 2329007,
        display: "Blood group antibody Vel",
        
      },
      {
        code: 2331003,
        display: "Saccharide",
        
      },
      {
        code: 2338009,
        display: "Root",
        
      },
      {
        code: 2343002,
        display: "Guthion",
        
      },
      {
        code: 2346005,
        display: "Vascormone",
        
      },
      {
        code: 2354007,
        display: "3'-Nucleotidase",
        
      },
      {
        code: 2358005,
        display: "Glass fragment, device",
        
      },
      {
        code: 2369008,
        display: "Indole-3-acetate beta-glucosyltransferase",
        
      },
      {
        code: 2370009,
        display: "Uridine diphosphate-N-acetylmuramate-alanine ligase",
        
      },
      {
        code: 2376003,
        display: "Mercury compound",
        
      },
      {
        code: 2384004,
        display: "^230^Uranium",
        
      },
      {
        code: 2404002,
        display: "Blood group antibody St^a^",
        
      },
      {
        code: 2405001,
        display: "b- Propiolactone",
        
      },
      {
        code: 2414006,
        display: "Prolactin receptor",
        
      },
      {
        code: 2430003,
        display: "Silicon radioisotope",
        
      },
      {
        code: 2431004,
        display: "Blood group antibody Friedberg",
        
      },
      {
        code: 2441001,
        display: "Mercury radioisotope",
        
      },
      {
        code: 2444009,
        display: "Human leukocyte antigen Dw25",
        
      },
      {
        code: 2450004,
        display: "Mannosamine",
        
      },
      {
        code: 2462000,
        display: "Glucose dehydrogenase (nicotinamide adenine dinucleotide phosphate ^+^)",
        
      },
      {
        code: 2466002,
        display: "Chloride peroxidase",
        
      },
      {
        code: 2500009,
        display: "Lymphocyte antigen CDw41b",
        
      },
      {
        code: 2509005,
        display: "D-Glutamate oxidase",
        
      },
      {
        code: 2516006,
        display: "Metallic sulfide compound",
        
      },
      {
        code: 2522002,
        display: "Extravascular blood",
        
      },
      {
        code: 2529006,
        display: "Hemoglobin Wood",
        
      },
      {
        code: 2537003,
        display: "Antituberculosis agent",
        
      },
      {
        code: 2568004,
        display: "Blood group antigen McAuley",
        
      },
      {
        code: 2573005,
        display: "Immunoglobulin, GM>13< allotype",
        
      },
      {
        code: 2575003,
        display: "Zinc alpha-2 glycoprotein",
        
      },
      {
        code: 2595009,
        display: "^119m^Tellurium",
        
      },
      {
        code: 2597001,
        display: "Alpha-1 globulin",
        
      },
      {
        code: 2611008,
        display: "Blood group antibody La Fave",
        
      },
      {
        code: 2637006,
        display: "Indium isotope",
        
      },
      {
        code: 2648004,
        display: "Bile vomitus",
        
      },
      {
        code: 2649007,
        display: "Azo-dye",
        
      },
      {
        code: 2660003,
        display: "Sodium dehydrocholate",
        
      },
      {
        code: 2671002,
        display: "3-Methyl-2-oxobutanoate hydroxy-methyltransferase",
        
      },
      {
        code: 2674005,
        display: "^128^Cesium",
        
      },
      {
        code: 2676007,
        display: "C3(H20)",
        
      },
      {
        code: 2678008,
        display: "Hemoglobin New Mexico",
        
      },
      {
        code: 2680002,
        display: "Factor XIII antibody",
        
      },
      {
        code: 2698003,
        display: "Natural gas",
        
      },
      {
        code: 2705002,
        display: "^72^Arsenic",
        
      },
      {
        code: 2706001,
        display: "Blood group antigen Vennera",
        
      },
      {
        code: 2719002,
        display: "Tartrate dehydratase",
        
      },
      {
        code: 2721007,
        display: "Blood group antigen McC^f^",
        
      },
      {
        code: 2728001,
        display: "Lewis system antigen",
        
      },
      {
        code: 2753003,
        display: "Blood group antibody M>1<",
        
      },
      {
        code: 2754009,
        display: "Hemoglobin F-Kennestone",
        
      },
      {
        code: 2765004,
        display: "SC3 (ISBT symbol)",
        
      },
      {
        code: 2778004,
        display: "Pleural fluid",
        
      },
      {
        code: 2796008,
        display: "Methanthelinium",
        
      },
      {
        code: 2799001,
        display: "Methylbenzethonium",
        
      },
      {
        code: 2823004,
        display: "Hemoglobin Bristol",
        
      },
      {
        code: 2832002,
        display: "Molybdenum compound",
        
      },
      {
        code: 2846002,
        display: "Hemoglobin Saitama",
        
      },
      {
        code: 2869004,
        display: "Ethanoic acid",
        
      },
      {
        code: 2878005,
        display: "Pethidine hydrochloride",
        
      },
      {
        code: 2880004,
        display: "Calcium sulfate",
        
      },
      {
        code: 2883002,
        display: "Exopolygalacturonate lyase",
        
      },
      {
        code: 2913009,
        display: "Immunoglobulin Epsilon chain",
        
      },
      {
        code: 2916001,
        display: "^22^Neon",
        
      },
      {
        code: 2925007,
        display: "Fluoromethalone",
        
      },
      {
        code: 2927004,
        display: "Rescinnamine",
        
      },
      {
        code: 2938004,
        display: "Pyrazole",
        
      },
      {
        code: 2942001,
        display: "Carbon^14^ D-xylose",
        
      },
      {
        code: 2950005,
        display: "Hemoglobin L-Persian Gulf",
        
      },
      {
        code: 2958003,
        display: "Zinc caprylate",
        
      },
      {
        code: 2964005,
        display: "Dimethoxyamphetamine",
        
      },
      {
        code: 2974008,
        display: "Trichophyton schoenleinii collagenase",
        
      },
      {
        code: 2988007,
        display: "Human leukocyte antigen Aw",
        
      },
      {
        code: 2991007,
        display: "Mecamylamine hydrochloride",
        
      },
      {
        code: 2995003,
        display: "Arecoline",
        
      },
      {
        code: 3027009,
        display: "^133^Barium",
        
      },
      {
        code: 3031003,
        display: "Dihydroxyaluminum sodium carbonate",
        
      },
      {
        code: 3040004,
        display: "Technetium Tc^99m^ disofenin",
        
      },
      {
        code: 3045009,
        display: "Nitrochlorobenzene",
        
      },
      {
        code: 3052006,
        display: "Ornithine ketoacid aminotransferase",
        
      },
      {
        code: 3066001,
        display: "Triiodothyroacetic acid",
        
      },
      {
        code: 3070009,
        display: "Aspartate-ammonia ligase",
        
      },
      {
        code: 3087006,
        display: "Oil of male fern",
        
      },
      {
        code: 3107005,
        display: "Hemoglobin Shuangfeng",
        
      },
      {
        code: 3108000,
        display: "Aspergillus deoxyribonuclease K>1<",
        
      },
      {
        code: 3131000,
        display: "Blood group antigen Middel",
        
      },
      {
        code: 3136005,
        display: "Cefoperazone sodium",
        
      },
      {
        code: 3142009,
        display: "Azacyclonol",
        
      },
      {
        code: 3145006,
        display: "Penicillic acid",
        
      },
      {
        code: 3150000,
        display: "Sialate O-acetylesterase",
        
      },
      {
        code: 3151001,
        display: "Left upper lobe mucus",
        
      },
      {
        code: 3155005,
        display: "3-Phosphoglyceroyl-phosphate-polyphosphate phosphotransferase",
        
      },
      {
        code: 3161008,
        display: "3-Methylhistidine",
        
      },
      {
        code: 3167007,
        display: "Hard coal",
        
      },
      {
        code: 3187008,
        display: "Blood group antigen Nielsen",
        
      },
      {
        code: 3193000,
        display: "alpha-1,4-Glucan-protein synthase (uridine diphosphate-forming)",
        
      },
      {
        code: 3197004,
        display: "Inosine monophosphate",
        
      },
      {
        code: 3209002,
        display: "Pancuronium sodium",
        
      },
      {
        code: 3212004,
        display: "Manganese sulfate",
        
      },
      {
        code: 3225007,
        display: "Fibrinogen Seattle I",
        
      },
      {
        code: 3232003,
        display: "o-Benzyl-parachlorophenol",
        
      },
      {
        code: 3271000,
        display: "Hemoglobin Southampton",
        
      },
      {
        code: 3273002,
        display: "Tyrosine-ester sulfotransferase",
        
      },
      {
        code: 3300001,
        display: "Euphorbain",
        
      },
      {
        code: 3318003,
        display: "Vaginal secretions",
        
      },
      {
        code: 3325005,
        display: "Lipopolysaccharide",
        
      },
      {
        code: 3339005,
        display: "(R)-20-Hydroxysteroid dehydrogenase",
        
      },
      {
        code: 3340007,
        display: "Diastase",
        
      },
      {
        code: 3342004,
        display: "Copper isotope",
        
      },
      {
        code: 3346001,
        display: "Hemoglobin Brest",
        
      },
      {
        code: 3378009,
        display: "Imipramine hydrochloride",
        
      },
      {
        code: 3379001,
        display: "Merthiolate",
        
      },
      {
        code: 3392003,
        display: "Aldehyde dehydrogenase (acceptor)",
        
      },
      {
        code: 3405005,
        display: "2-Hydroxy-3-oxoadipate synthase",
        
      },
      {
        code: 3411008,
        display: "bis-(Dimethylthiocarbamyl) disulfide",
        
      },
      {
        code: 3437006,
        display: "Hydroxymethylglutaryl-coenzyme A hydrolase",
        
      },
      {
        code: 3440006,
        display: "Biotin carboxylase",
        
      },
      {
        code: 3455002,
        display: "Discontinued pesticide",
        
      },
      {
        code: 3463001,
        display: "L-Amino-acid dehydrogenase",
        
      },
      {
        code: 3465008,
        display: "Deoxyribonucleic acid topoisomerase (adenosine triphosphate [ATP]-hydrolysing)",
        
      },
      {
        code: 3466009,
        display: "Dimethylamine",
        
      },
      {
        code: 3492002,
        display: "Galactinol-sucrose galactosyltransferase",
        
      },
      {
        code: 3493007,
        display: "Smegma clitoridis",
        
      },
      {
        code: 3495000,
        display: "Cystine aminopeptidase",
        
      },
      {
        code: 3501003,
        display: "Isoxsuprine hydrochloride",
        
      },
      {
        code: 3523004,
        display: "Hemoglobin Q-India",
        
      },
      {
        code: 3532002,
        display: "Laryngeal mucus",
        
      },
      {
        code: 3555004,
        display: "Blood group antigen Morrison",
        
      },
      {
        code: 3579002,
        display: "^129^Cesium",
        
      },
      {
        code: 3581000,
        display: "Glucose-6-phosphatase",
        
      },
      {
        code: 3587001,
        display: "Malate dehydrogenase (decarboxylating)",
        
      },
      {
        code: 3588006,
        display: "Complement enzyme",
        
      },
      {
        code: 3592004,
        display: "Short-acting thyroid stimulator",
        
      },
      {
        code: 3597005,
        display: "Acebutolol hydrochloride",
        
      },
      {
        code: 3601005,
        display: "Ether solvent",
        
      },
      {
        code: 3602003,
        display: "Warm antibody",
        
      },
      {
        code: 3610002,
        display: "Epoxide hydrolase",
        
      },
      {
        code: 3617004,
        display: "^79^Selenium",
        
      },
      {
        code: 3648007,
        display: "Glucocorticoid receptor",
        
      },
      {
        code: 3655009,
        display: "Hb - Hemoglobin Constant Spring",
        
      },
      {
        code: 3672002,
        display: "Fibrinogen Caracas",
        
      },
      {
        code: 3684000,
        display: "Phenylacetic acid",
        
      },
      {
        code: 3689005,
        display: "Hemoglobin Mizushi",
        
      },
      {
        code: 3692009,
        display: "Sodium sulfite",
        
      },
      {
        code: 3693004,
        display: "Fibrinogen Dusart",
        
      },
      {
        code: 3702007,
        display: "Cytidine diphosphate (CDP) glycerol glycerophosphotransferase",
        
      },
      {
        code: 3710008,
        display: "Prostaglandin-endoperoxide synthase",
        
      },
      {
        code: 3718001,
        display: "Cow's milk",
        
      },
      {
        code: 3726009,
        display: "Valine-transfer ribonucleic acid ligase",
        
      },
      {
        code: 3727000,
        display: "Hemoglobin F-Port Royal",
        
      },
      {
        code: 3730007,
        display: "Blood group antigen Lanthois",
        
      },
      {
        code: 3737005,
        display: "Nitrate reductase (reduced nicotinamide adenine dinucleotide)",
        
      },
      {
        code: 3742002,
        display: "Extracellular crystal",
        
      },
      {
        code: 3757009,
        display: "Gossypol",
        
      },
      {
        code: 3771001,
        display: "Neuromelanin",
        
      },
      {
        code: 3775005,
        display: "Choline dehydrogenase",
        
      },
      {
        code: 3776006,
        display: "Xanthine dehydrogenase",
        
      },
      {
        code: 3792001,
        display: "AA - Arachidonic acid",
        
      },
      {
        code: 3793006,
        display: "Soluble barium compound",
        
      },
      {
        code: 3800009,
        display: "Acetate kinase",
        
      },
      {
        code: 3807007,
        display: "RH4 (ISBT symbol)",
        
      },
      {
        code: 3811001,
        display: "Magnesium-protoporphyrin methyltransferase",
        
      },
      {
        code: 3812008,
        display: "Beryllium isotope",
        
      },
      {
        code: 3816006,
        display: "Vanadium isotope",
        
      },
      {
        code: 3823007,
        display: "Prochlorperazine edisylate",
        
      },
      {
        code: 3829006,
        display: "Fe - Iron",
        
      },
      {
        code: 3834005,
        display: "CMP-N-acetylneuraminate-(alpha-N-acetyl-neuraminyl-2,3-beta-galactosyl-1,3)-N-acetyl-galactosaminide alpha-2,6-sialyltransferase",
        
      },
      {
        code: 3836007,
        display: "Glutaminase",
        
      },
      {
        code: 3844007,
        display: "Protoaphin-aglucone dehydratase (cyclizing)",
        
      },
      {
        code: 3848005,
        display: "Nitrotoluene",
        
      },
      {
        code: 3849002,
        display: "Carbon black",
        
      },
      {
        code: 3854006,
        display: "bis-Chloro methyl ether",
        
      },
      {
        code: 3874004,
        display: "Hydrocodone bitartrate",
        
      },
      {
        code: 3892007,
        display: "Thymidine",
        
      },
      {
        code: 3896005,
        display: "p-Hydroxybenzoate ester",
        
      },
      {
        code: 3897001,
        display: "MNS30 (ISBT symbol)",
        
      },
      {
        code: 3906002,
        display: "Rectified birch tar oil",
        
      },
      {
        code: 3920009,
        display: "Hemoglobin Atago",
        
      },
      {
        code: 3930000,
        display: "Manufactured gas",
        
      },
      {
        code: 3932008,
        display: "^64^Copper",
        
      },
      {
        code: 3941003,
        display: "Metronidazole hydrochloride",
        
      },
      {
        code: 3945007,
        display: "Tin isotope",
        
      },
      {
        code: 3958008,
        display: "^245^Californium",
        
      },
      {
        code: 3961009,
        display: "Blood group antigen Ritherford",
        
      },
      {
        code: 3976001,
        display: "Blood group antigen HEMPAS",
        
      },
      {
        code: 3982003,
        display: "Oxaloacetate decarboxylase",
        
      },
      {
        code: 3983008,
        display: "N,-N-dimethyltryptamine",
        
      },
      {
        code: 3990003,
        display: "Alkaline phosphatase bone isoenzyme",
        
      },
      {
        code: 3994007,
        display: "Hemoglobin Tampa",
        
      },
      {
        code: 4014000,
        display: "Sulfisomidine",
        
      },
      {
        code: 4024008,
        display: "Soft metal",
        
      },
      {
        code: 4025009,
        display: "Captodiame",
        
      },
      {
        code: 4043008,
        display: "Etidocaine hydrochloride",
        
      },
      {
        code: 4047009,
        display: "cis-1,2-Dihydrobenzene-1,2-diol dehydrogenase",
        
      },
      {
        code: 4048004,
        display: "1,1,2,2-Tetrachloro-1,2- difluoroethane",
        
      },
      {
        code: 4067000,
        display: "Chorismate mutase",
        
      },
      {
        code: 4076007,
        display: "PTH - Parathyroid hormone",
        
      },
      {
        code: 4077003,
        display: "Dihydrolipoamide succinyltransferase",
        
      },
      {
        code: 4080002,
        display: "Hemoglobin Grady, Dakar",
        
      },
      {
        code: 4091009,
        display: "Enteropeptidase",
        
      },
      {
        code: 4097008,
        display: "Apo-SAA complex",
        
      },
      {
        code: 4104007,
        display: "Chondroitin sulfate",
        
      },
      {
        code: 4105008,
        display: "Adenylate cyclase",
        
      },
      {
        code: 4115002,
        display: "Blood group antibody Norlander",
        
      },
      {
        code: 4137009,
        display: "sec-Butyl acetate",
        
      },
      {
        code: 4153007,
        display: "Long-chain-enoyl-coenzyme A hydratase",
        
      },
      {
        code: 4167003,
        display: "PECAM-1 - Platelet endothelial cell adhesion molecule-1",
        
      },
      {
        code: 4169000,
        display: "Blood group antibody Le^bH^",
        
      },
      {
        code: 4177001,
        display: "Hemoglobin Long Island-Marseille",
        
      },
      {
        code: 4182008,
        display: "Cytidine diphosphate (CDP) diacylglycerol-serine O-phosphatidyl-transferase",
        
      },
      {
        code: 4188007,
        display: "Fibrinogen Sydney II",
        
      },
      {
        code: 4200007,
        display: "Neriifolin",
        
      },
      {
        code: 4201006,
        display: "6-Aminohexanoate-dimer hydrolase",
        
      },
      {
        code: 4203009,
        display: "Imipramine pamoate",
        
      },
      {
        code: 4207005,
        display: "Cortisone beta-reductase",
        
      },
      {
        code: 4217000,
        display: "Fluorosilicate salt",
        
      },
      {
        code: 4218005,
        display: "Immunoglobulin, GM>23< allotype",
        
      },
      {
        code: 4231000,
        display: "Gallium isotope",
        
      },
      {
        code: 4239003,
        display: "Glycerol dehydrogenase",
        
      },
      {
        code: 4255005,
        display: "Americium 241",
        
      },
      {
        code: 4289006,
        display: "Keyhole-limpet hemocyanin",
        
      },
      {
        code: 4290002,
        display: "Linamarin synthase",
        
      },
      {
        code: 4314009,
        display: "Blood group antibody Allchurch",
        
      },
      {
        code: 4334005,
        display: "Tar oil",
        
      },
      {
        code: 4342006,
        display: "2-Aminopyridine",
        
      },
      {
        code: 4353000,
        display: "Di-n-butylphthalate",
        
      },
      {
        code: 4355007,
        display: "Coagulation factor IX San Dimas variant",
        
      },
      {
        code: 4362003,
        display: "4-Coumarate-coenzyme A ligase",
        
      },
      {
        code: 4370008,
        display: "Acetone",
        
      },
      {
        code: 4393002,
        display: "Blood group antigen Fedor",
        
      },
      {
        code: 4401009,
        display: "Blood group antibody H>T<",
        
      },
      {
        code: 4413004,
        display: "Benzypyrinium",
        
      },
      {
        code: 4422003,
        display: "Blood group antigen",
        
      },
      {
        code: 4423008,
        display: "Fibrinogen New York II",
        
      },
      {
        code: 4425001,
        display: "Blood group antibody Binge",
        
      },
      {
        code: 4435007,
        display: "Sulfuryl fluoride",
        
      },
      {
        code: 4437004,
        display: "^127^Cesium",
        
      },
      {
        code: 4471008,
        display: "^244^Californium",
        
      },
      {
        code: 4479005,
        display: "Hemoglobin Brockton",
        
      },
      {
        code: 4480008,
        display: "Sulfaethidole",
        
      },
      {
        code: 4509009,
        display: "Plant phenanthrene toxin",
        
      },
      {
        code: 4518006,
        display: "Buthenal",
        
      },
      {
        code: 4534009,
        display: "^208^Bismuth",
        
      },
      {
        code: 4540002,
        display: "Adenosine diphosphate (ADP) deaminase",
        
      },
      {
        code: 4546008,
        display: "Tetradecanoic acid",
        
      },
      {
        code: 4555006,
        display: "Blood group antibody Rils",
        
      },
      {
        code: 4560005,
        display: "Hemoglobin Mizuho",
        
      },
      {
        code: 4561009,
        display: "Arginine decarboxylase",
        
      },
      {
        code: 4564001,
        display: "Blood group antibody Sisson",
        
      },
      {
        code: 4567008,
        display: "Galactose-1-phosphate thymidylyltransferase",
        
      },
      {
        code: 4582003,
        display: "Blood group antigen N^A^",
        
      },
      {
        code: 4591004,
        display: "MNS22 (ISBT symbol)",
        
      },
      {
        code: 4610008,
        display: "Senile cardiac protein",
        
      },
      {
        code: 4616002,
        display: "Triclobisonium chloride",
        
      },
      {
        code: 4629002,
        display: "Hypoglycin B",
        
      },
      {
        code: 4635002,
        display: "Arterial blood",
        
      },
      {
        code: 4643007,
        display: "Calf thymus ribonuclease H",
        
      },
      {
        code: 4656000,
        display: "Alcian blue 8GX stain",
        
      },
      {
        code: 4674009,
        display: "2,3-Dihydroxybenzoate serine ligase",
        
      },
      {
        code: 4681002,
        display: "Potassium permanganate",
        
      },
      {
        code: 4693006,
        display: "Chromium^51^ albumin",
        
      },
      {
        code: 4700006,
        display: "Bovine insulin",
        
      },
      {
        code: 4706000,
        display: "Chlorine monoxide",
        
      },
      {
        code: 4714006,
        display: "^183m^Osmium",
        
      },
      {
        code: 4728000,
        display: "Scopulariopsis proteinase",
        
      },
      {
        code: 4731004,
        display: "Aluminum pyro powder",
        
      },
      {
        code: 4732006,
        display: "Oncogene protein P55, V-MYC",
        
      },
      {
        code: 4746006,
        display: "Hemoglobin Mito",
        
      },
      {
        code: 4761007,
        display: "CD30 - Cluster of differentiation antigen 30",
        
      },
      {
        code: 4762000,
        display: "Platelet antigen HPA-3b",
        
      },
      {
        code: 4777008,
        display: "Fluroxene",
        
      },
      {
        code: 4780009,
        display: "Secbutabarbital sodium",
        
      },
      {
        code: 4786003,
        display: "beta-1,4-Mannosyl-glycoprotein beta-1,4-N-acetylglucosaminyltransferase",
        
      },
      {
        code: 4789005,
        display: "Blood group antibody Bultar",
        
      },
      {
        code: 4793004,
        display: "Azobenzene reductase",
        
      },
      {
        code: 4814001,
        display: "Valethamate",
        
      },
      {
        code: 4824009,
        display: "MAO - Monoamine oxidase",
        
      },
      {
        code: 4825005,
        display: "Peptidyl-glycinamidase",
        
      },
      {
        code: 4831008,
        display: "Arabinose-5-phosphate isomerase",
        
      },
      {
        code: 4832001,
        display: "Technetium Tc^99m^ mebrofenin",
        
      },
      {
        code: 4833006,
        display: "Glucan endo-1,3-alpha-glucosidase",
        
      },
      {
        code: 4844003,
        display: "3,3' Diiodothyronine",
        
      },
      {
        code: 4864008,
        display: "AMP - Adenosine monophosphate",
        
      },
      {
        code: 4872005,
        display: "Glucosulfone",
        
      },
      {
        code: 4878009,
        display: "Human leukocyte antigen Dw3",
        
      },
      {
        code: 4882006,
        display: "Ichthyoallyeinotoxin",
        
      },
      {
        code: 4889002,
        display: "Xylulokinase",
        
      },
      {
        code: 4901003,
        display: "Pyruvate oxidase (coenzyme A-acetylating)",
        
      },
      {
        code: 4925006,
        display: "Oncogene protein V-ABC",
        
      },
      {
        code: 4933007,
        display: "Leukocyte M1",
        
      },
      {
        code: 4940008,
        display: "Tattoo dye",
        
      },
      {
        code: 4955004,
        display: "Neoplastic structural gene",
        
      },
      {
        code: 4962008,
        display: "Tree bark",
        
      },
      {
        code: 4963003,
        display: "Neutral amino acid",
        
      },
      {
        code: 4965005,
        display: "Glutathione reductase",
        
      },
      {
        code: 4968007,
        display: "Acumentin",
        
      },
      {
        code: 4986005,
        display: "Magnesium borate",
        
      },
      {
        code: 5003005,
        display: "Hemoglobin Swan River",
        
      },
      {
        code: 5004004,
        display: "Blood group antibody Panzar",
        
      },
      {
        code: 5007006,
        display: "Papain",
        
      },
      {
        code: 5024000,
        display: "Fresh water",
        
      },
      {
        code: 5031001,
        display: "3-3'Dichlorobenzidine",
        
      },
      {
        code: 5040002,
        display: "Cesium",
        
      },
      {
        code: 5043000,
        display: "Erythrosin Y stain",
        
      },
      {
        code: 5045007,
        display: "Oncogene protein TCL4",
        
      },
      {
        code: 5059000,
        display: "^97^Technetium",
        
      },
      {
        code: 5060005,
        display: "^132^Cesium",
        
      },
      {
        code: 5061009,
        display: "Protein-methionine-S-oxide reductase",
        
      },
      {
        code: 5064001,
        display: "Blood group antibody D 1276",
        
      },
      {
        code: 5081005,
        display: "RH31 (ISBT symbol)",
        
      },
      {
        code: 5086000,
        display: "Gelsolin",
        
      },
      {
        code: 5094007,
        display: "Blood group antigen Rios",
        
      },
      {
        code: 5098005,
        display: "Fennel oil",
        
      },
      {
        code: 5109006,
        display: "Methylated-deoxyribonucleic acid-protein-cysteine methyltransferase",
        
      },
      {
        code: 5142007,
        display: "Coagulation factor II Houston variant",
        
      },
      {
        code: 5160007,
        display: "Metal compound",
        
      },
      {
        code: 5163009,
        display: "Scombrotoxin",
        
      },
      {
        code: 5167005,
        display: "Zinc chloride fumes",
        
      },
      {
        code: 5172001,
        display: "Coagulation factor Xa",
        
      },
      {
        code: 5179005,
        display: "Connective tissue fiber",
        
      },
      {
        code: 5200001,
        display: "trans-Epoxysuccinate hydrolase",
        
      },
      {
        code: 5206007,
        display: "Cyanate compound",
        
      },
      {
        code: 5220000,
        display: "Bacitracin",
        
      },
      {
        code: 5226006,
        display: "Flavone O^7^-beta-glucosyltransferase",
        
      },
      {
        code: 5250008,
        display: "Thymus-independent antigen",
        
      },
      {
        code: 5252000,
        display: "Hafnium radioisotope",
        
      },
      {
        code: 5253005,
        display: "Hemoglobin Woodville",
        
      },
      {
        code: 5259009,
        display: "Blood group antigen Braden",
        
      },
      {
        code: 5289002,
        display: "Scilliroside",
        
      },
      {
        code: 5303002,
        display: "Hemoglobin Hoshida",
        
      },
      {
        code: 5305009,
        display: "Polynucleotide",
        
      },
      {
        code: 5307001,
        display: "Blood group antigen Hamet",
        
      },
      {
        code: 5312000,
        display: "^65^Zinc",
        
      },
      {
        code: 5323001,
        display: "Uridine diphosphate glucuronic acid",
        
      },
      {
        code: 5330007,
        display: "Actin-binding protein",
        
      },
      {
        code: 5339008,
        display: "L-Glycol dehydrogenase",
        
      },
      {
        code: 5340005,
        display: "Blood group antigen Swietlik",
        
      },
      {
        code: 5392001,
        display: "Propylene glycol monomethyl ether",
        
      },
      {
        code: 5395004,
        display: "Pyridoxamine-phosphate oxidase",
        
      },
      {
        code: 5404007,
        display: "Lymphocyte antigen CD45RA",
        
      },
      {
        code: 5405008,
        display: "^60^Cobalt",
        
      },
      {
        code: 5406009,
        display: "beta-L-Arabinosidase",
        
      },
      {
        code: 5420002,
        display: "Accessory sinus mucus",
        
      },
      {
        code: 5439007,
        display: "Blood group antibody Do^a^",
        
      },
      {
        code: 5442001,
        display: "Page blue 83",
        
      },
      {
        code: 5453007,
        display: "Iridium isotope",
        
      },
      {
        code: 5471000,
        display: "Hemoglobin G-Coushatta",
        
      },
      {
        code: 5474008,
        display: "Propionate-CoA ligase",
        
      },
      {
        code: 5477001,
        display: "Ferric subsulfate",
        
      },
      {
        code: 5483003,
        display: "Oxalate CoA-transferase",
        
      },
      {
        code: 5504009,
        display: "Blood group antigen Fuerhart",
        
      },
      {
        code: 5511008,
        display: "Inosinate nucleosidase",
        
      },
      {
        code: 5513006,
        display: "Immunoglobulin, Alpha chain",
        
      },
      {
        code: 5515004,
        display: "Rhodium fumes",
        
      },
      {
        code: 5533005,
        display: "Blood group antibody Kp^a^",
        
      },
      {
        code: 5537006,
        display: "Immunoglobulin, Delta chain",
        
      },
      {
        code: 5540006,
        display: "Calcium",
        
      },
      {
        code: 5547009,
        display: "^233^Plutonium",
        
      },
      {
        code: 5548004,
        display: "2-Dehydro-3-deoxy-D-pentonate aldolase",
        
      },
      {
        code: 5568005,
        display: "Hemoglobin Hijiyama",
        
      },
      {
        code: 5573004,
        display: "Blood group antigen Oca",
        
      },
      {
        code: 5589001,
        display: "Licodione O^2'^-methyltransferase",
        
      },
      {
        code: 5590005,
        display: "Beryllium radioisotope",
        
      },
      {
        code: 5628003,
        display: "Hemoglobin I-High Wycombe",
        
      },
      {
        code: 5629006,
        display: "Cytidylic acid",
        
      },
      {
        code: 5637003,
        display: "HLA-DQw6 antigen",
        
      },
      {
        code: 5641004,
        display: "Valproate semisodium",
        
      },
      {
        code: 5647000,
        display: "Griseofulvin ultramicrosize",
        
      },
      {
        code: 5656008,
        display: "^116m^Antimony",
        
      },
      {
        code: 5657004,
        display: "Coal tar topical solution",
        
      },
      {
        code: 5659001,
        display: "Hemoglobin J-Tongariki",
        
      },
      {
        code: 5670008,
        display: "Gold isotope",
        
      },
      {
        code: 5681006,
        display: "Ceftizoxime sodium",
        
      },
      {
        code: 5691000,
        display: "Absorbable gelatin sponge",
        
      },
      {
        code: 5692007,
        display: "Cyanocobalamin Co^58^",
        
      },
      {
        code: 5699003,
        display: "Somatomedin C",
        
      },
      {
        code: 5700002,
        display: "Blood group antibody Gomez",
        
      },
      {
        code: 5702005,
        display: "^106m^Silver",
        
      },
      {
        code: 5704006,
        display: "Galactokinase",
        
      },
      {
        code: 5705007,
        display: "1,3-Propanediol dehydrogenase",
        
      },
      {
        code: 5739006,
        display: "Stramonium",
        
      },
      {
        code: 5746002,
        display: "^118m^Antimony",
        
      },
      {
        code: 5757007,
        display: "HLA-Cw8 antigen",
        
      },
      {
        code: 5762008,
        display: "Heterogeneous nuclear RNA",
        
      },
      {
        code: 5764009,
        display: "^242^Plutonium",
        
      },
      {
        code: 5767002,
        display: "Sulfamerazine",
        
      },
      {
        code: 5774007,
        display: "White petrolatum",
        
      },
      {
        code: 5800007,
        display: "tRNA (5-methylaminomethyl-2-thiouridylate)-methyltransferase",
        
      },
      {
        code: 5813001,
        display: "Malate dehydrogenase",
        
      },
      {
        code: 5826002,
        display: "Ethyl-4-bis-(hydroxypropyl)-1-aminobenzoate",
        
      },
      {
        code: 5827006,
        display: "Crotonaldehyde",
        
      },
      {
        code: 5829009,
        display: "Hemoglobin Vaasa",
        
      },
      {
        code: 5830004,
        display: "Hemoglobin Bart",
        
      },
      {
        code: 5840001,
        display: "Blood group antibody Wj",
        
      },
      {
        code: 5858007,
        display: "^110m^Indium",
        
      },
      {
        code: 5863006,
        display: "Vitexin beta-glucosyltransferase",
        
      },
      {
        code: 5896008,
        display: "Hellebrin",
        
      },
      {
        code: 5899001,
        display: "Bacterial structural gene",
        
      },
      {
        code: 5907009,
        display: "Quinidine polygalacturonate",
        
      },
      {
        code: 5910002,
        display: "Oncogene protein PP60, V-SRC",
        
      },
      {
        code: 5915007,
        display: "Blood group antigen Gladding",
        
      },
      {
        code: 5927005,
        display: "Lactaldehyde dehydrogenase",
        
      },
      {
        code: 5931004,
        display: "Technetium Tc^99m^ sulfur colloid",
        
      },
      {
        code: 5932006,
        display: "Cysteine",
        
      },
      {
        code: 5950004,
        display: "3',5'-Cyclic-nucleotide phosphodiesterase",
        
      },
      {
        code: 5955009,
        display: "Diethylene glycol",
        
      },
      {
        code: 5977008,
        display: "Blood group antigen Bullock",
        
      },
      {
        code: 5989005,
        display: "Immunoglobulin, GM>17< allotype",
        
      },
      {
        code: 5991002,
        display: "D-Fuconate dehydratase",
        
      },
      {
        code: 6021003,
        display: "^88^Yttrium",
        
      },
      {
        code: 6038004,
        display: "Oxygen radioisotope",
        
      },
      {
        code: 6043006,
        display: "Bone cement",
        
      },
      {
        code: 6044000,
        display: "Carbon disulfide",
        
      },
      {
        code: 6054001,
        display: "Doxylamine succinate",
        
      },
      {
        code: 6056004,
        display: "Blood group antibody Wk^a^",
        
      },
      {
        code: 6068008,
        display: "Blood group antigen Mil",
        
      },
      {
        code: 6083003,
        display: "Hydroxylysine",
        
      },
      {
        code: 6085005,
        display: "Synovial fluid",
        
      },
      {
        code: 6088007,
        display: "Benzfetamine hydrochloride",
        
      },
      {
        code: 6089004,
        display: "Lochia alba",
        
      },
      {
        code: 6091007,
        display: "Blood group antibody L Harris",
        
      },
      {
        code: 6107003,
        display: "Asparagusate reductase (NADH)",
        
      },
      {
        code: 6109000,
        display: "Aromatic-amino-acid aminotransferase",
        
      },
      {
        code: 6115000,
        display: "Blood group antibody Anuszewska",
        
      },
      {
        code: 6135004,
        display: "Blood group antigen Duck",
        
      },
      {
        code: 6138002,
        display: "Blood group antigen Le Provost",
        
      },
      {
        code: 6162007,
        display: "Meclocycline",
        
      },
      {
        code: 6170002,
        display: "Heat labile antibody",
        
      },
      {
        code: 6172005,
        display: "Fatty-acid methyltransferase",
        
      },
      {
        code: 6178009,
        display: "Lymphocyte antigen CD63",
        
      },
      {
        code: 6179001,
        display: "o-Methy-bufotenine",
        
      },
      {
        code: 6182006,
        display: "Chloroacetone",
        
      },
      {
        code: 6197009,
        display: "Blood group antigen Zd",
        
      },
      {
        code: 6237004,
        display: "Bemegride",
        
      },
      {
        code: 6249003,
        display: "Potassium metabisulfite",
        
      },
      {
        code: 6256009,
        display: "Ribose isomerase",
        
      },
      {
        code: 6257000,
        display: "Sodium chloride Na^22^",
        
      },
      {
        code: 6260007,
        display: "Protokylol",
        
      },
      {
        code: 6261006,
        display: "Indoklon",
        
      },
      {
        code: 6263009,
        display: "Plant residue",
        
      },
      {
        code: 6264003,
        display: "Diazinon",
        
      },
      {
        code: 6287006,
        display: "Methidathion",
        
      },
      {
        code: 6291001,
        display: "N-Acetylglucosamine-1-phosphodiester N-acetylglucosaminidase",
        
      },
      {
        code: 6301006,
        display: "^178^Tantalum",
        
      },
      {
        code: 6310003,
        display: "Particulate antigen",
        
      },
      {
        code: 6314007,
        display: "Phenol beta-glucosyltransferase",
        
      },
      {
        code: 6333002,
        display: "Squill extract",
        
      },
      {
        code: 6338006,
        display: "Imidazolonepropionase",
        
      },
      {
        code: 6356006,
        display: "Chlorodiallylacetamide",
        
      },
      {
        code: 6360009,
        display: "Kallidin II",
        
      },
      {
        code: 6367007,
        display: "^95m^Technetium",
        
      },
      {
        code: 6386004,
        display: "N-Acetylneuraminate O^4^-acetyltransferase",
        
      },
      {
        code: 6394006,
        display: "Phentermine hydrochloride",
        
      },
      {
        code: 6401007,
        display: "Lichenase",
        
      },
      {
        code: 6409009,
        display: "Morpholine",
        
      },
      {
        code: 6411000,
        display: "Interleukin-12",
        
      },
      {
        code: 6422001,
        display: "HLA-DRw14 antigen",
        
      },
      {
        code: 6451002,
        display: "Chlorobenzilate",
        
      },
      {
        code: 6455006,
        display: "Chloroprene",
        
      },
      {
        code: 6469006,
        display: "delta^1^-Piperideine-2-carboxylate reductase",
        
      },
      {
        code: 6478000,
        display: "6-Phosphofructokinase",
        
      },
      {
        code: 6495008,
        display: "Fibrinogen Montreal II",
        
      },
      {
        code: 6507009,
        display: "Blood group antigen Much",
        
      },
      {
        code: 6513000,
        display: "Flumethiazide",
        
      },
      {
        code: 6516008,
        display: "Indium^111^-Fe(OH)>3<",
        
      },
      {
        code: 6524003,
        display: "Distilled spirits",
        
      },
      {
        code: 6529008,
        display: "Blood group antigen Cl^a^",
        
      },
      {
        code: 6532006,
        display: "Macrophage activating factor",
        
      },
      {
        code: 6590001,
        display: "Galactosylceramidase",
        
      },
      {
        code: 6592009,
        display: "HLA-Dw12 antigen",
        
      },
      {
        code: 6602005,
        display: "Aminoacridine",
        
      },
      {
        code: 6611005,
        display: "Diethylaminoethanol",
        
      },
      {
        code: 6612003,
        display: "Chloramphenicol sodium succinate",
        
      },
      {
        code: 6619007,
        display: "Bilirubin Y transport protein",
        
      },
      {
        code: 6642000,
        display: "Opsonin",
        
      },
      {
        code: 6644004,
        display: "Homoserine dehydrogenase",
        
      },
      {
        code: 6671004,
        display: "Blood group antigen Caw",
        
      },
      {
        code: 6672006,
        display: "Phosphoadenylate 3'-nucleotidase",
        
      },
      {
        code: 6699008,
        display: "Titanium radioisotope",
        
      },
      {
        code: 6701008,
        display: "Lissamine fast red B",
        
      },
      {
        code: 6702001,
        display: "Ethyl mercaptoethyl diethyl thiophosphate",
        
      },
      {
        code: 6709005,
        display: "Gentamicin 2''-nucleotidyltransferase",
        
      },
      {
        code: 6710000,
        display: "Nitric oxide",
        
      },
      {
        code: 6713003,
        display: "^91^Yttrium",
        
      },
      {
        code: 6717002,
        display: "Nifuroxime",
        
      },
      {
        code: 6725000,
        display: "Methylene blue",
        
      },
      {
        code: 6730001,
        display: "^234^Uranium",
        
      },
      {
        code: 6741004,
        display: "Anti DNA antibody",
        
      },
      {
        code: 6755007,
        display: "TL antigen",
        
      },
      {
        code: 6786001,
        display: "Silver difluoride",
        
      },
      {
        code: 6790004,
        display: "Aminopterin",
        
      },
      {
        code: 6792007,
        display: "Veratrine",
        
      },
      {
        code: 6808006,
        display: "Ferrous iron compound",
        
      },
      {
        code: 6809003,
        display: "Phomopsin",
        
      },
      {
        code: 6814004,
        display: "Discadenine synthase",
        
      },
      {
        code: 6817006,
        display: "Oxidized glutathione",
        
      },
      {
        code: 6826009,
        display: "Sterol hormone",
        
      },
      {
        code: 6837005,
        display: "Dextropropoxyphene napsylate",
        
      },
      {
        code: 6854002,
        display: "^188^Platinum",
        
      },
      {
        code: 6865007,
        display: "Theophylline calcium salicylate",
        
      },
      {
        code: 6873003,
        display: "Cefapirin sodium",
        
      },
      {
        code: 6879004,
        display: "5,8,11-Eicosatrienoic acid",
        
      },
      {
        code: 6881002,
        display: "Magnesium fumes",
        
      },
      {
        code: 6884005,
        display: "(S)-3-Amino-2-methylpropionate aminotransferase",
        
      },
      {
        code: 6890009,
        display: "3-Deoxy-manno-octulosonate-8-phosphatase",
        
      },
      {
        code: 6896003,
        display: "Thiopurine methyltransferase",
        
      },
      {
        code: 6910009,
        display: "Sodium fluoride",
        
      },
      {
        code: 6911008,
        display: "Deoxycytidylate methyltransferase",
        
      },
      {
        code: 6916003,
        display: "Bowieine",
        
      },
      {
        code: 6924008,
        display: "Exopolyphosphatase",
        
      },
      {
        code: 6925009,
        display: "Leucine acetyltransferase",
        
      },
      {
        code: 6927001,
        display: "^121^Tin",
        
      },
      {
        code: 6937006,
        display: "Thymidylate synthase",
        
      },
      {
        code: 6945001,
        display: "Blood group antigen Le^bH^",
        
      },
      {
        code: 6952004,
        display: "^121m^Tin",
        
      },
      {
        code: 6958000,
        display: "Blood group antibody Frando",
        
      },
      {
        code: 6961004,
        display: "Lysolecithin acylmutase",
        
      },
      {
        code: 6970001,
        display: "4-Hydroxyproline epimerase",
        
      },
      {
        code: 6973004,
        display: "Chromium^51^ chloride",
        
      },
      {
        code: 6983000,
        display: "Acrylamide",
        
      },
      {
        code: 6992002,
        display: "Triflupromazine hydrochloride",
        
      },
      {
        code: 6993007,
        display: "Seminal fluid",
        
      },
      {
        code: 6999006,
        display: "Ammonium compound",
        
      },
      {
        code: 7008002,
        display: "beta-Carotene 15,15'-dioxygenase",
        
      },
      {
        code: 7018007,
        display: "Malate-CoA ligase",
        
      },
      {
        code: 7029006,
        display: "Blood group antigen Greenlee",
        
      },
      {
        code: 7030001,
        display: "Globoside",
        
      },
      {
        code: 7034005,
        display: "Diclofenac",
        
      },
      {
        code: 7045008,
        display: "Lycorine",
        
      },
      {
        code: 7047000,
        display: "Asphyxiant atmosphere",
        
      },
      {
        code: 7049002,
        display: "Pyruvate carboxylase",
        
      },
      {
        code: 7054006,
        display: "Hemoglobin Poissy",
        
      },
      {
        code: 7056008,
        display: "3-Propylmalate synthase",
        
      },
      {
        code: 7059001,
        display: "N-Acylneuraminate-9-phosphatase",
        
      },
      {
        code: 7061005,
        display: "Anthocyanidin O^3^-glucosyltransferase",
        
      },
      {
        code: 7070008,
        display: "Convallamarin",
        
      },
      {
        code: 7084003,
        display: "Fibrinogen Buenos Aires II",
        
      },
      {
        code: 7110002,
        display: "^69^Germanium",
        
      },
      {
        code: 7120007,
        display: "Antigen",
        
      },
      {
        code: 7132006,
        display: "^73^Gallium",
        
      },
      {
        code: 7139002,
        display: "Acid-CoA ligase (GDP-forming)",
        
      },
      {
        code: 7146006,
        display: "Cyclohexene oxide",
        
      },
      {
        code: 7152007,
        display: "Chlorthion",
        
      },
      {
        code: 7156005,
        display: "Phosphorus isotope",
        
      },
      {
        code: 7158006,
        display: "HLA-Dw19 antigen",
        
      },
      {
        code: 7161007,
        display: "Complement component C2a",
        
      },
      {
        code: 7179006,
        display: "Prekallikrein",
        
      },
      {
        code: 7191002,
        display: "Methenyltetrahydrofolate cyclohydrolase",
        
      },
      {
        code: 7208009,
        display: "Thiol oxidase",
        
      },
      {
        code: 7211005,
        display: "Blood group antibody Haakestad",
        
      },
      {
        code: 7237008,
        display: "Galactonate dehydratase",
        
      },
      {
        code: 7243005,
        display: "Methyl isocyanate",
        
      },
      {
        code: 7269004,
        display: "Th - Thorium",
        
      },
      {
        code: 7271004,
        display: "Mixed dust",
        
      },
      {
        code: 7280004,
        display: "dTDP4-dehydrorhamnose reductase",
        
      },
      {
        code: 7281000,
        display: "Technetium Tc^99m^ lidofenin",
        
      },
      {
        code: 7284008,
        display: "Mercaptan compound",
        
      },
      {
        code: 7294003,
        display: "tert-Butyl acetate",
        
      },
      {
        code: 7302008,
        display: "Ambuphylline",
        
      },
      {
        code: 7318002,
        display: "Bacteriochlorophyll",
        
      },
      {
        code: 7321000,
        display: "Pyrimidine",
        
      },
      {
        code: 7325009,
        display: "Calcium hydroxide",
        
      },
      {
        code: 7327001,
        display: "Sulfurous acid",
        
      },
      {
        code: 7328006,
        display: "Red petrolatum",
        
      },
      {
        code: 7330008,
        display: "Shellac",
        
      },
      {
        code: 7337006,
        display: "Blood group antibody Tr^a^",
        
      },
      {
        code: 7348004,
        display: "Factor II",
        
      },
      {
        code: 7382005,
        display: "Aminoalcohol ester",
        
      },
      {
        code: 7401000,
        display: "Heme-hemopexin complex",
        
      },
      {
        code: 7411007,
        display: "Blood group antibody HLA-B8",
        
      },
      {
        code: 7427000,
        display: "Sepiapterin reductase",
        
      },
      {
        code: 7434003,
        display: "Erythrosin B",
        
      },
      {
        code: 7446004,
        display: "Ruthenium",
        
      },
      {
        code: 7451005,
        display: "Tobramycin ophthalmic agent",
        
      },
      {
        code: 7460002,
        display: "^127^Tellurium",
        
      },
      {
        code: 7470000,
        display: "p-tert-Butyltoluene",
        
      },
      {
        code: 7489000,
        display: "Homocytotropic antibody",
        
      },
      {
        code: 7503004,
        display: "^72^Gallium",
        
      },
      {
        code: 7509000,
        display: "Mannitol hexanitrate",
        
      },
      {
        code: 7515000,
        display: "Hepatotoxic mycotoxin",
        
      },
      {
        code: 7537007,
        display: "Stizolobinate synthase",
        
      },
      {
        code: 7547005,
        display: "Hemoglobin Lincoln Park",
        
      },
      {
        code: 7549008,
        display: "Fibrinogen Bethesda I",
        
      },
      {
        code: 7588005,
        display: "Blood group antibody Sk^a^",
        
      },
      {
        code: 7608003,
        display: "Triethylene glycol",
        
      },
      {
        code: 7616007,
        display: "Blood group antibody Pruitt",
        
      },
      {
        code: 7648006,
        display: "HLA-Bw70 antigen",
        
      },
      {
        code: 7661006,
        display: "Fish bone",
        
      },
      {
        code: 7670009,
        display: "Aminobutyraldehyde dehydrogenase",
        
      },
      {
        code: 7675004,
        display: "Blood group antigen Towey",
        
      },
      {
        code: 7679005,
        display: "Strong oxidizing compound",
        
      },
      {
        code: 7685003,
        display: "Blood group antibody Bg^c^",
        
      },
      {
        code: 7696006,
        display: "Ferrovanadium dust",
        
      },
      {
        code: 7716001,
        display: "Isovaleryl coenzyme A dehydrogenase",
        
      },
      {
        code: 7737009,
        display: "Chlortetracycline hydrochloride",
        
      },
      {
        code: 7738004,
        display: "HLA-B49 antigen",
        
      },
      {
        code: 7761002,
        display: "^111^Silver",
        
      },
      {
        code: 7770004,
        display: "^89^Strontium",
        
      },
      {
        code: 7774008,
        display: "Neo-b-vitamin A>1<",
        
      },
      {
        code: 7779003,
        display: "^103^Ruthenium",
        
      },
      {
        code: 7785005,
        display: "Sphingomyelin phosphodiesterase D",
        
      },
      {
        code: 7790008,
        display: "1-Monoacylglycerol",
        
      },
      {
        code: 7791007,
        display: "Soy protein",
        
      },
      {
        code: 7795003,
        display: "Oxalate oxidase",
        
      },
      {
        code: 7801007,
        display: "Tetrahydroxypteridine cycloisomerase",
        
      },
      {
        code: 7816005,
        display: "Antazoline hydrochloride",
        
      },
      {
        code: 7834009,
        display: "Acetyl digitoxin",
        
      },
      {
        code: 7846008,
        display: "Sphingomyelin phosphodiesterase",
        
      },
      {
        code: 7848009,
        display: "1-Phosphatidylinositol phosphodiesterase",
        
      },
      {
        code: 7868003,
        display: "beta-Cyclopiazonate dehydrogenase",
        
      },
      {
        code: 7879008,
        display: "^218^Radon",
        
      },
      {
        code: 7900007,
        display: "Hemoglobin Presbyterian",
        
      },
      {
        code: 7904003,
        display: "Deanol",
        
      },
      {
        code: 7909008,
        display: "Arginine carboxypeptidase",
        
      },
      {
        code: 7924004,
        display: "Diflorasone",
        
      },
      {
        code: 7938006,
        display: "D-Arabinitol dehydrogenase",
        
      },
      {
        code: 7945006,
        display: "Orsellinate-depside hydrolase",
        
      },
      {
        code: 7948008,
        display: "Reed-Sternberg antibody",
        
      },
      {
        code: 7953003,
        display: "Thioneb",
        
      },
      {
        code: 7957002,
        display: "Phosphatidate cytidylyltransferase",
        
      },
      {
        code: 7961008,
        display: "Hemoglobin F-Shanghai",
        
      },
      {
        code: 7970006,
        display: "Allograft",
        
      },
      {
        code: 7974002,
        display: "Blood group antibody Dalman",
        
      },
      {
        code: 7975001,
        display: "Amiphenazole",
        
      },
      {
        code: 7979007,
        display: "3'-Phosphoadenylylsulfate 3'-phosphatase",
        
      },
      {
        code: 7983007,
        display: "Sodium rhodanide",
        
      },
      {
        code: 7985000,
        display: "Sulfur isotope",
        
      },
      {
        code: 7997004,
        display: "Butyl mercaptan",
        
      },
      {
        code: 8000007,
        display: "Cucurbitacin delta^23^-reductase",
        
      },
      {
        code: 8002004,
        display: "Blood group antibody Fleming",
        
      },
      {
        code: 8025003,
        display: "Blood group antibody Gibson",
        
      },
      {
        code: 8029009,
        display: "Allyl glycidyl ether",
        
      },
      {
        code: 8030004,
        display: "PEG - Polyethylene glycol",
        
      },
      {
        code: 8035009,
        display: "Cholestenol delta-isomerase",
        
      },
      {
        code: 8048008,
        display: "Blood group antigen Th",
        
      },
      {
        code: 8054009,
        display: "Orotate reductase (NADPH)",
        
      },
      {
        code: 8055005,
        display: "Galactoside acetyltransferase",
        
      },
      {
        code: 8105004,
        display: "Hemoglobin Leiden",
        
      },
      {
        code: 8108002,
        display: "Undecaprenyl-diphosphatase",
        
      },
      {
        code: 8123007,
        display: "Blood group antibody Schuppenhauer",
        
      },
      {
        code: 8132009,
        display: "Magnesium acetylsalicylate",
        
      },
      {
        code: 8143001,
        display: "Diosmin",
        
      },
      {
        code: 8153000,
        display: "Homoproline",
        
      },
      {
        code: 8156008,
        display: "Immunoglobulin, Fd fragment",
        
      },
      {
        code: 8164002,
        display: "Cluster of differentiation antigen 67",
        
      },
      {
        code: 8168004,
        display: "Uracil-5-carboxylate decarboxylase",
        
      },
      {
        code: 8179009,
        display: "Cevadilline",
        
      },
      {
        code: 8184003,
        display: "Convallamarogenin",
        
      },
      {
        code: 8190004,
        display: "Diaminopimelate epimerase",
        
      },
      {
        code: 8202008,
        display: "^43^Potassium",
        
      },
      {
        code: 8203003,
        display: "Human menopausal gonadotropin",
        
      },
      {
        code: 8204009,
        display: "Polyester",
        
      },
      {
        code: 8222007,
        display: "Coagulation factor II Padua variant",
        
      },
      {
        code: 8227001,
        display: "^106^Ruthenium",
        
      },
      {
        code: 8230008,
        display: "Streptococcal cysteine proteinase",
        
      },
      {
        code: 8237006,
        display: "Strobane",
        
      },
      {
        code: 8252004,
        display: "Chlorothiazide sodium",
        
      },
      {
        code: 8257005,
        display: "Abnormal hemoglobin",
        
      },
      {
        code: 8261004,
        display: "Potassium thiosulfate",
        
      },
      {
        code: 8268005,
        display: "Blood group antibody Hildebrandt",
        
      },
      {
        code: 8270001,
        display: "tRNA adenylyltransferase",
        
      },
      {
        code: 8275006,
        display: "Methionine-S-oxide reductase",
        
      },
      {
        code: 8295000,
        display: "Uromucoid protein",
        
      },
      {
        code: 8300003,
        display: "Cyclohexanol",
        
      },
      {
        code: 8310007,
        display: "Hemoglobin Madrid",
        
      },
      {
        code: 8313009,
        display: "RNA-directed DNA polymerase",
        
      },
      {
        code: 8340009,
        display: "Procollagen-lysine,2-oxoglutarate 5-dioxygenase",
        
      },
      {
        code: 8342001,
        display: "Brilliant cresyl blue",
        
      },
      {
        code: 8343006,
        display: "Blood group antibody Re^a^",
        
      },
      {
        code: 8354001,
        display: "Manganese ethylene bis-dithiocarbamate",
        
      },
      {
        code: 8355000,
        display: "Hafnium isotope",
        
      },
      {
        code: 8362009,
        display: "Anti c",
        
      },
      {
        code: 8365006,
        display: "Oil of pennyroyal-European",
        
      },
      {
        code: 8368008,
        display: "Xylan 1,44-beta-xylosidase",
        
      },
      {
        code: 8376005,
        display: "Duffy blood group antibody",
        
      },
      {
        code: 8385005,
        display: "Acid alpha-glucosidase",
        
      },
      {
        code: 8397006,
        display: "Nicotine resin complex",
        
      },
      {
        code: 8406008,
        display: "Nitroethane oxidase",
        
      },
      {
        code: 8429000,
        display: "Brilliant orange",
        
      },
      {
        code: 8450009,
        display: "Lemon grass oil",
        
      },
      {
        code: 8452001,
        display: "Blood group antigen Sisson",
        
      },
      {
        code: 8456003,
        display: "Methyl ethyl ketone peroxide",
        
      },
      {
        code: 8460000,
        display: "Blood group antibody Vg^a^",
        
      },
      {
        code: 8473001,
        display: "Homocysteine methyltransferase",
        
      },
      {
        code: 8474007,
        display: "Lead oleate",
        
      },
      {
        code: 8484008,
        display: "Blood group antigen Mur",
        
      },
      {
        code: 8485009,
        display: "Oncogene protein P210, BCR-ABL",
        
      },
      {
        code: 8486005,
        display: "HLA-DRw15 antigen",
        
      },
      {
        code: 8487001,
        display: "^48^Vanadium",
        
      },
      {
        code: 8491006,
        display: "Complement inhibitor",
        
      },
      {
        code: 8492004,
        display: "Allantoicase",
        
      },
      {
        code: 8498000,
        display: "Short neurotoxin venom",
        
      },
      {
        code: 8507001,
        display: "Cyclohexane",
        
      },
      {
        code: 8514004,
        display: "Ornithine",
        
      },
      {
        code: 8520003,
        display: "Hemoglobin Machida",
        
      },
      {
        code: 8525008,
        display: "^183^Osmium",
        
      },
      {
        code: 8529002,
        display: "Urinary protein of low molecular weight",
        
      },
      {
        code: 8534003,
        display: "^110^Tin",
        
      },
      {
        code: 8537005,
        display: "Solution",
        
      },
      {
        code: 8578007,
        display: "Potassium cyanate",
        
      },
      {
        code: 8591008,
        display: "Dichlorodifluoromethane",
        
      },
      {
        code: 8612007,
        display: "Tumor necrosis factor",
        
      },
      {
        code: 8620009,
        display: "Oncogene protein TCL6",
        
      },
      {
        code: 8631001,
        display: "Potassium chloride",
        
      },
      {
        code: 8653004,
        display: "Rubijervine",
        
      },
      {
        code: 8660005,
        display: "Complement component C3c",
        
      },
      {
        code: 8687009,
        display: "Gum arabic",
        
      },
      {
        code: 8689007,
        display: "Kanamycin sulfate",
        
      },
      {
        code: 8701002,
        display: "Sulfachlorpyridazine",
        
      },
      {
        code: 8705006,
        display: "4-Hydroxybenzoate decarboxylase",
        
      },
      {
        code: 8731008,
        display: "Blood group antibody Austin",
        
      },
      {
        code: 8740007,
        display: "C3(H20)Bb",
        
      },
      {
        code: 8761000,
        display: "Adenylylsulfate kinase",
        
      },
      {
        code: 8767001,
        display: "Santonin",
        
      },
      {
        code: 8785008,
        display: "Chlorine dioxide",
        
      },
      {
        code: 8786009,
        display: "Blood group antigen Wd^a^",
        
      },
      {
        code: 8795001,
        display: "Hb F - Hemoglobin F",
        
      },
      {
        code: 8817004,
        display: "LH receptor site",
        
      },
      {
        code: 8818009,
        display: "Blood group antibody Tri W",
        
      },
      {
        code: 8822004,
        display: "Linoleic acid",
        
      },
      {
        code: 8830003,
        display: "Nitrate reductase (NAD(P)H)",
        
      },
      {
        code: 8836009,
        display: "Gallocyanine",
        
      },
      {
        code: 8844009,
        display: "Hydroxybutyrate-dimer hydrolase",
        
      },
      {
        code: 8858006,
        display: "Strontium nitrate Sr^85^",
        
      },
      {
        code: 8865003,
        display: "Graphite",
        
      },
      {
        code: 8878003,
        display: "Blood group antigen Evelyn",
        
      },
      {
        code: 8882001,
        display: "3-Hydroxybenzoate 6-monooxygenase",
        
      },
      {
        code: 8886003,
        display: "Flecainide acetate",
        
      },
      {
        code: 8908003,
        display: "Blood group antibody I^T^",
        
      },
      {
        code: 8914005,
        display: "Endolymph",
        
      },
      {
        code: 8919000,
        display: "Biotin",
        
      },
      {
        code: 8926000,
        display: "Azur B",
        
      },
      {
        code: 8945009,
        display: "Phosphopantothenate-cysteine ligase",
        
      },
      {
        code: 8953001,
        display: "2,3-Dihydroxyindole 2,3-dioxygenase",
        
      },
      {
        code: 8963009,
        display: "N-Acetylmuramoyl-L-alanine amidase",
        
      },
      {
        code: 8969008,
        display: "Bulbourethral secretions",
        
      },
      {
        code: 8977007,
        display: "Blood group antibody Tarplee",
        
      },
      {
        code: 8982000,
        display: "Oleate hydratase",
        
      },
      {
        code: 8987006,
        display: "Cycle-phase specific agent",
        
      },
      {
        code: 8991001,
        display: "Ribulokinase",
        
      },
      {
        code: 9010006,
        display: "Methyl blue",
        
      },
      {
        code: 9013008,
        display: "Dephospho-CoA kinase",
        
      },
      {
        code: 9021002,
        display: "Carbaryl",
        
      },
      {
        code: 9024005,
        display: "G6PD - Glucose-6-phosphate dehydrogenase",
        
      },
      {
        code: 9045003,
        display: "Radon radioisotope",
        
      },
      {
        code: 9052001,
        display: "Allspice oil",
        
      },
      {
        code: 9054000,
        display: "Human leukocyte antigen B15",
        
      },
      {
        code: 9103003,
        display: "Retinol fatty-acyltransferase",
        
      },
      {
        code: 9110009,
        display: "Mercuric compound",
        
      },
      {
        code: 9125009,
        display: "Sempervirine",
        
      },
      {
        code: 9159008,
        display: "Triacetate-lactonase",
        
      },
      {
        code: 9172009,
        display: "Blood group antibody Alda",
        
      },
      {
        code: 9174005,
        display: "Fibrinogen Poitiers",
        
      },
      {
        code: 9183000,
        display: "beta-N-Acetylgalactosaminidase",
        
      },
      {
        code: 9189001,
        display: "CMP-N-acetylneuraminate-lactosylceramide alpha-2,3-sialyltransferase",
        
      },
      {
        code: 9195000,
        display: "Immunoglobulin gene INV allotype",
        
      },
      {
        code: 9197008,
        display: "Apiose reductase",
        
      },
      {
        code: 9205004,
        display: "Hemoglobin Tarrant",
        
      },
      {
        code: 9220005,
        display: "Plant phenol oil",
        
      },
      {
        code: 9223007,
        display: "Borneol dehydrogenase",
        
      },
      {
        code: 9234005,
        display: "Chlorobutanol",
        
      },
      {
        code: 9246009,
        display: "^118^Tellurium",
        
      },
      {
        code: 9253000,
        display: "HLA-DRw16 antigen",
        
      },
      {
        code: 9270008,
        display: "Catecholamine receptor",
        
      },
      {
        code: 9271007,
        display: "Fibrinogen Pontoise",
        
      },
      {
        code: 169008,
        display: "Hypothalamic releasing factor preparation",
        
      },
      {
        code: 211009,
        display: "Norethandrolone preparation",
        
      },
      {
        code: 302007,
        display: "Spiramycin",
        
      },
      {
        code: 439007,
        display: "Therapeutic radiopharmaceuticals",
        
      },
      {
        code: 449005,
        display: "Procaine penicillin",
        
      },
      {
        code: 544002,
        display: "Melphalan",
        
      },
      {
        code: 669007,
        display: "Vaccinia virus vaccine",
        
      },
      {
        code: 716000,
        display: "Hematological agents",
        
      },
      {
        code: 796001,
        display: "Digoxin product",
        
      },
      {
        code: 847003,
        display: "D-thyroxine preparation",
        
      },
      {
        code: 902003,
        display: "Experimental drug",
        
      },
      {
        code: 922004,
        display: "Pralidoxime",
        
      },
      {
        code: 1039008,
        display: "6MP - Mercaptopurine",
        
      },
      {
        code: 1148001,
        display: "Ticarcillin",
        
      },
      {
        code: 1182007,
        display: "Hypotensive agent",
        
      },
      {
        code: 1206000,
        display: "Alpha 2 adrenergic blocking agent",
        
      },
      {
        code: 1222004,
        display: "Metronidazole",
        
      },
      {
        code: 1389007,
        display: "Beclometasone",
        
      },
      {
        code: 1434005,
        display: "Calamine",
        
      },
      {
        code: 1528001,
        display: "Folinic acid product",
        
      },
      {
        code: 1552008,
        display: "Saluretic drug",
        
      },
      {
        code: 1594006,
        display: "Azatadine",
        
      },
      {
        code: 1613009,
        display: "Dexbrompheniramine maleate",
        
      },
      {
        code: 1756009,
        display: "Antipruritic topical anesthetic",
        
      },
      {
        code: 1758005,
        display: "Motilin preparation",
        
      },
      {
        code: 1842003,
        display: "Diphemanil",
        
      },
      {
        code: 1878008,
        display: "Hexachlorophane product",
        
      },
      {
        code: 1887004,
        display: "Permethrin",
        
      },
      {
        code: 1982006,
        display: "Bacitracin ophthalmic preparation",
        
      },
      {
        code: 2016004,
        display: "Dextromethorphan",
        
      },
      {
        code: 2037007,
        display: "Otic anti-inflammatory preparation",
        
      },
      {
        code: 2183004,
        display: "Tetryzoline",
        
      },
      {
        code: 2190009,
        display: "Benzhexol",
        
      },
      {
        code: 2497003,
        display: "Hexetidine",
        
      },
      {
        code: 2571007,
        display: "Busulfan",
        
      },
      {
        code: 2596005,
        display: "Lincomycin",
        
      },
      {
        code: 2679000,
        display: "Oxandrolone",
        
      },
      {
        code: 2944000,
        display: "Depilatory agent",
        
      },
      {
        code: 2949005,
        display: "Diagnostic agents",
        
      },
      {
        code: 3037004,
        display: "Flumethasone preparation",
        
      },
      {
        code: 3046005,
        display: "Enalapril maleate",
        
      },
      {
        code: 3127006,
        display: "5FU - Fluorouracil",
        
      },
      {
        code: 3221003,
        display: "Ringer solution",
        
      },
      {
        code: 3334000,
        display: "Cefotaxime",
        
      },
      {
        code: 3361000,
        display: "Anti-heparin agent",
        
      },
      {
        code: 3526007,
        display: "Rabies vaccine, human",
        
      },
      {
        code: 3593009,
        display: "Otic anti-infective preparation",
        
      },
      {
        code: 3814009,
        display: "Propylthiouracil product",
        
      },
      {
        code: 3822002,
        display: "Suxamethonium",
        
      },
      {
        code: 4126008,
        display: "Fluprednisolone preparation",
        
      },
      {
        code: 4194004,
        display: "Mazindol",
        
      },
      {
        code: 4219002,
        display: "Penicillamine",
        
      },
      {
        code: 4220008,
        display: "Tolazoline",
        
      },
      {
        code: 4382004,
        display: "Centrally acting antihypertensive agent",
        
      },
      {
        code: 4704002,
        display: "Iothiouracil",
        
      },
      {
        code: 4741001,
        display: "Sodium folate preparation",
        
      },
      {
        code: 4753002,
        display: "Triamcinolone dental paste",
        
      },
      {
        code: 4865009,
        display: "Prolactin releasing factor preparation",
        
      },
      {
        code: 4937008,
        display: "Cefaclor",
        
      },
      {
        code: 5067008,
        display: "Antithyroid drugs",
        
      },
      {
        code: 5465006,
        display: "Propitocaine hydrochloride",
        
      },
      {
        code: 5478006,
        display: "Trifluperidol",
        
      },
      {
        code: 5487002,
        display: "Therapeutic agent",
        
      },
      {
        code: 5606003,
        display: "Dexamethasone nasal preparation",
        
      },
      {
        code: 5720001,
        display: "Latrodectus mactans antivenin",
        
      },
      {
        code: 5737008,
        display: "Demeclocycline",
        
      },
      {
        code: 5776009,
        display: "Anesthetic",
        
      },
      {
        code: 5786005,
        display: "Chlorothiazide",
        
      },
      {
        code: 5797005,
        display: "Clotrimazole",
        
      },
      {
        code: 5924003,
        display: "Isosorbide dinitrate",
        
      },
      {
        code: 5975000,
        display: "Niclosamide",
        
      },
      {
        code: 6028009,
        display: "Triamcinolone preparation",
        
      },
      {
        code: 6067003,
        display: "Orciprenaline",
        
      },
      {
        code: 6071000,
        display: "Coal tar preparation",
        
      },
      {
        code: 6102009,
        display: "Baclofen",
        
      },
      {
        code: 6116004,
        display: "Oxymetholone preparation",
        
      },
      {
        code: 6122008,
        display: "Class Ia antiarrhythmic drug",
        
      },
      {
        code: 6232005,
        display: "Naphazoline",
        
      },
      {
        code: 6247001,
        display: "Folic acid preparation",
        
      },
      {
        code: 6259002,
        display: "Hydrogen peroxide solution 3%",
        
      },
      {
        code: 6369005,
        display: "Penicillin -class of antibiotic-",
        
      },
      {
        code: 6425004,
        display: "Antihistamine",
        
      },
      {
        code: 6517004,
        display: "Butyrophenone derivative antipsychotic agent",
        
      },
      {
        code: 6526001,
        display: "Nalorphine",
        
      },
      {
        code: 6625006,
        display: "Zinc sulfate",
        
      },
      {
        code: 6652001,
        display: "Calcium pantothenate preparation",
        
      },
      {
        code: 6716006,
        display: "Abortient agent",
        
      },
      {
        code: 6960003,
        display: "Polymyxin B",
        
      },
      {
        code: 6985007,
        display: "Opium preparation",
        
      },
      {
        code: 7092007,
        display: "Metoprolol",
        
      },
      {
        code: 7140000,
        display: "Radiographic contrast media",
        
      },
      {
        code: 7168001,
        display: "Magnesium carbonate",
        
      },
      {
        code: 7230005,
        display: "Brucella vaccine",
        
      },
      {
        code: 7235000,
        display: "Ethylenediamine derivative antihistamine",
        
      },
      {
        code: 7292004,
        display: "Indocyanine green",
        
      },
      {
        code: 7336002,
        display: "Trazodone",
        
      },
      {
        code: 7561000,
        display: "Dexamethasone preparation",
        
      },
      {
        code: 7577004,
        display: "Ciprofloxacin",
        
      },
      {
        code: 7624002,
        display: "Sodium perborate product",
        
      },
      {
        code: 7836006,
        display: "Expectorants",
        
      },
      {
        code: 7947003,
        display: "Acetylsalicylic acid",
        
      },
      {
        code: 7959004,
        display: "Teniposide",
        
      },
      {
        code: 7982002,
        display: "Phenmetrazine hydrochloride",
        
      },
      {
        code: 8028001,
        display: "Butacaine",
        
      },
      {
        code: 8109005,
        display: "Alimemazine",
        
      },
      {
        code: 8163008,
        display: "Nitroprusside",
        
      },
      {
        code: 8348002,
        display: "Cyclopentolate",
        
      },
      {
        code: 8372007,
        display: "Promethazine",
        
      },
      {
        code: 8416000,
        display: "Dicloxacillin",
        
      },
      {
        code: 8571001,
        display: "Vasoconstrictor",
        
      },
      {
        code: 8658008,
        display: "Human serum albumin preparation",
        
      },
      {
        code: 8661009,
        display: "Replacement preparation",
        
      },
      {
        code: 8692006,
        display: "Metamfetamine",
        
      },
      {
        code: 8696009,
        display: "Antispasmodic",
        
      },
      {
        code: 9190005,
        display: "Tropicamide",
        
      },
      {
        code: 9268004,
        display: "Butabarbitone",
        
      },
      {
        code: 9307009,
        display: "Animal serum globulin preparation",
        
      },
      {
        code: 9500005,
        display: "MAOI - Phenelzine",
        
      },
      {
        code: 9542007,
        display: "Antihepatitis B immunoglobulin",
        
      },
      {
        code: 9690006,
        display: "Nikethamide",
        
      },
      {
        code: 9745007,
        display: "Sucrose product",
        
      },
      {
        code: 9778000,
        display: "Cytomegalovirus immune globulin",
        
      },
      {
        code: 9944001,
        display: "Chlorphenamine",
        
      },
      {
        code: 10099000,
        display: "Ketoprofen",
        
      },
      {
        code: 10135005,
        display: "Cinchona alkaloid",
        
      },
      {
        code: 10243007,
        display: "Benzoic and salicylic acid ointment",
        
      },
      {
        code: 10312003,
        display: "Prednisone preparation",
        
      },
      {
        code: 10332002,
        display: "Vaccine - bacterin - toxoid",
        
      },
      {
        code: 10355004,
        display: "Injectable vitamin preparation",
        
      },
      {
        code: 10356003,
        display: "Undecylenic acid and undecylenate salt",
        
      },
      {
        code: 10368007,
        display: "Colloidal oatmeal powder",
        
      },
      {
        code: 10422008,
        display: "Nitropentaerythrol",
        
      },
      {
        code: 10504007,
        display: "Doxycycline",
        
      },
      {
        code: 10515002,
        display: "Lututrin preparation",
        
      },
      {
        code: 10555000,
        display: "Tocainide",
        
      },
      {
        code: 10632007,
        display: "Multivitamin preparation",
        
      },
      {
        code: 10668002,
        display: "Skin anti-infective",
        
      },
      {
        code: 10712001,
        display: "Glucagon product",
        
      },
      {
        code: 10756001,
        display: "Haloperidol",
        
      },
      {
        code: 10784006,
        display: "Anti-psychotic agent",
        
      },
      {
        code: 11185009,
        display: "Autogenous vaccine - autogenous bacterin",
        
      },
      {
        code: 11260008,
        display: "Ophthalmic anti-infective preparation",
        
      },
      {
        code: 11402001,
        display: "Medicinal enzyme",
        
      },
      {
        code: 11430001,
        display: "Tetracyclic antidepressant drug",
        
      },
      {
        code: 11563006,
        display: "Vitamin D preparation",
        
      },
      {
        code: 11719000,
        display: "Cetylpyridinium",
        
      },
      {
        code: 11777007,
        display: "Ophthalmic antibiotic",
        
      },
      {
        code: 11783005,
        display: "Stool softener",
        
      },
      {
        code: 11796006,
        display: "Methysergide",
        
      },
      {
        code: 11841005,
        display: "Doxepin",
        
      },
      {
        code: 11847009,
        display: "Naproxen",
        
      },
      {
        code: 11866009,
        display: "Plague vaccine",
        
      },
      {
        code: 11959009,
        display: "Procainamide",
        
      },
      {
        code: 12096000,
        display: "Nystatin",
        
      },
      {
        code: 12236006,
        display: "Pancreatin product",
        
      },
      {
        code: 12289007,
        display: "Whole blood product",
        
      },
      {
        code: 12335007,
        display: "Diatrizoate",
        
      },
      {
        code: 12369008,
        display: "Oxytocin product",
        
      },
      {
        code: 12425002,
        display: "Human white blood cell product",
        
      },
      {
        code: 12436009,
        display: "Vinblastine",
        
      },
      {
        code: 12495006,
        display: "Magnesium citrate",
        
      },
      {
        code: 12512008,
        display: "Triamterene",
        
      },
      {
        code: 12559001,
        display: "Emetine",
        
      },
      {
        code: 12657005,
        display: "Fludrocortisone acetate preparation",
        
      },
      {
        code: 12839006,
        display: "Estradiol product",
        
      },
      {
        code: 12968008,
        display: "Vitamin products",
        
      },
      {
        code: 13132007,
        display: "Dextran product",
        
      },
      {
        code: 13154009,
        display: "Chlormethine",
        
      },
      {
        code: 13178004,
        display: "Rickettsial vaccine",
        
      },
      {
        code: 13252002,
        display: "Salsalate",
        
      },
      {
        code: 13414000,
        display: "Cefadroxil",
        
      },
      {
        code: 13432000,
        display: "Nortriptyline",
        
      },
      {
        code: 13512003,
        display: "Minocycline",
        
      },
      {
        code: 13525006,
        display: "Acetylcholine preparation",
        
      },
      {
        code: 13565005,
        display: "Bisacodyl",
        
      },
      {
        code: 13592004,
        display: "Pyrazinamide",
        
      },
      {
        code: 13664004,
        display: "BAL - British Anti-Lewisite",
        
      },
      {
        code: 13790009,
        display: "Oral form iron preparation",
        
      },
      {
        code: 13800009,
        display: "Naftifine",
        
      },
      {
        code: 13813003,
        display: "Biotin preparation",
        
      },
      {
        code: 13929005,
        display: "Spironolactone",
        
      },
      {
        code: 13936006,
        display: "Butorphanol",
        
      },
      {
        code: 13965000,
        display: "Valproic acid",
        
      },
      {
        code: 14054003,
        display: "Vitamin B complex preps",
        
      },
      {
        code: 14103001,
        display: "Opiate antagonist",
        
      },
      {
        code: 14170004,
        display: "Capreomycin",
        
      },
      {
        code: 14542005,
        display: "Caffeine and sodium benzoate injection solution vial",
        
      },
      {
        code: 14601000,
        display: "Anticholinergic agent",
        
      },
      {
        code: 14706000,
        display: "Pheneticillin",
        
      },
      {
        code: 14728000,
        display: "Chloroquine",
        
      },
      {
        code: 14745005,
        display: "Hepatitis A vaccine",
        
      },
      {
        code: 14814001,
        display: "Trimethobenzamide",
        
      },
      {
        code: 14816004,
        display: "Cocaine product",
        
      },
      {
        code: 15117003,
        display: "Coagulant",
        
      },
      {
        code: 15222008,
        display: "Enalapril",
        
      },
      {
        code: 15375005,
        display: "Phenanthrene derivative",
        
      },
      {
        code: 15383004,
        display: "Levodopa",
        
      },
      {
        code: 15389000,
        display: "Hydantoin derivative anticonvulsant",
        
      },
      {
        code: 15432003,
        display: "Ethinylestradiol",
        
      },
      {
        code: 15772006,
        display: "Beta 1 blocking product",
        
      },
      {
        code: 15857002,
        display: "Ethanolamine derivative antihistamine",
        
      },
      {
        code: 16031005,
        display: "Dexchlorpheniramine",
        
      },
      {
        code: 16037009,
        display: "Terfenadine product",
        
      },
      {
        code: 16047007,
        display: "Benzodiazepine",
        
      },
      {
        code: 16131008,
        display: "Animal antiserum",
        
      },
      {
        code: 16403005,
        display: "Non-steroidal anti-inflammatory agent",
        
      },
      {
        code: 16602005,
        display: "Hydrocortisone preparation",
        
      },
      {
        code: 16787005,
        display: "Streptococcus equisimilis - suis antiserum",
        
      },
      {
        code: 16791000,
        display: "Cefradine",
        
      },
      {
        code: 16832004,
        display: "Conjugated estrogens",
        
      },
      {
        code: 16858004,
        display: "Urea",
        
      },
      {
        code: 16867004,
        display: "Sulfathiazole",
        
      },
      {
        code: 16970001,
        display: "Proguanil",
        
      },
      {
        code: 16977003,
        display: "Lithium carbonate",
        
      },
      {
        code: 17016006,
        display: "Animal gamma globulin",
        
      },
      {
        code: 17055007,
        display: "Systemic acidifier",
        
      },
      {
        code: 17308007,
        display: "Dapsone",
        
      },
      {
        code: 17386008,
        display: "Anti-infective agent",
        
      },
      {
        code: 17502009,
        display: "Gallamine triethiodide",
        
      },
      {
        code: 17554004,
        display: "Paramethasone preparation",
        
      },
      {
        code: 17558001,
        display: "Corn oil",
        
      },
      {
        code: 17600005,
        display: "Diagnostic radiopharmaceuticals",
        
      },
      {
        code: 17805003,
        display: "Lithium citrate",
        
      },
      {
        code: 17859000,
        display: "Polyvalent crotalidae antivenin",
        
      },
      {
        code: 17893001,
        display: "Skeletal muscle relaxant",
        
      },
      {
        code: 18002004,
        display: "Auranofin",
        
      },
      {
        code: 18125000,
        display: "Fluocinonide",
        
      },
      {
        code: 18335001,
        display: "Aureolic acid",
        
      },
      {
        code: 18340009,
        display: "Oxychlorosene",
        
      },
      {
        code: 18381001,
        display: "Prindolol",
        
      },
      {
        code: 18511007,
        display: "Generic drug",
        
      },
      {
        code: 18548003,
        display: "Methylphenidate",
        
      },
      {
        code: 18679008,
        display: "Potassium-removing resin",
        
      },
      {
        code: 18811003,
        display: "L-asparaginase preparation",
        
      },
      {
        code: 18914005,
        display: "Hydroflumethiazide",
        
      },
      {
        code: 18952006,
        display: "Econazole",
        
      },
      {
        code: 19194001,
        display: "ddI",
        
      },
      {
        code: 19225000,
        display: "Lorazepam",
        
      },
      {
        code: 19232009,
        display: "Prilocaine",
        
      },
      {
        code: 19261005,
        display: "Sulfinpyrazone",
        
      },
      {
        code: 19315007,
        display: "Pyridoxine hydrochloride preparation",
        
      },
      {
        code: 19403009,
        display: "Flurazepam",
        
      },
      {
        code: 19405002,
        display: "Netilmicin",
        
      },
      {
        code: 19581007,
        display: "Parasympathomimetic agent",
        
      },
      {
        code: 19583005,
        display: "Diclofenamide",
        
      },
      {
        code: 19630009,
        display: "Silver sulfadiazine",
        
      },
      {
        code: 19768003,
        display: "Alkylating drugs",
        
      },
      {
        code: 19841008,
        display: "Ceftriaxone",
        
      },
      {
        code: 20091003,
        display: "Somatotropin releasing factor preparation",
        
      },
      {
        code: 20201001,
        display: "Nafoxidine",
        
      },
      {
        code: 20237006,
        display: "Dihydrotachysterol preparation",
        
      },
      {
        code: 20249007,
        display: "Progestin preparation",
        
      },
      {
        code: 20303001,
        display: "Vinblastine sulfate",
        
      },
      {
        code: 20320002,
        display: "Hydrocodone",
        
      },
      {
        code: 20577002,
        display: "HCG - Human chorionic gonadotrophin product",
        
      },
      {
        code: 20865003,
        display: "Diflunisal",
        
      },
      {
        code: 20969008,
        display: "Polyvalent snake antivenin",
        
      },
      {
        code: 21069002,
        display: "Lipotropic agent",
        
      },
      {
        code: 21159006,
        display: "Pargyline",
        
      },
      {
        code: 21451004,
        display: "Indium-113m chloride",
        
      },
      {
        code: 21691008,
        display: "Magnesium trisilicate",
        
      },
      {
        code: 21701005,
        display: "Cromoglicic acid",
        
      },
      {
        code: 21767006,
        display: "Iron dextran complex",
        
      },
      {
        code: 21788002,
        display: "Phenazopyridine hydrochloride",
        
      },
      {
        code: 21986005,
        display: "Erysipelothrix rhusiopathiae antiserum",
        
      },
      {
        code: 22091006,
        display: "Hormone preparation",
        
      },
      {
        code: 22168005,
        display: "Glycopyrronium",
        
      },
      {
        code: 22198003,
        display: "Metolazone",
        
      },
      {
        code: 22274004,
        display: "Methandriol preparation",
        
      },
      {
        code: 22474002,
        display: "Aldosterone preparation",
        
      },
      {
        code: 22587006,
        display: "Depolarizing muscle relaxant",
        
      },
      {
        code: 22657006,
        display: "Calcitonin product",
        
      },
      {
        code: 22672005,
        display: "Amfetamine group",
        
      },
      {
        code: 22696000,
        display: "Hydralazine",
        
      },
      {
        code: 22801004,
        display: "Sterile water solution",
        
      },
      {
        code: 22826008,
        display: "Ammonia detoxicant",
        
      },
      {
        code: 22969001,
        display: "Oxytetracycline",
        
      },
      {
        code: 23079006,
        display: "Vincristine",
        
      },
      {
        code: 23222006,
        display: "Antisera",
        
      },
      {
        code: 23343005,
        display: "Human platelet product",
        
      },
      {
        code: 23532003,
        display: "Phenmetrazine",
        
      },
      {
        code: 23822003,
        display: "Human plasma fraction",
        
      },
      {
        code: 23827009,
        display: "Sulfacetamide",
        
      },
      {
        code: 23838009,
        display: "Nonspecific alpha-adrenergic blocking agent",
        
      },
      {
        code: 23888001,
        display: "Cascara",
        
      },
      {
        code: 24036003,
        display: "Antianemia drug",
        
      },
      {
        code: 24450004,
        display: "Ethambutolol",
        
      },
      {
        code: 24504000,
        display: "Methylcellulose",
        
      },
      {
        code: 24866006,
        display: "Salmonella typhimurium antiserum",
        
      },
      {
        code: 24891006,
        display: "Sodium amidotrizoate",
        
      },
      {
        code: 25014009,
        display: "Tripelennamine",
        
      },
      {
        code: 25057004,
        display: "Mercurial diuretic product",
        
      },
      {
        code: 25076002,
        display: "Carisoprodol",
        
      },
      {
        code: 25085002,
        display: "Cholecystokinin preparation",
        
      },
      {
        code: 25142008,
        display: "Trilostane",
        
      },
      {
        code: 25246002,
        display: "Allopurinol",
        
      },
      {
        code: 25398003,
        display: "Ichthammol",
        
      },
      {
        code: 25419009,
        display: "Barium sulfate",
        
      },
      {
        code: 25465007,
        display: "Escherichia coli monoclonal antibody",
        
      },
      {
        code: 25673006,
        display: "Omeprazole",
        
      },
      {
        code: 25716001,
        display: "Tetanus toxoid, human",
        
      },
      {
        code: 25849001,
        display: "SNP - Sodium nitroprusside",
        
      },
      {
        code: 25860005,
        display: "Terconazole",
        
      },
      {
        code: 25912006,
        display: "Menadiol sodium diphosphate preparation",
        
      },
      {
        code: 25995007,
        display: "Triprolidine",
        
      },
      {
        code: 26122009,
        display: "Dimetindene",
        
      },
      {
        code: 26124005,
        display: "Glipizide product",
        
      },
      {
        code: 26244009,
        display: "Antimuscarinic",
        
      },
      {
        code: 26303005,
        display: "Hexestrol preparation",
        
      },
      {
        code: 26370007,
        display: "Hemostatic agent",
        
      },
      {
        code: 26456008,
        display: "Levothyroxine sodium preparation",
        
      },
      {
        code: 26458009,
        display: "Diphenhydramine",
        
      },
      {
        code: 26462003,
        display: "Cyproheptadine",
        
      },
      {
        code: 26503009,
        display: "Deserpidine",
        
      },
      {
        code: 26523005,
        display: "Dobutamine",
        
      },
      {
        code: 26548008,
        display: "Pancreatic hormone product",
        
      },
      {
        code: 26574002,
        display: "Droperidol",
        
      },
      {
        code: 26580005,
        display: "Digestant",
        
      },
      {
        code: 26736008,
        display: "Ferrous gluconate",
        
      },
      {
        code: 26800000,
        display: "Midazolam",
        
      },
      {
        code: 26842003,
        display: "Burbot liver oil preparation",
        
      },
      {
        code: 27035007,
        display: "Heavy metal antagonist",
        
      },
      {
        code: 27085003,
        display: "Sodium polystyrene sulphonate",
        
      },
      {
        code: 27196008,
        display: "Bupivacaine",
        
      },
      {
        code: 27242001,
        display: "Methylprednisolone preparation",
        
      },
      {
        code: 27479000,
        display: "AZT - Azidothymidine",
        
      },
      {
        code: 27518004,
        display: "Parathyroid hormone",
        
      },
      {
        code: 27548001,
        display: "LA - Local anesthetic drug",
        
      },
      {
        code: 27566006,
        display: "Drug vehicle preservative",
        
      },
      {
        code: 27638005,
        display: "T-PA - tissue-type plasminogen activator",
        
      },
      {
        code: 27658006,
        display: "Amoxicilline",
        
      },
      {
        code: 27707001,
        display: "Medroxyprogesterone acetate preparation",
        
      },
      {
        code: 27754002,
        display: "Pyrazinobutazone",
        
      },
      {
        code: 27867009,
        display: "Antineoplastic",
        
      },
      {
        code: 28028002,
        display: "Synthetic hormone preparation",
        
      },
      {
        code: 28149003,
        display: "Pentostatin",
        
      },
      {
        code: 28235004,
        display: "Doxapram",
        
      },
      {
        code: 28240007,
        display: "Eye cosmetic",
        
      },
      {
        code: 28410007,
        display: "alpha-Carboxypenicillin",
        
      },
      {
        code: 28415002,
        display: "Methscopolamine",
        
      },
      {
        code: 28426008,
        display: "Fluocinolone",
        
      },
      {
        code: 28506006,
        display: "Flucytosine",
        
      },
      {
        code: 28748001,
        display: "Chloral hydrate",
        
      },
      {
        code: 28841002,
        display: "Anhydrohydroxyprogesterone",
        
      },
      {
        code: 28906000,
        display: "Percoid liver oil preparation",
        
      },
      {
        code: 29051009,
        display: "Loop diuretic product",
        
      },
      {
        code: 29058003,
        display: "Halcinonide",
        
      },
      {
        code: 29089004,
        display: "Dibromomannitol",
        
      },
      {
        code: 29121001,
        display: "Mersalyl",
        
      },
      {
        code: 29129004,
        display: "Oxymetazoline",
        
      },
      {
        code: 29156002,
        display: "Mechlorethamine",
        
      },
      {
        code: 29175007,
        display: "Rifampicin product",
        
      },
      {
        code: 29237004,
        display: "Arachnida antivenin",
        
      },
      {
        code: 29439004,
        display: "Captopril",
        
      },
      {
        code: 29620001,
        display: "beta-Tocopherol preparation",
        
      },
      {
        code: 29840005,
        display: "Amoxapine",
        
      },
      {
        code: 29877002,
        display: "MAOI - Isocarboxazid",
        
      },
      {
        code: 29883004,
        display: "Class IV antiarrhythmic",
        
      },
      {
        code: 29896003,
        display: "Betamethasone",
        
      },
      {
        code: 29987004,
        display: "Vitamins A and D preparation",
        
      },
      {
        code: 30010009,
        display: "Cyanocobalamin product",
        
      },
      {
        code: 30125007,
        display: "Senna product",
        
      },
      {
        code: 30306003,
        display: "Vitamin B1 preparation",
        
      },
      {
        code: 30317002,
        display: "Cisapride",
        
      },
      {
        code: 30427009,
        display: "Erythromycin product",
        
      },
      {
        code: 30466001,
        display: "Chloramiphene",
        
      },
      {
        code: 30492008,
        display: "Diuretic",
        
      },
      {
        code: 30666008,
        display: "Toxoid (human)",
        
      },
      {
        code: 30729008,
        display: "Iron preparation",
        
      },
      {
        code: 30761007,
        display: "Mannitol product",
        
      },
      {
        code: 30964009,
        display: "Methyprylone",
        
      },
      {
        code: 30988006,
        display: "Dienestrol preparation",
        
      },
      {
        code: 31025003,
        display: "Dibenzoxazepine derivative antipsychotic agent",
        
      },
      {
        code: 31087008,
        display: "Ampicillin",
        
      },
      {
        code: 31181006,
        display: "Injectable testosterone preparation",
        
      },
      {
        code: 31231007,
        display: "H2O2 - Hydrogen peroxide",
        
      },
      {
        code: 31305008,
        display: "Streptococcus equisimilis antiserum",
        
      },
      {
        code: 31306009,
        display: "Quinidine",
        
      },
      {
        code: 31352002,
        display: "Normal colostral whey",
        
      },
      {
        code: 31587003,
        display: "Almond oil liquid",
        
      },
      {
        code: 31684002,
        display: "Buprenorphine",
        
      },
      {
        code: 31690003,
        display: "Bethanechol",
        
      },
      {
        code: 31692006,
        display: "Pentamidine",
        
      },
      {
        code: 31716004,
        display: "Frozen plasma product, human",
        
      },
      {
        code: 31865003,
        display: "Fluconazole",
        
      },
      {
        code: 31872002,
        display: "Pramocaine",
        
      },
      {
        code: 31970009,
        display: "Nitrate vasodilator",
        
      },
      {
        code: 32249005,
        display: "Antiviral drugs",
        
      },
      {
        code: 32313007,
        display: "Enflurane",
        
      },
      {
        code: 32460003,
        display: "Beclometasone dipropionate nasal preparation",
        
      },
      {
        code: 32462006,
        display: "Melanocyte stimulating hormone releasing factor preparation",
        
      },
      {
        code: 32473004,
        display: "Spider antivenin",
        
      },
      {
        code: 32474005,
        display: "Probucol",
        
      },
      {
        code: 32583002,
        display: "Antiseborrheic drug",
        
      },
      {
        code: 32647002,
        display: "Ergotamine",
        
      },
      {
        code: 32653002,
        display: "Ergosterol preparation",
        
      },
      {
        code: 32792001,
        display: "Trimethoprim",
        
      },
      {
        code: 32823007,
        display: "Maprotiline",
        
      },
      {
        code: 32841004,
        display: "NaCl - Sodium chloride solution",
        
      },
      {
        code: 32955006,
        display: "Domperidone",
        
      },
      {
        code: 32960005,
        display: "Thiosalicylate",
        
      },
      {
        code: 33124007,
        display: "Butamidum",
        
      },
      {
        code: 33133009,
        display: "Ophthalmic anti-inflammatory preparation",
        
      },
      {
        code: 33219003,
        display: "Tricyclic antidepressant",
        
      },
      {
        code: 33231001,
        display: "Pentobarbital",
        
      },
      {
        code: 33234009,
        display: "Var/Vac",
        
      },
      {
        code: 33236006,
        display: "Cortisone acetate preparation",
        
      },
      {
        code: 33252009,
        display: "beta-adrenoceptor blocking drug",
        
      },
      {
        code: 33378002,
        display: "Desipramine",
        
      },
      {
        code: 33484000,
        display: "Proprietary drug",
        
      },
      {
        code: 33588000,
        display: "Thioridazine",
        
      },
      {
        code: 33589008,
        display: "Cardiac glycoside",
        
      },
      {
        code: 33664007,
        display: "Acetazolamide",
        
      },
      {
        code: 33675006,
        display: "Carbachol",
        
      },
      {
        code: 33682005,
        display: "Mydriatic",
        
      },
      {
        code: 33815001,
        display: "Streptococcus suis antiserum",
        
      },
      {
        code: 34012005,
        display: "Sulfonylurea product",
        
      },
      {
        code: 34217006,
        display: "Oxyquinoline",
        
      },
      {
        code: 34364009,
        display: "Mefenamic acid",
        
      },
      {
        code: 34393009,
        display: "Tolazamide",
        
      },
      {
        code: 34462007,
        display: "Natamycin",
        
      },
      {
        code: 34598001,
        display: "Immunobiologic agent available from the Centers for Disease Control and Prevention",
        
      },
      {
        code: 34599009,
        display: "Thyroglobulin preparation",
        
      },
      {
        code: 34689006,
        display: "Hepatitis B vaccine",
        
      },
      {
        code: 34693000,
        display: "Zalcitabine",
        
      },
      {
        code: 34696008,
        display: "Sodium ascorbate preparation",
        
      },
      {
        code: 34731007,
        display: "Carbenicillin",
        
      },
      {
        code: 34816007,
        display: "Cod liver oil",
        
      },
      {
        code: 34833000,
        display: "Hydrocortisone ophthalmic preparation",
        
      },
      {
        code: 34929006,
        display: "Benzethonium",
        
      },
      {
        code: 35035001,
        display: "Orphenadrine",
        
      },
      {
        code: 35063004,
        display: "Ribavirin",
        
      },
      {
        code: 35097006,
        display: "Flea antigen",
        
      },
      {
        code: 35282000,
        display: "Gemfibrozil",
        
      },
      {
        code: 35300007,
        display: "Daunorubicin",
        
      },
      {
        code: 35324004,
        display: "Paraldehyde product",
        
      },
      {
        code: 35392005,
        display: "Calcium-removing resin",
        
      },
      {
        code: 35476001,
        display: "Silver nitrate product",
        
      },
      {
        code: 35531004,
        display: "Hydrocortamate preparation",
        
      },
      {
        code: 35736007,
        display: "Cholera vaccines",
        
      },
      {
        code: 35768004,
        display: "Oxybutynin",
        
      },
      {
        code: 35792007,
        display: "Peritoneal dialysis solution",
        
      },
      {
        code: 35967000,
        display: "Medazepam",
        
      },
      {
        code: 35983000,
        display: "Cellular blood product, human",
        
      },
      {
        code: 36068003,
        display: "Pyrantel",
        
      },
      {
        code: 36113004,
        display: "Imipramine",
        
      },
      {
        code: 36168000,
        display: "Anti-infective nasal preparations",
        
      },
      {
        code: 36218003,
        display: "Thiethylperazine",
        
      },
      {
        code: 36236003,
        display: "Antidepressant",
        
      },
      {
        code: 36391008,
        display: "Primaquine",
        
      },
      {
        code: 36537006,
        display: "Ambenonium",
        
      },
      {
        code: 36594001,
        display: "Tiabendazole",
        
      },
      {
        code: 36621009,
        display: "Medroxyprogesterone",
        
      },
      {
        code: 36642006,
        display: "Propantheline",
        
      },
      {
        code: 36763003,
        display: "Immune globulin IM",
        
      },
      {
        code: 36795002,
        display: "Piperazine estrone sulfate",
        
      },
      {
        code: 36893000,
        display: "Ceftazidime",
        
      },
      {
        code: 36909007,
        display: "Phenindamine",
        
      },
      {
        code: 36940000,
        display: "Thioxanthene derivative antipsychotic agent",
        
      },
      {
        code: 36944009,
        display: "Vitamin B6 preparation",
        
      },
      {
        code: 37084008,
        display: "4-quinolones",
        
      },
      {
        code: 37146000,
        display: "Typhus vaccine",
        
      },
      {
        code: 37306000,
        display: "Vidarabine",
        
      },
      {
        code: 37400007,
        display: "Magnesium sulfate",
        
      },
      {
        code: 37628007,
        display: "Cefalotin",
        
      },
      {
        code: 37643009,
        display: "Autogenous bacterin",
        
      },
      {
        code: 37773009,
        display: "Diphenylbutylpiperidine derivative antipsychotic agent",
        
      },
      {
        code: 37803001,
        display: "d-TC - Tubocurarine",
        
      },
      {
        code: 38076006,
        display: "Sodium thyroxine",
        
      },
      {
        code: 38131009,
        display: "Synthetic drug",
        
      },
      {
        code: 38166006,
        display: "Tolnaftate",
        
      },
      {
        code: 38181000,
        display: "Antineoplastic antibiotic",
        
      },
      {
        code: 38231004,
        display: "Polysaccharide iron complex",
        
      },
      {
        code: 38268001,
        display: "Propionic acid-ibuprofen",
        
      },
      {
        code: 38314008,
        display: "Isotretinoin",
        
      },
      {
        code: 38413003,
        display: "Otic dosage form product",
        
      },
      {
        code: 38578004,
        display: "Megestrol preparation",
        
      },
      {
        code: 38828006,
        display: "Sodium thiosulfate",
        
      },
      {
        code: 38900001,
        display: "Proliferant agent",
        
      },
      {
        code: 39064002,
        display: "Acetohexamide",
        
      },
      {
        code: 39124003,
        display: "Methohexital",
        
      },
      {
        code: 39128000,
        display: "Famotidine",
        
      },
      {
        code: 39142008,
        display: "Phendimetrazine",
        
      },
      {
        code: 39252001,
        display: "Water balance agent",
        
      },
      {
        code: 39359008,
        display: "Penicillin V",
        
      },
      {
        code: 39432004,
        display: "Deodorant",
        
      },
      {
        code: 39487003,
        display: "Regular insulin product",
        
      },
      {
        code: 39516004,
        display: "Disulfiram product",
        
      },
      {
        code: 39598004,
        display: "Marijuana derivative",
        
      },
      {
        code: 39608003,
        display: "Pentazocine",
        
      },
      {
        code: 39707000,
        display: "Aminobenzoic acid",
        
      },
      {
        code: 39741008,
        display: "Drug groups primarily affecting the gastro-intestinal system",
        
      },
      {
        code: 39860005,
        display: "Fructose product",
        
      },
      {
        code: 39939003,
        display: "Phenyltoloxamine",
        
      },
      {
        code: 40162007,
        display: "Bulk-forming laxatives",
        
      },
      {
        code: 40232005,
        display: "Ketoconazole",
        
      },
      {
        code: 40339003,
        display: "Calcium lactate",
        
      },
      {
        code: 40429005,
        display: "Etomidate",
        
      },
      {
        code: 40430000,
        display: "Bromelains",
        
      },
      {
        code: 40556005,
        display: "Phenytoin product",
        
      },
      {
        code: 40562000,
        display: "Methylergonovine preparation",
        
      },
      {
        code: 40589005,
        display: "Amitriptyline",
        
      },
      {
        code: 40606008,
        display: "Orphan drug",
        
      },
      {
        code: 40648001,
        display: "Fentanyl product",
        
      },
      {
        code: 40652001,
        display: "Cromolyn sodium",
        
      },
      {
        code: 40820003,
        display: "Carbamazepine product",
        
      },
      {
        code: 40877002,
        display: "Streptomycin",
        
      },
      {
        code: 40901001,
        display: "Desferrioxamine mesylate",
        
      },
      {
        code: 40905005,
        display: "Beractant",
        
      },
      {
        code: 40974005,
        display: "Phenylpiperone",
        
      },
      {
        code: 40999006,
        display: "CCNU - Lomustine",
        
      },
      {
        code: 41001009,
        display: "Dinoprost",
        
      },
      {
        code: 41015006,
        display: "Metaraminol",
        
      },
      {
        code: 41147003,
        display: "Perphenazine",
        
      },
      {
        code: 41193000,
        display: "Aciclovir",
        
      },
      {
        code: 41324009,
        display: "Propiomazine",
        
      },
      {
        code: 41365009,
        display: "Fluphenazine",
        
      },
      {
        code: 41367001,
        display: "Enterogastrone preparation",
        
      },
      {
        code: 41399007,
        display: "Oxazolidinedione",
        
      },
      {
        code: 41470001,
        display: "Corbadrine",
        
      },
      {
        code: 41493007,
        display: "Dicycloverine",
        
      },
      {
        code: 41549009,
        display: "Angiotensin-converting enzyme inhibitor",
        
      },
      {
        code: 41985001,
        display: "Bitolterol",
        
      },
      {
        code: 42082003,
        display: "Vancomycin",
        
      },
      {
        code: 42098005,
        display: "Dexamethasone ophthalmic preparation",
        
      },
      {
        code: 42271003,
        display: "Glutamic acid product",
        
      },
      {
        code: 42348003,
        display: "Methyltestosterone",
        
      },
      {
        code: 42374009,
        display: "Dextromethorphan hydrobromide",
        
      },
      {
        code: 42444000,
        display: "Secobarbital",
        
      },
      {
        code: 42514000,
        display: "Procaine product",
        
      },
      {
        code: 42638008,
        display: "Methylrosanilium chloride",
        
      },
      {
        code: 42714002,
        display: "Escherichia coli antiserum",
        
      },
      {
        code: 42720001,
        display: "Miconazole",
        
      },
      {
        code: 42863006,
        display: "Desmopressin acetate preparation",
        
      },
      {
        code: 43343000,
        display: "Magaldrate",
        
      },
      {
        code: 43499003,
        display: "Injectable interferon",
        
      },
      {
        code: 43533002,
        display: "Chloramphenicol ophthalmic preparation",
        
      },
      {
        code: 43594006,
        display: "Skin bleaching preparations",
        
      },
      {
        code: 43684009,
        display: "Misoprostol product",
        
      },
      {
        code: 43747001,
        display: "Drug excipient",
        
      },
      {
        code: 43753001,
        display: "Dydrogesterone",
        
      },
      {
        code: 43879000,
        display: "Flunisolide",
        
      },
      {
        code: 43927002,
        display: "Analeptic agent",
        
      },
      {
        code: 44175000,
        display: "Diperodon",
        
      },
      {
        code: 44418001,
        display: "Percomorph liver oil preparation",
        
      },
      {
        code: 44658005,
        display: "Promazine",
        
      },
      {
        code: 44731005,
        display: "Otic form hydrocortisone",
        
      },
      {
        code: 44790008,
        display: "Ethosuximide",
        
      },
      {
        code: 44798001,
        display: "Dinoprostone product",
        
      },
      {
        code: 44938006,
        display: "Cefoperazone",
        
      },
      {
        code: 44990002,
        display: "Procyclidine",
        
      },
      {
        code: 45218006,
        display: "Meclastine",
        
      },
      {
        code: 45311002,
        display: "Terbutaline",
        
      },
      {
        code: 45313004,
        display: "Propylpiperazine derivative of phenothiazine",
        
      },
      {
        code: 45355008,
        display: "Rocky Mountain spotted fever vaccine",
        
      },
      {
        code: 45518007,
        display: "Thiazide diuretic product",
        
      },
      {
        code: 45680002,
        display: "Tolmetin",
        
      },
      {
        code: 45844004,
        display: "Sulfasalazine",
        
      },
      {
        code: 45888006,
        display: "gamma-Tocopherol preparation",
        
      },
      {
        code: 45923000,
        display: "E331 - Sodium citrate",
        
      },
      {
        code: 46009007,
        display: "Chlorambucil",
        
      },
      {
        code: 46063005,
        display: "Psychotherapeutic agent",
        
      },
      {
        code: 46123006,
        display: "Ascorbic acid product",
        
      },
      {
        code: 46233009,
        display: "FLU - Influenza vaccine",
        
      },
      {
        code: 46436003,
        display: "Haloprogin",
        
      },
      {
        code: 46479001,
        display: "Encainide",
        
      },
      {
        code: 46532003,
        display: "Brilliant green",
        
      },
      {
        code: 46547007,
        display: "Labetalol",
        
      },
      {
        code: 46576005,
        display: "Flecainide",
        
      },
      {
        code: 46709004,
        display: "Methylphenobarbital",
        
      },
      {
        code: 46741005,
        display: "SA - Salicylic acid",
        
      },
      {
        code: 46913003,
        display: "Edrophonium",
        
      },
      {
        code: 47065008,
        display: "Quinine",
        
      },
      {
        code: 47120002,
        display: "Hexamidinum",
        
      },
      {
        code: 47124006,
        display: "Aminoglutethimide",
        
      },
      {
        code: 47140009,
        display: "Medrysone",
        
      },
      {
        code: 47331002,
        display: "CPZ - Chlorpromazine",
        
      },
      {
        code: 47527007,
        display: "Phenindione",
        
      },
      {
        code: 47602007,
        display: "Nalidixic acid",
        
      },
      {
        code: 47755009,
        display: "Potassium sparing diuretic",
        
      },
      {
        code: 47772002,
        display: "Fenfluramine hydrochloride",
        
      },
      {
        code: 47898004,
        display: "Verapamil",
        
      },
      {
        code: 48028008,
        display: "Haemophilus influenzae Type b (Hib)/diphtheria/tetanus/pertussis vaccine",
        
      },
      {
        code: 48174005,
        display: "Ranitidine",
        
      },
      {
        code: 48256008,
        display: "Benzyl benzoate",
        
      },
      {
        code: 48279009,
        display: "Emollient product",
        
      },
      {
        code: 48351000,
        display: "Butadione",
        
      },
      {
        code: 48546005,
        display: "Diazepam product",
        
      },
      {
        code: 48603004,
        display: "Warfarin",
        
      },
      {
        code: 48614001,
        display: "Clobetasol",
        
      },
      {
        code: 48647005,
        display: "Pancrelipase",
        
      },
      {
        code: 48698004,
        display: "Calcium-channel blocker",
        
      },
      {
        code: 48836000,
        display: "Amikacin",
        
      },
      {
        code: 48875009,
        display: "Dihydroergotamine product",
        
      },
      {
        code: 48899009,
        display: "Hyoscyamine",
        
      },
      {
        code: 49019002,
        display: "Prednisolone ophthalmic preparation",
        
      },
      {
        code: 49157004,
        display: "Uricosuric product",
        
      },
      {
        code: 49192007,
        display: "Antiflatulent agent",
        
      },
      {
        code: 49267000,
        display: "Hydroxyphenylbutazone",
        
      },
      {
        code: 49299006,
        display: "Protriptyline",
        
      },
      {
        code: 49485009,
        display: "Norfloxacin",
        
      },
      {
        code: 49577002,
        display: "Minoxidil",
        
      },
      {
        code: 49590009,
        display: "Class I antiarrhythmic",
        
      },
      {
        code: 49600008,
        display: "Normal animal plasma",
        
      },
      {
        code: 49617001,
        display: "Disodium enoxolone",
        
      },
      {
        code: 49663007,
        display: "Sunscreening preparations",
        
      },
      {
        code: 49669006,
        display: "Escherichia coli - pasteurella multocida - salmonella typhimurium antiserum",
        
      },
      {
        code: 49688004,
        display: "Hexocyclium",
        
      },
      {
        code: 49694007,
        display: "Mucolytics",
        
      },
      {
        code: 49705006,
        display: "Idoxuridine",
        
      },
      {
        code: 49802003,
        display: "Anti-D (Rh) immunoglobulin",
        
      },
      {
        code: 49860008,
        display: "Gold product",
        
      },
      {
        code: 49953001,
        display: "Pheniramine",
        
      },
      {
        code: 49992008,
        display: "Dexamethasone sodium phosphate",
        
      },
      {
        code: 50094009,
        display: "Hetastarch",
        
      },
      {
        code: 50137001,
        display: "Glycine solution",
        
      },
      {
        code: 50182002,
        display: "Hemodialysis fluid",
        
      },
      {
        code: 50244000,
        display: "Intravenous anesthetic",
        
      },
      {
        code: 50256004,
        display: "Antitrichomonal agent",
        
      },
      {
        code: 50318003,
        display: "Luteal hormone",
        
      },
      {
        code: 50335004,
        display: "Levorphanol",
        
      },
      {
        code: 50520001,
        display: "Neomycin B",
        
      },
      {
        code: 50841004,
        display: "Otic form chloramphenicol",
        
      },
      {
        code: 50868004,
        display: "Dexamfetamine",
        
      },
      {
        code: 51013009,
        display: "Sulfadimethoxine",
        
      },
      {
        code: 51073002,
        display: "Phenobarbital product",
        
      },
      {
        code: 51103004,
        display: "Hypertonic saline",
        
      },
      {
        code: 51126006,
        display: "Benzestrol preparation",
        
      },
      {
        code: 51132001,
        display: "Hyaluronidase product",
        
      },
      {
        code: 51326002,
        display: "BCNU - Carmustine",
        
      },
      {
        code: 51334008,
        display: "Cycloserine",
        
      },
      {
        code: 51361008,
        display: "Amantadine",
        
      },
      {
        code: 51425004,
        display: "Scorpion antivenin",
        
      },
      {
        code: 51555009,
        display: "Desiccated liver preparation",
        
      },
      {
        code: 51752005,
        display: "Chologon",
        
      },
      {
        code: 51758009,
        display: "Amidine",
        
      },
      {
        code: 51779009,
        display: "Cephalosporin -class of antibiotic-",
        
      },
      {
        code: 51908007,
        display: "Prenylamine",
        
      },
      {
        code: 51992002,
        display: "Gastrin preparation",
        
      },
      {
        code: 52017007,
        display: "Antiemetic",
        
      },
      {
        code: 52108005,
        display: "Ferrous fumarate",
        
      },
      {
        code: 52215008,
        display: "Desonide",
        
      },
      {
        code: 52388000,
        display: "Prednisolone",
        
      },
      {
        code: 52412009,
        display: "Methylergonovine maleate preparation",
        
      },
      {
        code: 52423008,
        display: "Tar preparation",
        
      },
      {
        code: 52451004,
        display: "Dihydroindolone derivative antipsychotic agent",
        
      },
      {
        code: 52489009,
        display: "Vasopressin tannate preparation",
        
      },
      {
        code: 52628005,
        display: "Typhoid-paratyphoid vaccine",
        
      },
      {
        code: 52761007,
        display: "Anticholinesterase parasympathomimetic",
        
      },
      {
        code: 52883001,
        display: "para-Hydroxyamphetamine",
        
      },
      {
        code: 52896000,
        display: "Chinoform",
        
      },
      {
        code: 53009005,
        display: "Analgesic",
        
      },
      {
        code: 53480001,
        display: "Phentermine",
        
      },
      {
        code: 53584007,
        display: "Methacholine",
        
      },
      {
        code: 53640004,
        display: "Fluoxetine",
        
      },
      {
        code: 53641000,
        display: "Flavoxate",
        
      },
      {
        code: 53691001,
        display: "Calcium gluconate",
        
      },
      {
        code: 53793005,
        display: "Escherichia coli antibody",
        
      },
      {
        code: 53800008,
        display: "Dithranol",
        
      },
      {
        code: 53848009,
        display: "Metyrapone",
        
      },
      {
        code: 53855006,
        display: "Neostigmine bromide",
        
      },
      {
        code: 54142000,
        display: "Domiphen",
        
      },
      {
        code: 54344006,
        display: "Flurbiprofen",
        
      },
      {
        code: 54391004,
        display: "Levamisole",
        
      },
      {
        code: 54406003,
        display: "Methoxamine",
        
      },
      {
        code: 54541002,
        display: "Ergometrine preparation",
        
      },
      {
        code: 54544005,
        display: "Pethidine",
        
      },
      {
        code: 54577009,
        display: "Ceftizoxime",
        
      },
      {
        code: 54659006,
        display: "Thiamine hydrochloride preparation",
        
      },
      {
        code: 54705000,
        display: "Temazepam",
        
      },
      {
        code: 54765002,
        display: "Phenylephrine",
        
      },
      {
        code: 54824008,
        display: "Isometheptene",
        
      },
      {
        code: 54882005,
        display: "Amfepramone",
        
      },
      {
        code: 54887004,
        display: "Cefalexin",
        
      },
      {
        code: 54972005,
        display: "Tretinoin",
        
      },
      {
        code: 54982006,
        display: "Promethestrol preparation",
        
      },
      {
        code: 55015008,
        display: "E325 - Sodium lactate",
        
      },
      {
        code: 55217007,
        display: "Calcium carbonate",
        
      },
      {
        code: 55432002,
        display: "Azlocillin",
        
      },
      {
        code: 55556000,
        display: "Tetracaine",
        
      },
      {
        code: 55673009,
        display: "Iothalamate sodium I^125^",
        
      },
      {
        code: 55745002,
        display: "Propranolol",
        
      },
      {
        code: 55782006,
        display: "Amide-type anesthetic",
        
      },
      {
        code: 55784007,
        display: "Natural hormone preparation",
        
      },
      {
        code: 55830003,
        display: "Menotrophin",
        
      },
      {
        code: 55867006,
        display: "Aminophylline",
        
      },
      {
        code: 55889005,
        display: "Praziquantel",
        
      },
      {
        code: 56011005,
        display: "Stinging insects immunotherapy extract",
        
      },
      {
        code: 56014002,
        display: "Hydroxyprogesterone",
        
      },
      {
        code: 56032002,
        display: "Androstanolone",
        
      },
      {
        code: 56059005,
        display: "Mebendazole product",
        
      },
      {
        code: 56123002,
        display: "Hexamine",
        
      },
      {
        code: 56230001,
        display: "Bretylium",
        
      },
      {
        code: 56234005,
        display: "Growth hormone product",
        
      },
      {
        code: 56240003,
        display: "Paramethasone acetate preparation",
        
      },
      {
        code: 56281006,
        display: "Anesthetic ether",
        
      },
      {
        code: 56480005,
        display: "Parabromdylamine",
        
      },
      {
        code: 56549003,
        display: "Metoclopramide",
        
      },
      {
        code: 56602009,
        display: "Hydroxycarbamide",
        
      },
      {
        code: 56615000,
        display: "Polyestradiol phosphate preparation",
        
      },
      {
        code: 56656002,
        display: "Magnesium-based antacid",
        
      },
      {
        code: 56844000,
        display: "Yellow fever vaccine product",
        
      },
      {
        code: 56928005,
        display: "Etoposide product",
        
      },
      {
        code: 56934003,
        display: "PVP - Polyvinylpyrrolidone",
        
      },
      {
        code: 57002000,
        display: "Chlorprothixene",
        
      },
      {
        code: 57066004,
        display: "Cisplatin product",
        
      },
      {
        code: 57123008,
        display: "Urinary acidifier",
        
      },
      {
        code: 57191001,
        display: "Chloramphenicol product",
        
      },
      {
        code: 57263002,
        display: "Oxiconazole",
        
      },
      {
        code: 57376006,
        display: "Monosodium carbonate",
        
      },
      {
        code: 57538001,
        display: "Chlortetracycline",
        
      },
      {
        code: 57616006,
        display: "STD - Sodium tetradecyl sulfate",
        
      },
      {
        code: 57670008,
        display: "Cefoxitin",
        
      },
      {
        code: 57752001,
        display: "Gentamicin product",
        
      },
      {
        code: 57811004,
        display: "Dihydrocodeine",
        
      },
      {
        code: 57819002,
        display: "Somatotropin inhibiting factor preparation",
        
      },
      {
        code: 57845006,
        display: "Isoprenaline",
        
      },
      {
        code: 57853003,
        display: "Clidinium",
        
      },
      {
        code: 57893000,
        display: "Chlortalidone",
        
      },
      {
        code: 57952007,
        display: "Lipid lowering drug",
        
      },
      {
        code: 58050004,
        display: "Antiparkinsonian agent",
        
      },
      {
        code: 58098008,
        display: "Tetanus toxoid adsorbed",
        
      },
      {
        code: 58360000,
        display: "Phenazocine",
        
      },
      {
        code: 58467001,
        display: "Papaverine",
        
      },
      {
        code: 58502006,
        display: "Propylamine derivative antihistamine",
        
      },
      {
        code: 58760003,
        display: "Antimetabolites",
        
      },
      {
        code: 58805000,
        display: "Pituitary hormone preparation",
        
      },
      {
        code: 58883005,
        display: "Clindamycin",
        
      },
      {
        code: 58892008,
        display: "F3T - trifluorothymidine",
        
      },
      {
        code: 58905004,
        display: "Diazoxide",
        
      },
      {
        code: 58944007,
        display: "Vasodilator",
        
      },
      {
        code: 59057006,
        display: "Antihemophilic factor preparation",
        
      },
      {
        code: 59187003,
        display: "Dopamine product",
        
      },
      {
        code: 59240002,
        display: "MMC-Mitomycin-C",
        
      },
      {
        code: 59245007,
        display: "Hypophysiostatic factor preparation",
        
      },
      {
        code: 59255006,
        display: "Sulfonamide",
        
      },
      {
        code: 59261009,
        display: "Oral contraceptive preparation",
        
      },
      {
        code: 59270007,
        display: "Loxapine",
        
      },
      {
        code: 59456005,
        display: "Astemizole",
        
      },
      {
        code: 59589008,
        display: "Pyrimethamine product",
        
      },
      {
        code: 59594008,
        display: "Nondepolarizing agent",
        
      },
      {
        code: 59751001,
        display: "Cough suppressant",
        
      },
      {
        code: 59799001,
        display: "Osmotic diuretic product",
        
      },
      {
        code: 59941008,
        display: "Diltiazem",
        
      },
      {
        code: 59953007,
        display: "Pyridostigmine",
        
      },
      {
        code: 59999009,
        display: "Tetanus and diphtheria toxoid adsorbed for adult use",
        
      },
      {
        code: 60090003,
        display: "Soft drug",
        
      },
      {
        code: 60093001,
        display: "Phenylpropanolamine hydrochloride",
        
      },
      {
        code: 60149003,
        display: "Indometacin",
        
      },
      {
        code: 60169008,
        display: "Antacid",
        
      },
      {
        code: 60468008,
        display: "Magnesium hydroxide",
        
      },
      {
        code: 60520004,
        display: "Thiamine mononitrate preparation",
        
      },
      {
        code: 60533005,
        display: "Astringent drug",
        
      },
      {
        code: 60541005,
        display: "Lanatoside C",
        
      },
      {
        code: 60682004,
        display: "Echothiophate",
        
      },
      {
        code: 60731009,
        display: "Diethylcarbamazine",
        
      },
      {
        code: 60767002,
        display: "Normal animal serum",
        
      },
      {
        code: 60881009,
        display: "Heroin",
        
      },
      {
        code: 60972002,
        display: "Irrigating solution",
        
      },
      {
        code: 60978003,
        display: "Barbiturate",
        
      },
      {
        code: 61020000,
        display: "Thyroid preparation",
        
      },
      {
        code: 61093008,
        display: "Prolactin inhibiting factor preparation",
        
      },
      {
        code: 61123001,
        display: "Amobarbital sodium",
        
      },
      {
        code: 61132004,
        display: "Gas gangrene antitoxin",
        
      },
      {
        code: 61153008,
        display: "Measles, mumps and rubella vaccine",
        
      },
      {
        code: 61181002,
        display: "Meprednisone preparation",
        
      },
      {
        code: 61408004,
        display: "Molindone",
        
      },
      {
        code: 61457001,
        display: "Adrenal hormone preparation",
        
      },
      {
        code: 61602008,
        display: "Pertussis vaccine",
        
      },
      {
        code: 61621000,
        display: "Laxative",
        
      },
      {
        code: 61623002,
        display: "Buclizine",
        
      },
      {
        code: 61650007,
        display: "Niacinamide preparation",
        
      },
      {
        code: 61651006,
        display: "Cefamandole",
        
      },
      {
        code: 61862008,
        display: "Meticillin",
        
      },
      {
        code: 61939007,
        display: "Diphenylmethane laxative",
        
      },
      {
        code: 61946003,
        display: "Estrogenic preparation",
        
      },
      {
        code: 62051009,
        display: "Dichlorisone preparation",
        
      },
      {
        code: 62063004,
        display: "Nasal anti-inflammatory preparation",
        
      },
      {
        code: 62191005,
        display: "Injectable liver preparation",
        
      },
      {
        code: 62288001,
        display: "Anthelmintic",
        
      },
      {
        code: 62294009,
        display: "Varicella-zoster immune globulin",
        
      },
      {
        code: 62353003,
        display: "Clomifene citrate",
        
      },
      {
        code: 62354009,
        display: "Bronchitis vaccine",
        
      },
      {
        code: 62529008,
        display: "Tiotixene",
        
      },
      {
        code: 62560008,
        display: "Fluorometholone ophthalmic preparation",
        
      },
      {
        code: 62782004,
        display: "Clonidine",
        
      },
      {
        code: 63094006,
        display: "Anticonvulsant",
        
      },
      {
        code: 63136007,
        display: "Phytonadione preparation",
        
      },
      {
        code: 63318000,
        display: "Benzoic acid",
        
      },
      {
        code: 63338004,
        display: "Drug flavoring",
        
      },
      {
        code: 63470003,
        display: "Fluoxymesterone preparation",
        
      },
      {
        code: 63639004,
        display: "Niacin preparation",
        
      },
      {
        code: 63682003,
        display: "Halothane",
        
      },
      {
        code: 63758001,
        display: "Norethindrone preparation",
        
      },
      {
        code: 63822004,
        display: "Vitamin E preparation",
        
      },
      {
        code: 64083002,
        display: "Genitourinary smooth muscle relaxant",
        
      },
      {
        code: 64115004,
        display: "Amodiaquin",
        
      },
      {
        code: 64127001,
        display: "Dactinomycin",
        
      },
      {
        code: 64240003,
        display: "Methandrostenolone preparation",
        
      },
      {
        code: 64296005,
        display: "Staphylococcus toxoid",
        
      },
      {
        code: 64349004,
        display: "Griseofulvin",
        
      },
      {
        code: 64462001,
        display: "Terpin",
        
      },
      {
        code: 64558005,
        display: "Metixene",
        
      },
      {
        code: 64851009,
        display: "Diiodohydroxyquin",
        
      },
      {
        code: 64878006,
        display: "Methylthiouracil",
        
      },
      {
        code: 65020006,
        display: "Benzocaine",
        
      },
      {
        code: 65026000,
        display: "Ephedrine",
        
      },
      {
        code: 65041000,
        display: "Biperiden",
        
      },
      {
        code: 65092008,
        display: "Chloropyrilene",
        
      },
      {
        code: 65265006,
        display: "Thromboplastin",
        
      },
      {
        code: 65461004,
        display: "Adrenal cortex extract",
        
      },
      {
        code: 65484006,
        display: "Prostacycline PGI>2< preparation",
        
      },
      {
        code: 65502005,
        display: "Epinephrine preparation",
        
      },
      {
        code: 65505007,
        display: "Gastrointestinal smooth muscle relaxant",
        
      },
      {
        code: 65627005,
        display: "4-Amino-2-methyl-1-naphthol hydrate preparation",
        
      },
      {
        code: 65628000,
        display: "Skin agent",
        
      },
      {
        code: 65638005,
        display: "Corticotropin zinc hydroxide preparation",
        
      },
      {
        code: 65695006,
        display: "General inhalation anesthetic",
        
      },
      {
        code: 65823007,
        display: "Protective agent",
        
      },
      {
        code: 65884003,
        display: "Antrapurol",
        
      },
      {
        code: 65965000,
        display: "Micrurus fulvius antivenin",
        
      },
      {
        code: 66065008,
        display: "Saline laxative",
        
      },
      {
        code: 66094001,
        display: "Probenecid",
        
      },
      {
        code: 66125007,
        display: "Flunisolide nasal preparation",
        
      },
      {
        code: 66243004,
        display: "Norethindrone acetate preparation",
        
      },
      {
        code: 66261008,
        display: "Tetracycline",
        
      },
      {
        code: 66349002,
        display: "Androgenic preparation",
        
      },
      {
        code: 66441000,
        display: "Pantothenic acid preparation",
        
      },
      {
        code: 66492008,
        display: "Isoflurane",
        
      },
      {
        code: 66493003,
        display: "Theophylline",
        
      },
      {
        code: 66602007,
        display: "Stanozolol preparation",
        
      },
      {
        code: 66672008,
        display: "Ester type local anesthetic",
        
      },
      {
        code: 66742008,
        display: "Pigmenting agent",
        
      },
      {
        code: 66854004,
        display: "Betamethasone valerate",
        
      },
      {
        code: 66859009,
        display: "Dipyridamole",
        
      },
      {
        code: 66860004,
        display: "Aluminum chloride",
        
      },
      {
        code: 66919007,
        display: "Methyclothiazide",
        
      },
      {
        code: 66971004,
        display: "Colestipol",
        
      },
      {
        code: 67213005,
        display: "Lymphocyte immune globulin",
        
      },
      {
        code: 67423003,
        display: "Acylaminopenicillin",
        
      },
      {
        code: 67440007,
        display: "Alpha-adrenergic blocking agent",
        
      },
      {
        code: 67477004,
        display: "Valproate",
        
      },
      {
        code: 67507000,
        display: "Antiarrhythmic drug",
        
      },
      {
        code: 67585005,
        display: "Topical anesthetic",
        
      },
      {
        code: 67735003,
        display: "Paclitaxel",
        
      },
      {
        code: 67891001,
        display: "Second generation cephalosporin",
        
      },
      {
        code: 67939000,
        display: "Apomorphine",
        
      },
      {
        code: 68088000,
        display: "Acebutolol",
        
      },
      {
        code: 68113000,
        display: "Hib oligosaccharide conjugate (diphtheria CRM>197< protein conjugate) vaccine",
        
      },
      {
        code: 68206008,
        display: "Calcitriol preparation",
        
      },
      {
        code: 68208009,
        display: "Diphtheria and tetanus toxoid adsorbed",
        
      },
      {
        code: 68395000,
        display: "Calcium chloride",
        
      },
      {
        code: 68398003,
        display: "Somatomedin preparation",
        
      },
      {
        code: 68402007,
        display: "Carbonic anhydrase inhibitor",
        
      },
      {
        code: 68407001,
        display: "Hydrogen peroxide solution 30%",
        
      },
      {
        code: 68422006,
        display: "Cloxacillin",
        
      },
      {
        code: 68424007,
        display: "Isoflurophate",
        
      },
      {
        code: 68444001,
        display: "Doxorubicin",
        
      },
      {
        code: 68461003,
        display: "Surgical jelly",
        
      },
      {
        code: 68490009,
        display: "Sodium propionate",
        
      },
      {
        code: 68622003,
        display: "Secretin preparation",
        
      },
      {
        code: 68702006,
        display: "Sodium aurothiomalate",
        
      },
      {
        code: 68774008,
        display: "Isoxsuprine",
        
      },
      {
        code: 68864001,
        display: "Polyvalent reptile antivenin",
        
      },
      {
        code: 68887009,
        display: "Methotrexate",
        
      },
      {
        code: 68892006,
        display: "Penicillinase-resistant penicillin",
        
      },
      {
        code: 69107004,
        display: "Dantrolene",
        
      },
      {
        code: 69204002,
        display: "Guanadrel",
        
      },
      {
        code: 69227005,
        display: "Class II antiarrhythmic drug",
        
      },
      {
        code: 69236009,
        display: "Amiodarone",
        
      },
      {
        code: 69242008,
        display: "Miotic",
        
      },
      {
        code: 69331001,
        display: "Aminocyclohexylpenicillin",
        
      },
      {
        code: 69431002,
        display: "Immunosuppressant",
        
      },
      {
        code: 69509008,
        display: "Biological agent",
        
      },
      {
        code: 69576000,
        display: "Menadione preparation",
        
      },
      {
        code: 69708003,
        display: "Clonazepam",
        
      },
      {
        code: 69801001,
        display: "Sodium estrone sulfate preparation",
        
      },
      {
        code: 69879000,
        display: "Altretamine",
        
      },
      {
        code: 69918003,
        display: "Aztreonam",
        
      },
      {
        code: 69967001,
        display: "Sucralfate",
        
      },
      {
        code: 70047000,
        display: "Sulfamethoxazole",
        
      },
      {
        code: 70216000,
        display: "Undecylenate salt",
        
      },
      {
        code: 70254000,
        display: "Sulfamethizole",
        
      },
      {
        code: 70343008,
        display: "Piperazine derivative antihistamine",
        
      },
      {
        code: 70379000,
        display: "Sodium chloride",
        
      },
      {
        code: 70447008,
        display: "Polyvalent pneumococcal vaccine",
        
      },
      {
        code: 70460002,
        display: "Fish liver oil preparation",
        
      },
      {
        code: 70702006,
        display: "Deferoxamine",
        
      },
      {
        code: 70776005,
        display: "Pemoline",
        
      },
      {
        code: 70841003,
        display: "Chymotrypsin preparation",
        
      },
      {
        code: 70864001,
        display: "Meprobamate",
        
      },
      {
        code: 70934008,
        display: "Demecarium",
        
      },
      {
        code: 71181003,
        display: "Vaccine",
        
      },
      {
        code: 71289008,
        display: "Snake antivenin",
        
      },
      {
        code: 71338005,
        display: "Vasopressin preparation",
        
      },
      {
        code: 71451001,
        display: "Kanamycin",
        
      },
      {
        code: 71453003,
        display: "Mupirocin",
        
      },
      {
        code: 71455005,
        display: "Flurandrenolone preparation",
        
      },
      {
        code: 71462001,
        display: "Podophyllum resin",
        
      },
      {
        code: 71516007,
        display: "Ergocalciferol preparation",
        
      },
      {
        code: 71584004,
        display: "Sodium phosphate",
        
      },
      {
        code: 71634000,
        display: "Chlormezanone",
        
      },
      {
        code: 71699007,
        display: "Trifluoperazine",
        
      },
      {
        code: 71724000,
        display: "Ferrous sulfate",
        
      },
      {
        code: 71731001,
        display: "Medrysone ophthalmic preparation",
        
      },
      {
        code: 71759000,
        display: "Nitroglycerin",
        
      },
      {
        code: 71770007,
        display: "Monoamine oxidase inhibitor",
        
      },
      {
        code: 71798005,
        display: "Fenoprofen",
        
      },
      {
        code: 71837009,
        display: "Cytotoxic agent",
        
      },
      {
        code: 72312007,
        display: "Cyclandelate",
        
      },
      {
        code: 72398005,
        display: "Ophthalmic sulfonamide preparation",
        
      },
      {
        code: 72416006,
        display: "Metacycline",
        
      },
      {
        code: 72623000,
        display: "2-Amino-6-mercaptopurine",
        
      },
      {
        code: 72824008,
        display: "Cholestyramine",
        
      },
      {
        code: 72870001,
        display: "Scopolamine",
        
      },
      {
        code: 72924009,
        display: "Clofazimine",
        
      },
      {
        code: 72968006,
        display: "Sodium salicylate",
        
      },
      {
        code: 72996000,
        display: "Drug builder",
        
      },
      {
        code: 73074003,
        display: "Colistin",
        
      },
      {
        code: 73093001,
        display: "Neomycin",
        
      },
      {
        code: 73133000,
        display: "Colchicine",
        
      },
      {
        code: 73170009,
        display: "Menthol",
        
      },
      {
        code: 73212002,
        display: "Adipiodone",
        
      },
      {
        code: 73228007,
        display: "Non-steroidal estrogen preparation",
        
      },
      {
        code: 73274006,
        display: "Human plasma cryoprecipitate",
        
      },
      {
        code: 73277004,
        display: "Mecamylamine",
        
      },
      {
        code: 73454001,
        display: "Desmopressin preparation",
        
      },
      {
        code: 73572009,
        display: "Morphine",
        
      },
      {
        code: 73585007,
        display: "Phenytoin sodium",
        
      },
      {
        code: 73627008,
        display: "Caloric agent",
        
      },
      {
        code: 73639000,
        display: "Prescription drug",
        
      },
      {
        code: 73647000,
        display: "Dipivefrine",
        
      },
      {
        code: 73756003,
        display: "Amobarbital",
        
      },
      {
        code: 73763003,
        display: "Extended spectrum penicillin",
        
      },
      {
        code: 73805002,
        display: "Thyrotropin releasing hormone preparation",
        
      },
      {
        code: 73949004,
        display: "Atropine",
        
      },
      {
        code: 73986003,
        display: "Cefuroxime",
        
      },
      {
        code: 74022005,
        display: "Mepenzolate",
        
      },
      {
        code: 74065006,
        display: "Prazepam",
        
      },
      {
        code: 74074008,
        display: "Atracurium",
        
      },
      {
        code: 74147005,
        display: "Edetate disodium",
        
      },
      {
        code: 74213004,
        display: "Indapamide",
        
      },
      {
        code: 74226000,
        display: "Vitamin K preparation",
        
      },
      {
        code: 74470007,
        display: "Cyclophosphamide",
        
      },
      {
        code: 74480006,
        display: "Potassium supplement",
        
      },
      {
        code: 74575000,
        display: "Piperacillin",
        
      },
      {
        code: 74583006,
        display: "Hydroquinone product",
        
      },
      {
        code: 74626007,
        display: "Drug diluent",
        
      },
      {
        code: 74632002,
        display: "Succinimide",
        
      },
      {
        code: 74674007,
        display: "Propofol",
        
      },
      {
        code: 74771007,
        display: "Phenoxybenzamine",
        
      },
      {
        code: 74780007,
        display: "Anthraquinone laxatives",
        
      },
      {
        code: 74782004,
        display: "Naturally occurring alkaloid",
        
      },
      {
        code: 74798006,
        display: "Pipenzolate",
        
      },
      {
        code: 74819009,
        display: "Acetohydroxamic acid",
        
      },
      {
        code: 75029008,
        display: "Desoxycorticosterone preparation",
        
      },
      {
        code: 75201000,
        display: "Bacterin - toxoid",
        
      },
      {
        code: 75203002,
        display: "Mometasone",
        
      },
      {
        code: 75292001,
        display: "Vincristine sulfate",
        
      },
      {
        code: 75366006,
        display: "Sodium calciumedetate",
        
      },
      {
        code: 75429004,
        display: "Dexbrompheniramine",
        
      },
      {
        code: 75501004,
        display: "Bromazine",
        
      },
      {
        code: 75661008,
        display: "delta-Tocopherol preparation",
        
      },
      {
        code: 75748004,
        display: "Theophylline sodium glycinate",
        
      },
      {
        code: 75770001,
        display: "Urea topical preparation",
        
      },
      {
        code: 75927008,
        display: "Floxuridine",
        
      },
      {
        code: 75959001,
        display: "Tamoxifen",
        
      },
      {
        code: 75969007,
        display: "Gonadotropin releasing factor preparation",
        
      },
      {
        code: 76058001,
        display: "Prazosin",
        
      },
      {
        code: 76155001,
        display: "Iopanoic acid",
        
      },
      {
        code: 76286000,
        display: "Gallamine",
        
      },
      {
        code: 76289007,
        display: "Xylometazoline",
        
      },
      {
        code: 76385003,
        display: "Alpha 1 adrenergic blocking agent",
        
      },
      {
        code: 76390000,
        display: "Practolol",
        
      },
      {
        code: 76591000,
        display: "Bleomycin",
        
      },
      {
        code: 76696004,
        display: "Noscapine",
        
      },
      {
        code: 76759004,
        display: "Disopyramide product",
        
      },
      {
        code: 76962009,
        display: "Iproniazid",
        
      },
      {
        code: 77035009,
        display: "Clofibrate",
        
      },
      {
        code: 77048008,
        display: "Dip/ser",
        
      },
      {
        code: 77237006,
        display: "Emetic",
        
      },
      {
        code: 77331005,
        display: "Normal animal globulin concentrate",
        
      },
      {
        code: 77390008,
        display: "Benzatropine",
        
      },
      {
        code: 77398001,
        display: "Antidiarrhea agent",
        
      },
      {
        code: 77549006,
        display: "Terpene",
        
      },
      {
        code: 77657003,
        display: "Illegal drug",
        
      },
      {
        code: 77731008,
        display: "N-Acetylcysteine",
        
      },
      {
        code: 77750008,
        display: "Dacarbazine",
        
      },
      {
        code: 77856005,
        display: "Esmolol",
        
      },
      {
        code: 77885004,
        display: "Mestranol product",
        
      },
      {
        code: 77898008,
        display: "Simethicone",
        
      },
      {
        code: 78025001,
        display: "Ganciclovir product",
        
      },
      {
        code: 78057000,
        display: "Carbol-fuchsin topical solution",
        
      },
      {
        code: 78174002,
        display: "Mezlocillin",
        
      },
      {
        code: 78379001,
        display: "Reserpine",
        
      },
      {
        code: 78411008,
        display: "Thiopental sodium",
        
      },
      {
        code: 78439009,
        display: "Citrate salt",
        
      },
      {
        code: 78449007,
        display: "Nitrazepam",
        
      },
      {
        code: 78507004,
        display: "Benzylpenicillin",
        
      },
      {
        code: 78542000,
        display: "Potassium citrate product",
        
      }
    ];
    
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

    const code = [
        {
          code: 102002,
          display: "Hemoglobin Okaloosa",
          
        },
        {
          code: 120006,
          display: "Ornithine racemase",
          
        },
        {
          code: 125001,
          display: "Ferrous sulfate Fe^59^",
          
        },
        {
          code: 126000,
          display: "Galactosyl-N-acetylglucosaminylgalactosylglucosylceramide alpha-galactosyltransferase",
          
        },
        {
          code: 130002,
          display: "Hemoglobin Hopkins-II",
          
        },
        {
          code: 131003,
          display: "Dolichyl-phosphate mannosyltransferase",
          
        },
        {
          code: 159002,
          display: "Ferrocyanide salt",
          
        },
        {
          code: 164003,
          display: "Phosphoenolpyruvate-protein phosphotransferase",
          
        },
        {
          code: 178002,
          display: "Uridyl diphosphate galactose",
          
        },
        {
          code: 186002,
          display: "HLA-Cw9 antigen",
          
        },
        {
          code: 187006,
          display: "Cyanocobalamin Co^57^",
          
        },
        {
          code: 200001,
          display: "Berberine",
          
        },
        {
          code: 217008,
          display: "Blood group antigen IH",
          
        },
        {
          code: 231008,
          display: "3-Hydroxyisobutyrate dehydrogenase",
          
        },
        {
          code: 238002,
          display: "Heptachlor",
          
        },
        {
          code: 261000,
          display: "Codeine phosphate",
          
        },
        {
          code: 296000,
          display: "Coumachlor",
          
        },
        {
          code: 322006,
          display: "Octylphenoxy P.H. ethanol",
          
        },
        {
          code: 327000,
          display: "^76^Arsenic",
          
        },
        {
          code: 329002,
          display: "^127^Antimony",
          
        },
        {
          code: 336001,
          display: "Fibrinogen Tokyo II",
          
        },
        {
          code: 340005,
          display: "Enzyme variant",
          
        },
        {
          code: 363000,
          display: "Fibrinogen San Juan",
          
        },
        {
          code: 370000,
          display: "beta>2S< Glycoprotein",
          
        },
        {
          code: 371001,
          display: "Acylcarnitine hydrolase",
          
        },
        {
          code: 377002,
          display: "Sparteine",
          
        },
        {
          code: 392001,
          display: "^151^Gadolinium",
          
        },
        {
          code: 395004,
          display: "Immunoglobulin pentamer",
          
        },
        {
          code: 412004,
          display: "Ribose-5-phosphate isomerase",
          
        },
        {
          code: 424006,
          display: "Citramalyl-CoA lyase",
          
        },
        {
          code: 425007,
          display: "Hemoglobin Nagoya",
          
        },
        {
          code: 432003,
          display: "Carminic acid",
          
        },
        {
          code: 438004,
          display: "2-Hydroxyglutarate dehydrogenase",
          
        },
        {
          code: 462009,
          display: "Urease (ATP-hydrolysing)",
          
        },
        {
          code: 472007,
          display: "Vegetable textile fiber",
          
        },
        {
          code: 476005,
          display: "CD1b - Cluster of differentiation antigen 1b",
          
        },
        {
          code: 498001,
          display: "Nitrilase",
          
        },
        {
          code: 501001,
          display: "Blood group antibody Sf^a^",
          
        },
        {
          code: 505005,
          display: "Blood group antibody M'",
          
        },
        {
          code: 506006,
          display: "3-Oxosteroid delta^1^-dehydrogenase",
          
        },
        {
          code: 515004,
          display: "Blood group antigen Giaigue",
          
        },
        {
          code: 519005,
          display: "Free protein S",
          
        },
        {
          code: 521000,
          display: "^197^Mercury",
          
        },
        {
          code: 529003,
          display: "Guanosine",
          
        },
        {
          code: 538001,
          display: "2,3-Dihydroxybenzoate 3,4-dioxygenase",
          
        },
        {
          code: 566009,
          display: "Acrosin",
          
        },
        {
          code: 576007,
          display: "Blood group antibody Duck",
          
        },
        {
          code: 578008,
          display: "Hemoglobin Jianghua",
          
        },
        {
          code: 584006,
          display: "Blood group antibody Wr^b^",
          
        },
        {
          code: 585007,
          display: "SP - Substance P",
          
        },
        {
          code: 591009,
          display: "2-Oxoisovalerate dehydrogenase (acylating)",
          
        },
        {
          code: 593007,
          display: "Blood group antibody Holmes",
          
        },
        {
          code: 594001,
          display: "2-Oxoglutarate synthase",
          
        },
        {
          code: 597008,
          display: "^247^Californium",
          
        },
        {
          code: 604000,
          display: "Plant sapogenin glycoside",
          
        },
        {
          code: 611001,
          display: "Hippurate hydrolase",
          
        },
        {
          code: 620005,
          display: "Trichlorophenol",
          
        },
        {
          code: 648005,
          display: "Oil of calamus",
          
        },
        {
          code: 662003,
          display: "Aeromonas proteolytica aminopeptidase",
          
        },
        {
          code: 668004,
          display: "^185^Osmium",
          
        },
        {
          code: 683009,
          display: "Mercuric acetate",
          
        },
        {
          code: 686001,
          display: "Plastoquinol-plastocyanin reductase",
          
        },
        {
          code: 693002,
          display: "Trichothecene",
          
        },
        {
          code: 698006,
          display: "Erythromycin lactobionate",
          
        },
        {
          code: 699003,
          display: "Coal tar extract",
          
        },
        {
          code: 704006,
          display: "Blood group antigen Rx",
          
        },
        {
          code: 732002,
          display: "N-valeraldehyde",
          
        },
        {
          code: 735000,
          display: "Blood group antigen Jobbins",
          
        },
        {
          code: 747006,
          display: "Oxamniquine",
          
        },
        {
          code: 773001,
          display: "Hemoglobin M-Iwate",
          
        },
        {
          code: 785009,
          display: "Dextranase",
          
        },
        {
          code: 804003,
          display: "Creosotic acid",
          
        },
        {
          code: 819002,
          display: "Lytic antibody",
          
        },
        {
          code: 850000,
          display: "Stizolobate synthase",
          
        },
        {
          code: 859004,
          display: "Peptide-N^4^-(N-acetyl-b-glucosaminyl) asparagine amidase",
          
        },
        {
          code: 860009,
          display: "Immunoglobulin, aggregated",
          
        },
        {
          code: 873008,
          display: "Urethan",
          
        },
        {
          code: 876000,
          display: "D antigen",
          
        },
        {
          code: 877009,
          display: "Carboxypeptidase A",
          
        },
        {
          code: 889006,
          display: "[Acetyl-CoA carboxylase] kinase",
          
        },
        {
          code: 896008,
          display: "Ice",
          
        },
        {
          code: 905001,
          display: "o-Dihydroxycoumarin O^7^-glucosyltransferase",
          
        },
        {
          code: 923009,
          display: "Complement component 2",
          
        },
        {
          code: 925002,
          display: "Sodium iodipamide",
          
        },
        {
          code: 963005,
          display: "Pyridoxine 4-dehydrogenase",
          
        },
        {
          code: 974001,
          display: "Adenosylmethionine decarboxylase",
          
        },
        {
          code: 979006,
          display: "Carbamate kinase",
          
        },
        {
          code: 993004,
          display: "Palladium compound",
          
        },
        {
          code: 1002007,
          display: "Mannotetraose 2-alpha-N-acetylglucosaminyltransferase",
          
        },
        {
          code: 1010008,
          display: "N-Acetylneuraminate monooxygenase",
          
        },
        {
          code: 1018001,
          display: "Nornicotine",
          
        },
        {
          code: 1025008,
          display: "^93^Molybdenum",
          
        },
        {
          code: 1047008,
          display: "Guanine deaminase",
          
        },
        {
          code: 1050006,
          display: "Melilotate 3-monooxygenase",
          
        },
        {
          code: 1057009,
          display: "Phosphate salt",
          
        },
        {
          code: 1065007,
          display: "E. coli periplasmic proteinase",
          
        },
        {
          code: 1080001,
          display: "^202^Thallium",
          
        },
        {
          code: 1091008,
          display: "Coagulation factor inhibitor",
          
        },
        {
          code: 1097007,
          display: "Blood group antigen M^A^",
          
        },
        {
          code: 1105007,
          display: "Isochorismate synthase",
          
        },
        {
          code: 1113008,
          display: "Pancreatic ribonuclease",
          
        },
        {
          code: 1137008,
          display: "^240^Uranium",
          
        },
        {
          code: 1149009,
          display: "Hemoglobin Barcelona",
          
        },
        {
          code: 1160000,
          display: "Antibody to antigen in ISBT system LU",
          
        },
        {
          code: 1166006,
          display: "Ti - Titanium",
          
        },
        {
          code: 1169004,
          display: "Hemoglobin Gower-2",
          
        },
        {
          code: 1171004,
          display: "Fibrinogen Kawaguchi",
          
        },
        {
          code: 1185009,
          display: "Hemoglobin Roseau-Pointe Ã  Pitre",
          
        },
        {
          code: 1189003,
          display: "Hemoglobin F-M-Osaka",
          
        },
        {
          code: 1190007,
          display: "Mephenoxalone",
          
        },
        {
          code: 1219001,
          display: "Diethyl xanthogen disulfide",
          
        },
        {
          code: 1223009,
          display: "Blood group antigen Marks",
          
        },
        {
          code: 1244009,
          display: "Fibrinogen Madrid I",
          
        },
        {
          code: 1248007,
          display: "Leucostoma neutral proteinase",
          
        },
        {
          code: 1269009,
          display: "Amikacin sulfate",
          
        },
        {
          code: 1272002,
          display: "Pteridine oxidase",
          
        },
        {
          code: 1273007,
          display: "Blood group antibody Evelyn",
          
        },
        {
          code: 1313002,
          display: "Nitrate reductase (cytochrome)",
          
        },
        {
          code: 1319003,
          display: "Blood group antibody K18",
          
        },
        {
          code: 1320009,
          display: "Hemoglobin Manitoba",
          
        },
        {
          code: 1325004,
          display: "Metocurine iodide",
          
        },
        {
          code: 1331001,
          display: "Methamidophos",
          
        },
        {
          code: 1334009,
          display: "Estradiol receptor",
          
        },
        {
          code: 1336006,
          display: "Deoxycortone",
          
        },
        {
          code: 1341003,
          display: "Hemoglobin Ta-li",
          
        },
        {
          code: 1346008,
          display: "Blue shade eosin stain",
          
        },
        {
          code: 1355006,
          display: "Coagulation factor IX Oxford 3 variant",
          
        },
        {
          code: 1368003,
          display: "Iodine 131",
          
        },
        {
          code: 1371006,
          display: "Blood group antigen Big",
          
        },
        {
          code: 1373009,
          display: "^93^Zirconium",
          
        },
        {
          code: 1381005,
          display: "^126^Iodine",
          
        },
        {
          code: 1394007,
          display: "Iron pentacarbonyl",
          
        },
        {
          code: 1396009,
          display: "Actinium",
          
        },
        {
          code: 1405004,
          display: "Blood group antibody M^e^",
          
        },
        {
          code: 1408002,
          display: "Blood group antibody 1123K",
          
        },
        {
          code: 1416006,
          display: "Radium compound",
          
        },
        {
          code: 1450002,
          display: "Methylpentynol",
          
        },
        {
          code: 1466000,
          display: "Cyclomaltodextrinase",
          
        },
        {
          code: 1471007,
          display: "Elastin",
          
        },
        {
          code: 1472000,
          display: "Adenosine-phosphate deaminase",
          
        },
        {
          code: 1476002,
          display: "Codeine sulfate",
          
        },
        {
          code: 1477006,
          display: "Hemoglobin Yatsushiro",
          
        },
        {
          code: 1496005,
          display: "Proto-oncogene",
          
        },
        {
          code: 1506001,
          display: "CH1 (ISBT symbol)",
          
        },
        {
          code: 1517000,
          display: "HLA - Human leukocyte antigen B21",
          
        },
        {
          code: 1530004,
          display: "6-Carboxyhexanoate-coenzyme A ligase",
          
        },
        {
          code: 1535009,
          display: "Nitrogen fluoride",
          
        },
        {
          code: 1536005,
          display: "Pargyline hydrochloride",
          
        },
        {
          code: 1540001,
          display: "Tellurium radioisotope",
          
        },
        {
          code: 1545006,
          display: "Uridine phosphorylase",
          
        },
        {
          code: 1557002,
          display: "Talc dusting powder",
          
        },
        {
          code: 1565004,
          display: "Blood group antibody Buckalew",
          
        },
        {
          code: 1575001,
          display: "Maltose tetrapalmitate",
          
        },
        {
          code: 1603001,
          display: "Cobalt isotope",
          
        },
        {
          code: 1607000,
          display: "Homoserine kinase",
          
        },
        {
          code: 1609002,
          display: "N-octyl isosafrole sulfoxide",
          
        },
        {
          code: 1634002,
          display: "Blood group antigen Ven",
          
        },
        {
          code: 1649005,
          display: "Blood group antigen Sul",
          
        },
        {
          code: 1656004,
          display: "Hemoglobin Shaare Zedek",
          
        },
        {
          code: 1660001,
          display: "Plant seeds",
          
        },
        {
          code: 1668008,
          display: "Ceforanide",
          
        },
        {
          code: 1672007,
          display: "Ligase",
          
        },
        {
          code: 1673002,
          display: "Xylenol",
          
        },
        {
          code: 1675009,
          display: "^86^Rubidium",
          
        },
        {
          code: 1676005,
          display: "Blood group antibody LW^ab^",
          
        },
        {
          code: 1681001,
          display: "Blood group antibody BLe^b^",
          
        },
        {
          code: 1696002,
          display: "12-Hydroperoxy eicosatetraenoic acid",
          
        },
        {
          code: 1701009,
          display: "^191^Gold",
          
        },
        {
          code: 1710001,
          display: "UA - Uric acid",
          
        },
        {
          code: 1726000,
          display: "Diamond",
          
        },
        {
          code: 1727009,
          display: "Deoxylimonate A-ring-lactonase",
          
        },
        {
          code: 1740004,
          display: "Deoxy cytidine triphosphate",
          
        },
        {
          code: 1764003,
          display: "Saccharopine dehydrogenase (nicotinamide adenine dinucleotide phosphate ^+^,L-glutamate-forming)",
          
        },
        {
          code: 1768000,
          display: "Sucrose phosphorylase",
          
        },
        {
          code: 1786002,
          display: "Leucine-transfer ribonucleic acid ligase",
          
        },
        {
          code: 1793003,
          display: "Sodium trichloroacetate",
          
        },
        {
          code: 1795005,
          display: "Glyodin",
          
        },
        {
          code: 1798007,
          display: "Hemoglobin Hammersmith",
          
        },
        {
          code: 1799004,
          display: "L-Lysine oxidase",
          
        },
        {
          code: 1823002,
          display: "Hemoglobin Tochigi",
          
        },
        {
          code: 1827001,
          display: "Ribonuclease T>1<",
          
        },
        {
          code: 1886008,
          display: "Verdoglobin",
          
        },
        {
          code: 1904005,
          display: "Galactoside 3-fucosyltransferase",
          
        },
        {
          code: 1914001,
          display: "von Willebrand factor antibody",
          
        },
        {
          code: 1916004,
          display: "Boroglycerin",
          
        },
        {
          code: 1940007,
          display: "Immunoglobulin, GM>21< allotype",
          
        },
        {
          code: 1944003,
          display: "Coagulation factor X Patient variant",
          
        },
        {
          code: 1956002,
          display: "Buclizine hydrochloride",
          
        },
        {
          code: 1971003,
          display: "Loxapine hydrochloride",
          
        },
        {
          code: 1975007,
          display: "Blood group antibody Niemetz",
          
        },
        {
          code: 1978009,
          display: "Site-specific methyltransferase (cytosine-specific)",
          
        },
        {
          code: 1985008,
          display: "Vomitus",
          
        },
        {
          code: 1991005,
          display: "Lignin",
          
        },
        {
          code: 2000001,
          display: "Heavy nitrogen",
          
        },
        {
          code: 2006007,
          display: "Inosine diphosphate",
          
        },
        {
          code: 2008008,
          display: "^67^Gallium",
          
        },
        {
          code: 2009000,
          display: "Cobalt carbonyl",
          
        },
        {
          code: 2017008,
          display: "Deoxyribonucleic acid topoisomerase",
          
        },
        {
          code: 2027002,
          display: "Alternaria serine proteinase",
          
        },
        {
          code: 2029004,
          display: "Fibrinogen Oslo II",
          
        },
        {
          code: 2038002,
          display: "Blood group antibody Bg^b^",
          
        },
        {
          code: 2039005,
          display: "sym-Norspermidine synthase",
          
        },
        {
          code: 2050008,
          display: "Choloylglycine hydrolase",
          
        },
        {
          code: 2064008,
          display: "L-Xylulokinase",
          
        },
        {
          code: 2082006,
          display: "Vitronectin receptor alpha chain",
          
        },
        {
          code: 2085008,
          display: "Oncogene protein TCL",
          
        },
        {
          code: 2088005,
          display: "Page blue G-90 stain",
          
        },
        {
          code: 2096000,
          display: "Nicotinamide adenine dinucleotide ^+^ adenosine diphosphate-ribosyltransferase",
          
        },
        {
          code: 2100004,
          display: "Sulfonethylmethane",
          
        },
        {
          code: 2101000,
          display: "Yeast proteinase B",
          
        },
        {
          code: 2125008,
          display: "Betazole",
          
        },
        {
          code: 2130007,
          display: "Cyclohexane-1,2-diol dehydrogenase",
          
        },
        {
          code: 2141009,
          display: "Hydrogen",
          
        },
        {
          code: 2147008,
          display: "Blood group antigen Paular",
          
        },
        {
          code: 2151005,
          display: "Pyridoxamine-pyruvate aminotransferase",
          
        },
        {
          code: 2154002,
          display: "Tagaturonate reductase",
          
        },
        {
          code: 2159007,
          display: "Acid red 27",
          
        },
        {
          code: 2163000,
          display: "Dicofol",
          
        },
        {
          code: 2168009,
          display: "Bisphosphoglycerate mutase",
          
        },
        {
          code: 2179004,
          display: "Malonate-semialdehyde dehydratase",
          
        },
        {
          code: 2189000,
          display: "Hemoglobin F-Dammam",
          
        },
        {
          code: 2194000,
          display: "^101^Rhodium",
          
        },
        {
          code: 2195004,
          display: "Tocainide hydrochloride",
          
        },
        {
          code: 2197007,
          display: "Boric acid topical agent",
          
        },
        {
          code: 2201007,
          display: "Bacteriopurpurin",
          
        },
        {
          code: 2208001,
          display: "Phenylserine aldolase",
          
        },
        {
          code: 2212007,
          display: "Fibrinogen Bethesda II",
          
        },
        {
          code: 2215009,
          display: "Azuresin",
          
        },
        {
          code: 2240002,
          display: "Guanidinobutyrase",
          
        },
        {
          code: 2249001,
          display: "Gentamicin sulfate",
          
        },
        {
          code: 2254005,
          display: "Orotate",
          
        },
        {
          code: 2260005,
          display: "Human leukocyte antigen DRw18",
          
        },
        {
          code: 2262002,
          display: "Cellulose polysulfatase",
          
        },
        {
          code: 2264001,
          display: "Selenium isotope",
          
        },
        {
          code: 2309006,
          display: "Au - Gold",
          
        },
        {
          code: 2311002,
          display: "Prostacyclin synthase",
          
        },
        {
          code: 2329007,
          display: "Blood group antibody Vel",
          
        },
        {
          code: 2331003,
          display: "Saccharide",
          
        },
        {
          code: 2338009,
          display: "Root",
          
        },
        {
          code: 2343002,
          display: "Guthion",
          
        },
        {
          code: 2346005,
          display: "Vascormone",
          
        },
        {
          code: 2354007,
          display: "3'-Nucleotidase",
          
        },
        {
          code: 2358005,
          display: "Glass fragment, device",
          
        },
        {
          code: 2369008,
          display: "Indole-3-acetate beta-glucosyltransferase",
          
        },
        {
          code: 2370009,
          display: "Uridine diphosphate-N-acetylmuramate-alanine ligase",
          
        },
        {
          code: 2376003,
          display: "Mercury compound",
          
        },
        {
          code: 2384004,
          display: "^230^Uranium",
          
        },
        {
          code: 2404002,
          display: "Blood group antibody St^a^",
          
        },
        {
          code: 2405001,
          display: "b- Propiolactone",
          
        },
        {
          code: 2414006,
          display: "Prolactin receptor",
          
        },
        {
          code: 2430003,
          display: "Silicon radioisotope",
          
        },
        {
          code: 2431004,
          display: "Blood group antibody Friedberg",
          
        },
        {
          code: 2441001,
          display: "Mercury radioisotope",
          
        },
        {
          code: 2444009,
          display: "Human leukocyte antigen Dw25",
          
        },
        {
          code: 2450004,
          display: "Mannosamine",
          
        },
        {
          code: 2462000,
          display: "Glucose dehydrogenase (nicotinamide adenine dinucleotide phosphate ^+^)",
          
        },
        {
          code: 2466002,
          display: "Chloride peroxidase",
          
        },
        {
          code: 2500009,
          display: "Lymphocyte antigen CDw41b",
          
        },
        {
          code: 2509005,
          display: "D-Glutamate oxidase",
          
        },
        {
          code: 2516006,
          display: "Metallic sulfide compound",
          
        },
        {
          code: 2522002,
          display: "Extravascular blood",
          
        },
        {
          code: 2529006,
          display: "Hemoglobin Wood",
          
        },
        {
          code: 2537003,
          display: "Antituberculosis agent",
          
        },
        {
          code: 2568004,
          display: "Blood group antigen McAuley",
          
        },
        {
          code: 2573005,
          display: "Immunoglobulin, GM>13< allotype",
          
        },
        {
          code: 2575003,
          display: "Zinc alpha-2 glycoprotein",
          
        },
        {
          code: 2595009,
          display: "^119m^Tellurium",
          
        },
        {
          code: 2597001,
          display: "Alpha-1 globulin",
          
        },
        {
          code: 2611008,
          display: "Blood group antibody La Fave",
          
        },
        {
          code: 2637006,
          display: "Indium isotope",
          
        },
        {
          code: 2648004,
          display: "Bile vomitus",
          
        },
        {
          code: 2649007,
          display: "Azo-dye",
          
        },
        {
          code: 2660003,
          display: "Sodium dehydrocholate",
          
        },
        {
          code: 2671002,
          display: "3-Methyl-2-oxobutanoate hydroxy-methyltransferase",
          
        },
        {
          code: 2674005,
          display: "^128^Cesium",
          
        },
        {
          code: 2676007,
          display: "C3(H20)",
          
        },
        {
          code: 2678008,
          display: "Hemoglobin New Mexico",
          
        },
        {
          code: 2680002,
          display: "Factor XIII antibody",
          
        },
        {
          code: 2698003,
          display: "Natural gas",
          
        },
        {
          code: 2705002,
          display: "^72^Arsenic",
          
        },
        {
          code: 2706001,
          display: "Blood group antigen Vennera",
          
        },
        {
          code: 2719002,
          display: "Tartrate dehydratase",
          
        },
        {
          code: 2721007,
          display: "Blood group antigen McC^f^",
          
        },
        {
          code: 2728001,
          display: "Lewis system antigen",
          
        },
        {
          code: 2753003,
          display: "Blood group antibody M>1<",
          
        },
        {
          code: 2754009,
          display: "Hemoglobin F-Kennestone",
          
        },
        {
          code: 2765004,
          display: "SC3 (ISBT symbol)",
          
        },
        {
          code: 2778004,
          display: "Pleural fluid",
          
        },
        {
          code: 2796008,
          display: "Methanthelinium",
          
        },
        {
          code: 2799001,
          display: "Methylbenzethonium",
          
        },
        {
          code: 2823004,
          display: "Hemoglobin Bristol",
          
        },
        {
          code: 2832002,
          display: "Molybdenum compound",
          
        },
        {
          code: 2846002,
          display: "Hemoglobin Saitama",
          
        },
        {
          code: 2869004,
          display: "Ethanoic acid",
          
        },
        {
          code: 2878005,
          display: "Pethidine hydrochloride",
          
        },
        {
          code: 2880004,
          display: "Calcium sulfate",
          
        },
        {
          code: 2883002,
          display: "Exopolygalacturonate lyase",
          
        },
        {
          code: 2913009,
          display: "Immunoglobulin Epsilon chain",
          
        },
        {
          code: 2916001,
          display: "^22^Neon",
          
        },
        {
          code: 2925007,
          display: "Fluoromethalone",
          
        },
        {
          code: 2927004,
          display: "Rescinnamine",
          
        },
        {
          code: 2938004,
          display: "Pyrazole",
          
        },
        {
          code: 2942001,
          display: "Carbon^14^ D-xylose",
          
        },
        {
          code: 2950005,
          display: "Hemoglobin L-Persian Gulf",
          
        },
        {
          code: 2958003,
          display: "Zinc caprylate",
          
        },
        {
          code: 2964005,
          display: "Dimethoxyamphetamine",
          
        },
        {
          code: 2974008,
          display: "Trichophyton schoenleinii collagenase",
          
        },
        {
          code: 2988007,
          display: "Human leukocyte antigen Aw",
          
        },
        {
          code: 2991007,
          display: "Mecamylamine hydrochloride",
          
        },
        {
          code: 2995003,
          display: "Arecoline",
          
        },
        {
          code: 3027009,
          display: "^133^Barium",
          
        },
        {
          code: 3031003,
          display: "Dihydroxyaluminum sodium carbonate",
          
        },
        {
          code: 3040004,
          display: "Technetium Tc^99m^ disofenin",
          
        },
        {
          code: 3045009,
          display: "Nitrochlorobenzene",
          
        },
        {
          code: 3052006,
          display: "Ornithine ketoacid aminotransferase",
          
        },
        {
          code: 3066001,
          display: "Triiodothyroacetic acid",
          
        },
        {
          code: 3070009,
          display: "Aspartate-ammonia ligase",
          
        },
        {
          code: 3087006,
          display: "Oil of male fern",
          
        },
        {
          code: 3107005,
          display: "Hemoglobin Shuangfeng",
          
        },
        {
          code: 3108000,
          display: "Aspergillus deoxyribonuclease K>1<",
          
        },
        {
          code: 3131000,
          display: "Blood group antigen Middel",
          
        },
        {
          code: 3136005,
          display: "Cefoperazone sodium",
          
        },
        {
          code: 3142009,
          display: "Azacyclonol",
          
        },
        {
          code: 3145006,
          display: "Penicillic acid",
          
        },
        {
          code: 3150000,
          display: "Sialate O-acetylesterase",
          
        },
        {
          code: 3151001,
          display: "Left upper lobe mucus",
          
        },
        {
          code: 3155005,
          display: "3-Phosphoglyceroyl-phosphate-polyphosphate phosphotransferase",
          
        },
        {
          code: 3161008,
          display: "3-Methylhistidine",
          
        },
        {
          code: 3167007,
          display: "Hard coal",
          
        },
        {
          code: 3187008,
          display: "Blood group antigen Nielsen",
          
        },
        {
          code: 3193000,
          display: "alpha-1,4-Glucan-protein synthase (uridine diphosphate-forming)",
          
        },
        {
          code: 3197004,
          display: "Inosine monophosphate",
          
        },
        {
          code: 3209002,
          display: "Pancuronium sodium",
          
        },
        {
          code: 3212004,
          display: "Manganese sulfate",
          
        },
        {
          code: 3225007,
          display: "Fibrinogen Seattle I",
          
        },
        {
          code: 3232003,
          display: "o-Benzyl-parachlorophenol",
          
        },
        {
          code: 3271000,
          display: "Hemoglobin Southampton",
          
        },
        {
          code: 3273002,
          display: "Tyrosine-ester sulfotransferase",
          
        },
        {
          code: 3300001,
          display: "Euphorbain",
          
        },
        {
          code: 3318003,
          display: "Vaginal secretions",
          
        },
        {
          code: 3325005,
          display: "Lipopolysaccharide",
          
        },
        {
          code: 3339005,
          display: "(R)-20-Hydroxysteroid dehydrogenase",
          
        },
        {
          code: 3340007,
          display: "Diastase",
          
        },
        {
          code: 3342004,
          display: "Copper isotope",
          
        },
        {
          code: 3346001,
          display: "Hemoglobin Brest",
          
        },
        {
          code: 3378009,
          display: "Imipramine hydrochloride",
          
        },
        {
          code: 3379001,
          display: "Merthiolate",
          
        },
        {
          code: 3392003,
          display: "Aldehyde dehydrogenase (acceptor)",
          
        },
        {
          code: 3405005,
          display: "2-Hydroxy-3-oxoadipate synthase",
          
        },
        {
          code: 3411008,
          display: "bis-(Dimethylthiocarbamyl) disulfide",
          
        },
        {
          code: 3437006,
          display: "Hydroxymethylglutaryl-coenzyme A hydrolase",
          
        },
        {
          code: 3440006,
          display: "Biotin carboxylase",
          
        },
        {
          code: 3455002,
          display: "Discontinued pesticide",
          
        },
        {
          code: 3463001,
          display: "L-Amino-acid dehydrogenase",
          
        },
        {
          code: 3465008,
          display: "Deoxyribonucleic acid topoisomerase (adenosine triphosphate [ATP]-hydrolysing)",
          
        },
        {
          code: 3466009,
          display: "Dimethylamine",
          
        },
        {
          code: 3492002,
          display: "Galactinol-sucrose galactosyltransferase",
          
        },
        {
          code: 3493007,
          display: "Smegma clitoridis",
          
        },
        {
          code: 3495000,
          display: "Cystine aminopeptidase",
          
        },
        {
          code: 3501003,
          display: "Isoxsuprine hydrochloride",
          
        },
        {
          code: 3523004,
          display: "Hemoglobin Q-India",
          
        },
        {
          code: 3532002,
          display: "Laryngeal mucus",
          
        },
        {
          code: 3555004,
          display: "Blood group antigen Morrison",
          
        },
        {
          code: 3579002,
          display: "^129^Cesium",
          
        },
        {
          code: 3581000,
          display: "Glucose-6-phosphatase",
          
        },
        {
          code: 3587001,
          display: "Malate dehydrogenase (decarboxylating)",
          
        },
        {
          code: 3588006,
          display: "Complement enzyme",
          
        },
        {
          code: 3592004,
          display: "Short-acting thyroid stimulator",
          
        },
        {
          code: 3597005,
          display: "Acebutolol hydrochloride",
          
        },
        {
          code: 3601005,
          display: "Ether solvent",
          
        },
        {
          code: 3602003,
          display: "Warm antibody",
          
        },
        {
          code: 3610002,
          display: "Epoxide hydrolase",
          
        },
        {
          code: 3617004,
          display: "^79^Selenium",
          
        },
        {
          code: 3648007,
          display: "Glucocorticoid receptor",
          
        },
        {
          code: 3655009,
          display: "Hb - Hemoglobin Constant Spring",
          
        },
        {
          code: 3672002,
          display: "Fibrinogen Caracas",
          
        },
        {
          code: 3684000,
          display: "Phenylacetic acid",
          
        },
        {
          code: 3689005,
          display: "Hemoglobin Mizushi",
          
        },
        {
          code: 3692009,
          display: "Sodium sulfite",
          
        },
        {
          code: 3693004,
          display: "Fibrinogen Dusart",
          
        },
        {
          code: 3702007,
          display: "Cytidine diphosphate (CDP) glycerol glycerophosphotransferase",
          
        },
        {
          code: 3710008,
          display: "Prostaglandin-endoperoxide synthase",
          
        },
        {
          code: 3718001,
          display: "Cow's milk",
          
        },
        {
          code: 3726009,
          display: "Valine-transfer ribonucleic acid ligase",
          
        },
        {
          code: 3727000,
          display: "Hemoglobin F-Port Royal",
          
        },
        {
          code: 3730007,
          display: "Blood group antigen Lanthois",
          
        },
        {
          code: 3737005,
          display: "Nitrate reductase (reduced nicotinamide adenine dinucleotide)",
          
        },
        {
          code: 3742002,
          display: "Extracellular crystal",
          
        },
        {
          code: 3757009,
          display: "Gossypol",
          
        },
        {
          code: 3771001,
          display: "Neuromelanin",
          
        },
        {
          code: 3775005,
          display: "Choline dehydrogenase",
          
        },
        {
          code: 3776006,
          display: "Xanthine dehydrogenase",
          
        },
        {
          code: 3792001,
          display: "AA - Arachidonic acid",
          
        },
        {
          code: 3793006,
          display: "Soluble barium compound",
          
        },
        {
          code: 3800009,
          display: "Acetate kinase",
          
        },
        {
          code: 3807007,
          display: "RH4 (ISBT symbol)",
          
        },
        {
          code: 3811001,
          display: "Magnesium-protoporphyrin methyltransferase",
          
        },
        {
          code: 3812008,
          display: "Beryllium isotope",
          
        },
        {
          code: 3816006,
          display: "Vanadium isotope",
          
        },
        {
          code: 3823007,
          display: "Prochlorperazine edisylate",
          
        },
        {
          code: 3829006,
          display: "Fe - Iron",
          
        },
        {
          code: 3834005,
          display: "CMP-N-acetylneuraminate-(alpha-N-acetyl-neuraminyl-2,3-beta-galactosyl-1,3)-N-acetyl-galactosaminide alpha-2,6-sialyltransferase",
          
        },
        {
          code: 3836007,
          display: "Glutaminase",
          
        },
        {
          code: 3844007,
          display: "Protoaphin-aglucone dehydratase (cyclizing)",
          
        },
        {
          code: 3848005,
          display: "Nitrotoluene",
          
        },
        {
          code: 3849002,
          display: "Carbon black",
          
        },
        {
          code: 3854006,
          display: "bis-Chloro methyl ether",
          
        },
        {
          code: 3874004,
          display: "Hydrocodone bitartrate",
          
        },
        {
          code: 3892007,
          display: "Thymidine",
          
        },
        {
          code: 3896005,
          display: "p-Hydroxybenzoate ester",
          
        },
        {
          code: 3897001,
          display: "MNS30 (ISBT symbol)",
          
        },
        {
          code: 3906002,
          display: "Rectified birch tar oil",
          
        },
        {
          code: 3920009,
          display: "Hemoglobin Atago",
          
        },
        {
          code: 3930000,
          display: "Manufactured gas",
          
        },
        {
          code: 3932008,
          display: "^64^Copper",
          
        },
        {
          code: 3941003,
          display: "Metronidazole hydrochloride",
          
        },
        {
          code: 3945007,
          display: "Tin isotope",
          
        },
        {
          code: 3958008,
          display: "^245^Californium",
          
        },
        {
          code: 3961009,
          display: "Blood group antigen Ritherford",
          
        },
        {
          code: 3976001,
          display: "Blood group antigen HEMPAS",
          
        },
        {
          code: 3982003,
          display: "Oxaloacetate decarboxylase",
          
        },
        {
          code: 3983008,
          display: "N,-N-dimethyltryptamine",
          
        },
        {
          code: 3990003,
          display: "Alkaline phosphatase bone isoenzyme",
          
        },
        {
          code: 3994007,
          display: "Hemoglobin Tampa",
          
        },
        {
          code: 4014000,
          display: "Sulfisomidine",
          
        },
        {
          code: 4024008,
          display: "Soft metal",
          
        },
        {
          code: 4025009,
          display: "Captodiame",
          
        },
        {
          code: 4043008,
          display: "Etidocaine hydrochloride",
          
        },
        {
          code: 4047009,
          display: "cis-1,2-Dihydrobenzene-1,2-diol dehydrogenase",
          
        },
        {
          code: 4048004,
          display: "1,1,2,2-Tetrachloro-1,2- difluoroethane",
          
        },
        {
          code: 4067000,
          display: "Chorismate mutase",
          
        },
        {
          code: 4076007,
          display: "PTH - Parathyroid hormone",
          
        },
        {
          code: 4077003,
          display: "Dihydrolipoamide succinyltransferase",
          
        },
        {
          code: 4080002,
          display: "Hemoglobin Grady, Dakar",
          
        },
        {
          code: 4091009,
          display: "Enteropeptidase",
          
        },
        {
          code: 4097008,
          display: "Apo-SAA complex",
          
        },
        {
          code: 4104007,
          display: "Chondroitin sulfate",
          
        },
        {
          code: 4105008,
          display: "Adenylate cyclase",
          
        },
        {
          code: 4115002,
          display: "Blood group antibody Norlander",
          
        },
        {
          code: 4137009,
          display: "sec-Butyl acetate",
          
        },
        {
          code: 4153007,
          display: "Long-chain-enoyl-coenzyme A hydratase",
          
        },
        {
          code: 4167003,
          display: "PECAM-1 - Platelet endothelial cell adhesion molecule-1",
          
        },
        {
          code: 4169000,
          display: "Blood group antibody Le^bH^",
          
        },
        {
          code: 4177001,
          display: "Hemoglobin Long Island-Marseille",
          
        },
        {
          code: 4182008,
          display: "Cytidine diphosphate (CDP) diacylglycerol-serine O-phosphatidyl-transferase",
          
        },
        {
          code: 4188007,
          display: "Fibrinogen Sydney II",
          
        },
        {
          code: 4200007,
          display: "Neriifolin",
          
        },
        {
          code: 4201006,
          display: "6-Aminohexanoate-dimer hydrolase",
          
        },
        {
          code: 4203009,
          display: "Imipramine pamoate",
          
        },
        {
          code: 4207005,
          display: "Cortisone beta-reductase",
          
        },
        {
          code: 4217000,
          display: "Fluorosilicate salt",
          
        },
        {
          code: 4218005,
          display: "Immunoglobulin, GM>23< allotype",
          
        },
        {
          code: 4231000,
          display: "Gallium isotope",
          
        },
        {
          code: 4239003,
          display: "Glycerol dehydrogenase",
          
        },
        {
          code: 4255005,
          display: "Americium 241",
          
        },
        {
          code: 4289006,
          display: "Keyhole-limpet hemocyanin",
          
        },
        {
          code: 4290002,
          display: "Linamarin synthase",
          
        },
        {
          code: 4314009,
          display: "Blood group antibody Allchurch",
          
        },
        {
          code: 4334005,
          display: "Tar oil",
          
        },
        {
          code: 4342006,
          display: "2-Aminopyridine",
          
        },
        {
          code: 4353000,
          display: "Di-n-butylphthalate",
          
        },
        {
          code: 4355007,
          display: "Coagulation factor IX San Dimas variant",
          
        },
        {
          code: 4362003,
          display: "4-Coumarate-coenzyme A ligase",
          
        },
        {
          code: 4370008,
          display: "Acetone",
          
        },
        {
          code: 4393002,
          display: "Blood group antigen Fedor",
          
        },
        {
          code: 4401009,
          display: "Blood group antibody H>T<",
          
        },
        {
          code: 4413004,
          display: "Benzypyrinium",
          
        },
        {
          code: 4422003,
          display: "Blood group antigen",
          
        },
        {
          code: 4423008,
          display: "Fibrinogen New York II",
          
        },
        {
          code: 4425001,
          display: "Blood group antibody Binge",
          
        },
        {
          code: 4435007,
          display: "Sulfuryl fluoride",
          
        },
        {
          code: 4437004,
          display: "^127^Cesium",
          
        },
        {
          code: 4471008,
          display: "^244^Californium",
          
        },
        {
          code: 4479005,
          display: "Hemoglobin Brockton",
          
        },
        {
          code: 4480008,
          display: "Sulfaethidole",
          
        },
        {
          code: 4509009,
          display: "Plant phenanthrene toxin",
          
        },
        {
          code: 4518006,
          display: "Buthenal",
          
        },
        {
          code: 4534009,
          display: "^208^Bismuth",
          
        },
        {
          code: 4540002,
          display: "Adenosine diphosphate (ADP) deaminase",
          
        },
        {
          code: 4546008,
          display: "Tetradecanoic acid",
          
        },
        {
          code: 4555006,
          display: "Blood group antibody Rils",
          
        },
        {
          code: 4560005,
          display: "Hemoglobin Mizuho",
          
        },
        {
          code: 4561009,
          display: "Arginine decarboxylase",
          
        },
        {
          code: 4564001,
          display: "Blood group antibody Sisson",
          
        },
        {
          code: 4567008,
          display: "Galactose-1-phosphate thymidylyltransferase",
          
        },
        {
          code: 4582003,
          display: "Blood group antigen N^A^",
          
        },
        {
          code: 4591004,
          display: "MNS22 (ISBT symbol)",
          
        },
        {
          code: 4610008,
          display: "Senile cardiac protein",
          
        },
        {
          code: 4616002,
          display: "Triclobisonium chloride",
          
        },
        {
          code: 4629002,
          display: "Hypoglycin B",
          
        },
        {
          code: 4635002,
          display: "Arterial blood",
          
        },
        {
          code: 4643007,
          display: "Calf thymus ribonuclease H",
          
        },
        {
          code: 4656000,
          display: "Alcian blue 8GX stain",
          
        },
        {
          code: 4674009,
          display: "2,3-Dihydroxybenzoate serine ligase",
          
        },
        {
          code: 4681002,
          display: "Potassium permanganate",
          
        },
        {
          code: 4693006,
          display: "Chromium^51^ albumin",
          
        },
        {
          code: 4700006,
          display: "Bovine insulin",
          
        },
        {
          code: 4706000,
          display: "Chlorine monoxide",
          
        },
        {
          code: 4714006,
          display: "^183m^Osmium",
          
        },
        {
          code: 4728000,
          display: "Scopulariopsis proteinase",
          
        },
        {
          code: 4731004,
          display: "Aluminum pyro powder",
          
        },
        {
          code: 4732006,
          display: "Oncogene protein P55, V-MYC",
          
        },
        {
          code: 4746006,
          display: "Hemoglobin Mito",
          
        },
        {
          code: 4761007,
          display: "CD30 - Cluster of differentiation antigen 30",
          
        },
        {
          code: 4762000,
          display: "Platelet antigen HPA-3b",
          
        },
        {
          code: 4777008,
          display: "Fluroxene",
          
        },
        {
          code: 4780009,
          display: "Secbutabarbital sodium",
          
        },
        {
          code: 4786003,
          display: "beta-1,4-Mannosyl-glycoprotein beta-1,4-N-acetylglucosaminyltransferase",
          
        },
        {
          code: 4789005,
          display: "Blood group antibody Bultar",
          
        },
        {
          code: 4793004,
          display: "Azobenzene reductase",
          
        },
        {
          code: 4814001,
          display: "Valethamate",
          
        },
        {
          code: 4824009,
          display: "MAO - Monoamine oxidase",
          
        },
        {
          code: 4825005,
          display: "Peptidyl-glycinamidase",
          
        },
        {
          code: 4831008,
          display: "Arabinose-5-phosphate isomerase",
          
        },
        {
          code: 4832001,
          display: "Technetium Tc^99m^ mebrofenin",
          
        },
        {
          code: 4833006,
          display: "Glucan endo-1,3-alpha-glucosidase",
          
        },
        {
          code: 4844003,
          display: "3,3' Diiodothyronine",
          
        },
        {
          code: 4864008,
          display: "AMP - Adenosine monophosphate",
          
        },
        {
          code: 4872005,
          display: "Glucosulfone",
          
        },
        {
          code: 4878009,
          display: "Human leukocyte antigen Dw3",
          
        },
        {
          code: 4882006,
          display: "Ichthyoallyeinotoxin",
          
        },
        {
          code: 4889002,
          display: "Xylulokinase",
          
        },
        {
          code: 4901003,
          display: "Pyruvate oxidase (coenzyme A-acetylating)",
          
        },
        {
          code: 4925006,
          display: "Oncogene protein V-ABC",
          
        },
        {
          code: 4933007,
          display: "Leukocyte M1",
          
        },
        {
          code: 4940008,
          display: "Tattoo dye",
          
        },
        {
          code: 4955004,
          display: "Neoplastic structural gene",
          
        },
        {
          code: 4962008,
          display: "Tree bark",
          
        },
        {
          code: 4963003,
          display: "Neutral amino acid",
          
        },
        {
          code: 4965005,
          display: "Glutathione reductase",
          
        },
        {
          code: 4968007,
          display: "Acumentin",
          
        },
        {
          code: 4986005,
          display: "Magnesium borate",
          
        },
        {
          code: 5003005,
          display: "Hemoglobin Swan River",
          
        },
        {
          code: 5004004,
          display: "Blood group antibody Panzar",
          
        },
        {
          code: 5007006,
          display: "Papain",
          
        },
        {
          code: 5024000,
          display: "Fresh water",
          
        },
        {
          code: 5031001,
          display: "3-3'Dichlorobenzidine",
          
        },
        {
          code: 5040002,
          display: "Cesium",
          
        },
        {
          code: 5043000,
          display: "Erythrosin Y stain",
          
        },
        {
          code: 5045007,
          display: "Oncogene protein TCL4",
          
        },
        {
          code: 5059000,
          display: "^97^Technetium",
          
        },
        {
          code: 5060005,
          display: "^132^Cesium",
          
        },
        {
          code: 5061009,
          display: "Protein-methionine-S-oxide reductase",
          
        },
        {
          code: 5064001,
          display: "Blood group antibody D 1276",
          
        },
        {
          code: 5081005,
          display: "RH31 (ISBT symbol)",
          
        },
        {
          code: 5086000,
          display: "Gelsolin",
          
        },
        {
          code: 5094007,
          display: "Blood group antigen Rios",
          
        },
        {
          code: 5098005,
          display: "Fennel oil",
          
        },
        {
          code: 5109006,
          display: "Methylated-deoxyribonucleic acid-protein-cysteine methyltransferase",
          
        },
        {
          code: 5142007,
          display: "Coagulation factor II Houston variant",
          
        },
        {
          code: 5160007,
          display: "Metal compound",
          
        },
        {
          code: 5163009,
          display: "Scombrotoxin",
          
        },
        {
          code: 5167005,
          display: "Zinc chloride fumes",
          
        },
        {
          code: 5172001,
          display: "Coagulation factor Xa",
          
        },
        {
          code: 5179005,
          display: "Connective tissue fiber",
          
        },
        {
          code: 5200001,
          display: "trans-Epoxysuccinate hydrolase",
          
        },
        {
          code: 5206007,
          display: "Cyanate compound",
          
        },
        {
          code: 5220000,
          display: "Bacitracin",
          
        },
        {
          code: 5226006,
          display: "Flavone O^7^-beta-glucosyltransferase",
          
        },
        {
          code: 5250008,
          display: "Thymus-independent antigen",
          
        },
        {
          code: 5252000,
          display: "Hafnium radioisotope",
          
        },
        {
          code: 5253005,
          display: "Hemoglobin Woodville",
          
        },
        {
          code: 5259009,
          display: "Blood group antigen Braden",
          
        },
        {
          code: 5289002,
          display: "Scilliroside",
          
        },
        {
          code: 5303002,
          display: "Hemoglobin Hoshida",
          
        },
        {
          code: 5305009,
          display: "Polynucleotide",
          
        },
        {
          code: 5307001,
          display: "Blood group antigen Hamet",
          
        },
        {
          code: 5312000,
          display: "^65^Zinc",
          
        },
        {
          code: 5323001,
          display: "Uridine diphosphate glucuronic acid",
          
        },
        {
          code: 5330007,
          display: "Actin-binding protein",
          
        },
        {
          code: 5339008,
          display: "L-Glycol dehydrogenase",
          
        },
        {
          code: 5340005,
          display: "Blood group antigen Swietlik",
          
        },
        {
          code: 5392001,
          display: "Propylene glycol monomethyl ether",
          
        },
        {
          code: 5395004,
          display: "Pyridoxamine-phosphate oxidase",
          
        },
        {
          code: 5404007,
          display: "Lymphocyte antigen CD45RA",
          
        },
        {
          code: 5405008,
          display: "^60^Cobalt",
          
        },
        {
          code: 5406009,
          display: "beta-L-Arabinosidase",
          
        },
        {
          code: 5420002,
          display: "Accessory sinus mucus",
          
        },
        {
          code: 5439007,
          display: "Blood group antibody Do^a^",
          
        },
        {
          code: 5442001,
          display: "Page blue 83",
          
        },
        {
          code: 5453007,
          display: "Iridium isotope",
          
        },
        {
          code: 5471000,
          display: "Hemoglobin G-Coushatta",
          
        },
        {
          code: 5474008,
          display: "Propionate-CoA ligase",
          
        },
        {
          code: 5477001,
          display: "Ferric subsulfate",
          
        },
        {
          code: 5483003,
          display: "Oxalate CoA-transferase",
          
        },
        {
          code: 5504009,
          display: "Blood group antigen Fuerhart",
          
        },
        {
          code: 5511008,
          display: "Inosinate nucleosidase",
          
        },
        {
          code: 5513006,
          display: "Immunoglobulin, Alpha chain",
          
        },
        {
          code: 5515004,
          display: "Rhodium fumes",
          
        },
        {
          code: 5533005,
          display: "Blood group antibody Kp^a^",
          
        },
        {
          code: 5537006,
          display: "Immunoglobulin, Delta chain",
          
        },
        {
          code: 5540006,
          display: "Calcium",
          
        },
        {
          code: 5547009,
          display: "^233^Plutonium",
          
        },
        {
          code: 5548004,
          display: "2-Dehydro-3-deoxy-D-pentonate aldolase",
          
        },
        {
          code: 5568005,
          display: "Hemoglobin Hijiyama",
          
        },
        {
          code: 5573004,
          display: "Blood group antigen Oca",
          
        },
        {
          code: 5589001,
          display: "Licodione O^2'^-methyltransferase",
          
        },
        {
          code: 5590005,
          display: "Beryllium radioisotope",
          
        },
        {
          code: 5628003,
          display: "Hemoglobin I-High Wycombe",
          
        },
        {
          code: 5629006,
          display: "Cytidylic acid",
          
        },
        {
          code: 5637003,
          display: "HLA-DQw6 antigen",
          
        },
        {
          code: 5641004,
          display: "Valproate semisodium",
          
        },
        {
          code: 5647000,
          display: "Griseofulvin ultramicrosize",
          
        },
        {
          code: 5656008,
          display: "^116m^Antimony",
          
        },
        {
          code: 5657004,
          display: "Coal tar topical solution",
          
        },
        {
          code: 5659001,
          display: "Hemoglobin J-Tongariki",
          
        },
        {
          code: 5670008,
          display: "Gold isotope",
          
        },
        {
          code: 5681006,
          display: "Ceftizoxime sodium",
          
        },
        {
          code: 5691000,
          display: "Absorbable gelatin sponge",
          
        },
        {
          code: 5692007,
          display: "Cyanocobalamin Co^58^",
          
        },
        {
          code: 5699003,
          display: "Somatomedin C",
          
        },
        {
          code: 5700002,
          display: "Blood group antibody Gomez",
          
        },
        {
          code: 5702005,
          display: "^106m^Silver",
          
        },
        {
          code: 5704006,
          display: "Galactokinase",
          
        },
        {
          code: 5705007,
          display: "1,3-Propanediol dehydrogenase",
          
        },
        {
          code: 5739006,
          display: "Stramonium",
          
        },
        {
          code: 5746002,
          display: "^118m^Antimony",
          
        },
        {
          code: 5757007,
          display: "HLA-Cw8 antigen",
          
        },
        {
          code: 5762008,
          display: "Heterogeneous nuclear RNA",
          
        },
        {
          code: 5764009,
          display: "^242^Plutonium",
          
        },
        {
          code: 5767002,
          display: "Sulfamerazine",
          
        },
        {
          code: 5774007,
          display: "White petrolatum",
          
        },
        {
          code: 5800007,
          display: "tRNA (5-methylaminomethyl-2-thiouridylate)-methyltransferase",
          
        },
        {
          code: 5813001,
          display: "Malate dehydrogenase",
          
        },
        {
          code: 5826002,
          display: "Ethyl-4-bis-(hydroxypropyl)-1-aminobenzoate",
          
        },
        {
          code: 5827006,
          display: "Crotonaldehyde",
          
        },
        {
          code: 5829009,
          display: "Hemoglobin Vaasa",
          
        },
        {
          code: 5830004,
          display: "Hemoglobin Bart",
          
        },
        {
          code: 5840001,
          display: "Blood group antibody Wj",
          
        },
        {
          code: 5858007,
          display: "^110m^Indium",
          
        },
        {
          code: 5863006,
          display: "Vitexin beta-glucosyltransferase",
          
        },
        {
          code: 5896008,
          display: "Hellebrin",
          
        },
        {
          code: 5899001,
          display: "Bacterial structural gene",
          
        },
        {
          code: 5907009,
          display: "Quinidine polygalacturonate",
          
        },
        {
          code: 5910002,
          display: "Oncogene protein PP60, V-SRC",
          
        },
        {
          code: 5915007,
          display: "Blood group antigen Gladding",
          
        },
        {
          code: 5927005,
          display: "Lactaldehyde dehydrogenase",
          
        },
        {
          code: 5931004,
          display: "Technetium Tc^99m^ sulfur colloid",
          
        },
        {
          code: 5932006,
          display: "Cysteine",
          
        },
        {
          code: 5950004,
          display: "3',5'-Cyclic-nucleotide phosphodiesterase",
          
        },
        {
          code: 5955009,
          display: "Diethylene glycol",
          
        },
        {
          code: 5977008,
          display: "Blood group antigen Bullock",
          
        },
        {
          code: 5989005,
          display: "Immunoglobulin, GM>17< allotype",
          
        },
        {
          code: 5991002,
          display: "D-Fuconate dehydratase",
          
        },
        {
          code: 6021003,
          display: "^88^Yttrium",
          
        },
        {
          code: 6038004,
          display: "Oxygen radioisotope",
          
        },
        {
          code: 6043006,
          display: "Bone cement",
          
        },
        {
          code: 6044000,
          display: "Carbon disulfide",
          
        },
        {
          code: 6054001,
          display: "Doxylamine succinate",
          
        },
        {
          code: 6056004,
          display: "Blood group antibody Wk^a^",
          
        },
        {
          code: 6068008,
          display: "Blood group antigen Mil",
          
        },
        {
          code: 6083003,
          display: "Hydroxylysine",
          
        },
        {
          code: 6085005,
          display: "Synovial fluid",
          
        },
        {
          code: 6088007,
          display: "Benzfetamine hydrochloride",
          
        },
        {
          code: 6089004,
          display: "Lochia alba",
          
        },
        {
          code: 6091007,
          display: "Blood group antibody L Harris",
          
        },
        {
          code: 6107003,
          display: "Asparagusate reductase (NADH)",
          
        },
        {
          code: 6109000,
          display: "Aromatic-amino-acid aminotransferase",
          
        },
        {
          code: 6115000,
          display: "Blood group antibody Anuszewska",
          
        },
        {
          code: 6135004,
          display: "Blood group antigen Duck",
          
        },
        {
          code: 6138002,
          display: "Blood group antigen Le Provost",
          
        },
        {
          code: 6162007,
          display: "Meclocycline",
          
        },
        {
          code: 6170002,
          display: "Heat labile antibody",
          
        },
        {
          code: 6172005,
          display: "Fatty-acid methyltransferase",
          
        },
        {
          code: 6178009,
          display: "Lymphocyte antigen CD63",
          
        },
        {
          code: 6179001,
          display: "o-Methy-bufotenine",
          
        },
        {
          code: 6182006,
          display: "Chloroacetone",
          
        },
        {
          code: 6197009,
          display: "Blood group antigen Zd",
          
        },
        {
          code: 6237004,
          display: "Bemegride",
          
        },
        {
          code: 6249003,
          display: "Potassium metabisulfite",
          
        },
        {
          code: 6256009,
          display: "Ribose isomerase",
          
        },
        {
          code: 6257000,
          display: "Sodium chloride Na^22^",
          
        },
        {
          code: 6260007,
          display: "Protokylol",
          
        },
        {
          code: 6261006,
          display: "Indoklon",
          
        },
        {
          code: 6263009,
          display: "Plant residue",
          
        },
        {
          code: 6264003,
          display: "Diazinon",
          
        },
        {
          code: 6287006,
          display: "Methidathion",
          
        },
        {
          code: 6291001,
          display: "N-Acetylglucosamine-1-phosphodiester N-acetylglucosaminidase",
          
        },
        {
          code: 6301006,
          display: "^178^Tantalum",
          
        },
        {
          code: 6310003,
          display: "Particulate antigen",
          
        },
        {
          code: 6314007,
          display: "Phenol beta-glucosyltransferase",
          
        },
        {
          code: 6333002,
          display: "Squill extract",
          
        },
        {
          code: 6338006,
          display: "Imidazolonepropionase",
          
        },
        {
          code: 6356006,
          display: "Chlorodiallylacetamide",
          
        },
        {
          code: 6360009,
          display: "Kallidin II",
          
        },
        {
          code: 6367007,
          display: "^95m^Technetium",
          
        },
        {
          code: 6386004,
          display: "N-Acetylneuraminate O^4^-acetyltransferase",
          
        },
        {
          code: 6394006,
          display: "Phentermine hydrochloride",
          
        },
        {
          code: 6401007,
          display: "Lichenase",
          
        },
        {
          code: 6409009,
          display: "Morpholine",
          
        },
        {
          code: 6411000,
          display: "Interleukin-12",
          
        },
        {
          code: 6422001,
          display: "HLA-DRw14 antigen",
          
        },
        {
          code: 6451002,
          display: "Chlorobenzilate",
          
        },
        {
          code: 6455006,
          display: "Chloroprene",
          
        },
        {
          code: 6469006,
          display: "delta^1^-Piperideine-2-carboxylate reductase",
          
        },
        {
          code: 6478000,
          display: "6-Phosphofructokinase",
          
        },
        {
          code: 6495008,
          display: "Fibrinogen Montreal II",
          
        },
        {
          code: 6507009,
          display: "Blood group antigen Much",
          
        },
        {
          code: 6513000,
          display: "Flumethiazide",
          
        },
        {
          code: 6516008,
          display: "Indium^111^-Fe(OH)>3<",
          
        },
        {
          code: 6524003,
          display: "Distilled spirits",
          
        },
        {
          code: 6529008,
          display: "Blood group antigen Cl^a^",
          
        },
        {
          code: 6532006,
          display: "Macrophage activating factor",
          
        },
        {
          code: 6590001,
          display: "Galactosylceramidase",
          
        },
        {
          code: 6592009,
          display: "HLA-Dw12 antigen",
          
        },
        {
          code: 6602005,
          display: "Aminoacridine",
          
        },
        {
          code: 6611005,
          display: "Diethylaminoethanol",
          
        },
        {
          code: 6612003,
          display: "Chloramphenicol sodium succinate",
          
        },
        {
          code: 6619007,
          display: "Bilirubin Y transport protein",
          
        },
        {
          code: 6642000,
          display: "Opsonin",
          
        },
        {
          code: 6644004,
          display: "Homoserine dehydrogenase",
          
        },
        {
          code: 6671004,
          display: "Blood group antigen Caw",
          
        },
        {
          code: 6672006,
          display: "Phosphoadenylate 3'-nucleotidase",
          
        },
        {
          code: 6699008,
          display: "Titanium radioisotope",
          
        },
        {
          code: 6701008,
          display: "Lissamine fast red B",
          
        },
        {
          code: 6702001,
          display: "Ethyl mercaptoethyl diethyl thiophosphate",
          
        },
        {
          code: 6709005,
          display: "Gentamicin 2''-nucleotidyltransferase",
          
        },
        {
          code: 6710000,
          display: "Nitric oxide",
          
        },
        {
          code: 6713003,
          display: "^91^Yttrium",
          
        },
        {
          code: 6717002,
          display: "Nifuroxime",
          
        },
        {
          code: 6725000,
          display: "Methylene blue",
          
        },
        {
          code: 6730001,
          display: "^234^Uranium",
          
        },
        {
          code: 6741004,
          display: "Anti DNA antibody",
          
        },
        {
          code: 6755007,
          display: "TL antigen",
          
        },
        {
          code: 6786001,
          display: "Silver difluoride",
          
        },
        {
          code: 6790004,
          display: "Aminopterin",
          
        },
        {
          code: 6792007,
          display: "Veratrine",
          
        },
        {
          code: 6808006,
          display: "Ferrous iron compound",
          
        },
        {
          code: 6809003,
          display: "Phomopsin",
          
        },
        {
          code: 6814004,
          display: "Discadenine synthase",
          
        },
        {
          code: 6817006,
          display: "Oxidized glutathione",
          
        },
        {
          code: 6826009,
          display: "Sterol hormone",
          
        },
        {
          code: 6837005,
          display: "Dextropropoxyphene napsylate",
          
        },
        {
          code: 6854002,
          display: "^188^Platinum",
          
        },
        {
          code: 6865007,
          display: "Theophylline calcium salicylate",
          
        },
        {
          code: 6873003,
          display: "Cefapirin sodium",
          
        },
        {
          code: 6879004,
          display: "5,8,11-Eicosatrienoic acid",
          
        },
        {
          code: 6881002,
          display: "Magnesium fumes",
          
        },
        {
          code: 6884005,
          display: "(S)-3-Amino-2-methylpropionate aminotransferase",
          
        },
        {
          code: 6890009,
          display: "3-Deoxy-manno-octulosonate-8-phosphatase",
          
        },
        {
          code: 6896003,
          display: "Thiopurine methyltransferase",
          
        },
        {
          code: 6910009,
          display: "Sodium fluoride",
          
        },
        {
          code: 6911008,
          display: "Deoxycytidylate methyltransferase",
          
        },
        {
          code: 6916003,
          display: "Bowieine",
          
        },
        {
          code: 6924008,
          display: "Exopolyphosphatase",
          
        },
        {
          code: 6925009,
          display: "Leucine acetyltransferase",
          
        },
        {
          code: 6927001,
          display: "^121^Tin",
          
        },
        {
          code: 6937006,
          display: "Thymidylate synthase",
          
        },
        {
          code: 6945001,
          display: "Blood group antigen Le^bH^",
          
        },
        {
          code: 6952004,
          display: "^121m^Tin",
          
        },
        {
          code: 6958000,
          display: "Blood group antibody Frando",
          
        },
        {
          code: 6961004,
          display: "Lysolecithin acylmutase",
          
        },
        {
          code: 6970001,
          display: "4-Hydroxyproline epimerase",
          
        },
        {
          code: 6973004,
          display: "Chromium^51^ chloride",
          
        },
        {
          code: 6983000,
          display: "Acrylamide",
          
        },
        {
          code: 6992002,
          display: "Triflupromazine hydrochloride",
          
        },
        {
          code: 6993007,
          display: "Seminal fluid",
          
        },
        {
          code: 6999006,
          display: "Ammonium compound",
          
        },
        {
          code: 7008002,
          display: "beta-Carotene 15,15'-dioxygenase",
          
        },
        {
          code: 7018007,
          display: "Malate-CoA ligase",
          
        },
        {
          code: 7029006,
          display: "Blood group antigen Greenlee",
          
        },
        {
          code: 7030001,
          display: "Globoside",
          
        },
        {
          code: 7034005,
          display: "Diclofenac",
          
        },
        {
          code: 7045008,
          display: "Lycorine",
          
        },
        {
          code: 7047000,
          display: "Asphyxiant atmosphere",
          
        },
        {
          code: 7049002,
          display: "Pyruvate carboxylase",
          
        },
        {
          code: 7054006,
          display: "Hemoglobin Poissy",
          
        },
        {
          code: 7056008,
          display: "3-Propylmalate synthase",
          
        },
        {
          code: 7059001,
          display: "N-Acylneuraminate-9-phosphatase",
          
        },
        {
          code: 7061005,
          display: "Anthocyanidin O^3^-glucosyltransferase",
          
        },
        {
          code: 7070008,
          display: "Convallamarin",
          
        },
        {
          code: 7084003,
          display: "Fibrinogen Buenos Aires II",
          
        },
        {
          code: 7110002,
          display: "^69^Germanium",
          
        },
        {
          code: 7120007,
          display: "Antigen",
          
        },
        {
          code: 7132006,
          display: "^73^Gallium",
          
        },
        {
          code: 7139002,
          display: "Acid-CoA ligase (GDP-forming)",
          
        },
        {
          code: 7146006,
          display: "Cyclohexene oxide",
          
        },
        {
          code: 7152007,
          display: "Chlorthion",
          
        },
        {
          code: 7156005,
          display: "Phosphorus isotope",
          
        },
        {
          code: 7158006,
          display: "HLA-Dw19 antigen",
          
        },
        {
          code: 7161007,
          display: "Complement component C2a",
          
        },
        {
          code: 7179006,
          display: "Prekallikrein",
          
        },
        {
          code: 7191002,
          display: "Methenyltetrahydrofolate cyclohydrolase",
          
        },
        {
          code: 7208009,
          display: "Thiol oxidase",
          
        },
        {
          code: 7211005,
          display: "Blood group antibody Haakestad",
          
        },
        {
          code: 7237008,
          display: "Galactonate dehydratase",
          
        },
        {
          code: 7243005,
          display: "Methyl isocyanate",
          
        },
        {
          code: 7269004,
          display: "Th - Thorium",
          
        },
        {
          code: 7271004,
          display: "Mixed dust",
          
        },
        {
          code: 7280004,
          display: "dTDP4-dehydrorhamnose reductase",
          
        },
        {
          code: 7281000,
          display: "Technetium Tc^99m^ lidofenin",
          
        },
        {
          code: 7284008,
          display: "Mercaptan compound",
          
        },
        {
          code: 7294003,
          display: "tert-Butyl acetate",
          
        },
        {
          code: 7302008,
          display: "Ambuphylline",
          
        },
        {
          code: 7318002,
          display: "Bacteriochlorophyll",
          
        },
        {
          code: 7321000,
          display: "Pyrimidine",
          
        },
        {
          code: 7325009,
          display: "Calcium hydroxide",
          
        },
        {
          code: 7327001,
          display: "Sulfurous acid",
          
        },
        {
          code: 7328006,
          display: "Red petrolatum",
          
        },
        {
          code: 7330008,
          display: "Shellac",
          
        },
        {
          code: 7337006,
          display: "Blood group antibody Tr^a^",
          
        },
        {
          code: 7348004,
          display: "Factor II",
          
        },
        {
          code: 7382005,
          display: "Aminoalcohol ester",
          
        },
        {
          code: 7401000,
          display: "Heme-hemopexin complex",
          
        },
        {
          code: 7411007,
          display: "Blood group antibody HLA-B8",
          
        },
        {
          code: 7427000,
          display: "Sepiapterin reductase",
          
        },
        {
          code: 7434003,
          display: "Erythrosin B",
          
        },
        {
          code: 7446004,
          display: "Ruthenium",
          
        },
        {
          code: 7451005,
          display: "Tobramycin ophthalmic agent",
          
        },
        {
          code: 7460002,
          display: "^127^Tellurium",
          
        },
        {
          code: 7470000,
          display: "p-tert-Butyltoluene",
          
        },
        {
          code: 7489000,
          display: "Homocytotropic antibody",
          
        },
        {
          code: 7503004,
          display: "^72^Gallium",
          
        },
        {
          code: 7509000,
          display: "Mannitol hexanitrate",
          
        },
        {
          code: 7515000,
          display: "Hepatotoxic mycotoxin",
          
        },
        {
          code: 7537007,
          display: "Stizolobinate synthase",
          
        },
        {
          code: 7547005,
          display: "Hemoglobin Lincoln Park",
          
        },
        {
          code: 7549008,
          display: "Fibrinogen Bethesda I",
          
        },
        {
          code: 7588005,
          display: "Blood group antibody Sk^a^",
          
        },
        {
          code: 7608003,
          display: "Triethylene glycol",
          
        },
        {
          code: 7616007,
          display: "Blood group antibody Pruitt",
          
        },
        {
          code: 7648006,
          display: "HLA-Bw70 antigen",
          
        },
        {
          code: 7661006,
          display: "Fish bone",
          
        },
        {
          code: 7670009,
          display: "Aminobutyraldehyde dehydrogenase",
          
        },
        {
          code: 7675004,
          display: "Blood group antigen Towey",
          
        },
        {
          code: 7679005,
          display: "Strong oxidizing compound",
          
        },
        {
          code: 7685003,
          display: "Blood group antibody Bg^c^",
          
        },
        {
          code: 7696006,
          display: "Ferrovanadium dust",
          
        },
        {
          code: 7716001,
          display: "Isovaleryl coenzyme A dehydrogenase",
          
        },
        {
          code: 7737009,
          display: "Chlortetracycline hydrochloride",
          
        },
        {
          code: 7738004,
          display: "HLA-B49 antigen",
          
        },
        {
          code: 7761002,
          display: "^111^Silver",
          
        },
        {
          code: 7770004,
          display: "^89^Strontium",
          
        },
        {
          code: 7774008,
          display: "Neo-b-vitamin A>1<",
          
        },
        {
          code: 7779003,
          display: "^103^Ruthenium",
          
        },
        {
          code: 7785005,
          display: "Sphingomyelin phosphodiesterase D",
          
        },
        {
          code: 7790008,
          display: "1-Monoacylglycerol",
          
        },
        {
          code: 7791007,
          display: "Soy protein",
          
        },
        {
          code: 7795003,
          display: "Oxalate oxidase",
          
        },
        {
          code: 7801007,
          display: "Tetrahydroxypteridine cycloisomerase",
          
        },
        {
          code: 7816005,
          display: "Antazoline hydrochloride",
          
        },
        {
          code: 7834009,
          display: "Acetyl digitoxin",
          
        },
        {
          code: 7846008,
          display: "Sphingomyelin phosphodiesterase",
          
        },
        {
          code: 7848009,
          display: "1-Phosphatidylinositol phosphodiesterase",
          
        },
        {
          code: 7868003,
          display: "beta-Cyclopiazonate dehydrogenase",
          
        },
        {
          code: 7879008,
          display: "^218^Radon",
          
        },
        {
          code: 7900007,
          display: "Hemoglobin Presbyterian",
          
        },
        {
          code: 7904003,
          display: "Deanol",
          
        },
        {
          code: 7909008,
          display: "Arginine carboxypeptidase",
          
        },
        {
          code: 7924004,
          display: "Diflorasone",
          
        },
        {
          code: 7938006,
          display: "D-Arabinitol dehydrogenase",
          
        },
        {
          code: 7945006,
          display: "Orsellinate-depside hydrolase",
          
        },
        {
          code: 7948008,
          display: "Reed-Sternberg antibody",
          
        },
        {
          code: 7953003,
          display: "Thioneb",
          
        },
        {
          code: 7957002,
          display: "Phosphatidate cytidylyltransferase",
          
        },
        {
          code: 7961008,
          display: "Hemoglobin F-Shanghai",
          
        },
        {
          code: 7970006,
          display: "Allograft",
          
        },
        {
          code: 7974002,
          display: "Blood group antibody Dalman",
          
        },
        {
          code: 7975001,
          display: "Amiphenazole",
          
        },
        {
          code: 7979007,
          display: "3'-Phosphoadenylylsulfate 3'-phosphatase",
          
        },
        {
          code: 7983007,
          display: "Sodium rhodanide",
          
        },
        {
          code: 7985000,
          display: "Sulfur isotope",
          
        },
        {
          code: 7997004,
          display: "Butyl mercaptan",
          
        },
        {
          code: 8000007,
          display: "Cucurbitacin delta^23^-reductase",
          
        },
        {
          code: 8002004,
          display: "Blood group antibody Fleming",
          
        },
        {
          code: 8025003,
          display: "Blood group antibody Gibson",
          
        },
        {
          code: 8029009,
          display: "Allyl glycidyl ether",
          
        },
        {
          code: 8030004,
          display: "PEG - Polyethylene glycol",
          
        },
        {
          code: 8035009,
          display: "Cholestenol delta-isomerase",
          
        },
        {
          code: 8048008,
          display: "Blood group antigen Th",
          
        },
        {
          code: 8054009,
          display: "Orotate reductase (NADPH)",
          
        },
        {
          code: 8055005,
          display: "Galactoside acetyltransferase",
          
        },
        {
          code: 8105004,
          display: "Hemoglobin Leiden",
          
        },
        {
          code: 8108002,
          display: "Undecaprenyl-diphosphatase",
          
        },
        {
          code: 8123007,
          display: "Blood group antibody Schuppenhauer",
          
        },
        {
          code: 8132009,
          display: "Magnesium acetylsalicylate",
          
        },
        {
          code: 8143001,
          display: "Diosmin",
          
        },
        {
          code: 8153000,
          display: "Homoproline",
          
        },
        {
          code: 8156008,
          display: "Immunoglobulin, Fd fragment",
          
        },
        {
          code: 8164002,
          display: "Cluster of differentiation antigen 67",
          
        },
        {
          code: 8168004,
          display: "Uracil-5-carboxylate decarboxylase",
          
        },
        {
          code: 8179009,
          display: "Cevadilline",
          
        },
        {
          code: 8184003,
          display: "Convallamarogenin",
          
        },
        {
          code: 8190004,
          display: "Diaminopimelate epimerase",
          
        },
        {
          code: 8202008,
          display: "^43^Potassium",
          
        },
        {
          code: 8203003,
          display: "Human menopausal gonadotropin",
          
        },
        {
          code: 8204009,
          display: "Polyester",
          
        },
        {
          code: 8222007,
          display: "Coagulation factor II Padua variant",
          
        },
        {
          code: 8227001,
          display: "^106^Ruthenium",
          
        },
        {
          code: 8230008,
          display: "Streptococcal cysteine proteinase",
          
        },
        {
          code: 8237006,
          display: "Strobane",
          
        },
        {
          code: 8252004,
          display: "Chlorothiazide sodium",
          
        },
        {
          code: 8257005,
          display: "Abnormal hemoglobin",
          
        },
        {
          code: 8261004,
          display: "Potassium thiosulfate",
          
        },
        {
          code: 8268005,
          display: "Blood group antibody Hildebrandt",
          
        },
        {
          code: 8270001,
          display: "tRNA adenylyltransferase",
          
        },
        {
          code: 8275006,
          display: "Methionine-S-oxide reductase",
          
        },
        {
          code: 8295000,
          display: "Uromucoid protein",
          
        },
        {
          code: 8300003,
          display: "Cyclohexanol",
          
        },
        {
          code: 8310007,
          display: "Hemoglobin Madrid",
          
        },
        {
          code: 8313009,
          display: "RNA-directed DNA polymerase",
          
        },
        {
          code: 8340009,
          display: "Procollagen-lysine,2-oxoglutarate 5-dioxygenase",
          
        },
        {
          code: 8342001,
          display: "Brilliant cresyl blue",
          
        },
        {
          code: 8343006,
          display: "Blood group antibody Re^a^",
          
        },
        {
          code: 8354001,
          display: "Manganese ethylene bis-dithiocarbamate",
          
        },
        {
          code: 8355000,
          display: "Hafnium isotope",
          
        },
        {
          code: 8362009,
          display: "Anti c",
          
        },
        {
          code: 8365006,
          display: "Oil of pennyroyal-European",
          
        },
        {
          code: 8368008,
          display: "Xylan 1,44-beta-xylosidase",
          
        },
        {
          code: 8376005,
          display: "Duffy blood group antibody",
          
        },
        {
          code: 8385005,
          display: "Acid alpha-glucosidase",
          
        },
        {
          code: 8397006,
          display: "Nicotine resin complex",
          
        },
        {
          code: 8406008,
          display: "Nitroethane oxidase",
          
        },
        {
          code: 8429000,
          display: "Brilliant orange",
          
        },
        {
          code: 8450009,
          display: "Lemon grass oil",
          
        },
        {
          code: 8452001,
          display: "Blood group antigen Sisson",
          
        },
        {
          code: 8456003,
          display: "Methyl ethyl ketone peroxide",
          
        },
        {
          code: 8460000,
          display: "Blood group antibody Vg^a^",
          
        },
        {
          code: 8473001,
          display: "Homocysteine methyltransferase",
          
        },
        {
          code: 8474007,
          display: "Lead oleate",
          
        },
        {
          code: 8484008,
          display: "Blood group antigen Mur",
          
        },
        {
          code: 8485009,
          display: "Oncogene protein P210, BCR-ABL",
          
        },
        {
          code: 8486005,
          display: "HLA-DRw15 antigen",
          
        },
        {
          code: 8487001,
          display: "^48^Vanadium",
          
        },
        {
          code: 8491006,
          display: "Complement inhibitor",
          
        },
        {
          code: 8492004,
          display: "Allantoicase",
          
        },
        {
          code: 8498000,
          display: "Short neurotoxin venom",
          
        },
        {
          code: 8507001,
          display: "Cyclohexane",
          
        },
        {
          code: 8514004,
          display: "Ornithine",
          
        },
        {
          code: 8520003,
          display: "Hemoglobin Machida",
          
        },
        {
          code: 8525008,
          display: "^183^Osmium",
          
        },
        {
          code: 8529002,
          display: "Urinary protein of low molecular weight",
          
        },
        {
          code: 8534003,
          display: "^110^Tin",
          
        },
        {
          code: 8537005,
          display: "Solution",
          
        },
        {
          code: 8578007,
          display: "Potassium cyanate",
          
        },
        {
          code: 8591008,
          display: "Dichlorodifluoromethane",
          
        },
        {
          code: 8612007,
          display: "Tumor necrosis factor",
          
        },
        {
          code: 8620009,
          display: "Oncogene protein TCL6",
          
        },
        {
          code: 8631001,
          display: "Potassium chloride",
          
        },
        {
          code: 8653004,
          display: "Rubijervine",
          
        },
        {
          code: 8660005,
          display: "Complement component C3c",
          
        },
        {
          code: 8687009,
          display: "Gum arabic",
          
        },
        {
          code: 8689007,
          display: "Kanamycin sulfate",
          
        },
        {
          code: 8701002,
          display: "Sulfachlorpyridazine",
          
        },
        {
          code: 8705006,
          display: "4-Hydroxybenzoate decarboxylase",
          
        },
        {
          code: 8731008,
          display: "Blood group antibody Austin",
          
        },
        {
          code: 8740007,
          display: "C3(H20)Bb",
          
        },
        {
          code: 8761000,
          display: "Adenylylsulfate kinase",
          
        },
        {
          code: 8767001,
          display: "Santonin",
          
        },
        {
          code: 8785008,
          display: "Chlorine dioxide",
          
        },
        {
          code: 8786009,
          display: "Blood group antigen Wd^a^",
          
        },
        {
          code: 8795001,
          display: "Hb F - Hemoglobin F",
          
        },
        {
          code: 8817004,
          display: "LH receptor site",
          
        },
        {
          code: 8818009,
          display: "Blood group antibody Tri W",
          
        },
        {
          code: 8822004,
          display: "Linoleic acid",
          
        },
        {
          code: 8830003,
          display: "Nitrate reductase (NAD(P)H)",
          
        },
        {
          code: 8836009,
          display: "Gallocyanine",
          
        },
        {
          code: 8844009,
          display: "Hydroxybutyrate-dimer hydrolase",
          
        },
        {
          code: 8858006,
          display: "Strontium nitrate Sr^85^",
          
        },
        {
          code: 8865003,
          display: "Graphite",
          
        },
        {
          code: 8878003,
          display: "Blood group antigen Evelyn",
          
        },
        {
          code: 8882001,
          display: "3-Hydroxybenzoate 6-monooxygenase",
          
        },
        {
          code: 8886003,
          display: "Flecainide acetate",
          
        },
        {
          code: 8908003,
          display: "Blood group antibody I^T^",
          
        },
        {
          code: 8914005,
          display: "Endolymph",
          
        },
        {
          code: 8919000,
          display: "Biotin",
          
        },
        {
          code: 8926000,
          display: "Azur B",
          
        },
        {
          code: 8945009,
          display: "Phosphopantothenate-cysteine ligase",
          
        },
        {
          code: 8953001,
          display: "2,3-Dihydroxyindole 2,3-dioxygenase",
          
        },
        {
          code: 8963009,
          display: "N-Acetylmuramoyl-L-alanine amidase",
          
        },
        {
          code: 8969008,
          display: "Bulbourethral secretions",
          
        },
        {
          code: 8977007,
          display: "Blood group antibody Tarplee",
          
        },
        {
          code: 8982000,
          display: "Oleate hydratase",
          
        },
        {
          code: 8987006,
          display: "Cycle-phase specific agent",
          
        },
        {
          code: 8991001,
          display: "Ribulokinase",
          
        },
        {
          code: 9010006,
          display: "Methyl blue",
          
        },
        {
          code: 9013008,
          display: "Dephospho-CoA kinase",
          
        },
        {
          code: 9021002,
          display: "Carbaryl",
          
        },
        {
          code: 9024005,
          display: "G6PD - Glucose-6-phosphate dehydrogenase",
          
        },
        {
          code: 9045003,
          display: "Radon radioisotope",
          
        },
        {
          code: 9052001,
          display: "Allspice oil",
          
        },
        {
          code: 9054000,
          display: "Human leukocyte antigen B15",
          
        },
        {
          code: 9103003,
          display: "Retinol fatty-acyltransferase",
          
        },
        {
          code: 9110009,
          display: "Mercuric compound",
          
        },
        {
          code: 9125009,
          display: "Sempervirine",
          
        },
        {
          code: 9159008,
          display: "Triacetate-lactonase",
          
        },
        {
          code: 9172009,
          display: "Blood group antibody Alda",
          
        },
        {
          code: 9174005,
          display: "Fibrinogen Poitiers",
          
        },
        {
          code: 9183000,
          display: "beta-N-Acetylgalactosaminidase",
          
        },
        {
          code: 9189001,
          display: "CMP-N-acetylneuraminate-lactosylceramide alpha-2,3-sialyltransferase",
          
        },
        {
          code: 9195000,
          display: "Immunoglobulin gene INV allotype",
          
        },
        {
          code: 9197008,
          display: "Apiose reductase",
          
        },
        {
          code: 9205004,
          display: "Hemoglobin Tarrant",
          
        },
        {
          code: 9220005,
          display: "Plant phenol oil",
          
        },
        {
          code: 9223007,
          display: "Borneol dehydrogenase",
          
        },
        {
          code: 9234005,
          display: "Chlorobutanol",
          
        },
        {
          code: 9246009,
          display: "^118^Tellurium",
          
        },
        {
          code: 9253000,
          display: "HLA-DRw16 antigen",
          
        },
        {
          code: 9270008,
          display: "Catecholamine receptor",
          
        },
        {
          code: 9271007,
          display: "Fibrinogen Pontoise",
          
        },
        {
          code: 169008,
          display: "Hypothalamic releasing factor preparation",
          
        },
        {
          code: 211009,
          display: "Norethandrolone preparation",
          
        },
        {
          code: 302007,
          display: "Spiramycin",
          
        },
        {
          code: 439007,
          display: "Therapeutic radiopharmaceuticals",
          
        },
        {
          code: 449005,
          display: "Procaine penicillin",
          
        },
        {
          code: 544002,
          display: "Melphalan",
          
        },
        {
          code: 669007,
          display: "Vaccinia virus vaccine",
          
        },
        {
          code: 716000,
          display: "Hematological agents",
          
        },
        {
          code: 796001,
          display: "Digoxin product",
          
        },
        {
          code: 847003,
          display: "D-thyroxine preparation",
          
        },
        {
          code: 902003,
          display: "Experimental drug",
          
        },
        {
          code: 922004,
          display: "Pralidoxime",
          
        },
        {
          code: 1039008,
          display: "6MP - Mercaptopurine",
          
        },
        {
          code: 1148001,
          display: "Ticarcillin",
          
        },
        {
          code: 1182007,
          display: "Hypotensive agent",
          
        },
        {
          code: 1206000,
          display: "Alpha 2 adrenergic blocking agent",
          
        },
        {
          code: 1222004,
          display: "Metronidazole",
          
        },
        {
          code: 1389007,
          display: "Beclometasone",
          
        },
        {
          code: 1434005,
          display: "Calamine",
          
        },
        {
          code: 1528001,
          display: "Folinic acid product",
          
        },
        {
          code: 1552008,
          display: "Saluretic drug",
          
        },
        {
          code: 1594006,
          display: "Azatadine",
          
        },
        {
          code: 1613009,
          display: "Dexbrompheniramine maleate",
          
        },
        {
          code: 1756009,
          display: "Antipruritic topical anesthetic",
          
        },
        {
          code: 1758005,
          display: "Motilin preparation",
          
        },
        {
          code: 1842003,
          display: "Diphemanil",
          
        },
        {
          code: 1878008,
          display: "Hexachlorophane product",
          
        },
        {
          code: 1887004,
          display: "Permethrin",
          
        },
        {
          code: 1982006,
          display: "Bacitracin ophthalmic preparation",
          
        },
        {
          code: 2016004,
          display: "Dextromethorphan",
          
        },
        {
          code: 2037007,
          display: "Otic anti-inflammatory preparation",
          
        },
        {
          code: 2183004,
          display: "Tetryzoline",
          
        },
        {
          code: 2190009,
          display: "Benzhexol",
          
        },
        {
          code: 2497003,
          display: "Hexetidine",
          
        },
        {
          code: 2571007,
          display: "Busulfan",
          
        },
        {
          code: 2596005,
          display: "Lincomycin",
          
        },
        {
          code: 2679000,
          display: "Oxandrolone",
          
        },
        {
          code: 2944000,
          display: "Depilatory agent",
          
        },
        {
          code: 2949005,
          display: "Diagnostic agents",
          
        },
        {
          code: 3037004,
          display: "Flumethasone preparation",
          
        },
        {
          code: 3046005,
          display: "Enalapril maleate",
          
        },
        {
          code: 3127006,
          display: "5FU - Fluorouracil",
          
        },
        {
          code: 3221003,
          display: "Ringer solution",
          
        },
        {
          code: 3334000,
          display: "Cefotaxime",
          
        },
        {
          code: 3361000,
          display: "Anti-heparin agent",
          
        },
        {
          code: 3526007,
          display: "Rabies vaccine, human",
          
        },
        {
          code: 3593009,
          display: "Otic anti-infective preparation",
          
        },
        {
          code: 3814009,
          display: "Propylthiouracil product",
          
        },
        {
          code: 3822002,
          display: "Suxamethonium",
          
        },
        {
          code: 4126008,
          display: "Fluprednisolone preparation",
          
        },
        {
          code: 4194004,
          display: "Mazindol",
          
        },
        {
          code: 4219002,
          display: "Penicillamine",
          
        },
        {
          code: 4220008,
          display: "Tolazoline",
          
        },
        {
          code: 4382004,
          display: "Centrally acting antihypertensive agent",
          
        },
        {
          code: 4704002,
          display: "Iothiouracil",
          
        },
        {
          code: 4741001,
          display: "Sodium folate preparation",
          
        },
        {
          code: 4753002,
          display: "Triamcinolone dental paste",
          
        },
        {
          code: 4865009,
          display: "Prolactin releasing factor preparation",
          
        },
        {
          code: 4937008,
          display: "Cefaclor",
          
        },
        {
          code: 5067008,
          display: "Antithyroid drugs",
          
        },
        {
          code: 5465006,
          display: "Propitocaine hydrochloride",
          
        },
        {
          code: 5478006,
          display: "Trifluperidol",
          
        },
        {
          code: 5487002,
          display: "Therapeutic agent",
          
        },
        {
          code: 5606003,
          display: "Dexamethasone nasal preparation",
          
        },
        {
          code: 5720001,
          display: "Latrodectus mactans antivenin",
          
        },
        {
          code: 5737008,
          display: "Demeclocycline",
          
        },
        {
          code: 5776009,
          display: "Anesthetic",
          
        },
        {
          code: 5786005,
          display: "Chlorothiazide",
          
        },
        {
          code: 5797005,
          display: "Clotrimazole",
          
        },
        {
          code: 5924003,
          display: "Isosorbide dinitrate",
          
        },
        {
          code: 5975000,
          display: "Niclosamide",
          
        },
        {
          code: 6028009,
          display: "Triamcinolone preparation",
          
        },
        {
          code: 6067003,
          display: "Orciprenaline",
          
        },
        {
          code: 6071000,
          display: "Coal tar preparation",
          
        },
        {
          code: 6102009,
          display: "Baclofen",
          
        },
        {
          code: 6116004,
          display: "Oxymetholone preparation",
          
        },
        {
          code: 6122008,
          display: "Class Ia antiarrhythmic drug",
          
        },
        {
          code: 6232005,
          display: "Naphazoline",
          
        },
        {
          code: 6247001,
          display: "Folic acid preparation",
          
        },
        {
          code: 6259002,
          display: "Hydrogen peroxide solution 3%",
          
        },
        {
          code: 6369005,
          display: "Penicillin -class of antibiotic-",
          
        },
        {
          code: 6425004,
          display: "Antihistamine",
          
        },
        {
          code: 6517004,
          display: "Butyrophenone derivative antipsychotic agent",
          
        },
        {
          code: 6526001,
          display: "Nalorphine",
          
        },
        {
          code: 6625006,
          display: "Zinc sulfate",
          
        },
        {
          code: 6652001,
          display: "Calcium pantothenate preparation",
          
        },
        {
          code: 6716006,
          display: "Abortient agent",
          
        },
        {
          code: 6960003,
          display: "Polymyxin B",
          
        },
        {
          code: 6985007,
          display: "Opium preparation",
          
        },
        {
          code: 7092007,
          display: "Metoprolol",
          
        },
        {
          code: 7140000,
          display: "Radiographic contrast media",
          
        },
        {
          code: 7168001,
          display: "Magnesium carbonate",
          
        },
        {
          code: 7230005,
          display: "Brucella vaccine",
          
        },
        {
          code: 7235000,
          display: "Ethylenediamine derivative antihistamine",
          
        },
        {
          code: 7292004,
          display: "Indocyanine green",
          
        },
        {
          code: 7336002,
          display: "Trazodone",
          
        },
        {
          code: 7561000,
          display: "Dexamethasone preparation",
          
        },
        {
          code: 7577004,
          display: "Ciprofloxacin",
          
        },
        {
          code: 7624002,
          display: "Sodium perborate product",
          
        },
        {
          code: 7836006,
          display: "Expectorants",
          
        },
        {
          code: 7947003,
          display: "Acetylsalicylic acid",
          
        },
        {
          code: 7959004,
          display: "Teniposide",
          
        },
        {
          code: 7982002,
          display: "Phenmetrazine hydrochloride",
          
        },
        {
          code: 8028001,
          display: "Butacaine",
          
        },
        {
          code: 8109005,
          display: "Alimemazine",
          
        },
        {
          code: 8163008,
          display: "Nitroprusside",
          
        },
        {
          code: 8348002,
          display: "Cyclopentolate",
          
        },
        {
          code: 8372007,
          display: "Promethazine",
          
        },
        {
          code: 8416000,
          display: "Dicloxacillin",
          
        },
        {
          code: 8571001,
          display: "Vasoconstrictor",
          
        },
        {
          code: 8658008,
          display: "Human serum albumin preparation",
          
        },
        {
          code: 8661009,
          display: "Replacement preparation",
          
        },
        {
          code: 8692006,
          display: "Metamfetamine",
          
        },
        {
          code: 8696009,
          display: "Antispasmodic",
          
        },
        {
          code: 9190005,
          display: "Tropicamide",
          
        },
        {
          code: 9268004,
          display: "Butabarbitone",
          
        },
        {
          code: 9307009,
          display: "Animal serum globulin preparation",
          
        },
        {
          code: 9500005,
          display: "MAOI - Phenelzine",
          
        },
        {
          code: 9542007,
          display: "Antihepatitis B immunoglobulin",
          
        },
        {
          code: 9690006,
          display: "Nikethamide",
          
        },
        {
          code: 9745007,
          display: "Sucrose product",
          
        },
        {
          code: 9778000,
          display: "Cytomegalovirus immune globulin",
          
        },
        {
          code: 9944001,
          display: "Chlorphenamine",
          
        },
        {
          code: 10099000,
          display: "Ketoprofen",
          
        },
        {
          code: 10135005,
          display: "Cinchona alkaloid",
          
        },
        {
          code: 10243007,
          display: "Benzoic and salicylic acid ointment",
          
        },
        {
          code: 10312003,
          display: "Prednisone preparation",
          
        },
        {
          code: 10332002,
          display: "Vaccine - bacterin - toxoid",
          
        },
        {
          code: 10355004,
          display: "Injectable vitamin preparation",
          
        },
        {
          code: 10356003,
          display: "Undecylenic acid and undecylenate salt",
          
        },
        {
          code: 10368007,
          display: "Colloidal oatmeal powder",
          
        },
        {
          code: 10422008,
          display: "Nitropentaerythrol",
          
        },
        {
          code: 10504007,
          display: "Doxycycline",
          
        },
        {
          code: 10515002,
          display: "Lututrin preparation",
          
        },
        {
          code: 10555000,
          display: "Tocainide",
          
        },
        {
          code: 10632007,
          display: "Multivitamin preparation",
          
        },
        {
          code: 10668002,
          display: "Skin anti-infective",
          
        },
        {
          code: 10712001,
          display: "Glucagon product",
          
        },
        {
          code: 10756001,
          display: "Haloperidol",
          
        },
        {
          code: 10784006,
          display: "Anti-psychotic agent",
          
        },
        {
          code: 11185009,
          display: "Autogenous vaccine - autogenous bacterin",
          
        },
        {
          code: 11260008,
          display: "Ophthalmic anti-infective preparation",
          
        },
        {
          code: 11402001,
          display: "Medicinal enzyme",
          
        },
        {
          code: 11430001,
          display: "Tetracyclic antidepressant drug",
          
        },
        {
          code: 11563006,
          display: "Vitamin D preparation",
          
        },
        {
          code: 11719000,
          display: "Cetylpyridinium",
          
        },
        {
          code: 11777007,
          display: "Ophthalmic antibiotic",
          
        },
        {
          code: 11783005,
          display: "Stool softener",
          
        },
        {
          code: 11796006,
          display: "Methysergide",
          
        },
        {
          code: 11841005,
          display: "Doxepin",
          
        },
        {
          code: 11847009,
          display: "Naproxen",
          
        },
        {
          code: 11866009,
          display: "Plague vaccine",
          
        },
        {
          code: 11959009,
          display: "Procainamide",
          
        },
        {
          code: 12096000,
          display: "Nystatin",
          
        },
        {
          code: 12236006,
          display: "Pancreatin product",
          
        },
        {
          code: 12289007,
          display: "Whole blood product",
          
        },
        {
          code: 12335007,
          display: "Diatrizoate",
          
        },
        {
          code: 12369008,
          display: "Oxytocin product",
          
        },
        {
          code: 12425002,
          display: "Human white blood cell product",
          
        },
        {
          code: 12436009,
          display: "Vinblastine",
          
        },
        {
          code: 12495006,
          display: "Magnesium citrate",
          
        },
        {
          code: 12512008,
          display: "Triamterene",
          
        },
        {
          code: 12559001,
          display: "Emetine",
          
        },
        {
          code: 12657005,
          display: "Fludrocortisone acetate preparation",
          
        },
        {
          code: 12839006,
          display: "Estradiol product",
          
        },
        {
          code: 12968008,
          display: "Vitamin products",
          
        },
        {
          code: 13132007,
          display: "Dextran product",
          
        },
        {
          code: 13154009,
          display: "Chlormethine",
          
        },
        {
          code: 13178004,
          display: "Rickettsial vaccine",
          
        },
        {
          code: 13252002,
          display: "Salsalate",
          
        },
        {
          code: 13414000,
          display: "Cefadroxil",
          
        },
        {
          code: 13432000,
          display: "Nortriptyline",
          
        },
        {
          code: 13512003,
          display: "Minocycline",
          
        },
        {
          code: 13525006,
          display: "Acetylcholine preparation",
          
        },
        {
          code: 13565005,
          display: "Bisacodyl",
          
        },
        {
          code: 13592004,
          display: "Pyrazinamide",
          
        },
        {
          code: 13664004,
          display: "BAL - British Anti-Lewisite",
          
        },
        {
          code: 13790009,
          display: "Oral form iron preparation",
          
        },
        {
          code: 13800009,
          display: "Naftifine",
          
        },
        {
          code: 13813003,
          display: "Biotin preparation",
          
        },
        {
          code: 13929005,
          display: "Spironolactone",
          
        },
        {
          code: 13936006,
          display: "Butorphanol",
          
        },
        {
          code: 13965000,
          display: "Valproic acid",
          
        },
        {
          code: 14054003,
          display: "Vitamin B complex preps",
          
        },
        {
          code: 14103001,
          display: "Opiate antagonist",
          
        },
        {
          code: 14170004,
          display: "Capreomycin",
          
        },
        {
          code: 14542005,
          display: "Caffeine and sodium benzoate injection solution vial",
          
        },
        {
          code: 14601000,
          display: "Anticholinergic agent",
          
        },
        {
          code: 14706000,
          display: "Pheneticillin",
          
        },
        {
          code: 14728000,
          display: "Chloroquine",
          
        },
        {
          code: 14745005,
          display: "Hepatitis A vaccine",
          
        },
        {
          code: 14814001,
          display: "Trimethobenzamide",
          
        },
        {
          code: 14816004,
          display: "Cocaine product",
          
        },
        {
          code: 15117003,
          display: "Coagulant",
          
        },
        {
          code: 15222008,
          display: "Enalapril",
          
        },
        {
          code: 15375005,
          display: "Phenanthrene derivative",
          
        },
        {
          code: 15383004,
          display: "Levodopa",
          
        },
        {
          code: 15389000,
          display: "Hydantoin derivative anticonvulsant",
          
        },
        {
          code: 15432003,
          display: "Ethinylestradiol",
          
        },
        {
          code: 15772006,
          display: "Beta 1 blocking product",
          
        },
        {
          code: 15857002,
          display: "Ethanolamine derivative antihistamine",
          
        },
        {
          code: 16031005,
          display: "Dexchlorpheniramine",
          
        },
        {
          code: 16037009,
          display: "Terfenadine product",
          
        },
        {
          code: 16047007,
          display: "Benzodiazepine",
          
        },
        {
          code: 16131008,
          display: "Animal antiserum",
          
        },
        {
          code: 16403005,
          display: "Non-steroidal anti-inflammatory agent",
          
        },
        {
          code: 16602005,
          display: "Hydrocortisone preparation",
          
        },
        {
          code: 16787005,
          display: "Streptococcus equisimilis - suis antiserum",
          
        },
        {
          code: 16791000,
          display: "Cefradine",
          
        },
        {
          code: 16832004,
          display: "Conjugated estrogens",
          
        },
        {
          code: 16858004,
          display: "Urea",
          
        },
        {
          code: 16867004,
          display: "Sulfathiazole",
          
        },
        {
          code: 16970001,
          display: "Proguanil",
          
        },
        {
          code: 16977003,
          display: "Lithium carbonate",
          
        },
        {
          code: 17016006,
          display: "Animal gamma globulin",
          
        },
        {
          code: 17055007,
          display: "Systemic acidifier",
          
        },
        {
          code: 17308007,
          display: "Dapsone",
          
        },
        {
          code: 17386008,
          display: "Anti-infective agent",
          
        },
        {
          code: 17502009,
          display: "Gallamine triethiodide",
          
        },
        {
          code: 17554004,
          display: "Paramethasone preparation",
          
        },
        {
          code: 17558001,
          display: "Corn oil",
          
        },
        {
          code: 17600005,
          display: "Diagnostic radiopharmaceuticals",
          
        },
        {
          code: 17805003,
          display: "Lithium citrate",
          
        },
        {
          code: 17859000,
          display: "Polyvalent crotalidae antivenin",
          
        },
        {
          code: 17893001,
          display: "Skeletal muscle relaxant",
          
        },
        {
          code: 18002004,
          display: "Auranofin",
          
        },
        {
          code: 18125000,
          display: "Fluocinonide",
          
        },
        {
          code: 18335001,
          display: "Aureolic acid",
          
        },
        {
          code: 18340009,
          display: "Oxychlorosene",
          
        },
        {
          code: 18381001,
          display: "Prindolol",
          
        },
        {
          code: 18511007,
          display: "Generic drug",
          
        },
        {
          code: 18548003,
          display: "Methylphenidate",
          
        },
        {
          code: 18679008,
          display: "Potassium-removing resin",
          
        },
        {
          code: 18811003,
          display: "L-asparaginase preparation",
          
        },
        {
          code: 18914005,
          display: "Hydroflumethiazide",
          
        },
        {
          code: 18952006,
          display: "Econazole",
          
        },
        {
          code: 19194001,
          display: "ddI",
          
        },
        {
          code: 19225000,
          display: "Lorazepam",
          
        },
        {
          code: 19232009,
          display: "Prilocaine",
          
        },
        {
          code: 19261005,
          display: "Sulfinpyrazone",
          
        },
        {
          code: 19315007,
          display: "Pyridoxine hydrochloride preparation",
          
        },
        {
          code: 19403009,
          display: "Flurazepam",
          
        },
        {
          code: 19405002,
          display: "Netilmicin",
          
        },
        {
          code: 19581007,
          display: "Parasympathomimetic agent",
          
        },
        {
          code: 19583005,
          display: "Diclofenamide",
          
        },
        {
          code: 19630009,
          display: "Silver sulfadiazine",
          
        },
        {
          code: 19768003,
          display: "Alkylating drugs",
          
        },
        {
          code: 19841008,
          display: "Ceftriaxone",
          
        },
        {
          code: 20091003,
          display: "Somatotropin releasing factor preparation",
          
        },
        {
          code: 20201001,
          display: "Nafoxidine",
          
        },
        {
          code: 20237006,
          display: "Dihydrotachysterol preparation",
          
        },
        {
          code: 20249007,
          display: "Progestin preparation",
          
        },
        {
          code: 20303001,
          display: "Vinblastine sulfate",
          
        },
        {
          code: 20320002,
          display: "Hydrocodone",
          
        },
        {
          code: 20577002,
          display: "HCG - Human chorionic gonadotrophin product",
          
        },
        {
          code: 20865003,
          display: "Diflunisal",
          
        },
        {
          code: 20969008,
          display: "Polyvalent snake antivenin",
          
        },
        {
          code: 21069002,
          display: "Lipotropic agent",
          
        },
        {
          code: 21159006,
          display: "Pargyline",
          
        },
        {
          code: 21451004,
          display: "Indium-113m chloride",
          
        },
        {
          code: 21691008,
          display: "Magnesium trisilicate",
          
        },
        {
          code: 21701005,
          display: "Cromoglicic acid",
          
        },
        {
          code: 21767006,
          display: "Iron dextran complex",
          
        },
        {
          code: 21788002,
          display: "Phenazopyridine hydrochloride",
          
        },
        {
          code: 21986005,
          display: "Erysipelothrix rhusiopathiae antiserum",
          
        },
        {
          code: 22091006,
          display: "Hormone preparation",
          
        },
        {
          code: 22168005,
          display: "Glycopyrronium",
          
        },
        {
          code: 22198003,
          display: "Metolazone",
          
        },
        {
          code: 22274004,
          display: "Methandriol preparation",
          
        },
        {
          code: 22474002,
          display: "Aldosterone preparation",
          
        },
        {
          code: 22587006,
          display: "Depolarizing muscle relaxant",
          
        },
        {
          code: 22657006,
          display: "Calcitonin product",
          
        },
        {
          code: 22672005,
          display: "Amfetamine group",
          
        },
        {
          code: 22696000,
          display: "Hydralazine",
          
        },
        {
          code: 22801004,
          display: "Sterile water solution",
          
        },
        {
          code: 22826008,
          display: "Ammonia detoxicant",
          
        },
        {
          code: 22969001,
          display: "Oxytetracycline",
          
        },
        {
          code: 23079006,
          display: "Vincristine",
          
        },
        {
          code: 23222006,
          display: "Antisera",
          
        },
        {
          code: 23343005,
          display: "Human platelet product",
          
        },
        {
          code: 23532003,
          display: "Phenmetrazine",
          
        },
        {
          code: 23822003,
          display: "Human plasma fraction",
          
        },
        {
          code: 23827009,
          display: "Sulfacetamide",
          
        },
        {
          code: 23838009,
          display: "Nonspecific alpha-adrenergic blocking agent",
          
        },
        {
          code: 23888001,
          display: "Cascara",
          
        },
        {
          code: 24036003,
          display: "Antianemia drug",
          
        },
        {
          code: 24450004,
          display: "Ethambutolol",
          
        },
        {
          code: 24504000,
          display: "Methylcellulose",
          
        },
        {
          code: 24866006,
          display: "Salmonella typhimurium antiserum",
          
        },
        {
          code: 24891006,
          display: "Sodium amidotrizoate",
          
        },
        {
          code: 25014009,
          display: "Tripelennamine",
          
        },
        {
          code: 25057004,
          display: "Mercurial diuretic product",
          
        },
        {
          code: 25076002,
          display: "Carisoprodol",
          
        },
        {
          code: 25085002,
          display: "Cholecystokinin preparation",
          
        },
        {
          code: 25142008,
          display: "Trilostane",
          
        },
        {
          code: 25246002,
          display: "Allopurinol",
          
        },
        {
          code: 25398003,
          display: "Ichthammol",
          
        },
        {
          code: 25419009,
          display: "Barium sulfate",
          
        },
        {
          code: 25465007,
          display: "Escherichia coli monoclonal antibody",
          
        },
        {
          code: 25673006,
          display: "Omeprazole",
          
        },
        {
          code: 25716001,
          display: "Tetanus toxoid, human",
          
        },
        {
          code: 25849001,
          display: "SNP - Sodium nitroprusside",
          
        },
        {
          code: 25860005,
          display: "Terconazole",
          
        },
        {
          code: 25912006,
          display: "Menadiol sodium diphosphate preparation",
          
        },
        {
          code: 25995007,
          display: "Triprolidine",
          
        },
        {
          code: 26122009,
          display: "Dimetindene",
          
        },
        {
          code: 26124005,
          display: "Glipizide product",
          
        },
        {
          code: 26244009,
          display: "Antimuscarinic",
          
        },
        {
          code: 26303005,
          display: "Hexestrol preparation",
          
        },
        {
          code: 26370007,
          display: "Hemostatic agent",
          
        },
        {
          code: 26456008,
          display: "Levothyroxine sodium preparation",
          
        },
        {
          code: 26458009,
          display: "Diphenhydramine",
          
        },
        {
          code: 26462003,
          display: "Cyproheptadine",
          
        },
        {
          code: 26503009,
          display: "Deserpidine",
          
        },
        {
          code: 26523005,
          display: "Dobutamine",
          
        },
        {
          code: 26548008,
          display: "Pancreatic hormone product",
          
        },
        {
          code: 26574002,
          display: "Droperidol",
          
        },
        {
          code: 26580005,
          display: "Digestant",
          
        },
        {
          code: 26736008,
          display: "Ferrous gluconate",
          
        },
        {
          code: 26800000,
          display: "Midazolam",
          
        },
        {
          code: 26842003,
          display: "Burbot liver oil preparation",
          
        },
        {
          code: 27035007,
          display: "Heavy metal antagonist",
          
        },
        {
          code: 27085003,
          display: "Sodium polystyrene sulphonate",
          
        },
        {
          code: 27196008,
          display: "Bupivacaine",
          
        },
        {
          code: 27242001,
          display: "Methylprednisolone preparation",
          
        },
        {
          code: 27479000,
          display: "AZT - Azidothymidine",
          
        },
        {
          code: 27518004,
          display: "Parathyroid hormone",
          
        },
        {
          code: 27548001,
          display: "LA - Local anesthetic drug",
          
        },
        {
          code: 27566006,
          display: "Drug vehicle preservative",
          
        },
        {
          code: 27638005,
          display: "T-PA - tissue-type plasminogen activator",
          
        },
        {
          code: 27658006,
          display: "Amoxicilline",
          
        },
        {
          code: 27707001,
          display: "Medroxyprogesterone acetate preparation",
          
        },
        {
          code: 27754002,
          display: "Pyrazinobutazone",
          
        },
        {
          code: 27867009,
          display: "Antineoplastic",
          
        },
        {
          code: 28028002,
          display: "Synthetic hormone preparation",
          
        },
        {
          code: 28149003,
          display: "Pentostatin",
          
        },
        {
          code: 28235004,
          display: "Doxapram",
          
        },
        {
          code: 28240007,
          display: "Eye cosmetic",
          
        },
        {
          code: 28410007,
          display: "alpha-Carboxypenicillin",
          
        },
        {
          code: 28415002,
          display: "Methscopolamine",
          
        },
        {
          code: 28426008,
          display: "Fluocinolone",
          
        },
        {
          code: 28506006,
          display: "Flucytosine",
          
        },
        {
          code: 28748001,
          display: "Chloral hydrate",
          
        },
        {
          code: 28841002,
          display: "Anhydrohydroxyprogesterone",
          
        },
        {
          code: 28906000,
          display: "Percoid liver oil preparation",
          
        },
        {
          code: 29051009,
          display: "Loop diuretic product",
          
        },
        {
          code: 29058003,
          display: "Halcinonide",
          
        },
        {
          code: 29089004,
          display: "Dibromomannitol",
          
        },
        {
          code: 29121001,
          display: "Mersalyl",
          
        },
        {
          code: 29129004,
          display: "Oxymetazoline",
          
        },
        {
          code: 29156002,
          display: "Mechlorethamine",
          
        },
        {
          code: 29175007,
          display: "Rifampicin product",
          
        },
        {
          code: 29237004,
          display: "Arachnida antivenin",
          
        },
        {
          code: 29439004,
          display: "Captopril",
          
        },
        {
          code: 29620001,
          display: "beta-Tocopherol preparation",
          
        },
        {
          code: 29840005,
          display: "Amoxapine",
          
        },
        {
          code: 29877002,
          display: "MAOI - Isocarboxazid",
          
        },
        {
          code: 29883004,
          display: "Class IV antiarrhythmic",
          
        },
        {
          code: 29896003,
          display: "Betamethasone",
          
        },
        {
          code: 29987004,
          display: "Vitamins A and D preparation",
          
        },
        {
          code: 30010009,
          display: "Cyanocobalamin product",
          
        },
        {
          code: 30125007,
          display: "Senna product",
          
        },
        {
          code: 30306003,
          display: "Vitamin B1 preparation",
          
        },
        {
          code: 30317002,
          display: "Cisapride",
          
        },
        {
          code: 30427009,
          display: "Erythromycin product",
          
        },
        {
          code: 30466001,
          display: "Chloramiphene",
          
        },
        {
          code: 30492008,
          display: "Diuretic",
          
        },
        {
          code: 30666008,
          display: "Toxoid (human)",
          
        },
        {
          code: 30729008,
          display: "Iron preparation",
          
        },
        {
          code: 30761007,
          display: "Mannitol product",
          
        },
        {
          code: 30964009,
          display: "Methyprylone",
          
        },
        {
          code: 30988006,
          display: "Dienestrol preparation",
          
        },
        {
          code: 31025003,
          display: "Dibenzoxazepine derivative antipsychotic agent",
          
        },
        {
          code: 31087008,
          display: "Ampicillin",
          
        },
        {
          code: 31181006,
          display: "Injectable testosterone preparation",
          
        },
        {
          code: 31231007,
          display: "H2O2 - Hydrogen peroxide",
          
        },
        {
          code: 31305008,
          display: "Streptococcus equisimilis antiserum",
          
        },
        {
          code: 31306009,
          display: "Quinidine",
          
        },
        {
          code: 31352002,
          display: "Normal colostral whey",
          
        },
        {
          code: 31587003,
          display: "Almond oil liquid",
          
        },
        {
          code: 31684002,
          display: "Buprenorphine",
          
        },
        {
          code: 31690003,
          display: "Bethanechol",
          
        },
        {
          code: 31692006,
          display: "Pentamidine",
          
        },
        {
          code: 31716004,
          display: "Frozen plasma product, human",
          
        },
        {
          code: 31865003,
          display: "Fluconazole",
          
        },
        {
          code: 31872002,
          display: "Pramocaine",
          
        },
        {
          code: 31970009,
          display: "Nitrate vasodilator",
          
        },
        {
          code: 32249005,
          display: "Antiviral drugs",
          
        },
        {
          code: 32313007,
          display: "Enflurane",
          
        },
        {
          code: 32460003,
          display: "Beclometasone dipropionate nasal preparation",
          
        },
        {
          code: 32462006,
          display: "Melanocyte stimulating hormone releasing factor preparation",
          
        },
        {
          code: 32473004,
          display: "Spider antivenin",
          
        },
        {
          code: 32474005,
          display: "Probucol",
          
        },
        {
          code: 32583002,
          display: "Antiseborrheic drug",
          
        },
        {
          code: 32647002,
          display: "Ergotamine",
          
        },
        {
          code: 32653002,
          display: "Ergosterol preparation",
          
        },
        {
          code: 32792001,
          display: "Trimethoprim",
          
        },
        {
          code: 32823007,
          display: "Maprotiline",
          
        },
        {
          code: 32841004,
          display: "NaCl - Sodium chloride solution",
          
        },
        {
          code: 32955006,
          display: "Domperidone",
          
        },
        {
          code: 32960005,
          display: "Thiosalicylate",
          
        },
        {
          code: 33124007,
          display: "Butamidum",
          
        },
        {
          code: 33133009,
          display: "Ophthalmic anti-inflammatory preparation",
          
        },
        {
          code: 33219003,
          display: "Tricyclic antidepressant",
          
        },
        {
          code: 33231001,
          display: "Pentobarbital",
          
        },
        {
          code: 33234009,
          display: "Var/Vac",
          
        },
        {
          code: 33236006,
          display: "Cortisone acetate preparation",
          
        },
        {
          code: 33252009,
          display: "beta-adrenoceptor blocking drug",
          
        },
        {
          code: 33378002,
          display: "Desipramine",
          
        },
        {
          code: 33484000,
          display: "Proprietary drug",
          
        },
        {
          code: 33588000,
          display: "Thioridazine",
          
        },
        {
          code: 33589008,
          display: "Cardiac glycoside",
          
        },
        {
          code: 33664007,
          display: "Acetazolamide",
          
        },
        {
          code: 33675006,
          display: "Carbachol",
          
        },
        {
          code: 33682005,
          display: "Mydriatic",
          
        },
        {
          code: 33815001,
          display: "Streptococcus suis antiserum",
          
        },
        {
          code: 34012005,
          display: "Sulfonylurea product",
          
        },
        {
          code: 34217006,
          display: "Oxyquinoline",
          
        },
        {
          code: 34364009,
          display: "Mefenamic acid",
          
        },
        {
          code: 34393009,
          display: "Tolazamide",
          
        },
        {
          code: 34462007,
          display: "Natamycin",
          
        },
        {
          code: 34598001,
          display: "Immunobiologic agent available from the Centers for Disease Control and Prevention",
          
        },
        {
          code: 34599009,
          display: "Thyroglobulin preparation",
          
        },
        {
          code: 34689006,
          display: "Hepatitis B vaccine",
          
        },
        {
          code: 34693000,
          display: "Zalcitabine",
          
        },
        {
          code: 34696008,
          display: "Sodium ascorbate preparation",
          
        },
        {
          code: 34731007,
          display: "Carbenicillin",
          
        },
        {
          code: 34816007,
          display: "Cod liver oil",
          
        },
        {
          code: 34833000,
          display: "Hydrocortisone ophthalmic preparation",
          
        },
        {
          code: 34929006,
          display: "Benzethonium",
          
        },
        {
          code: 35035001,
          display: "Orphenadrine",
          
        },
        {
          code: 35063004,
          display: "Ribavirin",
          
        },
        {
          code: 35097006,
          display: "Flea antigen",
          
        },
        {
          code: 35282000,
          display: "Gemfibrozil",
          
        },
        {
          code: 35300007,
          display: "Daunorubicin",
          
        },
        {
          code: 35324004,
          display: "Paraldehyde product",
          
        },
        {
          code: 35392005,
          display: "Calcium-removing resin",
          
        },
        {
          code: 35476001,
          display: "Silver nitrate product",
          
        },
        {
          code: 35531004,
          display: "Hydrocortamate preparation",
          
        },
        {
          code: 35736007,
          display: "Cholera vaccines",
          
        },
        {
          code: 35768004,
          display: "Oxybutynin",
          
        },
        {
          code: 35792007,
          display: "Peritoneal dialysis solution",
          
        },
        {
          code: 35967000,
          display: "Medazepam",
          
        },
        {
          code: 35983000,
          display: "Cellular blood product, human",
          
        },
        {
          code: 36068003,
          display: "Pyrantel",
          
        },
        {
          code: 36113004,
          display: "Imipramine",
          
        },
        {
          code: 36168000,
          display: "Anti-infective nasal preparations",
          
        },
        {
          code: 36218003,
          display: "Thiethylperazine",
          
        },
        {
          code: 36236003,
          display: "Antidepressant",
          
        },
        {
          code: 36391008,
          display: "Primaquine",
          
        },
        {
          code: 36537006,
          display: "Ambenonium",
          
        },
        {
          code: 36594001,
          display: "Tiabendazole",
          
        },
        {
          code: 36621009,
          display: "Medroxyprogesterone",
          
        },
        {
          code: 36642006,
          display: "Propantheline",
          
        },
        {
          code: 36763003,
          display: "Immune globulin IM",
          
        },
        {
          code: 36795002,
          display: "Piperazine estrone sulfate",
          
        },
        {
          code: 36893000,
          display: "Ceftazidime",
          
        },
        {
          code: 36909007,
          display: "Phenindamine",
          
        },
        {
          code: 36940000,
          display: "Thioxanthene derivative antipsychotic agent",
          
        },
        {
          code: 36944009,
          display: "Vitamin B6 preparation",
          
        },
        {
          code: 37084008,
          display: "4-quinolones",
          
        },
        {
          code: 37146000,
          display: "Typhus vaccine",
          
        },
        {
          code: 37306000,
          display: "Vidarabine",
          
        },
        {
          code: 37400007,
          display: "Magnesium sulfate",
          
        },
        {
          code: 37628007,
          display: "Cefalotin",
          
        },
        {
          code: 37643009,
          display: "Autogenous bacterin",
          
        },
        {
          code: 37773009,
          display: "Diphenylbutylpiperidine derivative antipsychotic agent",
          
        },
        {
          code: 37803001,
          display: "d-TC - Tubocurarine",
          
        },
        {
          code: 38076006,
          display: "Sodium thyroxine",
          
        },
        {
          code: 38131009,
          display: "Synthetic drug",
          
        },
        {
          code: 38166006,
          display: "Tolnaftate",
          
        },
        {
          code: 38181000,
          display: "Antineoplastic antibiotic",
          
        },
        {
          code: 38231004,
          display: "Polysaccharide iron complex",
          
        },
        {
          code: 38268001,
          display: "Propionic acid-ibuprofen",
          
        },
        {
          code: 38314008,
          display: "Isotretinoin",
          
        },
        {
          code: 38413003,
          display: "Otic dosage form product",
          
        },
        {
          code: 38578004,
          display: "Megestrol preparation",
          
        },
        {
          code: 38828006,
          display: "Sodium thiosulfate",
          
        },
        {
          code: 38900001,
          display: "Proliferant agent",
          
        },
        {
          code: 39064002,
          display: "Acetohexamide",
          
        },
        {
          code: 39124003,
          display: "Methohexital",
          
        },
        {
          code: 39128000,
          display: "Famotidine",
          
        },
        {
          code: 39142008,
          display: "Phendimetrazine",
          
        },
        {
          code: 39252001,
          display: "Water balance agent",
          
        },
        {
          code: 39359008,
          display: "Penicillin V",
          
        },
        {
          code: 39432004,
          display: "Deodorant",
          
        },
        {
          code: 39487003,
          display: "Regular insulin product",
          
        },
        {
          code: 39516004,
          display: "Disulfiram product",
          
        },
        {
          code: 39598004,
          display: "Marijuana derivative",
          
        },
        {
          code: 39608003,
          display: "Pentazocine",
          
        },
        {
          code: 39707000,
          display: "Aminobenzoic acid",
          
        },
        {
          code: 39741008,
          display: "Drug groups primarily affecting the gastro-intestinal system",
          
        },
        {
          code: 39860005,
          display: "Fructose product",
          
        },
        {
          code: 39939003,
          display: "Phenyltoloxamine",
          
        },
        {
          code: 40162007,
          display: "Bulk-forming laxatives",
          
        },
        {
          code: 40232005,
          display: "Ketoconazole",
          
        },
        {
          code: 40339003,
          display: "Calcium lactate",
          
        },
        {
          code: 40429005,
          display: "Etomidate",
          
        },
        {
          code: 40430000,
          display: "Bromelains",
          
        },
        {
          code: 40556005,
          display: "Phenytoin product",
          
        },
        {
          code: 40562000,
          display: "Methylergonovine preparation",
          
        },
        {
          code: 40589005,
          display: "Amitriptyline",
          
        },
        {
          code: 40606008,
          display: "Orphan drug",
          
        },
        {
          code: 40648001,
          display: "Fentanyl product",
          
        },
        {
          code: 40652001,
          display: "Cromolyn sodium",
          
        },
        {
          code: 40820003,
          display: "Carbamazepine product",
          
        },
        {
          code: 40877002,
          display: "Streptomycin",
          
        },
        {
          code: 40901001,
          display: "Desferrioxamine mesylate",
          
        },
        {
          code: 40905005,
          display: "Beractant",
          
        },
        {
          code: 40974005,
          display: "Phenylpiperone",
          
        },
        {
          code: 40999006,
          display: "CCNU - Lomustine",
          
        },
        {
          code: 41001009,
          display: "Dinoprost",
          
        },
        {
          code: 41015006,
          display: "Metaraminol",
          
        },
        {
          code: 41147003,
          display: "Perphenazine",
          
        },
        {
          code: 41193000,
          display: "Aciclovir",
          
        },
        {
          code: 41324009,
          display: "Propiomazine",
          
        },
        {
          code: 41365009,
          display: "Fluphenazine",
          
        },
        {
          code: 41367001,
          display: "Enterogastrone preparation",
          
        },
        {
          code: 41399007,
          display: "Oxazolidinedione",
          
        },
        {
          code: 41470001,
          display: "Corbadrine",
          
        },
        {
          code: 41493007,
          display: "Dicycloverine",
          
        },
        {
          code: 41549009,
          display: "Angiotensin-converting enzyme inhibitor",
          
        },
        {
          code: 41985001,
          display: "Bitolterol",
          
        },
        {
          code: 42082003,
          display: "Vancomycin",
          
        },
        {
          code: 42098005,
          display: "Dexamethasone ophthalmic preparation",
          
        },
        {
          code: 42271003,
          display: "Glutamic acid product",
          
        },
        {
          code: 42348003,
          display: "Methyltestosterone",
          
        },
        {
          code: 42374009,
          display: "Dextromethorphan hydrobromide",
          
        },
        {
          code: 42444000,
          display: "Secobarbital",
          
        },
        {
          code: 42514000,
          display: "Procaine product",
          
        },
        {
          code: 42638008,
          display: "Methylrosanilium chloride",
          
        },
        {
          code: 42714002,
          display: "Escherichia coli antiserum",
          
        },
        {
          code: 42720001,
          display: "Miconazole",
          
        },
        {
          code: 42863006,
          display: "Desmopressin acetate preparation",
          
        },
        {
          code: 43343000,
          display: "Magaldrate",
          
        },
        {
          code: 43499003,
          display: "Injectable interferon",
          
        },
        {
          code: 43533002,
          display: "Chloramphenicol ophthalmic preparation",
          
        },
        {
          code: 43594006,
          display: "Skin bleaching preparations",
          
        },
        {
          code: 43684009,
          display: "Misoprostol product",
          
        },
        {
          code: 43747001,
          display: "Drug excipient",
          
        },
        {
          code: 43753001,
          display: "Dydrogesterone",
          
        },
        {
          code: 43879000,
          display: "Flunisolide",
          
        },
        {
          code: 43927002,
          display: "Analeptic agent",
          
        },
        {
          code: 44175000,
          display: "Diperodon",
          
        },
        {
          code: 44418001,
          display: "Percomorph liver oil preparation",
          
        },
        {
          code: 44658005,
          display: "Promazine",
          
        },
        {
          code: 44731005,
          display: "Otic form hydrocortisone",
          
        },
        {
          code: 44790008,
          display: "Ethosuximide",
          
        },
        {
          code: 44798001,
          display: "Dinoprostone product",
          
        },
        {
          code: 44938006,
          display: "Cefoperazone",
          
        },
        {
          code: 44990002,
          display: "Procyclidine",
          
        },
        {
          code: 45218006,
          display: "Meclastine",
          
        },
        {
          code: 45311002,
          display: "Terbutaline",
          
        },
        {
          code: 45313004,
          display: "Propylpiperazine derivative of phenothiazine",
          
        },
        {
          code: 45355008,
          display: "Rocky Mountain spotted fever vaccine",
          
        },
        {
          code: 45518007,
          display: "Thiazide diuretic product",
          
        },
        {
          code: 45680002,
          display: "Tolmetin",
          
        },
        {
          code: 45844004,
          display: "Sulfasalazine",
          
        },
        {
          code: 45888006,
          display: "gamma-Tocopherol preparation",
          
        },
        {
          code: 45923000,
          display: "E331 - Sodium citrate",
          
        },
        {
          code: 46009007,
          display: "Chlorambucil",
          
        },
        {
          code: 46063005,
          display: "Psychotherapeutic agent",
          
        },
        {
          code: 46123006,
          display: "Ascorbic acid product",
          
        },
        {
          code: 46233009,
          display: "FLU - Influenza vaccine",
          
        },
        {
          code: 46436003,
          display: "Haloprogin",
          
        },
        {
          code: 46479001,
          display: "Encainide",
          
        },
        {
          code: 46532003,
          display: "Brilliant green",
          
        },
        {
          code: 46547007,
          display: "Labetalol",
          
        },
        {
          code: 46576005,
          display: "Flecainide",
          
        },
        {
          code: 46709004,
          display: "Methylphenobarbital",
          
        },
        {
          code: 46741005,
          display: "SA - Salicylic acid",
          
        },
        {
          code: 46913003,
          display: "Edrophonium",
          
        },
        {
          code: 47065008,
          display: "Quinine",
          
        },
        {
          code: 47120002,
          display: "Hexamidinum",
          
        },
        {
          code: 47124006,
          display: "Aminoglutethimide",
          
        },
        {
          code: 47140009,
          display: "Medrysone",
          
        },
        {
          code: 47331002,
          display: "CPZ - Chlorpromazine",
          
        },
        {
          code: 47527007,
          display: "Phenindione",
          
        },
        {
          code: 47602007,
          display: "Nalidixic acid",
          
        },
        {
          code: 47755009,
          display: "Potassium sparing diuretic",
          
        },
        {
          code: 47772002,
          display: "Fenfluramine hydrochloride",
          
        },
        {
          code: 47898004,
          display: "Verapamil",
          
        },
        {
          code: 48028008,
          display: "Haemophilus influenzae Type b (Hib)/diphtheria/tetanus/pertussis vaccine",
          
        },
        {
          code: 48174005,
          display: "Ranitidine",
          
        },
        {
          code: 48256008,
          display: "Benzyl benzoate",
          
        },
        {
          code: 48279009,
          display: "Emollient product",
          
        },
        {
          code: 48351000,
          display: "Butadione",
          
        },
        {
          code: 48546005,
          display: "Diazepam product",
          
        },
        {
          code: 48603004,
          display: "Warfarin",
          
        },
        {
          code: 48614001,
          display: "Clobetasol",
          
        },
        {
          code: 48647005,
          display: "Pancrelipase",
          
        },
        {
          code: 48698004,
          display: "Calcium-channel blocker",
          
        },
        {
          code: 48836000,
          display: "Amikacin",
          
        },
        {
          code: 48875009,
          display: "Dihydroergotamine product",
          
        },
        {
          code: 48899009,
          display: "Hyoscyamine",
          
        },
        {
          code: 49019002,
          display: "Prednisolone ophthalmic preparation",
          
        },
        {
          code: 49157004,
          display: "Uricosuric product",
          
        },
        {
          code: 49192007,
          display: "Antiflatulent agent",
          
        },
        {
          code: 49267000,
          display: "Hydroxyphenylbutazone",
          
        },
        {
          code: 49299006,
          display: "Protriptyline",
          
        },
        {
          code: 49485009,
          display: "Norfloxacin",
          
        },
        {
          code: 49577002,
          display: "Minoxidil",
          
        },
        {
          code: 49590009,
          display: "Class I antiarrhythmic",
          
        },
        {
          code: 49600008,
          display: "Normal animal plasma",
          
        },
        {
          code: 49617001,
          display: "Disodium enoxolone",
          
        },
        {
          code: 49663007,
          display: "Sunscreening preparations",
          
        },
        {
          code: 49669006,
          display: "Escherichia coli - pasteurella multocida - salmonella typhimurium antiserum",
          
        },
        {
          code: 49688004,
          display: "Hexocyclium",
          
        },
        {
          code: 49694007,
          display: "Mucolytics",
          
        },
        {
          code: 49705006,
          display: "Idoxuridine",
          
        },
        {
          code: 49802003,
          display: "Anti-D (Rh) immunoglobulin",
          
        },
        {
          code: 49860008,
          display: "Gold product",
          
        },
        {
          code: 49953001,
          display: "Pheniramine",
          
        },
        {
          code: 49992008,
          display: "Dexamethasone sodium phosphate",
          
        },
        {
          code: 50094009,
          display: "Hetastarch",
          
        },
        {
          code: 50137001,
          display: "Glycine solution",
          
        },
        {
          code: 50182002,
          display: "Hemodialysis fluid",
          
        },
        {
          code: 50244000,
          display: "Intravenous anesthetic",
          
        },
        {
          code: 50256004,
          display: "Antitrichomonal agent",
          
        },
        {
          code: 50318003,
          display: "Luteal hormone",
          
        },
        {
          code: 50335004,
          display: "Levorphanol",
          
        },
        {
          code: 50520001,
          display: "Neomycin B",
          
        },
        {
          code: 50841004,
          display: "Otic form chloramphenicol",
          
        },
        {
          code: 50868004,
          display: "Dexamfetamine",
          
        },
        {
          code: 51013009,
          display: "Sulfadimethoxine",
          
        },
        {
          code: 51073002,
          display: "Phenobarbital product",
          
        },
        {
          code: 51103004,
          display: "Hypertonic saline",
          
        },
        {
          code: 51126006,
          display: "Benzestrol preparation",
          
        },
        {
          code: 51132001,
          display: "Hyaluronidase product",
          
        },
        {
          code: 51326002,
          display: "BCNU - Carmustine",
          
        },
        {
          code: 51334008,
          display: "Cycloserine",
          
        },
        {
          code: 51361008,
          display: "Amantadine",
          
        },
        {
          code: 51425004,
          display: "Scorpion antivenin",
          
        },
        {
          code: 51555009,
          display: "Desiccated liver preparation",
          
        },
        {
          code: 51752005,
          display: "Chologon",
          
        },
        {
          code: 51758009,
          display: "Amidine",
          
        },
        {
          code: 51779009,
          display: "Cephalosporin -class of antibiotic-",
          
        },
        {
          code: 51908007,
          display: "Prenylamine",
          
        },
        {
          code: 51992002,
          display: "Gastrin preparation",
          
        },
        {
          code: 52017007,
          display: "Antiemetic",
          
        },
        {
          code: 52108005,
          display: "Ferrous fumarate",
          
        },
        {
          code: 52215008,
          display: "Desonide",
          
        },
        {
          code: 52388000,
          display: "Prednisolone",
          
        },
        {
          code: 52412009,
          display: "Methylergonovine maleate preparation",
          
        },
        {
          code: 52423008,
          display: "Tar preparation",
          
        },
        {
          code: 52451004,
          display: "Dihydroindolone derivative antipsychotic agent",
          
        },
        {
          code: 52489009,
          display: "Vasopressin tannate preparation",
          
        },
        {
          code: 52628005,
          display: "Typhoid-paratyphoid vaccine",
          
        },
        {
          code: 52761007,
          display: "Anticholinesterase parasympathomimetic",
          
        },
        {
          code: 52883001,
          display: "para-Hydroxyamphetamine",
          
        },
        {
          code: 52896000,
          display: "Chinoform",
          
        },
        {
          code: 53009005,
          display: "Analgesic",
          
        },
        {
          code: 53480001,
          display: "Phentermine",
          
        },
        {
          code: 53584007,
          display: "Methacholine",
          
        },
        {
          code: 53640004,
          display: "Fluoxetine",
          
        },
        {
          code: 53641000,
          display: "Flavoxate",
          
        },
        {
          code: 53691001,
          display: "Calcium gluconate",
          
        },
        {
          code: 53793005,
          display: "Escherichia coli antibody",
          
        },
        {
          code: 53800008,
          display: "Dithranol",
          
        },
        {
          code: 53848009,
          display: "Metyrapone",
          
        },
        {
          code: 53855006,
          display: "Neostigmine bromide",
          
        },
        {
          code: 54142000,
          display: "Domiphen",
          
        },
        {
          code: 54344006,
          display: "Flurbiprofen",
          
        },
        {
          code: 54391004,
          display: "Levamisole",
          
        },
        {
          code: 54406003,
          display: "Methoxamine",
          
        },
        {
          code: 54541002,
          display: "Ergometrine preparation",
          
        },
        {
          code: 54544005,
          display: "Pethidine",
          
        },
        {
          code: 54577009,
          display: "Ceftizoxime",
          
        },
        {
          code: 54659006,
          display: "Thiamine hydrochloride preparation",
          
        },
        {
          code: 54705000,
          display: "Temazepam",
          
        },
        {
          code: 54765002,
          display: "Phenylephrine",
          
        },
        {
          code: 54824008,
          display: "Isometheptene",
          
        },
        {
          code: 54882005,
          display: "Amfepramone",
          
        },
        {
          code: 54887004,
          display: "Cefalexin",
          
        },
        {
          code: 54972005,
          display: "Tretinoin",
          
        },
        {
          code: 54982006,
          display: "Promethestrol preparation",
          
        },
        {
          code: 55015008,
          display: "E325 - Sodium lactate",
          
        },
        {
          code: 55217007,
          display: "Calcium carbonate",
          
        },
        {
          code: 55432002,
          display: "Azlocillin",
          
        },
        {
          code: 55556000,
          display: "Tetracaine",
          
        },
        {
          code: 55673009,
          display: "Iothalamate sodium I^125^",
          
        },
        {
          code: 55745002,
          display: "Propranolol",
          
        },
        {
          code: 55782006,
          display: "Amide-type anesthetic",
          
        },
        {
          code: 55784007,
          display: "Natural hormone preparation",
          
        },
        {
          code: 55830003,
          display: "Menotrophin",
          
        },
        {
          code: 55867006,
          display: "Aminophylline",
          
        },
        {
          code: 55889005,
          display: "Praziquantel",
          
        },
        {
          code: 56011005,
          display: "Stinging insects immunotherapy extract",
          
        },
        {
          code: 56014002,
          display: "Hydroxyprogesterone",
          
        },
        {
          code: 56032002,
          display: "Androstanolone",
          
        },
        {
          code: 56059005,
          display: "Mebendazole product",
          
        },
        {
          code: 56123002,
          display: "Hexamine",
          
        },
        {
          code: 56230001,
          display: "Bretylium",
          
        },
        {
          code: 56234005,
          display: "Growth hormone product",
          
        },
        {
          code: 56240003,
          display: "Paramethasone acetate preparation",
          
        },
        {
          code: 56281006,
          display: "Anesthetic ether",
          
        },
        {
          code: 56480005,
          display: "Parabromdylamine",
          
        },
        {
          code: 56549003,
          display: "Metoclopramide",
          
        },
        {
          code: 56602009,
          display: "Hydroxycarbamide",
          
        },
        {
          code: 56615000,
          display: "Polyestradiol phosphate preparation",
          
        },
        {
          code: 56656002,
          display: "Magnesium-based antacid",
          
        },
        {
          code: 56844000,
          display: "Yellow fever vaccine product",
          
        },
        {
          code: 56928005,
          display: "Etoposide product",
          
        },
        {
          code: 56934003,
          display: "PVP - Polyvinylpyrrolidone",
          
        },
        {
          code: 57002000,
          display: "Chlorprothixene",
          
        },
        {
          code: 57066004,
          display: "Cisplatin product",
          
        },
        {
          code: 57123008,
          display: "Urinary acidifier",
          
        },
        {
          code: 57191001,
          display: "Chloramphenicol product",
          
        },
        {
          code: 57263002,
          display: "Oxiconazole",
          
        },
        {
          code: 57376006,
          display: "Monosodium carbonate",
          
        },
        {
          code: 57538001,
          display: "Chlortetracycline",
          
        },
        {
          code: 57616006,
          display: "STD - Sodium tetradecyl sulfate",
          
        },
        {
          code: 57670008,
          display: "Cefoxitin",
          
        },
        {
          code: 57752001,
          display: "Gentamicin product",
          
        },
        {
          code: 57811004,
          display: "Dihydrocodeine",
          
        },
        {
          code: 57819002,
          display: "Somatotropin inhibiting factor preparation",
          
        },
        {
          code: 57845006,
          display: "Isoprenaline",
          
        },
        {
          code: 57853003,
          display: "Clidinium",
          
        },
        {
          code: 57893000,
          display: "Chlortalidone",
          
        },
        {
          code: 57952007,
          display: "Lipid lowering drug",
          
        },
        {
          code: 58050004,
          display: "Antiparkinsonian agent",
          
        },
        {
          code: 58098008,
          display: "Tetanus toxoid adsorbed",
          
        },
        {
          code: 58360000,
          display: "Phenazocine",
          
        },
        {
          code: 58467001,
          display: "Papaverine",
          
        },
        {
          code: 58502006,
          display: "Propylamine derivative antihistamine",
          
        },
        {
          code: 58760003,
          display: "Antimetabolites",
          
        },
        {
          code: 58805000,
          display: "Pituitary hormone preparation",
          
        },
        {
          code: 58883005,
          display: "Clindamycin",
          
        },
        {
          code: 58892008,
          display: "F3T - trifluorothymidine",
          
        },
        {
          code: 58905004,
          display: "Diazoxide",
          
        },
        {
          code: 58944007,
          display: "Vasodilator",
          
        },
        {
          code: 59057006,
          display: "Antihemophilic factor preparation",
          
        },
        {
          code: 59187003,
          display: "Dopamine product",
          
        },
        {
          code: 59240002,
          display: "MMC-Mitomycin-C",
          
        },
        {
          code: 59245007,
          display: "Hypophysiostatic factor preparation",
          
        },
        {
          code: 59255006,
          display: "Sulfonamide",
          
        },
        {
          code: 59261009,
          display: "Oral contraceptive preparation",
          
        },
        {
          code: 59270007,
          display: "Loxapine",
          
        },
        {
          code: 59456005,
          display: "Astemizole",
          
        },
        {
          code: 59589008,
          display: "Pyrimethamine product",
          
        },
        {
          code: 59594008,
          display: "Nondepolarizing agent",
          
        },
        {
          code: 59751001,
          display: "Cough suppressant",
          
        },
        {
          code: 59799001,
          display: "Osmotic diuretic product",
          
        },
        {
          code: 59941008,
          display: "Diltiazem",
          
        },
        {
          code: 59953007,
          display: "Pyridostigmine",
          
        },
        {
          code: 59999009,
          display: "Tetanus and diphtheria toxoid adsorbed for adult use",
          
        },
        {
          code: 60090003,
          display: "Soft drug",
          
        },
        {
          code: 60093001,
          display: "Phenylpropanolamine hydrochloride",
          
        },
        {
          code: 60149003,
          display: "Indometacin",
          
        },
        {
          code: 60169008,
          display: "Antacid",
          
        },
        {
          code: 60468008,
          display: "Magnesium hydroxide",
          
        },
        {
          code: 60520004,
          display: "Thiamine mononitrate preparation",
          
        },
        {
          code: 60533005,
          display: "Astringent drug",
          
        },
        {
          code: 60541005,
          display: "Lanatoside C",
          
        },
        {
          code: 60682004,
          display: "Echothiophate",
          
        },
        {
          code: 60731009,
          display: "Diethylcarbamazine",
          
        },
        {
          code: 60767002,
          display: "Normal animal serum",
          
        },
        {
          code: 60881009,
          display: "Heroin",
          
        },
        {
          code: 60972002,
          display: "Irrigating solution",
          
        },
        {
          code: 60978003,
          display: "Barbiturate",
          
        },
        {
          code: 61020000,
          display: "Thyroid preparation",
          
        },
        {
          code: 61093008,
          display: "Prolactin inhibiting factor preparation",
          
        },
        {
          code: 61123001,
          display: "Amobarbital sodium",
          
        },
        {
          code: 61132004,
          display: "Gas gangrene antitoxin",
          
        },
        {
          code: 61153008,
          display: "Measles, mumps and rubella vaccine",
          
        },
        {
          code: 61181002,
          display: "Meprednisone preparation",
          
        },
        {
          code: 61408004,
          display: "Molindone",
          
        },
        {
          code: 61457001,
          display: "Adrenal hormone preparation",
          
        },
        {
          code: 61602008,
          display: "Pertussis vaccine",
          
        },
        {
          code: 61621000,
          display: "Laxative",
          
        },
        {
          code: 61623002,
          display: "Buclizine",
          
        },
        {
          code: 61650007,
          display: "Niacinamide preparation",
          
        },
        {
          code: 61651006,
          display: "Cefamandole",
          
        },
        {
          code: 61862008,
          display: "Meticillin",
          
        },
        {
          code: 61939007,
          display: "Diphenylmethane laxative",
          
        },
        {
          code: 61946003,
          display: "Estrogenic preparation",
          
        },
        {
          code: 62051009,
          display: "Dichlorisone preparation",
          
        },
        {
          code: 62063004,
          display: "Nasal anti-inflammatory preparation",
          
        },
        {
          code: 62191005,
          display: "Injectable liver preparation",
          
        },
        {
          code: 62288001,
          display: "Anthelmintic",
          
        },
        {
          code: 62294009,
          display: "Varicella-zoster immune globulin",
          
        },
        {
          code: 62353003,
          display: "Clomifene citrate",
          
        },
        {
          code: 62354009,
          display: "Bronchitis vaccine",
          
        },
        {
          code: 62529008,
          display: "Tiotixene",
          
        },
        {
          code: 62560008,
          display: "Fluorometholone ophthalmic preparation",
          
        },
        {
          code: 62782004,
          display: "Clonidine",
          
        },
        {
          code: 63094006,
          display: "Anticonvulsant",
          
        },
        {
          code: 63136007,
          display: "Phytonadione preparation",
          
        },
        {
          code: 63318000,
          display: "Benzoic acid",
          
        },
        {
          code: 63338004,
          display: "Drug flavoring",
          
        },
        {
          code: 63470003,
          display: "Fluoxymesterone preparation",
          
        },
        {
          code: 63639004,
          display: "Niacin preparation",
          
        },
        {
          code: 63682003,
          display: "Halothane",
          
        },
        {
          code: 63758001,
          display: "Norethindrone preparation",
          
        },
        {
          code: 63822004,
          display: "Vitamin E preparation",
          
        },
        {
          code: 64083002,
          display: "Genitourinary smooth muscle relaxant",
          
        },
        {
          code: 64115004,
          display: "Amodiaquin",
          
        },
        {
          code: 64127001,
          display: "Dactinomycin",
          
        },
        {
          code: 64240003,
          display: "Methandrostenolone preparation",
          
        },
        {
          code: 64296005,
          display: "Staphylococcus toxoid",
          
        },
        {
          code: 64349004,
          display: "Griseofulvin",
          
        },
        {
          code: 64462001,
          display: "Terpin",
          
        },
        {
          code: 64558005,
          display: "Metixene",
          
        },
        {
          code: 64851009,
          display: "Diiodohydroxyquin",
          
        },
        {
          code: 64878006,
          display: "Methylthiouracil",
          
        },
        {
          code: 65020006,
          display: "Benzocaine",
          
        },
        {
          code: 65026000,
          display: "Ephedrine",
          
        },
        {
          code: 65041000,
          display: "Biperiden",
          
        },
        {
          code: 65092008,
          display: "Chloropyrilene",
          
        },
        {
          code: 65265006,
          display: "Thromboplastin",
          
        },
        {
          code: 65461004,
          display: "Adrenal cortex extract",
          
        },
        {
          code: 65484006,
          display: "Prostacycline PGI>2< preparation",
          
        },
        {
          code: 65502005,
          display: "Epinephrine preparation",
          
        },
        {
          code: 65505007,
          display: "Gastrointestinal smooth muscle relaxant",
          
        },
        {
          code: 65627005,
          display: "4-Amino-2-methyl-1-naphthol hydrate preparation",
          
        },
        {
          code: 65628000,
          display: "Skin agent",
          
        },
        {
          code: 65638005,
          display: "Corticotropin zinc hydroxide preparation",
          
        },
        {
          code: 65695006,
          display: "General inhalation anesthetic",
          
        },
        {
          code: 65823007,
          display: "Protective agent",
          
        },
        {
          code: 65884003,
          display: "Antrapurol",
          
        },
        {
          code: 65965000,
          display: "Micrurus fulvius antivenin",
          
        },
        {
          code: 66065008,
          display: "Saline laxative",
          
        },
        {
          code: 66094001,
          display: "Probenecid",
          
        },
        {
          code: 66125007,
          display: "Flunisolide nasal preparation",
          
        },
        {
          code: 66243004,
          display: "Norethindrone acetate preparation",
          
        },
        {
          code: 66261008,
          display: "Tetracycline",
          
        },
        {
          code: 66349002,
          display: "Androgenic preparation",
          
        },
        {
          code: 66441000,
          display: "Pantothenic acid preparation",
          
        },
        {
          code: 66492008,
          display: "Isoflurane",
          
        },
        {
          code: 66493003,
          display: "Theophylline",
          
        },
        {
          code: 66602007,
          display: "Stanozolol preparation",
          
        },
        {
          code: 66672008,
          display: "Ester type local anesthetic",
          
        },
        {
          code: 66742008,
          display: "Pigmenting agent",
          
        },
        {
          code: 66854004,
          display: "Betamethasone valerate",
          
        },
        {
          code: 66859009,
          display: "Dipyridamole",
          
        },
        {
          code: 66860004,
          display: "Aluminum chloride",
          
        },
        {
          code: 66919007,
          display: "Methyclothiazide",
          
        },
        {
          code: 66971004,
          display: "Colestipol",
          
        },
        {
          code: 67213005,
          display: "Lymphocyte immune globulin",
          
        },
        {
          code: 67423003,
          display: "Acylaminopenicillin",
          
        },
        {
          code: 67440007,
          display: "Alpha-adrenergic blocking agent",
          
        },
        {
          code: 67477004,
          display: "Valproate",
          
        },
        {
          code: 67507000,
          display: "Antiarrhythmic drug",
          
        },
        {
          code: 67585005,
          display: "Topical anesthetic",
          
        },
        {
          code: 67735003,
          display: "Paclitaxel",
          
        },
        {
          code: 67891001,
          display: "Second generation cephalosporin",
          
        },
        {
          code: 67939000,
          display: "Apomorphine",
          
        },
        {
          code: 68088000,
          display: "Acebutolol",
          
        },
        {
          code: 68113000,
          display: "Hib oligosaccharide conjugate (diphtheria CRM>197< protein conjugate) vaccine",
          
        },
        {
          code: 68206008,
          display: "Calcitriol preparation",
          
        },
        {
          code: 68208009,
          display: "Diphtheria and tetanus toxoid adsorbed",
          
        },
        {
          code: 68395000,
          display: "Calcium chloride",
          
        },
        {
          code: 68398003,
          display: "Somatomedin preparation",
          
        },
        {
          code: 68402007,
          display: "Carbonic anhydrase inhibitor",
          
        },
        {
          code: 68407001,
          display: "Hydrogen peroxide solution 30%",
          
        },
        {
          code: 68422006,
          display: "Cloxacillin",
          
        },
        {
          code: 68424007,
          display: "Isoflurophate",
          
        },
        {
          code: 68444001,
          display: "Doxorubicin",
          
        },
        {
          code: 68461003,
          display: "Surgical jelly",
          
        },
        {
          code: 68490009,
          display: "Sodium propionate",
          
        },
        {
          code: 68622003,
          display: "Secretin preparation",
          
        },
        {
          code: 68702006,
          display: "Sodium aurothiomalate",
          
        },
        {
          code: 68774008,
          display: "Isoxsuprine",
          
        },
        {
          code: 68864001,
          display: "Polyvalent reptile antivenin",
          
        },
        {
          code: 68887009,
          display: "Methotrexate",
          
        },
        {
          code: 68892006,
          display: "Penicillinase-resistant penicillin",
          
        },
        {
          code: 69107004,
          display: "Dantrolene",
          
        },
        {
          code: 69204002,
          display: "Guanadrel",
          
        },
        {
          code: 69227005,
          display: "Class II antiarrhythmic drug",
          
        },
        {
          code: 69236009,
          display: "Amiodarone",
          
        },
        {
          code: 69242008,
          display: "Miotic",
          
        },
        {
          code: 69331001,
          display: "Aminocyclohexylpenicillin",
          
        },
        {
          code: 69431002,
          display: "Immunosuppressant",
          
        },
        {
          code: 69509008,
          display: "Biological agent",
          
        },
        {
          code: 69576000,
          display: "Menadione preparation",
          
        },
        {
          code: 69708003,
          display: "Clonazepam",
          
        },
        {
          code: 69801001,
          display: "Sodium estrone sulfate preparation",
          
        },
        {
          code: 69879000,
          display: "Altretamine",
          
        },
        {
          code: 69918003,
          display: "Aztreonam",
          
        },
        {
          code: 69967001,
          display: "Sucralfate",
          
        },
        {
          code: 70047000,
          display: "Sulfamethoxazole",
          
        },
        {
          code: 70216000,
          display: "Undecylenate salt",
          
        },
        {
          code: 70254000,
          display: "Sulfamethizole",
          
        },
        {
          code: 70343008,
          display: "Piperazine derivative antihistamine",
          
        },
        {
          code: 70379000,
          display: "Sodium chloride",
          
        },
        {
          code: 70447008,
          display: "Polyvalent pneumococcal vaccine",
          
        },
        {
          code: 70460002,
          display: "Fish liver oil preparation",
          
        },
        {
          code: 70702006,
          display: "Deferoxamine",
          
        },
        {
          code: 70776005,
          display: "Pemoline",
          
        },
        {
          code: 70841003,
          display: "Chymotrypsin preparation",
          
        },
        {
          code: 70864001,
          display: "Meprobamate",
          
        },
        {
          code: 70934008,
          display: "Demecarium",
          
        },
        {
          code: 71181003,
          display: "Vaccine",
          
        },
        {
          code: 71289008,
          display: "Snake antivenin",
          
        },
        {
          code: 71338005,
          display: "Vasopressin preparation",
          
        },
        {
          code: 71451001,
          display: "Kanamycin",
          
        },
        {
          code: 71453003,
          display: "Mupirocin",
          
        },
        {
          code: 71455005,
          display: "Flurandrenolone preparation",
          
        },
        {
          code: 71462001,
          display: "Podophyllum resin",
          
        },
        {
          code: 71516007,
          display: "Ergocalciferol preparation",
          
        },
        {
          code: 71584004,
          display: "Sodium phosphate",
          
        },
        {
          code: 71634000,
          display: "Chlormezanone",
          
        },
        {
          code: 71699007,
          display: "Trifluoperazine",
          
        },
        {
          code: 71724000,
          display: "Ferrous sulfate",
          
        },
        {
          code: 71731001,
          display: "Medrysone ophthalmic preparation",
          
        },
        {
          code: 71759000,
          display: "Nitroglycerin",
          
        },
        {
          code: 71770007,
          display: "Monoamine oxidase inhibitor",
          
        },
        {
          code: 71798005,
          display: "Fenoprofen",
          
        },
        {
          code: 71837009,
          display: "Cytotoxic agent",
          
        },
        {
          code: 72312007,
          display: "Cyclandelate",
          
        },
        {
          code: 72398005,
          display: "Ophthalmic sulfonamide preparation",
          
        },
        {
          code: 72416006,
          display: "Metacycline",
          
        },
        {
          code: 72623000,
          display: "2-Amino-6-mercaptopurine",
          
        },
        {
          code: 72824008,
          display: "Cholestyramine",
          
        },
        {
          code: 72870001,
          display: "Scopolamine",
          
        },
        {
          code: 72924009,
          display: "Clofazimine",
          
        },
        {
          code: 72968006,
          display: "Sodium salicylate",
          
        },
        {
          code: 72996000,
          display: "Drug builder",
          
        },
        {
          code: 73074003,
          display: "Colistin",
          
        },
        {
          code: 73093001,
          display: "Neomycin",
          
        },
        {
          code: 73133000,
          display: "Colchicine",
          
        },
        {
          code: 73170009,
          display: "Menthol",
          
        },
        {
          code: 73212002,
          display: "Adipiodone",
          
        },
        {
          code: 73228007,
          display: "Non-steroidal estrogen preparation",
          
        },
        {
          code: 73274006,
          display: "Human plasma cryoprecipitate",
          
        },
        {
          code: 73277004,
          display: "Mecamylamine",
          
        },
        {
          code: 73454001,
          display: "Desmopressin preparation",
          
        },
        {
          code: 73572009,
          display: "Morphine",
          
        },
        {
          code: 73585007,
          display: "Phenytoin sodium",
          
        },
        {
          code: 73627008,
          display: "Caloric agent",
          
        },
        {
          code: 73639000,
          display: "Prescription drug",
          
        },
        {
          code: 73647000,
          display: "Dipivefrine",
          
        },
        {
          code: 73756003,
          display: "Amobarbital",
          
        },
        {
          code: 73763003,
          display: "Extended spectrum penicillin",
          
        },
        {
          code: 73805002,
          display: "Thyrotropin releasing hormone preparation",
          
        },
        {
          code: 73949004,
          display: "Atropine",
          
        },
        {
          code: 73986003,
          display: "Cefuroxime",
          
        },
        {
          code: 74022005,
          display: "Mepenzolate",
          
        },
        {
          code: 74065006,
          display: "Prazepam",
          
        },
        {
          code: 74074008,
          display: "Atracurium",
          
        },
        {
          code: 74147005,
          display: "Edetate disodium",
          
        },
        {
          code: 74213004,
          display: "Indapamide",
          
        },
        {
          code: 74226000,
          display: "Vitamin K preparation",
          
        },
        {
          code: 74470007,
          display: "Cyclophosphamide",
          
        },
        {
          code: 74480006,
          display: "Potassium supplement",
          
        },
        {
          code: 74575000,
          display: "Piperacillin",
          
        },
        {
          code: 74583006,
          display: "Hydroquinone product",
          
        },
        {
          code: 74626007,
          display: "Drug diluent",
          
        },
        {
          code: 74632002,
          display: "Succinimide",
          
        },
        {
          code: 74674007,
          display: "Propofol",
          
        },
        {
          code: 74771007,
          display: "Phenoxybenzamine",
          
        },
        {
          code: 74780007,
          display: "Anthraquinone laxatives",
          
        },
        {
          code: 74782004,
          display: "Naturally occurring alkaloid",
          
        },
        {
          code: 74798006,
          display: "Pipenzolate",
          
        },
        {
          code: 74819009,
          display: "Acetohydroxamic acid",
          
        },
        {
          code: 75029008,
          display: "Desoxycorticosterone preparation",
          
        },
        {
          code: 75201000,
          display: "Bacterin - toxoid",
          
        },
        {
          code: 75203002,
          display: "Mometasone",
          
        },
        {
          code: 75292001,
          display: "Vincristine sulfate",
          
        },
        {
          code: 75366006,
          display: "Sodium calciumedetate",
          
        },
        {
          code: 75429004,
          display: "Dexbrompheniramine",
          
        },
        {
          code: 75501004,
          display: "Bromazine",
          
        },
        {
          code: 75661008,
          display: "delta-Tocopherol preparation",
          
        },
        {
          code: 75748004,
          display: "Theophylline sodium glycinate",
          
        },
        {
          code: 75770001,
          display: "Urea topical preparation",
          
        },
        {
          code: 75927008,
          display: "Floxuridine",
          
        },
        {
          code: 75959001,
          display: "Tamoxifen",
          
        },
        {
          code: 75969007,
          display: "Gonadotropin releasing factor preparation",
          
        },
        {
          code: 76058001,
          display: "Prazosin",
          
        },
        {
          code: 76155001,
          display: "Iopanoic acid",
          
        },
        {
          code: 76286000,
          display: "Gallamine",
          
        },
        {
          code: 76289007,
          display: "Xylometazoline",
          
        },
        {
          code: 76385003,
          display: "Alpha 1 adrenergic blocking agent",
          
        },
        {
          code: 76390000,
          display: "Practolol",
          
        },
        {
          code: 76591000,
          display: "Bleomycin",
          
        },
        {
          code: 76696004,
          display: "Noscapine",
          
        },
        {
          code: 76759004,
          display: "Disopyramide product",
          
        },
        {
          code: 76962009,
          display: "Iproniazid",
          
        },
        {
          code: 77035009,
          display: "Clofibrate",
          
        },
        {
          code: 77048008,
          display: "Dip/ser",
          
        },
        {
          code: 77237006,
          display: "Emetic",
          
        },
        {
          code: 77331005,
          display: "Normal animal globulin concentrate",
          
        },
        {
          code: 77390008,
          display: "Benzatropine",
          
        },
        {
          code: 77398001,
          display: "Antidiarrhea agent",
          
        },
        {
          code: 77549006,
          display: "Terpene",
          
        },
        {
          code: 77657003,
          display: "Illegal drug",
          
        },
        {
          code: 77731008,
          display: "N-Acetylcysteine",
          
        },
        {
          code: 77750008,
          display: "Dacarbazine",
          
        },
        {
          code: 77856005,
          display: "Esmolol",
          
        },
        {
          code: 77885004,
          display: "Mestranol product",
          
        },
        {
          code: 77898008,
          display: "Simethicone",
          
        },
        {
          code: 78025001,
          display: "Ganciclovir product",
          
        },
        {
          code: 78057000,
          display: "Carbol-fuchsin topical solution",
          
        },
        {
          code: 78174002,
          display: "Mezlocillin",
          
        },
        {
          code: 78379001,
          display: "Reserpine",
          
        },
        {
          code: 78411008,
          display: "Thiopental sodium",
          
        },
        {
          code: 78439009,
          display: "Citrate salt",
          
        },
        {
          code: 78449007,
          display: "Nitrazepam",
          
        },
        {
          code: 78507004,
          display: "Benzylpenicillin",
          
        },
        {
          code: 78542000,
          display: "Potassium citrate product",
          
        },
        {
          code: 15911003,
          display: "Cow's milk protein sensitivity",
          
        },
        {
          code: 25868003,
          display: "Soy protein sensitivity",
          
        },
        {
          code: 59037007,
          display: "Drug intolerance",
          
        },
        {
          code: 61712006,
          display: "Transient gluten sensitivity",
          
        },
        {
          code: 72354005,
          display: "Oral contraceptive intolerance",
          
        },
        {
          code: 91929009,
          display: "Anti-infectives allergy",
          
        },
        {
          code: 91930004,
          display: "Allergy to eggs",
          
        },
        {
          code: 91931000,
          display: "Erythromycin allergy",
          
        },
        {
          code: 91932007,
          display: "Allergy to fruit",
          
        },
        {
          code: 91933002,
          display: "Macrolide allergy",
          
        },
        {
          code: 91934008,
          display: "Nut allergy",
          
        },
        {
          code: 91935009,
          display: "Allergy to peanuts",
          
        },
        {
          code: 91936005,
          display: "Penicillin allergy",
          
        },
        {
          code: 91937001,
          display: "Seafood allergy",
          
        },
        {
          code: 91938006,
          display: "Allergy to strawberries",
          
        },
        {
          code: 91939003,
          display: "Sulfonamide allergy",
          
        },
        {
          code: 91940001,
          display: "Allergy to walnut",
          
        },
        {
          code: 188336009,
          display: "Laboratory animal dander allergy",
          
        },
        {
          code: 197493001,
          display: "Malabsorption due to intolerance to soy protein",
          
        },
        {
          code: 197494007,
          display: "Intestinal malabsorption of fat",
          
        },
        {
          code: 200848004,
          display: "Allergic contact dermatitis due to plants, except food",
          
        },
        {
          code: 213020009,
          display: "Egg protein allergy",
          
        },
        {
          code: 232346004,
          display: "Allergy to cat dander",
          
        },
        {
          code: 232347008,
          display: "Allergy to animal dander",
          
        },
        {
          code: 232348003,
          display: "Feather allergy",
          
        },
        {
          code: 232349006,
          display: "House dust allergy",
          
        },
        {
          code: 232350006,
          display: "House dust mite allergy",
          
        },
        {
          code: 235719002,
          display: "Food intolerance",
          
        },
        {
          code: 235720008,
          display: "Malabsorption caused by intolerance to carbohydrate",
          
        },
        {
          code: 292545003,
          display: "Adverse reaction to oxitropium",
          
        },
        {
          code: 293580007,
          display: "Allergy to over-the-counter drug",
          
        },
        {
          code: 293582004,
          display: "Analgesic allergy",
          
        },
        {
          code: 293583009,
          display: "Non-opioid analgesic allergy",
          
        },
        {
          code: 293584003,
          display: "Acetaminophen allergy",
          
        },
        {
          code: 293585002,
          display: "Salicylate allergy",
          
        },
        {
          code: 293586001,
          display: "Aspirin allergy",
          
        },
        {
          code: 293587005,
          display: "Opioid analgesic allergy",
          
        },
        {
          code: 293588000,
          display: "Pentazocine allergy",
          
        },
        {
          code: 293589008,
          display: "Phenazocine allergy",
          
        },
        {
          code: 293590004,
          display: "Methadone analog allergy",
          
        },
        {
          code: 293591000,
          display: "Dextromoramide allergy",
          
        },
        {
          code: 293592007,
          display: "Dextropropoxyphene allergy",
          
        },
        {
          code: 293593002,
          display: "Dipipanone allergy",
          
        },
        {
          code: 293594008,
          display: "Methadone allergy",
          
        },
        {
          code: 293595009,
          display: "Morphinan opioid allergy",
          
        },
        {
          code: 293596005,
          display: "Buprenorphine allergy",
          
        },
        {
          code: 293597001,
          display: "Codeine allergy",
          
        },
        {
          code: 293598006,
          display: "Diamorphine allergy",
          
        },
        {
          code: 293599003,
          display: "Dihydrocodeine allergy",
          
        },
        {
          code: 293600000,
          display: "Nalbuphine allergy",
          
        },
        {
          code: 293601001,
          display: "Morphine allergy",
          
        },
        {
          code: 293602008,
          display: "Opium alkaloid allergy",
          
        },
        {
          code: 293603003,
          display: "Pethidine analog allergy",
          
        },
        {
          code: 293604009,
          display: "Alfentanil allergy",
          
        },
        {
          code: 293605005,
          display: "Fentanyl allergy",
          
        },
        {
          code: 293606006,
          display: "Pethidine allergy",
          
        },
        {
          code: 293607002,
          display: "Phenoperidine allergy",
          
        },
        {
          code: 293608007,
          display: "Meptazinol allergy",
          
        },
        {
          code: 293609004,
          display: "Levorphanol allergy",
          
        },
        {
          code: 293610009,
          display: "Non-steroidal anti-inflammatory drug allergy",
          
        },
        {
          code: 293611008,
          display: "Acemetacin allergy",
          
        },
        {
          code: 293612001,
          display: "Azapropazone allergy",
          
        },
        {
          code: 293613006,
          display: "Diclofenac allergy",
          
        },
        {
          code: 293614000,
          display: "Etodolac allergy",
          
        },
        {
          code: 293615004,
          display: "Felbinac allergy",
          
        },
        {
          code: 293616003,
          display: "Fenbufen allergy",
          
        },
        {
          code: 293617007,
          display: "Fenoprofen allergy",
          
        },
        {
          code: 293618002,
          display: "Flurbiprofen allergy",
          
        },
        {
          code: 293619005,
          display: "Ibuprofen allergy",
          
        },
        {
          code: 293620004,
          display: "Indometacin allergy",
          
        },
        {
          code: 293621000,
          display: "Ketoprofen allergy",
          
        },
        {
          code: 293622007,
          display: "Ketorolac allergy",
          
        },
        {
          code: 293623002,
          display: "Mefenamic acid allergy",
          
        },
        {
          code: 293624008,
          display: "Nabumetone allergy",
          
        },
        {
          code: 293625009,
          display: "Naproxen allergy",
          
        },
        {
          code: 293626005,
          display: "Nefopam allergy",
          
        },
        {
          code: 293627001,
          display: "Oxyphenbutazone allergy",
          
        },
        {
          code: 293628006,
          display: "Phenylbutazone allergy",
          
        },
        {
          code: 293629003,
          display: "Piroxicam allergy",
          
        },
        {
          code: 293630008,
          display: "Sulindac allergy",
          
        },
        {
          code: 293631007,
          display: "Tenoxicam allergy",
          
        },
        {
          code: 293632000,
          display: "Tiaprofenic acid allergy",
          
        },
        {
          code: 293633005,
          display: "Tolmetin allergy",
          
        },
        {
          code: 293634004,
          display: "Diagnostic agent allergy",
          
        },
        {
          code: 293635003,
          display: "Tuberculin allergy",
          
        },
        {
          code: 293636002,
          display: "Radiopharmaceutical allergy",
          
        },
        {
          code: 293637006,
          display: "Contrast media allergy",
          
        },
        {
          code: 293638001,
          display: "X-ray contrast media allergy",
          
        },
        {
          code: 293639009,
          display: "Magnetic resonance imaging contrast media allergy",
          
        },
        {
          code: 293640006,
          display: "Allergen extract vaccine allergy",
          
        },
        {
          code: 293641005,
          display: "Diagnostic dye allergy",
          
        },
        {
          code: 293643008,
          display: "Drug groups primarily affecting the gastrointestinal system allergy",
          
        },
        {
          code: 293644002,
          display: "Ulcer healing drug allergy",
          
        },
        {
          code: 293645001,
          display: "Bismuth chelate allergy",
          
        },
        {
          code: 293646000,
          display: "Sucralfate allergy",
          
        },
        {
          code: 293647009,
          display: "Liquorice allergy",
          
        },
        {
          code: 293648004,
          display: "Misoprostol allergy",
          
        },
        {
          code: 293649007,
          display: "H2 receptor antagonist allergy",
          
        },
        {
          code: 293650007,
          display: "Cimetidine allergy",
          
        },
        {
          code: 293651006,
          display: "Famotidine allergy",
          
        },
        {
          code: 293652004,
          display: "Nizatidine allergy",
          
        },
        {
          code: 293653009,
          display: "Ranitidine allergy",
          
        },
        {
          code: 293654003,
          display: "Proton pump inhibitor allergy",
          
        },
        {
          code: 293655002,
          display: "Omeprazole allergy",
          
        },
        {
          code: 293656001,
          display: "Lansoprazole allergy",
          
        },
        {
          code: 293657005,
          display: "Carbenoxolone allergy",
          
        },
        {
          code: 293658000,
          display: "Pirenzepine allergy",
          
        },
        {
          code: 293659008,
          display: "Pancreatin allergy",
          
        },
        {
          code: 293660003,
          display: "Mesalazine allergy",
          
        },
        {
          code: 293662006,
          display: "Olsalazine allergy",
          
        },
        {
          code: 293663001,
          display: "Sulfasalazine allergy",
          
        },
        {
          code: 293664007,
          display: "Antacid allergy",
          
        },
        {
          code: 293665008,
          display: "Magnesium trisilicate allergy",
          
        },
        {
          code: 293666009,
          display: "Aluminum hydroxide allergy",
          
        },
        {
          code: 293667000,
          display: "Antidiarrheal drug allergy",
          
        },
        {
          code: 293668005,
          display: "Loperamide allergy",
          
        },
        {
          code: 293669002,
          display: "Kaolin allergy",
          
        },
        {
          code: 293670001,
          display: "Motility stimulant allergy",
          
        },
        {
          code: 293671002,
          display: "Cisapride allergy",
          
        },
        {
          code: 293672009,
          display: "Antiemetic allergy",
          
        },
        {
          code: 293673004,
          display: "Nabilone allergy",
          
        },
        {
          code: 293674005,
          display: "Domperidone allergy",
          
        },
        {
          code: 293675006,
          display: "Metoclopramide allergy",
          
        },
        {
          code: 293676007,
          display: "5-Hydroxytryptamine-3-receptor antagonist allergy",
          
        },
        {
          code: 293677003,
          display: "Laxative allergy",
          
        },
        {
          code: 293678008,
          display: "Bisacodyl allergy",
          
        },
        {
          code: 293679000,
          display: "Dantron allergy",
          
        },
        {
          code: 293680002,
          display: "Sodium picosulfate allergy",
          
        },
        {
          code: 293681003,
          display: "Lactulose allergy",
          
        },
        {
          code: 293682005,
          display: "Magnesium sulfate allergy",
          
        },
        {
          code: 293683000,
          display: "Bulk-forming laxative allergy",
          
        },
        {
          code: 293684006,
          display: "Anthraquinone laxative allergy",
          
        },
        {
          code: 293685007,
          display: "Cascara allergy",
          
        },
        {
          code: 293686008,
          display: "Senna allergy",
          
        },
        {
          code: 293687004,
          display: "Docusate allergy",
          
        },
        {
          code: 293688009,
          display: "Antispasmodic allergy",
          
        },
        {
          code: 293689001,
          display: "Hyoscine butylbromide allergy",
          
        },
        {
          code: 293690005,
          display: "Peppermint oil allergy",
          
        },
        {
          code: 293691009,
          display: "Alverine allergy",
          
        },
        {
          code: 293692002,
          display: "Mebeverine allergy",
          
        },
        {
          code: 293693007,
          display: "Dicycloverine allergy",
          
        },
        {
          code: 293694001,
          display: "Mepenzolate allergy",
          
        },
        {
          code: 293695000,
          display: "Pipenzolate allergy",
          
        },
        {
          code: 293696004,
          display: "Poldine allergy",
          
        },
        {
          code: 293697008,
          display: "Propantheline allergy",
          
        },
        {
          code: 293698003,
          display: "Bile agent allergy",
          
        },
        {
          code: 293699006,
          display: "Chenodeoxycholic acid allergy",
          
        },
        {
          code: 293700007,
          display: "Dehydrocholic acid allergy",
          
        },
        {
          code: 293701006,
          display: "Ursodeoxycholic acid allergy",
          
        },
        {
          code: 293702004,
          display: "Chenodeoxycholic and ursodeoxycholic acid allergy",
          
        },
        {
          code: 293703009,
          display: "Anesthetics and medical gases allergy",
          
        },
        {
          code: 293704003,
          display: "General anesthetic drug allergy",
          
        },
        {
          code: 293705002,
          display: "Intravenous anesthetics allergy",
          
        },
        {
          code: 293706001,
          display: "Etomidate allergy",
          
        },
        {
          code: 293707005,
          display: "Ketamine allergy",
          
        },
        {
          code: 293708000,
          display: "Propofol allergy",
          
        },
        {
          code: 293709008,
          display: "Thiopental allergy",
          
        },
        {
          code: 293710003,
          display: "Methohexitone allergy",
          
        },
        {
          code: 293711004,
          display: "Inhalational anesthetics allergy",
          
        },
        {
          code: 293712006,
          display: "Enflurane allergy",
          
        },
        {
          code: 293713001,
          display: "Ether, anesthetic allergy",
          
        },
        {
          code: 293714007,
          display: "Halothane allergy",
          
        },
        {
          code: 293715008,
          display: "Isoflurane allergy",
          
        },
        {
          code: 293716009,
          display: "Trichloroethylene allergy",
          
        },
        {
          code: 293717000,
          display: "Desflurane allergy",
          
        },
        {
          code: 293718005,
          display: "Local anesthetic drug allergy",
          
        },
        {
          code: 293719002,
          display: "Bupivacaine allergy",
          
        },
        {
          code: 293720008,
          display: "Cinchocaine allergy",
          
        },
        {
          code: 293721007,
          display: "Prilocaine allergy",
          
        },
        {
          code: 293722000,
          display: "Lidocaine allergy",
          
        },
        {
          code: 293723005,
          display: "Cocaine allergy",
          
        },
        {
          code: 293724004,
          display: "Benzocaine allergy",
          
        },
        {
          code: 293725003,
          display: "Tetracaine allergy",
          
        },
        {
          code: 293726002,
          display: "Oxybuprocaine allergy",
          
        },
        {
          code: 293727006,
          display: "Procaine allergy",
          
        },
        {
          code: 293728001,
          display: "Proxymetacaine allergy",
          
        },
        {
          code: 293730004,
          display: "Immunostimulant allergy",
          
        },
        {
          code: 293732007,
          display: "Amifostine allergy",
          
        },
        {
          code: 293733002,
          display: "Aldesleukin allergy",
          
        },
        {
          code: 293734008,
          display: "Colony stimulating factors allergy",
          
        },
        {
          code: 293735009,
          display: "Molgramostim allergy",
          
        },
        {
          code: 293736005,
          display: "Lenograstim allergy",
          
        },
        {
          code: 293737001,
          display: "Filgrastim allergy",
          
        },
        {
          code: 293738006,
          display: "Levamisole allergy",
          
        },
        {
          code: 293739003,
          display: "Antineoplastic allergy",
          
        },
        {
          code: 293740001,
          display: "Alkylating drug allergy",
          
        },
        {
          code: 293741002,
          display: "Mitobronitol allergy",
          
        },
        {
          code: 293742009,
          display: "Busulfan allergy",
          
        },
        {
          code: 293743004,
          display: "Treosulfan allergy",
          
        },
        {
          code: 293745006,
          display: "Thiotepa allergy",
          
        },
        {
          code: 293746007,
          display: "Nitrogen mustard derivative allergy",
          
        },
        {
          code: 293747003,
          display: "Chlorambucil allergy",
          
        },
        {
          code: 293748008,
          display: "Cyclophosphamide allergy",
          
        },
        {
          code: 293749000,
          display: "Ethoglucid allergy",
          
        },
        {
          code: 293750000,
          display: "Ifosfamide allergy",
          
        },
        {
          code: 293751001,
          display: "Melphalan allergy",
          
        },
        {
          code: 293752008,
          display: "Estramustine allergy",
          
        },
        {
          code: 293753003,
          display: "Chlormethine allergy",
          
        },
        {
          code: 293754009,
          display: "Nitrosurea allergy",
          
        },
        {
          code: 293755005,
          display: "Carmustine allergy",
          
        },
        {
          code: 293756006,
          display: "Lomustine allergy",
          
        },
        {
          code: 293757002,
          display: "Triazene antineoplastic allergy",
          
        },
        {
          code: 293758007,
          display: "Dacarbazine allergy",
          
        },
        {
          code: 293759004,
          display: "Cytotoxic antibiotic allergy",
          
        },
        {
          code: 293760009,
          display: "Dactinomycin allergy",
          
        },
        {
          code: 293761008,
          display: "Bleomycin allergy",
          
        },
        {
          code: 293762001,
          display: "Mitomycin allergy",
          
        },
        {
          code: 293763006,
          display: "Plicamycin allergy",
          
        },
        {
          code: 293764000,
          display: "Aclarubicin allergy",
          
        },
        {
          code: 293765004,
          display: "Mitoxantrone allergy",
          
        },
        {
          code: 293766003,
          display: "Doxorubicin allergy",
          
        },
        {
          code: 293767007,
          display: "Epirubicin allergy",
          
        },
        {
          code: 293768002,
          display: "Idarubicin allergy",
          
        },
        {
          code: 293769005,
          display: "Antimetabolite allergy",
          
        },
        {
          code: 293770006,
          display: "Mercuric oxide allergy",
          
        },
        {
          code: 293771005,
          display: "Methotrexate allergy",
          
        },
        {
          code: 293772003,
          display: "Mercaptopurine allergy",
          
        },
        {
          code: 293773008,
          display: "Tioguanine allergy",
          
        },
        {
          code: 293774002,
          display: "Pentostatin allergy",
          
        },
        {
          code: 293775001,
          display: "Cytarabine allergy",
          
        },
        {
          code: 293776000,
          display: "Fluorouracil allergy",
          
        },
        {
          code: 293777009,
          display: "Etoposide allergy",
          
        },
        {
          code: 293778004,
          display: "Amsacrine allergy",
          
        },
        {
          code: 293779007,
          display: "Carboplatin allergy",
          
        },
        {
          code: 293780005,
          display: "Cisplatin allergy",
          
        },
        {
          code: 293781009,
          display: "Hydroxycarbamide allergy",
          
        },
        {
          code: 293782002,
          display: "Procarbazine allergy",
          
        },
        {
          code: 293783007,
          display: "Razoxane allergy",
          
        },
        {
          code: 293784001,
          display: "Crisantaspase allergy",
          
        },
        {
          code: 293785000,
          display: "Paclitaxel allergy",
          
        },
        {
          code: 293786004,
          display: "Fludarabine allergy",
          
        },
        {
          code: 293787008,
          display: "Aminoglutethimide allergy",
          
        },
        {
          code: 293788003,
          display: "Estrogen antagonist allergy",
          
        },
        {
          code: 293789006,
          display: "Trilostane allergy",
          
        },
        {
          code: 293790002,
          display: "Tamoxifen allergy",
          
        },
        {
          code: 293791003,
          display: "Formestane allergy",
          
        },
        {
          code: 293792005,
          display: "Vinca alkaloid allergy",
          
        },
        {
          code: 293793000,
          display: "Vinblastine allergy",
          
        },
        {
          code: 293794006,
          display: "Vincristine allergy",
          
        },
        {
          code: 293795007,
          display: "Vindesine allergy",
          
        },
        {
          code: 293796008,
          display: "Dimethyl sulfoxide allergy",
          
        },
        {
          code: 293797004,
          display: "Immunosuppressant allergy",
          
        },
        {
          code: 293798009,
          display: "Ciclosporin allergy",
          
        },
        {
          code: 293799001,
          display: "Azathioprine allergy",
          
        },
        {
          code: 293800002,
          display: "Drug groups primarily affecting the central nervous system allergy",
          
        },
        {
          code: 293801003,
          display: "Centrally acting appetite suppressant allergy",
          
        },
        {
          code: 293802005,
          display: "Mazindol allergy",
          
        },
        {
          code: 293803000,
          display: "Phentermine allergy",
          
        },
        {
          code: 293804006,
          display: "Dexfenfluramine allergy",
          
        },
        {
          code: 293805007,
          display: "Diethylpropion allergy",
          
        },
        {
          code: 293806008,
          display: "Fenfluramine allergy",
          
        },
        {
          code: 293807004,
          display: "Dopaminergic drug used in parkinsonism allergy",
          
        },
        {
          code: 293808009,
          display: "Levodopa allergy",
          
        },
        {
          code: 293809001,
          display: "Benserazide + levodopa allergy",
          
        },
        {
          code: 293810006,
          display: "Carbidopa + levodopa allergy",
          
        },
        {
          code: 293811005,
          display: "Amantadine allergy",
          
        },
        {
          code: 293812003,
          display: "Apomorphine allergy",
          
        },
        {
          code: 293813008,
          display: "Lisuride allergy",
          
        },
        {
          code: 293814002,
          display: "Pergolide allergy",
          
        },
        {
          code: 293815001,
          display: "Bromocriptine allergy",
          
        },
        {
          code: 293816000,
          display: "Antidepressant drug allergy",
          
        },
        {
          code: 293817009,
          display: "Lithium allergy",
          
        },
        {
          code: 293818004,
          display: "Lithium carbonate allergy",
          
        },
        {
          code: 293819007,
          display: "Lithium citrate allergy",
          
        },
        {
          code: 293821002,
          display: "Tricyclic antidepressant drug allergy",
          
        },
        {
          code: 293822009,
          display: "Butriptyline allergy",
          
        },
        {
          code: 293823004,
          display: "Doxepin allergy",
          
        },
        {
          code: 293824005,
          display: "Iprindole allergy",
          
        },
        {
          code: 293825006,
          display: "Lofepramine allergy",
          
        },
        {
          code: 293826007,
          display: "Nortriptyline allergy",
          
        },
        {
          code: 293827003,
          display: "Trimipramine allergy",
          
        },
        {
          code: 293828008,
          display: "Amoxapine allergy",
          
        },
        {
          code: 293829000,
          display: "Amitriptyline allergy",
          
        },
        {
          code: 293830005,
          display: "Clomipramine allergy",
          
        },
        {
          code: 293831009,
          display: "Desipramine allergy",
          
        },
        {
          code: 293832002,
          display: "Dosulepin allergy",
          
        },
        {
          code: 293833007,
          display: "Imipramine allergy",
          
        },
        {
          code: 293834001,
          display: "Protriptyline allergy",
          
        },
        {
          code: 293835000,
          display: "Monoamine oxidase inhibitor allergy",
          
        },
        {
          code: 293836004,
          display: "Phenelzine allergy",
          
        },
        {
          code: 293837008,
          display: "Iproniazid allergy",
          
        },
        {
          code: 293838003,
          display: "Isocarboxazid allergy",
          
        },
        {
          code: 293839006,
          display: "Tranylcypromine allergy",
          
        },
        {
          code: 293840008,
          display: "Moclobemide allergy",
          
        },
        {
          code: 293841007,
          display: "Compound antidepressants allergy",
          
        },
        {
          code: 293842000,
          display: "Tryptophan allergy",
          
        },
        {
          code: 293843005,
          display: "Venlafaxine allergy",
          
        },
        {
          code: 293844004,
          display: "Selective serotonin re-uptake inhibitor allergy",
          
        },
        {
          code: 293845003,
          display: "Sertraline allergy",
          
        },
        {
          code: 293847006,
          display: "Paroxetine allergy",
          
        },
        {
          code: 293848001,
          display: "Nefazodone allergy",
          
        },
        {
          code: 293849009,
          display: "Citalopram allergy",
          
        },
        {
          code: 293850009,
          display: "Fluoxetine allergy",
          
        },
        {
          code: 293851008,
          display: "Fluvoxamine allergy",
          
        },
        {
          code: 293852001,
          display: "Tetracyclic antidepressant drug allergy",
          
        },
        {
          code: 293853006,
          display: "Maprotiline allergy",
          
        },
        {
          code: 293854000,
          display: "Mianserin allergy",
          
        },
        {
          code: 293855004,
          display: "Trazodone allergy",
          
        },
        {
          code: 293856003,
          display: "Viloxazine allergy",
          
        },
        {
          code: 293857007,
          display: "Antiepileptic allergy",
          
        },
        {
          code: 293858002,
          display: "Beclamide allergy",
          
        },
        {
          code: 293859005,
          display: "Lamotrigine allergy",
          
        },
        {
          code: 293860000,
          display: "Piracetam allergy",
          
        },
        {
          code: 293861001,
          display: "Gabapentin allergy",
          
        },
        {
          code: 293862008,
          display: "Sodium valproate allergy",
          
        },
        {
          code: 293863003,
          display: "Barbiturate antiepileptic allergy",
          
        },
        {
          code: 293864009,
          display: "Methylphenobarbital allergy",
          
        },
        {
          code: 293865005,
          display: "Phenobarbital allergy",
          
        },
        {
          code: 293866006,
          display: "Primidone allergy",
          
        },
        {
          code: 293867002,
          display: "Carbamazepine allergy",
          
        },
        {
          code: 293868007,
          display: "Vigabatrin allergy",
          
        },
        {
          code: 293869004,
          display: "Phenytoin allergy",
          
        },
        {
          code: 293870003,
          display: "Ethosuximide allergy",
          
        },
        {
          code: 293871004,
          display: "Clonazepam allergy",
          
        },
        {
          code: 293873001,
          display: "Sedative allergy",
          
        },
        {
          code: 293874007,
          display: "Zopiclone allergy",
          
        },
        {
          code: 293875008,
          display: "Zolpidem allergy",
          
        },
        {
          code: 293876009,
          display: "Chlormezanone allergy",
          
        },
        {
          code: 293877000,
          display: "Methyprylone allergy",
          
        },
        {
          code: 293878005,
          display: "Paraldehyde allergy",
          
        },
        {
          code: 293879002,
          display: "Barbiturate sedative allergy",
          
        },
        {
          code: 293880004,
          display: "Amobarbital allergy",
          
        },
        {
          code: 293881000,
          display: "Butobarbital allergy",
          
        },
        {
          code: 293882007,
          display: "Cyclobarbitone allergy",
          
        },
        {
          code: 293883002,
          display: "Amobarbital sodium allergy",
          
        },
        {
          code: 293884008,
          display: "Secobarbital allergy",
          
        },
        {
          code: 293885009,
          display: "Benzodiazepine sedative allergy",
          
        },
        {
          code: 293886005,
          display: "Flunitrazepam allergy",
          
        },
        {
          code: 293887001,
          display: "Flurazepam allergy",
          
        },
        {
          code: 293888006,
          display: "Loprazolam allergy",
          
        },
        {
          code: 293889003,
          display: "Lormetazepam allergy",
          
        },
        {
          code: 293890007,
          display: "Nitrazepam allergy",
          
        },
        {
          code: 293891006,
          display: "Triazolam allergy",
          
        },
        {
          code: 293892004,
          display: "Alprazolam allergy",
          
        },
        {
          code: 293893009,
          display: "Bromazepam allergy",
          
        },
        {
          code: 293894003,
          display: "Chlordiazepoxide allergy",
          
        },
        {
          code: 293895002,
          display: "Clobazam allergy",
          
        },
        {
          code: 293896001,
          display: "Dipotassium clorazepate allergy",
          
        },
        {
          code: 293897005,
          display: "Ketazolam allergy",
          
        },
        {
          code: 293898000,
          display: "Medazepam allergy",
          
        },
        {
          code: 293899008,
          display: "Oxazepam allergy",
          
        },
        {
          code: 293900003,
          display: "Prazepam allergy",
          
        },
        {
          code: 293901004,
          display: "Midazolam allergy",
          
        },
        {
          code: 293902006,
          display: "Diazepam allergy",
          
        },
        {
          code: 293903001,
          display: "Lorazepam allergy",
          
        },
        {
          code: 293904007,
          display: "Temazepam allergy",
          
        },
        {
          code: 293905008,
          display: "Carbamate sedative allergy",
          
        },
        {
          code: 293906009,
          display: "Meprobamate allergy",
          
        },
        {
          code: 293907000,
          display: "Chloral sedative allergy",
          
        },
        {
          code: 293908005,
          display: "Chloral hydrate allergy",
          
        },
        {
          code: 293909002,
          display: "Dichloralphenazone allergy",
          
        },
        {
          code: 293910007,
          display: "Triclofos sodium allergy",
          
        },
        {
          code: 293911006,
          display: "Buspirone allergy",
          
        },
        {
          code: 293912004,
          display: "Clomethiazole allergy",
          
        },
        {
          code: 293913009,
          display: "Neuroleptic allergy",
          
        },
        {
          code: 293914003,
          display: "Sulpiride allergy",
          
        },
        {
          code: 293915002,
          display: "Loxapine allergy",
          
        },
        {
          code: 293916001,
          display: "Clozapine allergy",
          
        },
        {
          code: 293917005,
          display: "Risperidone allergy",
          
        },
        {
          code: 293918000,
          display: "Tetrabenazine allergy",
          
        },
        {
          code: 293919008,
          display: "Butyrophenone allergy",
          
        },
        {
          code: 293920002,
          display: "Benperidol allergy",
          
        },
        {
          code: 293921003,
          display: "Trifluperidol allergy",
          
        },
        {
          code: 293922005,
          display: "Haloperidol decanoate allergy",
          
        },
        {
          code: 293923000,
          display: "Droperidol allergy",
          
        },
        {
          code: 293924006,
          display: "Haloperidol allergy",
          
        },
        {
          code: 293925007,
          display: "Diphenylbutylpiperidine allergy",
          
        },
        {
          code: 293926008,
          display: "Pimozide allergy",
          
        },
        {
          code: 293927004,
          display: "Fluspirilene allergy",
          
        },
        {
          code: 293928009,
          display: "Phenothiazine allergy",
          
        },
        {
          code: 293929001,
          display: "Levomepromazine allergy",
          
        },
        {
          code: 293930006,
          display: "Pericyazine allergy",
          
        },
        {
          code: 293931005,
          display: "Fluphenazine decanoate allergy",
          
        },
        {
          code: 293932003,
          display: "Fluphenazine enanthate allergy",
          
        },
        {
          code: 293933008,
          display: "Thiethylperazine allergy",
          
        },
        {
          code: 293934002,
          display: "Fluphenazine allergy",
          
        },
        {
          code: 293935001,
          display: "Chlorpromazine allergy",
          
        },
        {
          code: 293936000,
          display: "Pipotiazine allergy",
          
        },
        {
          code: 293937009,
          display: "Promazine allergy",
          
        },
        {
          code: 293938004,
          display: "Thioridazine allergy",
          
        },
        {
          code: 293939007,
          display: "Perphenazine allergy",
          
        },
        {
          code: 293940009,
          display: "Prochlorperazine allergy",
          
        },
        {
          code: 293941008,
          display: "Trifluoperazine allergy",
          
        },
        {
          code: 293942001,
          display: "Thioxanthene allergy",
          
        },
        {
          code: 293943006,
          display: "Chlorprothixene allergy",
          
        },
        {
          code: 293944000,
          display: "Flupentixol decanoate allergy",
          
        },
        {
          code: 293945004,
          display: "Zuclopenthixol decanoate allergy",
          
        },
        {
          code: 293946003,
          display: "Zuclopenthixol allergy",
          
        },
        {
          code: 293948002,
          display: "Flupentixol allergy",
          
        },
        {
          code: 293949005,
          display: "Oxypertine allergy",
          
        },
        {
          code: 293950005,
          display: "Remoxipride allergy",
          
        },
        {
          code: 293951009,
          display: "Decarboxylase inhibitor allergy",
          
        },
        {
          code: 293952002,
          display: "Selegiline allergy",
          
        },
        {
          code: 293953007,
          display: "Central stimulant allergy",
          
        },
        {
          code: 293954001,
          display: "Pemoline allergy",
          
        },
        {
          code: 293955000,
          display: "Methylphenidate allergy",
          
        },
        {
          code: 293956004,
          display: "Prolintane allergy",
          
        },
        {
          code: 293957008,
          display: "Amfetamine group allergy",
          
        },
        {
          code: 293958003,
          display: "Dexamfetamine allergy",
          
        },
        {
          code: 293959006,
          display: "Alcohol metabolism modifier allergy",
          
        },
        {
          code: 293960001,
          display: "Disulfiram allergy",
          
        },
        {
          code: 293961002,
          display: "Drug groups primarily affecting the autonomic nervous system allergy",
          
        },
        {
          code: 293962009,
          display: "Beta-adrenoceptor blocking drug allergy",
          
        },
        {
          code: 293963004,
          display: "Cardioselective beta-blocker allergy",
          
        },
        {
          code: 293964005,
          display: "Acebutolol allergy",
          
        },
        {
          code: 293965006,
          display: "Atenolol allergy",
          
        },
        {
          code: 293966007,
          display: "Betaxolol allergy",
          
        },
        {
          code: 293967003,
          display: "Bisoprolol allergy",
          
        },
        {
          code: 293968008,
          display: "Celiprolol allergy",
          
        },
        {
          code: 293969000,
          display: "Esmolol allergy",
          
        },
        {
          code: 293970004,
          display: "Metoprolol allergy",
          
        },
        {
          code: 293971000,
          display: "Non-cardioselective beta-blocker allergy",
          
        },
        {
          code: 293972007,
          display: "Nadolol allergy",
          
        },
        {
          code: 293973002,
          display: "Pindolol allergy",
          
        },
        {
          code: 293974008,
          display: "Carvedilol allergy",
          
        },
        {
          code: 293975009,
          display: "Metipranolol allergy",
          
        },
        {
          code: 293976005,
          display: "Carteolol allergy",
          
        },
        {
          code: 293977001,
          display: "Labetalol allergy",
          
        },
        {
          code: 293978006,
          display: "Levobunolol allergy",
          
        },
        {
          code: 293979003,
          display: "Oxprenolol allergy",
          
        },
        {
          code: 293980000,
          display: "Penbutolol allergy",
          
        },
        {
          code: 293981001,
          display: "Practolol allergy",
          
        },
        {
          code: 293982008,
          display: "Propranolol allergy",
          
        },
        {
          code: 293983003,
          display: "Sotalol allergy",
          
        },
        {
          code: 293984009,
          display: "Timolol allergy",
          
        },
        {
          code: 293985005,
          display: "Alpha-adrenoceptor blocking drug allergy",
          
        },
        {
          code: 293986006,
          display: "Alfuzosin allergy",
          
        },
        {
          code: 293987002,
          display: "Doxazosin allergy",
          
        },
        {
          code: 293988007,
          display: "Indoramin allergy",
          
        },
        {
          code: 293989004,
          display: "Phenoxybenzamine allergy",
          
        },
        {
          code: 293990008,
          display: "Phentolamine allergy",
          
        },
        {
          code: 293991007,
          display: "Prazosin allergy",
          
        },
        {
          code: 293992000,
          display: "Terazosin allergy",
          
        },
        {
          code: 293993005,
          display: "Nicotine allergy",
          
        },
        {
          code: 293994004,
          display: "Calcium-channel blocker allergy",
          
        },
        {
          code: 293995003,
          display: "Lidoflazine allergy",
          
        },
        {
          code: 293996002,
          display: "Nifedipine allergy",
          
        },
        {
          code: 293997006,
          display: "Prenylamine allergy",
          
        },
        {
          code: 293998001,
          display: "Isradipine allergy",
          
        },
        {
          code: 293999009,
          display: "Felodipine allergy",
          
        },
        {
          code: 294000006,
          display: "Lacidipine allergy",
          
        },
        {
          code: 294001005,
          display: "Nimodipine allergy",
          
        },
        {
          code: 294002003,
          display: "Amlodipine allergy",
          
        },
        {
          code: 294003008,
          display: "Diltiazem allergy",
          
        },
        {
          code: 294004002,
          display: "Nicardipine allergy",
          
        },
        {
          code: 294005001,
          display: "Verapamil allergy",
          
        },
        {
          code: 294006000,
          display: "Parasympathomimetic allergy",
          
        },
        {
          code: 294007009,
          display: "Pilocarpine allergy",
          
        },
        {
          code: 294008004,
          display: "Acetylcholine chloride allergy",
          
        },
        {
          code: 294009007,
          display: "Methacholine allergy",
          
        },
        {
          code: 294010002,
          display: "Anticholinesterase parasympathomimetic allergy",
          
        },
        {
          code: 294011003,
          display: "Physostigmine allergy",
          
        },
        {
          code: 294012005,
          display: "Demecarium allergy",
          
        },
        {
          code: 294013000,
          display: "Distigmine allergy",
          
        },
        {
          code: 294014006,
          display: "Ecothiopate allergy",
          
        },
        {
          code: 294015007,
          display: "Edrophonium allergy",
          
        },
        {
          code: 294016008,
          display: "Pyridostigmine allergy",
          
        },
        {
          code: 294017004,
          display: "Neostigmine allergy",
          
        },
        {
          code: 294018009,
          display: "Bethanechol allergy",
          
        },
        {
          code: 294019001,
          display: "Carbachol allergy",
          
        },
        {
          code: 294020007,
          display: "Sympathomimetic allergy",
          
        },
        {
          code: 294021006,
          display: "Isoetharine hydrochloride allergy",
          
        },
        {
          code: 294022004,
          display: "Phenylpropanolamine hydrochloride allergy",
          
        },
        {
          code: 294023009,
          display: "Pseudoephedrine allergy",
          
        },
        {
          code: 294024003,
          display: "Alpha-adrenoceptor agonist allergy",
          
        },
        {
          code: 294025002,
          display: "Oxedrine tartrate allergy",
          
        },
        {
          code: 294026001,
          display: "Metaraminol allergy",
          
        },
        {
          code: 294027005,
          display: "Methoxamine allergy",
          
        },
        {
          code: 294028000,
          display: "Naphazoline allergy",
          
        },
        {
          code: 294029008,
          display: "Norepinephrine allergy",
          
        },
        {
          code: 294030003,
          display: "Phenylephrine allergy",
          
        },
        {
          code: 294031004,
          display: "Xylometazoline allergy",
          
        },
        {
          code: 294032006,
          display: "Beta-adrenoceptor agonist allergy",
          
        },
        {
          code: 294033001,
          display: "Selective beta-2 adrenoceptor stimulants allergy",
          
        },
        {
          code: 294035008,
          display: "Pirbuterol allergy",
          
        },
        {
          code: 294036009,
          display: "Salmeterol allergy",
          
        },
        {
          code: 294037000,
          display: "Salbutamol allergy",
          
        },
        {
          code: 294038005,
          display: "Bambuterol allergy",
          
        },
        {
          code: 294039002,
          display: "Fenoterol allergy",
          
        },
        {
          code: 294040000,
          display: "Orciprenaline allergy",
          
        },
        {
          code: 294041001,
          display: "Reproterol allergy",
          
        },
        {
          code: 294042008,
          display: "Rimiterol allergy",
          
        },
        {
          code: 294043003,
          display: "Ritodrine allergy",
          
        },
        {
          code: 294044009,
          display: "Terbutaline allergy",
          
        },
        {
          code: 294045005,
          display: "Tulobuterol allergy",
          
        },
        {
          code: 294046006,
          display: "Selective beta-1 adrenoceptor stimulants allergy",
          
        },
        {
          code: 294047002,
          display: "Dobutamine allergy",
          
        },
        {
          code: 294048007,
          display: "Dopexamine allergy",
          
        },
        {
          code: 294050004,
          display: "Isoprenaline allergy",
          
        },
        {
          code: 294051000,
          display: "Oral isoprenaline allergy",
          
        },
        {
          code: 294052007,
          display: "Inhaled isoprenaline allergy",
          
        },
        {
          code: 294053002,
          display: "Parenteral isoprenaline allergy",
          
        },
        {
          code: 294054008,
          display: "Central alpha-adrenoceptor agonist allergy",
          
        },
        {
          code: 294055009,
          display: "Methyldopa allergy",
          
        },
        {
          code: 294056005,
          display: "Methyldopa and diuretic allergy",
          
        },
        {
          code: 294057001,
          display: "Apraclonidine allergy",
          
        },
        {
          code: 294058006,
          display: "Clonidine allergy",
          
        },
        {
          code: 294059003,
          display: "Lofexidine allergy",
          
        },
        {
          code: 294060008,
          display: "Dipivefrine allergy",
          
        },
        {
          code: 294061007,
          display: "Dopamine allergy",
          
        },
        {
          code: 294062000,
          display: "Ephedrine allergy",
          
        },
        {
          code: 294063005,
          display: "Oxymetazoline allergy",
          
        },
        {
          code: 294064004,
          display: "Xamoterol allergy",
          
        },
        {
          code: 294065003,
          display: "Anticholinergic allergy",
          
        },
        {
          code: 294066002,
          display: "Antimuscarinic allergy",
          
        },
        {
          code: 294067006,
          display: "Belladonna alkaloids allergy",
          
        },
        {
          code: 294068001,
          display: "Piperidolate hydrochloride allergy",
          
        },
        {
          code: 294069009,
          display: "Biperiden allergy",
          
        },
        {
          code: 294070005,
          display: "Emepronium bromide allergy",
          
        },
        {
          code: 294071009,
          display: "Terodiline hydrochloride allergy",
          
        },
        {
          code: 294072002,
          display: "Lachesine chloride allergy",
          
        },
        {
          code: 294073007,
          display: "Tropicamide allergy",
          
        },
        {
          code: 294074001,
          display: "Hyoscine allergy",
          
        },
        {
          code: 294075000,
          display: "Hyoscine hydrobromide allergy",
          
        },
        {
          code: 294076004,
          display: "Atropine allergy",
          
        },
        {
          code: 294077008,
          display: "Trihexyphenidyl allergy",
          
        },
        {
          code: 294078003,
          display: "Benzatropine allergy",
          
        },
        {
          code: 294079006,
          display: "Cyclopentolate allergy",
          
        },
        {
          code: 294080009,
          display: "Glycopyrronium allergy",
          
        },
        {
          code: 294081008,
          display: "Homatropine allergy",
          
        },
        {
          code: 294082001,
          display: "Ipratropium allergy",
          
        },
        {
          code: 294083006,
          display: "Methixene allergy",
          
        },
        {
          code: 294084000,
          display: "Orphenadrine allergy",
          
        },
        {
          code: 294085004,
          display: "Orphenadrine hydrochloride allergy",
          
        },
        {
          code: 294086003,
          display: "Orphenadrine citrate allergy",
          
        },
        {
          code: 294087007,
          display: "Oxitropium allergy",
          
        },
        {
          code: 294088002,
          display: "Oxybutynin allergy",
          
        },
        {
          code: 294089005,
          display: "Procyclidine allergy",
          
        },
        {
          code: 294090001,
          display: "Drug groups primarily affecting the respiratory system allergy",
          
        },
        {
          code: 294091002,
          display: "Dornase alfa allergy",
          
        },
        {
          code: 294092009,
          display: "Mucolytics allergy",
          
        },
        {
          code: 294093004,
          display: "Tyloxapol allergy",
          
        },
        {
          code: 294094005,
          display: "Bromhexine hydrochloride allergy",
          
        },
        {
          code: 294095006,
          display: "Carbocisteine allergy",
          
        },
        {
          code: 294096007,
          display: "Methylcysteine allergy",
          
        },
        {
          code: 294097003,
          display: "Acetylcysteine allergy",
          
        },
        {
          code: 294098008,
          display: "Respiratory stimulant allergy",
          
        },
        {
          code: 294099000,
          display: "Nikethamide allergy",
          
        },
        {
          code: 294100008,
          display: "Ethamivan allergy",
          
        },
        {
          code: 294101007,
          display: "Doxapram allergy",
          
        },
        {
          code: 294102000,
          display: "Respiratory surfactant allergy",
          
        },
        {
          code: 294103005,
          display: "Beractant allergy",
          
        },
        {
          code: 294104004,
          display: "Phospholipid fraction allergy",
          
        },
        {
          code: 294105003,
          display: "Pumactant allergy",
          
        },
        {
          code: 294106002,
          display: "Colfosceril allergy",
          
        },
        {
          code: 294107006,
          display: "Antiallergenic drug allergy",
          
        },
        {
          code: 294108001,
          display: "Topical antihistamine allergy",
          
        },
        {
          code: 294109009,
          display: "H1 antihistamine allergy",
          
        },
        {
          code: 294110004,
          display: "Non-sedating antihistamine allergy",
          
        },
        {
          code: 294111000,
          display: "Astemizole allergy",
          
        },
        {
          code: 294112007,
          display: "Terfenadine allergy",
          
        },
        {
          code: 294113002,
          display: "Acrivastine allergy",
          
        },
        {
          code: 294114008,
          display: "Loratadine allergy",
          
        },
        {
          code: 294115009,
          display: "Azelastine allergy",
          
        },
        {
          code: 294116005,
          display: "Cetirizine allergy",
          
        },
        {
          code: 294117001,
          display: "Sedating antihistamine allergy",
          
        },
        {
          code: 294118006,
          display: "Clemastine allergy",
          
        },
        {
          code: 294119003,
          display: "Mebhydrolin allergy",
          
        },
        {
          code: 294120009,
          display: "Mequitazine allergy",
          
        },
        {
          code: 294121008,
          display: "Oxatomide allergy",
          
        },
        {
          code: 294122001,
          display: "Cyclizine allergy",
          
        },
        {
          code: 294123006,
          display: "Dimenhydrinate allergy",
          
        },
        {
          code: 294124000,
          display: "Meclozine hydrochloride allergy",
          
        },
        {
          code: 294125004,
          display: "Antazoline allergy",
          
        },
        {
          code: 294126003,
          display: "Promethazine allergy",
          
        },
        {
          code: 294127007,
          display: "Azatadine allergy",
          
        },
        {
          code: 294128002,
          display: "Brompheniramine allergy",
          
        },
        {
          code: 294129005,
          display: "Chlorphenamine allergy",
          
        },
        {
          code: 294130000,
          display: "Cinnarizine allergy",
          
        },
        {
          code: 294131001,
          display: "Cyproheptadine allergy",
          
        },
        {
          code: 294132008,
          display: "Dimetindene allergy",
          
        },
        {
          code: 294133003,
          display: "Diphenhydramine allergy",
          
        },
        {
          code: 294134009,
          display: "Diphenylpyraline allergy",
          
        },
        {
          code: 294135005,
          display: "Hydroxyzine allergy",
          
        },
        {
          code: 294136006,
          display: "Mepyramine allergy",
          
        },
        {
          code: 294137002,
          display: "Phenindamine allergy",
          
        },
        {
          code: 294138007,
          display: "Pheniramine allergy",
          
        },
        {
          code: 294139004,
          display: "Triprolidine allergy",
          
        },
        {
          code: 294140002,
          display: "Alimemazine allergy",
          
        },
        {
          code: 294141003,
          display: "Cromoglycate and related antiallergenic allergy",
          
        },
        {
          code: 294142005,
          display: "Nedocromil allergy",
          
        },
        {
          code: 294143000,
          display: "Sodium cromoglicate allergy",
          
        },
        {
          code: 294144006,
          display: "Ketotifen allergy",
          
        },
        {
          code: 294145007,
          display: "Lodoxamide allergy",
          
        },
        {
          code: 294146008,
          display: "Cough/decongestant preparation allergy",
          
        },
        {
          code: 294147004,
          display: "Cough suppressant allergy",
          
        },
        {
          code: 294148009,
          display: "Isoaminile allergy",
          
        },
        {
          code: 294149001,
          display: "Morphinan cough suppressant allergy",
          
        },
        {
          code: 294151002,
          display: "Dextromethorphan hydrobromide allergy",
          
        },
        {
          code: 294152009,
          display: "Noscapine allergy",
          
        },
        {
          code: 294153004,
          display: "Pholcodine allergy",
          
        },
        {
          code: 294154005,
          display: "Compound cough suppressant allergy",
          
        },
        {
          code: 294155006,
          display: "Proprietary decongestant allergy",
          
        },
        {
          code: 294156007,
          display: "Expectorant allergy",
          
        },
        {
          code: 294157003,
          display: "Xanthine allergy",
          
        },
        {
          code: 294158008,
          display: "Aminophylline allergy",
          
        },
        {
          code: 294159000,
          display: "Choline theophyllinate allergy",
          
        },
        {
          code: 294160005,
          display: "Theophylline allergy",
          
        },
        {
          code: 294161009,
          display: "Bronchodilator preparations allergy",
          
        },
        {
          code: 294162002,
          display: "Allergy to inhaled corticosteroids",
          
        },
        {
          code: 294163007,
          display: "Drug groups and agents primarily acting on the skin allergy",
          
        },
        {
          code: 294164001,
          display: "Topical dermatological preparation allergy",
          
        },
        {
          code: 294165000,
          display: "Urea creams allergy",
          
        },
        {
          code: 294166004,
          display: "Emollient bath additives allergy",
          
        },
        {
          code: 294167008,
          display: "Dusting powders allergy",
          
        },
        {
          code: 294168003,
          display: "Calamine allergy",
          
        },
        {
          code: 294169006,
          display: "Coal tar allergy",
          
        },
        {
          code: 294170007,
          display: "Coal tar scalp preparations allergy",
          
        },
        {
          code: 294171006,
          display: "Coal tar bath preparations allergy",
          
        },
        {
          code: 294172004,
          display: "Bufexamac allergy",
          
        },
        {
          code: 294173009,
          display: "Dithranol allergy",
          
        },
        {
          code: 294174003,
          display: "Dithranol ointment allergy",
          
        },
        {
          code: 294175002,
          display: "Dithranol cream allergy",
          
        },
        {
          code: 294176001,
          display: "Dithranol paste allergy",
          
        },
        {
          code: 294177005,
          display: "Ichthammol allergy",
          
        },
        {
          code: 294178000,
          display: "Calcipotriol allergy",
          
        },
        {
          code: 294179008,
          display: "Sulfur allergy",
          
        },
        {
          code: 294180006,
          display: "Azelaic acid allergy",
          
        },
        {
          code: 294181005,
          display: "Bromine complexes allergy",
          
        },
        {
          code: 294182003,
          display: "Podophyllum resin allergy",
          
        },
        {
          code: 294183008,
          display: "Podophyllotoxin allergy",
          
        },
        {
          code: 294184002,
          display: "Sunscreening preparations allergy",
          
        },
        {
          code: 294185001,
          display: "Camouflaging preparations allergy",
          
        },
        {
          code: 294187009,
          display: "Desloughing agents allergy",
          
        },
        {
          code: 294188004,
          display: "Aserbine allergy",
          
        },
        {
          code: 294189007,
          display: "Surgical tissue adhesive allergy",
          
        },
        {
          code: 294190003,
          display: "Enbucrilate allergy",
          
        },
        {
          code: 294191004,
          display: "Collodion allergy",
          
        },
        {
          code: 294192006,
          display: "Counter irritants allergy",
          
        },
        {
          code: 294193001,
          display: "Emollient allergy",
          
        },
        {
          code: 294194007,
          display: "Poultices allergy",
          
        },
        {
          code: 294195008,
          display: "Anionic surfactant allergy",
          
        },
        {
          code: 294196009,
          display: "Alkali metal soap allergy",
          
        },
        {
          code: 294197000,
          display: "Astringent allergy",
          
        },
        {
          code: 294198005,
          display: "Aluminum astringent allergy",
          
        },
        {
          code: 294199002,
          display: "Topical selenium allergy",
          
        },
        {
          code: 294200004,
          display: "Crotamiton allergy",
          
        },
        {
          code: 294201000,
          display: "Topical salicylic acid allergy",
          
        },
        {
          code: 294202007,
          display: "Topical abrasive agent allergy",
          
        },
        {
          code: 294203002,
          display: "Benzoyl peroxide allergy",
          
        },
        {
          code: 294204008,
          display: "Silver nitrate allergy",
          
        },
        {
          code: 294206005,
          display: "Gamolenic acid allergy",
          
        },
        {
          code: 294207001,
          display: "Retinoid allergy",
          
        },
        {
          code: 294208006,
          display: "Etretinate allergy",
          
        },
        {
          code: 294209003,
          display: "Acitretin allergy",
          
        },
        {
          code: 294210008,
          display: "Tretinoin allergy",
          
        },
        {
          code: 294211007,
          display: "Isotretinoin allergy",
          
        },
        {
          code: 294212000,
          display: "Drug groups primarily affecting the musculoskeletal system allergy",
          
        },
        {
          code: 294213005,
          display: "Drug for the treatment of gout allergy",
          
        },
        {
          code: 294214004,
          display: "Colchicum alkaloid allergy",
          
        },
        {
          code: 294215003,
          display: "Colchicine allergy",
          
        },
        {
          code: 294216002,
          display: "Uricosuric agent allergy",
          
        },
        {
          code: 294217006,
          display: "Probenecid allergy",
          
        },
        {
          code: 294218001,
          display: "Sulfinpyrazone allergy",
          
        },
        {
          code: 294219009,
          display: "Xanthine oxidase inhibitor allergy",
          
        },
        {
          code: 294220003,
          display: "Allopurinol allergy",
          
        },
        {
          code: 294221004,
          display: "Skeletal muscle relaxant allergy",
          
        },
        {
          code: 294222006,
          display: "Neuromuscular transmission drug allergy",
          
        },
        {
          code: 294223001,
          display: "Depolarizing muscle relaxant allergy",
          
        },
        {
          code: 294224007,
          display: "Suxamethonium allergy",
          
        },
        {
          code: 294225008,
          display: "Non-depolarizing muscle relaxant allergy",
          
        },
        {
          code: 294226009,
          display: "Mivacurium allergy",
          
        },
        {
          code: 294227000,
          display: "Alcuronium allergy",
          
        },
        {
          code: 294228005,
          display: "Atracurium allergy",
          
        },
        {
          code: 294229002,
          display: "Gallamine allergy",
          
        },
        {
          code: 294230007,
          display: "Pancuronium allergy",
          
        },
        {
          code: 294231006,
          display: "Tubocurarine allergy",
          
        },
        {
          code: 294232004,
          display: "Vecuronium allergy",
          
        },
        {
          code: 294233009,
          display: "Rocuronium allergy",
          
        },
        {
          code: 294234003,
          display: "Baclofen allergy",
          
        },
        {
          code: 294235002,
          display: "Carisoprodol allergy",
          
        },
        {
          code: 294236001,
          display: "Methocarbamol allergy",
          
        },
        {
          code: 294237005,
          display: "Dantrolene allergy",
          
        },
        {
          code: 294238000,
          display: "Gold allergy",
          
        },
        {
          code: 294239008,
          display: "Sodium aurothiomalate allergy",
          
        },
        {
          code: 294240005,
          display: "Auranofin allergy",
          
        },
        {
          code: 294241009,
          display: "Smooth muscle relaxant allergy",
          
        },
        {
          code: 294242002,
          display: "Papaverine allergy",
          
        },
        {
          code: 294243007,
          display: "Flavoxate allergy",
          
        },
        {
          code: 294244001,
          display: "Drug groups primarily used in obstetrics, gynecological and urinary tract disorders allergy",
          
        },
        {
          code: 294245000,
          display: "Mifepristone allergy",
          
        },
        {
          code: 294246004,
          display: "Non-ionic surfactant allergy",
          
        },
        {
          code: 294247008,
          display: "Nonoxinol allergy",
          
        },
        {
          code: 294248003,
          display: "Octoxinol allergy",
          
        },
        {
          code: 294249006,
          display: "Prostaglandin allergy",
          
        },
        {
          code: 294250006,
          display: "A series prostaglandin allergy",
          
        },
        {
          code: 294252003,
          display: "E series prostaglandin allergy",
          
        },
        {
          code: 294253008,
          display: "Dinoprostone allergy",
          
        },
        {
          code: 294254002,
          display: "Gemeprost allergy",
          
        },
        {
          code: 294255001,
          display: "Alprostadil allergy",
          
        },
        {
          code: 294256000,
          display: "F series prostaglandin allergy",
          
        },
        {
          code: 294257009,
          display: "Dinoprost allergy",
          
        },
        {
          code: 294258004,
          display: "Carboprost allergy",
          
        },
        {
          code: 294259007,
          display: "I series prostaglandin allergy",
          
        },
        {
          code: 294260002,
          display: "Epoprostenol allergy",
          
        },
        {
          code: 294261003,
          display: "Terpenes allergy",
          
        },
        {
          code: 294262005,
          display: "Chelating agents and antidotes allergy",
          
        },
        {
          code: 294263000,
          display: "Antidote allergy",
          
        },
        {
          code: 294264006,
          display: "Ipecacuanha allergy",
          
        },
        {
          code: 294265007,
          display: "Charcoal-activated allergy",
          
        },
        {
          code: 294266008,
          display: "Sodium nitrite allergy",
          
        },
        {
          code: 294268009,
          display: "Digoxin-specific-antibody allergy",
          
        },
        {
          code: 294269001,
          display: "Mesna allergy",
          
        },
        {
          code: 294270000,
          display: "Benzodiazepine antagonist allergy",
          
        },
        {
          code: 294271001,
          display: "Flumazenil allergy",
          
        },
        {
          code: 294272008,
          display: "Cholinesterase reactivator allergy",
          
        },
        {
          code: 294273003,
          display: "Pralidoxime allergy",
          
        },
        {
          code: 294274009,
          display: "Hydrofluoric acid burn antidote allergy",
          
        },
        {
          code: 294275005,
          display: "Opioid antagonist allergy",
          
        },
        {
          code: 294276006,
          display: "Naltrexone allergy",
          
        },
        {
          code: 294277002,
          display: "Naloxone allergy",
          
        },
        {
          code: 294278007,
          display: "Protamine allergy",
          
        },
        {
          code: 294279004,
          display: "Antidotes for pesticides allergy",
          
        },
        {
          code: 294280001,
          display: "Fullers earth powder allergy",
          
        },
        {
          code: 294281002,
          display: "Bentonite powder allergy",
          
        },
        {
          code: 294282009,
          display: "Chelating agent allergy",
          
        },
        {
          code: 294283004,
          display: "Dimercaprol allergy",
          
        },
        {
          code: 294284005,
          display: "Desferrioxamine allergy",
          
        },
        {
          code: 294285006,
          display: "Edetate allergy",
          
        },
        {
          code: 294286007,
          display: "Dicobalt edetate allergy",
          
        },
        {
          code: 294287003,
          display: "Sodium calcium edetate allergy",
          
        },
        {
          code: 294288008,
          display: "Trisodium edetate allergy",
          
        },
        {
          code: 294289000,
          display: "Disodium edetate allergy",
          
        },
        {
          code: 294290009,
          display: "Trientine allergy",
          
        },
        {
          code: 294291008,
          display: "Penicillamine allergy",
          
        },
        {
          code: 294293006,
          display: "Homeopathic medicine allergy",
          
        },
        {
          code: 294295004,
          display: "Herbal medicine allergy",
          
        },
        {
          code: 294297007,
          display: "Sodium hyaluronate allergy",
          
        },
        {
          code: 294298002,
          display: "Glycine allergy",
          
        },
        {
          code: 294299005,
          display: "Dialysis fluid allergy",
          
        },
        {
          code: 294300002,
          display: "Peritoneal dialysis solution allergy",
          
        },
        {
          code: 294301003,
          display: "Hemodialysis fluid allergy",
          
        },
        {
          code: 294302005,
          display: "Hemofiltration solution allergy",
          
        },
        {
          code: 294304006,
          display: "Cardioplegia solution allergy",
          
        },
        {
          code: 294306008,
          display: "Dimethyl-ether propane allergy",
          
        },
        {
          code: 294307004,
          display: "Citrate allergy",
          
        },
        {
          code: 294308009,
          display: "Hemorrhoid preparation allergy",
          
        },
        {
          code: 294309001,
          display: "Ear wax removal preparation allergy",
          
        },
        {
          code: 294310006,
          display: "Topical potassium allergy",
          
        },
        {
          code: 294311005,
          display: "Topical zinc allergy",
          
        },
        {
          code: 294312003,
          display: "Oropharyngeal preparations allergy",
          
        },
        {
          code: 294313008,
          display: "Artificial saliva allergy",
          
        },
        {
          code: 294315001,
          display: "Fixed oil allergy",
          
        },
        {
          code: 294316000,
          display: "Olive oil allergy",
          
        },
        {
          code: 294317009,
          display: "Arachis oil allergy",
          
        },
        {
          code: 294318004,
          display: "Castor oil allergy",
          
        },
        {
          code: 294319007,
          display: "Glycerol/glycol/macrogol allergy",
          
        },
        {
          code: 294320001,
          display: "Glycerol allergy",
          
        },
        {
          code: 294321002,
          display: "Lubricant allergy",
          
        },
        {
          code: 294322009,
          display: "Base allergy",
          
        },
        {
          code: 294324005,
          display: "Paraffin allergy",
          
        },
        {
          code: 294325006,
          display: "Paraffin-yellow soft allergy",
          
        },
        {
          code: 294326007,
          display: "Paraffin-white soft allergy",
          
        },
        {
          code: 294327003,
          display: "Liquid paraffin allergy",
          
        },
        {
          code: 294328008,
          display: "Silicone allergy",
          
        },
        {
          code: 294329000,
          display: "Dimethicone allergy",
          
        },
        {
          code: 294330005,
          display: "Wool alcohol allergy",
          
        },
        {
          code: 294331009,
          display: "Viscosity modifier allergy",
          
        },
        {
          code: 294332002,
          display: "Polyvinyl alcohol allergy",
          
        },
        {
          code: 294333007,
          display: "Carbomer-940 allergy",
          
        },
        {
          code: 294334001,
          display: "Cellulose-derived viscosity modifier allergy",
          
        },
        {
          code: 294335000,
          display: "Hypromellose allergy",
          
        },
        {
          code: 294336004,
          display: "Hypromellose eye drops allergy",
          
        },
        {
          code: 294337008,
          display: "Hydroxyethylcellulose allergy",
          
        },
        {
          code: 294339006,
          display: "Carmellose allergy",
          
        },
        {
          code: 294340008,
          display: "Antifungal drug allergy",
          
        },
        {
          code: 294341007,
          display: "Flucytosine allergy",
          
        },
        {
          code: 294342000,
          display: "Terbinafine allergy",
          
        },
        {
          code: 294343005,
          display: "Nitrophenol allergy",
          
        },
        {
          code: 294344004,
          display: "Tolnaftate allergy",
          
        },
        {
          code: 294346002,
          display: "Amorolfine allergy",
          
        },
        {
          code: 294348001,
          display: "Griseofulvin allergy",
          
        },
        {
          code: 294349009,
          display: "Amphotericin allergy",
          
        },
        {
          code: 294350009,
          display: "Natamycin allergy",
          
        },
        {
          code: 294351008,
          display: "Nystatin allergy",
          
        },
        {
          code: 294352001,
          display: "Azole antifungal allergy",
          
        },
        {
          code: 294354000,
          display: "Undecenoates allergy",
          
        },
        {
          code: 294355004,
          display: "Imidazole antifungal allergy",
          
        },
        {
          code: 294356003,
          display: "Clotrimazole allergy",
          
        },
        {
          code: 294357007,
          display: "Fenticonazole allergy",
          
        },
        {
          code: 294358002,
          display: "Tioconazole allergy",
          
        },
        {
          code: 294359005,
          display: "Econazole allergy",
          
        },
        {
          code: 294360000,
          display: "Isoconazole allergy",
          
        },
        {
          code: 294361001,
          display: "Sulconazole allergy",
          
        },
        {
          code: 294362008,
          display: "Ketoconazole allergy",
          
        },
        {
          code: 294363003,
          display: "Miconazole allergy",
          
        },
        {
          code: 294364009,
          display: "Triazole antifungals allergy",
          
        },
        {
          code: 294365005,
          display: "Fluconazole allergy",
          
        },
        {
          code: 294366006,
          display: "Itraconazole allergy",
          
        },
        {
          code: 294367002,
          display: "Antiviral drug allergy",
          
        },
        {
          code: 294368007,
          display: "Inosine pranobex allergy",
          
        },
        {
          code: 294369004,
          display: "Zidovudine allergy",
          
        },
        {
          code: 294370003,
          display: "Ganciclovir allergy",
          
        },
        {
          code: 294371004,
          display: "Famciclovir allergy",
          
        },
        {
          code: 294372006,
          display: "Didanosine allergy",
          
        },
        {
          code: 294373001,
          display: "Zalcitabine allergy",
          
        },
        {
          code: 294374007,
          display: "Valaciclovir allergy",
          
        },
        {
          code: 294375008,
          display: "Interferons allergy",
          
        },
        {
          code: 294376009,
          display: "Human interferon gamma-1b allergy",
          
        },
        {
          code: 294377000,
          display: "Interferon-A-2a allergy",
          
        },
        {
          code: 294378005,
          display: "Interferon-A-2b allergy",
          
        },
        {
          code: 294379002,
          display: "Interferon-A-N1 allergy",
          
        },
        {
          code: 294380004,
          display: "Ribavirin allergy",
          
        },
        {
          code: 294381000,
          display: "Trifluorothymidine allergy",
          
        },
        {
          code: 294382007,
          display: "Foscarnet allergy",
          
        },
        {
          code: 294383002,
          display: "Vidarabine allergy",
          
        },
        {
          code: 294384008,
          display: "Aciclovir allergy",
          
        },
        {
          code: 294385009,
          display: "Idoxuridine allergy",
          
        },
        {
          code: 294386005,
          display: "Idoxuridine in dimethylsulfoxide allergy",
          
        },
        {
          code: 294387001,
          display: "Antimalarial drug allergy",
          
        },
        {
          code: 294388006,
          display: "Pyrimethamine allergy",
          
        },
        {
          code: 294389003,
          display: "Aminoquinoline antimalarial allergy",
          
        },
        {
          code: 294390007,
          display: "Amodiaquine allergy",
          
        },
        {
          code: 294391006,
          display: "Primaquine allergy",
          
        },
        {
          code: 294392004,
          display: "Mefloquine allergy",
          
        },
        {
          code: 294393009,
          display: "Hydroxychloroquine allergy",
          
        },
        {
          code: 294394003,
          display: "Chloroquine allergy",
          
        },
        {
          code: 294395002,
          display: "Biguanide antimalarial allergy",
          
        },
        {
          code: 294396001,
          display: "Proguanil allergy",
          
        },
        {
          code: 294397005,
          display: "Cinchona antimalarial allergy",
          
        },
        {
          code: 294398000,
          display: "Quinine allergy",
          
        },
        {
          code: 294399008,
          display: "Halofantrine allergy",
          
        },
        {
          code: 294400001,
          display: "Mepacrine allergy",
          
        },
        {
          code: 294401002,
          display: "Lactobacill acidophil vaccine allergy",
          
        },
        {
          code: 294402009,
          display: "Anti-infective nasal preparations allergy",
          
        },
        {
          code: 294403004,
          display: "Disinfectants and cleansers allergy",
          
        },
        {
          code: 294404005,
          display: "Acetic acid allergy",
          
        },
        {
          code: 294405006,
          display: "Hydrargaphen allergy",
          
        },
        {
          code: 294406007,
          display: "Polynoxylin allergy",
          
        },
        {
          code: 294407003,
          display: "Hexetidine allergy",
          
        },
        {
          code: 294408008,
          display: "Sodium perborate allergy",
          
        },
        {
          code: 294409000,
          display: "Chlorinated solutions allergy",
          
        },
        {
          code: 294410005,
          display: "Potassium permanganate allergy",
          
        },
        {
          code: 294411009,
          display: "Bismuth subnitrate and iodoform paste impregnated gauze allergy",
          
        },
        {
          code: 294412002,
          display: "Phenolics allergy",
          
        },
        {
          code: 294413007,
          display: "Thymol allergy",
          
        },
        {
          code: 294414001,
          display: "Chlorinated phenol disinfectant allergy",
          
        },
        {
          code: 294415000,
          display: "Chloroxylenol allergy",
          
        },
        {
          code: 294416004,
          display: "Hexachlorophene allergy",
          
        },
        {
          code: 294417008,
          display: "Triclosan allergy",
          
        },
        {
          code: 294418003,
          display: "Phenol allergy",
          
        },
        {
          code: 294419006,
          display: "Alcoholic disinfectant allergy",
          
        },
        {
          code: 294420000,
          display: "Alcohol products allergy",
          
        },
        {
          code: 294421001,
          display: "Industrial methylated spirit allergy",
          
        },
        {
          code: 294422008,
          display: "Aldehyde disinfectant allergy",
          
        },
        {
          code: 294423003,
          display: "Glutaraldehyde allergy",
          
        },
        {
          code: 294425005,
          display: "Noxythiolin allergy",
          
        },
        {
          code: 294426006,
          display: "Formaldehyde allergy",
          
        },
        {
          code: 294427002,
          display: "Amidine disinfectant allergy",
          
        },
        {
          code: 294428007,
          display: "Propamidine isethionate allergy",
          
        },
        {
          code: 294429004,
          display: "Dibrompropamidine isethionate allergy",
          
        },
        {
          code: 294430009,
          display: "Biguanide disinfectant allergy",
          
        },
        {
          code: 294431008,
          display: "Chlorhexidine allergy",
          
        },
        {
          code: 294432001,
          display: "Chlorhexidine hydrochloride and neomycin sulfate allergy",
          
        },
        {
          code: 294433006,
          display: "Borate allergy",
          
        },
        {
          code: 294434000,
          display: "Boric acid allergy",
          
        },
        {
          code: 294435004,
          display: "Cationic surfactant allergy",
          
        },
        {
          code: 294436003,
          display: "Quaternary ammonium surfactant allergy",
          
        },
        {
          code: 294437007,
          display: "Cetrimide allergy",
          
        },
        {
          code: 294438002,
          display: "Benzalkonium allergy",
          
        },
        {
          code: 294439005,
          display: "Domiphen allergy",
          
        },
        {
          code: 294440007,
          display: "Quaternary pyridinium surfactant allergy",
          
        },
        {
          code: 294441006,
          display: "Cetylpyridinium allergy",
          
        },
        {
          code: 294442004,
          display: "Quaternary quinolinium surfactant allergy",
          
        },
        {
          code: 294443009,
          display: "Dequalinium allergy",
          
        },
        {
          code: 294444003,
          display: "Disinfectant dye allergy",
          
        },
        {
          code: 294445002,
          display: "Acridine azo disinfectant dye allergy",
          
        },
        {
          code: 294446001,
          display: "Triphenylmethane azo disinfectant dye allergy",
          
        },
        {
          code: 294447005,
          display: "Crystal violet allergy",
          
        },
        {
          code: 294448000,
          display: "Brilliant green allergy",
          
        },
        {
          code: 294449008,
          display: "Hydrogen peroxide allergy",
          
        },
        {
          code: 294450008,
          display: "Anthelmintics allergy",
          
        },
        {
          code: 294451007,
          display: "Piperazine allergy",
          
        },
        {
          code: 294452000,
          display: "Pyrantel allergy",
          
        },
        {
          code: 294453005,
          display: "Niclosamide allergy",
          
        },
        {
          code: 294455003,
          display: "Bephenium allergy",
          
        },
        {
          code: 294456002,
          display: "Diethylcarbamazine allergy",
          
        },
        {
          code: 294457006,
          display: "Benzimidazole anthelmintic allergy",
          
        },
        {
          code: 294458001,
          display: "Mebendazole allergy",
          
        },
        {
          code: 294459009,
          display: "Albendazole allergy",
          
        },
        {
          code: 294460004,
          display: "Tiabendazole allergy",
          
        },
        {
          code: 294461000,
          display: "Antibacterial drug allergy",
          
        },
        {
          code: 294462007,
          display: "Aminoglycosides allergy",
          
        },
        {
          code: 294463002,
          display: "Amikacin allergy",
          
        },
        {
          code: 294464008,
          display: "Kanamycin allergy",
          
        },
        {
          code: 294465009,
          display: "Netilmicin allergy",
          
        },
        {
          code: 294466005,
          display: "Streptomycin allergy",
          
        },
        {
          code: 294467001,
          display: "Framycetin allergy",
          
        },
        {
          code: 294468006,
          display: "Neomycin allergy",
          
        },
        {
          code: 294469003,
          display: "Gentamicin allergy",
          
        },
        {
          code: 294470002,
          display: "Tobramycin allergy",
          
        },
        {
          code: 294471003,
          display: "Clarithromycin allergy",
          
        },
        {
          code: 294472005,
          display: "Azithromycin allergy",
          
        },
        {
          code: 294473000,
          display: "Sodium fusidate allergy",
          
        },
        {
          code: 294474006,
          display: "Spectinomycin allergy",
          
        },
        {
          code: 294475007,
          display: "Vancomycin allergy",
          
        },
        {
          code: 294476008,
          display: "Teicoplanin allergy",
          
        },
        {
          code: 294477004,
          display: "Trimethoprim allergy",
          
        },
        {
          code: 294478009,
          display: "Nitrofurantoin allergy",
          
        },
        {
          code: 294479001,
          display: "Methenamine hippurate allergy",
          
        },
        {
          code: 294480003,
          display: "Mupirocin allergy",
          
        },
        {
          code: 294481004,
          display: "Nitrofurazone allergy",
          
        },
        {
          code: 294482006,
          display: "Fusidic acid allergy",
          
        },
        {
          code: 294483001,
          display: "4-quinolones allergy",
          
        },
        {
          code: 294484007,
          display: "Acrosoxacin allergy",
          
        },
        {
          code: 294485008,
          display: "Cinoxacin allergy",
          
        },
        {
          code: 294486009,
          display: "Nalidixic acid allergy",
          
        },
        {
          code: 294487000,
          display: "Ciprofloxacin allergy",
          
        },
        {
          code: 294488005,
          display: "Enoxacin allergy",
          
        },
        {
          code: 294489002,
          display: "Ofloxacin allergy",
          
        },
        {
          code: 294490006,
          display: "Norfloxacin allergy",
          
        },
        {
          code: 294491005,
          display: "Temafloxacin allergy",
          
        },
        {
          code: 294492003,
          display: "Penicillinase-sensitive penicillins allergy",
          
        },
        {
          code: 294494002,
          display: "Benethamine penicillin allergy",
          
        },
        {
          code: 294495001,
          display: "Benzathine penicillin allergy",
          
        },
        {
          code: 294496000,
          display: "Phenethicillin allergy",
          
        },
        {
          code: 294497009,
          display: "Phenoxymethylpenicillin allergy",
          
        },
        {
          code: 294498004,
          display: "Procaine benzylpenicillin allergy",
          
        },
        {
          code: 294499007,
          display: "Benzylpenicillin allergy",
          
        },
        {
          code: 294500003,
          display: "Penicillinase-resistant penicillins allergy",
          
        },
        {
          code: 294501004,
          display: "Cloxacillin allergy",
          
        },
        {
          code: 294502006,
          display: "Flucloxacillin allergy",
          
        },
        {
          code: 294503001,
          display: "Methicillin allergy",
          
        },
        {
          code: 294504007,
          display: "Broad spectrum penicillins allergy",
          
        },
        {
          code: 294505008,
          display: "Amoxicillin allergy",
          
        },
        {
          code: 294506009,
          display: "Ampicillin allergy",
          
        },
        {
          code: 294507000,
          display: "Ciclacillin allergy",
          
        },
        {
          code: 294508005,
          display: "Mezlocillin allergy",
          
        },
        {
          code: 294509002,
          display: "Pivampicillin allergy",
          
        },
        {
          code: 294510007,
          display: "Carbenicillin allergy",
          
        },
        {
          code: 294511006,
          display: "Bacampicillin allergy",
          
        },
        {
          code: 294512004,
          display: "Talampicillin allergy",
          
        },
        {
          code: 294513009,
          display: "Antipseudomonal penicillins allergy",
          
        },
        {
          code: 294514003,
          display: "Temocillin allergy",
          
        },
        {
          code: 294515002,
          display: "Piperacillin allergy",
          
        },
        {
          code: 294516001,
          display: "Azlocillin allergy",
          
        },
        {
          code: 294517005,
          display: "Ticarcillin allergy",
          
        },
        {
          code: 294518000,
          display: "Carfecillin allergy",
          
        },
        {
          code: 294519008,
          display: "Mecillinam allergy",
          
        },
        {
          code: 294520002,
          display: "Pivmecillinam allergy",
          
        },
        {
          code: 294521003,
          display: "Combined penicillin preparation allergy",
          
        },
        {
          code: 294522005,
          display: "Ampicillin and cloxacillin allergy",
          
        },
        {
          code: 294523000,
          display: "Amoxicillin + clavulanate potassium allergy",
          
        },
        {
          code: 294524006,
          display: "Ampicillin + floxacillin allergy",
          
        },
        {
          code: 294525007,
          display: "Piperacillin and tazobactam allergy",
          
        },
        {
          code: 294526008,
          display: "Pivampicillin and pivmecillinam allergy",
          
        },
        {
          code: 294527004,
          display: "Ticarcillin and clavulanic acid allergy",
          
        },
        {
          code: 294528009,
          display: "Polymyxins allergy",
          
        },
        {
          code: 294529001,
          display: "Colistin allergy",
          
        },
        {
          code: 294530006,
          display: "Polymyxin B allergy",
          
        },
        {
          code: 294531005,
          display: "Carbapenem allergy",
          
        },
        {
          code: 294532003,
          display: "Cephalosporin allergy",
          
        },
        {
          code: 294533008,
          display: "First generation cephalosporin allergy",
          
        },
        {
          code: 294534002,
          display: "Cefadroxil allergy",
          
        },
        {
          code: 294535001,
          display: "Cefalexin allergy",
          
        },
        {
          code: 294536000,
          display: "Cephalothin allergy",
          
        },
        {
          code: 294537009,
          display: "Cefazolin allergy",
          
        },
        {
          code: 294538004,
          display: "Cefradine allergy",
          
        },
        {
          code: 294539007,
          display: "Latamoxef allergy",
          
        },
        {
          code: 294540009,
          display: "Second generation cephalosporin allergy",
          
        },
        {
          code: 294541008,
          display: "Cefaclor allergy",
          
        },
        {
          code: 294542001,
          display: "Cefuroxime allergy",
          
        },
        {
          code: 294543006,
          display: "Cephamandole allergy",
          
        },
        {
          code: 294544000,
          display: "Third generation cephalosporin allergy",
          
        },
        {
          code: 294545004,
          display: "Cefotaxime allergy",
          
        },
        {
          code: 294546003,
          display: "Ceftazidime allergy",
          
        },
        {
          code: 294547007,
          display: "Ceftizoxime allergy",
          
        },
        {
          code: 294548002,
          display: "Cefixime allergy",
          
        },
        {
          code: 294549005,
          display: "Cefodizime allergy",
          
        },
        {
          code: 294550005,
          display: "Cefpodoxime allergy",
          
        },
        {
          code: 294551009,
          display: "Ceftriaxone allergy",
          
        },
        {
          code: 294552002,
          display: "Ceftibuten allergy",
          
        },
        {
          code: 294554001,
          display: "Cefsulodin allergy",
          
        },
        {
          code: 294555000,
          display: "Fourth generation cephalosporin allergy",
          
        },
        {
          code: 294556004,
          display: "Cefpirome allergy",
          
        },
        {
          code: 294557008,
          display: "Cephamycin allergy",
          
        },
        {
          code: 294558003,
          display: "Cefoxitin allergy",
          
        },
        {
          code: 294559006,
          display: "Fosfomycin allergy",
          
        },
        {
          code: 294560001,
          display: "Lincomycin and derivatives allergy",
          
        },
        {
          code: 294561002,
          display: "Clindamycin allergy",
          
        },
        {
          code: 294562009,
          display: "Lincomycin allergy",
          
        },
        {
          code: 294563004,
          display: "Mandelic acid allergy",
          
        },
        {
          code: 294564005,
          display: "Monobactam allergy",
          
        },
        {
          code: 294565006,
          display: "Aztreonam allergy",
          
        },
        {
          code: 294566007,
          display: "Nitroimidazole allergy",
          
        },
        {
          code: 294567003,
          display: "Metronidazole allergy",
          
        },
        {
          code: 294568008,
          display: "Tinidazole allergy",
          
        },
        {
          code: 294569000,
          display: "Nimorazole allergy",
          
        },
        {
          code: 294570004,
          display: "Calcium sulfaloxate allergy",
          
        },
        {
          code: 294571000,
          display: "Phthalylsulfathiazole allergy",
          
        },
        {
          code: 294572007,
          display: "Sulfametopyrazine allergy",
          
        },
        {
          code: 294573002,
          display: "Sulfadiazine allergy",
          
        },
        {
          code: 294574008,
          display: "Sulfadimethoxine allergy",
          
        },
        {
          code: 294575009,
          display: "Sulfadimidine allergy",
          
        },
        {
          code: 294576005,
          display: "Sulfafurazole allergy",
          
        },
        {
          code: 294577001,
          display: "Sulfaguanidine allergy",
          
        },
        {
          code: 294578006,
          display: "Sulfaurea allergy",
          
        },
        {
          code: 294579003,
          display: "Mafenide allergy",
          
        },
        {
          code: 294580000,
          display: "Silver sulfadiazine allergy",
          
        },
        {
          code: 294581001,
          display: "Combined sulfonamides allergy",
          
        },
        {
          code: 5388008,
          display: "Congenital lactase deficiency",
          
        },
        {
          code: 25744000,
          display: "Hereditary gastrogenic lactose intolerance",
          
        },
        {
          code: 29512005,
          display: "Lactase deficiency in diseases other than of the small intestine",
          
        },
        {
          code: 38032004,
          display: "Ontogenic late onset lactase deficiency",
          
        },
        {
          code: 54250004,
          display: "Lactose intolerance in children without lactase deficiency",
          
        },
        {
          code: 60414003,
          display: "Acquired lactase deficiency",
          
        },
        {
          code: 190751001,
          display: "Primary lactose intolerance",
          
        },
        {
          code: 52070001,
          display: "Acquired monosaccharide malabsorption",
          
        },
        {
          code: 237978005,
          display: "Glycerol intolerance",
          
        },
        {
          code: 700094005,
          display: "Milk intolerance",
          
        },
        {
          code: 409137002,
          display: "No known history of drug allergy",
          
        },
        {
          code: 428197003,
          display: "No known insect allergy",
          
        },
        {
          code: 428607008,
          display: "No known environmental allergy",
          
        },
        {
          code: 429625007,
          display: "No known food allergy",
          
        },
        {
          code: 716184000,
          display: "No known latex allergy",
          
        },
        {
          code: 716220001,
          display: "No known animal allergy",
          
        }
       ];
    
    const codeProps = {
        options: code,
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