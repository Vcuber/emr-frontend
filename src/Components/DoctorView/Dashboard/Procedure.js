import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function Procedure() {

    const bodySite = [
        {
          code: 106004,
          display: "Posterior carpal region",
          
        },
        {
          code: 107008,
          display: "Fetal part of placenta",
          
        },
        {
          code: 108003,
          display: "Condylar emissary vein",
          
        },
        {
          code: 110001,
          display: "Visceral layer of Bowman's capsule",
          
        },
        {
          code: 111002,
          display: "Parathyroid gland",
          
        },
        {
          code: 116007,
          display: "Subcutaneous tissue of medial surface of index finger",
          
        },
        {
          code: 124002,
          display: "Coronoid process of mandible",
          
        },
        {
          code: 149003,
          display: "Central pair of microtubules, cilium or flagellum, not bacterial",
          
        },
        {
          code: 155008,
          display: "Deep circumflex artery of ilium",
          
        },
        {
          code: 167005,
          display: "Supraclavicular part of brachial plexus",
          
        },
        {
          code: 202009,
          display: "Anterior division of renal artery",
          
        },
        {
          code: 205006,
          display: "Left commissure of aortic valve",
          
        },
        {
          code: 206007,
          display: "Gluteus maximus muscle",
          
        },
        {
          code: 221001,
          display: "Articular surface, phalanges, of fourth metacarpal bone",
          
        },
        {
          code: 227002,
          display: "Canal of Hering",
          
        },
        {
          code: 233006,
          display: "Hepatocolic ligament",
          
        },
        {
          code: 235004,
          display: "Superior labial artery",
          
        },
        {
          code: 246001,
          display: "Lateral vestibular nucleus",
          
        },
        {
          code: 247005,
          display: "Mesotympanum",
          
        },
        {
          code: 251007,
          display: "Pectoral region",
          
        },
        {
          code: 256002,
          display: "Kupffer cell",
          
        },
        {
          code: 263002,
          display: "Thoracic nerve",
          
        },
        {
          code: 266005,
          display: "Right lower lobe of lung",
          
        },
        {
          code: 272005,
          display: "Superior articular process of lumbar vertebra",
          
        },
        {
          code: 273000,
          display: "Lateral myocardium",
          
        },
        {
          code: 283001,
          display: "Central axillary lymph node",
          
        },
        {
          code: 284007,
          display: "Flexor tendon and tendon sheath of fourth toe",
          
        },
        {
          code: 289002,
          display: "Metacarpophalangeal joint of index finger",
          
        },
        {
          code: 301000,
          display: "Fifth metatarsal bone",
          
        },
        {
          code: 311007,
          display: "Plantar surface of great toe",
          
        },
        {
          code: 315003,
          display: "Skin of umbilicus",
          
        },
        {
          code: 318001,
          display: "Cardiac impression of liver",
          
        },
        {
          code: 344001,
          display: "Ankle",
          
        },
        {
          code: 345000,
          display: "Penetrating atrioventricular bundle",
          
        },
        {
          code: 356000,
          display: "Reticular corium",
          
        },
        {
          code: 393006,
          display: "Wall of urinary bladder",
          
        },
        {
          code: 402006,
          display: "Dental branches of inferior alveolar artery",
          
        },
        {
          code: 405008,
          display: "Posterior temporal diploic vein",
          
        },
        {
          code: 414003,
          display: "Gastric fundus",
          
        },
        {
          code: 420002,
          display: "Anastomosis, heterocladic",
          
        },
        {
          code: 422005,
          display: "Inferior surface of tongue",
          
        },
        {
          code: 446003,
          display: "Trochanteric bursa",
          
        },
        {
          code: 457008,
          display: "Collateral ligament",
          
        },
        {
          code: 461002,
          display: "Lateral corticospinal tract",
          
        },
        {
          code: 464005,
          display: "Basophilic normoblast",
          
        },
        {
          code: 465006,
          display: "Ascending frontal gyrus",
          
        },
        {
          code: 471000,
          display: "Flexor hallucis longus in leg",
          
        },
        {
          code: 480000,
          display: "Cardiopulmonary circulatory system",
          
        },
        {
          code: 485005,
          display: "TC - Transverse colon",
          
        },
        {
          code: 528006,
          display: "Costal surface of lung",
          
        },
        {
          code: 552004,
          display: "Vagus nerve parasympathetic fibers to cardiac plexus",
          
        },
        {
          code: 565008,
          display: "Intervertebral disc space of fifth lumbar vertebra",
          
        },
        {
          code: 582005,
          display: "Head of phalanx of great toe",
          
        },
        {
          code: 587004,
          display: "Capsule of proximal interphalangeal joint of third toe",
          
        },
        {
          code: 589001,
          display: "Interventricular septum",
          
        },
        {
          code: 595000,
          display: "Palpebral fissure",
          
        },
        {
          code: 608002,
          display: "Subcutaneous tissue of philtrum",
          
        },
        {
          code: 621009,
          display: "Multivesicular body, internal vesicles",
          
        },
        {
          code: 635006,
          display: "Tuberosity of distal phalanx of little toe",
          
        },
        {
          code: 650002,
          display: "Superior articular process of seventh thoracic vertebra",
          
        },
        {
          code: 660006,
          display: "Tracheal mucous membrane",
          
        },
        {
          code: 661005,
          display: "Jaw region",
          
        },
        {
          code: 667009,
          display: "Embryological structure",
          
        },
        {
          code: 688000,
          display: "Fetal hyaloid artery",
          
        },
        {
          code: 691000,
          display: "Small intestine submucosa",
          
        },
        {
          code: 692007,
          display: "Body of ischium",
          
        },
        {
          code: 723004,
          display: "Dense intermediate filament bundles",
          
        },
        {
          code: 774007,
          display: "Head and neck",
          
        },
        {
          code: 790007,
          display: "Visceral surface of liver",
          
        },
        {
          code: 798000,
          display: "Deep temporal veins",
          
        },
        {
          code: 808000,
          display: "Posterior intercostal artery",
          
        },
        {
          code: 809008,
          display: "Fetal chondrocranium",
          
        },
        {
          code: 823005,
          display: "Posterior cervical spinal cord nerve root",
          
        },
        {
          code: 830004,
          display: "Spinous process of fifth thoracic vertebra",
          
        },
        {
          code: 836005,
          display: "Oral region of face",
          
        },
        {
          code: 885000,
          display: "Lamina muscularis of colonic mucous membrane",
          
        },
        {
          code: 895007,
          display: "Anterior cruciate ligament of knee joint",
          
        },
        {
          code: 917004,
          display: "Superior laryngeal aperture",
          
        },
        {
          code: 921006,
          display: "Thyrohyoid branch of ansa cervicalis",
          
        },
        {
          code: 947002,
          display: "Crus of diaphragm",
          
        },
        {
          code: 955009,
          display: "Bronchus",
          
        },
        {
          code: 976004,
          display: "Ovarian vein",
          
        },
        {
          code: 996007,
          display: "Meningeal branch of occipital artery",
          
        },
        {
          code: 1005009,
          display: "Entire diaphragmatic lymph node",
          
        },
        {
          code: 1012000,
          display: "Structure of fibrous portion of pericardium",
          
        },
        {
          code: 1015003,
          display: "Structure of peritonsillar tissue",
          
        },
        {
          code: 1028005,
          display: "Sebaceous gland structure",
          
        },
        {
          code: 1030007,
          display: "Structure of vesicular bursa of sternohyoid muscle",
          
        },
        {
          code: 1063000,
          display: "Frontozygomatic suture of skull",
          
        },
        {
          code: 1075005,
          display: "Promonocyte",
          
        },
        {
          code: 1076006,
          display: "Subcutaneous prepatellar bursa",
          
        },
        {
          code: 1086007,
          display: "Female",
          
        },
        {
          code: 1087003,
          display: "Sternothyroid muscle",
          
        },
        {
          code: 1092001,
          display: "Superior occipital gyrus",
          
        },
        {
          code: 1099005,
          display: "Thymic cortex",
          
        },
        {
          code: 1101003,
          display: "Cranial cavity",
          
        },
        {
          code: 1106008,
          display: "Major calyx",
          
        },
        {
          code: 1110006,
          display: "Tarsal gland",
          
        },
        {
          code: 1122009,
          display: "Inferior longitudinal muscle of tongue",
          
        },
        {
          code: 1136004,
          display: "Aortopulmonary septum",
          
        },
        {
          code: 1159005,
          display: "Frenulum linguae",
          
        },
        {
          code: 1172006,
          display: "Odontoid process of axis",
          
        },
        {
          code: 1173001,
          display: "Mandibular nerve",
          
        },
        {
          code: 1174007,
          display: "Chromosomes, group E",
          
        },
        {
          code: 1193009,
          display: "Teres major muscle",
          
        },
        {
          code: 1216008,
          display: "Synostosis",
          
        },
        {
          code: 1231004,
          display: "Central nervous system meninges",
          
        },
        {
          code: 1236009,
          display: "Duodenal serosa",
          
        },
        {
          code: 1243003,
          display: "Inferior articular process of sixth cervical vertebra",
          
        },
        {
          code: 1246006,
          display: "Dorsal digital nerves of radial nerve",
          
        },
        {
          code: 1263005,
          display: "Distinctive arrangement of microtubules",
          
        },
        {
          code: 1277008,
          display: "Vertebral nerve",
          
        },
        {
          code: 1307006,
          display: "Glottis",
          
        },
        {
          code: 1311000,
          display: "Telogen hair",
          
        },
        {
          code: 1350001,
          display: "Deep flexor tendon of index finger",
          
        },
        {
          code: 1353004,
          display: "Gastric serosa",
          
        },
        {
          code: 1403006,
          display: "Vastus lateralis muscle",
          
        },
        {
          code: 1425000,
          display: "Posterior limb of stapes",
          
        },
        {
          code: 1439000,
          display: "Paravesicular lymph node",
          
        },
        {
          code: 1441004,
          display: "Laryngeal saccule",
          
        },
        {
          code: 1456008,
          display: "Yellow fibrocartilage",
          
        },
        {
          code: 1467009,
          display: "Parietal branch of superficial temporal artery",
          
        },
        {
          code: 1484003,
          display: "Structure of metatarsal region of foot",
          
        },
        {
          code: 1490004,
          display: "Soft tissues of trunk",
          
        },
        {
          code: 1502004,
          display: "Anterior cecal artery",
          
        },
        {
          code: 1511004,
          display: "Ejaculatory duct",
          
        },
        {
          code: 1516009,
          display: "Frontomental diameter of head",
          
        },
        {
          code: 1527006,
          display: "Lamina of fourth thoracic vertebra",
          
        },
        {
          code: 1537001,
          display: "Intervertebral disc of eleventh thoracic vertebra",
          
        },
        {
          code: 1541002,
          display: "Coccygeal plexus",
          
        },
        {
          code: 1562001,
          display: "Nucleus pulposus of intervertebral disc of third lumbar vertebra",
          
        },
        {
          code: 1569005,
          display: "Nail of third toe",
          
        },
        {
          code: 1580005,
          display: "Nucleus ventralis lateralis",
          
        },
        {
          code: 1581009,
          display: "Ileal artery",
          
        },
        {
          code: 1584001,
          display: "Symphysis",
          
        },
        {
          code: 1600003,
          display: "Splenius capitis muscle",
          
        },
        {
          code: 1605008,
          display: "Histioblast",
          
        },
        {
          code: 1610007,
          display: "Otoconia",
          
        },
        {
          code: 1611006,
          display: "Paramammary lymph node",
          
        },
        {
          code: 1617005,
          display: "Intrinsic larynx",
          
        },
        {
          code: 1620002,
          display: "Metaphase nucleus",
          
        },
        {
          code: 1626008,
          display: "Third thoracic vertebra",
          
        },
        {
          code: 1627004,
          display: "Medial collateral ligament of knee joint",
          
        },
        {
          code: 1630006,
          display: "Supraorbital vein",
          
        },
        {
          code: 1631005,
          display: "Foregut",
          
        },
        {
          code: 1650005,
          display: "Hilum of left lung",
          
        },
        {
          code: 1655000,
          display: "Transverse peduncular tract nucleus",
          
        },
        {
          code: 1659006,
          display: "Nucleus medialis dorsalis",
          
        },
        {
          code: 1684009,
          display: "Ligamentum teres of liver",
          
        },
        {
          code: 1706004,
          display: "Thymic lobule",
          
        },
        {
          code: 1707008,
          display: "Ventral nuclear group of thalamus",
          
        },
        {
          code: 1711002,
          display: "Periorbital region",
          
        },
        {
          code: 1716007,
          display: "Cupula ampullaris",
          
        },
        {
          code: 1721005,
          display: "Right tonsil",
          
        },
        {
          code: 1729007,
          display: "Central tegmental tract",
          
        },
        {
          code: 1732005,
          display: "TD - Thoracic duct",
          
        },
        {
          code: 1765002,
          display: "Structure of lymphatic vessel of thorax",
          
        },
        {
          code: 1780008,
          display: "Premelanosome",
          
        },
        {
          code: 1781007,
          display: "Sacroiliac region",
          
        },
        {
          code: 1797002,
          display: "Naris",
          
        },
        {
          code: 1818002,
          display: "Greater circulus arteriosus of iris",
          
        },
        {
          code: 1825009,
          display: "Root of nose",
          
        },
        {
          code: 1832000,
          display: "Scleral conjunctiva",
          
        },
        {
          code: 1840006,
          display: "Arrector pili muscle",
          
        },
        {
          code: 1849007,
          display: "Pharyngeal recess",
          
        },
        {
          code: 1853009,
          display: "Structure of suprahyoid muscle",
          
        },
        {
          code: 1874005,
          display: "Promontory lymph node",
          
        },
        {
          code: 1893007,
          display: "Joint of upper extremity",
          
        },
        {
          code: 1895000,
          display: "Musculophrenic vein",
          
        },
        {
          code: 1902009,
          display: "Skin of external ear",
          
        },
        {
          code: 1910005,
          display: "Ear",
          
        },
        {
          code: 1918003,
          display: "Suprarenal aorta",
          
        },
        {
          code: 1927002,
          display: "Left elbow",
          
        },
        {
          code: 1992003,
          display: "Porus acusticus internus",
          
        },
        {
          code: 1997009,
          display: "Cingulum dentis",
          
        },
        {
          code: 2010005,
          display: "Clavicular facet of scapula",
          
        },
        {
          code: 2020000,
          display: "Superior thoracic artery",
          
        },
        {
          code: 2031008,
          display: "Structure of anterior median fissure of spinal cord",
          
        },
        {
          code: 2033006,
          display: "Right fallopian tube",
          
        },
        {
          code: 2044003,
          display: "Vaginal nerves",
          
        },
        {
          code: 2048000,
          display: "Lingual tonsil",
          
        },
        {
          code: 2049008,
          display: "Chorionic villi",
          
        },
        {
          code: 2059009,
          display: "Skin of ear lobule",
          
        },
        {
          code: 2071003,
          display: "Reticular formation of spinal cord",
          
        },
        {
          code: 2076008,
          display: "Head of phalanx of hand",
          
        },
        {
          code: 2083001,
          display: "Nucleus ambiguus",
          
        },
        {
          code: 2095001,
          display: "Accessory sinus",
          
        },
        {
          code: 2123001,
          display: "Mammilloinfundibular nucleus",
          
        },
        {
          code: 2150006,
          display: "Urinary tract transitional epithelial cell",
          
        },
        {
          code: 2156000,
          display: "Glial cell",
          
        },
        {
          code: 2160002,
          display: "Ligamentum arteriosum",
          
        },
        {
          code: 2175005,
          display: "Pharyngeal cavity",
          
        },
        {
          code: 2182009,
          display: "Endometrial zona basalis",
          
        },
        {
          code: 2192001,
          display: "Clavicular part of pectoralis major muscle",
          
        },
        {
          code: 2205003,
          display: "Lamina of fifth thoracic vertebra",
          
        },
        {
          code: 2209009,
          display: "Cerebral basal surface",
          
        },
        {
          code: 2236006,
          display: "Lesser osseous pelvis",
          
        },
        {
          code: 2246008,
          display: "Type I hair cell",
          
        },
        {
          code: 2255006,
          display: "Subserosa",
          
        },
        {
          code: 2285001,
          display: "Structure of torcular Herophili",
          
        },
        {
          code: 2292006,
          display: "Structure of nasopharyngeal gland",
          
        },
        {
          code: 2302002,
          display: "Vein of the knee",
          
        },
        {
          code: 2305000,
          display: "Structure of spinous process of cervical vertebra",
          
        },
        {
          code: 2306004,
          display: "Structure of base of third metacarpal bone",
          
        },
        {
          code: 2327009,
          display: "Salivary seromucous gland",
          
        },
        {
          code: 2330002,
          display: "Structure of segmental bronchial branches",
          
        },
        {
          code: 2332005,
          display: "Metencephalon of foetus",
          
        },
        {
          code: 2334006,
          display: "Renal calyx",
          
        },
        {
          code: 2349003,
          display: "Structure of nasal suture of skull",
          
        },
        {
          code: 2372001,
          display: "Structure of medial surface of toe",
          
        },
        {
          code: 2383005,
          display: "Structure of papillary muscles of right ventricle",
          
        },
        {
          code: 2389009,
          display: "Structure of superior margin of adrenal gland",
          
        },
        {
          code: 2395005,
          display: "Structure of transverse facial artery",
          
        },
        {
          code: 2397002,
          display: "Structure of first metatarsal facet of medial cuneiform bone",
          
        },
        {
          code: 2400006,
          display: "Universal designation 21",
          
        },
        {
          code: 2402003,
          display: "Structure of dorsum of foot",
          
        },
        {
          code: 2421006,
          display: "Structure of submaxillary ganglion",
          
        },
        {
          code: 2433001,
          display: "Structure of digital tendon and tendon sheath of foot",
          
        },
        {
          code: 2436009,
          display: "Tunica intima of vein",
          
        },
        {
          code: 2453002,
          display: "Subcutaneous tissue structure of posterior surface of forearm",
          
        },
        {
          code: 2454008,
          display: "Structure of articular surface, third metacarpal, of second metacarpal bone",
          
        },
        {
          code: 2484000,
          display: "Skin structure of frenulum of clitoris",
          
        },
        {
          code: 2489005,
          display: "Structure of medial check ligament of eye",
          
        },
        {
          code: 2499000,
          display: "Entire cisterna pontis",
          
        },
        {
          code: 2502001,
          display: "Membrane of lysosome",
          
        },
        {
          code: 2504000,
          display: "Structure of pancreatic plexus",
          
        },
        {
          code: 2510000,
          display: "Femoral triangle structure",
          
        },
        {
          code: 2539000,
          display: "Structure of superior rectal artery",
          
        },
        {
          code: 2543001,
          display: "Structure of cuboid articular facet of fourth metatarsal bone",
          
        },
        {
          code: 2550002,
          display: "Bone structure of phalanx of thumb",
          
        },
        {
          code: 2577006,
          display: "Structure of gracilis muscle",
          
        },
        {
          code: 2579009,
          display: "Plasmablast",
          
        },
        {
          code: 2592007,
          display: "All extremities",
          
        },
        {
          code: 2600000,
          display: "Structure of flexor pollicis longus muscle tendon",
          
        },
        {
          code: 2620004,
          display: "Intervertebral disc structure of third thoracic vertebra",
          
        },
        {
          code: 2639009,
          display: "Neuroendocrine tissue",
          
        },
        {
          code: 2653009,
          display: "Structure of posterior thalamic radiation of internal capsule",
          
        },
        {
          code: 2666009,
          display: "Structure of semispinalis capitis muscle",
          
        },
        {
          code: 2672009,
          display: "Structure of anterior cutaneous branch of lumbosacral plexus",
          
        },
        {
          code: 2675006,
          display: "Structure of anterior ethmoidal artery",
          
        },
        {
          code: 2681003,
          display: "Structure of dorsal nerve of penis",
          
        },
        {
          code: 2682005,
          display: "Bladder mucosa",
          
        },
        {
          code: 2686008,
          display: "Structure of medial olfactory gyrus",
          
        },
        {
          code: 2687004,
          display: "Structure of Bowman space",
          
        },
        {
          code: 2695000,
          display: "Left maxillary sinus structure",
          
        },
        {
          code: 2703009,
          display: "Entire calcarine artery",
          
        },
        {
          code: 2712006,
          display: "Structure of capsule of ankle joint",
          
        },
        {
          code: 2718005,
          display: "Structure of apical foramen of tooth",
          
        },
        {
          code: 2726002,
          display: "Structure of fold for stapes",
          
        },
        {
          code: 2730004,
          display: "Entire vitelline vein of placenta",
          
        },
        {
          code: 2739003,
          display: "Endometrial structure",
          
        },
        {
          code: 2741002,
          display: "Structure of medial occipitotemporal gyrus",
          
        },
        {
          code: 2746007,
          display: "Circular layer of gastric muscularis",
          
        },
        {
          code: 2748008,
          display: "Spinal cord structure",
          
        },
        {
          code: 2759004,
          display: "Eccrine gland structure",
          
        },
        {
          code: 2771005,
          display: "Lamina propria of ureter",
          
        },
        {
          code: 2789006,
          display: "Apocrine gland structure",
          
        },
        {
          code: 2792005,
          display: "Structure of pars tensa of tympanic membrane",
          
        },
        {
          code: 2803000,
          display: "Structure of tendon sheath of popliteus muscle",
          
        },
        {
          code: 2810006,
          display: "Structure of cremasteric fascia",
          
        },
        {
          code: 2812003,
          display: "Structure of head of femur",
          
        },
        {
          code: 2824005,
          display: "Structure of spinous process of fourth thoracic vertebra",
          
        },
        {
          code: 2826007,
          display: "Structure of lamina of fourth lumbar vertebra",
          
        },
        {
          code: 2830005,
          display: "Structure of dorsal digital nerves of lateral hallux and medial second toe",
          
        },
        {
          code: 2839006,
          display: "Structure of perivesicular tissues of seminal vesicles",
          
        },
        {
          code: 2841007,
          display: "Renal artery structure",
          
        },
        {
          code: 2845003,
          display: "Structure of respiratory epithelium",
          
        },
        {
          code: 2848001,
          display: "Structure of superficial epigastric artery",
          
        },
        {
          code: 2855004,
          display: "Structure of accessory cephalic vein",
          
        },
        {
          code: 2861001,
          display: "Entire gland (organ)",
          
        },
        {
          code: 2894003,
          display: "Structure of posterior epiglottis",
          
        },
        {
          code: 2905008,
          display: "Structure of anterior ligament of uterus",
          
        },
        {
          code: 2909002,
          display: "Structure of posterior portion of diaphragmatic aspect of liver",
          
        },
        {
          code: 2920002,
          display: "Structure of facial nerve motor branch",
          
        },
        {
          code: 2922005,
          display: "Structure of posterior papillary muscle of left ventricle",
          
        },
        {
          code: 2923000,
          display: "Subcutaneous tissue structure of supraorbital area",
          
        },
        {
          code: 2954001,
          display: "Supernumerary deciduous tooth",
          
        },
        {
          code: 2969000,
          display: "Anatomical space structure",
          
        },
        {
          code: 2979003,
          display: "Bone structure of medial cuneiform",
          
        },
        {
          code: 2986006,
          display: "Structure of talar facet of navicular bone of foot",
          
        },
        {
          code: 2998001,
          display: "Entire right margin of uterus",
          
        },
        {
          code: 3003007,
          display: "Internal capsule anterior limb structure",
          
        },
        {
          code: 3008003,
          display: "White fibrocartilage",
          
        },
        {
          code: 3028004,
          display: "Transitional epithelial cell",
          
        },
        {
          code: 3039001,
          display: "Subcutaneous tissue structure of thigh",
          
        },
        {
          code: 3042007,
          display: "Structure of glomerular urinary pole",
          
        },
        {
          code: 3054007,
          display: "Structure of articular surface, metacarpal, of phalanx of thumb",
          
        },
        {
          code: 3055008,
          display: "Structure of bone marrow of vertebral body",
          
        },
        {
          code: 3056009,
          display: "Structure of anteroventral nucleus of thalamus",
          
        },
        {
          code: 3057000,
          display: "Nerve structure",
          
        },
        {
          code: 3058005,
          display: "PNS - Peripheral nervous system",
          
        },
        {
          code: 3062004,
          display: "Spinal arachnoid",
          
        },
        {
          code: 3068000,
          display: "Structure of seminal vesicle lumen",
          
        },
        {
          code: 3081007,
          display: "Mitochondrion in division",
          
        },
        {
          code: 3093003,
          display: "Structure of tendinous arch of pelvic fascia",
          
        },
        {
          code: 3100007,
          display: "Clinical crown of tooth",
          
        },
        {
          code: 3113001,
          display: "Structure of suprachoroidal space",
          
        },
        {
          code: 3117000,
          display: "Structure of dorsal surface of index finger",
          
        },
        {
          code: 3118005,
          display: "Structure of trabecula carnea of left ventricle",
          
        },
        {
          code: 3120008,
          display: "Pleural membrane structure",
          
        },
        {
          code: 3134008,
          display: "Structure of head of fourth metatarsal bone",
          
        },
        {
          code: 3138006,
          display: "Bone tissue",
          
        },
        {
          code: 3153003,
          display: "Structure of tractus olivocochlearis",
          
        },
        {
          code: 3156006,
          display: "Structure of obturator artery",
          
        },
        {
          code: 3159004,
          display: "Structure of costocervical trunk",
          
        },
        {
          code: 3169005,
          display: "Spinal nerve structure",
          
        },
        {
          code: 3178004,
          display: "Structure of raphe of soft palate",
          
        },
        {
          code: 3194006,
          display: "Endocardium of right atrium",
          
        },
        {
          code: 3198009,
          display: "Monostomatic sublingual gland",
          
        },
        {
          code: 3215002,
          display: "Subcutaneous tissue structure of nuchal region",
          
        },
        {
          code: 3222005,
          display: "All large arteries",
          
        },
        {
          code: 3227004,
          display: "Left coronary artery main stem",
          
        },
        {
          code: 3236000,
          display: "Structure of posterior segment of right upper lobe of lung",
          
        },
        {
          code: 3243006,
          display: "Structure of parametrial lymph node",
          
        },
        {
          code: 3255000,
          display: "Papillary area",
          
        },
        {
          code: 3262009,
          display: "Structure of root canal of tooth",
          
        },
        {
          code: 3279003,
          display: "Structure of pedicle of third cervical vertebra",
          
        },
        {
          code: 3295003,
          display: "Structure of ventral anterior nucleus of thalamus",
          
        },
        {
          code: 3301002,
          display: "Tectopontine fibers",
          
        },
        {
          code: 3302009,
          display: "Splenic branch of splenic artery",
          
        },
        {
          code: 3315000,
          display: "Structure of vestibulospinal tract",
          
        },
        {
          code: 3332001,
          display: "Occipitofrontal diameter of head",
          
        },
        {
          code: 3336003,
          display: "Haversian canal",
          
        },
        {
          code: 3341006,
          display: "Right lung structure",
          
        },
        {
          code: 3350008,
          display: "Entire right commissure of pulmonic valve",
          
        },
        {
          code: 3362007,
          display: "Intertragal incisure structure",
          
        },
        {
          code: 3366005,
          display: "Structure of anterior papillary muscle of left ventricle",
          
        },
        {
          code: 3370002,
          display: "Structure of supporting tissue of rectum",
          
        },
        {
          code: 3374006,
          display: "Secondary spermatocyte",
          
        },
        {
          code: 3377004,
          display: "Structure of agger nasi",
          
        },
        {
          code: 3382006,
          display: "Structure of rima oris",
          
        },
        {
          code: 3383001,
          display: "Nonsegmented basophil",
          
        },
        {
          code: 3394002,
          display: "Suboccipitobregmatic diameter of head",
          
        },
        {
          code: 3395001,
          display: "Structure of superior palpebral arch",
          
        },
        {
          code: 3396000,
          display: "Structure of mesogastrium",
          
        },
        {
          code: 3400000,
          display: "Cell of bone",
          
        },
        {
          code: 3409004,
          display: "Structure of lateral margin of forearm",
          
        },
        {
          code: 3417007,
          display: "Structure of rotator muscle",
          
        },
        {
          code: 3438001,
          display: "Deep lymphatic of upper extremity",
          
        },
        {
          code: 3444002,
          display: "Thalamostriate vein",
          
        },
        {
          code: 3447009,
          display: "Penetrated oocyte",
          
        },
        {
          code: 3460003,
          display: "Structure of anterodorsal nucleus of thalamus",
          
        },
        {
          code: 3462006,
          display: "Structure of commissure of tricuspid valve",
          
        },
        {
          code: 3471002,
          display: "Posterior midline of trunk",
          
        },
        {
          code: 3478008,
          display: "Structure of vastus medialis muscle",
          
        },
        {
          code: 3481003,
          display: "Structure of embryonic testis",
          
        },
        {
          code: 3488009,
          display: "Annulate lamella, cisternal lumen",
          
        },
        {
          code: 3490005,
          display: "Subcutaneous tissue structure of suboccipital region",
          
        },
        {
          code: 3524005,
          display: "Structure of lateral wall of mastoid antrum",
          
        },
        {
          code: 3538003,
          display: "Structure of capsule of proximal tibiofibular joint",
          
        },
        {
          code: 3541007,
          display: "Structure of dorsal metatarsal artery",
          
        },
        {
          code: 3553006,
          display: "Structure of thyroid capsule",
          
        },
        {
          code: 3556003,
          display: "Structure of dorsal nucleus of trapezoid body",
          
        },
        {
          code: 3563003,
          display: "Muscularis of ureter",
          
        },
        {
          code: 3572006,
          display: "Vertebral body",
          
        },
        {
          code: 3578005,
          display: "Structure of body of gallbladder",
          
        },
        {
          code: 3582007,
          display: "Structure of gastrophrenic ligament",
          
        },
        {
          code: 3584008,
          display: "T10 dorsal arch",
          
        },
        {
          code: 3594003,
          display: "Structure of straight part of longus colli muscle",
          
        },
        {
          code: 3608004,
          display: "Ischiococcygeus muscle",
          
        },
        {
          code: 3609007,
          display: "Structure of occipital branch of posterior auricular artery",
          
        },
        {
          code: 3646006,
          display: "Lamellipodium",
          
        },
        {
          code: 3663005,
          display: "Structure of tympanic ostium of Eustachian tube",
          
        },
        {
          code: 3665003,
          display: "Pelvic wall structure",
          
        },
        {
          code: 3670005,
          display: "Entire subpyloric lymph node",
          
        },
        {
          code: 3711007,
          display: "Great vessel",
          
        },
        {
          code: 3743007,
          display: "Structure of lateral thoracic artery",
          
        },
        {
          code: 3761003,
          display: "Structure of nucleus pulposus of intervertebral disc of first thoracic vertebra",
          
        },
        {
          code: 3766008,
          display: "Subcutaneous tissue structure of lower extremity",
          
        },
        {
          code: 3785006,
          display: "Entire dorsal metacarpal ligament",
          
        },
        {
          code: 3788008,
          display: "Structure of apical segment of right lower lobe of lung",
          
        },
        {
          code: 3789000,
          display: "Enteroendocrine cell",
          
        },
        {
          code: 3810000,
          display: "Septal cartilage structure",
          
        },
        {
          code: 3838008,
          display: "Structure of apex of coccyx",
          
        },
        {
          code: 3860006,
          display: "Structure of transplanted liver",
          
        },
        {
          code: 3865001,
          display: "Structure of interscapular region of back",
          
        },
        {
          code: 3867009,
          display: "Structure of dorsal surface of great toe",
          
        },
        {
          code: 3876002,
          display: "Subcutaneous tissue structure of femoral region",
          
        },
        {
          code: 3877006,
          display: "Structure of common carotid plexus",
          
        },
        {
          code: 3910004,
          display: "Subcutaneous tissue structure of lateral surface of fourth toe",
          
        },
        {
          code: 3916005,
          display: "Structure of occipital lymph node",
          
        },
        {
          code: 3924000,
          display: "Structure of pericardiophrenic artery",
          
        },
        {
          code: 3931001,
          display: "OW - Oval window",
          
        },
        {
          code: 3935005,
          display: "Head of tenth rib structure",
          
        },
        {
          code: 3937002,
          display: "Structure of entorhinal cortex",
          
        },
        {
          code: 3954005,
          display: "Lacrimal sac structure",
          
        },
        {
          code: 3956007,
          display: "Structure of fifth metatarsal articular facet of fourth metatarsal bone",
          
        },
        {
          code: 3959000,
          display: "Structure of rectus capitis muscle",
          
        },
        {
          code: 3960005,
          display: "Olfactory tract structure",
          
        },
        {
          code: 3964001,
          display: "Structure of gyrus of brain",
          
        },
        {
          code: 3966004,
          display: "Entire parietal branch of anterior cerebral artery",
          
        },
        {
          code: 3977005,
          display: "Subcutaneous tissue structure of concha",
          
        },
        {
          code: 3984002,
          display: "Deep vein of clitoris",
          
        },
        {
          code: 3989007,
          display: "Structure of medial globus pallidus",
          
        },
        {
          code: 4015004,
          display: "Chromosomes, group A",
          
        },
        {
          code: 4019005,
          display: "Posterior commissure of labium majorum",
          
        },
        {
          code: 4029003,
          display: "Eosinophilic progranulocyte",
          
        },
        {
          code: 4061004,
          display: "Lateral orbital wall",
          
        },
        {
          code: 4066009,
          display: "Structure of capsule of proximal interphalangeal joint of index finger",
          
        },
        {
          code: 4072009,
          display: "Structure of fourth coccygeal vertebra",
          
        },
        {
          code: 4081003,
          display: "Entire dorsal lingual vein",
          
        },
        {
          code: 4093007,
          display: "Structure of vagus nerve bronchial branch",
          
        },
        {
          code: 4111006,
          display: "Macula of the saccule",
          
        },
        {
          code: 4117005,
          display: "Lumbosacral spinal cord central canal structure",
          
        },
        {
          code: 4121003,
          display: "Structure of superior frontal sulcus",
          
        },
        {
          code: 4146003,
          display: "Structure of artery of extremity",
          
        },
        {
          code: 4148002,
          display: "Structure of palmar surface of little finger",
          
        },
        {
          code: 4150005,
          display: "Celiac nervous plexus structure",
          
        },
        {
          code: 4158003,
          display: "Abdominal aortic plexus structure",
          
        },
        {
          code: 4159006,
          display: "Hyparterial bronchus",
          
        },
        {
          code: 4180000,
          display: "Both lower extremities",
          
        },
        {
          code: 4193005,
          display: "Entire extensor tendon and tendon sheath of fifth toe",
          
        },
        {
          code: 4205002,
          display: "TÃ¼rk cell",
          
        },
        {
          code: 4212006,
          display: "Epithelial cells",
          
        },
        {
          code: 4215008,
          display: "Head of second rib structure",
          
        },
        {
          code: 4247003,
          display: "Bone structure of first metacarpal",
          
        },
        {
          code: 4258007,
          display: "Posterior tibial vein",
          
        },
        {
          code: 4268002,
          display: "Lateral spinorubral tract",
          
        },
        {
          code: 4276000,
          display: "Structure of inferior articular process of seventh cervical vertebra",
          
        },
        {
          code: 4281009,
          display: "Structure of middle portion of ileum",
          
        },
        {
          code: 4295007,
          display: "Structure of paracortical area of lymph node",
          
        },
        {
          code: 4303006,
          display: "Cartilage canal",
          
        },
        {
          code: 4312008,
          display: "Anterior midline of abdomen",
          
        },
        {
          code: 4317002,
          display: "Structure of spinalis muscle",
          
        },
        {
          code: 4328003,
          display: "Protoplasmic astrocyte",
          
        },
        {
          code: 4335006,
          display: "Upper jaw region",
          
        },
        {
          code: 4352005,
          display: "Structure of subchorionic space",
          
        },
        {
          code: 4358009,
          display: "Structure of lateral surface of little finger",
          
        },
        {
          code: 4360006,
          display: "Stratum spinosum structure",
          
        },
        {
          code: 4369007,
          display: "Small intestine mucous membrane structure",
          
        },
        {
          code: 4371007,
          display: "Structure of fourth metatarsal facet of lateral cuneiform bone",
          
        },
        {
          code: 4375003,
          display: "Structure of incisure of cartilaginous portion of auditory canal",
          
        },
        {
          code: 4377006,
          display: "Structure of parafascicular nucleus of thalamus",
          
        },
        {
          code: 4394008,
          display: "Scala vestibuli structure",
          
        },
        {
          code: 4402002,
          display: "Structure of anterior articular surface for talus",
          
        },
        {
          code: 4419000,
          display: "Tracheal submucosa",
          
        },
        {
          code: 4421005,
          display: "Cellular structures",
          
        },
        {
          code: 4430002,
          display: "Structure of clivus ossis sphenoidalis",
          
        },
        {
          code: 4432005,
          display: "Structure of ductus arteriosus",
          
        },
        {
          code: 4442007,
          display: "Dental arch structure",
          
        },
        {
          code: 4486002,
          display: "Structure of accessory sinus gland",
          
        },
        {
          code: 4524000,
          display: "Structure of subclavian plexus",
          
        },
        {
          code: 4527007,
          display: "Joint structure of lower extremity",
          
        },
        {
          code: 4537002,
          display: "Structure of internal medullary lamina of thalamus",
          
        },
        {
          code: 4548009,
          display: "Lamellated granule, as in surfactant-secreting cell",
          
        },
        {
          code: 4549001,
          display: "Entire vagus nerve parasympathetic fibers to liver, gallbladder, bile ducts and pancreas",
          
        },
        {
          code: 4566004,
          display: "Structure of tentorium cerebelli",
          
        },
        {
          code: 4573009,
          display: "Desmosome",
          
        },
        {
          code: 4578000,
          display: "Skin structure of posterior surface of thigh",
          
        },
        {
          code: 4583008,
          display: "Structure of splenius muscle of trunk",
          
        },
        {
          code: 4588004,
          display: "Structure of middle trunk of brachial plexus",
          
        },
        {
          code: 4596009,
          display: "Larynx structure",
          
        },
        {
          code: 4603002,
          display: "Structure of base of phalanx of foot",
          
        },
        {
          code: 4606005,
          display: "Tubercle of eighth rib structure",
          
        },
        {
          code: 4621004,
          display: "Structure of lesser tuberosity of humerus",
          
        },
        {
          code: 4624007,
          display: "Structure of lymphatic cord",
          
        },
        {
          code: 4647008,
          display: "Lipid droplet, homogeneous",
          
        },
        {
          code: 4651005,
          display: "Structure of tunica albuginea of corpus spongiosum",
          
        },
        {
          code: 4658004,
          display: "Skin structure of nuchal region",
          
        },
        {
          code: 4677002,
          display: "Basal lamina, inclusion in subepithelial location",
          
        },
        {
          code: 4703008,
          display: "Cardinal vein structure",
          
        },
        {
          code: 4717004,
          display: "Neutrophilic myelocyte",
          
        },
        {
          code: 4718009,
          display: "Entire venous plexus of the foramen ovale basis cranii",
          
        },
        {
          code: 4743003,
          display: "Structure of ventral sacrococcygeal ligament",
          
        },
        {
          code: 4755009,
          display: "Structure of medial surface of great toe",
          
        },
        {
          code: 4759003,
          display: "Structure of gemellus muscle",
          
        },
        {
          code: 4766002,
          display: "Structure of supracardinal vein",
          
        },
        {
          code: 4768001,
          display: "Structure of perineal nerve",
          
        },
        {
          code: 4774001,
          display: "Structure of phrenic nerve pericardial branch",
          
        },
        {
          code: 4775000,
          display: "Structure of ventral posterior inferior nucleus",
          
        },
        {
          code: 4799000,
          display: "Deiter cell",
          
        },
        {
          code: 4810005,
          display: "Structure of uterine venous plexus",
          
        },
        {
          code: 4812002,
          display: "Anterior tibial compartment structure",
          
        },
        {
          code: 4828007,
          display: "Femoral canal structure",
          
        },
        {
          code: 4840007,
          display: "Subcutaneous tissue structure of ring finger",
          
        },
        {
          code: 4843009,
          display: "Ampulla of semicircular duct",
          
        },
        {
          code: 4861000,
          display: "Structure of tuberculum impar",
          
        },
        {
          code: 4866005,
          display: "Constrictor muscle of pharynx structure",
          
        },
        {
          code: 4870002,
          display: "Structure of dorsal tegmental nuclei of midbrain",
          
        },
        {
          code: 4871003,
          display: "Lamina of modiolus of cochlea",
          
        },
        {
          code: 4881004,
          display: "Entire sublingual vein",
          
        },
        {
          code: 4888005,
          display: "Entire interlobular vein of kidney",
          
        },
        {
          code: 4897009,
          display: "Cell membrane, prokaryotic",
          
        },
        {
          code: 4905007,
          display: "Structure of uterovaginal plexus",
          
        },
        {
          code: 4906008,
          display: "Mastoid antrum structure",
          
        },
        {
          code: 4924005,
          display: "Cerebellar gracile lobule",
          
        },
        {
          code: 4942000,
          display: "Lower limb lymph node structure",
          
        },
        {
          code: 4954000,
          display: "Structure of radial notch of ulna",
          
        },
        {
          code: 4956003,
          display: "Subcutaneous tissue structure of back",
          
        },
        {
          code: 4958002,
          display: "Amygdaloid structure",
          
        },
        {
          code: 5001007,
          display: "Structure of superior temporal sulcus",
          
        },
        {
          code: 5023006,
          display: "Structure of yellow bone marrow",
          
        },
        {
          code: 5026003,
          display: "Structure of posterior surface of prostate",
          
        },
        {
          code: 5046008,
          display: "Structure of superficial dorsal veins of clitoris",
          
        },
        {
          code: 5068003,
          display: "Structure of obturator internus muscle ischial bursa",
          
        },
        {
          code: 5069006,
          display: "Structure of rugal column",
          
        },
        {
          code: 5076001,
          display: "Structure of infrasternal angle",
          
        },
        {
          code: 5115006,
          display: "Structure of posterior auricular vein",
          
        },
        {
          code: 5122003,
          display: "Entire angle of first rib",
          
        },
        {
          code: 5128004,
          display: "Lens zonules",
          
        },
        {
          code: 5140004,
          display: "Permanent upper right 6 tooth",
          
        },
        {
          code: 5192008,
          display: "Structure of intervertebral foramen of twelfth thoracic vertebra",
          
        },
        {
          code: 5194009,
          display: "Structure of epithelium of lens",
          
        },
        {
          code: 5195005,
          display: "Structure of right external carotid artery",
          
        },
        {
          code: 5204005,
          display: "Superior ileocecal recess",
          
        },
        {
          code: 5213007,
          display: "Frontal vein",
          
        },
        {
          code: 5225005,
          display: "Structure of uterine ostium of fallopian tube",
          
        },
        {
          code: 5228007,
          display: "Right cerebral hemisphere structure",
          
        },
        {
          code: 5229004,
          display: "Structure of mucosa of gallbladder",
          
        },
        {
          code: 5261000,
          display: "Structure of thoracic intervertebral disc",
          
        },
        {
          code: 5272005,
          display: "Skin structure of lateral portion of neck",
          
        },
        {
          code: 5279001,
          display: "Structure of foramen singulare",
          
        },
        {
          code: 5296000,
          display: "Structure of anterior mediastinal lymph node",
          
        },
        {
          code: 5324007,
          display: "Structure of superior pole of kidney",
          
        },
        {
          code: 5329002,
          display: "Bone structure of C4",
          
        },
        {
          code: 5336001,
          display: "Structure of inferior frontal gyrus",
          
        },
        {
          code: 5347008,
          display: "Synaptic specialization, cytoplasmic",
          
        },
        {
          code: 5362005,
          display: "Structure of median arcuate ligament of diaphragm",
          
        },
        {
          code: 5366008,
          display: "Hippocampal structure",
          
        },
        {
          code: 5379004,
          display: "Small intestine muscularis propria",
          
        },
        {
          code: 5382009,
          display: "Superior fascia of perineum",
          
        },
        {
          code: 5394000,
          display: "Uterine paracervical lymph node",
          
        },
        {
          code: 5398002,
          display: "Normal fat pad",
          
        },
        {
          code: 5403001,
          display: "Articular process of third lumbar vertebra",
          
        },
        {
          code: 5421003,
          display: "Sex chromosome Y",
          
        },
        {
          code: 5427004,
          display: "Apocrine intraepidermal duct",
          
        },
        {
          code: 5458003,
          display: "Deep artery of clitoris",
          
        },
        {
          code: 5459006,
          display: "Cardiac incisure of stomach",
          
        },
        {
          code: 5491007,
          display: "Lacrimal part of orbicularis oculi muscle",
          
        },
        {
          code: 5493005,
          display: "Metacarpophalangeal joint of little finger",
          
        },
        {
          code: 5498001,
          display: "Superior aberrant ductule of epididymis",
          
        },
        {
          code: 5501001,
          display: "Hyaloid artery",
          
        },
        {
          code: 5520004,
          display: "Subcutaneous tissue of chin",
          
        },
        {
          code: 5538001,
          display: "Tegmental portion of pons",
          
        },
        {
          code: 5542003,
          display: "Crista marginalis of tooth",
          
        },
        {
          code: 5544002,
          display: "Longitudinal layer of duodenal muscularis propria",
          
        },
        {
          code: 5560003,
          display: "Alveolar ridge mucous membrane",
          
        },
        {
          code: 5564007,
          display: "Singlet",
          
        },
        {
          code: 5574005,
          display: "Seventh costal cartilage",
          
        },
        {
          code: 5580002,
          display: "Tendon of supraspinatus muscle",
          
        },
        {
          code: 5597008,
          display: "Retina of right eye",
          
        },
        {
          code: 5611001,
          display: "Anulus fibrosus of intervertebral disc of fifth cervical vertebra",
          
        },
        {
          code: 5625000,
          display: "Navicular facet of intermediate cuneiform bone",
          
        },
        {
          code: 5627008,
          display: "Right visceral pleura",
          
        },
        {
          code: 5633004,
          display: "Muscular portion of interventricular septum",
          
        },
        {
          code: 5643001,
          display: "Canal of stomach",
          
        },
        {
          code: 5644007,
          display: "Fractured membrane P face",
          
        },
        {
          code: 5653000,
          display: "Inner surface of seventh rib",
          
        },
        {
          code: 5665001,
          display: "Retina",
          
        },
        {
          code: 5668004,
          display: "Lower digestive tract",
          
        },
        {
          code: 5677006,
          display: "Lenticular fasciculus",
          
        },
        {
          code: 5682004,
          display: "Subcutaneous tissue of upper extremity",
          
        },
        {
          code: 5696005,
          display: "Articular part of tubercle of ninth rib",
          
        },
        {
          code: 5697001,
          display: "Skin of lateral surface of finger",
          
        },
        {
          code: 5709001,
          display: "Multifidus muscles",
          
        },
        {
          code: 5713008,
          display: "Submandibular triangle",
          
        },
        {
          code: 5717009,
          display: "Temporal fossa",
          
        },
        {
          code: 5718004,
          display: "Tendon and tendon sheath of leg and ankle",
          
        },
        {
          code: 5727003,
          display: "Anterior cervical lymph node",
          
        },
        {
          code: 5742000,
          display: "Skin of forearm",
          
        },
        {
          code: 5751008,
          display: "Subcutaneous tissue of anterior portion of neck",
          
        },
        {
          code: 5769004,
          display: "Endocervical epithelium",
          
        },
        {
          code: 5780004,
          display: "Paradidymis",
          
        },
        {
          code: 5798000,
          display: "Diaphragm",
          
        },
        {
          code: 5802004,
          display: "Medium sized neuron",
          
        },
        {
          code: 5814007,
          display: "Angle of seventh rib",
          
        },
        {
          code: 5815008,
          display: "Superior rectus muscle",
          
        },
        {
          code: 5816009,
          display: "Duodenal fold",
          
        },
        {
          code: 5825003,
          display: "Substantia propria of sclera",
          
        },
        {
          code: 5828001,
          display: "Posterior cord of brachial plexus",
          
        },
        {
          code: 5847003,
          display: "Superior articular process of seventh cervical vertebra",
          
        },
        {
          code: 5854009,
          display: "Orbital plate of ethmoid bone",
          
        },
        {
          code: 5868002,
          display: "Serosa of urinary bladder",
          
        },
        {
          code: 5872003,
          display: "Subcutaneous tissue of lateral border of sole of foot",
          
        },
        {
          code: 5881009,
          display: "Tuberosity of distal phalanx of hand",
          
        },
        {
          code: 5882002,
          display: "Endothelial sieve plate",
          
        },
        {
          code: 5889006,
          display: "Articular surface, third metacarpal, of fourth metacarpal bone",
          
        },
        {
          code: 5890002,
          display: "Posterior cells of ethmoid sinus",
          
        },
        {
          code: 5893000,
          display: "Superior recess of tympanic membrane",
          
        },
        {
          code: 5898009,
          display: "Myotome",
          
        },
        {
          code: 5923009,
          display: "Articular process of twelfth thoracic vertebra",
          
        },
        {
          code: 5926001,
          display: "Bronchial lumen",
          
        },
        {
          code: 5928000,
          display: "Great cardiac vein",
          
        },
        {
          code: 5942008,
          display: "Tensor tympani muscle",
          
        },
        {
          code: 5943003,
          display: "Vestibular vein",
          
        },
        {
          code: 5944009,
          display: "Posterior palatine arch",
          
        },
        {
          code: 5948007,
          display: "Capsule of distal interphalangeal joint of third toe",
          
        },
        {
          code: 5951000,
          display: "Left wrist",
          
        },
        {
          code: 5953002,
          display: "Eighth rib",
          
        },
        {
          code: 5976004,
          display: "Subcutaneous tissue of eyelid",
          
        },
        {
          code: 5979006,
          display: "Episcleral artery",
          
        },
        {
          code: 5996007,
          display: "Chromosomes, group D",
          
        },
        {
          code: 6001004,
          display: "Quadratus lumborum muscle",
          
        },
        {
          code: 6004007,
          display: "Intervertebral disc of second thoracic vertebra",
          
        },
        {
          code: 6006009,
          display: "Circular layer of duodenal muscularis propria",
          
        },
        {
          code: 6009002,
          display: "Mesentery of ascending colon",
          
        },
        {
          code: 6013009,
          display: "Reticuloendothelial system",
          
        },
        {
          code: 6014003,
          display: "Penicilliary arteries",
          
        },
        {
          code: 6023000,
          display: "Heterolysosome",
          
        },
        {
          code: 6032003,
          display: "Columnar epithelial cell",
          
        },
        {
          code: 6046003,
          display: "Outer surface of third rib",
          
        },
        {
          code: 6050005,
          display: "Lacrimal vein",
          
        },
        {
          code: 6059006,
          display: "Metacarpophalangeal joint of middle finger",
          
        },
        {
          code: 6062009,
          display: "Deciduous mandibular right canine tooth",
          
        },
        {
          code: 6073002,
          display: "Ligament of left superior vena cava",
          
        },
        {
          code: 6074008,
          display: "Capsule of temporomandibular joint",
          
        },
        {
          code: 6076005,
          display: "Gastrointestinal subserosa",
          
        },
        {
          code: 6104005,
          display: "Subclavian nerve",
          
        },
        {
          code: 6105006,
          display: "Body of fifth thoracic vertebra",
          
        },
        {
          code: 6110005,
          display: "Facial nerve parasympathetic fibers",
          
        },
        {
          code: 6194002,
          display: "Nail of fourth toe",
          
        },
        {
          code: 6216007,
          display: "Postcapillary venule",
          
        },
        {
          code: 6217003,
          display: "Piriform recess",
          
        },
        {
          code: 6229007,
          display: "Os lacrimale",
          
        },
        {
          code: 6253001,
          display: "Sulcus terminalis cordis",
          
        },
        {
          code: 6268000,
          display: "Accessory phrenic nerves",
          
        },
        {
          code: 6269008,
          display: "Subcutaneous tissue of scalp",
          
        },
        {
          code: 6279005,
          display: "Skin of dorsal surface of finger",
          
        },
        {
          code: 6317000,
          display: "Posterior basal branch of left pulmonary artery",
          
        },
        {
          code: 6325003,
          display: "Aryepiglottic muscle",
          
        },
        {
          code: 6326002,
          display: "Fetal atloid articulation",
          
        },
        {
          code: 6335009,
          display: "Lymphoid follicle of stomach",
          
        },
        {
          code: 6359004,
          display: "Hair medulla",
          
        },
        {
          code: 6371005,
          display: "Lymphatics of thyroid gland",
          
        },
        {
          code: 6375001,
          display: "Cavernous portion of urethra",
          
        },
        {
          code: 6392005,
          display: "Coccygeal nerve",
          
        },
        {
          code: 6404004,
          display: "Ligamentum nuchae",
          
        },
        {
          code: 6413002,
          display: "Presymphysial lymph node",
          
        },
        {
          code: 6417001,
          display: "Medial malleolus",
          
        },
        {
          code: 6423006,
          display: "Supraspinatus muscle",
          
        },
        {
          code: 6424000,
          display: "Structure of radiating portion of cortical lobule of kidney",
          
        },
        {
          code: 6445007,
          display: "Mast cell",
          
        },
        {
          code: 6448009,
          display: "Posterior vagal trunk",
          
        },
        {
          code: 6450001,
          display: "Cytotrophoblast",
          
        },
        {
          code: 6472004,
          display: "Medial aspect of ovary",
          
        },
        {
          code: 6504002,
          display: "Glans clitoridis",
          
        },
        {
          code: 6511003,
          display: "Distal portion of circumflex branch of left coronary artery",
          
        },
        {
          code: 6530003,
          display: "Cardiac valve leaflet",
          
        },
        {
          code: 6533001,
          display: "Colonic haustra",
          
        },
        {
          code: 6538005,
          display: "Thyrocervical trunk",
          
        },
        {
          code: 6541001,
          display: "Anterior commissure of mitral valve",
          
        },
        {
          code: 6544009,
          display: "Gastrohepatic ligament",
          
        },
        {
          code: 6550004,
          display: "Angular incisure of stomach",
          
        },
        {
          code: 6551000,
          display: "Pollicis artery",
          
        },
        {
          code: 6553002,
          display: "Inferior nasal turbinate",
          
        },
        {
          code: 6564004,
          display: "Medial border of sole",
          
        },
        {
          code: 6566002,
          display: "Cerebellar hemisphere",
          
        },
        {
          code: 6572002,
          display: "Base of phalanx of middle finger",
          
        },
        {
          code: 6598008,
          display: "Lingual nerve",
          
        },
        {
          code: 6606008,
          display: "Structure of dorsal intercuneiform ligaments",
          
        },
        {
          code: 6608009,
          display: "Sphenoparietal sinus",
          
        },
        {
          code: 6620001,
          display: "Cuticle of nail",
          
        },
        {
          code: 6623004,
          display: "Sternal muscle",
          
        },
        {
          code: 6633007,
          display: "Right posterior cerebral artery",
          
        },
        {
          code: 6643005,
          display: "Right anterior cerebral artery",
          
        },
        {
          code: 6646002,
          display: "Anterior fossa of cranial cavity",
          
        },
        {
          code: 6649009,
          display: "Uterine subserosa",
          
        },
        {
          code: 6651008,
          display: "Central lobule of cerebellum",
          
        },
        {
          code: 6684008,
          display: "Articular facet of head of fibula",
          
        },
        {
          code: 6685009,
          display: "Right ankle",
          
        },
        {
          code: 6711001,
          display: "Arch of second lumbar vertebra",
          
        },
        {
          code: 6720005,
          display: "Femoral nerve lateral muscular branches",
          
        },
        {
          code: 6731002,
          display: "Pleural recess",
          
        },
        {
          code: 6739000,
          display: "Chorda tympani",
          
        },
        {
          code: 6742006,
          display: "Callosomarginal branch of anterior cerebral artery",
          
        },
        {
          code: 6750002,
          display: "Mitochondrial inclusion",
          
        },
        {
          code: 6757004,
          display: "Right knee",
          
        },
        {
          code: 6787005,
          display: "Tendon and tendon sheath of hand",
          
        },
        {
          code: 6789008,
          display: "Spermatozoa",
          
        },
        {
          code: 6799003,
          display: "Macula of utricle",
          
        },
        {
          code: 6805009,
          display: "Interstitial tissue of spleen",
          
        },
        {
          code: 6820003,
          display: "Obturator nerve anterior branch",
          
        },
        {
          code: 6828005,
          display: "Ligament of lumbosacral joint",
          
        },
        {
          code: 6829002,
          display: "Pars ciliaris of retina",
          
        },
        {
          code: 6834003,
          display: "Axial skeleton",
          
        },
        {
          code: 6841009,
          display: "Corticomedullary junction of kidney",
          
        },
        {
          code: 6844001,
          display: "Spore crystal",
          
        },
        {
          code: 6850006,
          display: "Secondary foot process",
          
        },
        {
          code: 6864006,
          display: "Leaf of epiglottis",
          
        },
        {
          code: 6866008,
          display: "Habenular commissure",
          
        },
        {
          code: 6871001,
          display: "Visceral pericardium",
          
        },
        {
          code: 6894000,
          display: "Medial surface of arm",
          
        },
        {
          code: 6902008,
          display: "Popliteal region",
          
        },
        {
          code: 6905005,
          display: "Subcutaneous tissue of medial surface of third toe",
          
        },
        {
          code: 6912001,
          display: "Lower alveolar ridge mucosa",
          
        },
        {
          code: 6914000,
          display: "Perivascular space",
          
        },
        {
          code: 6921000,
          display: "Right upper extremity",
          
        },
        {
          code: 6930008,
          display: "Jugular arch",
          
        },
        {
          code: 6944002,
          display: "Anterior labial veins",
          
        },
        {
          code: 6969002,
          display: "Lymphocytic tissue",
          
        },
        {
          code: 6975006,
          display: "Anterior myocardium",
          
        },
        {
          code: 6981003,
          display: "Posterior hypothalamic nucleus",
          
        },
        {
          code: 6987004,
          display: "Collateral sulcus",
          
        },
        {
          code: 6989001,
          display: "Thoracolumbar region of back",
          
        },
        {
          code: 6991009,
          display: "Subcutaneous tissue of jaw",
          
        },
        {
          code: 7035006,
          display: "Bile duct mucous membrane",
          
        },
        {
          code: 7050002,
          display: "Subcutaneous tissue of external genitalia",
          
        },
        {
          code: 7067009,
          display: "Right colic artery",
          
        },
        {
          code: 7076002,
          display: "Interstitial tissue of myocardium",
          
        },
        {
          code: 7083009,
          display: "Middle phalanx of index finger",
          
        },
        {
          code: 7090004,
          display: "Supraaortic branches",
          
        },
        {
          code: 7091000,
          display: "Ventral posterolateral nucleus of thalamus",
          
        },
        {
          code: 7099003,
          display: "Attachment plaque of desmosome or hemidesmosome",
          
        },
        {
          code: 7117004,
          display: "Fetal implantation site",
          
        },
        {
          code: 7121006,
          display: "Maxillary right second molar tooth",
          
        },
        {
          code: 7148007,
          display: "Anulus fibrosus of intervertebral disc of thoracic vertebra",
          
        },
        {
          code: 7149004,
          display: "False rib",
          
        },
        {
          code: 7154008,
          display: "Trigeminal ganglion sensory root",
          
        },
        {
          code: 7160008,
          display: "Base of metacarpal bone",
          
        },
        {
          code: 7167006,
          display: "Paraduodenal recess",
          
        },
        {
          code: 7173007,
          display: "Cauda equina",
          
        },
        {
          code: 7188002,
          display: "Gustatory pore",
          
        },
        {
          code: 7192009,
          display: "Isthmus tympani posticus",
          
        },
        {
          code: 7227003,
          display: "Hypoglossal nerve intrinsic tongue muscle branch",
          
        },
        {
          code: 7234001,
          display: "Inferior choroid vein",
          
        },
        {
          code: 7242000,
          display: "Appendiceal muscularis propria",
          
        },
        {
          code: 7275008,
          display: "Lymphatics of appendix and large intestine",
          
        },
        {
          code: 7295002,
          display: "Muscle of perineum",
          
        },
        {
          code: 7296001,
          display: "Deep inguinal ring",
          
        },
        {
          code: 7311008,
          display: "Anterior surface of arm",
          
        },
        {
          code: 7344002,
          display: "Lingual gyrus",
          
        },
        {
          code: 7345001,
          display: "Ciliary processes",
          
        },
        {
          code: 7347009,
          display: "Infratendinous olecranon bursa",
          
        },
        {
          code: 7362006,
          display: "Lymphatic of head",
          
        },
        {
          code: 7376007,
          display: "Left margin of uterus",
          
        },
        {
          code: 7378008,
          display: "Paraventricular nucleus of thalamus",
          
        },
        {
          code: 7384006,
          display: "Plantar calcaneocuboidal ligament",
          
        },
        {
          code: 7404008,
          display: "Anterior semicircular duct",
          
        },
        {
          code: 7435002,
          display: "Ovarian ligament",
          
        },
        {
          code: 7471001,
          display: "Lateral surface of sublingual gland",
          
        },
        {
          code: 7477002,
          display: "Lipid, crystalline",
          
        },
        {
          code: 7480001,
          display: "Iliotibial tract",
          
        },
        {
          code: 7494000,
          display: "Cerebellar lenticular nucleus",
          
        },
        {
          code: 7498002,
          display: "Plantar tarsal ligaments",
          
        },
        {
          code: 7507003,
          display: "Anterior ligament of head of fibula",
          
        },
        {
          code: 7524009,
          display: "Vasa vasorum",
          
        },
        {
          code: 7532001,
          display: "Vagus nerve parasympathetic fibers",
          
        },
        {
          code: 7554004,
          display: "Deep head of flexor pollicis brevis muscle",
          
        },
        {
          code: 7566005,
          display: "Mitotic cell in anaphase",
          
        },
        {
          code: 7569003,
          display: "Finger",
          
        },
        {
          code: 7591005,
          display: "Intervertebral disc space of eleventh thoracic vertebra",
          
        },
        {
          code: 7597009,
          display: "Subcutaneous tissue of vertex",
          
        },
        {
          code: 7605000,
          display: "Connexon",
          
        },
        {
          code: 7610001,
          display: "Tenth thoracic vertebra",
          
        },
        {
          code: 7629007,
          display: "Thalamoolivary tract",
          
        },
        {
          code: 7651004,
          display: "Intervenous tubercle of right atrium",
          
        },
        {
          code: 7652006,
          display: "Frenulum labii",
          
        },
        {
          code: 7657000,
          display: "Femoral artery",
          
        },
        {
          code: 7658005,
          display: "Subtendinous bursa of triceps brachii muscle",
          
        },
        {
          code: 7697002,
          display: "Pontine portion of medial longitudinal fasciculus",
          
        },
        {
          code: 7712004,
          display: "Subdural space of spinal region",
          
        },
        {
          code: 7726008,
          display: "Skin of medial surface of fifth toe",
          
        },
        {
          code: 7736000,
          display: "Posterior choroidal artery",
          
        },
        {
          code: 7742001,
          display: "Palatine duct",
          
        },
        {
          code: 7748002,
          display: "Skin appendage",
          
        },
        {
          code: 7755000,
          display: "Mesovarian margin of ovary",
          
        },
        {
          code: 7756004,
          display: "Lamina of third thoracic vertebra",
          
        },
        {
          code: 7764005,
          display: "Striate artery",
          
        },
        {
          code: 7769000,
          display: "Right foot",
          
        },
        {
          code: 7783003,
          display: "Sympathetic trunk spinal nerve branch",
          
        },
        {
          code: 7820009,
          display: "Lateral posterior nucleus of thalamus",
          
        },
        {
          code: 7829005,
          display: "Anterior surface of manubrium",
          
        },
        {
          code: 7832008,
          display: "Abdominal aorta",
          
        },
        {
          code: 7835005,
          display: "Posterior margin of nasal septum",
          
        },
        {
          code: 7840002,
          display: "Subcutaneous tissue of submental area",
          
        },
        {
          code: 7841003,
          display: "Macrocytic normochromic erythrocyte",
          
        },
        {
          code: 7844006,
          display: "Sternoclavicular joint",
          
        },
        {
          code: 7851002,
          display: "Intracranial subdural space",
          
        },
        {
          code: 7854005,
          display: "Mandibular canal",
          
        },
        {
          code: 7872004,
          display: "Myocardium of ventricle",
          
        },
        {
          code: 7874003,
          display: "Scapular region of back",
          
        },
        {
          code: 7880006,
          display: "Rhopheocytotic vesicle",
          
        },
        {
          code: 7884002,
          display: "Corneal corpuscle",
          
        },
        {
          code: 7885001,
          display: "Rotator cuff including muscles and tendons",
          
        },
        {
          code: 7892006,
          display: "Submucosa of anal canal",
          
        },
        {
          code: 7896009,
          display: "Occipital angle of parietal bone",
          
        },
        {
          code: 7911004,
          display: "Olivocerebellar fibers",
          
        },
        {
          code: 7925003,
          display: "Proximal phalanx of third toe",
          
        },
        {
          code: 7936005,
          display: "Ligament of diaphragm",
          
        },
        {
          code: 7944005,
          display: "Helper cell",
          
        },
        {
          code: 7954009,
          display: "Lamina propria of ethmoid sinus",
          
        },
        {
          code: 7967007,
          display: "First left aortic arch",
          
        },
        {
          code: 7986004,
          display: "Abdominopelvic portion of sympathetic nervous system",
          
        },
        {
          code: 7991003,
          display: "Skin of glans penis",
          
        },
        {
          code: 7999001,
          display: "Articulations of auditory ossicles",
          
        },
        {
          code: 8001006,
          display: "Mucous membrane of tongue",
          
        },
        {
          code: 8012006,
          display: "Anterior communicating artery",
          
        },
        {
          code: 8017000,
          display: "Inflow tract of right ventricle",
          
        },
        {
          code: 8024004,
          display: "Limitans nucleus",
          
        },
        {
          code: 8039003,
          display: "Subcutaneous acromial bursa",
          
        },
        {
          code: 8040001,
          display: "Superficial flexor tendon of little finger",
          
        },
        {
          code: 8045006,
          display: "Membrane-coating granule, amorphous",
          
        },
        {
          code: 8057002,
          display: "Lateral nuclei of globus pallidus",
          
        },
        {
          code: 8059004,
          display: "Pancreatic veins",
          
        },
        {
          code: 8067007,
          display: "Superficial circumflex iliac vein",
          
        },
        {
          code: 8068002,
          display: "Stratum lemnisci of corpora quadrigemina",
          
        },
        {
          code: 8079007,
          display: "Radial nerve",
          
        },
        {
          code: 8091003,
          display: "Intervertebral disc space of twelfth thoracic vertebra",
          
        },
        {
          code: 8100009,
          display: "Infundibulum of Fallopian tube",
          
        },
        {
          code: 8111001,
          display: "Intranuclear crystal",
          
        },
        {
          code: 8112008,
          display: "Hindgut",
          
        },
        {
          code: 8119004,
          display: "Delphian lymph node",
          
        },
        {
          code: 8128003,
          display: "Supraaortic valve area",
          
        },
        {
          code: 8133004,
          display: "Superior anastomotic vein",
          
        },
        {
          code: 8157004,
          display: "Vein of head",
          
        },
        {
          code: 8158009,
          display: "Interlobar duct of pancreas",
          
        },
        {
          code: 8159001,
          display: "Superior colliculus of corpora quadrigemina",
          
        },
        {
          code: 8160006,
          display: "Lateral striate arteries",
          
        },
        {
          code: 8161005,
          display: "Infraorbital nerve",
          
        },
        {
          code: 8165001,
          display: "Superior articular process of fifth thoracic vertebra",
          
        },
        {
          code: 8205005,
          display: "Wrist",
          
        },
        {
          code: 8225009,
          display: "Accessory atrioventricular bundle",
          
        },
        {
          code: 8242003,
          display: "Apical branch of right pulmonary artery",
          
        },
        {
          code: 8251006,
          display: "Osseous portion of Eustachian tube",
          
        },
        {
          code: 8264007,
          display: "Tunica interna of eyeball",
          
        },
        {
          code: 8265008,
          display: "Articular surface, metacarpal, of phalanx of hand",
          
        },
        {
          code: 8266009,
          display: "Small intestine serosa",
          
        },
        {
          code: 8279000,
          display: "Pelvic viscus",
          
        },
        {
          code: 8289001,
          display: "Below knee region",
          
        },
        {
          code: 8292002,
          display: "Interlobular arteries of liver",
          
        },
        {
          code: 8314003,
          display: "Mastoid fontanel of skull",
          
        },
        {
          code: 8334002,
          display: "Lumbar lymph node",
          
        },
        {
          code: 8356004,
          display: "Colic lymph node",
          
        },
        {
          code: 8361002,
          display: "Tunica intima",
          
        },
        {
          code: 8369000,
          display: "Sphincter pupillae muscle",
          
        },
        {
          code: 8373002,
          display: "Jugum of sphenoid bone",
          
        },
        {
          code: 8387002,
          display: "Lamina of eighth thoracic vertebra",
          
        },
        {
          code: 8389004,
          display: "Birth canal",
          
        },
        {
          code: 8412003,
          display: "Iliac fossa",
          
        },
        {
          code: 8415001,
          display: "Renal surface of adrenal gland",
          
        },
        {
          code: 8454000,
          display: "Joint of lumbar vertebra",
          
        },
        {
          code: 8464009,
          display: "Ligament of sacroiliac joint and pubic symphysis",
          
        },
        {
          code: 8482007,
          display: "Sinoatrial node branch of right coronary artery",
          
        },
        {
          code: 8483002,
          display: "Mesial surface of tooth",
          
        },
        {
          code: 8496001,
          display: "Obliquus capitis muscle",
          
        },
        {
          code: 8523001,
          display: "Inferior articular process of twelfth thoracic vertebra",
          
        },
        {
          code: 8546004,
          display: "Posterior intercavernous sinus",
          
        },
        {
          code: 8556000,
          display: "Lipid droplet",
          
        },
        {
          code: 8559007,
          display: "Juxtaintestinal lymph node",
          
        },
        {
          code: 8560002,
          display: "Interclavicular ligament",
          
        },
        {
          code: 8568009,
          display: "Abdominal lymph nodes",
          
        },
        {
          code: 8580001,
          display: "Both feet",
          
        },
        {
          code: 8595004,
          display: "Meissner's plexus",
          
        },
        {
          code: 8598002,
          display: "Acoustic nerve",
          
        },
        {
          code: 8600008,
          display: "Cricoid cartilage",
          
        },
        {
          code: 8603005,
          display: "Adductor hallucis muscle",
          
        },
        {
          code: 8604004,
          display: "Medulla oblongata fasciculus cuneatus",
          
        },
        {
          code: 8608001,
          display: "Right margin of heart",
          
        },
        {
          code: 8617001,
          display: "Zygomatic region of face",
          
        },
        {
          code: 8623006,
          display: "Transplanted ureter",
          
        },
        {
          code: 8629005,
          display: "Superior right pulmonary vein",
          
        },
        {
          code: 8640002,
          display: "Choroidal branches of posterior spinal artery",
          
        },
        {
          code: 8668003,
          display: "Glycogen vacuole",
          
        },
        {
          code: 8671006,
          display: "All toes",
          
        },
        {
          code: 8677005,
          display: "Body of right atrium",
          
        },
        {
          code: 8688004,
          display: "Lateral olfactory gyrus",
          
        },
        {
          code: 8695008,
          display: "Intervertebral foramen of second lumbar vertebra",
          
        },
        {
          code: 8710005,
          display: "Minor sublingual ducts",
          
        },
        {
          code: 8711009,
          display: "Periodontal tissues",
          
        },
        {
          code: 8714001,
          display: "Subcutaneous tissue of interdigital space of hand",
          
        },
        {
          code: 8752000,
          display: "Cavernous portion of internal carotid artery",
          
        },
        {
          code: 8770002,
          display: "Nail of second toe",
          
        },
        {
          code: 8775007,
          display: "Tendinous arch",
          
        },
        {
          code: 8784007,
          display: "Intranuclear body, granular with filamentous capsule",
          
        },
        {
          code: 8810002,
          display: "Corticomedullary junction of adrenal gland",
          
        },
        {
          code: 8814006,
          display: "Iliac tuberosity",
          
        },
        {
          code: 8815007,
          display: "Thenar and hypothenar spaces",
          
        },
        {
          code: 8820007,
          display: "Pedicle of eleventh thoracic vertebra",
          
        },
        {
          code: 8821006,
          display: "Peroneal artery",
          
        },
        {
          code: 8827005,
          display: "Shaft of phalanx of middle finger",
          
        },
        {
          code: 8839002,
          display: "Agranular endoplasmic reticulum, connection with other organelle",
          
        },
        {
          code: 8845005,
          display: "Subtendinous prepatellar bursa",
          
        },
        {
          code: 8850004,
          display: "Proper fasciculus",
          
        },
        {
          code: 8854008,
          display: "Crista galli",
          
        },
        {
          code: 8862000,
          display: "Palmar surface of middle finger",
          
        },
        {
          code: 8873007,
          display: "Mandibular right second premolar tooth",
          
        },
        {
          code: 8887007,
          display: "Brachiocephalic vein",
          
        },
        {
          code: 8892009,
          display: "Diaphragmatic surface of lung",
          
        },
        {
          code: 8894005,
          display: "Gastric cardiac gland",
          
        },
        {
          code: 8897003,
          display: "Lateral glossoepiglottic fold",
          
        },
        {
          code: 8907008,
          display: "Left ulnar artery",
          
        },
        {
          code: 8910001,
          display: "Inferior transverse scapular ligament",
          
        },
        {
          code: 8911002,
          display: "Endocardium of right ventricle",
          
        },
        {
          code: 8928004,
          display: "Inguinal lymph node",
          
        },
        {
          code: 8931003,
          display: "Coracoid process of scapula",
          
        },
        {
          code: 8935007,
          display: "Cerebral meninges",
          
        },
        {
          code: 8942007,
          display: "Trapezoid ligament",
          
        },
        {
          code: 8965002,
          display: "Stratum zonale of corpora quadrigemina",
          
        },
        {
          code: 8966001,
          display: "Left eye",
          
        },
        {
          code: 8983005,
          display: "Joint structure of vertebral column",
          
        },
        {
          code: 8988001,
          display: "Marginal part of orbicularis oris muscle",
          
        },
        {
          code: 8993003,
          display: "Hepatic vein",
          
        },
        {
          code: 9000002,
          display: "Cerebellar peduncle",
          
        },
        {
          code: 9003000,
          display: "Left parietal lobe",
          
        },
        {
          code: 9018004,
          display: "Middle colic vein",
          
        },
        {
          code: 9040008,
          display: "Ascending colon",
          
        },
        {
          code: 9055004,
          display: "Both forearms",
          
        },
        {
          code: 9073001,
          display: "White matter of insula",
          
        },
        {
          code: 9081000,
          display: "Splenic sinusoids",
          
        },
        {
          code: 9086005,
          display: "Superior laryngeal vein",
          
        },
        {
          code: 9089003,
          display: "Arch of foot",
          
        },
        {
          code: 9108007,
          display: "Vein of the scala tympani",
          
        },
        {
          code: 9127001,
          display: "Transverse folds of palate",
          
        },
        {
          code: 9156001,
          display: "Embryo stage 1",
          
        },
        {
          code: 9181003,
          display: "Accessory carpal bone",
          
        },
        {
          code: 9185007,
          display: "Capsule of metatarsophalangeal joint of fifth toe",
          
        },
        {
          code: 9186008,
          display: "Filaments of contractile apparatus",
          
        },
        {
          code: 9188009,
          display: "Intervertebral disc of eighth thoracic vertebra",
          
        },
        {
          code: 9208002,
          display: "Centriole",
          
        },
        {
          code: 9212008,
          display: "Shaft of fifth metatarsal bone",
          
        },
        {
          code: 9229006,
          display: "Rotatores lumborum muscles",
          
        },
        {
          code: 9231002,
          display: "External pudendal veins",
          
        },
        {
          code: 9240003,
          display: "Niemann-Pick cell",
          
        },
        {
          code: 9242006,
          display: "Posterior segment of right lobe of liver",
          
        },
        {
          code: 9258009,
          display: "Gravid uterus",
          
        },
        {
          code: 9261005,
          display: "Tendon and tendon sheath of second toe",
          
        },
        {
          code: 9262003,
          display: "Fascia of pelvis",
          
        },
        {
          code: 9284003,
          display: "Corpus cavernosum of penis",
          
        },
        {
          code: 9290004,
          display: "Posterior intraoccipital synchondrosis",
          
        },
        {
          code: 9305001,
          display: "Labial veins",
          
        },
        {
          code: 9317004,
          display: "Merkel's tactile disc",
          
        },
        {
          code: 9320007,
          display: "Subtendinous iliac bursa",
          
        },
        {
          code: 9321006,
          display: "Tail of epididymis",
          
        },
        {
          code: 9325002,
          display: "Interdental papilla of gingiva",
          
        },
        {
          code: 9332006,
          display: "Lateral ligament of temporomandibular joint",
          
        },
        {
          code: 9348007,
          display: "Skin of medial surface of middle finger",
          
        },
        {
          code: 9379006,
          display: "Permanent teeth",
          
        },
        {
          code: 9380009,
          display: "Pecten ani",
          
        },
        {
          code: 9384000,
          display: "Lumbar vein",
          
        },
        {
          code: 9390001,
          display: "Lymphatics of stomach",
          
        },
        {
          code: 9432007,
          display: "Plantar surface of fourth toe",
          
        },
        {
          code: 9438006,
          display: "Structure of deep cervical lymphatic vessel",
          
        },
        {
          code: 9454009,
          display: "Subclavian vein",
          
        },
        {
          code: 9455005,
          display: "Medial cartilaginous lamina of Eustachian tube",
          
        },
        {
          code: 9475001,
          display: "Amacrine cells of retina",
          
        },
        {
          code: 9481009,
          display: "Afferent glomerular arteriole",
          
        },
        {
          code: 9490002,
          display: "Pulmonary ligament",
          
        },
        {
          code: 9498009,
          display: "Head of metacarpal bone",
          
        },
        {
          code: 9502002,
          display: "Coronal depression of tooth",
          
        },
        {
          code: 9512009,
          display: "Calcaneocuboidal ligament",
          
        },
        {
          code: 9535007,
          display: "Pyramid of medulla oblongata",
          
        },
        {
          code: 9558005,
          display: "Facet for fifth costal cartilage of sternum",
          
        },
        {
          code: 9566001,
          display: "Duodenal lumen",
          
        },
        {
          code: 9568000,
          display: "Subcutaneous tissue of areola",
          
        },
        {
          code: 9596006,
          display: "Deep branch of ulnar nerve",
          
        },
        {
          code: 9609000,
          display: "Posterior process of nasal septal cartilage",
          
        },
        {
          code: 9625005,
          display: "Lanugo hair",
          
        },
        {
          code: 9642004,
          display: "Left superior vena cava",
          
        },
        {
          code: 9646001,
          display: "Superior transverse scapular ligament",
          
        },
        {
          code: 9654004,
          display: "Gastric mucous gland",
          
        },
        {
          code: 9659009,
          display: "Infraclavicular lymph nodes",
          
        },
        {
          code: 9662007,
          display: "Subcutaneous tissue of lower margin of nasal septum",
          
        },
        {
          code: 9668006,
          display: "Ciliary muscle",
          
        },
        {
          code: 9677004,
          display: "Head of second metatarsal bone",
          
        },
        {
          code: 9683001,
          display: "Melanocyte",
          
        },
        {
          code: 9684007,
          display: "Posterior scrotal branches of internal pudendal artery",
          
        },
        {
          code: 9708001,
          display: "Iliac fascia",
          
        },
        {
          code: 9732008,
          display: "Medial supraclavicular nerves",
          
        },
        {
          code: 9736006,
          display: "Right wrist",
          
        },
        {
          code: 9743000,
          display: "Tendon of index finger",
          
        },
        {
          code: 9758008,
          display: "Submucosa of tonsil",
          
        },
        {
          code: 9770007,
          display: "Genital tubercle",
          
        },
        {
          code: 9775002,
          display: "Left carotid sinus",
          
        },
        {
          code: 9779008,
          display: "Distinctive shape of mitochondrial cristae",
          
        },
        {
          code: 9783008,
          display: "Superficial lymphatics of thorax",
          
        },
        {
          code: 9791004,
          display: "Deep venous system of lower extremity",
          
        },
        {
          code: 9796009,
          display: "Skeletal muscle fiber, type IIb",
          
        },
        {
          code: 9813009,
          display: "Fascia of upper extremity",
          
        },
        {
          code: 9825007,
          display: "Proximal phalanx of little toe",
          
        },
        {
          code: 9837009,
          display: "Perforating branches of internal thoracic artery",
          
        },
        {
          code: 9840009,
          display: "Biparietal diameter of head",
          
        },
        {
          code: 9841008,
          display: "Interspinalis thoracis muscles",
          
        },
        {
          code: 9846003,
          display: "Right kidney",
          
        },
        {
          code: 9847007,
          display: "Hilum of adrenal gland",
          
        },
        {
          code: 9849005,
          display: "Fornix of lacrimal sac",
          
        },
        {
          code: 9870004,
          display: "Carunculae hymenales",
          
        },
        {
          code: 9875009,
          display: "Thymus",
          
        },
        {
          code: 9878006,
          display: "Appendicular vein",
          
        },
        {
          code: 9880000,
          display: "Thyroid tubercle",
          
        },
        {
          code: 9881001,
          display: "Peripheral nerve myelinated nerve fiber",
          
        },
        {
          code: 9891007,
          display: "Transverse arytenoid muscle",
          
        },
        {
          code: 9898001,
          display: "Paracentral lobule",
          
        },
        {
          code: 9951005,
          display: "Posterior ethmoidal nerve",
          
        },
        {
          code: 9968009,
          display: "Primary foot process",
          
        },
        {
          code: 9970000,
          display: "Ileocecal ostium",
          
        },
        {
          code: 9976006,
          display: "Rhomboideus cervicis muscle",
          
        },
        {
          code: 9994000,
          display: "Superior articular process of sixth thoracic vertebra",
          
        },
        {
          code: 9999005,
          display: "Duodenal ampulla",
          
        },
        {
          code: 10013000,
          display: "Lateral meniscus of knee joint",
          
        },
        {
          code: 10024003,
          display: "Base of lung",
          
        },
        {
          code: 10025002,
          display: "Base of phalanx of index finger",
          
        },
        {
          code: 10026001,
          display: "Ventral spinocerebellar tract of pons",
          
        },
        {
          code: 10036009,
          display: "Nucleus pulposus of intervertebral disc of eighth thoracic vertebra",
          
        },
        {
          code: 10042008,
          display: "Intervertebral foramen of fifth thoracic vertebra",
          
        },
        {
          code: 10047002,
          display: "Transplanted lung",
          
        },
        {
          code: 10052007,
          display: "Male",
          
        },
        {
          code: 10056005,
          display: "Ophthalmic nerve",
          
        },
        {
          code: 10062000,
          display: "Levator labii superioris muscle",
          
        },
        {
          code: 10119003,
          display: "Deep volar arch of radial artery",
          
        },
        {
          code: 10124000,
          display: "Deep dorsal sacrococcygeal ligament",
          
        }
      ];

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

    const code = [
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
          
        },
        {
          code: 104001,
          display: "Excision of lesion of patella",
          
        },
        {
          code: 115006,
          display: "Fit removable orthodontic appliance",
          
        },
        {
          code: 119000,
          display: "Thoracoscopic partial lobectomy of lung",
          
        },
        {
          code: 121005,
          display: "Retrobulbar injection of therapeutic agent",
          
        },
        {
          code: 128004,
          display: "Hand microscope examination of skin",
          
        },
        {
          code: 133000,
          display: "Percutaneous implantation of neurostimulator electrodes into neuromuscular component",
          
        },
        {
          code: 135007,
          display: "Arthrotomy of wrist joint with exploration and biopsy",
          
        },
        {
          code: 142007,
          display: "Excision of tumor from shoulder area, deep, intramuscular",
          
        },
        {
          code: 146005,
          display: "Repair of nonunion of metatarsal with bone graft",
          
        },
        {
          code: 153001,
          display: "Cystourethroscopy with resection of ureterocele",
          
        },
        {
          code: 160007,
          display: "Removal of foreign body of tendon and/or tendon sheath",
          
        },
        {
          code: 166001,
          display: "Behavioral therapy",
          
        },
        {
          code: 170009,
          display: "Special potency disk identification, vancomycin test",
          
        },
        {
          code: 174000,
          display: "Harrison-Richardson operation on vagina",
          
        },
        {
          code: 176003,
          display: "Anastomosis of rectum",
          
        },
        {
          code: 189009,
          display: "Excision of lesion of artery",
          
        },
        {
          code: 197002,
          display: "Mold to yeast conversion test",
          
        },
        {
          code: 230009,
          display: "Miller operation, urethrovesical suspension",
          
        },
        {
          code: 243009,
          display: "Replacement of cerebral ventricular tube",
          
        },
        {
          code: 245002,
          display: "Division of nerve ganglion",
          
        },
        {
          code: 262007,
          display: "Percutaneous aspiration of renal pelvis",
          
        },
        {
          code: 267001,
          display: "Anal fistulectomy, multiple",
          
        },
        {
          code: 285008,
          display: "Incision and drainage of vulva",
          
        },
        {
          code: 294002,
          display: "Excisional biopsy of joint structure of spine",
          
        },
        {
          code: 295001,
          display: "Nonexcisional destruction of cyst of ciliary body",
          
        },
        {
          code: 306005,
          display: "US kidneys",
          
        },
        {
          code: 316002,
          display: "Partial dacryocystectomy",
          
        },
        {
          code: 334003,
          display: "Panorex examination of mandible",
          
        },
        {
          code: 342002,
          display: "Amobarbital interview",
          
        },
        {
          code: 346004,
          display: "Periodontal scaling and root planing, per quadrant",
          
        },
        {
          code: 348003,
          display: "Radionuclide dynamic function study",
          
        },
        {
          code: 351005,
          display: "Urinary undiversion of ureteral anastomosis",
          
        },
        {
          code: 352003,
          display: "Reagent RBC, preparation antibody sensitized pool",
          
        },
        {
          code: 353008,
          display: "IV/irrigation monitoring",
          
        },
        {
          code: 374009,
          display: "Costosternoplasty for pectus excavatum repair",
          
        },
        {
          code: 388008,
          display: "Blepharorrhaphy",
          
        },
        {
          code: 389000,
          display: "Tobramycin level",
          
        },
        {
          code: 401004,
          display: "Distal subtotal pancreatectomy",
          
        },
        {
          code: 406009,
          display: "Fulguration of stomach lesion",
          
        },
        {
          code: 417005,
          display: "Hospital re-admission",
          
        },
        {
          code: 435001,
          display: "Pulmonary inhalation study",
          
        },
        {
          code: 445004,
          display: "Repair of malunion of tibia",
          
        },
        {
          code: 456004,
          display: "Total abdominal colectomy with ileostomy",
          
        },
        {
          code: 459006,
          display: "Closed condylotomy of mandible",
          
        },
        {
          code: 463004,
          display: "Closed reduction of coxofemoral joint dislocation with splint",
          
        },
        {
          code: 468008,
          display: "Glutathione measurement",
          
        },
        {
          code: 474008,
          display: "Esophagoenteric anastomosis, intrathoracic",
          
        },
        {
          code: 489004,
          display: "Ferritin level",
          
        },
        {
          code: 493005,
          display: "Urobilinogen measurement, 48-hour, feces",
          
        },
        {
          code: 494004,
          display: "Excision of lesion of tonsil",
          
        },
        {
          code: 497006,
          display: "Replacement of cochlear prosthesis, multiple channels",
          
        },
        {
          code: 503003,
          display: "Corneal gluing",
          
        },
        {
          code: 531007,
          display: "Open pulmonary valve commissurotomy with inflow occlusion",
          
        },
        {
          code: 533005,
          display: "Repair of vesicocolic fistula",
          
        },
        {
          code: 535003,
          display: "Closure of ureterovesicovaginal fistula",
          
        },
        {
          code: 540006,
          display: "Antibody to single and double stranded DNA measurement",
          
        },
        {
          code: 543008,
          display: "Choledochostomy with transduodenal sphincteroplasty",
          
        },
        {
          code: 545001,
          display: "Operative procedure on lower leg",
          
        },
        {
          code: 549007,
          display: "Incision of intracranial vein",
          
        },
        {
          code: 550007,
          display: "Excision of lesion of adenoids",
          
        },
        {
          code: 559008,
          display: "Excision of varicose vein",
          
        },
        {
          code: 570001,
          display: "Vaccination for arthropod-borne viral encephalitis",
          
        },
        {
          code: 574005,
          display: "Benzodiazepine measurement",
          
        },
        {
          code: 603006,
          display: "Synchondrotomy",
          
        },
        {
          code: 617002,
          display: "Bone graft of mandible",
          
        },
        {
          code: 618007,
          display: "Frontal sinusectomy",
          
        },
        {
          code: 625000,
          display: "Removal of supernumerary digit",
          
        },
        {
          code: 628003,
          display: "Steinman test",
          
        },
        {
          code: 629006,
          display: "Lysis of adhesions of urethra",
          
        },
        {
          code: 633004,
          display: "Chart review by physician",
          
        },
        {
          code: 637003,
          display: "Lysis of adhesions of nose",
          
        },
        {
          code: 642006,
          display: "Cerebral thermography",
          
        },
        {
          code: 645008,
          display: "Diagnostic procedure on vitreous",
          
        },
        {
          code: 647000,
          display: "Excision of cervix by electroconization",
          
        },
        {
          code: 657004,
          display: "Operation on bursa",
          
        },
        {
          code: 665001,
          display: "Partial meniscectomy of temporomandibular joint",
          
        },
        {
          code: 670008,
          display: "Electrosurgical epilation of eyebrow",
          
        },
        {
          code: 671007,
          display: "Transplantation of testis",
          
        },
        {
          code: 673005,
          display: "Indirect examination of larynx",
          
        },
        {
          code: 674004,
          display: "Abduction test",
          
        },
        {
          code: 676002,
          display: "Peritoneal dialysis including cannulation",
          
        },
        {
          code: 680007,
          display: "Radiation physics consultation",
          
        },
        {
          code: 687005,
          display: "Albumin/Globulin ratio",
          
        },
        {
          code: 695009,
          display: "Destructive procedure of lesion on skin of trunk",
          
        },
        {
          code: 697001,
          display: "Hepatitis A virus antibody measurement",
          
        },
        {
          code: 710006,
          display: "Thromboendarterectomy with graft of mesenteric artery",
          
        },
        {
          code: 712003,
          display: "Closed chest suction",
          
        },
        {
          code: 721002,
          display: "Medical procedure on periurethral tissue",
          
        },
        {
          code: 722009,
          display: "Fine needle biopsy of thymus",
          
        },
        {
          code: 726007,
          display: "Pathology consultation, comprehensive, records and specimen with report",
          
        },
        {
          code: 730005,
          display: "Incision of subcutaneous tissue",
          
        },
        {
          code: 741007,
          display: "Operation on prostate",
          
        },
        {
          code: 746002,
          display: "Chiropractic adjustment of coccyx subluxation",
          
        },
        {
          code: 753006,
          display: "Manipulation of ankle AND foot",
          
        },
        {
          code: 754000,
          display: "Total urethrectomy",
          
        },
        {
          code: 759005,
          display: "Intracerebral electroencephalogram",
          
        },
        {
          code: 762008,
          display: "Computerized axial tomography of cervical spine with contrast",
          
        },
        {
          code: 764009,
          display: "Arthrodesis of interphalangeal joint of great toe",
          
        },
        {
          code: 767002,
          display: "White blood cell count - observation",
          
        },
        {
          code: 789003,
          display: "Cranial decompression, subtemporal, supratentorial",
          
        },
        {
          code: 791006,
          display: "Dressing and fixation procedure",
          
        },
        {
          code: 807005,
          display: "Excision of brain",
          
        },
        {
          code: 814007,
          display: "Electrophoresis measurement",
          
        },
        {
          code: 817000,
          display: "Excision of cyst of spleen",
          
        },
        {
          code: 831000,
          display: "Drawer test",
          
        },
        {
          code: 851001,
          display: "Root canal therapy, molar, excluding final restoration",
          
        },
        {
          code: 853003,
          display: "Fecal fat measurement, 72-hour collection",
          
        },
        {
          code: 867007,
          display: "Hypoglossofacial anastomosis",
          
        },
        {
          code: 870006,
          display: "Carbamazepine measurement",
          
        },
        {
          code: 879007,
          display: "Special blood coagulation test, explain by report",
          
        },
        {
          code: 881009,
          display: "Separation of ciliary body",
          
        },
        {
          code: 893000,
          display: "Tumor antigen measurement",
          
        },
        {
          code: 897004,
          display: "Radical maxillary antrotomy",
          
        },
        {
          code: 910002,
          display: "MHPG measurement, urine",
          
        },
        {
          code: 911003,
          display: "Removal of subarachnoid-ureteral shunt",
          
        },
        {
          code: 913000,
          display: "Chiropractic patient education",
          
        },
        {
          code: 926001,
          display: "Embolectomy with catheter of radial artery by arm incision",
          
        },
        {
          code: 935008,
          display: "Excision of bulbourethral gland",
          
        },
        {
          code: 941001,
          display: "Endoscopy of pituitary gland",
          
        },
        {
          code: 945005,
          display: "Excision of tibia and fibula for graft",
          
        },
        {
          code: 948007,
          display: "Phlebectomy of intracranial varicose vein",
          
        },
        {
          code: 951000,
          display: "Ultrasonic guidance for endomyocardial biopsy",
          
        },
        {
          code: 956005,
          display: "Anesthesia for procedure on thoracic esophagus",
          
        },
        {
          code: 967006,
          display: "Drug treatment education",
          
        },
        {
          code: 969009,
          display: "Incision and exploration of larynx",
          
        },
        {
          code: 971009,
          display: "Prosthetic construction and fitting",
          
        },
        {
          code: 1001000,
          display: "Cauterization of Bartholin's gland",
          
        },
        {
          code: 1008006,
          display: "Operation on nerve ganglion",
          
        },
        {
          code: 1019009,
          display: "Removal of corneal epithelium",
          
        },
        {
          code: 1021004,
          display: "Repair of scrotum",
          
        },
        {
          code: 1029002,
          display: "Fetoscopy",
          
        },
        {
          code: 1032004,
          display: "Enucleation of parotid gland cyst",
          
        },
        {
          code: 1035002,
          display: "Minimum bactericidal concentration test, microdilution method",
          
        },
        {
          code: 1036001,
          display: "Insertion of intravascular device in common iliac vein, complete",
          
        },
        {
          code: 1041009,
          display: "Debridement of open fracture of phalanges of foot",
          
        },
        {
          code: 1042002,
          display: "Paternity testing",
          
        },
        {
          code: 1043007,
          display: "Doppler color flow velocity mapping",
          
        },
        {
          code: 1044001,
          display: "Diagnostic ultrasound of abdomen and retroperitoneum",
          
        },
        {
          code: 1048003,
          display: "Capillary blood sampling",
          
        },
        {
          code: 1054002,
          display: "Sphincterotomy of papilla of Vater",
          
        },
        {
          code: 1071001,
          display: "Proximal splenorenal anastomosis",
          
        },
        {
          code: 1084005,
          display: "Excision of perinephric cyst",
          
        },
        {
          code: 1093006,
          display: "Excision of abdominal varicose vein",
          
        },
        {
          code: 1103000,
          display: "Transcrural mobilization of stapes",
          
        },
        {
          code: 1104006,
          display: "Triad knee repair",
          
        },
        {
          code: 1115001,
          display: "Decortication",
          
        },
        {
          code: 1119007,
          display: "Closed reduction of dislocation of foot and toe",
          
        },
        {
          code: 1121002,
          display: "Kinetic activities for range of motion",
          
        },
        {
          code: 1127003,
          display: "Interstitial radium application",
          
        },
        {
          code: 1133007,
          display: "Removal of intact mammary implant, bilateral",
          
        },
        {
          code: 1163003,
          display: "Ureteroenterostomy",
          
        },
        {
          code: 1176009,
          display: "Incision of inguinal region",
          
        },
        {
          code: 1181000,
          display: "Excision of tendon for graft",
          
        },
        {
          code: 1186005,
          display: "Anesthesia for procedure on bony pelvis",
          
        },
        {
          code: 1198000,
          display: "Excisional biopsy of bone of scapula",
          
        },
        {
          code: 1209007,
          display: "Arthroscopic repair lateral meniscus",
          
        },
        {
          code: 1225002,
          display: "Upper arm X-ray",
          
        },
        {
          code: 1227005,
          display: "Incision of subvalvular tissue for discrete subvalvular aortic stenosis",
          
        },
        {
          code: 1235008,
          display: "Muscle transfer",
          
        },
        {
          code: 1237000,
          display: "Application of cast, sugar tong",
          
        },
        {
          code: 1238005,
          display: "Epiphyseal arrest by stapling of distal radius",
          
        },
        {
          code: 1251000,
          display: "Incisional biopsy of testis",
          
        },
        {
          code: 1253002,
          display: "Refusion of spine",
          
        },
        {
          code: 1258006,
          display: "Excision of meniscus of wrist",
          
        },
        {
          code: 1266002,
          display: "Closure of tympanic membrane perforation",
          
        },
        {
          code: 1267006,
          display: "Electrocoagulation of lesion of vagina",
          
        },
        {
          code: 1278003,
          display: "Open reduction of closed shoulder dislocation with fracture of greater tuberosity",
          
        },
        {
          code: 1279006,
          display: "Repair of cardiac pacemaker pocket in skin AND/OR subcutaneous tissue",
          
        },
        {
          code: 1292009,
          display: "MRI of bladder",
          
        },
        {
          code: 1299000,
          display: "Excision of appendiceal stump",
          
        },
        {
          code: 1315009,
          display: "Reconstruction of eyebrow",
          
        },
        {
          code: 1316005,
          display: "Upper partial denture, cast metal base without resin saddles, including any conventional clasps, rests and teeth",
          
        },
        {
          code: 1324000,
          display: "Cerebrospinal fluid immunoglobulin G ratio and immunoglobulin G index",
          
        },
        {
          code: 1327007,
          display: "Procedure on Meckel diverticulum",
          
        },
        {
          code: 1328002,
          display: "Ilioiliac shunt",
          
        },
        {
          code: 1329005,
          display: "Division of congenital web of larynx",
          
        },
        {
          code: 1337002,
          display: "Colosigmoidostomy",
          
        },
        {
          code: 1339004,
          display: "Manual evacuation of feces",
          
        },
        {
          code: 1347004,
          display: "Medical procedure on palate",
          
        },
        {
          code: 1352009,
          display: "Anterior spinal rhizotomy",
          
        },
        {
          code: 1358008,
          display: "Anti-human globulin test, enzyme technique, titer",
          
        },
        {
          code: 1366004,
          display: "Breathing treatment",
          
        },
        {
          code: 1385001,
          display: "Echography, scan B-mode for foetal age determination",
          
        },
        {
          code: 1390003,
          display: "Laparoscopic sigmoid colectomy",
          
        },
        {
          code: 1398005,
          display: "Direct thrombectomy of iliac vein by leg incision",
          
        },
        {
          code: 1399002,
          display: "Incision and exploration of ureter",
          
        },
        {
          code: 1407007,
          display: "Application of long leg cast, brace type",
          
        },
        {
          code: 1410000,
          display: "Anesthesia for tympanotomy",
          
        },
        {
          code: 1411001,
          display: "Operation on papillary muscle of heart",
          
        },
        {
          code: 1413003,
          display: "Penetrating keratoplasty with homograft",
          
        },
        {
          code: 1414009,
          display: "Angiography of arteriovenous shunt",
          
        },
        {
          code: 1417002,
          display: "Operation on face",
          
        },
        {
          code: 1431002,
          display: "pexy",
          
        },
        {
          code: 1440003,
          display: "Repair with resection-recession",
          
        },
        {
          code: 1449002,
          display: "Removal of hair",
          
        },
        {
          code: 1453000,
          display: "Biofeedback, galvanic skin response",
          
        },
        {
          code: 1455007,
          display: "Cerclage",
          
        },
        {
          code: 1457004,
          display: "Truncal vagotomy with pyloroplasty and gastrostomy",
          
        },
        {
          code: 1494008,
          display: "Osmolarity measurement",
          
        },
        {
          code: 1500007,
          display: "Bilateral epididymovasostomy",
          
        },
        {
          code: 1501006,
          display: "Altemeier operation, perineal rectal pull-through",
          
        },
        {
          code: 1505002,
          display: "Hospital admission for isolation",
          
        },
        {
          code: 1529009,
          display: "Aspiration of soft tissue",
          
        },
        {
          code: 1533002,
          display: "Ureteroplication",
          
        },
        {
          code: 1550000,
          display: "Amikacin level",
          
        },
        {
          code: 1555005,
          display: "Brief group psychotherapy",
          
        },
        {
          code: 1559004,
          display: "Interleukin (IL)-2 assay",
          
        },
        {
          code: 1576000,
          display: "Repair of intestinouterine fistula",
          
        },
        {
          code: 1577009,
          display: "Implantation of cardiac single-chamber device replacement, rate-responsive",
          
        },
        {
          code: 1578004,
          display: "Reconstruction of ossicles with stapedectomy",
          
        },
        {
          code: 1583007,
          display: "Tractotomy of mesencephalon",
          
        },
        {
          code: 1585000,
          display: "Lengthening of gastrocnemius muscle",
          
        },
        {
          code: 1596008,
          display: "Anesthesia for total elbow replacement",
          
        },
        {
          code: 1597004,
          display: "Skeletal X-ray of ankle and foot",
          
        },
        {
          code: 1602006,
          display: "Social service interview with planning",
          
        },
        {
          code: 1614003,
          display: "Bilateral repair of inguinal hernia, direct",
          
        },
        {
          code: 1615002,
          display: "Reline upper partial denture, chairside",
          
        },
        {
          code: 1616001,
          display: "Galactosylceramide beta-galactosidase measurement, leukocytes",
          
        },
        {
          code: 1636000,
          display: "Injection of sclerosing agent in varicose vein",
          
        },
        {
          code: 1638004,
          display: "Cineplasty with cineplastic prosthesis of extremity",
          
        },
        {
          code: 1640009,
          display: "History and physical examination, insurance",
          
        },
        {
          code: 1645004,
          display: "Transduodenal sphincterotomy",
          
        },
        {
          code: 1651009,
          display: "Excision of tendon sheath",
          
        },
        {
          code: 1653007,
          display: "Internal fixation of bone without fracture reduction",
          
        },
        {
          code: 1669000,
          display: "Making occupied bed",
          
        },
        {
          code: 1677001,
          display: "Haagensen test",
          
        },
        {
          code: 1678006,
          display: "Endoscopic procedure of nerve",
          
        },
        {
          code: 1680000,
          display: "Secondary chemoprophylaxis",
          
        },
        {
          code: 1683003,
          display: "Direct closure of laceration of conjunctiva",
          
        },
        {
          code: 1689004,
          display: "Local excision of ovary",
          
        },
        {
          code: 1691007,
          display: "Drainage of abscess of tonsil",
          
        },
        {
          code: 1699009,
          display: "Special dosimetry",
          
        },
        {
          code: 1702002,
          display: "Labial veneer, resin laminate, laboratory",
          
        },
        {
          code: 1704001,
          display: "Correction of tibial pseudoarthrosis",
          
        },
        {
          code: 1709006,
          display: "Breast reconstruction, bilateral, with bilateral pedicle transverse rectus abdominis myocutaneous flaps",
          
        },
        {
          code: 1712009,
          display: "Immunoglobulin typing, immunoglobulin G",
          
        },
        {
          code: 1713004,
          display: "Hypothermia, total body, induction and maintenance",
          
        },
        {
          code: 1730002,
          display: "Suture of skin wound of hindfoot",
          
        },
        {
          code: 1746005,
          display: "Buckling of sclera using implant",
          
        },
        {
          code: 1747001,
          display: "Replacement of skeletal muscle stimulator",
          
        },
        {
          code: 1753001,
          display: "Resection of uveal tissue",
          
        },
        {
          code: 1757000,
          display: "Arthroscopy of wrist with partial synovectomy",
          
        },
        {
          code: 1759002,
          display: "Assessment of nutritional status",
          
        },
        {
          code: 1770009,
          display: "Mitral valvotomy",
          
        },
        {
          code: 1774000,
          display: "Nasopharyngeal rehabilitation",
          
        },
        {
          code: 1775004,
          display: "Submaxillary incision with drainage",
          
        },
        {
          code: 1784004,
          display: "Fecal stercobilin, qualitative",
          
        },
        {
          code: 1787006,
          display: "Ultrasonic guidance for pericardiocentesis",
          
        },
        {
          code: 1788001,
          display: "Blood unit collection for directed donation, donor",
          
        },
        {
          code: 1801001,
          display: "Endoscopic biopsy of duodenum",
          
        },
        {
          code: 1805005,
          display: "Take-down of stoma",
          
        },
        {
          code: 1811008,
          display: "Aspiration of bursa of hand",
          
        },
        {
          code: 1813006,
          display: "Cryotherapy of genital warts",
          
        },
        {
          code: 1820004,
          display: "Ethanol measurement, breath",
          
        },
        {
          code: 1830008,
          display: "Open reduction of open sacral fracture",
          
        },
        {
          code: 1836002,
          display: "Excision of diverticulum of ventricle of heart",
          
        },
        {
          code: 1844002,
          display: "Plication of ligament",
          
        },
        {
          code: 1854003,
          display: "Incision of nose",
          
        },
        {
          code: 1859008,
          display: "Hand tendon foreign body removed",
          
        },
        {
          code: 1861004,
          display: "Anesthesia for closed procedure on humerus and elbow",
          
        },
        {
          code: 1862006,
          display: "Thoracic phlebectomy",
          
        },
        {
          code: 1866009,
          display: "Bilateral total nephrectomy",
          
        },
        {
          code: 1868005,
          display: "FB - Removal of foreign body from brain",
          
        },
        {
          code: 1870001,
          display: "Insertion of halo device of skull with synchronous skeletal traction",
          
        },
        {
          code: 1871002,
          display: "Repair of aneurysm of coronary artery",
          
        },
        {
          code: 1872009,
          display: "Suture of male perineum",
          
        },
        {
          code: 1876007,
          display: "Recession of prognathic jaw",
          
        },
        {
          code: 1879000,
          display: "Fluorescent antigen measurement",
          
        },
        {
          code: 1889001,
          display: "Patient transfer, in-hospital, unit-to-unit",
          
        },
        {
          code: 1906007,
          display: "Insertion of prosthesis or prosthetic device of arm, bioelectric or cineplastic",
          
        },
        {
          code: 1907003,
          display: "Bifurcation of bone",
          
        },
        {
          code: 1917008,
          display: "Patient discharge, deceased, medicolegal case",
          
        },
        {
          code: 1924009,
          display: "Hepaticotomy with drainage",
          
        },
        {
          code: 1950008,
          display: "Drainage of nasal septal abscess",
          
        },
        {
          code: 1958001,
          display: "Grafting of bone of thumb with transfer of skin flap",
          
        },
        {
          code: 1966005,
          display: "Central block anesthesia",
          
        },
        {
          code: 1983001,
          display: "Total urethrectomy including cystostomy in female",
          
        },
        {
          code: 1995001,
          display: "Stripping of cerebral meninges",
          
        },
        {
          code: 1999007,
          display: "Psychologic test",
          
        },
        {
          code: 2002009,
          display: "Construction of subcutaneous tunnel without esophageal anastomosis",
          
        },
        {
          code: 2021001,
          display: "Internal fixation of radius and ulna without fracture reduction",
          
        },
        {
          code: 2051007,
          display: "Red cell iron utilization study",
          
        },
        {
          code: 2054004,
          display: "Barbiturates measurement, quantitative and qualitative",
          
        },
        {
          code: 2067001,
          display: "Implantation of electromagnetic hearing aid",
          
        },
        {
          code: 2069003,
          display: "Dental subperiosteal implant",
          
        },
        {
          code: 2078009,
          display: "Puncture of bursa of hand",
          
        },
        {
          code: 2079001,
          display: "Reimplantation of anomalous pulmonary artery",
          
        },
        {
          code: 2080003,
          display: "Angiectomy with anastomosis of lower limb artery",
          
        },
        {
          code: 2098004,
          display: "Open reduction of open mandibular fracture with external fixation",
          
        },
        {
          code: 2115003,
          display: "Dental prophylaxis, children",
          
        },
        {
          code: 2119009,
          display: "Repair of blood vessel",
          
        },
        {
          code: 2127000,
          display: "Reduction of closed sacral fracture",
          
        },
        {
          code: 2137005,
          display: "Excision of pericardial tumor",
          
        },
        {
          code: 2153008,
          display: "Cardiac catheterization education",
          
        },
        {
          code: 2161003,
          display: "Operation on vulva",
          
        },
        {
          code: 2164006,
          display: "Injection of aorta",
          
        },
        {
          code: 2166008,
          display: "Bicuspidization of aortic valve",
          
        },
        {
          code: 2171001,
          display: "Excision of tonsil tags",
          
        },
        {
          code: 2178007,
          display: "Ureterocentesis",
          
        },
        {
          code: 2181002,
          display: "Operation for bone injury of tarsals and metatarsals",
          
        },
        {
          code: 2188008,
          display: "Suture of tendon to skeletal attachment",
          
        },
        {
          code: 2193006,
          display: "Repair of ruptured aneurysm with graft of celiac artery",
          
        },
        {
          code: 2196003,
          display: "Gas liquid chromatography, electron capture type",
          
        },
        {
          code: 2199005,
          display: "Excision of lesion of cul-de-sac",
          
        },
        {
          code: 2214008,
          display: "Curette test of skin",
          
        },
        {
          code: 2220009,
          display: "Complement component assay",
          
        },
        {
          code: 2225004,
          display: "Sensititer system test",
          
        },
        {
          code: 2234009,
          display: "Proctosigmoidopexy",
          
        },
        {
          code: 2238007,
          display: "Stone operation, anoplasty",
          
        },
        {
          code: 2242005,
          display: "Reconstruction of eyelid",
          
        },
        {
          code: 2244006,
          display: "Arthroscopy of wrist with internal fixation for instability",
          
        },
        {
          code: 2250001,
          display: "Resection of ascending aorta with anastomosis",
          
        },
        {
          code: 2252009,
          display: "Hospital admission, urgent, 48 hours",
          
        },
        {
          code: 2266004,
          display: "Venography of adrenal, bilateral",
          
        },
        {
          code: 2267008,
          display: "Replacement of tracheostomy tube",
          
        },
        {
          code: 2270007,
          display: "Correction of cleft hand",
          
        },
        {
          code: 2276001,
          display: "Exploration of popliteal artery",
          
        },
        {
          code: 2278000,
          display: "Urinalysis, automated",
          
        },
        {
          code: 2279008,
          display: "Antibody detection, red blood cell, enzyme, 1 stage technique, including anti-human globulin",
          
        },
        {
          code: 2290003,
          display: "Microbial culture, anaerobic, initial isolation",
          
        },
        {
          code: 2315006,
          display: "Brain meninges operation",
          
        },
        {
          code: 2318008,
          display: "Anesthesia for cast procedure on forearm, wrist or hand",
          
        },
        {
          code: 2321005,
          display: "Delivery by Ritgen maneuver",
          
        },
        {
          code: 2322003,
          display: "Suture of recent wound of eyelid, direct closure, full-thickness",
          
        },
        {
          code: 2337004,
          display: "Adductor tenotomy",
          
        },
        {
          code: 2344008,
          display: "Complicated cystorrhaphy",
          
        },
        {
          code: 2347001,
          display: "Diagnostic model construction",
          
        },
        {
          code: 2364003,
          display: "Radical resection of tumor of soft tissue of wrist area",
          
        },
        {
          code: 2371008,
          display: "Tympanoplasty type II with graft against incus or malleus",
          
        },
        {
          code: 2373006,
          display: "Buffy coat smear evaluation",
          
        },
        {
          code: 2382000,
          display: "Application of breast pump",
          
        },
        {
          code: 2386002,
          display: "Closed reduction of dislocation of patella",
          
        },
        {
          code: 2393003,
          display: "Ligation of vein of lower limb",
          
        },
        {
          code: 2406000,
          display: "Chart periodontal pocket",
          
        },
        {
          code: 2407009,
          display: "Excision of mediastinal tumor",
          
        },
        {
          code: 2408004,
          display: "Hexosaminidase A and total hexosaminidase measurement, serum",
          
        },
        {
          code: 2409007,
          display: "Replantation of toe",
          
        },
        {
          code: 2425002,
          display: "Epstein-Barr virus serologic test",
          
        },
        {
          code: 2442008,
          display: "Incision of lacrimal canaliculus",
          
        },
        {
          code: 2448007,
          display: "Cell count of synovial fluid with differential count",
          
        },
        {
          code: 2455009,
          display: "Revision of lumbosubarachnoid shunt",
          
        },
        {
          code: 2457001,
          display: "Blind rehabilitation",
          
        },
        {
          code: 2458006,
          display: "Educational therapy",
          
        },
        {
          code: 2459003,
          display: "Destructive procedure of artery of upper extremity",
          
        },
        {
          code: 2461007,
          display: "Tennis elbow test",
          
        },
        {
          code: 2474001,
          display: "Repair of malunion of metatarsal bones",
          
        },
        {
          code: 2475000,
          display: "Twenty-four hour collection of urine",
          
        },
        {
          code: 2480009,
          display: "Debridement of skin, subcutaneous tissue, muscle and bone",
          
        },
        {
          code: 2486003,
          display: "Destructive procedure of breast",
          
        },
        {
          code: 2488002,
          display: "Provision of contact lens",
          
        },
        {
          code: 2494005,
          display: "Nurse to nurse communication",
          
        },
        {
          code: 2498008,
          display: "Rebase of upper partial denture",
          
        },
        {
          code: 2507007,
          display: "5' Nucleotidase measurement",
          
        },
        {
          code: 2508002,
          display: "Retrograde urography with kidney-ureter-bladder",
          
        },
        {
          code: 2514009,
          display: "Manual reduction of closed supracondylar fracture of humerus with traction",
          
        },
        {
          code: 2517002,
          display: "Stroke rehabilitation",
          
        },
        {
          code: 2530001,
          display: "Chiropractic visit",
          
        },
        {
          code: 2531002,
          display: "Mononuclear cell function assay",
          
        },
        {
          code: 2535006,
          display: "Removal of pulp - complete",
          
        },
        {
          code: 2536007,
          display: "Injection of medication in anterior chamber of eye",
          
        },
        {
          code: 2547000,
          display: "Excision of keloid",
          
        },
        {
          code: 2552005,
          display: "Incision of cerebral subarachnoid space",
          
        },
        {
          code: 2564002,
          display: "Creation of lumbar shunt including laminectomy",
          
        },
        {
          code: 2566000,
          display: "Osteoplasty of radius",
          
        },
        {
          code: 2567009,
          display: "Resection of rib by transaxillary approach",
          
        },
        {
          code: 2580007,
          display: "Transplant of hair follicles to scalp",
          
        },
        {
          code: 2598006,
          display: "Open heart surgery",
          
        },
        {
          code: 2601001,
          display: "Removal of bone flap of skull",
          
        },
        {
          code: 2607002,
          display: "Operation of supporting structures of uterus",
          
        },
        {
          code: 2613006,
          display: "Implantation of joint prosthesis of hand",
          
        },
        {
          code: 2614000,
          display: "Removal of ligature from fallopian tube",
          
        },
        {
          code: 2616003,
          display: "Repair of bifid digit of hand",
          
        },
        {
          code: 2619005,
          display: "Psychiatric interpretation to family or parents of patient",
          
        },
        {
          code: 2629003,
          display: "Intracranial/cerebral perfusion pressure monitoring",
          
        },
        {
          code: 2632000,
          display: "Incision and drainage of infected bursa of upper arm",
          
        },
        {
          code: 2642003,
          display: "Prefabricated post and core in addition to crown",
          
        },
        {
          code: 2643008,
          display: "Ligation of varicose vein of head and neck",
          
        },
        {
          code: 2644002,
          display: "Cauterization of liver",
          
        },
        {
          code: 2645001,
          display: "Intelligence test/WB1",
          
        },
        {
          code: 2646000,
          display: "Incision and exploration of vas deferens",
          
        },
        {
          code: 2658000,
          display: "Social service interview of patient",
          
        },
        {
          code: 2659008,
          display: "Suture of ligament of lower extremity",
          
        },
        {
          code: 2668005,
          display: "Recementation of space maintainer",
          
        },
        {
          code: 2670001,
          display: "Diagnostic procedure on cornea",
          
        },
        {
          code: 2673004,
          display: "Incision and drainage of masticator space by extraoral approach",
          
        },
        {
          code: 2677003,
          display: "Stripping",
          
        },
        {
          code: 2690005,
          display: "MRI of pelvis",
          
        },
        {
          code: 2693007,
          display: "Stool fat, quantitative measurement",
          
        },
        {
          code: 2696004,
          display: "Hepatic venography with hemodynamic evaluation",
          
        },
        {
          code: 2697008,
          display: "Stripping and ligation of great saphenous vein",
          
        },
        {
          code: 2716009,
          display: "Dermal-fat-fascia graft",
          
        },
        {
          code: 2722000,
          display: "Interleukin-3 assay",
          
        },
        {
          code: 2731000,
          display: "Serologic test for influenza virus A",
          
        },
        {
          code: 2732007,
          display: "Recession of tendon of hand",
          
        },
        {
          code: 2737001,
          display: "Exploratory craniotomy, infratentorial",
          
        },
        {
          code: 2742009,
          display: "Destruction of Bartholin's gland",
          
        },
        {
          code: 2743004,
          display: "Operative endoscopy of ileum",
          
        },
        {
          code: 2745006,
          display: "Epiplopexy",
          
        },
        {
          code: 2752008,
          display: "Incudopexy",
          
        },
        {
          code: 2780005,
          display: "Osteoplasty of facial bones",
          
        },
        {
          code: 2794006,
          display: "Cauterization of navel",
          
        },
        {
          code: 2802005,
          display: "Manual dilation and stretching",
          
        },
        {
          code: 2811005,
          display: "Cineradiography of pharynx",
          
        },
        {
          code: 2813008,
          display: "Nephroureterocystectomy",
          
        },
        {
          code: 2837008,
          display: "Transposition of ulnar nerve at elbow",
          
        },
        {
          code: 2842000,
          display: "Gas chromatography measurement",
          
        },
        {
          code: 2843005,
          display: "Revision of urinary conduit",
          
        },
        {
          code: 2847006,
          display: "Cervical myelography",
          
        },
        {
          code: 2851008,
          display: "Arthrotomy for synovectomy of sternoclavicular joint",
          
        },
        {
          code: 2854000,
          display: "Bursectomy of hand",
          
        },
        {
          code: 2857007,
          display: "Pinealectomy",
          
        },
        {
          code: 2866006,
          display: "Obliteration of lymphatic structure",
          
        },
        {
          code: 2875008,
          display: "Implantation of joint prosthesis of elbow",
          
        },
        {
          code: 2876009,
          display: "Hospital admission, type unclassified, explain by report",
          
        },
        {
          code: 2885009,
          display: "Intradermal allergen test",
          
        },
        {
          code: 2891006,
          display: "Arthroscopy of elbow with partial synovectomy",
          
        },
        {
          code: 2898000,
          display: "Deoxyribonucleic acid analysis, antenatal, blood",
          
        },
        {
          code: 2903001,
          display: "Diagnostic procedure on anterior chamber of eye",
          
        },
        {
          code: 2908005,
          display: "Cryotherapy to hemorrhoid",
          
        },
        {
          code: 2914003,
          display: "Anterior sclerotomy",
          
        },
        {
          code: 2915002,
          display: "Suture of capsule of ankle",
          
        },
        {
          code: 2933008,
          display: "Pneumogynecography",
          
        },
        {
          code: 2945004,
          display: "Suprapubic diverticulectomy of urinary bladder",
          
        },
        {
          code: 2947007,
          display: "Therapeutic compound measurement",
          
        },
        {
          code: 2960001,
          display: "Closure of fistula of uterine cervix",
          
        },
        {
          code: 2968008,
          display: "Craniectomy with treatment of penetrating wound of brain",
          
        },
        {
          code: 2970004,
          display: "Metacarpal lengthening and transfer of local flap",
          
        },
        {
          code: 2971000,
          display: "Closure of acquired urethrovaginal fistula",
          
        },
        {
          code: 2977001,
          display: "Thrombectomy of lower limb vein",
          
        },
        {
          code: 3001009,
          display: "Total lobectomy with bronchoplasty",
          
        },
        {
          code: 3010001,
          display: "Removal of silastic tubes from ear",
          
        },
        {
          code: 3016007,
          display: "Removal of Crutchfield tongs from skull",
          
        },
        {
          code: 3025001,
          display: "Calcitonin measurement",
          
        },
        {
          code: 3026000,
          display: "Tibiotalar arthrodesis",
          
        },
        {
          code: 3029007,
          display: "Peripheral nervous system disease rehabilitation",
          
        },
        {
          code: 3041000,
          display: "Repair of stomach",
          
        },
        {
          code: 3047001,
          display: "Kowa fundus photography",
          
        },
        {
          code: 3060007,
          display: "Forequarter amputation, right",
          
        },
        {
          code: 3061006,
          display: "Complete excision of nail AND nail matrix",
          
        },
        {
          code: 3063009,
          display: "Gastroscopy through artificial stoma",
          
        },
        {
          code: 3075004,
          display: "Nonoperative removal of prosthesis of bile duct",
          
        },
        {
          code: 3078002,
          display: "Embolectomy with catheter of renal artery by abdominal incision",
          
        },
        {
          code: 3083005,
          display: "Removal of device from thorax",
          
        },
        {
          code: 3088001,
          display: "Anesthesia for endoscopic procedure on upper extremity",
          
        },
        {
          code: 3090000,
          display: "Aneurysmectomy with graft replacement of lower limb artery",
          
        },
        {
          code: 3112006,
          display: "Restraint removal",
          
        },
        {
          code: 3116009,
          display: "Clotting screening",
          
        },
        {
          code: 3130004,
          display: "Monitoring of cardiac output by electrocardiogram",
          
        },
        {
          code: 3133002,
          display: "Patient discharge, deceased, autopsy",
          
        },
        {
          code: 3137001,
          display: "Replacement",
          
        },
        {
          code: 3143004,
          display: "Visual field examination and evaluation, intermediate",
          
        },
        {
          code: 3162001,
          display: "Gadolinium measurement",
          
        },
        {
          code: 3164000,
          display: "Open reduction of closed mandibular fracture with interdental fixation",
          
        },
        {
          code: 3165004,
          display: "Irrigation of muscle of hand",
          
        },
        {
          code: 3166003,
          display: "Closure of fistula of salivary gland",
          
        },
        {
          code: 3177009,
          display: "Internal obstetrical version",
          
        },
        {
          code: 3183007,
          display: "Closure of colostomy",
          
        },
        {
          code: 3186004,
          display: "Excision of Skene gland",
          
        },
        {
          code: 3190002,
          display: "Epilation by forceps",
          
        },
        {
          code: 3204007,
          display: "Destructive procedure of nerve",
          
        },
        {
          code: 3241008,
          display: "Correction of chordee with mobilization of urethra",
          
        },
        {
          code: 3249005,
          display: "Surgical construction of filtration bleb",
          
        },
        {
          code: 3251009,
          display: "Mayo operation, herniorrhaphy",
          
        },
        {
          code: 3256004,
          display: "Cervical lymphangiogram",
          
        },
        {
          code: 3257008,
          display: "Empty and measure peritoneal dialysis fluid",
          
        },
        {
          code: 3258003,
          display: "Cerebral arteriography",
          
        },
        {
          code: 3268008,
          display: "Transplantation of tissue of pelvic region",
          
        },
        {
          code: 3270004,
          display: "Implantation of neurostimulator in spine",
          
        },
        {
          code: 3278006,
          display: "Lysis of adhesions of bursa of hand",
          
        },
        {
          code: 3287002,
          display: "Cholecystogastrostomy",
          
        },
        {
          code: 3320000,
          display: "Abt - autologous blood transfusion",
          
        },
        {
          code: 3324009,
          display: "Laser beam photocoagulation",
          
        },
        {
          code: 3326006,
          display: "Excision of exostosis of head of fifth metatarsal",
          
        },
        {
          code: 3328007,
          display: "Incision of vein of head and neck",
          
        },
        {
          code: 3333006,
          display: "Application of short arm splint, forearm to hand, static",
          
        },
        {
          code: 3338002,
          display: "Open reduction of open radial shaft fracture",
          
        },
        {
          code: 3352000,
          display: "PTH - Parathyroid hormone level",
          
        },
        {
          code: 3357006,
          display: "Iron kinetics",
          
        },
        {
          code: 3360004,
          display: "Biliary anastomosis",
          
        },
        {
          code: 3390006,
          display: "Verification procedure",
          
        },
        {
          code: 3399007,
          display: "Reduction of torsion of omentum",
          
        },
        {
          code: 3407002,
          display: "Creation of lesion of spinal cord by percutaneous method",
          
        },
        {
          code: 3413006,
          display: "Blood cell morphology",
          
        },
        {
          code: 3418002,
          display: "Chondrectomy of spine",
          
        },
        {
          code: 3432000,
          display: "Preventive dental service",
          
        },
        {
          code: 3443008,
          display: "Pulp capping",
          
        },
        {
          code: 3448004,
          display: "Fixation of contralateral testis",
          
        },
        {
          code: 3450007,
          display: "Lymphocytes, T & B cell evaluation",
          
        },
        {
          code: 3457005,
          display: "Referral procedure",
          
        },
        {
          code: 3479000,
          display: "Removal of heart assist system with replacement",
          
        },
        {
          code: 3498003,
          display: "Total excision of pituitary gland by transsphenoidal approach",
          
        },
        {
          code: 3499006,
          display: "Aspiration of vitreous with replacement",
          
        },
        {
          code: 3509001,
          display: "Streptococcus vaccination",
          
        },
        {
          code: 3512003,
          display: "Angiography of arteries of extremity",
          
        },
        {
          code: 3515001,
          display: "Replacement of electronic heart device, pulse generator",
          
        },
        {
          code: 3517009,
          display: "Removal of foreign body of pelvis from subcutaneous tissue",
          
        },
        {
          code: 3518004,
          display: "Aversive psychotherapy",
          
        },
        {
          code: 3527003,
          display: "Antibody measurement",
          
        },
        {
          code: 3546002,
          display: "CVG - Coronary vein graft",
          
        },
        {
          code: 3559005,
          display: "Insertion of ureteral stent with ureterotomy",
          
        },
        {
          code: 3562008,
          display: "Rodney Smith operation, radical subtotal pancreatectomy",
          
        },
        {
          code: 3564009,
          display: "Removal of foreign body from fallopian tube",
          
        },
        {
          code: 3575008,
          display: "Repair of fascia with graft of fascia",
          
        },
        {
          code: 3580004,
          display: "Removal of calculus of pharynx",
          
        },
        {
          code: 3605001,
          display: "Reduction of ciliary body",
          
        },
        {
          code: 3607009,
          display: "Transplantation of mesenteric tissue",
          
        },
        {
          code: 3620007,
          display: "Red cell survival study with hepatic sequestration",
          
        },
        {
          code: 3625002,
          display: "Anesthesia for brachial arteriograms, retrograde",
          
        },
        {
          code: 3651000,
          display: "Morphometric analysis, nerve",
          
        },
        {
          code: 3654008,
          display: "Excision of lingula",
          
        },
        {
          code: 3659003,
          display: "Incision of inner ear",
          
        },
        {
          code: 3664004,
          display: "Closure of scleral fistula",
          
        },
        {
          code: 3666002,
          display: "Repair of peripheral nerve by suturing",
          
        },
        {
          code: 3669009,
          display: "Fitting of prosthesis or prosthetic device of upper arm",
          
        },
        {
          code: 3673007,
          display: "Leadbetter urethral reconstruction",
          
        },
        {
          code: 3683006,
          display: "Selenium measurement, urine",
          
        },
        {
          code: 3686003,
          display: "Zancolli operation for tendon transfer of biceps",
          
        },
        {
          code: 3688002,
          display: "Anesthesia for lens surgery",
          
        },
        {
          code: 3690001,
          display: "Shunt of left subclavian to descending aorta by Blalock-Park operation",
          
        },
        {
          code: 3691002,
          display: "Wedge osteotomy of tarsals and metatarsals",
          
        },
        {
          code: 3697003,
          display: "Tissue processing technique, routine, embed, cut and stain, per autopsy",
          
        },
        {
          code: 3700004,
          display: "Erysophake extraction of lens",
          
        },
        {
          code: 3701000,
          display: "Removal of foreign body of hip from subcutaneous tissue",
          
        },
        {
          code: 3713005,
          display: "Release for de Quervain tenosynovitis of hand",
          
        },
        {
          code: 3717006,
          display: "Dilute Russell viper venom time",
          
        },
        {
          code: 3734003,
          display: "SSG - Split skin graft",
          
        },
        {
          code: 3735002,
          display: "Coproporphyrin III measurement",
          
        },
        {
          code: 3740005,
          display: "Removal of foreign body of canthus by incision",
          
        },
        {
          code: 3748003,
          display: "Biopsy of perirenal tissue",
          
        },
        {
          code: 3749006,
          display: "Reduction of closed ischial fracture",
          
        },
        {
          code: 3758004,
          display: "Thrombectomy with catheter of subclavian artery by neck incision",
          
        },
        {
          code: 3770000,
          display: "Ward urine dip stick testing",
          
        },
        {
          code: 3778007,
          display: "Scrotum manipulation",
          
        },
        {
          code: 3780001,
          display: "Routine patient disposition, no follow-up planned",
          
        },
        {
          code: 3784005,
          display: "Delayed hypersensitivity skin test for streptokinase-streptodornase",
          
        },
        {
          code: 3786007,
          display: "Excision of lesion of pharynx",
          
        },
        {
          code: 3787003,
          display: "Ultrasonic guidance for needle biopsy",
          
        },
        {
          code: 3794000,
          display: "Pregnanetriol measurement",
          
        },
        {
          code: 3796003,
          display: "Excision of redundant mucosa from jejunostomy",
          
        },
        {
          code: 3799005,
          display: "Radiography of adenoids",
          
        },
        {
          code: 3802001,
          display: "Topical application of tooth medicament - desensitizing agent",
          
        },
        {
          code: 3819004,
          display: "Embolization of thoracic artery",
          
        },
        {
          code: 3826004,
          display: "Blepharotomy with drainage of abscess of eyelid",
          
        },
        {
          code: 3828003,
          display: "Open biopsy of vertebral body of thoracic region",
          
        },
        {
          code: 3831002,
          display: "Chiropractic application of ice",
          
        },
        {
          code: 3843001,
          display: "Removal of foreign body from fascia",
          
        },
        {
          code: 3858009,
          display: "Echography of thyroid, A-mode",
          
        },
        {
          code: 3861005,
          display: "Aneurysmectomy with anastomosis of lower limb artery",
          
        },
        {
          code: 3862003,
          display: "Total vital capacity measurement",
          
        },
        {
          code: 3864002,
          display: "Excisional biopsy of scrotum",
          
        },
        {
          code: 3880007,
          display: "Excision of lesion of fibula",
          
        },
        {
          code: 3881006,
          display: "Incision and drainage of submental space by extraoral approach",
          
        },
        {
          code: 3887005,
          display: "Wart ligation",
          
        },
        {
          code: 3889008,
          display: "Suture of lip",
          
        },
        {
          code: 3891000,
          display: "Comprehensive orthodontic treatment, permanent dentition, for class I malocclusion",
          
        },
        {
          code: 3895009,
          display: "Dressing",
          
        },
        {
          code: 3907006,
          display: "Incision and drainage of retroperitoneal abscess",
          
        },
        {
          code: 3911000,
          display: "Transplantation of muscle",
          
        },
        {
          code: 3915009,
          display: "Excision of artery of thorax and abdomen",
          
        },
        {
          code: 3917001,
          display: "Excisional biopsy of phalanges of foot",
          
        },
        {
          code: 3918006,
          display: "Plastic repair with lengthening",
          
        },
        {
          code: 3926003,
          display: "Lactate measurement",
          
        },
        {
          code: 3929005,
          display: "Patient transfer, in-hospital, bed-to-bed",
          
        },
        {
          code: 3936006,
          display: "Making Foster bed",
          
        },
        {
          code: 3938007,
          display: "Cerclage for retinal reattachment",
          
        },
        {
          code: 3942005,
          display: "Cystopexy",
          
        },
        {
          code: 3955006,
          display: "Antibody elution from red blood cells",
          
        },
        {
          code: 3957003,
          display: "Arteriectomy of thoracoabdominal aorta",
          
        },
        {
          code: 3963007,
          display: "Operation on submaxillary gland",
          
        },
        {
          code: 3967008,
          display: "Fluorescence polarization immunoassay",
          
        },
        {
          code: 3968003,
          display: "Excision of spinal facet joint",
          
        },
        {
          code: 3969006,
          display: "Removal of osteocartilagenous loose body from joint structures",
          
        },
        {
          code: 3971006,
          display: "Duchenne muscular dystrophy carrier detection",
          
        },
        {
          code: 3980006,
          display: "Partial excision of esophagus",
          
        },
        {
          code: 3981005,
          display: "Carrier detection, molecular genetics",
          
        },
        {
          code: 3985001,
          display: "Anesthesia for procedure on arteries of lower leg with bypass graft",
          
        },
        {
          code: 3991004,
          display: "MRI of pelvis, prostate and bladder",
          
        },
        {
          code: 3998005,
          display: "Bone imaging of limited area",
          
        },
        {
          code: 4007002,
          display: "Anti-human globulin test, indirect, titer, non-gamma",
          
        },
        {
          code: 4008007,
          display: "Phlebography of neck",
          
        },
        {
          code: 4010009,
          display: "Oophorectomy of remaining ovary with tube",
          
        },
        {
          code: 4027001,
          display: "Implantation of electronic stimulator into phrenic nerve",
          
        },
        {
          code: 4034004,
          display: "Closed reduction of facial fracture, except mandible",
          
        },
        {
          code: 4035003,
          display: "Restoration, resin, two surfaces, posterior, permanent",
          
        },
        {
          code: 4036002,
          display: "Arthroscopy of elbow with extensive debridement",
          
        },
        {
          code: 4037006,
          display: "Removal of vascular graft or prosthesis",
          
        },
        {
          code: 4044002,
          display: "Construction of permanent colostomy",
          
        },
        {
          code: 4045001,
          display: "Drainage of cerebral ventricle by incision",
          
        },
        {
          code: 4052004,
          display: "Percutaneous aspiration of spinal cord cyst",
          
        },
        {
          code: 4064007,
          display: "Specimen aliquoting",
          
        },
        {
          code: 4068005,
          display: "Removal of ventricular reservoir with synchronous replacement",
          
        },
        {
          code: 4083000,
          display: "Fitting of prosthesis or prosthetic device of lower arm",
          
        },
        {
          code: 4084006,
          display: "Repair of tendon of hand by graft or implant of muscle",
          
        },
        {
          code: 4090005,
          display: "Replacement of transvenous atrial and ventricular pacemaker electrode leads",
          
        },
        {
          code: 4094001,
          display: "Reduction of retroversion of uterus by suppository",
          
        },
        {
          code: 4101004,
          display: "Revision of spinal pleurothecal shunt",
          
        },
        {
          code: 4102006,
          display: "Root canal therapy, anterior, excluding final restoration",
          
        },
        {
          code: 4114003,
          display: "Parenteral chemotherapy for malignant neoplasm",
          
        },
        {
          code: 4116001,
          display: "Construction of window",
          
        },
        {
          code: 4119008,
          display: "Intracranial phlebectomy with anastomosis",
          
        },
        {
          code: 4131005,
          display: "Implantation into pelvic region",
          
        },
        {
          code: 4134002,
          display: "Operative block anesthesia",
          
        },
        {
          code: 4139007,
          display: "Posterior spinal cordotomy",
          
        },
        {
          code: 4143006,
          display: "Injection into anterior chamber of eye",
          
        },
        {
          code: 4149005,
          display: "Bone histomorphometry, aluminum stain",
          
        },
        {
          code: 4154001,
          display: "Incision and drainage of penis",
          
        },
        {
          code: 4165006,
          display: "Delayed hypersensitivity skin test for staphage lysate",
          
        },
        {
          code: 4176005,
          display: "Fothergill repair",
          
        },
        {
          code: 4192000,
          display: "Toxicology testing for organophosphate insecticide",
          
        },
        {
          code: 4213001,
          display: "Implantation of Ommaya reservoir",
          
        },
        {
          code: 4214007,
          display: "Intracardiac injection for cardiac resuscitation",
          
        },
        {
          code: 4226002,
          display: "Excision of lesion of thoracic vein",
          
        },
        {
          code: 4252008,
          display: "Aneurysmectomy with graft replacement by interposition",
          
        },
        {
          code: 4263006,
          display: "Biopsy of soft tissue of elbow area, superficial",
          
        },
        {
          code: 4266003,
          display: "Patient referral for drug addiction rehabilitation",
          
        },
        {
          code: 4285000,
          display: "Insertion of bone growth stimulator into femur",
          
        },
        {
          code: 4293000,
          display: "Reduction of intussusception by laparotomy",
          
        },
        {
          code: 4304000,
          display: "Excision of cusp of tricuspid valve",
          
        },
        {
          code: 4319004,
          display: "Rebase of complete lower denture",
          
        },
        {
          code: 4321009,
          display: "Bilateral leg arteriogram",
          
        },
        {
          code: 4323007,
          display: "Destruction of lesion of sclera",
          
        },
        {
          code: 4331002,
          display: "Anesthesia for hernia repair in lower abdomen",
          
        },
        {
          code: 4333004,
          display: "Incision and drainage of perisplenic space",
          
        },
        {
          code: 4336007,
          display: "Lloyd-Davies operation, abdominoperineal resection",
          
        },
        {
          code: 4337003,
          display: "Homogentisic acid measurement",
          
        },
        {
          code: 4339000,
          display: "Repair of nasolabial fistula",
          
        },
        {
          code: 4341004,
          display: "Complete submucous resection of turbinate",
          
        },
        {
          code: 4344007,
          display: "Cryopexy",
          
        },
        {
          code: 4348005,
          display: "Musculoplasty of hand",
          
        },
        {
          code: 4350002,
          display: "Removal of implant of cornea",
          
        },
        {
          code: 4363008,
          display: "Endoscopic brush biopsy of trachea",
          
        },
        {
          code: 4365001,
          display: "Surgical repair",
          
        },
        {
          code: 4380007,
          display: "Transposition of vulvar tissue",
          
        },
        {
          code: 4387005,
          display: "Valvuloplasty of pulmonary valve in total repair of tetralogy of Fallot",
          
        },
        {
          code: 4388000,
          display: "Repair of splenocolic fistula",
          
        },
        {
          code: 4407008,
          display: "Slitting of lacrimal canaliculus for passage of tube",
          
        },
        {
          code: 4411002,
          display: "Removal of device from female genital tract",
          
        },
        {
          code: 4420006,
          display: "Incision and drainage of parapharyngeal abscess by external approach",
          
        },
        {
          code: 4424002,
          display: "Making orthopedic bed",
          
        },
        {
          code: 4436008,
          display: "Methylatable chemotaxis protein (MCP) receptor measurement",
          
        },
        {
          code: 4438009,
          display: "Venography of vena cava",
          
        },
        {
          code: 4443002,
          display: "Decortication of ovary",
          
        },
        {
          code: 4447001,
          display: "Autopsy, gross and microscopic examination, stillborn or newborn without central nervous system",
          
        },
        {
          code: 4449003,
          display: "Manipulation of spinal meninges",
          
        },
        {
          code: 4450003,
          display: "Application of Kirschner wire",
          
        },
        {
          code: 4455008,
          display: "Open reduction of open elbow dislocation",
          
        },
        {
          code: 4457000,
          display: "Insertion of mold into vagina",
          
        },
        {
          code: 4466001,
          display: "Exploration of upper limb artery",
          
        },
        {
          code: 4467005,
          display: "Excision of tumor of ankle area, deep, intramuscular",
          
        },
        {
          code: 4475004,
          display: "Cyanide level",
          
        },
        {
          code: 4487006,
          display: "Norepinephrine measurement, supine",
          
        },
        {
          code: 4489009,
          display: "Neurolysis of trigeminal nerve",
          
        },
        {
          code: 4496006,
          display: "Mouthcare procedure",
          
        },
        {
          code: 4503005,
          display: "Removal of foreign body of sclera without use of magnet",
          
        },
        {
          code: 4504004,
          display: "Potter obstetrical version with extraction",
          
        },
        {
          code: 4505003,
          display: "Tenolysis of flexor tendon of forearm",
          
        },
        {
          code: 4507006,
          display: "Decompression fasciotomy of wrist, flexor and extensor compartment",
          
        },
        {
          code: 4511000,
          display: "Restoration, inlay, composite/resin, one surface, laboratory processed",
          
        },
        {
          code: 4516005,
          display: "Iridencleisis and iridotasis",
          
        },
        {
          code: 4520009,
          display: "Anastomosis of esophagus, antesternal or antethoracic, with insertion of prosthesis",
          
        },
        {
          code: 4525004,
          display: "Seen by casualty - service",
          
        },
        {
          code: 4533003,
          display: "Ligation of artery of lower limb",
          
        },
        {
          code: 4535005,
          display: "Incision of pelvirectal tissue",
          
        },
        {
          code: 4539004,
          display: "Excision of cyst of bronchus",
          
        },
        {
          code: 4542005,
          display: "Closed reduction of fracture of foot",
          
        },
        {
          code: 4544006,
          display: "Excision of subcutaneous tumor of extremities",
          
        },
        {
          code: 4558008,
          display: "Anterior resection of rectum",
          
        },
        {
          code: 4563007,
          display: "Hospital admission, transfer from other hospital or health care facility",
          
        },
        {
          code: 4570007,
          display: "Chemopallidectomy",
          
        },
        {
          code: 4579008,
          display: "Creation of ventriculoatrial shunt",
          
        },
        {
          code: 4581005,
          display: "Coreoplasty",
          
        },
        {
          code: 4585001,
          display: "Decompression of tendon of hand",
          
        },
        {
          code: 4587009,
          display: "Epiphysiodesis of distal radius",
          
        },
        {
          code: 4589007,
          display: "Care relating to reproduction and pregnancy",
          
        },
        {
          code: 4593001,
          display: "Cauterization of sclera with iridectomy",
          
        },
        {
          code: 4594007,
          display: "Coproporphyrin isomers, series I & III, urine",
          
        },
        {
          code: 4613005,
          display: "Radioimmunoassay",
          
        },
        {
          code: 4625008,
          display: "Apical pulse taking",
          
        },
        {
          code: 4626009,
          display: "Take-down of arterial anastomosis",
          
        },
        {
          code: 4636001,
          display: "Denker operation for radical maxillary antrotomy",
          
        },
        {
          code: 4640005,
          display: "Ligation of fallopian tubes by abdominal approach",
          
        },
        {
          code: 4642002,
          display: "Removal of inflatable penile prosthesis, with pump, reservoir and cylinders",
          
        },
        {
          code: 4660002,
          display: "Diagnostic procedure on phalanges of foot",
          
        },
        {
          code: 4670000,
          display: "Catheterization of bronchus",
          
        },
        {
          code: 4671001,
          display: "Excision of lesion from sphenoid sinus",
          
        },
        {
          code: 4672008,
          display: "Medical procedure on the nervous system",
          
        },
        {
          code: 4691008,
          display: "Identification of rotavirus antigen in feces",
          
        },
        {
          code: 4692001,
          display: "Transplantation of artery of upper extremity",
          
        },
        {
          code: 4694000,
          display: "Percutaneous biopsy of muscle",
          
        },
        {
          code: 4699005,
          display: "Alpha naphthyl butyrate stain method, blood or bone marrow",
          
        },
        {
          code: 4701005,
          display: "Colony forming unit-granulocyte-monocyte-erythroid-megakaryocyte assay",
          
        },
        {
          code: 4707009,
          display: "Partial excision of calcaneus",
          
        },
        {
          code: 4712005,
          display: "Removal of Gardner Wells tongs from skull",
          
        },
        {
          code: 4713000,
          display: "Endoscopy and photography",
          
        },
        {
          code: 4719001,
          display: "Psychologic cognitive testing and assessment",
          
        },
        {
          code: 4727005,
          display: "Lipoprotein electrophoresis",
          
        },
        {
          code: 4734007,
          display: "Irrigation of wound catheter of integument",
          
        },
        {
          code: 4737000,
          display: "Mycobacteria culture",
          
        },
        {
          code: 4756005,
          display: "Cryotherapy of subcutaneous tissue",
          
        },
        {
          code: 4758006,
          display: "Incudostapediopexy",
          
        },
        {
          code: 4764004,
          display: "Jet ventilation procedure",
          
        },
        {
          code: 4765003,
          display: "Insertion of ocular implant following or secondary to enucleation",
          
        },
        {
          code: 4770005,
          display: "Colporrhaphy for repair of urethrocele",
          
        },
        {
          code: 4772002,
          display: "Reduction of torsion of spermatic cord",
          
        },
        {
          code: 4784000,
          display: "Operation on sublingual gland",
          
        },
        {
          code: 4804005,
          display: "Microbial identification test",
          
        },
        {
          code: 4811009,
          display: "Reconstruction of diaphragm",
          
        },
        {
          code: 4815000,
          display: "Antibody identification, red blood cell antibody panel, enzyme, 2 stage technique including anti-human globulin",
          
        },
        {
          code: 4820000,
          display: "Incision of labial frenum",
          
        },
        {
          code: 4827002,
          display: "Shower hydrotherapy",
          
        },
        {
          code: 4829004,
          display: "Excision of small intestine for interposition",
          
        },
        {
          code: 4847005,
          display: "Anesthesia for cesarean section",
          
        },
        {
          code: 4849008,
          display: "Ovarian biopsy",
          
        },
        {
          code: 4862007,
          display: "Revision of anastomosis of large intestine",
          
        },
        {
          code: 4877004,
          display: "Extracapsular extraction of lens with iridectomy",
          
        },
        {
          code: 4891005,
          display: "Proctostomy",
          
        },
        {
          code: 4895001,
          display: "Construction of sigmoid bladder",
          
        },
        {
          code: 4902005,
          display: "Ethchlorvynol measurement",
          
        },
        {
          code: 4903000,
          display: "Serum protein electrophoresis",
          
        },
        {
          code: 4904006,
          display: "Dilation of anal sphincter under nonlocal anesthesia",
          
        },
        {
          code: 4914002,
          display: "Treatment planning for teletherapy",
          
        },
        {
          code: 4929000,
          display: "Local perfusion of kidney",
          
        },
        {
          code: 4930005,
          display: "Repair of thoracogastric fistula",
          
        },
        {
          code: 4934001,
          display: "Salpingography",
          
        },
        {
          code: 4957007,
          display: "Cervical spinal fusion for pseudoarthrosis",
          
        },
        {
          code: 4966006,
          display: "Extracorporeal perfusion",
          
        },
        {
          code: 4970003,
          display: "Venography",
          
        },
        {
          code: 4974007,
          display: "Liver operation",
          
        },
        {
          code: 4976009,
          display: "Anesthesia for endoscopic procedure on lower extremity",
          
        },
        {
          code: 4987001,
          display: "Osteoplasty of cranium with flap of bone",
          
        },
        {
          code: 4992004,
          display: "Cardiac catheterization, left heart, retrograde, percutaneous",
          
        },
        {
          code: 4993009,
          display: "Ischemic limb exercise with electromyography and lactic acid determination",
          
        },
        {
          code: 5016005,
          display: "Pontic, resin with high noble metal",
          
        },
        {
          code: 5019003,
          display: "Direct laryngoscopy with biopsy",
          
        },
        {
          code: 5021008,
          display: "Aldosterone measurement, standing, normal salt diet",
          
        },
        {
          code: 5022001,
          display: "Lysergic acid diethylamide measurement",
          
        },
        {
          code: 5025004,
          display: "Semen analysis, presence and motility of sperm",
          
        },
        {
          code: 5032008,
          display: "Labial veneer, porcelain laminate, laboratory",
          
        },
        {
          code: 5034009,
          display: "Graft to hair-bearing skin",
          
        },
        {
          code: 5048009,
          display: "External cephalic version with tocolysis",
          
        },
        {
          code: 5055006,
          display: "Uniscept system test",
          
        },
        {
          code: 5057003,
          display: "Radical orbitomaxillectomy",
          
        },
        {
          code: 5065000,
          display: "Reduction of closed traumatic hip dislocation with anesthesia",
          
        },
        {
          code: 5091004,
          display: "Peripheral vascular disease study",
          
        },
        {
          code: 5105000,
          display: "Endoscopy of renal pelvis",
          
        },
        {
          code: 5110001,
          display: "Ultrasound peripheral imaging, real time scan",
          
        },
        {
          code: 5113004,
          display: "FT4 - Free thyroxine level",
          
        },
        {
          code: 5119000,
          display: "Epiglottidectomy",
          
        },
        {
          code: 5121005,
          display: "Wedge osteotomy of pelvic bone",
          
        },
        {
          code: 5123008,
          display: "Anesthesia for procedure on pericardium with pump oxygenator",
          
        },
        {
          code: 5130002,
          display: "Needling of lens for cataract",
          
        },
        {
          code: 5131003,
          display: "Radiography of chest wall",
          
        },
        {
          code: 5135007,
          display: "Diagnostic procedure on scapula",
          
        },
        {
          code: 5147001,
          display: "Excision of lesion of ankle joint",
          
        },
        {
          code: 5151004,
          display: "Manual reduction of rectal hemorrhoids",
          
        },
        {
          code: 5154007,
          display: "Communication enhancement: speech deficit",
          
        },
        {
          code: 5161006,
          display: "Specialty clinic admission",
          
        },
        {
          code: 5162004,
          display: "Excision of pressure ulcer",
          
        },
        {
          code: 5165002,
          display: "Division of thoracic artery",
          
        },
        {
          code: 5176003,
          display: "Thromboendarterectomy with graft of renal artery",
          
        },
        {
          code: 5182000,
          display: "Total body perfusion",
          
        },
        {
          code: 5184004,
          display: "Osteotomy of shaft of femur with fixation",
          
        },
        {
          code: 5186002,
          display: "Arthrotomy for synovectomy of glenohumeral joint",
          
        },
        {
          code: 5190000,
          display: "Cell fusion",
          
        },
        {
          code: 5191001,
          display: "Surgical treatment of missed miscarriage of second trimester",
          
        },
        {
          code: 5212002,
          display: "Excision of lesion of lacrimal gland by frontal approach",
          
        },
        {
          code: 5216004,
          display: "Three dimensional ultrasound imaging of heart",
          
        },
        {
          code: 5233006,
          display: "Lateral fasciotomy",
          
        },
        {
          code: 5243009,
          display: "Suture of adenoid fossa",
          
        },
        {
          code: 5245002,
          display: "Transplantation of peripheral vein",
          
        },
        {
          code: 5246001,
          display: "Breakpoint cluster region analysis",
          
        },
        {
          code: 5264008,
          display: "Total bile acids measurement",
          
        },
        {
          code: 5267001,
          display: "Adrenal artery ligation",
          
        },
        {
          code: 5270002,
          display: "Bilateral destruction of fallopian tubes",
          
        },
        {
          code: 5273000,
          display: "Manual reduction of closed fracture of proximal end of ulna",
          
        },
        {
          code: 5282006,
          display: "Operation on oropharynx",
          
        },
        {
          code: 5290006,
          display: "Incision and drainage of Ludwig angina",
          
        },
        {
          code: 5298004,
          display: "Incision and drainage of deep hematoma of thigh region",
          
        },
        {
          code: 5304008,
          display: "DXT - Radiotherapy",
          
        },
        {
          code: 5316002,
          display: "Closed osteotomy of mandibular ramus",
          
        },
        {
          code: 5317006,
          display: "Radical amputation of penis with bilateral pelvic lymphadenectomy",
          
        },
        {
          code: 5326009,
          display: "Administration of dermatologic formulation",
          
        },
        {
          code: 5328005,
          display: "Shortening of Achilles tendon",
          
        },
        {
          code: 5337005,
          display: "Trocar biopsy",
          
        },
        {
          code: 5338000,
          display: "Nicotine measurement",
          
        },
        {
          code: 5342002,
          display: "Prophylactic treatment of tibia with methyl methacrylate",
          
        },
        {
          code: 5348003,
          display: "Repair of endocardial cushion defect",
          
        },
        {
          code: 5357009,
          display: "Leukocyte poor blood preparation",
          
        },
        {
          code: 5373003,
          display: "Stress breaker",
          
        },
        {
          code: 5384005,
          display: "Excision of part of frontal cortex",
          
        },
        {
          code: 5391008,
          display: "Artificial voice rehabilitation",
          
        },
        {
          code: 5393006,
          display: "Exploration of parathyroid with mediastinal exploration by sternal split approach",
          
        },
        {
          code: 5402006,
          display: "Manipulation of thoracic artery",
          
        },
        {
          code: 5407000,
          display: "Injection of fallopian tube",
          
        },
        {
          code: 5415002,
          display: "Destruction of lesion of liver",
          
        },
        {
          code: 5419008,
          display: "Lysis of adhesions of tendon of hand",
          
        },
        {
          code: 5422005,
          display: "Amylase measurement, peritoneal fluid",
          
        },
        {
          code: 5429001,
          display: "Diagnostic procedure on nipple",
          
        },
        {
          code: 5431005,
          display: "Percutaneous transluminal angioplasty",
          
        },
        {
          code: 5433008,
          display: "Skeletal X-ray of lower limb",
          
        },
        {
          code: 5446003,
          display: "Excision of cervical rib for outlet compression syndrome with sympathectomy",
          
        },
        {
          code: 5447007,
          display: "Transfusion",
          
        },
        {
          code: 5452002,
          display: "Core needle biopsy of thymus",
          
        },
        {
          code: 5456004,
          display: "Graft of lymphatic structure",
          
        },
        {
          code: 5457008,
          display: "Serologic test for Rickettsia conorii",
          
        },
        {
          code: 5460001,
          display: "Removal of prosthesis from fallopian tube",
          
        },
        {
          code: 5479003,
          display: "Select picture audiometry",
          
        },
        {
          code: 5482008,
          display: "Serologic test for Blastomyces",
          
        },
        {
          code: 5486006,
          display: "Delayed suture of tendon of hand",
          
        },
        {
          code: 5489004,
          display: "Diagnostic procedure on radius",
          
        },
        {
          code: 5506006,
          display: "Incision and exploration of abdominal wall",
          
        },
        {
          code: 5517007,
          display: "Restoration, inlay, porcelain/ceramic, per tooth, in addition to inlay",
          
        },
        {
          code: 5521000,
          display: "Open reduction of fracture of phalanges of foot",
          
        },
        {
          code: 5536002,
          display: "Arthrodesis of carpometacarpal joint of digits, other than thumb",
          
        },
        {
          code: 5545001,
          display: "Repair of carotid body",
          
        },
        {
          code: 5551006,
          display: "Direct laryngoscopy with arytenoidectomy with operating microscope",
          
        },
        {
          code: 5556001,
          display: "Manually assisted spontaneous delivery",
          
        },
        {
          code: 5570001,
          display: "Arthrotomy for infection with exploration and drainage of carpometacarpal joint",
          
        },
        {
          code: 5571002,
          display: "Excision of lesion of aorta with end-to-end anastomosis",
          
        },
        {
          code: 5572009,
          display: "Incision of kidney pelvis",
          
        },
        {
          code: 5586008,
          display: "Aminolevulinic acid dehydratase measurement",
          
        },
        {
          code: 5608002,
          display: "Excretion measurement",
          
        },
        {
          code: 5616006,
          display: "Osteoplasty of tibia",
          
        },
        {
          code: 5621009,
          display: "Excision of malignant lesion of skin of extremities",
          
        },
        {
          code: 5632009,
          display: "Open biopsy of bronchus",
          
        },
        {
          code: 5636007,
          display: "Fistulectomy of bone",
          
        },
        {
          code: 5638008,
          display: "Carbohydrate measurement",
          
        },
        {
          code: 5648005,
          display: "Surgical repair and revision of shunt",
          
        },
        {
          code: 5651003,
          display: "Arylsulfatase A measurement",
          
        },
        {
          code: 5663008,
          display: "Phlebectomy of varicose vein of head and neck",
          
        },
        {
          code: 5669007,
          display: "Portable electroencephalogram awake and asleep with stimulation",
          
        },
        {
          code: 5671007,
          display: "Magnet extraction of foreign body from ciliary body",
          
        },
        {
          code: 5687005,
          display: "Removal of foreign body from ovary",
          
        },
        {
          code: 5690004,
          display: "Incision of seminal vesicle",
          
        },
        {
          code: 5694008,
          display: "Crisis intervention with follow-up",
          
        },
        {
          code: 5721002,
          display: "Repair of eyebrow",
          
        },
        {
          code: 5722009,
          display: "Surgical reanastomosis of colon",
          
        },
        {
          code: 5726007,
          display: "Removal of epicardial electrodes",
          
        },
        {
          code: 5728008,
          display: "Anoscopy for removal of foreign body",
          
        },
        {
          code: 5731009,
          display: "Hemosiderin, quantitative measurement",
          
        },
        {
          code: 5733007,
          display: "Fluorescent identification of anti-nuclear antibody",
          
        },
        {
          code: 5738003,
          display: "Biopsy of cul-de-sac",
          
        },
        {
          code: 5745003,
          display: "Excision ampulla of Vater with reimplantation of common duct",
          
        },
        {
          code: 5760000,
          display: "Osteoplasty of radius and ulna, shortening",
          
        },
        {
          code: 5771004,
          display: "Blepharotomy",
          
        },
        {
          code: 5777000,
          display: "Flexorplasty of elbow",
          
        },
        {
          code: 5781000,
          display: "Operation on nasal septum",
          
        },
        {
          code: 5785009,
          display: "Forensic autopsy",
          
        },
        {
          code: 5787001,
          display: "Elevation of bone fragments of orbit of skull with debridement",
          
        },
        {
          code: 5789003,
          display: "Lysis of adhesions of intestines",
          
        },
        {
          code: 5796001,
          display: "Excision of external thrombotic hemorrhoid",
          
        },
        {
          code: 5806001,
          display: "Revision of tracheostomy scar",
          
        },
        {
          code: 5807005,
          display: "Fenestration of inner ear, initial",
          
        },
        {
          code: 5809008,
          display: "Selective vagotomy with pyloroplasty and gastrostomy",
          
        },
        {
          code: 5812006,
          display: "Laboratory reporting, fax",
          
        },
        {
          code: 5818005,
          display: "Flocculation test",
          
        },
        {
          code: 5821007,
          display: "Ligation, division and complete stripping of long and short saphenous veins",
          
        },
        {
          code: 5823005,
          display: "Diagnostic radiography, left",
          
        },
        {
          code: 5832007,
          display: "Partial ostectomy of thorax, ribs or sternum",
          
        },
        {
          code: 5845006,
          display: "Emulsification procedure",
          
        },
        {
          code: 5846007,
          display: "Diagnostic radiography of toes",
          
        },
        {
          code: 5857002,
          display: "Complement mediated cytotoxicity assay",
          
        },
        {
          code: 5865004,
          display: "Open reduction of dislocation of toe",
          
        },
        {
          code: 5870006,
          display: "Tertiary closure of abdominal wall",
          
        },
        {
          code: 5880005,
          display: "Clinical examination",
          
        },
        {
          code: 5892005,
          display: "Mastoid antrotomy",
          
        },
        {
          code: 5894006,
          display: "Methyl red test",
          
        },
        {
          code: 5897004,
          display: "Removal of Scribner shunt",
          
        },
        {
          code: 5902003,
          display: "History and physical examination, complete",
          
        },
        {
          code: 5925002,
          display: "Incision and drainage of hematoma of wrist",
          
        },
        {
          code: 5930003,
          display: "Cardiac monitor removal",
          
        },
        {
          code: 5947002,
          display: "Consultation for hearing and/or speech problem",
          
        },
        {
          code: 5961007,
          display: "Division of blood vessels of cornea",
          
        },
        {
          code: 5966002,
          display: "Removal of foreign body from elbow area, deep",
          
        },
        {
          code: 5971009,
          display: "Incision and drainage of axilla",
          
        },
        {
          code: 5983006,
          display: "Repair of spermatic cord",
          
        },
        {
          code: 5986003,
          display: "Non-sensitized spontaneous sheep erythrocyte binding, E-rosette",
          
        },
        {
          code: 5992009,
          display: "Midtarsal arthrodesis, multiple",
          
        },
        {
          code: 5995006,
          display: "Gas liquid chromatography, flame photometric type",
          
        },
        {
          code: 5997003,
          display: "Drainage of cerebral subarachnoid space by aspiration",
          
        },
        {
          code: 5998008,
          display: "Radical dissection of groin",
          
        },
        {
          code: 6005008,
          display: "Transplantation of vitreous by anterior approach",
          
        },
        {
          code: 6007000,
          display: "Magnetic resonance imaging of chest",
          
        },
        {
          code: 6019008,
          display: "Endoscopy of large intestine",
          
        },
        {
          code: 6025007,
          display: "Laparoscopic appendectomy",
          
        },
        {
          code: 6026008,
          display: "Removal of coronary artery obstruction by percutaneous transluminal balloon with thrombolytic agent",
          
        },
        {
          code: 6029001,
          display: "Augmentation of outflow tract of pulmonary valve",
          
        },
        {
          code: 6035001,
          display: "Chart abstracting",
          
        },
        {
          code: 6063004,
          display: "Kanamycin measurement",
          
        },
        {
          code: 6069000,
          display: "Panniculotomy",
          
        },
        {
          code: 6082008,
          display: "Perforation of footplate",
          
        },
        {
          code: 6092000,
          display: "Aspiration of nasal sinus by puncture",
          
        },
        {
          code: 6100001,
          display: "Fenestration of stapes footplate with vein graft",
          
        },
        {
          code: 6108008,
          display: "Subdural tap through fontanel, infant, initial",
          
        },
        {
          code: 6119006,
          display: "Local destruction of lesion of bony palate",
          
        },
        {
          code: 6125005,
          display: "Change of gastrostomy tube",
          
        },
        {
          code: 6126006,
          display: "Fitzgerald factor assay",
          
        },
        {
          code: 6127002,
          display: "Diagnostic radiography of abdomen, oblique standard",
          
        },
        {
          code: 6130009,
          display: "Surgical exposure of impacted or unerupted tooth to aid eruption",
          
        },
        {
          code: 6133006,
          display: "Lymphokine assay",
          
        },
        {
          code: 6143009,
          display: "Diabetic education",
          
        },
        {
          code: 6146001,
          display: "Repair of heart septum with prosthesis",
          
        },
        {
          code: 6148000,
          display: "Chondrectomy of semilunar cartilage of knee",
          
        },
        {
          code: 6157006,
          display: "Endoscopic retrograde cholangiopancreatography with biopsy",
          
        },
        {
          code: 6159009,
          display: "Galactose measurement",
          
        },
        {
          code: 6161000,
          display: "Excision of lesion of capsule of toes",
          
        },
        {
          code: 6164008,
          display: "Osteoclasis of clavicle",
          
        },
        {
          code: 6166005,
          display: "Nephropyeloureterostomy",
          
        },
        {
          code: 6177004,
          display: "Southern blot assay",
          
        },
        {
          code: 6187000,
          display: "Repair of aneurysm with graft of common femoral artery",
          
        },
        {
          code: 6188005,
          display: "Arthrotomy of knee",
          
        },
        {
          code: 6189002,
          display: "Excision of aberrant tissue of breast",
          
        },
        {
          code: 6190006,
          display: "Colopexy",
          
        },
        {
          code: 6195001,
          display: "Transurethral drainage of prostatic abscess",
          
        },
        {
          code: 6198004,
          display: "Repair of fracture with Sofield type procedure",
          
        },
        {
          code: 6200005,
          display: "Excision of lesion of female perineum",
          
        },
        {
          code: 6205000,
          display: "Fluorescent antigen, titer",
          
        },
        {
          code: 6213004,
          display: "Prescribing corneoscleral contact lens",
          
        },
        {
          code: 6221005,
          display: "Suture of colon",
          
        },
        {
          code: 6225001,
          display: "Antibody detection, RBC, enzyme, 2 stage technique, including anti-human globulin",
          
        },
        {
          code: 6226000,
          display: "Visual rehabilitation, eye motion defect",
          
        },
        {
          code: 6227009,
          display: "Relationship psychotherapy",
          
        },
        {
          code: 6231003,
          display: "Graft of palate",
          
        },
        {
          code: 6238009,
          display: "Diagnostic radiography of sacroiliac joints",
          
        },
        {
          code: 6240004,
          display: "Operative procedure on knee",
          
        },
        {
          code: 6255008,
          display: "Resection of abdominal artery with replacement",
          
        },
        {
          code: 6271008,
          display: "Echography, immersion B-scan",
          
        },
        {
          code: 6274000,
          display: "Excision of aural glomus tumor, extended, extratemporal",
          
        },
        {
          code: 6286002,
          display: "Destructive procedure on ovaries and fallopian tubes",
          
        },
        {
          code: 6289009,
          display: "White blood cell histogram evaluation",
          
        },
        {
          code: 6295005,
          display: "Sequestrectomy of pelvic bone",
          
        },
        {
          code: 6307005,
          display: "Keratophakia",
          
        },
        {
          code: 6309008,
          display: "Fecal fat differential, quantitative",
          
        },
        {
          code: 6319002,
          display: "Beta lactamase, chromogenic cephalosporin susceptibility test",
          
        },
        {
          code: 6337001,
          display: "Ligation of aortic arch",
          
        },
        {
          code: 6339003,
          display: "Conditioning play audiometry",
          
        },
        {
          code: 6343004,
          display: "Forensic bite mark comparison technique",
          
        },
        {
          code: 6353003,
          display: "Mitsuda reaction to lepromin",
          
        },
        {
          code: 6354009,
          display: "Sedimentation rate, Westergren",
          
        },
        {
          code: 6355005,
          display: "Removal of internal fixation device of radius",
          
        },
        {
          code: 6358007,
          display: "Capsulorrhaphy of joint",
          
        },
        {
          code: 6361008,
          display: "Anesthesia for popliteal thromboendarterectomy",
          
        },
        {
          code: 6363006,
          display: "Dilation of lacrimal punctum with irrigation",
          
        },
        {
          code: 6370006,
          display: "Chemosurgery of stomach lesion",
          
        },
        {
          code: 6384001,
          display: "Removal of device from digestive system",
          
        },
        {
          code: 6385000,
          display: "Exploration of disc space",
          
        },
        {
          code: 6388003,
          display: "TdT stain",
          
        },
        {
          code: 6396008,
          display: "Galactokinase measurement",
          
        },
        {
          code: 6397004,
          display: "Muscular strength development exercise",
          
        },
        {
          code: 6399001,
          display: "Division of arteriovenous fistula with ligation",
          
        },
        {
          code: 6402000,
          display: "Excision of common bile duct",
          
        },
        {
          code: 6403005,
          display: "Lengthening of muscle of hand",
          
        },
        {
          code: 6419003,
          display: "Excision of tumor from elbow area, deep, subfascial",
          
        },
        {
          code: 6429005,
          display: "Heteroautogenous transplantation",
          
        },
        {
          code: 6433003,
          display: "Closed heart valvotomy of mitral valve",
          
        },
        {
          code: 6434009,
          display: "Seminal fluid detection",
          
        },
        {
          code: 6438007,
          display: "Exploration of ciliary body",
          
        },
        {
          code: 6439004,
          display: "Destruction of lesion of peripheral nerve",
          
        },
        {
          code: 6443000,
          display: "Pontic, porcelain fused to predominantly base metal",
          
        },
        {
          code: 6444006,
          display: "Enlargement of eye socket",
          
        },
        {
          code: 6465000,
          display: "Arthrotomy of glenohumeral joint for infection with drainage",
          
        },
        {
          code: 6466004,
          display: "Administration of Rh immune globulin",
          
        },
        {
          code: 6470007,
          display: "Laparoamnioscopy",
          
        },
        {
          code: 6473009,
          display: "Suture of old obstetrical laceration of uterus",
          
        },
        {
          code: 6480006,
          display: "Urinary bladder residual urine study",
          
        },
        {
          code: 6486000,
          display: "Curettage of sclera",
          
        },
        {
          code: 6487009,
          display: "Hand tendon pulley reconstruction with tendon prosthesis",
          
        },
        {
          code: 6491004,
          display: "Protein S, free assay",
          
        },
        {
          code: 6499002,
          display: "Tsuge operation on finger for macrodactyly repair",
          
        },
        {
          code: 6502003,
          display: "Complete lower denture",
          
        },
        {
          code: 6506000,
          display: "Placing a patient on a bedpan",
          
        },
        {
          code: 6519001,
          display: "Operation on multiple extraocular muscles with temporary detachment from globe",
          
        },
        {
          code: 6521006,
          display: "Polytomography",
          
        },
        {
          code: 6527005,
          display: "Uchida fimbriectomy with tubal ligation by endoscopy",
          
        },
        {
          code: 6535008,
          display: "Excision of cyst of hand",
          
        },
        {
          code: 6536009,
          display: "Implantation of tricuspid valve with tissue graft",
          
        },
        {
          code: 6543003,
          display: "Complicated catheterization of bladder",
          
        },
        {
          code: 6547002,
          display: "Repair with closure of non-surgical wound",
          
        },
        {
          code: 6555009,
          display: "Insertion of infusion pump beneath skin",
          
        },
        {
          code: 6556005,
          display: "Reticulin antibody measurement",
          
        },
        {
          code: 6562000,
          display: "Destruction of lesion of tongue",
          
        },
        {
          code: 6563005,
          display: "Transposition of muscle of hand",
          
        },
        {
          code: 6567006,
          display: "Pulmonary valve commissurotomy by transvenous balloon method",
          
        },
        {
          code: 6568001,
          display: "Diagnostic procedure on eyelid",
          
        },
        {
          code: 6585004,
          display: "Closed reduction of fracture of tarsal or metatarsal",
          
        },
        {
          code: 6589005,
          display: "Antibody titration, high protein",
          
        },
        {
          code: 6601003,
          display: "Removal of foreign body from skin of axilla",
          
        },
        {
          code: 6614002,
          display: "Antibody to single stranded DNA measurement",
          
        },
        {
          code: 6615001,
          display: "Electroretinography with medical evaluation",
          
        },
        {
          code: 6622009,
          display: "Add clasp to existing partial denture",
          
        },
        {
          code: 6634001,
          display: "Destruction of hemorrhoids, internal",
          
        },
        {
          code: 6639006,
          display: "Replacement of obstructed valve in shunt system",
          
        },
        {
          code: 6650009,
          display: "Radionuclide lacrimal flow study",
          
        },
        {
          code: 6656003,
          display: "Acoustic stimulation test",
          
        },
        {
          code: 6657007,
          display: "Maintenance drug therapy for mental disorder",
          
        },
        {
          code: 6658002,
          display: "Removal of foreign body from alveolus",
          
        },
        {
          code: 6661001,
          display: "King-Steelquist hindquarter operation",
          
        },
        {
          code: 6665005,
          display: "Restoration, crown, porcelain fused to noble metal",
          
        },
        {
          code: 6668007,
          display: "Fibrinogen assay, quantitative",
          
        },
        {
          code: 6670003,
          display: "Closure of external fistula of trachea",
          
        }
      ];

    const codeProps = {
        options: code,
        getOptionLabel: (option) => option.display,
    };

    const complication = [
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
          
        },
        {
          code: 160245001,
          display: "No current problems or disability",
          
        }
      ];

    const complicationProps = {
        options: complication,
        getOptionLabel: (option) => option.display,
    };
    
    const focalDeviceAction = [
        {
          code: 129265001,
          display: "Patient evaluation - action",
          
        },
        {
          code: 129266000,
          display: "Measurement - action",
          
        },
        {
          code: 129267009,
          display: "Administrative action",
          
        },
        {
          code: 129268004,
          display: "Observation - action",
          
        },
        {
          code: 129269007,
          display: "Assisting - action",
          
        },
        {
          code: 129271007,
          display: "Management - action",
          
        },
        {
          code: 129272000,
          display: "Stimulation - action",
          
        },
        {
          code: 129273005,
          display: "Admission - action",
          
        },
        {
          code: 129274004,
          display: "Discharge - action",
          
        },
        {
          code: 129275003,
          display: "Administrative transfer - action",
          
        },
        {
          code: 129276002,
          display: "Referral - action",
          
        },
        {
          code: 129277006,
          display: "Administrative disposition - action",
          
        },
        {
          code: 129278001,
          display: "Audit - action",
          
        },
        {
          code: 129279009,
          display: "Medicolegal action",
          
        },
        {
          code: 129280007,
          display: "Medicolegal testimony - action",
          
        },
        {
          code: 129283009,
          display: "Training - action",
          
        },
        {
          code: 129284003,
          display: "Surgical action values",
          
        },
        {
          code: 129286001,
          display: "Microsurgery - action",
          
        },
        {
          code: 129287005,
          display: "Incision - action",
          
        },
        {
          code: 129288000,
          display: "Exploratory incision - action",
          
        },
        {
          code: 129289008,
          display: "Drainage - action",
          
        },
        {
          code: 129291000,
          display: "Drilling - action",
          
        },
        {
          code: 129292007,
          display: "Evacuation - action",
          
        },
        {
          code: 129293002,
          display: "Dissection - action",
          
        },
        {
          code: 129294008,
          display: "Discission - action",
          
        },
        {
          code: 129295009,
          display: "Slitting - action",
          
        },
        {
          code: 129296005,
          display: "Bisection - action",
          
        },
        {
          code: 129297001,
          display: "Bifurcation - action",
          
        },
        {
          code: 129298006,
          display: "Surgical division",
          
        },
        {
          code: 129299003,
          display: "Release - action",
          
        },
        {
          code: 129300006,
          display: "Puncture - action",
          
        },
        {
          code: 129301005,
          display: "Scarification - action",
          
        },
        {
          code: 129303008,
          display: "Removal - action",
          
        },
        {
          code: 129304002,
          display: "Excision - action",
          
        },
        {
          code: 129305001,
          display: "Wedge excision - action",
          
        },
        {
          code: 129306000,
          display: "Surgical removal - action",
          
        },
        {
          code: 129307009,
          display: "Expulsion - action",
          
        },
        {
          code: 129308004,
          display: "Reexcision - action",
          
        },
        {
          code: 129309007,
          display: "Amputation - action",
          
        },
        {
          code: 129310002,
          display: "Transfixion - action",
          
        },
        {
          code: 129311003,
          display: "Evisceration - action",
          
        },
        {
          code: 129312005,
          display: "Enucleation - action",
          
        },
        {
          code: 129313000,
          display: "Trephine - action",
          
        },
        {
          code: 129314006,
          display: "BX - Biopsy",
          
        },
        {
          code: 129315007,
          display: "Incision biopsy",
          
        },
        {
          code: 129316008,
          display: "Aspiration - action",
          
        },
        {
          code: 129317004,
          display: "Debridement - action",
          
        },
        {
          code: 129318009,
          display: "Saucerization - action",
          
        },
        {
          code: 129319001,
          display: "Curettage - action",
          
        },
        {
          code: 129321006,
          display: "Trimming - action",
          
        },
        {
          code: 129322004,
          display: "Shaving - action",
          
        },
        {
          code: 129323009,
          display: "Scraping - action",
          
        },
        {
          code: 129324003,
          display: "Filleting - action",
          
        },
        {
          code: 129325002,
          display: "Introduction - action",
          
        },
        {
          code: 129326001,
          display: "Injection",
          
        },
        {
          code: 129327005,
          display: "Tattooing - action",
          
        },
        {
          code: 129328000,
          display: "Inflation - action",
          
        },
        {
          code: 129330003,
          display: "Infusion - action",
          
        },
        {
          code: 129331004,
          display: "Perfusion - action",
          
        },
        {
          code: 129332006,
          display: "Irrigation - action",
          
        },
        {
          code: 129333001,
          display: "Insufflation - action",
          
        },
        {
          code: 129334007,
          display: "Instillation - action",
          
        },
        {
          code: 129335008,
          display: "Embolization - action",
          
        },
        {
          code: 129337000,
          display: "Replantation",
          
        },
        {
          code: 129339002,
          display: "Intubation - action",
          
        },
        {
          code: 129340000,
          display: "Sounding - action",
          
        },
        {
          code: 129344009,
          display: "Surgical recession - action",
          
        },
        {
          code: 129345005,
          display: "Resection-recession - action",
          
        },
        {
          code: 129346006,
          display: "Radial incision - action",
          
        },
        {
          code: 129347002,
          display: "Transfer - action",
          
        },
        {
          code: 129348007,
          display: "Z-plasty - action",
          
        },
        {
          code: 129349004,
          display: "Lengthening procedure",
          
        },
        {
          code: 129350004,
          display: "Shortening",
          
        },
        {
          code: 129351000,
          display: "Augmentation",
          
        },
        {
          code: 129352007,
          display: "Advancement",
          
        },
        {
          code: 129353002,
          display: "Suspension and fixation - action",
          
        },
        {
          code: 129354008,
          display: "Exteriorization - action",
          
        },
        {
          code: 129355009,
          display: "Marsupialization - action",
          
        },
        {
          code: 129356005,
          display: "Reinforcement - action",
          
        },
        {
          code: 129357001,
          display: "Closure - action",
          
        },
        {
          code: 129358006,
          display: "Layered closure - action",
          
        },
        {
          code: 129360008,
          display: "Oversewing - action",
          
        },
        {
          code: 129366002,
          display: "Closure by buckling - action",
          
        },
        {
          code: 129368001,
          display: "Cerclage - action",
          
        },
        {
          code: 129369009,
          display: "Ligation - action",
          
        },
        {
          code: 129371009,
          display: "Fixation - action",
          
        },
        {
          code: 129372002,
          display: "Cryopexy - action",
          
        },
        {
          code: 129373007,
          display: "Plication - action",
          
        },
        {
          code: 129374001,
          display: "Imbrication - action",
          
        },
        {
          code: 129376004,
          display: "Creation",
          
        },
        {
          code: 129377008,
          display: "Reconstruction - action",
          
        },
        {
          code: 129378003,
          display: "Stabilization - action",
          
        },
        {
          code: 129379006,
          display: "Fusion - action",
          
        },
        {
          code: 129380009,
          display: "Anchoring - action",
          
        },
        {
          code: 129381008,
          display: "Enlargement - action",
          
        },
        {
          code: 129382001,
          display: "Destruction - action",
          
        },
        {
          code: 129383006,
          display: "Avulsion - action",
          
        },
        {
          code: 129384000,
          display: "Decortication - action",
          
        },
        {
          code: 129385004,
          display: "Stripping - action",
          
        },
        {
          code: 129386003,
          display: "Stripping and ligation - action",
          
        },
        {
          code: 129387007,
          display: "Abrasion - action",
          
        },
        {
          code: 129388002,
          display: "Salabrasion - action",
          
        },
        {
          code: 129389005,
          display: "Grinding - action",
          
        },
        {
          code: 129390001,
          display: "Coagulation - action",
          
        },
        {
          code: 129391002,
          display: "Obliteration - action",
          
        },
        {
          code: 129392009,
          display: "Cauterization - action",
          
        },
        {
          code: 129393004,
          display: "Cryosurgery - action",
          
        },
        {
          code: 129394005,
          display: "Thermocautery - action",
          
        },
        {
          code: 129395006,
          display: "Fulguration - action",
          
        },
        {
          code: 129396007,
          display: "Electrodesiccation - action",
          
        },
        {
          code: 129397003,
          display: "Electrocoagulation - action",
          
        },
        {
          code: 129398008,
          display: "Electrocautery",
          
        },
        {
          code: 129399000,
          display: "Electrodestruction - action",
          
        },
        {
          code: 129400007,
          display: "Crushing - action",
          
        },
        {
          code: 129401006,
          display: "Fragmentation - action",
          
        },
        {
          code: 129402004,
          display: "Emulsification - action",
          
        },
        {
          code: 129403009,
          display: "Chemosurgery - action",
          
        },
        {
          code: 129404003,
          display: "Chemical cautery",
          
        },
        {
          code: 129405002,
          display: "Photocoagulation - action",
          
        },
        {
          code: 129406001,
          display: "Transplantation - action",
          
        },
        {
          code: 129407005,
          display: "Grafting",
          
        },
        {
          code: 129408000,
          display: "Manipulative procedure",
          
        },
        {
          code: 129409008,
          display: "Mobilization - action",
          
        },
        {
          code: 129410003,
          display: "Remobilization - action",
          
        },
        {
          code: 129411004,
          display: "Traction - action",
          
        },
        {
          code: 129412006,
          display: "Manual reduction - action",
          
        },
        {
          code: 129413001,
          display: "Elevation - action",
          
        },
        {
          code: 129414007,
          display: "Instrumental elevation - action",
          
        },
        {
          code: 129415008,
          display: "Extraction - action",
          
        },
        {
          code: 129416009,
          display: "Surgical extraction - action",
          
        },
        {
          code: 129418005,
          display: "Expression - action",
          
        },
        {
          code: 129419002,
          display: "Dilatation - action",
          
        },
        {
          code: 129420008,
          display: "Surgical stretching",
          
        },
        {
          code: 129421007,
          display: "Dilation and stretching - action",
          
        },
        {
          code: 129423005,
          display: "Bouginage",
          
        },
        {
          code: 129424004,
          display: "Fitting - action",
          
        },
        {
          code: 129425003,
          display: "Application actions",
          
        },
        {
          code: 129426002,
          display: "Adjustment - action",
          
        },
        {
          code: 129427006,
          display: "Reduction - action",
          
        },
        {
          code: 129430004,
          display: "Consultation - action",
          
        },
        {
          code: 129431000,
          display: "History taking - action",
          
        },
        {
          code: 129433002,
          display: "Inspection",
          
        },
        {
          code: 129434008,
          display: "Palpation - action",
          
        },
        {
          code: 129435009,
          display: "Percussion - action",
          
        },
        {
          code: 129436005,
          display: "Listening - action",
          
        },
        {
          code: 129437001,
          display: "Optical transillumination - action",
          
        },
        {
          code: 129438006,
          display: "Prescription - action",
          
        },
        {
          code: 129441002,
          display: "Counseling - action",
          
        },
        {
          code: 129442009,
          display: "Iontophoresis - action",
          
        },
        {
          code: 129443004,
          display: "Electrolysis - action",
          
        },
        {
          code: 129444005,
          display: "Surgical galvanism - action",
          
        },
        {
          code: 129445006,
          display: "Administration - action",
          
        },
        {
          code: 129449000,
          display: "Functional assessment - action",
          
        },
        {
          code: 183648002,
          display: "Long-term assistance",
          
        },
        {
          code: 245854003,
          display: "Proximal anastomosis",
          
        },
        {
          code: 245855002,
          display: "Distal anastomosis",
          
        },
        {
          code: 255595002,
          display: "Debulking - action",
          
        },
        {
          code: 256644001,
          display: "Darning - action",
          
        },
        {
          code: 257729003,
          display: "Ablation",
          
        },
        {
          code: 257730008,
          display: "Chemical destruction",
          
        },
        {
          code: 257739009,
          display: "Open adjustment",
          
        },
        {
          code: 257741005,
          display: "Anastomosis",
          
        },
        {
          code: 257742003,
          display: "Direct anastomosis - action",
          
        },
        {
          code: 257743008,
          display: "Lecompte maneuver",
          
        },
        {
          code: 257744002,
          display: "End-to-end anastomosis - action",
          
        },
        {
          code: 257745001,
          display: "Double barrelled end-to-end anastomosis - action",
          
        },
        {
          code: 257746000,
          display: "End-to-side anastomosis - action",
          
        },
        {
          code: 257747009,
          display: "Roux-en-Y - action",
          
        },
        {
          code: 257748004,
          display: "End-to-side anastomosis without tunnel",
          
        },
        {
          code: 257749007,
          display: "End-to-side anastomosis with tunnel",
          
        },
        {
          code: 257750007,
          display: "Side-to-side anastomosis",
          
        },
        {
          code: 257751006,
          display: "Wallace \"69\" side-to-end anastomosis - action",
          
        },
        {
          code: 257759008,
          display: "Fine needle aspiration biopsy - action",
          
        },
        {
          code: 257768005,
          display: "Binding - action",
          
        },
        {
          code: 257777003,
          display: "Chemical inactivation",
          
        },
        {
          code: 257778008,
          display: "Chemodissolution",
          
        },
        {
          code: 257780002,
          display: "Mass closure",
          
        },
        {
          code: 257781003,
          display: "Interrupted mass closure",
          
        },
        {
          code: 257782005,
          display: "Continuous mass closure",
          
        },
        {
          code: 257783000,
          display: "Thermocoagulation",
          
        },
        {
          code: 257784006,
          display: "Semm thermal coagulation",
          
        },
        {
          code: 257785007,
          display: "Wolf thermal coagulation",
          
        },
        {
          code: 257786008,
          display: "Cryotherapy - action",
          
        },
        {
          code: 257788009,
          display: "Delamination",
          
        },
        {
          code: 257789001,
          display: "Hydrodelamination",
          
        },
        {
          code: 257791009,
          display: "Desiccation - action",
          
        },
        {
          code: 257802002,
          display: "Anterior displacement",
          
        },
        {
          code: 257803007,
          display: "Posterior displacement",
          
        },
        {
          code: 257804001,
          display: "Lateral displacement",
          
        },
        {
          code: 257805000,
          display: "Medial displacement",
          
        },
        {
          code: 257806004,
          display: "Close rectal dissection",
          
        },
        {
          code: 257808003,
          display: "Ultrasonic dissection",
          
        },
        {
          code: 257811002,
          display: "External drainage",
          
        },
        {
          code: 257817003,
          display: "Digital evacuation",
          
        },
        {
          code: 257821005,
          display: "Manual expression",
          
        },
        {
          code: 257822003,
          display: "Extracapsular extraction",
          
        },
        {
          code: 257824002,
          display: "Intracapsular extraction",
          
        },
        {
          code: 257825001,
          display: "Fenestration - action",
          
        },
        {
          code: 257846005,
          display: "Ballistic fragmentation",
          
        },
        {
          code: 257850003,
          display: "Mechanical fragmentation",
          
        },
        {
          code: 257855008,
          display: "Electromagnetic pulse fragmentation",
          
        },
        {
          code: 257857000,
          display: "Galvanism",
          
        },
        {
          code: 257859002,
          display: "High intensity focused ultrasound",
          
        },
        {
          code: 257863009,
          display: "Radioactive destruction",
          
        },
        {
          code: 257867005,
          display: "Insertion - action",
          
        },
        {
          code: 257878002,
          display: "Keeling - action",
          
        },
        {
          code: 257880008,
          display: "Localization",
          
        },
        {
          code: 257884004,
          display: "Immobilization - action",
          
        },
        {
          code: 257885003,
          display: "Occlusion",
          
        },
        {
          code: 257886002,
          display: "Operative ultrasound",
          
        },
        {
          code: 257889009,
          display: "Padding",
          
        },
        {
          code: 257890000,
          display: "Peeling - action",
          
        },
        {
          code: 257893003,
          display: "Pressure",
          
        },
        {
          code: 257894009,
          display: "One handed pressure",
          
        },
        {
          code: 257895005,
          display: "Two handed pressure",
          
        },
        {
          code: 257897002,
          display: "Realignment - action",
          
        },
        {
          code: 257903006,
          display: "Surgical repair",
          
        },
        {
          code: 257905004,
          display: "Keel repair",
          
        },
        {
          code: 257906003,
          display: "Mayo repair",
          
        },
        {
          code: 257907007,
          display: "Patching - action",
          
        },
        {
          code: 257911001,
          display: "Repair of recurrence",
          
        },
        {
          code: 257912008,
          display: "Rotation - action",
          
        },
        {
          code: 257913003,
          display: "IR - Internal rotation",
          
        },
        {
          code: 257914009,
          display: "External rotation",
          
        },
        {
          code: 257915005,
          display: "Sampling",
          
        },
        {
          code: 257916006,
          display: "Bilateral sampling",
          
        },
        {
          code: 257917002,
          display: "Bilateral sequential sampling",
          
        },
        {
          code: 257918007,
          display: "Bilateral simultaneous sampling",
          
        },
        {
          code: 257923007,
          display: "Sampling without trap",
          
        },
        {
          code: 257926004,
          display: "Unilateral sampling",
          
        },
        {
          code: 257928003,
          display: "Segmentation",
          
        },
        {
          code: 257933004,
          display: "Tamponade - action",
          
        },
        {
          code: 257935006,
          display: "Tapering - action",
          
        },
        {
          code: 257937003,
          display: "Soft tissue transfer",
          
        },
        {
          code: 257938008,
          display: "Transfer of bone block",
          
        },
        {
          code: 257940003,
          display: "Transposition - action",
          
        },
        {
          code: 258061005,
          display: "Photic stimulation",
          
        },
        {
          code: 260222006,
          display: "Single photon emission computed tomography - action",
          
        },
        {
          code: 261027000,
          display: "Sequential anastomosis",
          
        },
        {
          code: 261191006,
          display: "Open extraction - action",
          
        },
        {
          code: 261197005,
          display: "Doppler color flow",
          
        },
        {
          code: 261198000,
          display: "Doppler continuous wave",
          
        },
        {
          code: 261199008,
          display: "Doppler pulsed",
          
        },
        {
          code: 261391004,
          display: "Resurfacing - action",
          
        },
        {
          code: 261398005,
          display: "Alloplastic grafting",
          
        },
        {
          code: 261498006,
          display: "Bone-patellar tendon-bone reconstruction",
          
        },
        {
          code: 261499003,
          display: "Braided prosthetic ligament reconstruction",
          
        },
        {
          code: 261518005,
          display: "Cystodiathermy - action",
          
        },
        {
          code: 261519002,
          display: "Diathermy excision",
          
        },
        {
          code: 261520008,
          display: "Diathermy snare - action",
          
        },
        {
          code: 261526002,
          display: "Electromagnetic fragmentation",
          
        },
        {
          code: 261545006,
          display: "Loop diathermy excision",
          
        },
        {
          code: 261553003,
          display: "REDY - Regeneration of dialysate",
          
        },
        {
          code: 261569005,
          display: "Thermocompaction",
          
        },
        {
          code: 261576000,
          display: "Ultrasound fragmentation - action",
          
        },
        {
          code: 262143007,
          display: "Side-to-end anastomosis - action",
          
        },
        {
          code: 263720003,
          display: "Compression",
          
        },
        {
          code: 264592006,
          display: "Intravesical drug therapy",
          
        },
        {
          code: 264594007,
          display: "Laser - action",
          
        },
        {
          code: 264730003,
          display: "Lateral rotation - action",
          
        },
        {
          code: 264739002,
          display: "Medial rotation - action",
          
        },
        {
          code: 264947006,
          display: "Prescription of optical aid - action",
          
        },
        {
          code: 272381008,
          display: "Microvascular anastomosis - action",
          
        },
        {
          code: 274392008,
          display: "EUA - Examination under anesthetic",
          
        },
        {
          code: 276734006,
          display: "Mechanical assistance",
          
        },
        {
          code: 277261002,
          display: "Excision biopsy",
          
        },
        {
          code: 277607009,
          display: "Digital removal",
          
        },
        {
          code: 277763000,
          display: "Refashioning",
          
        },
        {
          code: 277851003,
          display: "Conduit anastomosis",
          
        },
        {
          code: 277852005,
          display: "Reservoir anastomosis",
          
        },
        {
          code: 278110001,
          display: "Radiographic imaging - action",
          
        },
        {
          code: 278292003,
          display: "Ultrasound imaging - action",
          
        },
        {
          code: 278312000,
          display: "Reattachment - action",
          
        },
        {
          code: 278313005,
          display: "Regeneration - action",
          
        },
        {
          code: 278420002,
          display: "Sealing",
          
        },
        {
          code: 281609006,
          display: "Cryoablation - action",
          
        },
        {
          code: 281613004,
          display: "Decompression - action",
          
        },
        {
          code: 281615006,
          display: "Exploration - action",
          
        },
        {
          code: 281698007,
          display: "Cryocautery - action",
          
        },
        {
          code: 281767003,
          display: "Manual dilatation",
          
        },
        {
          code: 281838007,
          display: "Disarticulation - action",
          
        },
        {
          code: 281839004,
          display: "Exenteration",
          
        },
        {
          code: 282015008,
          display: "Shave biopsy - action",
          
        },
        {
          code: 282089006,
          display: "Replacement - action",
          
        },
        {
          code: 282722008,
          display: "Ultrasound destruction",
          
        },
        {
          code: 286553006,
          display: "Plastic operation",
          
        },
        {
          code: 286637000,
          display: "Block dissection",
          
        },
        {
          code: 286792001,
          display: "Denervation",
          
        },
        {
          code: 287682008,
          display: "Application of caustics",
          
        },
        {
          code: 288324002,
          display: "Eversion - action",
          
        },
        {
          code: 288466002,
          display: "Diathermy incision",
          
        },
        {
          code: 288468001,
          display: "Disimpaction - action",
          
        },
        {
          code: 289928003,
          display: "Surgical reduction",
          
        },
        {
          code: 289930001,
          display: "Enzyme destruction",
          
        },
        {
          code: 289936007,
          display: "Shave excision",
          
        },
        {
          code: 289938008,
          display: "Microsurgical repair",
          
        },
        {
          code: 290001001,
          display: "Recession - action",
          
        },
        {
          code: 297179000,
          display: "Microsurgical anastomosis",
          
        },
        {
          code: 297183000,
          display: "Revascularization",
          
        },
        {
          code: 298053008,
          display: "Devascularization - action",
          
        },
        {
          code: 298116000,
          display: "Application of substance",
          
        },
        {
          code: 299712004,
          display: "Osteoclasis - action",
          
        },
        {
          code: 299713009,
          display: "Osteotomy - action",
          
        },
        {
          code: 299893001,
          display: "Interposition anastomosis - action",
          
        },
        {
          code: 302193003,
          display: "Actions by modality",
          
        },
        {
          code: 302196006,
          display: "Freeing - action",
          
        },
        {
          code: 302199004,
          display: "Clinical examination - action",
          
        },
        {
          code: 302204005,
          display: "Ultrasound - action",
          
        },
        {
          code: 302205006,
          display: "Microwave - action",
          
        },
        {
          code: 303893007,
          display: "Functional modification",
          
        },
        {
          code: 303894001,
          display: "Structural modification",
          
        },
        {
          code: 303955003,
          display: "Transfusion - action",
          
        },
        {
          code: 303996000,
          display: "Terminalization",
          
        },
        {
          code: 303998004,
          display: "Unused action values",
          
        },
        {
          code: 304054006,
          display: "Structural support - action",
          
        },
        {
          code: 304904003,
          display: "Manual evacuation",
          
        },
        {
          code: 312236008,
          display: "Duplex ultrasound",
          
        },
        {
          code: 312250003,
          display: "Magnetic resonance imaging - action",
          
        },
        {
          code: 312251004,
          display: "Computed tomography imaging - action",
          
        },
        {
          code: 312254007,
          display: "Plain film technique",
          
        },
        {
          code: 312275004,
          display: "Fluoroscopic imaging - action",
          
        },
        {
          code: 312336005,
          display: "Opening - action",
          
        },
        {
          code: 312337001,
          display: "Thermography imaging - action",
          
        },
        {
          code: 312421008,
          display: "Radionuclide imaging - action",
          
        },
        {
          code: 312883004,
          display: "Desensitization - action",
          
        },
        {
          code: 313029009,
          display: "Brachytherapy - action",
          
        },
        {
          code: 360017003,
          display: "Clipping - action",
          
        },
        {
          code: 360018008,
          display: "Stimulus dosing technique",
          
        },
        {
          code: 360020006,
          display: "Extirpation - action",
          
        },
        {
          code: 360021005,
          display: "Bypass - action",
          
        },
        {
          code: 360025001,
          display: "Harvesting - action",
          
        },
        {
          code: 360027009,
          display: "Interposition - action",
          
        },
        {
          code: 360028004,
          display: "Surgical biopsy - action",
          
        },
        {
          code: 360029007,
          display: "Nonsurgical biopsy - action",
          
        },
        {
          code: 360032005,
          display: "Flap reconstruction - action",
          
        },
        {
          code: 360037004,
          display: "Imaging method",
          
        },
        {
          code: 360038009,
          display: "Gluing - action",
          
        },
        {
          code: 360051004,
          display: "Surgical toilet - action",
          
        },
        {
          code: 360060007,
          display: "Approximation - action",
          
        },
        {
          code: 360082000,
          display: "Apposition - action",
          
        },
        {
          code: 360084004,
          display: "Septation - action",
          
        },
        {
          code: 360087006,
          display: "Indirect anastomosis - action",
          
        },
        {
          code: 360146007,
          display: "Repositioning - action",
          
        },
        {
          code: 360147003,
          display: "Attention - action",
          
        },
        {
          code: 360148008,
          display: "Obstetric action",
          
        },
        {
          code: 360149000,
          display: "Delivery - action",
          
        },
        {
          code: 360150000,
          display: "Inlay replacement - action",
          
        },
        {
          code: 360152008,
          display: "Monitoring - action",
          
        },
        {
          code: 360153003,
          display: "Take impression - action",
          
        },
        {
          code: 360154009,
          display: "Trial fit of device - action",
          
        },
        {
          code: 360160009,
          display: "Checking - action",
          
        },
        {
          code: 360161008,
          display: "Induction - action",
          
        },
        {
          code: 360163006,
          display: "Infiltration - action",
          
        },
        {
          code: 360165004,
          display: "Apheresis - action",
          
        },
        {
          code: 360166003,
          display: "Filtration - action",
          
        },
        {
          code: 360220002,
          display: "Mapping - action",
          
        },
        {
          code: 360222005,
          display: "Massage - action",
          
        },
        {
          code: 360223000,
          display: "Cine imaging - action",
          
        },
        {
          code: 360226008,
          display: "Electrical discharge - action",
          
        },
        {
          code: 360231005,
          display: "Video imaging - action",
          
        },
        {
          code: 360232003,
          display: "Spectroscopy - action",
          
        },
        {
          code: 360239007,
          display: "Termination - action",
          
        },
        {
          code: 360240009,
          display: "Connection - action",
          
        },
        {
          code: 360270004,
          display: "Therapy - action",
          
        },
        {
          code: 360272007,
          display: "Discussion - action",
          
        },
        {
          code: 360273002,
          display: "Provision - action",
          
        },
        {
          code: 360314001,
          display: "Cutting - action",
          
        },
        {
          code: 360315000,
          display: "Filing - action",
          
        },
        {
          code: 360323003,
          display: "Restore - action",
          
        },
        {
          code: 360324009,
          display: "Obturation - action",
          
        },
        {
          code: 360325005,
          display: "Simple removal - action",
          
        },
        {
          code: 360393008,
          display: "Disinsertion - action",
          
        },
        {
          code: 362939006,
          display: "Dissolution - action",
          
        },
        {
          code: 363659002,
          display: "Pacing - action",
          
        },
        {
          code: 363678002,
          display: "Positron emission tomographic imaging - action",
          
        },
        {
          code: 367529003,
          display: "Lending - action",
          
        },
        {
          code: 367558000,
          display: "Contouring - action",
          
        },
        {
          code: 367559008,
          display: "Preparation - action",
          
        },
        {
          code: 367560003,
          display: "Buckling - action",
          
        },
        {
          code: 367642006,
          display: "Inversion - action",
          
        },
        {
          code: 367740008,
          display: "Suspension - action",
          
        },
        {
          code: 369242005,
          display: "Hyfrecation - action",
          
        },
        {
          code: 386746003,
          display: "Maintenance - action",
          
        },
        {
          code: 399009009,
          display: "B mode ultrasound",
          
        },
        {
          code: 399015009,
          display: "Tomographic imaging, plain radiologic - action",
          
        },
        {
          code: 399035005,
          display: "Tomographic imaging - action",
          
        },
        {
          code: 399064001,
          display: "2D mode ultrasound",
          
        },
        {
          code: 399155008,
          display: "M-mode ultrasound",
          
        },
        {
          code: 410460000,
          display: "Illumination",
          
        },
        {
          code: 410461001,
          display: "Dual diffuse direct illumination",
          
        },
        {
          code: 410462008,
          display: "Fine slit beam direct illumination",
          
        },
        {
          code: 410463003,
          display: "Broad tangential direct illumination",
          
        },
        {
          code: 410464009,
          display: "Indirect sclerotic scatter illumination",
          
        },
        {
          code: 410465005,
          display: "Indirect retroillumination from the iris",
          
        },
        {
          code: 410466006,
          display: "Indirect retroillumination from the retina",
          
        },
        {
          code: 410467002,
          display: "Indirect iris transillumination",
          
        },
        {
          code: 410756002,
          display: "Surgical decompression - action",
          
        },
        {
          code: 410757006,
          display: "Decompressive excision - action",
          
        },
        {
          code: 410758001,
          display: "Decompressive incision - action",
          
        },
        {
          code: 410759009,
          display: "Decompressive division - action",
          
        },
        {
          code: 410769003,
          display: "Elevation reduction - action",
          
        },
        {
          code: 410814006,
          display: "Surgical reduction - action",
          
        },
        {
          code: 410817004,
          display: "Dilation repair - action",
          
        },
        {
          code: 410820007,
          display: "Surgical transplantation - action",
          
        },
        {
          code: 415186003,
          display: "Proximal illumination - action",
          
        },
        {
          code: 416677001,
          display: "Internal drainage - action",
          
        },
        {
          code: 419385000,
          display: "Use",
          
        },
        {
          code: 419652001,
          display: "Take",
          
        },
        {
          code: 419656003,
          display: "Examination AND/OR history taking - action",
          
        },
        {
          code: 419988009,
          display: "Action of drug administration",
          
        },
        {
          code: 424208002,
          display: "Shunt - action",
          
        },
        {
          code: 424832003,
          display: "Surgical introduction - action",
          
        },
        {
          code: 424900004,
          display: "Recommendation - action",
          
        },
        {
          code: 425362007,
          display: "Surgical insertion - action",
          
        },
        {
          code: 425689005,
          display: "Teaching - action",
          
        },
        {
          code: 425704008,
          display: "Power doppler ultrasound",
          
        },
        {
          code: 425764006,
          display: "Transection - action",
          
        },
        {
          code: 426413004,
          display: "Closed reduction - action",
          
        },
        {
          code: 426530000,
          display: "Open reduction - action",
          
        },
        {
          code: 426865009,
          display: "3D mode ultrasound",
          
        },
        {
          code: 428010000,
          display: "Open embolization - action",
          
        },
        {
          code: 428381003,
          display: "Diathermy - action",
          
        },
        {
          code: 430975009,
          display: "Surgical piercing - action",
          
        },
        {
          code: 439054007,
          display: "Surgical cataract aspiration - action",
          
        },
        {
          code: 439237009,
          display: "Mechanical repair - action",
          
        },
        {
          code: 439315000,
          display: "Wedge osteotomy - action",
          
        },
        {
          code: 439417007,
          display: "Closed manual reduction - action",
          
        },
        {
          code: 439513008,
          display: "Surgical size reduction - action",
          
        },
        {
          code: 440338007,
          display: "Dispensing - action",
          
        },
        {
          code: 440647007,
          display: "Mechanical construction - action",
          
        },
        {
          code: 441504007,
          display: "Surgical manipulation - action",
          
        },
        {
          code: 442837002,
          display: "Excision debridement - action",
          
        },
        {
          code: 445103003,
          display: "Fixation by wedging - action",
          
        },
        {
          code: 698788008,
          display: "Transmission illumination",
          
        },
        {
          code: 698789000,
          display: "Reflection illumination",
          
        },
        {
          code: 698790009,
          display: "Epifluorescence illumination",
          
        },
        {
          code: 698792001,
          display: "Brightfield illumination",
          
        },
        {
          code: 698793006,
          display: "Darkfield illumination",
          
        },
        {
          code: 698794000,
          display: "Oblique illumination",
          
        },
        {
          code: 698796003,
          display: "Phase contrast illumination",
          
        },
        {
          code: 698797007,
          display: "Differential interference contrast",
          
        },
        {
          code: 698798002,
          display: "Total internal reflection fluorescence",
          
        },
        {
          code: 702569007,
          display: "Cone beam computed tomography imaging - action",
          
        },
        {
          code: 713295009,
          display: "Surgical replacement - action",
          
        }
      ];

    const focalDeviceActionProps = {
        options: focalDeviceAction,
        getOptionLabel: (option) => option.display,
    };

    const followUp = [
        {
          code: 18949003,
          display: "Change of dressing",
          "": ""
        },
        {
          code: 30549001,
          display: "Removal of suture",
          "": ""
        },
        {
          code: 241031001,
          display: "Removal of drain",
          "": ""
        },
        {
          code: 35963001,
          display: "Removal of staples",
          "": ""
        },
        {
          code: 225164002,
          display: "Removal of ligature",
          "": ""
        },
        {
          code: 447346005,
          display: "Cardiopulmonary exercise test",
          "": ""
        },
        {
          code: 229506003,
          display: "Scar tissue massage",
          "": ""
        },
        {
          code: 274441001,
          display: "Suction drainage",
          "": ""
        },
        {
          code: 394725008,
          display: "Diabetes medication review",
          "": ""
        },
        {
          code: 359825008,
          display: "Cytopathology, review of bronchioalveolar lavage specimen",
          "": ""
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

    const performerFunction = [
        {
          code: 104001,
          display: "Excision of lesion of patella",
          
        },
        {
          code: 115006,
          display: "Fit removable orthodontic appliance",
          
        },
        {
          code: 119000,
          display: "Thoracoscopic partial lobectomy of lung",
          
        },
        {
          code: 121005,
          display: "Retrobulbar injection of therapeutic agent",
          
        },
        {
          code: 128004,
          display: "Hand microscope examination of skin",
          
        },
        {
          code: 133000,
          display: "Percutaneous implantation of neurostimulator electrodes into neuromuscular component",
          
        },
        {
          code: 135007,
          display: "Arthrotomy of wrist joint with exploration and biopsy",
          
        },
        {
          code: 142007,
          display: "Excision of tumor from shoulder area, deep, intramuscular",
          
        },
        {
          code: 146005,
          display: "Repair of nonunion of metatarsal with bone graft",
          
        },
        {
          code: 153001,
          display: "Cystourethroscopy with resection of ureterocele",
          
        },
        {
          code: 160007,
          display: "Removal of foreign body of tendon and/or tendon sheath",
          
        },
        {
          code: 166001,
          display: "Behavioral therapy",
          
        },
        {
          code: 170009,
          display: "Special potency disk identification, vancomycin test",
          
        },
        {
          code: 174000,
          display: "Harrison-Richardson operation on vagina",
          
        },
        {
          code: 176003,
          display: "Anastomosis of rectum",
          
        },
        {
          code: 189009,
          display: "Excision of lesion of artery",
          
        },
        {
          code: 197002,
          display: "Mold to yeast conversion test",
          
        },
        {
          code: 230009,
          display: "Miller operation, urethrovesical suspension",
          
        },
        {
          code: 243009,
          display: "Replacement of cerebral ventricular tube",
          
        },
        {
          code: 245002,
          display: "Division of nerve ganglion",
          
        },
        {
          code: 262007,
          display: "Percutaneous aspiration of renal pelvis",
          
        },
        {
          code: 267001,
          display: "Anal fistulectomy, multiple",
          
        },
        {
          code: 285008,
          display: "Incision and drainage of vulva",
          
        },
        {
          code: 294002,
          display: "Excisional biopsy of joint structure of spine",
          
        },
        {
          code: 295001,
          display: "Nonexcisional destruction of cyst of ciliary body",
          
        },
        {
          code: 306005,
          display: "US kidneys",
          
        },
        {
          code: 316002,
          display: "Partial dacryocystectomy",
          
        },
        {
          code: 334003,
          display: "Panorex examination of mandible",
          
        },
        {
          code: 342002,
          display: "Amobarbital interview",
          
        },
        {
          code: 346004,
          display: "Periodontal scaling and root planing, per quadrant",
          
        },
        {
          code: 348003,
          display: "Radionuclide dynamic function study",
          
        },
        {
          code: 351005,
          display: "Urinary undiversion of ureteral anastomosis",
          
        },
        {
          code: 352003,
          display: "Reagent RBC, preparation antibody sensitized pool",
          
        },
        {
          code: 353008,
          display: "IV/irrigation monitoring",
          
        },
        {
          code: 374009,
          display: "Costosternoplasty for pectus excavatum repair",
          
        },
        {
          code: 388008,
          display: "Blepharorrhaphy",
          
        },
        {
          code: 389000,
          display: "Tobramycin level",
          
        },
        {
          code: 401004,
          display: "Distal subtotal pancreatectomy",
          
        },
        {
          code: 406009,
          display: "Fulguration of stomach lesion",
          
        },
        {
          code: 417005,
          display: "Hospital re-admission",
          
        },
        {
          code: 435001,
          display: "Pulmonary inhalation study",
          
        },
        {
          code: 445004,
          display: "Repair of malunion of tibia",
          
        },
        {
          code: 456004,
          display: "Total abdominal colectomy with ileostomy",
          
        },
        {
          code: 459006,
          display: "Closed condylotomy of mandible",
          
        },
        {
          code: 463004,
          display: "Closed reduction of coxofemoral joint dislocation with splint",
          
        },
        {
          code: 468008,
          display: "Glutathione measurement",
          
        },
        {
          code: 474008,
          display: "Esophagoenteric anastomosis, intrathoracic",
          
        },
        {
          code: 489004,
          display: "Ferritin level",
          
        },
        {
          code: 493005,
          display: "Urobilinogen measurement, 48-hour, feces",
          
        },
        {
          code: 494004,
          display: "Excision of lesion of tonsil",
          
        },
        {
          code: 497006,
          display: "Replacement of cochlear prosthesis, multiple channels",
          
        },
        {
          code: 503003,
          display: "Corneal gluing",
          
        },
        {
          code: 531007,
          display: "Open pulmonary valve commissurotomy with inflow occlusion",
          
        },
        {
          code: 533005,
          display: "Repair of vesicocolic fistula",
          
        },
        {
          code: 535003,
          display: "Closure of ureterovesicovaginal fistula",
          
        },
        {
          code: 540006,
          display: "Antibody to single and double stranded DNA measurement",
          
        },
        {
          code: 543008,
          display: "Choledochostomy with transduodenal sphincteroplasty",
          
        },
        {
          code: 545001,
          display: "Operative procedure on lower leg",
          
        },
        {
          code: 549007,
          display: "Incision of intracranial vein",
          
        },
        {
          code: 550007,
          display: "Excision of lesion of adenoids",
          
        },
        {
          code: 559008,
          display: "Excision of varicose vein",
          
        },
        {
          code: 570001,
          display: "Vaccination for arthropod-borne viral encephalitis",
          
        },
        {
          code: 574005,
          display: "Benzodiazepine measurement",
          
        },
        {
          code: 603006,
          display: "Synchondrotomy",
          
        },
        {
          code: 617002,
          display: "Bone graft of mandible",
          
        },
        {
          code: 618007,
          display: "Frontal sinusectomy",
          
        },
        {
          code: 625000,
          display: "Removal of supernumerary digit",
          
        },
        {
          code: 628003,
          display: "Steinman test",
          
        },
        {
          code: 629006,
          display: "Lysis of adhesions of urethra",
          
        },
        {
          code: 633004,
          display: "Chart review by physician",
          
        },
        {
          code: 637003,
          display: "Lysis of adhesions of nose",
          
        },
        {
          code: 642006,
          display: "Cerebral thermography",
          
        },
        {
          code: 645008,
          display: "Diagnostic procedure on vitreous",
          
        },
        {
          code: 647000,
          display: "Excision of cervix by electroconization",
          
        },
        {
          code: 657004,
          display: "Operation on bursa",
          
        },
        {
          code: 665001,
          display: "Partial meniscectomy of temporomandibular joint",
          
        },
        {
          code: 670008,
          display: "Electrosurgical epilation of eyebrow",
          
        },
        {
          code: 671007,
          display: "Transplantation of testis",
          
        },
        {
          code: 673005,
          display: "Indirect examination of larynx",
          
        },
        {
          code: 674004,
          display: "Abduction test",
          
        },
        {
          code: 676002,
          display: "Peritoneal dialysis including cannulation",
          
        },
        {
          code: 680007,
          display: "Radiation physics consultation",
          
        },
        {
          code: 687005,
          display: "Albumin/Globulin ratio",
          
        },
        {
          code: 695009,
          display: "Destructive procedure of lesion on skin of trunk",
          
        },
        {
          code: 697001,
          display: "Hepatitis A virus antibody measurement",
          
        },
        {
          code: 710006,
          display: "Thromboendarterectomy with graft of mesenteric artery",
          
        },
        {
          code: 712003,
          display: "Closed chest suction",
          
        },
        {
          code: 721002,
          display: "Medical procedure on periurethral tissue",
          
        },
        {
          code: 722009,
          display: "Fine needle biopsy of thymus",
          
        },
        {
          code: 726007,
          display: "Pathology consultation, comprehensive, records and specimen with report",
          
        },
        {
          code: 730005,
          display: "Incision of subcutaneous tissue",
          
        },
        {
          code: 741007,
          display: "Operation on prostate",
          
        },
        {
          code: 746002,
          display: "Chiropractic adjustment of coccyx subluxation",
          
        },
        {
          code: 753006,
          display: "Manipulation of ankle AND foot",
          
        },
        {
          code: 754000,
          display: "Total urethrectomy",
          
        },
        {
          code: 759005,
          display: "Intracerebral electroencephalogram",
          
        },
        {
          code: 762008,
          display: "Computerized axial tomography of cervical spine with contrast",
          
        },
        {
          code: 764009,
          display: "Arthrodesis of interphalangeal joint of great toe",
          
        },
        {
          code: 767002,
          display: "White blood cell count - observation",
          
        },
        {
          code: 789003,
          display: "Cranial decompression, subtemporal, supratentorial",
          
        },
        {
          code: 791006,
          display: "Dressing and fixation procedure",
          
        },
        {
          code: 807005,
          display: "Excision of brain",
          
        },
        {
          code: 814007,
          display: "Electrophoresis measurement",
          
        },
        {
          code: 817000,
          display: "Excision of cyst of spleen",
          
        },
        {
          code: 831000,
          display: "Drawer test",
          
        },
        {
          code: 851001,
          display: "Root canal therapy, molar, excluding final restoration",
          
        },
        {
          code: 853003,
          display: "Fecal fat measurement, 72-hour collection",
          
        },
        {
          code: 867007,
          display: "Hypoglossofacial anastomosis",
          
        },
        {
          code: 870006,
          display: "Carbamazepine measurement",
          
        },
        {
          code: 879007,
          display: "Special blood coagulation test, explain by report",
          
        },
        {
          code: 881009,
          display: "Separation of ciliary body",
          
        },
        {
          code: 893000,
          display: "Tumor antigen measurement",
          
        },
        {
          code: 897004,
          display: "Radical maxillary antrotomy",
          
        },
        {
          code: 910002,
          display: "MHPG measurement, urine",
          
        },
        {
          code: 911003,
          display: "Removal of subarachnoid-ureteral shunt",
          
        },
        {
          code: 913000,
          display: "Chiropractic patient education",
          
        },
        {
          code: 926001,
          display: "Embolectomy with catheter of radial artery by arm incision",
          
        },
        {
          code: 935008,
          display: "Excision of bulbourethral gland",
          
        },
        {
          code: 941001,
          display: "Endoscopy of pituitary gland",
          
        },
        {
          code: 945005,
          display: "Excision of tibia and fibula for graft",
          
        },
        {
          code: 948007,
          display: "Phlebectomy of intracranial varicose vein",
          
        },
        {
          code: 951000,
          display: "Ultrasonic guidance for endomyocardial biopsy",
          
        },
        {
          code: 956005,
          display: "Anesthesia for procedure on thoracic esophagus",
          
        },
        {
          code: 967006,
          display: "Drug treatment education",
          
        },
        {
          code: 969009,
          display: "Incision and exploration of larynx",
          
        },
        {
          code: 971009,
          display: "Prosthetic construction and fitting",
          
        },
        {
          code: 1001000,
          display: "Cauterization of Bartholin's gland",
          
        },
        {
          code: 1008006,
          display: "Operation on nerve ganglion",
          
        },
        {
          code: 1019009,
          display: "Removal of corneal epithelium",
          
        },
        {
          code: 1021004,
          display: "Repair of scrotum",
          
        },
        {
          code: 1029002,
          display: "Fetoscopy",
          
        },
        {
          code: 1032004,
          display: "Enucleation of parotid gland cyst",
          
        },
        {
          code: 1035002,
          display: "Minimum bactericidal concentration test, microdilution method",
          
        },
        {
          code: 1036001,
          display: "Insertion of intravascular device in common iliac vein, complete",
          
        },
        {
          code: 1041009,
          display: "Debridement of open fracture of phalanges of foot",
          
        },
        {
          code: 1042002,
          display: "Paternity testing",
          
        },
        {
          code: 1043007,
          display: "Doppler color flow velocity mapping",
          
        },
        {
          code: 1044001,
          display: "Diagnostic ultrasound of abdomen and retroperitoneum",
          
        },
        {
          code: 1048003,
          display: "Capillary blood sampling",
          
        },
        {
          code: 1054002,
          display: "Sphincterotomy of papilla of Vater",
          
        },
        {
          code: 1071001,
          display: "Proximal splenorenal anastomosis",
          
        },
        {
          code: 1084005,
          display: "Excision of perinephric cyst",
          
        },
        {
          code: 1093006,
          display: "Excision of abdominal varicose vein",
          
        },
        {
          code: 1103000,
          display: "Transcrural mobilization of stapes",
          
        },
        {
          code: 1104006,
          display: "Triad knee repair",
          
        },
        {
          code: 1115001,
          display: "Decortication",
          
        },
        {
          code: 1119007,
          display: "Closed reduction of dislocation of foot and toe",
          
        },
        {
          code: 1121002,
          display: "Kinetic activities for range of motion",
          
        },
        {
          code: 1127003,
          display: "Interstitial radium application",
          
        },
        {
          code: 1133007,
          display: "Removal of intact mammary implant, bilateral",
          
        },
        {
          code: 1163003,
          display: "Ureteroenterostomy",
          
        },
        {
          code: 1176009,
          display: "Incision of inguinal region",
          
        },
        {
          code: 1181000,
          display: "Excision of tendon for graft",
          
        },
        {
          code: 1186005,
          display: "Anesthesia for procedure on bony pelvis",
          
        },
        {
          code: 1198000,
          display: "Excisional biopsy of bone of scapula",
          
        },
        {
          code: 1209007,
          display: "Arthroscopic repair lateral meniscus",
          
        },
        {
          code: 1225002,
          display: "Upper arm X-ray",
          
        },
        {
          code: 1227005,
          display: "Incision of subvalvular tissue for discrete subvalvular aortic stenosis",
          
        },
        {
          code: 1235008,
          display: "Muscle transfer",
          
        },
        {
          code: 1237000,
          display: "Application of cast, sugar tong",
          
        },
        {
          code: 1238005,
          display: "Epiphyseal arrest by stapling of distal radius",
          
        },
        {
          code: 1251000,
          display: "Incisional biopsy of testis",
          
        },
        {
          code: 1253002,
          display: "Refusion of spine",
          
        },
        {
          code: 1258006,
          display: "Excision of meniscus of wrist",
          
        },
        {
          code: 1266002,
          display: "Closure of tympanic membrane perforation",
          
        },
        {
          code: 1267006,
          display: "Electrocoagulation of lesion of vagina",
          
        },
        {
          code: 1278003,
          display: "Open reduction of closed shoulder dislocation with fracture of greater tuberosity",
          
        },
        {
          code: 1279006,
          display: "Repair of cardiac pacemaker pocket in skin AND/OR subcutaneous tissue",
          
        },
        {
          code: 1292009,
          display: "MRI of bladder",
          
        },
        {
          code: 1299000,
          display: "Excision of appendiceal stump",
          
        },
        {
          code: 1315009,
          display: "Reconstruction of eyebrow",
          
        },
        {
          code: 1316005,
          display: "Upper partial denture, cast metal base without resin saddles, including any conventional clasps, rests and teeth",
          
        },
        {
          code: 1324000,
          display: "Cerebrospinal fluid immunoglobulin G ratio and immunoglobulin G index",
          
        },
        {
          code: 1327007,
          display: "Procedure on Meckel diverticulum",
          
        },
        {
          code: 1328002,
          display: "Ilioiliac shunt",
          
        },
        {
          code: 1329005,
          display: "Division of congenital web of larynx",
          
        },
        {
          code: 1337002,
          display: "Colosigmoidostomy",
          
        },
        {
          code: 1339004,
          display: "Manual evacuation of feces",
          
        },
        {
          code: 1347004,
          display: "Medical procedure on palate",
          
        },
        {
          code: 1352009,
          display: "Anterior spinal rhizotomy",
          
        },
        {
          code: 1358008,
          display: "Anti-human globulin test, enzyme technique, titer",
          
        },
        {
          code: 1366004,
          display: "Breathing treatment",
          
        },
        {
          code: 1385001,
          display: "Echography, scan B-mode for foetal age determination",
          
        },
        {
          code: 1390003,
          display: "Laparoscopic sigmoid colectomy",
          
        },
        {
          code: 1398005,
          display: "Direct thrombectomy of iliac vein by leg incision",
          
        },
        {
          code: 1399002,
          display: "Incision and exploration of ureter",
          
        },
        {
          code: 1407007,
          display: "Application of long leg cast, brace type",
          
        },
        {
          code: 1410000,
          display: "Anesthesia for tympanotomy",
          
        },
        {
          code: 1411001,
          display: "Operation on papillary muscle of heart",
          
        },
        {
          code: 1413003,
          display: "Penetrating keratoplasty with homograft",
          
        },
        {
          code: 1414009,
          display: "Angiography of arteriovenous shunt",
          
        },
        {
          code: 1417002,
          display: "Operation on face",
          
        },
        {
          code: 1431002,
          display: "pexy",
          
        },
        {
          code: 1440003,
          display: "Repair with resection-recession",
          
        },
        {
          code: 1449002,
          display: "Removal of hair",
          
        },
        {
          code: 1453000,
          display: "Biofeedback, galvanic skin response",
          
        },
        {
          code: 1455007,
          display: "Cerclage",
          
        },
        {
          code: 1457004,
          display: "Truncal vagotomy with pyloroplasty and gastrostomy",
          
        },
        {
          code: 1494008,
          display: "Osmolarity measurement",
          
        },
        {
          code: 1500007,
          display: "Bilateral epididymovasostomy",
          
        },
        {
          code: 1501006,
          display: "Altemeier operation, perineal rectal pull-through",
          
        },
        {
          code: 1505002,
          display: "Hospital admission for isolation",
          
        },
        {
          code: 1529009,
          display: "Aspiration of soft tissue",
          
        },
        {
          code: 1533002,
          display: "Ureteroplication",
          
        },
        {
          code: 1550000,
          display: "Amikacin level",
          
        },
        {
          code: 1555005,
          display: "Brief group psychotherapy",
          
        },
        {
          code: 1559004,
          display: "Interleukin (IL)-2 assay",
          
        },
        {
          code: 1576000,
          display: "Repair of intestinouterine fistula",
          
        },
        {
          code: 1577009,
          display: "Implantation of cardiac single-chamber device replacement, rate-responsive",
          
        },
        {
          code: 1578004,
          display: "Reconstruction of ossicles with stapedectomy",
          
        },
        {
          code: 1583007,
          display: "Tractotomy of mesencephalon",
          
        },
        {
          code: 1585000,
          display: "Lengthening of gastrocnemius muscle",
          
        },
        {
          code: 1596008,
          display: "Anesthesia for total elbow replacement",
          
        },
        {
          code: 1597004,
          display: "Skeletal X-ray of ankle and foot",
          
        },
        {
          code: 1602006,
          display: "Social service interview with planning",
          
        },
        {
          code: 1614003,
          display: "Bilateral repair of inguinal hernia, direct",
          
        },
        {
          code: 1615002,
          display: "Reline upper partial denture, chairside",
          
        },
        {
          code: 1616001,
          display: "Galactosylceramide beta-galactosidase measurement, leukocytes",
          
        },
        {
          code: 1636000,
          display: "Injection of sclerosing agent in varicose vein",
          
        },
        {
          code: 1638004,
          display: "Cineplasty with cineplastic prosthesis of extremity",
          
        },
        {
          code: 1640009,
          display: "History and physical examination, insurance",
          
        },
        {
          code: 1645004,
          display: "Transduodenal sphincterotomy",
          
        },
        {
          code: 1651009,
          display: "Excision of tendon sheath",
          
        },
        {
          code: 1653007,
          display: "Internal fixation of bone without fracture reduction",
          
        },
        {
          code: 1669000,
          display: "Making occupied bed",
          
        },
        {
          code: 1677001,
          display: "Haagensen test",
          
        },
        {
          code: 1678006,
          display: "Endoscopic procedure of nerve",
          
        },
        {
          code: 1680000,
          display: "Secondary chemoprophylaxis",
          
        },
        {
          code: 1683003,
          display: "Direct closure of laceration of conjunctiva",
          
        },
        {
          code: 1689004,
          display: "Local excision of ovary",
          
        },
        {
          code: 1691007,
          display: "Drainage of abscess of tonsil",
          
        },
        {
          code: 1699009,
          display: "Special dosimetry",
          
        },
        {
          code: 1702002,
          display: "Labial veneer, resin laminate, laboratory",
          
        },
        {
          code: 1704001,
          display: "Correction of tibial pseudoarthrosis",
          
        },
        {
          code: 1709006,
          display: "Breast reconstruction, bilateral, with bilateral pedicle transverse rectus abdominis myocutaneous flaps",
          
        },
        {
          code: 1712009,
          display: "Immunoglobulin typing, immunoglobulin G",
          
        },
        {
          code: 1713004,
          display: "Hypothermia, total body, induction and maintenance",
          
        },
        {
          code: 1730002,
          display: "Suture of skin wound of hindfoot",
          
        },
        {
          code: 1746005,
          display: "Buckling of sclera using implant",
          
        },
        {
          code: 1747001,
          display: "Replacement of skeletal muscle stimulator",
          
        },
        {
          code: 1753001,
          display: "Resection of uveal tissue",
          
        },
        {
          code: 1757000,
          display: "Arthroscopy of wrist with partial synovectomy",
          
        },
        {
          code: 1759002,
          display: "Assessment of nutritional status",
          
        },
        {
          code: 1770009,
          display: "Mitral valvotomy",
          
        },
        {
          code: 1774000,
          display: "Nasopharyngeal rehabilitation",
          
        },
        {
          code: 1775004,
          display: "Submaxillary incision with drainage",
          
        },
        {
          code: 1784004,
          display: "Fecal stercobilin, qualitative",
          
        },
        {
          code: 1787006,
          display: "Ultrasonic guidance for pericardiocentesis",
          
        },
        {
          code: 1788001,
          display: "Blood unit collection for directed donation, donor",
          
        },
        {
          code: 1801001,
          display: "Endoscopic biopsy of duodenum",
          
        },
        {
          code: 1805005,
          display: "Take-down of stoma",
          
        },
        {
          code: 1811008,
          display: "Aspiration of bursa of hand",
          
        },
        {
          code: 1813006,
          display: "Cryotherapy of genital warts",
          
        },
        {
          code: 1820004,
          display: "Ethanol measurement, breath",
          
        },
        {
          code: 1830008,
          display: "Open reduction of open sacral fracture",
          
        },
        {
          code: 1836002,
          display: "Excision of diverticulum of ventricle of heart",
          
        },
        {
          code: 1844002,
          display: "Plication of ligament",
          
        },
        {
          code: 1854003,
          display: "Incision of nose",
          
        },
        {
          code: 1859008,
          display: "Hand tendon foreign body removed",
          
        },
        {
          code: 1861004,
          display: "Anesthesia for closed procedure on humerus and elbow",
          
        },
        {
          code: 1862006,
          display: "Thoracic phlebectomy",
          
        },
        {
          code: 1866009,
          display: "Bilateral total nephrectomy",
          
        },
        {
          code: 1868005,
          display: "FB - Removal of foreign body from brain",
          
        },
        {
          code: 1870001,
          display: "Insertion of halo device of skull with synchronous skeletal traction",
          
        },
        {
          code: 1871002,
          display: "Repair of aneurysm of coronary artery",
          
        },
        {
          code: 1872009,
          display: "Suture of male perineum",
          
        },
        {
          code: 1876007,
          display: "Recession of prognathic jaw",
          
        },
        {
          code: 1879000,
          display: "Fluorescent antigen measurement",
          
        },
        {
          code: 1889001,
          display: "Patient transfer, in-hospital, unit-to-unit",
          
        },
        {
          code: 1906007,
          display: "Insertion of prosthesis or prosthetic device of arm, bioelectric or cineplastic",
          
        },
        {
          code: 1907003,
          display: "Bifurcation of bone",
          
        },
        {
          code: 1917008,
          display: "Patient discharge, deceased, medicolegal case",
          
        },
        {
          code: 1924009,
          display: "Hepaticotomy with drainage",
          
        },
        {
          code: 1950008,
          display: "Drainage of nasal septal abscess",
          
        },
        {
          code: 1958001,
          display: "Grafting of bone of thumb with transfer of skin flap",
          
        },
        {
          code: 1966005,
          display: "Central block anesthesia",
          
        },
        {
          code: 1983001,
          display: "Total urethrectomy including cystostomy in female",
          
        },
        {
          code: 1995001,
          display: "Stripping of cerebral meninges",
          
        },
        {
          code: 1999007,
          display: "Psychologic test",
          
        },
        {
          code: 2002009,
          display: "Construction of subcutaneous tunnel without esophageal anastomosis",
          
        },
        {
          code: 2021001,
          display: "Internal fixation of radius and ulna without fracture reduction",
          
        },
        {
          code: 2051007,
          display: "Red cell iron utilization study",
          
        },
        {
          code: 2054004,
          display: "Barbiturates measurement, quantitative and qualitative",
          
        },
        {
          code: 2067001,
          display: "Implantation of electromagnetic hearing aid",
          
        },
        {
          code: 2069003,
          display: "Dental subperiosteal implant",
          
        },
        {
          code: 2078009,
          display: "Puncture of bursa of hand",
          
        },
        {
          code: 2079001,
          display: "Reimplantation of anomalous pulmonary artery",
          
        },
        {
          code: 2080003,
          display: "Angiectomy with anastomosis of lower limb artery",
          
        },
        {
          code: 2098004,
          display: "Open reduction of open mandibular fracture with external fixation",
          
        },
        {
          code: 2115003,
          display: "Dental prophylaxis, children",
          
        },
        {
          code: 2119009,
          display: "Repair of blood vessel",
          
        },
        {
          code: 2127000,
          display: "Reduction of closed sacral fracture",
          
        },
        {
          code: 2137005,
          display: "Excision of pericardial tumor",
          
        },
        {
          code: 2153008,
          display: "Cardiac catheterization education",
          
        },
        {
          code: 2161003,
          display: "Operation on vulva",
          
        },
        {
          code: 2164006,
          display: "Injection of aorta",
          
        },
        {
          code: 2166008,
          display: "Bicuspidization of aortic valve",
          
        },
        {
          code: 2171001,
          display: "Excision of tonsil tags",
          
        },
        {
          code: 2178007,
          display: "Ureterocentesis",
          
        },
        {
          code: 2181002,
          display: "Operation for bone injury of tarsals and metatarsals",
          
        },
        {
          code: 2188008,
          display: "Suture of tendon to skeletal attachment",
          
        },
        {
          code: 2193006,
          display: "Repair of ruptured aneurysm with graft of celiac artery",
          
        },
        {
          code: 2196003,
          display: "Gas liquid chromatography, electron capture type",
          
        },
        {
          code: 2199005,
          display: "Excision of lesion of cul-de-sac",
          
        },
        {
          code: 2214008,
          display: "Curette test of skin",
          
        },
        {
          code: 2220009,
          display: "Complement component assay",
          
        },
        {
          code: 2225004,
          display: "Sensititer system test",
          
        },
        {
          code: 2234009,
          display: "Proctosigmoidopexy",
          
        },
        {
          code: 2238007,
          display: "Stone operation, anoplasty",
          
        },
        {
          code: 2242005,
          display: "Reconstruction of eyelid",
          
        },
        {
          code: 2244006,
          display: "Arthroscopy of wrist with internal fixation for instability",
          
        },
        {
          code: 2250001,
          display: "Resection of ascending aorta with anastomosis",
          
        },
        {
          code: 2252009,
          display: "Hospital admission, urgent, 48 hours",
          
        },
        {
          code: 2266004,
          display: "Venography of adrenal, bilateral",
          
        },
        {
          code: 2267008,
          display: "Replacement of tracheostomy tube",
          
        },
        {
          code: 2270007,
          display: "Correction of cleft hand",
          
        },
        {
          code: 2276001,
          display: "Exploration of popliteal artery",
          
        },
        {
          code: 2278000,
          display: "Urinalysis, automated",
          
        },
        {
          code: 2279008,
          display: "Antibody detection, red blood cell, enzyme, 1 stage technique, including anti-human globulin",
          
        },
        {
          code: 2290003,
          display: "Microbial culture, anaerobic, initial isolation",
          
        },
        {
          code: 2315006,
          display: "Brain meninges operation",
          
        },
        {
          code: 2318008,
          display: "Anesthesia for cast procedure on forearm, wrist or hand",
          
        },
        {
          code: 2321005,
          display: "Delivery by Ritgen maneuver",
          
        },
        {
          code: 2322003,
          display: "Suture of recent wound of eyelid, direct closure, full-thickness",
          
        },
        {
          code: 2337004,
          display: "Adductor tenotomy",
          
        },
        {
          code: 2344008,
          display: "Complicated cystorrhaphy",
          
        },
        {
          code: 2347001,
          display: "Diagnostic model construction",
          
        },
        {
          code: 2364003,
          display: "Radical resection of tumor of soft tissue of wrist area",
          
        },
        {
          code: 2371008,
          display: "Tympanoplasty type II with graft against incus or malleus",
          
        },
        {
          code: 2373006,
          display: "Buffy coat smear evaluation",
          
        },
        {
          code: 2382000,
          display: "Application of breast pump",
          
        },
        {
          code: 2386002,
          display: "Closed reduction of dislocation of patella",
          
        },
        {
          code: 2393003,
          display: "Ligation of vein of lower limb",
          
        },
        {
          code: 2406000,
          display: "Chart periodontal pocket",
          
        },
        {
          code: 2407009,
          display: "Excision of mediastinal tumor",
          
        },
        {
          code: 2408004,
          display: "Hexosaminidase A and total hexosaminidase measurement, serum",
          
        },
        {
          code: 2409007,
          display: "Replantation of toe",
          
        },
        {
          code: 2425002,
          display: "Epstein-Barr virus serologic test",
          
        },
        {
          code: 2442008,
          display: "Incision of lacrimal canaliculus",
          
        },
        {
          code: 2448007,
          display: "Cell count of synovial fluid with differential count",
          
        },
        {
          code: 2455009,
          display: "Revision of lumbosubarachnoid shunt",
          
        },
        {
          code: 2457001,
          display: "Blind rehabilitation",
          
        },
        {
          code: 2458006,
          display: "Educational therapy",
          
        },
        {
          code: 2459003,
          display: "Destructive procedure of artery of upper extremity",
          
        },
        {
          code: 2461007,
          display: "Tennis elbow test",
          
        },
        {
          code: 2474001,
          display: "Repair of malunion of metatarsal bones",
          
        },
        {
          code: 2475000,
          display: "Twenty-four hour collection of urine",
          
        },
        {
          code: 2480009,
          display: "Debridement of skin, subcutaneous tissue, muscle and bone",
          
        },
        {
          code: 2486003,
          display: "Destructive procedure of breast",
          
        },
        {
          code: 2488002,
          display: "Provision of contact lens",
          
        },
        {
          code: 2494005,
          display: "Nurse to nurse communication",
          
        },
        {
          code: 2498008,
          display: "Rebase of upper partial denture",
          
        },
        {
          code: 2507007,
          display: "5' Nucleotidase measurement",
          
        },
        {
          code: 2508002,
          display: "Retrograde urography with kidney-ureter-bladder",
          
        },
        {
          code: 2514009,
          display: "Manual reduction of closed supracondylar fracture of humerus with traction",
          
        },
        {
          code: 2517002,
          display: "Stroke rehabilitation",
          
        },
        {
          code: 2530001,
          display: "Chiropractic visit",
          
        },
        {
          code: 2531002,
          display: "Mononuclear cell function assay",
          
        },
        {
          code: 2535006,
          display: "Removal of pulp - complete",
          
        },
        {
          code: 2536007,
          display: "Injection of medication in anterior chamber of eye",
          
        },
        {
          code: 2547000,
          display: "Excision of keloid",
          
        },
        {
          code: 2552005,
          display: "Incision of cerebral subarachnoid space",
          
        },
        {
          code: 2564002,
          display: "Creation of lumbar shunt including laminectomy",
          
        },
        {
          code: 2566000,
          display: "Osteoplasty of radius",
          
        },
        {
          code: 2567009,
          display: "Resection of rib by transaxillary approach",
          
        },
        {
          code: 2580007,
          display: "Transplant of hair follicles to scalp",
          
        },
        {
          code: 2598006,
          display: "Open heart surgery",
          
        },
        {
          code: 2601001,
          display: "Removal of bone flap of skull",
          
        },
        {
          code: 2607002,
          display: "Operation of supporting structures of uterus",
          
        },
        {
          code: 2613006,
          display: "Implantation of joint prosthesis of hand",
          
        },
        {
          code: 2614000,
          display: "Removal of ligature from fallopian tube",
          
        },
        {
          code: 2616003,
          display: "Repair of bifid digit of hand",
          
        },
        {
          code: 2619005,
          display: "Psychiatric interpretation to family or parents of patient",
          
        },
        {
          code: 2629003,
          display: "Intracranial/cerebral perfusion pressure monitoring",
          
        },
        {
          code: 2632000,
          display: "Incision and drainage of infected bursa of upper arm",
          
        },
        {
          code: 2642003,
          display: "Prefabricated post and core in addition to crown",
          
        },
        {
          code: 2643008,
          display: "Ligation of varicose vein of head and neck",
          
        },
        {
          code: 2644002,
          display: "Cauterization of liver",
          
        },
        {
          code: 2645001,
          display: "Intelligence test/WB1",
          
        },
        {
          code: 2646000,
          display: "Incision and exploration of vas deferens",
          
        },
        {
          code: 2658000,
          display: "Social service interview of patient",
          
        },
        {
          code: 2659008,
          display: "Suture of ligament of lower extremity",
          
        },
        {
          code: 2668005,
          display: "Recementation of space maintainer",
          
        },
        {
          code: 2670001,
          display: "Diagnostic procedure on cornea",
          
        },
        {
          code: 2673004,
          display: "Incision and drainage of masticator space by extraoral approach",
          
        },
        {
          code: 2677003,
          display: "Stripping",
          
        },
        {
          code: 2690005,
          display: "MRI of pelvis",
          
        },
        {
          code: 2693007,
          display: "Stool fat, quantitative measurement",
          
        },
        {
          code: 2696004,
          display: "Hepatic venography with hemodynamic evaluation",
          
        },
        {
          code: 2697008,
          display: "Stripping and ligation of great saphenous vein",
          
        },
        {
          code: 2716009,
          display: "Dermal-fat-fascia graft",
          
        },
        {
          code: 2722000,
          display: "Interleukin-3 assay",
          
        },
        {
          code: 2731000,
          display: "Serologic test for influenza virus A",
          
        },
        {
          code: 2732007,
          display: "Recession of tendon of hand",
          
        },
        {
          code: 2737001,
          display: "Exploratory craniotomy, infratentorial",
          
        },
        {
          code: 2742009,
          display: "Destruction of Bartholin's gland",
          
        },
        {
          code: 2743004,
          display: "Operative endoscopy of ileum",
          
        },
        {
          code: 2745006,
          display: "Epiplopexy",
          
        },
        {
          code: 2752008,
          display: "Incudopexy",
          
        },
        {
          code: 2780005,
          display: "Osteoplasty of facial bones",
          
        },
        {
          code: 2794006,
          display: "Cauterization of navel",
          
        },
        {
          code: 2802005,
          display: "Manual dilation and stretching",
          
        },
        {
          code: 2811005,
          display: "Cineradiography of pharynx",
          
        },
        {
          code: 2813008,
          display: "Nephroureterocystectomy",
          
        },
        {
          code: 2837008,
          display: "Transposition of ulnar nerve at elbow",
          
        },
        {
          code: 2842000,
          display: "Gas chromatography measurement",
          
        },
        {
          code: 2843005,
          display: "Revision of urinary conduit",
          
        },
        {
          code: 2847006,
          display: "Cervical myelography",
          
        },
        {
          code: 2851008,
          display: "Arthrotomy for synovectomy of sternoclavicular joint",
          
        },
        {
          code: 2854000,
          display: "Bursectomy of hand",
          
        },
        {
          code: 2857007,
          display: "Pinealectomy",
          
        },
        {
          code: 2866006,
          display: "Obliteration of lymphatic structure",
          
        },
        {
          code: 2875008,
          display: "Implantation of joint prosthesis of elbow",
          
        },
        {
          code: 2876009,
          display: "Hospital admission, type unclassified, explain by report",
          
        },
        {
          code: 2885009,
          display: "Intradermal allergen test",
          
        },
        {
          code: 2891006,
          display: "Arthroscopy of elbow with partial synovectomy",
          
        },
        {
          code: 2898000,
          display: "Deoxyribonucleic acid analysis, antenatal, blood",
          
        },
        {
          code: 2903001,
          display: "Diagnostic procedure on anterior chamber of eye",
          
        },
        {
          code: 2908005,
          display: "Cryotherapy to hemorrhoid",
          
        },
        {
          code: 2914003,
          display: "Anterior sclerotomy",
          
        },
        {
          code: 2915002,
          display: "Suture of capsule of ankle",
          
        },
        {
          code: 2933008,
          display: "Pneumogynecography",
          
        },
        {
          code: 2945004,
          display: "Suprapubic diverticulectomy of urinary bladder",
          
        },
        {
          code: 2947007,
          display: "Therapeutic compound measurement",
          
        },
        {
          code: 2960001,
          display: "Closure of fistula of uterine cervix",
          
        },
        {
          code: 2968008,
          display: "Craniectomy with treatment of penetrating wound of brain",
          
        },
        {
          code: 2970004,
          display: "Metacarpal lengthening and transfer of local flap",
          
        },
        {
          code: 2971000,
          display: "Closure of acquired urethrovaginal fistula",
          
        },
        {
          code: 2977001,
          display: "Thrombectomy of lower limb vein",
          
        },
        {
          code: 3001009,
          display: "Total lobectomy with bronchoplasty",
          
        },
        {
          code: 3010001,
          display: "Removal of silastic tubes from ear",
          
        },
        {
          code: 3016007,
          display: "Removal of Crutchfield tongs from skull",
          
        },
        {
          code: 3025001,
          display: "Calcitonin measurement",
          
        },
        {
          code: 3026000,
          display: "Tibiotalar arthrodesis",
          
        },
        {
          code: 3029007,
          display: "Peripheral nervous system disease rehabilitation",
          
        },
        {
          code: 3041000,
          display: "Repair of stomach",
          
        },
        {
          code: 3047001,
          display: "Kowa fundus photography",
          
        },
        {
          code: 3060007,
          display: "Forequarter amputation, right",
          
        },
        {
          code: 3061006,
          display: "Complete excision of nail AND nail matrix",
          
        },
        {
          code: 3063009,
          display: "Gastroscopy through artificial stoma",
          
        },
        {
          code: 3075004,
          display: "Nonoperative removal of prosthesis of bile duct",
          
        },
        {
          code: 3078002,
          display: "Embolectomy with catheter of renal artery by abdominal incision",
          
        },
        {
          code: 3083005,
          display: "Removal of device from thorax",
          
        },
        {
          code: 3088001,
          display: "Anesthesia for endoscopic procedure on upper extremity",
          
        },
        {
          code: 3090000,
          display: "Aneurysmectomy with graft replacement of lower limb artery",
          
        },
        {
          code: 3112006,
          display: "Restraint removal",
          
        },
        {
          code: 3116009,
          display: "Clotting screening",
          
        },
        {
          code: 3130004,
          display: "Monitoring of cardiac output by electrocardiogram",
          
        },
        {
          code: 3133002,
          display: "Patient discharge, deceased, autopsy",
          
        },
        {
          code: 3137001,
          display: "Replacement",
          
        },
        {
          code: 3143004,
          display: "Visual field examination and evaluation, intermediate",
          
        },
        {
          code: 3162001,
          display: "Gadolinium measurement",
          
        },
        {
          code: 3164000,
          display: "Open reduction of closed mandibular fracture with interdental fixation",
          
        },
        {
          code: 3165004,
          display: "Irrigation of muscle of hand",
          
        },
        {
          code: 3166003,
          display: "Closure of fistula of salivary gland",
          
        },
        {
          code: 3177009,
          display: "Internal obstetrical version",
          
        },
        {
          code: 3183007,
          display: "Closure of colostomy",
          
        },
        {
          code: 3186004,
          display: "Excision of Skene gland",
          
        },
        {
          code: 3190002,
          display: "Epilation by forceps",
          
        },
        {
          code: 3204007,
          display: "Destructive procedure of nerve",
          
        },
        {
          code: 3241008,
          display: "Correction of chordee with mobilization of urethra",
          
        },
        {
          code: 3249005,
          display: "Surgical construction of filtration bleb",
          
        },
        {
          code: 3251009,
          display: "Mayo operation, herniorrhaphy",
          
        },
        {
          code: 3256004,
          display: "Cervical lymphangiogram",
          
        },
        {
          code: 3257008,
          display: "Empty and measure peritoneal dialysis fluid",
          
        },
        {
          code: 3258003,
          display: "Cerebral arteriography",
          
        },
        {
          code: 3268008,
          display: "Transplantation of tissue of pelvic region",
          
        },
        {
          code: 3270004,
          display: "Implantation of neurostimulator in spine",
          
        },
        {
          code: 3278006,
          display: "Lysis of adhesions of bursa of hand",
          
        },
        {
          code: 3287002,
          display: "Cholecystogastrostomy",
          
        },
        {
          code: 3320000,
          display: "Abt - autologous blood transfusion",
          
        },
        {
          code: 3324009,
          display: "Laser beam photocoagulation",
          
        },
        {
          code: 3326006,
          display: "Excision of exostosis of head of fifth metatarsal",
          
        },
        {
          code: 3328007,
          display: "Incision of vein of head and neck",
          
        },
        {
          code: 3333006,
          display: "Application of short arm splint, forearm to hand, static",
          
        },
        {
          code: 3338002,
          display: "Open reduction of open radial shaft fracture",
          
        },
        {
          code: 3352000,
          display: "PTH - Parathyroid hormone level",
          
        },
        {
          code: 3357006,
          display: "Iron kinetics",
          
        },
        {
          code: 3360004,
          display: "Biliary anastomosis",
          
        },
        {
          code: 3390006,
          display: "Verification procedure",
          
        },
        {
          code: 3399007,
          display: "Reduction of torsion of omentum",
          
        },
        {
          code: 3407002,
          display: "Creation of lesion of spinal cord by percutaneous method",
          
        },
        {
          code: 3413006,
          display: "Blood cell morphology",
          
        },
        {
          code: 3418002,
          display: "Chondrectomy of spine",
          
        },
        {
          code: 3432000,
          display: "Preventive dental service",
          
        },
        {
          code: 3443008,
          display: "Pulp capping",
          
        },
        {
          code: 3448004,
          display: "Fixation of contralateral testis",
          
        },
        {
          code: 3450007,
          display: "Lymphocytes, T & B cell evaluation",
          
        },
        {
          code: 3457005,
          display: "Referral procedure",
          
        },
        {
          code: 3479000,
          display: "Removal of heart assist system with replacement",
          
        },
        {
          code: 3498003,
          display: "Total excision of pituitary gland by transsphenoidal approach",
          
        },
        {
          code: 3499006,
          display: "Aspiration of vitreous with replacement",
          
        },
        {
          code: 3509001,
          display: "Streptococcus vaccination",
          
        },
        {
          code: 3512003,
          display: "Angiography of arteries of extremity",
          
        },
        {
          code: 3515001,
          display: "Replacement of electronic heart device, pulse generator",
          
        },
        {
          code: 3517009,
          display: "Removal of foreign body of pelvis from subcutaneous tissue",
          
        },
        {
          code: 3518004,
          display: "Aversive psychotherapy",
          
        },
        {
          code: 3527003,
          display: "Antibody measurement",
          
        },
        {
          code: 3546002,
          display: "CVG - Coronary vein graft",
          
        },
        {
          code: 3559005,
          display: "Insertion of ureteral stent with ureterotomy",
          
        },
        {
          code: 3562008,
          display: "Rodney Smith operation, radical subtotal pancreatectomy",
          
        },
        {
          code: 3564009,
          display: "Removal of foreign body from fallopian tube",
          
        },
        {
          code: 3575008,
          display: "Repair of fascia with graft of fascia",
          
        },
        {
          code: 3580004,
          display: "Removal of calculus of pharynx",
          
        },
        {
          code: 3605001,
          display: "Reduction of ciliary body",
          
        },
        {
          code: 3607009,
          display: "Transplantation of mesenteric tissue",
          
        },
        {
          code: 3620007,
          display: "Red cell survival study with hepatic sequestration",
          
        },
        {
          code: 3625002,
          display: "Anesthesia for brachial arteriograms, retrograde",
          
        },
        {
          code: 3651000,
          display: "Morphometric analysis, nerve",
          
        },
        {
          code: 3654008,
          display: "Excision of lingula",
          
        },
        {
          code: 3659003,
          display: "Incision of inner ear",
          
        },
        {
          code: 3664004,
          display: "Closure of scleral fistula",
          
        },
        {
          code: 3666002,
          display: "Repair of peripheral nerve by suturing",
          
        },
        {
          code: 3669009,
          display: "Fitting of prosthesis or prosthetic device of upper arm",
          
        },
        {
          code: 3673007,
          display: "Leadbetter urethral reconstruction",
          
        },
        {
          code: 3683006,
          display: "Selenium measurement, urine",
          
        },
        {
          code: 3686003,
          display: "Zancolli operation for tendon transfer of biceps",
          
        },
        {
          code: 3688002,
          display: "Anesthesia for lens surgery",
          
        },
        {
          code: 3690001,
          display: "Shunt of left subclavian to descending aorta by Blalock-Park operation",
          
        },
        {
          code: 3691002,
          display: "Wedge osteotomy of tarsals and metatarsals",
          
        },
        {
          code: 3697003,
          display: "Tissue processing technique, routine, embed, cut and stain, per autopsy",
          
        },
        {
          code: 3700004,
          display: "Erysophake extraction of lens",
          
        },
        {
          code: 3701000,
          display: "Removal of foreign body of hip from subcutaneous tissue",
          
        },
        {
          code: 3713005,
          display: "Release for de Quervain tenosynovitis of hand",
          
        },
        {
          code: 3717006,
          display: "Dilute Russell viper venom time",
          
        },
        {
          code: 3734003,
          display: "SSG - Split skin graft",
          
        },
        {
          code: 3735002,
          display: "Coproporphyrin III measurement",
          
        },
        {
          code: 3740005,
          display: "Removal of foreign body of canthus by incision",
          
        },
        {
          code: 3748003,
          display: "Biopsy of perirenal tissue",
          
        },
        {
          code: 3749006,
          display: "Reduction of closed ischial fracture",
          
        },
        {
          code: 3758004,
          display: "Thrombectomy with catheter of subclavian artery by neck incision",
          
        },
        {
          code: 3770000,
          display: "Ward urine dip stick testing",
          
        },
        {
          code: 3778007,
          display: "Scrotum manipulation",
          
        },
        {
          code: 3780001,
          display: "Routine patient disposition, no follow-up planned",
          
        },
        {
          code: 3784005,
          display: "Delayed hypersensitivity skin test for streptokinase-streptodornase",
          
        },
        {
          code: 3786007,
          display: "Excision of lesion of pharynx",
          
        },
        {
          code: 3787003,
          display: "Ultrasonic guidance for needle biopsy",
          
        },
        {
          code: 3794000,
          display: "Pregnanetriol measurement",
          
        },
        {
          code: 3796003,
          display: "Excision of redundant mucosa from jejunostomy",
          
        },
        {
          code: 3799005,
          display: "Radiography of adenoids",
          
        },
        {
          code: 3802001,
          display: "Topical application of tooth medicament - desensitizing agent",
          
        },
        {
          code: 3819004,
          display: "Embolization of thoracic artery",
          
        },
        {
          code: 3826004,
          display: "Blepharotomy with drainage of abscess of eyelid",
          
        },
        {
          code: 3828003,
          display: "Open biopsy of vertebral body of thoracic region",
          
        },
        {
          code: 3831002,
          display: "Chiropractic application of ice",
          
        },
        {
          code: 3843001,
          display: "Removal of foreign body from fascia",
          
        },
        {
          code: 3858009,
          display: "Echography of thyroid, A-mode",
          
        },
        {
          code: 3861005,
          display: "Aneurysmectomy with anastomosis of lower limb artery",
          
        },
        {
          code: 3862003,
          display: "Total vital capacity measurement",
          
        },
        {
          code: 3864002,
          display: "Excisional biopsy of scrotum",
          
        },
        {
          code: 3880007,
          display: "Excision of lesion of fibula",
          
        },
        {
          code: 3881006,
          display: "Incision and drainage of submental space by extraoral approach",
          
        },
        {
          code: 3887005,
          display: "Wart ligation",
          
        },
        {
          code: 3889008,
          display: "Suture of lip",
          
        },
        {
          code: 3891000,
          display: "Comprehensive orthodontic treatment, permanent dentition, for class I malocclusion",
          
        },
        {
          code: 3895009,
          display: "Dressing",
          
        },
        {
          code: 3907006,
          display: "Incision and drainage of retroperitoneal abscess",
          
        },
        {
          code: 3911000,
          display: "Transplantation of muscle",
          
        },
        {
          code: 3915009,
          display: "Excision of artery of thorax and abdomen",
          
        },
        {
          code: 3917001,
          display: "Excisional biopsy of phalanges of foot",
          
        },
        {
          code: 3918006,
          display: "Plastic repair with lengthening",
          
        },
        {
          code: 3926003,
          display: "Lactate measurement",
          
        },
        {
          code: 3929005,
          display: "Patient transfer, in-hospital, bed-to-bed",
          
        },
        {
          code: 3936006,
          display: "Making Foster bed",
          
        },
        {
          code: 3938007,
          display: "Cerclage for retinal reattachment",
          
        },
        {
          code: 3942005,
          display: "Cystopexy",
          
        },
        {
          code: 3955006,
          display: "Antibody elution from red blood cells",
          
        },
        {
          code: 3957003,
          display: "Arteriectomy of thoracoabdominal aorta",
          
        },
        {
          code: 3963007,
          display: "Operation on submaxillary gland",
          
        },
        {
          code: 3967008,
          display: "Fluorescence polarization immunoassay",
          
        },
        {
          code: 3968003,
          display: "Excision of spinal facet joint",
          
        },
        {
          code: 3969006,
          display: "Removal of osteocartilagenous loose body from joint structures",
          
        },
        {
          code: 3971006,
          display: "Duchenne muscular dystrophy carrier detection",
          
        },
        {
          code: 3980006,
          display: "Partial excision of esophagus",
          
        },
        {
          code: 3981005,
          display: "Carrier detection, molecular genetics",
          
        },
        {
          code: 3985001,
          display: "Anesthesia for procedure on arteries of lower leg with bypass graft",
          
        },
        {
          code: 3991004,
          display: "MRI of pelvis, prostate and bladder",
          
        },
        {
          code: 3998005,
          display: "Bone imaging of limited area",
          
        },
        {
          code: 4007002,
          display: "Anti-human globulin test, indirect, titer, non-gamma",
          
        },
        {
          code: 4008007,
          display: "Phlebography of neck",
          
        },
        {
          code: 4010009,
          display: "Oophorectomy of remaining ovary with tube",
          
        },
        {
          code: 4027001,
          display: "Implantation of electronic stimulator into phrenic nerve",
          
        },
        {
          code: 4034004,
          display: "Closed reduction of facial fracture, except mandible",
          
        },
        {
          code: 4035003,
          display: "Restoration, resin, two surfaces, posterior, permanent",
          
        },
        {
          code: 4036002,
          display: "Arthroscopy of elbow with extensive debridement",
          
        },
        {
          code: 4037006,
          display: "Removal of vascular graft or prosthesis",
          
        },
        {
          code: 4044002,
          display: "Construction of permanent colostomy",
          
        },
        {
          code: 4045001,
          display: "Drainage of cerebral ventricle by incision",
          
        },
        {
          code: 4052004,
          display: "Percutaneous aspiration of spinal cord cyst",
          
        },
        {
          code: 4064007,
          display: "Specimen aliquoting",
          
        },
        {
          code: 4068005,
          display: "Removal of ventricular reservoir with synchronous replacement",
          
        },
        {
          code: 4083000,
          display: "Fitting of prosthesis or prosthetic device of lower arm",
          
        },
        {
          code: 4084006,
          display: "Repair of tendon of hand by graft or implant of muscle",
          
        },
        {
          code: 4090005,
          display: "Replacement of transvenous atrial and ventricular pacemaker electrode leads",
          
        },
        {
          code: 4094001,
          display: "Reduction of retroversion of uterus by suppository",
          
        },
        {
          code: 4101004,
          display: "Revision of spinal pleurothecal shunt",
          
        },
        {
          code: 4102006,
          display: "Root canal therapy, anterior, excluding final restoration",
          
        },
        {
          code: 4114003,
          display: "Parenteral chemotherapy for malignant neoplasm",
          
        },
        {
          code: 4116001,
          display: "Construction of window",
          
        },
        {
          code: 4119008,
          display: "Intracranial phlebectomy with anastomosis",
          
        },
        {
          code: 4131005,
          display: "Implantation into pelvic region",
          
        },
        {
          code: 4134002,
          display: "Operative block anesthesia",
          
        },
        {
          code: 4139007,
          display: "Posterior spinal cordotomy",
          
        },
        {
          code: 4143006,
          display: "Injection into anterior chamber of eye",
          
        },
        {
          code: 4149005,
          display: "Bone histomorphometry, aluminum stain",
          
        },
        {
          code: 4154001,
          display: "Incision and drainage of penis",
          
        },
        {
          code: 4165006,
          display: "Delayed hypersensitivity skin test for staphage lysate",
          
        },
        {
          code: 4176005,
          display: "Fothergill repair",
          
        },
        {
          code: 4192000,
          display: "Toxicology testing for organophosphate insecticide",
          
        },
        {
          code: 4213001,
          display: "Implantation of Ommaya reservoir",
          
        },
        {
          code: 4214007,
          display: "Intracardiac injection for cardiac resuscitation",
          
        },
        {
          code: 4226002,
          display: "Excision of lesion of thoracic vein",
          
        },
        {
          code: 4252008,
          display: "Aneurysmectomy with graft replacement by interposition",
          
        },
        {
          code: 4263006,
          display: "Biopsy of soft tissue of elbow area, superficial",
          
        },
        {
          code: 4266003,
          display: "Patient referral for drug addiction rehabilitation",
          
        },
        {
          code: 4285000,
          display: "Insertion of bone growth stimulator into femur",
          
        },
        {
          code: 4293000,
          display: "Reduction of intussusception by laparotomy",
          
        },
        {
          code: 4304000,
          display: "Excision of cusp of tricuspid valve",
          
        },
        {
          code: 4319004,
          display: "Rebase of complete lower denture",
          
        },
        {
          code: 4321009,
          display: "Bilateral leg arteriogram",
          
        },
        {
          code: 4323007,
          display: "Destruction of lesion of sclera",
          
        },
        {
          code: 4331002,
          display: "Anesthesia for hernia repair in lower abdomen",
          
        },
        {
          code: 4333004,
          display: "Incision and drainage of perisplenic space",
          
        },
        {
          code: 4336007,
          display: "Lloyd-Davies operation, abdominoperineal resection",
          
        },
        {
          code: 4337003,
          display: "Homogentisic acid measurement",
          
        },
        {
          code: 4339000,
          display: "Repair of nasolabial fistula",
          
        },
        {
          code: 4341004,
          display: "Complete submucous resection of turbinate",
          
        },
        {
          code: 4344007,
          display: "Cryopexy",
          
        },
        {
          code: 4348005,
          display: "Musculoplasty of hand",
          
        },
        {
          code: 4350002,
          display: "Removal of implant of cornea",
          
        },
        {
          code: 4363008,
          display: "Endoscopic brush biopsy of trachea",
          
        },
        {
          code: 4365001,
          display: "Surgical repair",
          
        },
        {
          code: 4380007,
          display: "Transposition of vulvar tissue",
          
        },
        {
          code: 4387005,
          display: "Valvuloplasty of pulmonary valve in total repair of tetralogy of Fallot",
          
        },
        {
          code: 4388000,
          display: "Repair of splenocolic fistula",
          
        },
        {
          code: 4407008,
          display: "Slitting of lacrimal canaliculus for passage of tube",
          
        },
        {
          code: 4411002,
          display: "Removal of device from female genital tract",
          
        },
        {
          code: 4420006,
          display: "Incision and drainage of parapharyngeal abscess by external approach",
          
        },
        {
          code: 4424002,
          display: "Making orthopedic bed",
          
        },
        {
          code: 4436008,
          display: "Methylatable chemotaxis protein (MCP) receptor measurement",
          
        },
        {
          code: 4438009,
          display: "Venography of vena cava",
          
        },
        {
          code: 4443002,
          display: "Decortication of ovary",
          
        },
        {
          code: 4447001,
          display: "Autopsy, gross and microscopic examination, stillborn or newborn without central nervous system",
          
        },
        {
          code: 4449003,
          display: "Manipulation of spinal meninges",
          
        },
        {
          code: 4450003,
          display: "Application of Kirschner wire",
          
        },
        {
          code: 4455008,
          display: "Open reduction of open elbow dislocation",
          
        },
        {
          code: 4457000,
          display: "Insertion of mold into vagina",
          
        },
        {
          code: 4466001,
          display: "Exploration of upper limb artery",
          
        },
        {
          code: 4467005,
          display: "Excision of tumor of ankle area, deep, intramuscular",
          
        },
        {
          code: 4475004,
          display: "Cyanide level",
          
        },
        {
          code: 4487006,
          display: "Norepinephrine measurement, supine",
          
        },
        {
          code: 4489009,
          display: "Neurolysis of trigeminal nerve",
          
        },
        {
          code: 4496006,
          display: "Mouthcare procedure",
          
        },
        {
          code: 4503005,
          display: "Removal of foreign body of sclera without use of magnet",
          
        },
        {
          code: 4504004,
          display: "Potter obstetrical version with extraction",
          
        },
        {
          code: 4505003,
          display: "Tenolysis of flexor tendon of forearm",
          
        },
        {
          code: 4507006,
          display: "Decompression fasciotomy of wrist, flexor and extensor compartment",
          
        },
        {
          code: 4511000,
          display: "Restoration, inlay, composite/resin, one surface, laboratory processed",
          
        },
        {
          code: 4516005,
          display: "Iridencleisis and iridotasis",
          
        },
        {
          code: 4520009,
          display: "Anastomosis of esophagus, antesternal or antethoracic, with insertion of prosthesis",
          
        },
        {
          code: 4525004,
          display: "Seen by casualty - service",
          
        },
        {
          code: 4533003,
          display: "Ligation of artery of lower limb",
          
        },
        {
          code: 4535005,
          display: "Incision of pelvirectal tissue",
          
        },
        {
          code: 4539004,
          display: "Excision of cyst of bronchus",
          
        },
        {
          code: 4542005,
          display: "Closed reduction of fracture of foot",
          
        },
        {
          code: 4544006,
          display: "Excision of subcutaneous tumor of extremities",
          
        },
        {
          code: 4558008,
          display: "Anterior resection of rectum",
          
        },
        {
          code: 4563007,
          display: "Hospital admission, transfer from other hospital or health care facility",
          
        },
        {
          code: 4570007,
          display: "Chemopallidectomy",
          
        },
        {
          code: 4579008,
          display: "Creation of ventriculoatrial shunt",
          
        },
        {
          code: 4581005,
          display: "Coreoplasty",
          
        },
        {
          code: 4585001,
          display: "Decompression of tendon of hand",
          
        },
        {
          code: 4587009,
          display: "Epiphysiodesis of distal radius",
          
        },
        {
          code: 4589007,
          display: "Care relating to reproduction and pregnancy",
          
        },
        {
          code: 4593001,
          display: "Cauterization of sclera with iridectomy",
          
        },
        {
          code: 4594007,
          display: "Coproporphyrin isomers, series I & III, urine",
          
        },
        {
          code: 4613005,
          display: "Radioimmunoassay",
          
        },
        {
          code: 4625008,
          display: "Apical pulse taking",
          
        },
        {
          code: 4626009,
          display: "Take-down of arterial anastomosis",
          
        },
        {
          code: 4636001,
          display: "Denker operation for radical maxillary antrotomy",
          
        },
        {
          code: 4640005,
          display: "Ligation of fallopian tubes by abdominal approach",
          
        },
        {
          code: 4642002,
          display: "Removal of inflatable penile prosthesis, with pump, reservoir and cylinders",
          
        },
        {
          code: 4660002,
          display: "Diagnostic procedure on phalanges of foot",
          
        },
        {
          code: 4670000,
          display: "Catheterization of bronchus",
          
        },
        {
          code: 4671001,
          display: "Excision of lesion from sphenoid sinus",
          
        },
        {
          code: 4672008,
          display: "Medical procedure on the nervous system",
          
        },
        {
          code: 4691008,
          display: "Identification of rotavirus antigen in feces",
          
        },
        {
          code: 4692001,
          display: "Transplantation of artery of upper extremity",
          
        },
        {
          code: 4694000,
          display: "Percutaneous biopsy of muscle",
          
        },
        {
          code: 4699005,
          display: "Alpha naphthyl butyrate stain method, blood or bone marrow",
          
        },
        {
          code: 4701005,
          display: "Colony forming unit-granulocyte-monocyte-erythroid-megakaryocyte assay",
          
        },
        {
          code: 4707009,
          display: "Partial excision of calcaneus",
          
        },
        {
          code: 4712005,
          display: "Removal of Gardner Wells tongs from skull",
          
        },
        {
          code: 4713000,
          display: "Endoscopy and photography",
          
        },
        {
          code: 4719001,
          display: "Psychologic cognitive testing and assessment",
          
        },
        {
          code: 4727005,
          display: "Lipoprotein electrophoresis",
          
        },
        {
          code: 4734007,
          display: "Irrigation of wound catheter of integument",
          
        },
        {
          code: 4737000,
          display: "Mycobacteria culture",
          
        },
        {
          code: 4756005,
          display: "Cryotherapy of subcutaneous tissue",
          
        },
        {
          code: 4758006,
          display: "Incudostapediopexy",
          
        },
        {
          code: 4764004,
          display: "Jet ventilation procedure",
          
        },
        {
          code: 4765003,
          display: "Insertion of ocular implant following or secondary to enucleation",
          
        },
        {
          code: 4770005,
          display: "Colporrhaphy for repair of urethrocele",
          
        },
        {
          code: 4772002,
          display: "Reduction of torsion of spermatic cord",
          
        },
        {
          code: 4784000,
          display: "Operation on sublingual gland",
          
        },
        {
          code: 4804005,
          display: "Microbial identification test",
          
        },
        {
          code: 4811009,
          display: "Reconstruction of diaphragm",
          
        },
        {
          code: 4815000,
          display: "Antibody identification, red blood cell antibody panel, enzyme, 2 stage technique including anti-human globulin",
          
        },
        {
          code: 4820000,
          display: "Incision of labial frenum",
          
        },
        {
          code: 4827002,
          display: "Shower hydrotherapy",
          
        },
        {
          code: 4829004,
          display: "Excision of small intestine for interposition",
          
        },
        {
          code: 4847005,
          display: "Anesthesia for cesarean section",
          
        },
        {
          code: 4849008,
          display: "Ovarian biopsy",
          
        },
        {
          code: 4862007,
          display: "Revision of anastomosis of large intestine",
          
        },
        {
          code: 4877004,
          display: "Extracapsular extraction of lens with iridectomy",
          
        },
        {
          code: 4891005,
          display: "Proctostomy",
          
        },
        {
          code: 4895001,
          display: "Construction of sigmoid bladder",
          
        },
        {
          code: 4902005,
          display: "Ethchlorvynol measurement",
          
        },
        {
          code: 4903000,
          display: "Serum protein electrophoresis",
          
        },
        {
          code: 4904006,
          display: "Dilation of anal sphincter under nonlocal anesthesia",
          
        },
        {
          code: 4914002,
          display: "Treatment planning for teletherapy",
          
        },
        {
          code: 4929000,
          display: "Local perfusion of kidney",
          
        },
        {
          code: 4930005,
          display: "Repair of thoracogastric fistula",
          
        },
        {
          code: 4934001,
          display: "Salpingography",
          
        },
        {
          code: 4957007,
          display: "Cervical spinal fusion for pseudoarthrosis",
          
        },
        {
          code: 4966006,
          display: "Extracorporeal perfusion",
          
        },
        {
          code: 4970003,
          display: "Venography",
          
        },
        {
          code: 4974007,
          display: "Liver operation",
          
        },
        {
          code: 4976009,
          display: "Anesthesia for endoscopic procedure on lower extremity",
          
        },
        {
          code: 4987001,
          display: "Osteoplasty of cranium with flap of bone",
          
        },
        {
          code: 4992004,
          display: "Cardiac catheterization, left heart, retrograde, percutaneous",
          
        },
        {
          code: 4993009,
          display: "Ischemic limb exercise with electromyography and lactic acid determination",
          
        },
        {
          code: 5016005,
          display: "Pontic, resin with high noble metal",
          
        },
        {
          code: 5019003,
          display: "Direct laryngoscopy with biopsy",
          
        },
        {
          code: 5021008,
          display: "Aldosterone measurement, standing, normal salt diet",
          
        },
        {
          code: 5022001,
          display: "Lysergic acid diethylamide measurement",
          
        },
        {
          code: 5025004,
          display: "Semen analysis, presence and motility of sperm",
          
        },
        {
          code: 5032008,
          display: "Labial veneer, porcelain laminate, laboratory",
          
        },
        {
          code: 5034009,
          display: "Graft to hair-bearing skin",
          
        },
        {
          code: 5048009,
          display: "External cephalic version with tocolysis",
          
        },
        {
          code: 5055006,
          display: "Uniscept system test",
          
        },
        {
          code: 5057003,
          display: "Radical orbitomaxillectomy",
          
        },
        {
          code: 5065000,
          display: "Reduction of closed traumatic hip dislocation with anesthesia",
          
        },
        {
          code: 5091004,
          display: "Peripheral vascular disease study",
          
        },
        {
          code: 5105000,
          display: "Endoscopy of renal pelvis",
          
        },
        {
          code: 5110001,
          display: "Ultrasound peripheral imaging, real time scan",
          
        },
        {
          code: 5113004,
          display: "FT4 - Free thyroxine level",
          
        },
        {
          code: 5119000,
          display: "Epiglottidectomy",
          
        },
        {
          code: 5121005,
          display: "Wedge osteotomy of pelvic bone",
          
        },
        {
          code: 5123008,
          display: "Anesthesia for procedure on pericardium with pump oxygenator",
          
        },
        {
          code: 5130002,
          display: "Needling of lens for cataract",
          
        },
        {
          code: 5131003,
          display: "Radiography of chest wall",
          
        },
        {
          code: 5135007,
          display: "Diagnostic procedure on scapula",
          
        },
        {
          code: 5147001,
          display: "Excision of lesion of ankle joint",
          
        },
        {
          code: 5151004,
          display: "Manual reduction of rectal hemorrhoids",
          
        },
        {
          code: 5154007,
          display: "Communication enhancement: speech deficit",
          
        },
        {
          code: 5161006,
          display: "Specialty clinic admission",
          
        },
        {
          code: 5162004,
          display: "Excision of pressure ulcer",
          
        },
        {
          code: 5165002,
          display: "Division of thoracic artery",
          
        },
        {
          code: 5176003,
          display: "Thromboendarterectomy with graft of renal artery",
          
        },
        {
          code: 5182000,
          display: "Total body perfusion",
          
        },
        {
          code: 5184004,
          display: "Osteotomy of shaft of femur with fixation",
          
        },
        {
          code: 5186002,
          display: "Arthrotomy for synovectomy of glenohumeral joint",
          
        },
        {
          code: 5190000,
          display: "Cell fusion",
          
        },
        {
          code: 5191001,
          display: "Surgical treatment of missed miscarriage of second trimester",
          
        },
        {
          code: 5212002,
          display: "Excision of lesion of lacrimal gland by frontal approach",
          
        },
        {
          code: 5216004,
          display: "Three dimensional ultrasound imaging of heart",
          
        },
        {
          code: 5233006,
          display: "Lateral fasciotomy",
          
        },
        {
          code: 5243009,
          display: "Suture of adenoid fossa",
          
        },
        {
          code: 5245002,
          display: "Transplantation of peripheral vein",
          
        },
        {
          code: 5246001,
          display: "Breakpoint cluster region analysis",
          
        },
        {
          code: 5264008,
          display: "Total bile acids measurement",
          
        },
        {
          code: 5267001,
          display: "Adrenal artery ligation",
          
        },
        {
          code: 5270002,
          display: "Bilateral destruction of fallopian tubes",
          
        },
        {
          code: 5273000,
          display: "Manual reduction of closed fracture of proximal end of ulna",
          
        },
        {
          code: 5282006,
          display: "Operation on oropharynx",
          
        },
        {
          code: 5290006,
          display: "Incision and drainage of Ludwig angina",
          
        },
        {
          code: 5298004,
          display: "Incision and drainage of deep hematoma of thigh region",
          
        },
        {
          code: 5304008,
          display: "DXT - Radiotherapy",
          
        },
        {
          code: 5316002,
          display: "Closed osteotomy of mandibular ramus",
          
        },
        {
          code: 5317006,
          display: "Radical amputation of penis with bilateral pelvic lymphadenectomy",
          
        },
        {
          code: 5326009,
          display: "Administration of dermatologic formulation",
          
        },
        {
          code: 5328005,
          display: "Shortening of Achilles tendon",
          
        },
        {
          code: 5337005,
          display: "Trocar biopsy",
          
        },
        {
          code: 5338000,
          display: "Nicotine measurement",
          
        },
        {
          code: 5342002,
          display: "Prophylactic treatment of tibia with methyl methacrylate",
          
        },
        {
          code: 5348003,
          display: "Repair of endocardial cushion defect",
          
        },
        {
          code: 5357009,
          display: "Leukocyte poor blood preparation",
          
        },
        {
          code: 5373003,
          display: "Stress breaker",
          
        },
        {
          code: 5384005,
          display: "Excision of part of frontal cortex",
          
        },
        {
          code: 5391008,
          display: "Artificial voice rehabilitation",
          
        },
        {
          code: 5393006,
          display: "Exploration of parathyroid with mediastinal exploration by sternal split approach",
          
        },
        {
          code: 5402006,
          display: "Manipulation of thoracic artery",
          
        },
        {
          code: 5407000,
          display: "Injection of fallopian tube",
          
        },
        {
          code: 5415002,
          display: "Destruction of lesion of liver",
          
        },
        {
          code: 5419008,
          display: "Lysis of adhesions of tendon of hand",
          
        },
        {
          code: 5422005,
          display: "Amylase measurement, peritoneal fluid",
          
        },
        {
          code: 5429001,
          display: "Diagnostic procedure on nipple",
          
        },
        {
          code: 5431005,
          display: "Percutaneous transluminal angioplasty",
          
        },
        {
          code: 5433008,
          display: "Skeletal X-ray of lower limb",
          
        },
        {
          code: 5446003,
          display: "Excision of cervical rib for outlet compression syndrome with sympathectomy",
          
        },
        {
          code: 5447007,
          display: "Transfusion",
          
        },
        {
          code: 5452002,
          display: "Core needle biopsy of thymus",
          
        },
        {
          code: 5456004,
          display: "Graft of lymphatic structure",
          
        },
        {
          code: 5457008,
          display: "Serologic test for Rickettsia conorii",
          
        },
        {
          code: 5460001,
          display: "Removal of prosthesis from fallopian tube",
          
        },
        {
          code: 5479003,
          display: "Select picture audiometry",
          
        },
        {
          code: 5482008,
          display: "Serologic test for Blastomyces",
          
        },
        {
          code: 5486006,
          display: "Delayed suture of tendon of hand",
          
        },
        {
          code: 5489004,
          display: "Diagnostic procedure on radius",
          
        },
        {
          code: 5506006,
          display: "Incision and exploration of abdominal wall",
          
        },
        {
          code: 5517007,
          display: "Restoration, inlay, porcelain/ceramic, per tooth, in addition to inlay",
          
        },
        {
          code: 5521000,
          display: "Open reduction of fracture of phalanges of foot",
          
        },
        {
          code: 5536002,
          display: "Arthrodesis of carpometacarpal joint of digits, other than thumb",
          
        },
        {
          code: 5545001,
          display: "Repair of carotid body",
          
        },
        {
          code: 5551006,
          display: "Direct laryngoscopy with arytenoidectomy with operating microscope",
          
        },
        {
          code: 5556001,
          display: "Manually assisted spontaneous delivery",
          
        },
        {
          code: 5570001,
          display: "Arthrotomy for infection with exploration and drainage of carpometacarpal joint",
          
        },
        {
          code: 5571002,
          display: "Excision of lesion of aorta with end-to-end anastomosis",
          
        },
        {
          code: 5572009,
          display: "Incision of kidney pelvis",
          
        },
        {
          code: 5586008,
          display: "Aminolevulinic acid dehydratase measurement",
          
        },
        {
          code: 5608002,
          display: "Excretion measurement",
          
        },
        {
          code: 5616006,
          display: "Osteoplasty of tibia",
          
        },
        {
          code: 5621009,
          display: "Excision of malignant lesion of skin of extremities",
          
        },
        {
          code: 5632009,
          display: "Open biopsy of bronchus",
          
        },
        {
          code: 5636007,
          display: "Fistulectomy of bone",
          
        },
        {
          code: 5638008,
          display: "Carbohydrate measurement",
          
        },
        {
          code: 5648005,
          display: "Surgical repair and revision of shunt",
          
        },
        {
          code: 5651003,
          display: "Arylsulfatase A measurement",
          
        },
        {
          code: 5663008,
          display: "Phlebectomy of varicose vein of head and neck",
          
        },
        {
          code: 5669007,
          display: "Portable electroencephalogram awake and asleep with stimulation",
          
        },
        {
          code: 5671007,
          display: "Magnet extraction of foreign body from ciliary body",
          
        },
        {
          code: 5687005,
          display: "Removal of foreign body from ovary",
          
        },
        {
          code: 5690004,
          display: "Incision of seminal vesicle",
          
        },
        {
          code: 5694008,
          display: "Crisis intervention with follow-up",
          
        },
        {
          code: 5721002,
          display: "Repair of eyebrow",
          
        },
        {
          code: 5722009,
          display: "Surgical reanastomosis of colon",
          
        },
        {
          code: 5726007,
          display: "Removal of epicardial electrodes",
          
        },
        {
          code: 5728008,
          display: "Anoscopy for removal of foreign body",
          
        },
        {
          code: 5731009,
          display: "Hemosiderin, quantitative measurement",
          
        },
        {
          code: 5733007,
          display: "Fluorescent identification of anti-nuclear antibody",
          
        },
        {
          code: 5738003,
          display: "Biopsy of cul-de-sac",
          
        },
        {
          code: 5745003,
          display: "Excision ampulla of Vater with reimplantation of common duct",
          
        },
        {
          code: 5760000,
          display: "Osteoplasty of radius and ulna, shortening",
          
        },
        {
          code: 5771004,
          display: "Blepharotomy",
          
        },
        {
          code: 5777000,
          display: "Flexorplasty of elbow",
          
        },
        {
          code: 5781000,
          display: "Operation on nasal septum",
          
        },
        {
          code: 5785009,
          display: "Forensic autopsy",
          
        },
        {
          code: 5787001,
          display: "Elevation of bone fragments of orbit of skull with debridement",
          
        },
        {
          code: 5789003,
          display: "Lysis of adhesions of intestines",
          
        },
        {
          code: 5796001,
          display: "Excision of external thrombotic hemorrhoid",
          
        },
        {
          code: 5806001,
          display: "Revision of tracheostomy scar",
          
        },
        {
          code: 5807005,
          display: "Fenestration of inner ear, initial",
          
        },
        {
          code: 5809008,
          display: "Selective vagotomy with pyloroplasty and gastrostomy",
          
        },
        {
          code: 5812006,
          display: "Laboratory reporting, fax",
          
        },
        {
          code: 5818005,
          display: "Flocculation test",
          
        },
        {
          code: 5821007,
          display: "Ligation, division and complete stripping of long and short saphenous veins",
          
        },
        {
          code: 5823005,
          display: "Diagnostic radiography, left",
          
        },
        {
          code: 5832007,
          display: "Partial ostectomy of thorax, ribs or sternum",
          
        },
        {
          code: 5845006,
          display: "Emulsification procedure",
          
        },
        {
          code: 5846007,
          display: "Diagnostic radiography of toes",
          
        },
        {
          code: 5857002,
          display: "Complement mediated cytotoxicity assay",
          
        },
        {
          code: 5865004,
          display: "Open reduction of dislocation of toe",
          
        },
        {
          code: 5870006,
          display: "Tertiary closure of abdominal wall",
          
        },
        {
          code: 5880005,
          display: "Clinical examination",
          
        },
        {
          code: 5892005,
          display: "Mastoid antrotomy",
          
        },
        {
          code: 5894006,
          display: "Methyl red test",
          
        },
        {
          code: 5897004,
          display: "Removal of Scribner shunt",
          
        },
        {
          code: 5902003,
          display: "History and physical examination, complete",
          
        },
        {
          code: 5925002,
          display: "Incision and drainage of hematoma of wrist",
          
        },
        {
          code: 5930003,
          display: "Cardiac monitor removal",
          
        },
        {
          code: 5947002,
          display: "Consultation for hearing and/or speech problem",
          
        },
        {
          code: 5961007,
          display: "Division of blood vessels of cornea",
          
        },
        {
          code: 5966002,
          display: "Removal of foreign body from elbow area, deep",
          
        },
        {
          code: 5971009,
          display: "Incision and drainage of axilla",
          
        },
        {
          code: 5983006,
          display: "Repair of spermatic cord",
          
        },
        {
          code: 5986003,
          display: "Non-sensitized spontaneous sheep erythrocyte binding, E-rosette",
          
        },
        {
          code: 5992009,
          display: "Midtarsal arthrodesis, multiple",
          
        },
        {
          code: 5995006,
          display: "Gas liquid chromatography, flame photometric type",
          
        },
        {
          code: 5997003,
          display: "Drainage of cerebral subarachnoid space by aspiration",
          
        },
        {
          code: 5998008,
          display: "Radical dissection of groin",
          
        },
        {
          code: 6005008,
          display: "Transplantation of vitreous by anterior approach",
          
        },
        {
          code: 6007000,
          display: "Magnetic resonance imaging of chest",
          
        },
        {
          code: 6019008,
          display: "Endoscopy of large intestine",
          
        },
        {
          code: 6025007,
          display: "Laparoscopic appendectomy",
          
        },
        {
          code: 6026008,
          display: "Removal of coronary artery obstruction by percutaneous transluminal balloon with thrombolytic agent",
          
        },
        {
          code: 6029001,
          display: "Augmentation of outflow tract of pulmonary valve",
          
        },
        {
          code: 6035001,
          display: "Chart abstracting",
          
        },
        {
          code: 6063004,
          display: "Kanamycin measurement",
          
        },
        {
          code: 6069000,
          display: "Panniculotomy",
          
        },
        {
          code: 6082008,
          display: "Perforation of footplate",
          
        },
        {
          code: 6092000,
          display: "Aspiration of nasal sinus by puncture",
          
        },
        {
          code: 6100001,
          display: "Fenestration of stapes footplate with vein graft",
          
        },
        {
          code: 6108008,
          display: "Subdural tap through fontanel, infant, initial",
          
        },
        {
          code: 6119006,
          display: "Local destruction of lesion of bony palate",
          
        },
        {
          code: 6125005,
          display: "Change of gastrostomy tube",
          
        },
        {
          code: 6126006,
          display: "Fitzgerald factor assay",
          
        },
        {
          code: 6127002,
          display: "Diagnostic radiography of abdomen, oblique standard",
          
        },
        {
          code: 6130009,
          display: "Surgical exposure of impacted or unerupted tooth to aid eruption",
          
        },
        {
          code: 6133006,
          display: "Lymphokine assay",
          
        },
        {
          code: 6143009,
          display: "Diabetic education",
          
        },
        {
          code: 6146001,
          display: "Repair of heart septum with prosthesis",
          
        },
        {
          code: 6148000,
          display: "Chondrectomy of semilunar cartilage of knee",
          
        },
        {
          code: 6157006,
          display: "Endoscopic retrograde cholangiopancreatography with biopsy",
          
        },
        {
          code: 6159009,
          display: "Galactose measurement",
          
        },
        {
          code: 6161000,
          display: "Excision of lesion of capsule of toes",
          
        },
        {
          code: 6164008,
          display: "Osteoclasis of clavicle",
          
        },
        {
          code: 6166005,
          display: "Nephropyeloureterostomy",
          
        },
        {
          code: 6177004,
          display: "Southern blot assay",
          
        },
        {
          code: 6187000,
          display: "Repair of aneurysm with graft of common femoral artery",
          
        },
        {
          code: 6188005,
          display: "Arthrotomy of knee",
          
        },
        {
          code: 6189002,
          display: "Excision of aberrant tissue of breast",
          
        },
        {
          code: 6190006,
          display: "Colopexy",
          
        },
        {
          code: 6195001,
          display: "Transurethral drainage of prostatic abscess",
          
        },
        {
          code: 6198004,
          display: "Repair of fracture with Sofield type procedure",
          
        },
        {
          code: 6200005,
          display: "Excision of lesion of female perineum",
          
        },
        {
          code: 6205000,
          display: "Fluorescent antigen, titer",
          
        },
        {
          code: 6213004,
          display: "Prescribing corneoscleral contact lens",
          
        },
        {
          code: 6221005,
          display: "Suture of colon",
          
        },
        {
          code: 6225001,
          display: "Antibody detection, RBC, enzyme, 2 stage technique, including anti-human globulin",
          
        },
        {
          code: 6226000,
          display: "Visual rehabilitation, eye motion defect",
          
        },
        {
          code: 6227009,
          display: "Relationship psychotherapy",
          
        },
        {
          code: 6231003,
          display: "Graft of palate",
          
        },
        {
          code: 6238009,
          display: "Diagnostic radiography of sacroiliac joints",
          
        },
        {
          code: 6240004,
          display: "Operative procedure on knee",
          
        },
        {
          code: 6255008,
          display: "Resection of abdominal artery with replacement",
          
        },
        {
          code: 6271008,
          display: "Echography, immersion B-scan",
          
        },
        {
          code: 6274000,
          display: "Excision of aural glomus tumor, extended, extratemporal",
          
        },
        {
          code: 6286002,
          display: "Destructive procedure on ovaries and fallopian tubes",
          
        },
        {
          code: 6289009,
          display: "White blood cell histogram evaluation",
          
        },
        {
          code: 6295005,
          display: "Sequestrectomy of pelvic bone",
          
        },
        {
          code: 6307005,
          display: "Keratophakia",
          
        },
        {
          code: 6309008,
          display: "Fecal fat differential, quantitative",
          
        },
        {
          code: 6319002,
          display: "Beta lactamase, chromogenic cephalosporin susceptibility test",
          
        },
        {
          code: 6337001,
          display: "Ligation of aortic arch",
          
        },
        {
          code: 6339003,
          display: "Conditioning play audiometry",
          
        },
        {
          code: 6343004,
          display: "Forensic bite mark comparison technique",
          
        },
        {
          code: 6353003,
          display: "Mitsuda reaction to lepromin",
          
        },
        {
          code: 6354009,
          display: "Sedimentation rate, Westergren",
          
        },
        {
          code: 6355005,
          display: "Removal of internal fixation device of radius",
          
        },
        {
          code: 6358007,
          display: "Capsulorrhaphy of joint",
          
        },
        {
          code: 6361008,
          display: "Anesthesia for popliteal thromboendarterectomy",
          
        },
        {
          code: 6363006,
          display: "Dilation of lacrimal punctum with irrigation",
          
        },
        {
          code: 6370006,
          display: "Chemosurgery of stomach lesion",
          
        },
        {
          code: 6384001,
          display: "Removal of device from digestive system",
          
        },
        {
          code: 6385000,
          display: "Exploration of disc space",
          
        },
        {
          code: 6388003,
          display: "TdT stain",
          
        },
        {
          code: 6396008,
          display: "Galactokinase measurement",
          
        },
        {
          code: 6397004,
          display: "Muscular strength development exercise",
          
        },
        {
          code: 6399001,
          display: "Division of arteriovenous fistula with ligation",
          
        },
        {
          code: 6402000,
          display: "Excision of common bile duct",
          
        },
        {
          code: 6403005,
          display: "Lengthening of muscle of hand",
          
        },
        {
          code: 6419003,
          display: "Excision of tumor from elbow area, deep, subfascial",
          
        },
        {
          code: 6429005,
          display: "Heteroautogenous transplantation",
          
        },
        {
          code: 6433003,
          display: "Closed heart valvotomy of mitral valve",
          
        },
        {
          code: 6434009,
          display: "Seminal fluid detection",
          
        },
        {
          code: 6438007,
          display: "Exploration of ciliary body",
          
        },
        {
          code: 6439004,
          display: "Destruction of lesion of peripheral nerve",
          
        },
        {
          code: 6443000,
          display: "Pontic, porcelain fused to predominantly base metal",
          
        },
        {
          code: 6444006,
          display: "Enlargement of eye socket",
          
        },
        {
          code: 6465000,
          display: "Arthrotomy of glenohumeral joint for infection with drainage",
          
        },
        {
          code: 6466004,
          display: "Administration of Rh immune globulin",
          
        },
        {
          code: 6470007,
          display: "Laparoamnioscopy",
          
        },
        {
          code: 6473009,
          display: "Suture of old obstetrical laceration of uterus",
          
        },
        {
          code: 6480006,
          display: "Urinary bladder residual urine study",
          
        },
        {
          code: 6486000,
          display: "Curettage of sclera",
          
        },
        {
          code: 6487009,
          display: "Hand tendon pulley reconstruction with tendon prosthesis",
          
        },
        {
          code: 6491004,
          display: "Protein S, free assay",
          
        },
        {
          code: 6499002,
          display: "Tsuge operation on finger for macrodactyly repair",
          
        },
        {
          code: 6502003,
          display: "Complete lower denture",
          
        },
        {
          code: 6506000,
          display: "Placing a patient on a bedpan",
          
        },
        {
          code: 6519001,
          display: "Operation on multiple extraocular muscles with temporary detachment from globe",
          
        },
        {
          code: 6521006,
          display: "Polytomography",
          
        },
        {
          code: 6527005,
          display: "Uchida fimbriectomy with tubal ligation by endoscopy",
          
        },
        {
          code: 6535008,
          display: "Excision of cyst of hand",
          
        },
        {
          code: 6536009,
          display: "Implantation of tricuspid valve with tissue graft",
          
        },
        {
          code: 6543003,
          display: "Complicated catheterization of bladder",
          
        },
        {
          code: 6547002,
          display: "Repair with closure of non-surgical wound",
          
        },
        {
          code: 6555009,
          display: "Insertion of infusion pump beneath skin",
          
        },
        {
          code: 6556005,
          display: "Reticulin antibody measurement",
          
        },
        {
          code: 6562000,
          display: "Destruction of lesion of tongue",
          
        },
        {
          code: 6563005,
          display: "Transposition of muscle of hand",
          
        },
        {
          code: 6567006,
          display: "Pulmonary valve commissurotomy by transvenous balloon method",
          
        },
        {
          code: 6568001,
          display: "Diagnostic procedure on eyelid",
          
        },
        {
          code: 6585004,
          display: "Closed reduction of fracture of tarsal or metatarsal",
          
        },
        {
          code: 6589005,
          display: "Antibody titration, high protein",
          
        },
        {
          code: 6601003,
          display: "Removal of foreign body from skin of axilla",
          
        },
        {
          code: 6614002,
          display: "Antibody to single stranded DNA measurement",
          
        },
        {
          code: 6615001,
          display: "Electroretinography with medical evaluation",
          
        },
        {
          code: 6622009,
          display: "Add clasp to existing partial denture",
          
        },
        {
          code: 6634001,
          display: "Destruction of hemorrhoids, internal",
          
        },
        {
          code: 6639006,
          display: "Replacement of obstructed valve in shunt system",
          
        },
        {
          code: 6650009,
          display: "Radionuclide lacrimal flow study",
          
        },
        {
          code: 6656003,
          display: "Acoustic stimulation test",
          
        },
        {
          code: 6657007,
          display: "Maintenance drug therapy for mental disorder",
          
        },
        {
          code: 6658002,
          display: "Removal of foreign body from alveolus",
          
        },
        {
          code: 6661001,
          display: "King-Steelquist hindquarter operation",
          
        },
        {
          code: 6665005,
          display: "Restoration, crown, porcelain fused to noble metal",
          
        },
        {
          code: 6668007,
          display: "Fibrinogen assay, quantitative",
          
        },
        {
          code: 6670003,
          display: "Closure of external fistula of trachea",
          
        }
      ];

    const performerFunctionProps = {
        options: performerFunction,
        getOptionLabel: (option) => option.display,
    };

    const reasonCode = [
        {
          code: 1421009,
          display: "Specialized surgeon",
          
        },
        {
          code: 3430008,
          display: "Radiation therapist",
          
        },
        {
          code: 3842006,
          display: "Chiropractor",
          
        },
        {
          code: 4162009,
          display: "Dental assistant",
          
        },
        {
          code: 5275007,
          display: "NA - Nursing auxiliary",
          
        },
        {
          code: 6816002,
          display: "Specialized nurse",
          
        },
        {
          code: 6868009,
          display: "Hospital administrator",
          
        },
        {
          code: 8724009,
          display: "Plastic surgeon",
          
        },
        {
          code: 11661002,
          display: "Neuropathologist",
          
        },
        {
          code: 11911009,
          display: "Nephrologist",
          
        },
        {
          code: 11935004,
          display: "Obstetrician",
          
        },
        {
          code: 13580004,
          display: "School dental assistant",
          
        },
        {
          code: 14698002,
          display: "Medical microbiologist",
          
        },
        {
          code: 17561000,
          display: "Cardiologist",
          
        },
        {
          code: 18803008,
          display: "Dermatologist",
          
        },
        {
          code: 18850004,
          display: "Laboratory hematologist",
          
        },
        {
          code: 19244007,
          display: "Gerodontist",
          
        },
        {
          code: 20145008,
          display: "Removable prosthodontist",
          
        },
        {
          code: 21365001,
          display: "Specialized dentist",
          
        },
        {
          code: 21450003,
          display: "Neuropsychiatrist",
          
        },
        {
          code: 22515006,
          display: "Medical assistant",
          
        },
        {
          code: 22731001,
          display: "Orthopedic surgeon",
          
        },
        {
          code: 22983004,
          display: "Thoracic surgeon",
          
        },
        {
          code: 23278007,
          display: "Community health physician",
          
        },
        {
          code: 24430003,
          display: "Physical medicine specialist",
          
        },
        {
          code: 24590004,
          display: "Urologist",
          
        },
        {
          code: 25961008,
          display: "Electroencephalography specialist",
          
        },
        {
          code: 26042002,
          display: "Dental hygienist",
          
        },
        {
          code: 26369006,
          display: "Public health nurse",
          
        },
        {
          code: 28229004,
          display: "Optometrist",
          
        },
        {
          code: 28411006,
          display: "Neonatologist",
          
        },
        {
          code: 28544002,
          display: "Chemical pathologist",
          
        },
        {
          code: 36682004,
          display: "PT - Physiotherapist",
          
        },
        {
          code: 37154003,
          display: "Periodontist",
          
        },
        {
          code: 37504001,
          display: "Orthodontist",
          
        },
        {
          code: 39677007,
          display: "Internal medicine specialist",
          
        },
        {
          code: 40127002,
          display: "Dietitian (general)",
          
        },
        {
          code: 40204001,
          display: "Hematologist",
          
        },
        {
          code: 40570005,
          display: "Interpreter",
          
        },
        {
          code: 41672002,
          display: "Respiratory physician",
          
        },
        {
          code: 41904004,
          display: "Medical X-ray technician",
          
        },
        {
          code: 43702002,
          display: "Occupational health nurse",
          
        },
        {
          code: 44652006,
          display: "Pharmaceutical assistant",
          
        },
        {
          code: 45419001,
          display: "Masseur",
          
        },
        {
          code: 45440000,
          display: "Rheumatologist",
          
        },
        {
          code: 45544007,
          display: "Neurosurgeon",
          
        },
        {
          code: 45956004,
          display: "Sanitarian",
          
        },
        {
          code: 46255001,
          display: "Pharmacist",
          
        },
        {
          code: 48740002,
          display: "Philologist",
          
        },
        {
          code: 49203003,
          display: "Dispensing optometrist",
          
        },
        {
          code: 49993003,
          display: "Maxillofacial surgeon",
          
        },
        {
          code: 50149000,
          display: "Endodontist",
          
        },
        {
          code: 54503009,
          display: "Faith healer",
          
        },
        {
          code: 56397003,
          display: "Neurologist",
          
        },
        {
          code: 56466003,
          display: "Community physician",
          
        },
        {
          code: 56542007,
          display: "Medical record administrator",
          
        },
        {
          code: 56545009,
          display: "Cardiovascular surgeon",
          
        },
        {
          code: 57654006,
          display: "Fixed prosthodontist",
          
        },
        {
          code: 59058001,
          display: "General physician",
          
        },
        {
          code: 59169001,
          display: "Orthopedic technician",
          
        },
        {
          code: 59944000,
          display: "Psychologist",
          
        },
        {
          code: 60008001,
          display: "Community-based dietitian",
          
        },
        {
          code: 61207006,
          display: "Medical pathologist",
          
        },
        {
          code: 61246008,
          display: "Laboratory medicine specialist",
          
        },
        {
          code: 61345009,
          display: "Otorhinolaryngologist",
          
        },
        {
          code: 61894003,
          display: "Endocrinologist",
          
        },
        {
          code: 62247001,
          display: "Family medicine specialist",
          
        },
        {
          code: 63098009,
          display: "Clinical immunologist",
          
        },
        {
          code: 66476003,
          display: "Oral pathologist",
          
        },
        {
          code: 66862007,
          display: "Radiologist",
          
        },
        {
          code: 68867008,
          display: "Public health dentist",
          
        },
        {
          code: 68950000,
          display: "Prosthodontist",
          
        },
        {
          code: 69280009,
          display: "Specialized physician",
          
        },
        {
          code: 71838004,
          display: "Gastroenterologist",
          
        },
        {
          code: 73265009,
          display: "Nursing aid",
          
        },
        {
          code: 75271001,
          display: "MW - Midwife",
          
        },
        {
          code: 76166008,
          display: "Practical aid (pharmacy)",
          
        },
        {
          code: 76231001,
          display: "Osteopath",
          
        },
        {
          code: 76899008,
          display: "Infectious diseases physician",
          
        },
        {
          code: 78703002,
          display: "General surgeon",
          
        },
        {
          code: 78729002,
          display: "Diagnostic radiologist",
          
        },
        {
          code: 79898004,
          display: "Auxiliary midwife",
          
        },
        {
          code: 80409005,
          display: "Translator",
          
        },
        {
          code: 80546007,
          display: "OT - Occupational therapist",
          
        },
        {
          code: 80584001,
          display: "Psychiatrist",
          
        },
        {
          code: 80933006,
          display: "Nuclear medicine physician",
          
        },
        {
          code: 81464008,
          display: "Clinical pathologist",
          
        },
        {
          code: 82296001,
          display: "Pediatrician",
          
        },
        {
          code: 83189004,
          display: "Other professional nurse",
          
        },
        {
          code: 83273008,
          display: "Anatomic pathologist",
          
        },
        {
          code: 83685006,
          display: "Gynecologist",
          
        },
        {
          code: 85733003,
          display: "General pathologist",
          
        },
        {
          code: 88189002,
          display: "Anesthesiologist",
          
        },
        {
          code: 88475002,
          display: "Other dietitians and public health nutritionists",
          
        },
        {
          code: 90201008,
          display: "Pediatric dentist",
          
        },
        {
          code: 90655003,
          display: "Care of the elderly physician",
          
        },
        {
          code: 106289002,
          display: "Dental surgeon",
          
        },
        {
          code: 106291005,
          display: "Dietician AND/OR public health nutritionist",
          
        },
        {
          code: 106292003,
          display: "Nurse",
          
        },
        {
          code: 106293008,
          display: "Nursing personnel",
          
        },
        {
          code: 106294002,
          display: "Midwifery personnel",
          
        },
        {
          code: 106296000,
          display: "Physiotherapist AND/OR occupational therapist",
          
        },
        {
          code: 106330007,
          display: "Philologist, translator AND/OR interpreter",
          
        },
        {
          code: 112247003,
          display: "Medical doctor",
          
        },
        {
          code: 158965000,
          display: "Medical practitioner",
          
        },
        {
          code: 158966004,
          display: "Medical administrator - national",
          
        },
        {
          code: 158967008,
          display: "Consultant physician",
          
        },
        {
          code: 158968003,
          display: "Consultant surgeon",
          
        },
        {
          code: 158969006,
          display: "Consultant gynecology and obstetrics",
          
        },
        {
          code: 158970007,
          display: "Anesthetist",
          
        },
        {
          code: 158971006,
          display: "Hospital registrar",
          
        },
        {
          code: 158972004,
          display: "House officer",
          
        },
        {
          code: 158973009,
          display: "Occupational physician",
          
        },
        {
          code: 158974003,
          display: "Clinical medical officer",
          
        },
        {
          code: 158975002,
          display: "Medical practitioner - teaching",
          
        },
        {
          code: 158977005,
          display: "Dental administrator",
          
        },
        {
          code: 158978000,
          display: "Dental consultant",
          
        },
        {
          code: 158979008,
          display: "Dental general practitioner",
          
        },
        {
          code: 158980006,
          display: "Dental practitioner - teaching",
          
        },
        {
          code: 158983008,
          display: "Nurse administrator - national",
          
        },
        {
          code: 158984002,
          display: "Nursing officer - region",
          
        },
        {
          code: 158985001,
          display: "Nursing officer - district",
          
        },
        {
          code: 158986000,
          display: "Nursing administrator - professional body",
          
        },
        {
          code: 158987009,
          display: "Nursing officer - division",
          
        },
        {
          code: 158988004,
          display: "Nurse education director",
          
        },
        {
          code: 158989007,
          display: "Occupational health nursing officer",
          
        },
        {
          code: 158990003,
          display: "Nursing officer",
          
        },
        {
          code: 158992006,
          display: "Midwifery sister",
          
        },
        {
          code: 158993001,
          display: "Nursing sister (theatre)",
          
        },
        {
          code: 158994007,
          display: "Staff nurse",
          
        },
        {
          code: 158995008,
          display: "Staff midwife",
          
        },
        {
          code: 158996009,
          display: "State enrolled nurse",
          
        },
        {
          code: 158997000,
          display: "District nurse",
          
        },
        {
          code: 158998005,
          display: "Private nurse",
          
        },
        {
          code: 158999002,
          display: "Community midwife",
          
        },
        {
          code: 159001001,
          display: "Clinic nurse",
          
        },
        {
          code: 159002008,
          display: "Practice nurse",
          
        },
        {
          code: 159003003,
          display: "School nurse",
          
        },
        {
          code: 159004009,
          display: "Nurse - teaching",
          
        },
        {
          code: 159005005,
          display: "Student nurse",
          
        },
        {
          code: 159006006,
          display: "Dental nurse",
          
        },
        {
          code: 159007002,
          display: "Community pediatric nurse",
          
        },
        {
          code: 159010009,
          display: "Hospital pharmacist",
          
        },
        {
          code: 159011008,
          display: "Retail pharmacist",
          
        },
        {
          code: 159012001,
          display: "Industrial pharmacist",
          
        },
        {
          code: 159013006,
          display: "Pharmaceutical officer H.A.",
          
        },
        {
          code: 159014000,
          display: "Trainee pharmacist",
          
        },
        {
          code: 159016003,
          display: "Medical radiographer",
          
        },
        {
          code: 159017007,
          display: "Diagnostic radiographer",
          
        },
        {
          code: 159018002,
          display: "Therapeutic radiographer",
          
        },
        {
          code: 159019005,
          display: "Trainee radiographer",
          
        },
        {
          code: 159021000,
          display: "Ophthalmic optician",
          
        },
        {
          code: 159022007,
          display: "Trainee optician",
          
        },
        {
          code: 159025009,
          display: "Remedial gymnast",
          
        },
        {
          code: 159026005,
          display: "Speech and language therapist",
          
        },
        {
          code: 159027001,
          display: "Orthoptist",
          
        },
        {
          code: 159028006,
          display: "Trainee remedial therapist",
          
        },
        {
          code: 159033005,
          display: "Dietician",
          
        },
        {
          code: 159034004,
          display: "Podiatrist",
          
        },
        {
          code: 159035003,
          display: "Dental auxiliary",
          
        },
        {
          code: 159036002,
          display: "ECG technician",
          
        },
        {
          code: 159037006,
          display: "EEG technician",
          
        },
        {
          code: 159038001,
          display: "Artificial limb fitter",
          
        },
        {
          code: 159039009,
          display: "AT - Audiology technician",
          
        },
        {
          code: 159040006,
          display: "Pharmacy technician",
          
        },
        {
          code: 159041005,
          display: "Trainee medical technician",
          
        },
        {
          code: 159141008,
          display: "Geneticist",
          
        },
        {
          code: 159972006,
          display: "Surgical corset fitter",
          
        },
        {
          code: 160008000,
          display: "Dental technician",
          
        },
        {
          code: 224529009,
          display: "Clinical assistant",
          
        },
        {
          code: 224530004,
          display: "Senior registrar",
          
        },
        {
          code: 224531000,
          display: "Registrar",
          
        },
        {
          code: 224532007,
          display: "Senior house officer",
          
        },
        {
          code: 224533002,
          display: "MO - Medical officer",
          
        },
        {
          code: 224534008,
          display: "Health visitor, nurse/midwife",
          
        },
        {
          code: 224535009,
          display: "Registered nurse",
          
        },
        {
          code: 224536005,
          display: "Midwifery tutor",
          
        },
        {
          code: 224537001,
          display: "Accident and Emergency nurse",
          
        },
        {
          code: 224538006,
          display: "Triage nurse",
          
        },
        {
          code: 224540001,
          display: "Community nurse",
          
        },
        {
          code: 224541002,
          display: "Nursing continence advisor",
          
        },
        {
          code: 224542009,
          display: "Coronary care nurse",
          
        },
        {
          code: 224543004,
          display: "Diabetic nurse",
          
        },
        {
          code: 224544005,
          display: "Family planning nurse",
          
        },
        {
          code: 224545006,
          display: "Care of the elderly nurse",
          
        },
        {
          code: 224546007,
          display: "ICN - Infection control nurse",
          
        },
        {
          code: 224547003,
          display: "Intensive therapy nurse",
          
        },
        {
          code: 224548008,
          display: "Learning disabilities nurse",
          
        },
        {
          code: 224549000,
          display: "Neonatal nurse",
          
        },
        {
          code: 224550000,
          display: "Neurology nurse",
          
        },
        {
          code: 224551001,
          display: "Industrial nurse",
          
        },
        {
          code: 224552008,
          display: "Oncology nurse",
          
        },
        {
          code: 224553003,
          display: "Macmillan nurse",
          
        },
        {
          code: 224554009,
          display: "Marie Curie nurse",
          
        },
        {
          code: 224555005,
          display: "Pain control nurse",
          
        },
        {
          code: 224556006,
          display: "Palliative care nurse",
          
        },
        {
          code: 224557002,
          display: "Chemotherapy nurse",
          
        },
        {
          code: 224558007,
          display: "Radiotherapy nurse",
          
        },
        {
          code: 224559004,
          display: "PACU nurse",
          
        },
        {
          code: 224560009,
          display: "Stomatherapist",
          
        },
        {
          code: 224561008,
          display: "Theatre nurse",
          
        },
        {
          code: 224562001,
          display: "Pediatric nurse",
          
        },
        {
          code: 224563006,
          display: "Psychiatric nurse",
          
        },
        {
          code: 224564000,
          display: "Community mental health nurse",
          
        },
        {
          code: 224565004,
          display: "Renal nurse",
          
        },
        {
          code: 224566003,
          display: "Hemodialysis nurse",
          
        },
        {
          code: 224567007,
          display: "Wound care nurse",
          
        },
        {
          code: 224569005,
          display: "Nurse grade",
          
        },
        {
          code: 224570006,
          display: "Clinical nurse specialist",
          
        },
        {
          code: 224571005,
          display: "Nurse practitioner",
          
        },
        {
          code: 224572003,
          display: "Nursing sister",
          
        },
        {
          code: 224573008,
          display: "CN - Charge nurse",
          
        },
        {
          code: 224574002,
          display: "Ward manager",
          
        },
        {
          code: 224575001,
          display: "Nursing team leader",
          
        },
        {
          code: 224576000,
          display: "Nursing assistant",
          
        },
        {
          code: 224577009,
          display: "Healthcare assistant",
          
        },
        {
          code: 224578004,
          display: "Nursery nurse",
          
        },
        {
          code: 224579007,
          display: "Healthcare service manager",
          
        },
        {
          code: 224580005,
          display: "Occupational health service manager",
          
        },
        {
          code: 224581009,
          display: "Community nurse manager",
          
        },
        {
          code: 224583007,
          display: "Behavior therapist",
          
        },
        {
          code: 224584001,
          display: "Behavior therapy assistant",
          
        },
        {
          code: 224585000,
          display: "Drama therapist",
          
        },
        {
          code: 224586004,
          display: "Domiciliary occupational therapist",
          
        },
        {
          code: 224587008,
          display: "Occupational therapy helper",
          
        },
        {
          code: 224588003,
          display: "Psychotherapist",
          
        },
        {
          code: 224589006,
          display: "Community-based physiotherapist",
          
        },
        {
          code: 224590002,
          display: "Play therapist",
          
        },
        {
          code: 224591003,
          display: "Play specialist",
          
        },
        {
          code: 224592005,
          display: "Play leader",
          
        },
        {
          code: 224593000,
          display: "Community-based speech/language therapist",
          
        },
        {
          code: 224594006,
          display: "Speech/language assistant",
          
        },
        {
          code: 224595007,
          display: "Professional counselor",
          
        },
        {
          code: 224596008,
          display: "Marriage guidance counselor",
          
        },
        {
          code: 224597004,
          display: "Trained nurse counselor",
          
        },
        {
          code: 224598009,
          display: "Trained social worker counselor",
          
        },
        {
          code: 224599001,
          display: "Trained personnel counselor",
          
        },
        {
          code: 224600003,
          display: "Psychoanalyst",
          
        },
        {
          code: 224601004,
          display: "Assistant psychologist",
          
        },
        {
          code: 224602006,
          display: "Community-based podiatrist",
          
        },
        {
          code: 224603001,
          display: "Foot care worker",
          
        },
        {
          code: 224604007,
          display: "Audiometrician",
          
        },
        {
          code: 224605008,
          display: "Audiometrist",
          
        },
        {
          code: 224606009,
          display: "Technical healthcare occupation",
          
        },
        {
          code: 224607000,
          display: "Occupational therapy technical instructor",
          
        },
        {
          code: 224608005,
          display: "Administrative healthcare staff",
          
        },
        {
          code: 224609002,
          display: "Complementary health worker",
          
        },
        {
          code: 224610007,
          display: "Supporting services personnel",
          
        },
        {
          code: 224614003,
          display: "Research associate",
          
        },
        {
          code: 224615002,
          display: "Research nurse",
          
        },
        {
          code: 224620002,
          display: "Human aid to communication",
          
        },
        {
          code: 224621003,
          display: "Palantypist",
          
        },
        {
          code: 224622005,
          display: "Note taker",
          
        },
        {
          code: 224623000,
          display: "Cuer",
          
        },
        {
          code: 224624006,
          display: "Lipspeaker",
          
        },
        {
          code: 224625007,
          display: "Interpreter for British sign language",
          
        },
        {
          code: 224626008,
          display: "Interpreter for Signs supporting English",
          
        },
        {
          code: 224936003,
          display: "General practitioner locum",
          
        },
        {
          code: 225726006,
          display: "Lactation consultant",
          
        },
        {
          code: 225727002,
          display: "Midwife counselor",
          
        },
        {
          code: 265937000,
          display: "Nursing occupation",
          
        },
        {
          code: 265939002,
          display: "Medical/dental technicians",
          
        },
        {
          code: 283875005,
          display: "Parkinson disease nurse",
          
        },
        {
          code: 302211009,
          display: "Specialist registrar",
          
        },
        {
          code: 303124005,
          display: "Member of mental health review tribunal",
          
        },
        {
          code: 303129000,
          display: "Hospital manager",
          
        },
        {
          code: 303133007,
          display: "Responsible medical officer",
          
        },
        {
          code: 303134001,
          display: "Independent doctor",
          
        },
        {
          code: 304291006,
          display: "Bereavement counselor",
          
        },
        {
          code: 304292004,
          display: "Surgeon",
          
        },
        {
          code: 307988006,
          display: "Medical technician",
          
        },
        {
          code: 308002005,
          display: "Remedial therapist",
          
        },
        {
          code: 309294001,
          display: "Accident and Emergency doctor",
          
        },
        {
          code: 309295000,
          display: "Clinical oncologist",
          
        },
        {
          code: 309296004,
          display: "Family planning doctor",
          
        },
        {
          code: 309322005,
          display: "Associate general practitioner",
          
        },
        {
          code: 309323000,
          display: "Partner of general practitioner",
          
        },
        {
          code: 309324006,
          display: "Assistant GP",
          
        },
        {
          code: 309326008,
          display: "Deputizing general practitioner",
          
        },
        {
          code: 309327004,
          display: "General practitioner registrar",
          
        },
        {
          code: 309328009,
          display: "Ambulatory pediatrician",
          
        },
        {
          code: 309329001,
          display: "Community pediatrician",
          
        },
        {
          code: 309330006,
          display: "Pediatric cardiologist",
          
        },
        {
          code: 309331005,
          display: "Pediatric endocrinologist",
          
        },
        {
          code: 309332003,
          display: "Pediatric gastroenterologist",
          
        },
        {
          code: 309333008,
          display: "Pediatric nephrologist",
          
        },
        {
          code: 309334002,
          display: "Pediatric neurologist",
          
        },
        {
          code: 309335001,
          display: "Pediatric rheumatologist",
          
        },
        {
          code: 309336000,
          display: "Pediatric oncologist",
          
        },
        {
          code: 309337009,
          display: "Pain management specialist",
          
        },
        {
          code: 309338004,
          display: "Intensive care specialist",
          
        },
        {
          code: 309339007,
          display: "Adult intensive care specialist",
          
        },
        {
          code: 309340009,
          display: "Pediatric intensive care specialist",
          
        },
        {
          code: 309341008,
          display: "Blood transfusion doctor",
          
        },
        {
          code: 309342001,
          display: "Histopathologist",
          
        },
        {
          code: 309343006,
          display: "Physician",
          
        },
        {
          code: 309345004,
          display: "Chest physician",
          
        },
        {
          code: 309346003,
          display: "Thoracic physician",
          
        },
        {
          code: 309347007,
          display: "Clinical hematologist",
          
        },
        {
          code: 309348002,
          display: "Clinical neurophysiologist",
          
        },
        {
          code: 309349005,
          display: "Clinical physiologist",
          
        },
        {
          code: 309350005,
          display: "Diabetologist",
          
        },
        {
          code: 309351009,
          display: "Andrologist",
          
        },
        {
          code: 309352002,
          display: "Neuroendocrinologist",
          
        },
        {
          code: 309353007,
          display: "Reproductive endocrinologist",
          
        },
        {
          code: 309354001,
          display: "Thyroidologist",
          
        },
        {
          code: 309355000,
          display: "Clinical geneticist",
          
        },
        {
          code: 309356004,
          display: "Clinical cytogeneticist",
          
        },
        {
          code: 309357008,
          display: "Clinical molecular geneticist",
          
        },
        {
          code: 309358003,
          display: "Genitourinary medicine physician",
          
        },
        {
          code: 309359006,
          display: "Palliative care physician",
          
        },
        {
          code: 309360001,
          display: "Rehabilitation physician",
          
        },
        {
          code: 309361002,
          display: "Child and adolescent psychiatrist",
          
        },
        {
          code: 309362009,
          display: "Forensic psychiatrist",
          
        },
        {
          code: 309363004,
          display: "Liaison psychiatrist",
          
        },
        {
          code: 309364005,
          display: "Psychogeriatrician",
          
        },
        {
          code: 309365006,
          display: "Psychiatrist for mental handicap",
          
        },
        {
          code: 309366007,
          display: "Rehabilitation psychiatrist",
          
        },
        {
          code: 309367003,
          display: "Obstetrician and gynecologist",
          
        },
        {
          code: 309368008,
          display: "Breast surgeon",
          
        },
        {
          code: 309369000,
          display: "Cardiothoracic surgeon",
          
        },
        {
          code: 309371000,
          display: "Cardiac surgeon",
          
        },
        {
          code: 309372007,
          display: "Ear, nose and throat surgeon",
          
        },
        {
          code: 309373002,
          display: "Endocrine surgeon",
          
        },
        {
          code: 309374008,
          display: "Thyroid surgeon",
          
        },
        {
          code: 309375009,
          display: "Pituitary surgeon",
          
        },
        {
          code: 309376005,
          display: "Gastrointestinal surgeon",
          
        },
        {
          code: 309377001,
          display: "General gastrointestinal surgeon",
          
        },
        {
          code: 309378006,
          display: "Upper gastrointestinal surgeon",
          
        },
        {
          code: 309379003,
          display: "Colorectal surgeon",
          
        },
        {
          code: 309380000,
          display: "Hand surgeon",
          
        },
        {
          code: 309381001,
          display: "Hepatobiliary surgeon",
          
        },
        {
          code: 309382008,
          display: "Ophthalmic surgeon",
          
        },
        {
          code: 309383003,
          display: "Pediatric surgeon",
          
        },
        {
          code: 309384009,
          display: "Pancreatic surgeon",
          
        },
        {
          code: 309385005,
          display: "Transplant surgeon",
          
        },
        {
          code: 309386006,
          display: "Trauma surgeon",
          
        },
        {
          code: 309388007,
          display: "Vascular surgeon",
          
        },
        {
          code: 309389004,
          display: "Medical practitioner grade",
          
        },
        {
          code: 309390008,
          display: "Hospital consultant",
          
        },
        {
          code: 309391007,
          display: "Visiting specialist registrar",
          
        },
        {
          code: 309392000,
          display: "Research registrar",
          
        },
        {
          code: 309393005,
          display: "General practitioner grade",
          
        },
        {
          code: 309394004,
          display: "General practitioner principal",
          
        },
        {
          code: 309395003,
          display: "Hospital specialist",
          
        },
        {
          code: 309396002,
          display: "Associate specialist",
          
        },
        {
          code: 309397006,
          display: "Research fellow",
          
        },
        {
          code: 309398001,
          display: "Allied health professional",
          
        },
        {
          code: 309399009,
          display: "Hospital dietitian",
          
        },
        {
          code: 309400002,
          display: "Domiciliary physiotherapist",
          
        },
        {
          code: 309401003,
          display: "General practitioner-based physiotherapist",
          
        },
        {
          code: 309402005,
          display: "Hospital-based physiotherapist",
          
        },
        {
          code: 309403000,
          display: "Private physiotherapist",
          
        },
        {
          code: 309404006,
          display: "Physiotherapy assistant",
          
        },
        {
          code: 309409001,
          display: "Hospital-based speech and language therapist",
          
        },
        {
          code: 309410006,
          display: "Arts therapist",
          
        },
        {
          code: 309411005,
          display: "Dance therapist",
          
        },
        {
          code: 309412003,
          display: "Music therapist",
          
        },
        {
          code: 309413008,
          display: "Renal dietitian",
          
        },
        {
          code: 309414002,
          display: "Liver dietitian",
          
        },
        {
          code: 309415001,
          display: "Oncology dietitian",
          
        },
        {
          code: 309416000,
          display: "Pediatric dietitian",
          
        },
        {
          code: 309417009,
          display: "Diabetes dietitian",
          
        },
        {
          code: 309418004,
          display: "Audiologist",
          
        },
        {
          code: 309419007,
          display: "Hearing therapist",
          
        },
        {
          code: 309420001,
          display: "Audiological scientist",
          
        },
        {
          code: 309421002,
          display: "Hearing aid dispenser",
          
        },
        {
          code: 309422009,
          display: "Community-based occupational therapist",
          
        },
        {
          code: 309423004,
          display: "Hospital occupational therapist",
          
        },
        {
          code: 309427003,
          display: "Social services occupational therapist",
          
        },
        {
          code: 309428008,
          display: "Orthotist",
          
        },
        {
          code: 309429000,
          display: "Surgical fitter",
          
        },
        {
          code: 309434001,
          display: "Hospital-based podiatrist",
          
        },
        {
          code: 309435000,
          display: "Podiatry assistant",
          
        },
        {
          code: 309436004,
          display: "Lymphedema nurse",
          
        },
        {
          code: 309437008,
          display: "Community learning disabilities nurse",
          
        },
        {
          code: 309439006,
          display: "Clinical nurse teacher",
          
        },
        {
          code: 309440008,
          display: "Community practice nurse teacher",
          
        },
        {
          code: 309441007,
          display: "Nurse tutor",
          
        },
        {
          code: 309442000,
          display: "Nurse teacher practitioner",
          
        },
        {
          code: 309443005,
          display: "Nurse lecturer practitioner",
          
        },
        {
          code: 309444004,
          display: "Outreach nurse",
          
        },
        {
          code: 309445003,
          display: "Anesthetic nurse",
          
        },
        {
          code: 309446002,
          display: "Nurse manager",
          
        },
        {
          code: 309450009,
          display: "Nurse administrator",
          
        },
        {
          code: 309452001,
          display: "Midwifery grade",
          
        },
        {
          code: 309453006,
          display: "Midwife",
          
        },
        {
          code: 309454000,
          display: "Student midwife",
          
        },
        {
          code: 309455004,
          display: "Parentcraft sister",
          
        },
        {
          code: 309459005,
          display: "Healthcare professional grade",
          
        },
        {
          code: 309460000,
          display: "Restorative dentist",
          
        },
        {
          code: 310170009,
          display: "Pediatric audiologist",
          
        },
        {
          code: 310171008,
          display: "Immunopathologist",
          
        },
        {
          code: 310172001,
          display: "Audiological physician",
          
        },
        {
          code: 310173006,
          display: "Clinical pharmacologist",
          
        },
        {
          code: 310174000,
          display: "Private doctor",
          
        },
        {
          code: 310175004,
          display: "Agency nurse",
          
        },
        {
          code: 310176003,
          display: "Behavioral therapist nurse",
          
        },
        {
          code: 310177007,
          display: "Cardiac rehabilitation nurse",
          
        },
        {
          code: 310178002,
          display: "Genitourinary nurse",
          
        },
        {
          code: 310179005,
          display: "Rheumatology nurse specialist",
          
        },
        {
          code: 310180008,
          display: "Continence nurse",
          
        },
        {
          code: 310181007,
          display: "Contact tracing nurse",
          
        },
        {
          code: 310182000,
          display: "General nurse",
          
        },
        {
          code: 310183005,
          display: "Nurse for the mentally handicapped",
          
        },
        {
          code: 310184004,
          display: "Liaison nurse",
          
        },
        {
          code: 310185003,
          display: "Diabetic liaison nurse",
          
        },
        {
          code: 310186002,
          display: "Nurse psychotherapist",
          
        },
        {
          code: 310187006,
          display: "Company nurse",
          
        },
        {
          code: 310188001,
          display: "Hospital midwife",
          
        },
        {
          code: 310189009,
          display: "Genetic counselor",
          
        },
        {
          code: 310190000,
          display: "Mental health counselor",
          
        },
        {
          code: 310191001,
          display: "Clinical psychologist",
          
        },
        {
          code: 310192008,
          display: "Educational psychologist",
          
        },
        {
          code: 310193003,
          display: "Coroner",
          
        },
        {
          code: 310194009,
          display: "Appliance officer",
          
        },
        {
          code: 310512001,
          display: "Medical oncologist",
          
        },
        {
          code: 311441001,
          display: "School medical officer",
          
        },
        {
          code: 312485001,
          display: "Integrated midwife",
          
        },
        {
          code: 372102007,
          display: "RN First Assist",
          
        },
        {
          code: 387619007,
          display: "Optician",
          
        },
        {
          code: 394572006,
          display: "Medical secretary",
          
        },
        {
          code: 394618009,
          display: "Hospital nurse",
          
        },
        {
          code: 397824005,
          display: "Consultant anesthetist",
          
        },
        {
          code: 397897005,
          display: "Paramedic",
          
        },
        {
          code: 397903001,
          display: "Staff grade obstetrician",
          
        },
        {
          code: 397908005,
          display: "Staff grade practitioner",
          
        },
        {
          code: 398130009,
          display: "Medical student",
          
        },
        {
          code: 398238009,
          display: "Acting obstetric registrar",
          
        },
        {
          code: 404940000,
          display: "Physiotherapist technical instructor",
          
        },
        {
          code: 405277009,
          display: "Resident physician",
          
        },
        {
          code: 405278004,
          display: "Certified registered nurse anesthetist",
          
        },
        {
          code: 405279007,
          display: "Attending physician",
          
        },
        {
          code: 405623001,
          display: "Assigned practitioner",
          
        },
        {
          code: 405684005,
          display: "Professional initiating surgical case",
          
        },
        {
          code: 405685006,
          display: "Professional providing staff relief during surgical procedure",
          
        },
        {
          code: 408798009,
          display: "Consultant pediatrician",
          
        },
        {
          code: 408799001,
          display: "Consultant neonatologist",
          
        },
        {
          code: 409974004,
          display: "Health educator",
          
        },
        {
          code: 409975003,
          display: "Certified health education specialist",
          
        },
        {
          code: 413854007,
          display: "Circulating nurse",
          
        },
        {
          code: 415075003,
          display: "Perioperative nurse",
          
        },
        {
          code: 415506007,
          display: "Scrub nurse",
          
        },
        {
          code: 416160000,
          display: "Fellow of American Academy of Osteopathy",
          
        },
        {
          code: 420409002,
          display: "Oculoplastic surgeon",
          
        },
        {
          code: 420678001,
          display: "Retinal surgeon",
          
        },
        {
          code: 421841007,
          display: "Admitting physician",
          
        },
        {
          code: 422140007,
          display: "Medical ophthalmologist",
          
        },
        {
          code: 422234006,
          display: "Ophthalmologist",
          
        },
        {
          code: 432100008,
          display: "Health coach",
          
        },
        {
          code: 442867008,
          display: "Respiratory therapist",
          
        },
        {
          code: 443090005,
          display: "Podiatric surgeon",
          
        },
        {
          code: 444912007,
          display: "Hypnotherapist",
          
        },
        {
          code: 445313000,
          display: "Asthma nurse specialist",
          
        },
        {
          code: 445451001,
          display: "Nurse case manager",
          
        },
        {
          code: 446050000,
          display: "PCP - Primary care physician",
          
        },
        {
          code: 446701002,
          display: "Addiction medicine specialist",
          
        },
        {
          code: 449161006,
          display: "PA - physician assistant",
          
        },
        {
          code: 471302004,
          display: "Government midwife",
          
        },
        {
          code: 3981000175106,
          display: "Nurse complex case manager",
          
        },
        {
          code: 231189271000087100,
          display: "Naturopath",
          
        },
        {
          code: 236749831000087100,
          display: "Prosthetist",
          
        },
        {
          code: 258508741000087100,
          display: "Hip and knee surgeon",
          
        },
        {
          code: 260767431000087100,
          display: "Hepatologist",
          
        },
        {
          code: 285631911000087100,
          display: "Shoulder surgeon",
          
        },
        {
          code: 291705421000087100,
          display: "Interventional radiologist",
          
        },
        {
          code: 341320851000087100,
          display: "Pediatric radiologist",
          
        },
        {
          code: 368890881000087100,
          display: "Emergency medicine specialist",
          
        },
        {
          code: 398480381000087100,
          display: "Family medicine specialist - palliative care",
          
        },
        {
          code: 416186861000087100,
          display: "Surgical oncologist",
          
        },
        {
          code: 450044741000087100,
          display: "Acupuncturist",
          
        },
        {
          code: 465511991000087100,
          display: "Pediatric orthopedic surgeon",
          
        },
        {
          code: 494782281000087100,
          display: "Pediatric hematologist",
          
        },
        {
          code: 619197631000087000,
          display: "Neuroradiologist",
          
        },
        {
          code: 623630151000087200,
          display: "Family medicine specialist - anesthetist",
          
        },
        {
          code: 666997781000087200,
          display: "Doula",
          
        },
        {
          code: 673825031000087200,
          display: "Traditional herbal medicine specialist",
          
        },
        {
          code: 682131381000087200,
          display: "Occupational medicine specialist",
          
        },
        {
          code: 724111801000087000,
          display: "Pediatric emergency medicine specialist",
          
        },
        {
          code: 747936471000087000,
          display: "Family medicine specialist - care of the elderly",
          
        },
        {
          code: 766788081000087000,
          display: "Travel medicine specialist",
          
        },
        {
          code: 767205061000087200,
          display: "Spine surgeon",
          
        },
        {
          code: 813758161000087200,
          display: "Maternal or fetal medicine specialist",
          
        },
        {
          code: 822410621000087000,
          display: "Massage therapist",
          
        },
        {
          code: 847240411000087000,
          display: "Hospitalist",
          
        },
        {
          code: 853827051000087000,
          display: "Sports medicine specialist",
          
        },
        {
          code: 926871431000087000,
          display: "Pediatric respirologist",
          
        },
        {
          code: 954544641000087200,
          display: "Homeopath",
          
        },
        {
          code: 956387501000087000,
          display: "Family medicine specialist - emergency medicine",
          
        },
        {
          code: 969118571000087200,
          display: "Pediatric hematologist or oncologist",
          
        },
        {
          code: 984095901000087200,
          display: "Foot and ankle surgeon",
          
        },
        {
          code: 990928611000087200,
          display: "Invasive cardiologist",
          
        },
        {
          code: 999480451000087000,
          display: "Case manager",
          
        },
        {
          code: 999480461000087000,
          display: "Kinesthesiologist",
          
        }
      ];

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

    const statusReason = [
        {
          code: 135809002,
          display: "Nitrate contraindicated",
          
        },
        {
          code: 135811006,
          display: "Diuretic contraindicated",
          
        },
        {
          code: 135822005,
          display: "Lipid lowering therapy contraindicated",
          
        },
        {
          code: 135823000,
          display: "Calcium channel blocker contraindicated",
          
        },
        {
          code: 169551000,
          display: "Contraception contraindicated",
          
        },
        {
          code: 170954008,
          display: "Hormone replacement therapy (HRT) contraindicated",
          
        },
        {
          code: 171277005,
          display: "Sensitivity C/I - immunization",
          
        },
        {
          code: 171284002,
          display: "Pertussis vaccine contraindicated",
          
        },
        {
          code: 183934000,
          display: "Sensitivity contraindication to procedure",
          
        },
        {
          code: 183936003,
          display: "Contraindication to live immunization",
          
        },
        {
          code: 266757004,
          display: "Medical contraindication to procedure",
          
        },
        {
          code: 266758009,
          display: "Immunization contraindicated",
          
        },
        {
          code: 268560002,
          display: "Medical C/I - immunization",
          
        },
        {
          code: 275935009,
          display: "Surgery contraindicated",
          
        },
        {
          code: 275974002,
          display: "Measles/mumps/rubella vaccine contraindicated",
          
        },
        {
          code: 312451002,
          display: "Aspirin prophylaxis contra-indicated",
          
        },
        {
          code: 315061006,
          display: "Warfarin contraindicated",
          
        },
        {
          code: 315062004,
          display: "Beta blocker contraindicated",
          
        },
        {
          code: 315363002,
          display: "Statins contraindicated",
          
        },
        {
          code: 315364008,
          display: "Angiotensin converting enzyme inhibitors contraindicated",
          
        },
        {
          code: 315591006,
          display: "Fibrates contraindicated",
          
        },
        {
          code: 390795005,
          display: "Pneumococcal vaccination contraindicated",
          
        },
        {
          code: 390796006,
          display: "Influenza vaccination contraindicated",
          
        },
        {
          code: 390910005,
          display: "Thrombolysis contraindicated",
          
        },
        {
          code: 394987009,
          display: "Angiotensin II receptor antagonists contraindicated",
          
        },
        {
          code: 395174005,
          display: "Nicotine replacement therapy contraindicated",
          
        },
        {
          code: 395175006,
          display: "Bupropion contraindicated",
          
        },
        {
          code: 395675007,
          display: "Oral contraceptive pill contraindicated",
          
        },
        {
          code: 407582002,
          display: "Clopidogrel contraindicated",
          
        },
        {
          code: 413558003,
          display: "Anticoagulation contraindicated",
          
        },
        {
          code: 414055003,
          display: "Drug dependence home detoxification contraindicated",
          
        },
        {
          code: 414159007,
          display: "Exercise tolerance test contraindicated",
          
        },
        {
          code: 414677003,
          display: "Metformin contraindicated",
          
        },
        {
          code: 415571003,
          display: "Spirometry reversibility testing contraindicated",
          
        },
        {
          code: 415666001,
          display: "Administration of sulfonylurea contraindicated",
          
        },
        {
          code: 416091008,
          display: "Glitazones contraindicated",
          
        },
        {
          code: 416475003,
          display: "Combined calcium and vitamin D3 preparation contraindicated",
          
        },
        {
          code: 416704001,
          display: "DXA scan contraindicated",
          
        },
        {
          code: 416759002,
          display: "Non-steroidal anti-inflammatory drugs contraindicated",
          
        },
        {
          code: 416996000,
          display: "Strontium ranelate contraindicated",
          
        },
        {
          code: 417101006,
          display: "Selective estrogen receptor modulator contraindicated",
          
        },
        {
          code: 417128001,
          display: "Bisphosphonates contraindicated",
          
        },
        {
          code: 438767006,
          display: "Termination of pregnancy contraindicated",
          
        },
        {
          code: 438833006,
          display: "Administration of drug or medicament contraindicated",
          
        },
        {
          code: 698468005,
          display: "Bisoprolol contraindicated",
          
        },
        {
          code: 698521002,
          display: "Simvastatin contraindicated",
          
        },
        {
          code: 699037006,
          display: "Hepatitis B vaccination contraindicated",
          
        },
        {
          code: 703997000,
          display: "Teriparatide contraindicated",
          
        },
        {
          code: 703999002,
          display: "Raloxifene contraindicated",
          
        },
        {
          code: 707298000,
          display: "Phosphodiesterase-5 inhibitor contraindicated",
          
        },
        {
          code: 715163003,
          display: "Diphtheria vaccination contraindicated",
          
        },
        {
          code: 715166006,
          display: "Bacillus Calmette-Guerin vaccination contraindicated",
          
        },
        {
          code: 170624001,
          display: "Oral steroids stopped",
          
        },
        {
          code: 170688000,
          display: "Lithium stopped",
          
        },
        {
          code: 170689008,
          display: "Injectable phenothiazine stopped",
          
        },
        {
          code: 170919001,
          display: "Warfarin therapy stopped",
          
        },
        {
          code: 170958006,
          display: "Hormonal replacement therapy (HRT) stopped",
          
        },
        {
          code: 182840001,
          display: "Drug treatment stopped - medical advice",
          
        },
        {
          code: 182841002,
          display: "Dr stopped drugs - ineffective",
          
        },
        {
          code: 182842009,
          display: "Doctor stopped drugs - side effect",
          
        },
        {
          code: 182843004,
          display: "Dr stopped drugs -inconvenient",
          
        },
        {
          code: 182844005,
          display: "Doctor stopped drugs - patient dislikes",
          
        },
        {
          code: 182845006,
          display: "Doctor stopped drugs - avoid interaction",
          
        },
        {
          code: 182846007,
          display: "Doctor stopped drugs - medical aim achieved",
          
        },
        {
          code: 274512008,
          display: "Drug therapy discontinued",
          
        },
        {
          code: 309841001,
          display: "Thyroxine treatment stopped",
          
        },
        {
          code: 394909009,
          display: "Syringe driver discontinued",
          
        },
        {
          code: 395006008,
          display: "Medication stopped - interaction",
          
        },
        {
          code: 395007004,
          display: "Medication stopped - ineffective",
          
        },
        {
          code: 395008009,
          display: "Medication stopped - contra-indication",
          
        },
        {
          code: 395009001,
          display: "Medication stopped - side effect",
          
        },
        {
          code: 412782003,
          display: "Inappropriate medication stopped",
          
        },
        {
          code: 425519007,
          display: "Cardiopulmonary resuscitation discontinued due to medical control order",
          
        },
        {
          code: 425921008,
          display: "Cardiopulmonary resuscitation discontinued due to do not resuscitate order",
          
        },
        {
          code: 426970003,
          display: "Cardiopulmonary resuscitation discontinued due to return of spontaneous circulation",
          
        },
        {
          code: 426999008,
          display: "Cardiopulmonary resuscitation discontinued due to signs of death",
          
        },
        {
          code: 427569000,
          display: "Cardiopulmonary resuscitation discontinued as per protocol",
          
        },
        {
          code: 430279008,
          display: "Drug treatment stopped at end of clinical trial",
          
        },
        {
          code: 438604008,
          display: "Peritoneal dialysis therapy discontinued",
          
        },
        {
          code: 439516000,
          display: "Hemodialysis therapy discontinued",
          
        },
        {
          code: 710765004,
          display: "Wound drain discontinued",
          
        },
        {
          code: 713246009,
          display: "Procedure discontinued by healthcare professional",
          
        },
        {
          code: 713247000,
          display: "Procedure discontinued by patient",
          
        },
        {
          code: 713248005,
          display: "Procedure discontinued by doctor",
          
        },
        {
          code: 162650008,
          display: "Patient not examined",
          
        },
        {
          code: 162675007,
          display: "General examination not done",
          
        },
        {
          code: 162882008,
          display: "Respiratory system not examined",
          
        },
        {
          code: 162980001,
          display: "CVS not examined",
          
        },
        {
          code: 163128002,
          display: "GIT not examined",
          
        },
        {
          code: 163348001,
          display: "GU system not examined",
          
        },
        {
          code: 163582008,
          display: "Nervous system not examined",
          
        },
        {
          code: 163628001,
          display: "Sensory system not examined",
          
        },
        {
          code: 163900009,
          display: "O/E - CNS not examined",
          
        },
        {
          code: 164176006,
          display: "ENT examination not performed",
          
        },
        {
          code: 164286000,
          display: "O/E - temperature not taken",
          
        },
        {
          code: 164321005,
          display: "O/E - skin not examined",
          
        },
        {
          code: 164445005,
          display: "O/E - extremities not examined",
          
        },
        {
          code: 164503006,
          display: "Orthopedic exam. not done",
          
        },
        {
          code: 164713001,
          display: "Neurological diagnostic procedure - not done",
          
        },
        {
          code: 164725003,
          display: "Visual testing not done",
          
        },
        {
          code: 164746007,
          display: "Auditory/vestibular test not done",
          
        },
        {
          code: 164766003,
          display: "Special ENT procedure not done",
          
        },
        {
          code: 164776000,
          display: "Special CVS test not done",
          
        },
        {
          code: 164786004,
          display: "Special GIT test not done",
          
        },
        {
          code: 164795007,
          display: "Special urinary test not done",
          
        },
        {
          code: 164808009,
          display: "Special female test not done",
          
        },
        {
          code: 164823004,
          display: "Special male test not done",
          
        },
        {
          code: 164831009,
          display: "Musculoskeletal test not done",
          
        },
        {
          code: 164853006,
          display: "ECG not done",
          
        },
        {
          code: 164964005,
          display: "Susceptibility skin test not done",
          
        },
        {
          code: 164978006,
          display: "Mantoux test not done",
          
        },
        {
          code: 164985005,
          display: "Kveim test not done",
          
        },
        {
          code: 164997006,
          display: "Hypersensitivity skin test not done",
          
        },
        {
          code: 165008002,
          display: "Allergy testing not done",
          
        },
        {
          code: 165017002,
          display: "Lung function testing not done",
          
        },
        {
          code: 165026004,
          display: "Lung volume test not done",
          
        },
        {
          code: 165035006,
          display: "Respiratory flow rate not measured",
          
        },
        {
          code: 165074004,
          display: "Cardiac function test not done",
          
        },
        {
          code: 165081006,
          display: "Exercise tolerance test not done",
          
        },
        {
          code: 165104002,
          display: "Metabolic function not tested",
          
        },
        {
          code: 165122004,
          display: "Non-surgical biopsy not done",
          
        },
        {
          code: 165139002,
          display: "Endoscopy not carried out",
          
        },
        {
          code: 165343008,
          display: "Laboratory test requested - not done",
          
        },
        {
          code: 165377003,
          display: "Hematology test request - not done",
          
        },
        {
          code: 165393007,
          display: "Hemoglobin not estimated",
          
        },
        {
          code: 167219008,
          display: "Urine not examined",
          
        },
        {
          code: 167260001,
          display: "Urine glucose test not done",
          
        },
        {
          code: 167272007,
          display: "Urine protein test not done",
          
        },
        {
          code: 167286006,
          display: "Urine ketone test not done",
          
        },
        {
          code: 167296002,
          display: "Urine blood test not done",
          
        },
        {
          code: 167306007,
          display: "Urine pH test not done",
          
        },
        {
          code: 167317008,
          display: "Urine bacteria test not done",
          
        },
        {
          code: 167322008,
          display: "Urine urobilinogen not tested",
          
        },
        {
          code: 167594003,
          display: "Feces not examined",
          
        },
        {
          code: 167701000,
          display: "CSF: not examined",
          
        },
        {
          code: 167728005,
          display: "CSF chemistry - not tested",
          
        },
        {
          code: 168497006,
          display: "Radiographic imaging procedure not carried out",
          
        },
        {
          code: 169607004,
          display: "No antenatal care",
          
        },
        {
          code: 169610006,
          display: "Antenatal care: not attended",
          
        },
        {
          code: 169611005,
          display: "No antenatal care: not known pregnant",
          
        },
        {
          code: 169699008,
          display: "Antenatal syphilis screening not done",
          
        },
        {
          code: 169704000,
          display: "Antenatal blood group screening not done",
          
        },
        {
          code: 169708002,
          display: "Antenatal sickle screening not done",
          
        },
        {
          code: 170100005,
          display: "Child not examined at birth",
          
        },
        {
          code: 170108003,
          display: "Child not examined at 10 days",
          
        },
        {
          code: 170117003,
          display: "Child 6 week examination not attended",
          
        },
        {
          code: 170126000,
          display: "8-9 month exam not attended",
          
        },
        {
          code: 170135007,
          display: "18 month examination not attended",
          
        },
        {
          code: 170144008,
          display: "2.5 year examination not attended",
          
        },
        {
          code: 170153001,
          display: "3.5 year examination not attended",
          
        },
        {
          code: 170162004,
          display: "4.5 year examination not attended",
          
        },
        {
          code: 170171008,
          display: "10 year examination not attended",
          
        },
        {
          code: 170180008,
          display: "15 year examination not attended",
          
        },
        {
          code: 170257006,
          display: "Child 1 year examination not attended",
          
        },
        {
          code: 170266005,
          display: "Child 6 month examination not attended",
          
        },
        {
          code: 170275007,
          display: "Child 21 month examination not attended",
          
        },
        {
          code: 170284007,
          display: "Child 3 year exam not attended",
          
        },
        {
          code: 170293008,
          display: "Child 39 month examination not attended",
          
        },
        {
          code: 170304008,
          display: "Child 8 week examination not attended",
          
        },
        {
          code: 182849000,
          display: "No drug therapy prescribed",
          
        },
        {
          code: 183928007,
          display: "Residence remote from medical care",
          
        },
        {
          code: 183929004,
          display: "No home medical services",
          
        },
        {
          code: 183930009,
          display: "Awaiting admission elsewhere",
          
        },
        {
          code: 266756008,
          display: "Medical care unavailable",
          
        },
        {
          code: 266881002,
          display: "No history taken",
          
        },
        {
          code: 309846006,
          display: "Treatment not available",
          
        },
        {
          code: 310352003,
          display: "Mammography not attended",
          
        },
        {
          code: 314374001,
          display: "360 degree sweep of cervix not performed",
          
        },
        {
          code: 371900001,
          display: "Medication not administered",
          
        },
        {
          code: 373147003,
          display: "Medication not administered because contraindicated",
          
        },
        {
          code: 373148008,
          display: "Thrombolytic agent not administered because contraindicated",
          
        },
        {
          code: 390848004,
          display: "Retinae not examined",
          
        },
        {
          code: 391016008,
          display: "Osteoporosis risk assessment defaulted",
          
        },
        {
          code: 394965000,
          display: "Urine leukocyte test not done",
          
        },
        {
          code: 396781004,
          display: "No chemotherapy AND/OR radiation therapy prior to lymphadenectomy",
          
        },
        {
          code: 397004005,
          display: "Immunophenotypic analysis not performed",
          
        },
        {
          code: 397399004,
          display: "Cell phenotyping not performed",
          
        },
        {
          code: 399538001,
          display: "Cytogenetic study not performed",
          
        },
        {
          code: 401318002,
          display: "Shuttle walking test not done",
          
        },
        {
          code: 408504000,
          display: "Child 7 month examination not attended",
          
        },
        {
          code: 408836004,
          display: "Sample not obtained",
          
        },
        {
          code: 408837008,
          display: "Amniocentesis sample not obtained",
          
        },
        {
          code: 416128008,
          display: "No past history of procedure",
          
        },
        {
          code: 418014008,
          display: "Procedure not ordered",
          
        },
        {
          code: 418731009,
          display: "No stain applied",
          
        },
        {
          code: 428348004,
          display: "Cardiopulmonary resuscitation not attempted",
          
        },
        {
          code: 439867009,
          display: "Determination of pattern of resistance to antiviral agent not done",
          
        },
        {
          code: 441989008,
          display: "Delayed hypersensitivity skin test for histoplasmin not done",
          
        },
        {
          code: 443788002,
          display: "Maternal postnatal examination not attended",
          
        },
        {
          code: 698569004,
          display: "Postnatal depression not discussed",
          
        },
        {
          code: 698753008,
          display: "Never had cervical smear",
          
        },
        {
          code: 699231000,
          display: "Domestic abuse not discussed",
          
        },
        {
          code: 703942005,
          display: "Never had mammogram",
          
        },
        {
          code: 712751006,
          display: "Radiation therapy not done",
          
        },
        {
          code: 712985002,
          display: "Chemotherapy not done",
          
        },
        {
          code: 713207007,
          display: "Neck dissection not done",
          
        },
        {
          code: 715621003,
          display: "Heart failure education not done",
          
        },
        {
          code: 715622005,
          display: "Warfarin not prescribed",
          
        },
        {
          code: 4451000175106,
          display: "Asthma action plan not done",
          
        },
        {
          code: 4461000175108,
          display: "Cervical cancer screening not done",
          
        },
        {
          code: 4471000175100,
          display: "Colorectal cancer screening not done",
          
        },
        {
          code: 4501000175108,
          display: "Hemoglobin A1C test not done",
          
        },
        {
          code: 4541000175105,
          display: "Spirometry not done",
          
        },
        {
          code: 4551000175107,
          display: "Diabetic foot exam not done",
          
        },
        {
          code: 4591000175100,
          display: "Bone density screening not done",
          
        },
        {
          code: 5991000175105,
          display: "Peak expiratory flow not done",
          
        },
        {
          code: 6021000175100,
          display: "Vaccination for diphtheria, pertussis, and tetanus not done",
          
        },
        {
          code: 6031000175102,
          display: "Varicella vaccination not done",
          
        },
        {
          code: 6041000175108,
          display: "Hepatitis A vaccination not done",
          
        },
        {
          code: 6051000175105,
          display: "Hepatitis B vaccination not done",
          
        },
        {
          code: 134390006,
          display: "Angiotensin converting enzyme inhibitor not indicated",
          
        },
        {
          code: 134391005,
          display: "Statin not indicated",
          
        },
        {
          code: 134392003,
          display: "Warfarin not indicated",
          
        },
        {
          code: 134394002,
          display: "Aspirin not indicated",
          
        },
        {
          code: 135805008,
          display: "Nitrate not indicated",
          
        },
        {
          code: 135806009,
          display: "Calcium channel blocker not indicated",
          
        },
        {
          code: 135807000,
          display: "Lipid lowering therapy not indicated",
          
        },
        {
          code: 135808005,
          display: "Diuretic not indicated",
          
        },
        {
          code: 183964008,
          display: "Treatment not indicated",
          
        },
        {
          code: 183965009,
          display: "Surgery not indicated",
          
        },
        {
          code: 183966005,
          display: "Drug treatment not indicated",
          
        },
        {
          code: 315214003,
          display: "Beta blocker not indicated",
          
        },
        {
          code: 407571005,
          display: "Clopidogrel not indicated",
          
        },
        {
          code: 407572003,
          display: "Angiotensin II receptor antagonist not indicated",
          
        },
        {
          code: 407573008,
          display: "Influenza vaccination not indicated",
          
        },
        {
          code: 408339001,
          display: "Thrombolysis therapy not indicated",
          
        },
        {
          code: 408396006,
          display: "Diabetic retinopathy screening not indicated",
          
        },
        {
          code: 408397002,
          display: "Diabetic foot examination not indicated",
          
        },
        {
          code: 408398007,
          display: "Smoking review not indicated",
          
        },
        {
          code: 413167008,
          display: "Compression bandaging not indicated",
          
        },
        {
          code: 413560001,
          display: "Anticoagulation not indicated",
          
        },
        {
          code: 413812009,
          display: "Cervical smear not indicated",
          
        },
        {
          code: 415119001,
          display: "Pneumococcal vaccination not indicated",
          
        },
        {
          code: 415570002,
          display: "Spirometry not indicated",
          
        },
        {
          code: 415667005,
          display: "Administration of sulfonylurea not indicated",
          
        },
        {
          code: 416664005,
          display: "Selective estrogen receptor modulator not indicated",
          
        },
        {
          code: 416670004,
          display: "Glitazones not indicated",
          
        },
        {
          code: 416678006,
          display: "Combined calcium and vitamin D3 preparation not indicated",
          
        },
        {
          code: 416741000,
          display: "Strontium ranelate not indicated",
          
        },
        {
          code: 417013004,
          display: "DXA scan not indicated",
          
        },
        {
          code: 417218000,
          display: "Carotid ultrasound not indicated",
          
        },
        {
          code: 417434004,
          display: "Bisphosphonates not indicated",
          
        },
        {
          code: 699048004,
          display: "Exercise tolerance test not indicated",
          
        },
        {
          code: 700384008,
          display: "Antibiotic prophylaxis not indicated",
          
        },
        {
          code: 703971006,
          display: "Hepatitis A vaccination not indicated",
          
        },
        {
          code: 703996009,
          display: "Teriparatide not indicated",
          
        },
        {
          code: 704000000,
          display: "Raloxifene not indicated",
          
        },
        {
          code: 704033005,
          display: "Phosphodiesterase 5 inhibitor not indicated",
          
        },
        {
          code: 704052004,
          display: "Referral to cardiac rehabilitation program not indicated",
          
        },
        {
          code: 704096004,
          display: "Referral to heart failure exercise program not indicated",
          
        },
        {
          code: 707287001,
          display: "Hepatitis B vaccination not indicated",
          
        },
        {
          code: 707853004,
          display: "Testing for Ebola virus not indicated",
          
        },
        {
          code: 709198003,
          display: "Education not indicated",
          
        },
        {
          code: 712740006,
          display: "Medication monitoring not indicated",
          
        },
        {
          code: 146922001,
          display: "Rubella screening not offered",
          
        },
        {
          code: 147022006,
          display: "Double test not offered",
          
        },
        {
          code: 148324002,
          display: "Screening not offered",
          
        },
        {
          code: 148477008,
          display: "Immunization not offered",
          
        },
        {
          code: 169608009,
          display: "Antenatal care: not offered",
          
        },
        {
          code: 170115006,
          display: "Child 6 week examination not offered",
          
        },
        {
          code: 170124002,
          display: "8-9 month exam not offered",
          
        },
        {
          code: 170133000,
          display: "18 month examination not offered",
          
        },
        {
          code: 170142007,
          display: "2.5 year examination not offered",
          
        },
        {
          code: 170151004,
          display: "3.5 year examination not offered",
          
        },
        {
          code: 170160007,
          display: "4.5 year examination not offered",
          
        },
        {
          code: 170169008,
          display: "10 year examination not offered",
          
        },
        {
          code: 170178002,
          display: "15 year examination not offered",
          
        },
        {
          code: 170255003,
          display: "Child 1 year examination not offered",
          
        },
        {
          code: 170264008,
          display: "Child 6 month examination not offered",
          
        },
        {
          code: 170273000,
          display: "Child 21 month examination not offered",
          
        },
        {
          code: 170282006,
          display: "Child 3 year exam not offered",
          
        },
        {
          code: 170291005,
          display: "Child 39 month examination not offered",
          
        },
        {
          code: 170301000,
          display: "Child 8 week examination not offered",
          
        },
        {
          code: 408506003,
          display: "Child 7 month examination not offered",
          
        },
        {
          code: 444062004,
          display: "Maternal postnatal examination not offered",
          
        },
        {
          code: 712790005,
          display: "Triple test not offered",
          
        },
        {
          code: 712803007,
          display: "Administration of Anti-D globulin not offered",
          
        },
        {
          code: 712812009,
          display: "Antenatal ultrasound scan not offered",
          
        },
        {
          code: 712851004,
          display: "Alpha-fetoprotein blood test not offered",
          
        },
        {
          code: 712852006,
          display: "Amniocentesis not offered",
          
        },
        {
          code: 712854007,
          display: "Antenatal screening for viral hepatitis type B not offered",
          
        },
        {
          code: 712869008,
          display: "Antenatal HIV (human immunodeficiency virus) screening not offered",
          
        },
        {
          code: 712870009,
          display: "Antenatal Rhesus antibody screening not offered",
          
        },
        {
          code: 712872001,
          display: "Antenatal thalassemia screening not offered",
          
        },
        {
          code: 712996005,
          display: "Parenting education not offered",
          
        },
        {
          code: 169609001,
          display: "Antenatal care: not wanted",
          
        },
        {
          code: 169635000,
          display: "Parent craft not wanted",
          
        },
        {
          code: 169649009,
          display: "A/N amniocentesis - not wanted",
          
        },
        {
          code: 169660000,
          display: "A/N U/S scan not wanted",
          
        },
        {
          code: 169687001,
          display: "Alpha-fetoprotein gene (AFP) blood test not wanted",
          
        },
        {
          code: 169693009,
          display: "Rubella screening not wanted",
          
        },
        {
          code: 169795009,
          display: "Triple test not wanted",
          
        },
        {
          code: 169796005,
          display: "Double test not wanted",
          
        },
        {
          code: 170116007,
          display: "Child 6 week examination not wanted",
          
        },
        {
          code: 170125001,
          display: "8-9 month exam not wanted",
          
        },
        {
          code: 170134006,
          display: "18 month examination not wanted",
          
        },
        {
          code: 170143002,
          display: "2.5 year examination not wanted",
          
        },
        {
          code: 170152006,
          display: "3.5 year examination not wanted",
          
        },
        {
          code: 170161006,
          display: "4.5 year examination not wanted",
          
        },
        {
          code: 170170009,
          display: "10 year examination not wanted",
          
        },
        {
          code: 170179005,
          display: "15 year examination not wanted",
          
        },
        {
          code: 170256002,
          display: "Child 1 year examination not wanted",
          
        },
        {
          code: 170265009,
          display: "Child 6 month examination not wanted",
          
        },
        {
          code: 170274006,
          display: "Child 21 month examination not wanted",
          
        },
        {
          code: 170283001,
          display: "Child 3 year exam not wanted",
          
        },
        {
          code: 170292003,
          display: "Child 39 month examination not wanted",
          
        },
        {
          code: 170302007,
          display: "Child 8 week examination not wanted",
          
        },
        {
          code: 171034000,
          display: "Health education not wanted",
          
        },
        {
          code: 171103002,
          display: "Screening not wanted",
          
        },
        {
          code: 171152003,
          display: "Cancer of cervix screening not wanted",
          
        },
        {
          code: 184163005,
          display: "Child surveillance not wanted",
          
        },
        {
          code: 408505004,
          display: "Child 7 month examination not wanted",
          
        },
        {
          code: 105480006,
          display: "Refusal of treatment by patient",
          
        },
        {
          code: 134385008,
          display: "Referral to dietician declined",
          
        },
        {
          code: 134386009,
          display: "Referral to chiropodist declined",
          
        },
        {
          code: 134396000,
          display: "Statin declined",
          
        },
        {
          code: 134397009,
          display: "Angiotensin converting enzyme inhibitor declined",
          
        },
        {
          code: 134398004,
          display: "Warfarin declined",
          
        },
        {
          code: 135812004,
          display: "Nitrate declined",
          
        },
        {
          code: 135814003,
          display: "Diuretic declined",
          
        },
        {
          code: 135825007,
          display: "Calcium channel blocker declined",
          
        },
        {
          code: 135826008,
          display: "Lipid lowering therapy declined",
          
        },
        {
          code: 165342003,
          display: "Patient refused laboratory test",
          
        },
        {
          code: 165376007,
          display: "Patient refused hematology test",
          
        },
        {
          code: 168499009,
          display: "Radiology refused",
          
        },
        {
          code: 182895007,
          display: "Drug declined by patient",
          
        },
        {
          code: 182896008,
          display: "Drug declined by patient - dislikes taste",
          
        },
        {
          code: 182897004,
          display: "Drug declined by patient - side effects",
          
        },
        {
          code: 182898009,
          display: "Drug declined by patient - inconvenient",
          
        },
        {
          code: 182899001,
          display: "Drug declined by patient - problem swallowing",
          
        },
        {
          code: 182900006,
          display: "Drug declined by patient - patient beliefs",
          
        },
        {
          code: 182901005,
          display: "Drug declined by patient - alternative therapy",
          
        },
        {
          code: 182902003,
          display: "Drug declined by patient - cannot pay script",
          
        },
        {
          code: 182903008,
          display: "Drug declined by patient - reason unknown",
          
        },
        {
          code: 183945002,
          display: "Procedure refused for religious reason",
          
        },
        {
          code: 183946001,
          display: "Procedure refused - uncooperative",
          
        },
        {
          code: 183947005,
          display: "Refused procedure - after thought",
          
        },
        {
          code: 183948000,
          display: "Refused procedure - parent's wish",
          
        },
        {
          code: 183949008,
          display: "Assessment examination refused",
          
        },
        {
          code: 183956002,
          display: "Care/help refused by patient",
          
        },
        {
          code: 183957006,
          display: "Patient refuses day hospital",
          
        },
        {
          code: 183958001,
          display: "Refuses meals on wheels",
          
        },
        {
          code: 183959009,
          display: "Social Services help refused",
          
        },
        {
          code: 183960004,
          display: "Patient refuses hospital admit",
          
        },
        {
          code: 183961000,
          display: "Part III accommodation refused",
          
        },
        {
          code: 183962007,
          display: "Patient non-compliant with specific advice",
          
        },
        {
          code: 185754009,
          display: "Refuses diabetes monitoring",
          
        },
        {
          code: 275936005,
          display: "Patient noncompliance - general",
          
        },
        {
          code: 315020006,
          display: "Beta blocker therapy refused",
          
        },
        {
          code: 315021005,
          display: "Refuses CHD monitoring",
          
        },
        {
          code: 315022003,
          display: "Nicotine replacement therapy refused",
          
        },
        {
          code: 315023008,
          display: "Aspirin prophylaxis refused",
          
        },
        {
          code: 315640000,
          display: "Influenza vaccination declined",
          
        },
        {
          code: 371138003,
          display: "Refusal of treatment by parents",
          
        },
        {
          code: 390914001,
          display: "Thrombolytic therapy refused",
          
        },
        {
          code: 391015007,
          display: "Osteoporosis risk assessment refused",
          
        },
        {
          code: 395176007,
          display: "Bupropion refused",
          
        },
        {
          code: 395703005,
          display: "Meningitis C immunization refused",
          
        },
        {
          code: 401047000,
          display: "Hypertension treatment refused",
          
        },
        {
          code: 401084003,
          display: "Angiotensin II receptor antagonist declined",
          
        },
        {
          code: 401086001,
          display: "Pneumococcal vaccination declined",
          
        },
        {
          code: 406149000,
          display: "Medication refused",
          
        },
        {
          code: 407583007,
          display: "Clopidogrel declined",
          
        },
        {
          code: 408548005,
          display: "Magnetic resonance imaging scan declined",
          
        },
        {
          code: 408549002,
          display: "Angiocardiography declined",
          
        },
        {
          code: 408551003,
          display: "Exercise tolerance test refused",
          
        },
        {
          code: 408558009,
          display: "Multidisciplinary team falls assessment declined",
          
        },
        {
          code: 408559001,
          display: "Primary health care team falls assessment declined",
          
        },
        {
          code: 408566000,
          display: "Echocardiogram declined",
          
        },
        {
          code: 408567009,
          display: "CT scan brain declined",
          
        },
        {
          code: 408569007,
          display: "Diagnostic procedure declined",
          
        },
        {
          code: 408572000,
          display: "Carotid artery doppler declined",
          
        },
        {
          code: 408778004,
          display: "Hepatitis B immunization declined",
          
        },
        {
          code: 408791003,
          display: "BCG vaccination declined",
          
        },
        {
          code: 408795007,
          display: "Vitamin K prophylaxis declined",
          
        },
        {
          code: 412713002,
          display: "Coronary arteriography declined",
          
        },
        {
          code: 412718006,
          display: "Chlamydia screening declined",
          
        },
        {
          code: 412725004,
          display: "Medication review declined",
          
        },
        {
          code: 412752009,
          display: "Diabetic foot examination declined",
          
        },
        {
          code: 413122001,
          display: "Diabetic retinopathy screening refused",
          
        },
        {
          code: 413123006,
          display: "Blood pressure procedure refused",
          
        },
        {
          code: 413310006,
          display: "Patient non-compliant - refused access to services",
          
        },
        {
          code: 413311005,
          display: "Patient non-compliant - refused intervention / support",
          
        },
        {
          code: 413312003,
          display: "Patient non-compliant - refused service",
          
        },
        {
          code: 413559006,
          display: "Anticoagulation declined",
          
        },
        {
          code: 413756001,
          display: "Cardiac rehabilitation declined",
          
        },
        {
          code: 415572005,
          display: "Spirometry test declined",
          
        },
        {
          code: 416126007,
          display: "Bisphosphonates declined",
          
        },
        {
          code: 416522000,
          display: "Strontium ranelate declined",
          
        },
        {
          code: 416888009,
          display: "DXA scan declined",
          
        },
        {
          code: 417045009,
          display: "Combined calcium and vitamin D3 preparation declined",
          
        },
        {
          code: 417114007,
          display: "Refused referral to minor ailments clinic",
          
        },
        {
          code: 417512003,
          display: "Selective estrogen receptor modulator declined",
          
        },
        {
          code: 426544006,
          display: "History refused",
          
        },
        {
          code: 428042006,
          display: "Medium-chain acyl-coenzyme A dehydrogenase deficiency screening test declined",
          
        },
        {
          code: 428073005,
          display: "Alcohol consumption screening test declined",
          
        },
        {
          code: 428299008,
          display: "Sickle cell screening declined",
          
        },
        {
          code: 428650003,
          display: "Congenital hypothyroidism screening declined",
          
        },
        {
          code: 428841003,
          display: "Cystic fibrosis screening declined",
          
        },
        {
          code: 429284000,
          display: "CVD risk assessment declined",
          
        },
        {
          code: 429688007,
          display: "Nurse triage declined",
          
        },
        {
          code: 429726000,
          display: "Phenylketonuria screening declined",
          
        },
        {
          code: 429739001,
          display: "Patient refused transportation",
          
        },
        {
          code: 438370008,
          display: "Vascular disease risk assessment declined",
          
        },
        {
          code: 438765003,
          display: "Human papillomavirus vaccination declined",
          
        },
        {
          code: 439495000,
          display: "Counseling declined",
          
        },
        {
          code: 440621003,
          display: "Referral declined by patient",
          
        },
        {
          code: 442324008,
          display: "Antenatal screening declined",
          
        },
        {
          code: 442392002,
          display: "Ambulance transport to hospital declined",
          
        },
        {
          code: 442444001,
          display: "Referral to specialist alcohol treatment service declined by patient",
          
        },
        {
          code: 444020006,
          display: "Maternal postnatal examination refused",
          
        },
        {
          code: 473149004,
          display: "Long acting reversible contraception declined",
          
        },
        {
          code: 698357006,
          display: "Abdominal aortic aneurysm screening declined",
          
        },
        {
          code: 698451006,
          display: "Ankle brachial pressure index test declined",
          
        },
        {
          code: 698460003,
          display: "Antiviral therapy declined",
          
        },
        {
          code: 698473004,
          display: "Blood glucose test declined",
          
        },
        {
          code: 698483000,
          display: "Weight management advice declined",
          
        },
        {
          code: 698484006,
          display: "Measurement of waist circumference declined",
          
        },
        {
          code: 698490005,
          display: "Urine dipstick test declined",
          
        },
        {
          code: 698758004,
          display: "Nebivolol therapy refused",
          
        },
        {
          code: 698950001,
          display: "Influenza A virus subtype H1N1 vaccination declined",
          
        },
        {
          code: 699034004,
          display: "Home oxygen therapy declined",
          
        },
        {
          code: 699042003,
          display: "History taking of sexual orientation declined",
          
        },
        {
          code: 699053009,
          display: "Foot pulse check declined",
          
        },
        {
          code: 699054003,
          display: "Administration of blood product declined",
          
        },
        {
          code: 699128009,
          display: "Blood transfusion declined",
          
        },
        {
          code: 699137009,
          display: "Carvedilol therapy declined",
          
        },
        {
          code: 700359005,
          display: "Booster meningitis C vaccination declined",
          
        },
        {
          code: 700411009,
          display: "Routine enquiry about domestic abuse declined",
          
        },
        {
          code: 703427001,
          display: "Refusal of treatment by patient against dental advice",
          
        },
        {
          code: 703989007,
          display: "Teriparatide therapy declined",
          
        },
        {
          code: 703991004,
          display: "Raloxifene therapy declined",
          
        },
        {
          code: 703992006,
          display: "Breastfeeding support declined",
          
        },
        {
          code: 704046000,
          display: "Mental health assessment declined",
          
        },
        {
          code: 704047009,
          display: "Phosphodiesterase 5 inhibitor declined",
          
        },
        {
          code: 704049007,
          display: "Referral to erectile dysfunction clinic declined",
          
        },
        {
          code: 704051006,
          display: "Referral to cardiac rehabilitation program declined",
          
        },
        {
          code: 704097008,
          display: "Referral to heart failure exercise program declined",
          
        },
        {
          code: 705140004,
          display: "Physical health assessment declined",
          
        },
        {
          code: 706890009,
          display: "Vaginal birth after previous cesarean section refused",
          
        },
        {
          code: 707745004,
          display: "Tuberculosis screening declined",
          
        },
        {
          code: 707746003,
          display: "Screening chest X-ray declined",
          
        },
        {
          code: 708129006,
          display: "Transfusion of blood product refused for religious reason",
          
        },
        {
          code: 713068007,
          display: "Over 75 years of age health check declined",
          
        },
        {
          code: 713615000,
          display: "Advance care planning declined",
          
        },
        {
          code: 714747005,
          display: "Discussion about advance care planning declined",
          
        },
        {
          code: 715508000,
          display: "Assessment using Generalized Anxiety Disorder 7 item scale declined",
          
        },
        {
          code: 716048005,
          display: "Review of advance care plan declined",
          
        },
        {
          code: 591000119102,
          display: "Vaccine refused by patient",
          
        },
        {
          code: 921000119109,
          display: "Vaccine refused by parent",
          
        },
        {
          code: 116101000119100,
          display: "Colonoscopy refused",
          
        },
        {
          code: 314553311000087100,
          display: "Decided to wait for a specific provider",
          
        },
        {
          code: 914933391000087200,
          display: "Request procedure deferral",
          
        },
        {
          code: 168533005,
          display: "Radiotherapy stopped",
          
        },
        {
          code: 170585007,
          display: "Cardiac disease treatment stopped",
          
        },
        {
          code: 170588009,
          display: "Treatment for hypertension stopped",
          
        },
        {
          code: 170620005,
          display: "Respiratory disease treatment stopped",
          
        },
        {
          code: 170621009,
          display: "Home oxygen supply stopped",
          
        },
        {
          code: 170675003,
          display: "Gastrointestinal tract treatment stopped",
          
        },
        {
          code: 170687005,
          display: "Psychiatric treatment stopped",
          
        },
        {
          code: 170700002,
          display: "Neurological disorder treatment stopped",
          
        },
        {
          code: 170712003,
          display: "Epilepsy treatment stopped",
          
        },
        {
          code: 170725006,
          display: "Ophthalmological treatment stopped",
          
        },
        {
          code: 170800007,
          display: "Treatment of obesity stopped",
          
        },
        {
          code: 170816009,
          display: "Endocrine disease treatment stopped",
          
        },
        {
          code: 170826002,
          display: "B12 injections stopped",
          
        },
        {
          code: 170834008,
          display: "Blood disorder treatment stopped",
          
        },
        {
          code: 170843004,
          display: "Allergic disorder treatment stopped",
          
        },
        {
          code: 170854009,
          display: "Rheumatology disorder treatment stopped",
          
        },
        {
          code: 170863006,
          display: "Skin disorder treatment stopped",
          
        },
        {
          code: 170872003,
          display: "Gynecological disorder treatment stopped",
          
        },
        {
          code: 170882002,
          display: "Urinary disorder treatment stopped",
          
        },
        {
          code: 170894006,
          display: "ENT disease treatment stopped",
          
        },
        {
          code: 170904002,
          display: "Ostomy - treatment stopped",
          
        },
        {
          code: 170912005,
          display: "High risk treatment stopped",
          
        },
        {
          code: 170929008,
          display: "Repeat prescription treatment stopped",
          
        },
        {
          code: 180863000,
          display: "Operation aborted",
          
        },
        {
          code: 268521004,
          display: "Thyroid disease treatment stopped",
          
        },
        {
          code: 288120003,
          display: "Operation abandoned before onset",
          
        },
        {
          code: 391021006,
          display: "Osteoporosis treatment stopped",
          
        },
        {
          code: 397023003,
          display: "Operation not completed",
          
        },
        {
          code: 414120003,
          display: "ERCP not completed due to anatomical derangements from previous surgery",
          
        },
        {
          code: 698459008,
          display: "Antidepressant drug treatment stopped",
          
        },
        {
          code: 700110004,
          display: "Bisphosphonate prophylaxis suspended",
          
        },
        {
          code: 708000007,
          display: "Insulin treatment stopped",
          
        }
      ];

    const statusReasonProps = {
        options: statusReason,
        getOptionLabel: (option) => option.display,
    };

    const usedCode = [
        {
          code: 156009,
          display: "Spine board",
          
        },
        {
          code: 271003,
          display: "Bone plate",
          
        },
        {
          code: 287000,
          display: "Air receiver",
          
        },
        {
          code: 291005,
          display: "Atomizer",
          
        },
        {
          code: 678001,
          display: "Epilator",
          
        },
        {
          code: 739006,
          display: "Bicycle ergometer",
          
        },
        {
          code: 793009,
          display: "Mechanical power press",
          
        },
        {
          code: 882002,
          display: "Diagnostic implant",
          
        },
        {
          code: 972002,
          display: "Air filter, device",
          
        },
        {
          code: 989005,
          display: "Linen cloth",
          
        },
        {
          code: 994005,
          display: "Brush, device",
          
        },
        {
          code: 1211003,
          display: "Treadmill, device",
          
        },
        {
          code: 1333003,
          display: "Emesis basin, device",
          
        },
        {
          code: 1422002,
          display: "Plastic mold, device",
          
        },
        {
          code: 1579007,
          display: "Surgical drill, device",
          
        },
        {
          code: 1766001,
          display: "Toboggan, device",
          
        },
        {
          code: 1941006,
          display: "Silk cloth",
          
        },
        {
          code: 1962007,
          display: "Dike, device",
          
        },
        {
          code: 2248009,
          display: "Tracheal tube cuff",
          
        },
        {
          code: 2282003,
          display: "Breast implant",
          
        },
        {
          code: 2287009,
          display: "Nail file, device",
          
        },
        {
          code: 2468001,
          display: "Breath analyzer, device",
          
        },
        {
          code: 2478003,
          display: "Ocular prosthesis",
          
        },
        {
          code: 2491002,
          display: "Intra-aortic balloon catheter, device",
          
        },
        {
          code: 3201004,
          display: "Tent, device",
          
        },
        {
          code: 3319006,
          display: "Artificial liver, device",
          
        },
        {
          code: 4408003,
          display: "Endoscopic camera, device",
          
        },
        {
          code: 4632004,
          display: "Hair cloth",
          
        },
        {
          code: 4816004,
          display: "Metal device",
          
        },
        {
          code: 5041003,
          display: "Adhesive strip, device",
          
        },
        {
          code: 5042005,
          display: "Patient scale, device",
          
        },
        {
          code: 5159002,
          display: "Physiologic monitoring system, device",
          
        },
        {
          code: 5679009,
          display: "Bed sheet",
          
        },
        {
          code: 6012004,
          display: "Hearing aid",
          
        },
        {
          code: 6097006,
          display: "T-tube",
          
        },
        {
          code: 6822006,
          display: "Microwave oven",
          
        },
        {
          code: 6919005,
          display: "Protective clothing material",
          
        },
        {
          code: 6972009,
          display: "Lithotripter",
          
        },
        {
          code: 7007007,
          display: "Radiographic-fluoroscopic unit",
          
        },
        {
          code: 7402007,
          display: "Probe",
          
        },
        {
          code: 7406005,
          display: "Crib",
          
        },
        {
          code: 7704007,
          display: "Stabilizing appliance",
          
        },
        {
          code: 7733008,
          display: "Hydrocephalic shunt catheter",
          
        },
        {
          code: 7968002,
          display: "Three-wheeled all-terrain vehicle",
          
        },
        {
          code: 7971005,
          display: "Fogarty catheter",
          
        },
        {
          code: 8060009,
          display: "Denture",
          
        },
        {
          code: 8118007,
          display: "Crane",
          
        },
        {
          code: 8170008,
          display: "Adhesive",
          
        },
        {
          code: 8384009,
          display: "Band saw",
          
        },
        {
          code: 8407004,
          display: "Bile collection bag",
          
        },
        {
          code: 8434001,
          display: "Gaol",
          
        },
        {
          code: 8451008,
          display: "Intramedullary nail",
          
        },
        {
          code: 8615009,
          display: "Blood electrolyte analyzer",
          
        },
        {
          code: 8643000,
          display: "Mortising machine",
          
        },
        {
          code: 8682003,
          display: "Protective shield",
          
        },
        {
          code: 9017009,
          display: "Ventricular intracranial catheter",
          
        },
        {
          code: 9096001,
          display: "Support",
          
        },
        {
          code: 9129003,
          display: "Feeding catheter",
          
        },
        {
          code: 9419002,
          display: "Bobsled",
          
        },
        {
          code: 9458007,
          display: "Elastic bandage",
          
        },
        {
          code: 9611009,
          display: "Dermatotome",
          
        },
        {
          code: 9883003,
          display: "Cargo handling gear",
          
        },
        {
          code: 10244001,
          display: "Needle guide",
          
        },
        {
          code: 10371004,
          display: "Electrostimulating analgesia unit",
          
        },
        {
          code: 10507000,
          display: "Toeboard",
          
        },
        {
          code: 10826000,
          display: "Industrial saw",
          
        },
        {
          code: 10850003,
          display: "Radiographic-therapeutic unit",
          
        },
        {
          code: 10906003,
          display: "Vein stripper",
          
        },
        {
          code: 11141007,
          display: "Bone growth stimulator",
          
        },
        {
          code: 11158002,
          display: "Electromyographic monitor and recorder",
          
        },
        {
          code: 11358008,
          display: "Prosthetic valve",
          
        },
        {
          code: 11987000,
          display: "Clinical chemistry analyzer",
          
        },
        {
          code: 12150006,
          display: "Cannula",
          
        },
        {
          code: 12183004,
          display: "Upper limb prosthesis",
          
        },
        {
          code: 12198002,
          display: "Ice skate",
          
        },
        {
          code: 12953007,
          display: "File",
          
        },
        {
          code: 13118005,
          display: "Wool cloth",
          
        },
        {
          code: 13219008,
          display: "Gastroscope",
          
        },
        {
          code: 13288007,
          display: "Monitors",
          
        },
        {
          code: 13459008,
          display: "Temporary artificial heart prosthesis",
          
        },
        {
          code: 13764006,
          display: "Uterine sound",
          
        },
        {
          code: 13855007,
          display: "Pillow",
          
        },
        {
          code: 13905003,
          display: "Tennis ball",
          
        },
        {
          code: 14106009,
          display: "Cardiac pacemaker implant",
          
        },
        {
          code: 14108005,
          display: "Cage",
          
        },
        {
          code: 14116001,
          display: "Analgesia unit",
          
        },
        {
          code: 14208000,
          display: "Oil well",
          
        },
        {
          code: 14288003,
          display: "Nasal septum button",
          
        },
        {
          code: 14339000,
          display: "Button",
          
        },
        {
          code: 14364002,
          display: "Camera",
          
        },
        {
          code: 14423008,
          display: "Adhesive bandage",
          
        },
        {
          code: 14519003,
          display: "Aspirator",
          
        },
        {
          code: 14548009,
          display: "Harrington rod",
          
        },
        {
          code: 14762000,
          display: "Alloy steel chain sling",
          
        },
        {
          code: 14789005,
          display: "Prosthetic implant",
          
        },
        {
          code: 15000008,
          display: "Air-conditioner",
          
        },
        {
          code: 15340005,
          display: "Wood's light",
          
        },
        {
          code: 15447007,
          display: "Arthroplasty prosthesis",
          
        },
        {
          code: 15644007,
          display: "Anesthesia unit",
          
        },
        {
          code: 15869005,
          display: "Dosimeter, device",
          
        },
        {
          code: 15873008,
          display: "Boiler, device",
          
        },
        {
          code: 15922004,
          display: "Gown, device",
          
        },
        {
          code: 16056004,
          display: "Boots",
          
        },
        {
          code: 16349000,
          display: "Orthopedic equipment",
          
        },
        {
          code: 16417001,
          display: "Commercial breathing supply hoses diving operation, device",
          
        },
        {
          code: 16470007,
          display: "Electrode, device",
          
        },
        {
          code: 16497000,
          display: "Electric clipper, device",
          
        },
        {
          code: 16524003,
          display: "Cotton cloth",
          
        },
        {
          code: 16540000,
          display: "Umbrella catheter, device",
          
        },
        {
          code: 16650009,
          display: "Splint, device",
          
        },
        {
          code: 17102003,
          display: "NG - Nasogastric tube",
          
        },
        {
          code: 17107009,
          display: "Prosthetic mitral valve",
          
        },
        {
          code: 17207004,
          display: "Mattress, device",
          
        },
        {
          code: 17306006,
          display: "Hernia belt, device",
          
        },
        {
          code: 17404008,
          display: "Cardiac compression board, device",
          
        },
        {
          code: 17472008,
          display: "Knife, device",
          
        },
        {
          code: 18151003,
          display: "Punch, device",
          
        },
        {
          code: 18153000,
          display: "Fluorescence immunoassay analyzer, device",
          
        },
        {
          code: 18411005,
          display: "Chisel, device",
          
        },
        {
          code: 18666004,
          display: "Finespun glass",
          
        },
        {
          code: 19257004,
          display: "Defibrillator, device",
          
        },
        {
          code: 19328000,
          display: "Blanket, device",
          
        },
        {
          code: 19443004,
          display: "Radioactive implant, device",
          
        },
        {
          code: 19627002,
          display: "Leather",
          
        },
        {
          code: 19762002,
          display: "Leather belt",
          
        },
        {
          code: 19817005,
          display: "Fan blade, device",
          
        },
        {
          code: 19892000,
          display: "Scale, device",
          
        },
        {
          code: 19923001,
          display: "Catheter, device",
          
        },
        {
          code: 20195009,
          display: "Leg prosthesis, device",
          
        },
        {
          code: 20235003,
          display: "Toothbrush, device",
          
        },
        {
          code: 20273004,
          display: "Industrial machine, device",
          
        },
        {
          code: 20359006,
          display: "Contraceptive diaphragm, device",
          
        },
        {
          code: 20406008,
          display: "Back rests, device",
          
        },
        {
          code: 20428008,
          display: "Oxygen tent, device",
          
        },
        {
          code: 20513005,
          display: "Power tool, device",
          
        },
        {
          code: 20568009,
          display: "Urinary catheter, device",
          
        },
        {
          code: 20613002,
          display: "Cystoscope, device",
          
        },
        {
          code: 20861007,
          display: "Plug pack, device",
          
        },
        {
          code: 20867006,
          display: "Experimental implant, device",
          
        },
        {
          code: 20873007,
          display: "Plastic cloth-like material",
          
        },
        {
          code: 20997002,
          display: "Hand tool, device",
          
        },
        {
          code: 21079000,
          display: "Carbon monoxide analyzer, device",
          
        },
        {
          code: 21546008,
          display: "Icebox",
          
        },
        {
          code: 21870002,
          display: "Transluminal extraction catheter, device",
          
        },
        {
          code: 21944004,
          display: "Abdominal binder, device",
          
        },
        {
          code: 22251003,
          display: "Timer, device",
          
        },
        {
          code: 22283009,
          display: "Artificial membrane, device",
          
        },
        {
          code: 22566001,
          display: "Cytology brush, device",
          
        },
        {
          code: 22662007,
          display: "Retaining harness, device",
          
        },
        {
          code: 22679001,
          display: "Handcuffs, device",
          
        },
        {
          code: 22744006,
          display: "Artificial hair wig, device",
          
        },
        {
          code: 22852002,
          display: "Therapeutic implant, device",
          
        },
        {
          code: 23228005,
          display: "Arthroscope, device",
          
        },
        {
          code: 23366006,
          display: "Motorized wheelchair device",
          
        },
        {
          code: 23699001,
          display: "Baseball, device",
          
        },
        {
          code: 23785007,
          display: "Arthroscopic irrigation/distension pump, device",
          
        },
        {
          code: 23973005,
          display: "Indwelling urinary catheter, device",
          
        },
        {
          code: 24073000,
          display: "Mechanical cardiac valve prosthesis",
          
        },
        {
          code: 24110008,
          display: "Anoscope, device",
          
        },
        {
          code: 24174009,
          display: "Bronchoscope, device",
          
        },
        {
          code: 24230000,
          display: "Vibrator, device",
          
        },
        {
          code: 24290003,
          display: "Cardiac valve bioprosthesis",
          
        },
        {
          code: 24402003,
          display: "Stepladder, device",
          
        },
        {
          code: 24470005,
          display: "Wrench, device",
          
        },
        {
          code: 24513003,
          display: "Plastic boots",
          
        },
        {
          code: 24697008,
          display: "Ostomy belt, device",
          
        },
        {
          code: 24767007,
          display: "Eustachian tube prosthesis, device",
          
        },
        {
          code: 25005004,
          display: "Snare, device",
          
        },
        {
          code: 25062003,
          display: "Feeding tube, device",
          
        },
        {
          code: 25152007,
          display: "Squeeze cage, device",
          
        },
        {
          code: 25510005,
          display: "Heart valve prosthesis",
          
        },
        {
          code: 25632005,
          display: "Hockey puck, device",
          
        },
        {
          code: 25680008,
          display: "Scaffold, device",
          
        },
        {
          code: 25742001,
          display: "Orthodontic appliance, device",
          
        },
        {
          code: 25937001,
          display: "Neurostimulation device",
          
        },
        {
          code: 26128008,
          display: "Bougie, device",
          
        },
        {
          code: 26239002,
          display: "Soccer ball, device",
          
        },
        {
          code: 26334009,
          display: "Dockboard, device",
          
        },
        {
          code: 26397000,
          display: "Reservoir bag",
          
        },
        {
          code: 26412008,
          display: "ET - Endotracheal tube",
          
        },
        {
          code: 26579007,
          display: "Holter valve, device",
          
        },
        {
          code: 26719000,
          display: "Celestin tube, device",
          
        },
        {
          code: 26882005,
          display: "Rongeur, device",
          
        },
        {
          code: 27042007,
          display: "Needle adapter, device",
          
        },
        {
          code: 27065002,
          display: "Suture",
          
        },
        {
          code: 27091001,
          display: "Dumbwaiter, device",
          
        },
        {
          code: 27126002,
          display: "Power belt, device",
          
        },
        {
          code: 27229001,
          display: "Spray booth, device",
          
        },
        {
          code: 27606000,
          display: "Dental prosthesis, device",
          
        },
        {
          code: 27785006,
          display: "Athletic supporter, device",
          
        },
        {
          code: 27812008,
          display: "Electric heating pad, device",
          
        },
        {
          code: 27976001,
          display: "Woodworking machinery, device",
          
        },
        {
          code: 27991004,
          display: "Thermometer, device",
          
        },
        {
          code: 28026003,
          display: "Hairbrush, device",
          
        },
        {
          code: 29292008,
          display: "Fur garment",
          
        },
        {
          code: 29319002,
          display: "Forceps, device",
          
        },
        {
          code: 29396008,
          display: "Resuscitator, device",
          
        },
        {
          code: 30012001,
          display: "Elevator, device",
          
        },
        {
          code: 30070001,
          display: "Multistage suspension scaffolding, device",
          
        },
        {
          code: 30115002,
          display: "Shield, device",
          
        },
        {
          code: 30176005,
          display: "Baseball bat, device",
          
        },
        {
          code: 30234008,
          display: "Medical laboratory analyzer, device",
          
        },
        {
          code: 30610008,
          display: "Epidural catheter, device",
          
        },
        {
          code: 30661003,
          display: "Cosmetic prosthesis, device",
          
        },
        {
          code: 30929000,
          display: "Ligator, device",
          
        },
        {
          code: 30968007,
          display: "Drainage bag, device",
          
        },
        {
          code: 31030004,
          display: "Peritoneal catheter, device",
          
        },
        {
          code: 31031000,
          display: "Internal fixator",
          
        },
        {
          code: 31174004,
          display: "Lumbosacral belt, device",
          
        },
        {
          code: 31791005,
          display: "Traction belt, device",
          
        },
        {
          code: 31878003,
          display: "Surgical scissors, device",
          
        },
        {
          code: 32033000,
          display: "Arterial pressure monitor, device",
          
        },
        {
          code: 32356002,
          display: "Machine guarding, device",
          
        },
        {
          code: 32504006,
          display: "Screwdriver, device",
          
        },
        {
          code: 32634007,
          display: "Fixed ladder, device",
          
        },
        {
          code: 32667006,
          display: "Oral airway",
          
        },
        {
          code: 32711007,
          display: "Ostomy collection bag, device",
          
        },
        {
          code: 32712000,
          display: "Drain, device",
          
        },
        {
          code: 32871007,
          display: "Tweezer, device",
          
        },
        {
          code: 33194000,
          display: "Welding equipment, device",
          
        },
        {
          code: 33352006,
          display: "Ax, device",
          
        },
        {
          code: 33388001,
          display: "Carbon dioxide analyzer, device",
          
        },
        {
          code: 33482001,
          display: "Rubber boots",
          
        },
        {
          code: 33686008,
          display: "Stylet, device",
          
        },
        {
          code: 33690005,
          display: "Sharp instrument, device",
          
        },
        {
          code: 33802005,
          display: "Enema bag, device",
          
        },
        {
          code: 33894003,
          display: "Experimental device",
          
        },
        {
          code: 33918000,
          display: "Rubberized cloth",
          
        },
        {
          code: 34164001,
          display: "POP - Plaster of Paris cast",
          
        },
        {
          code: 34188004,
          display: "Straightjacket, device",
          
        },
        {
          code: 34234003,
          display: "Plastic tube, device",
          
        },
        {
          code: 34263000,
          display: "Medical balloon, device",
          
        },
        {
          code: 34362008,
          display: "Vascular device",
          
        },
        {
          code: 34759008,
          display: "Urethral catheter, device",
          
        },
        {
          code: 35398009,
          display: "Ostomy appliance, device",
          
        },
        {
          code: 35593004,
          display: "Wire ligature, device",
          
        },
        {
          code: 35870000,
          display: "Cerebrospinal catheter, device",
          
        },
        {
          code: 36365007,
          display: "Ice-pick, device",
          
        },
        {
          code: 36370000,
          display: "Aspirator trap bottle, device",
          
        },
        {
          code: 36645008,
          display: "Stimulator, device",
          
        },
        {
          code: 36761001,
          display: "Natural hair wig, device",
          
        },
        {
          code: 36965003,
          display: "Hemodialysis machine, device",
          
        },
        {
          code: 36977008,
          display: "Peripheral nerve stimulator",
          
        },
        {
          code: 37189001,
          display: "Magnetic detector, device",
          
        },
        {
          code: 37270008,
          display: "Endoscope, device",
          
        },
        {
          code: 37284003,
          display: "Bag, device",
          
        },
        {
          code: 37311003,
          display: "Stone retrieval basket, device",
          
        },
        {
          code: 37347002,
          display: "Dildo, device",
          
        },
        {
          code: 37360008,
          display: "Patient isolator, device",
          
        },
        {
          code: 37503007,
          display: "Protective blind, device",
          
        },
        {
          code: 37759000,
          display: "Surgical instrument, device",
          
        },
        {
          code: 37874008,
          display: "Continuing positive airway pressure unit, device",
          
        },
        {
          code: 37953008,
          display: "Bedside rails, device",
          
        },
        {
          code: 38126007,
          display: "Protective lenses",
          
        },
        {
          code: 38141007,
          display: "Tourniquet, device",
          
        },
        {
          code: 38277008,
          display: "Protective device",
          
        },
        {
          code: 38806006,
          display: "Hockey stick, device",
          
        },
        {
          code: 38862006,
          display: "Sheet metal bending equipment",
          
        },
        {
          code: 38871002,
          display: "Metallic cloth",
          
        },
        {
          code: 39590006,
          display: "Air compressor, device",
          
        },
        {
          code: 39690000,
          display: "Sphygmomanometer, device",
          
        },
        {
          code: 39768008,
          display: "Rasp, device",
          
        },
        {
          code: 39790008,
          display: "Non-electric heating pad, device",
          
        },
        {
          code: 39802000,
          display: "Tongue blade, device",
          
        },
        {
          code: 39821008,
          display: "Positron emission tomography unit, device",
          
        },
        {
          code: 39849001,
          display: "Nasal oxygen cannula",
          
        },
        {
          code: 39869006,
          display: "Alarm, device",
          
        },
        {
          code: 40388003,
          display: "Biomedical implant",
          
        },
        {
          code: 40519001,
          display: "Binder, device",
          
        },
        {
          code: 41157002,
          display: "Orthopedic immobilizer",
          
        },
        {
          code: 41323003,
          display: "Urinary collection bag, device",
          
        },
        {
          code: 41525006,
          display: "Artificial structure, device",
          
        },
        {
          code: 41684000,
          display: "Industrial tool, device",
          
        },
        {
          code: 42152006,
          display: "Metal tube, device",
          
        },
        {
          code: 42305009,
          display: "Ambulation device",
          
        },
        {
          code: 42380001,
          display: "Ear plug, device",
          
        },
        {
          code: 42451009,
          display: "Blood warmer, device",
          
        },
        {
          code: 42716000,
          display: "Wool",
          
        },
        {
          code: 42882002,
          display: "Hypodermic spray, device",
          
        },
        {
          code: 43001000,
          display: "Phlebotomy kit, device",
          
        },
        {
          code: 43192004,
          display: "Bone pencil, device",
          
        },
        {
          code: 43252007,
          display: "Cochlear implant",
          
        },
        {
          code: 43725001,
          display: "Airway equipment",
          
        },
        {
          code: 43734006,
          display: "Blood administration set, device",
          
        },
        {
          code: 43770009,
          display: "Doppler device",
          
        },
        {
          code: 43983001,
          display: "Shoes",
          
        },
        {
          code: 44056008,
          display: "Caliper, device",
          
        },
        {
          code: 44396004,
          display: "Magnet, device",
          
        },
        {
          code: 44492001,
          display: "Industrial robot, device",
          
        },
        {
          code: 44668000,
          display: "Pump, device",
          
        },
        {
          code: 44738004,
          display: "Laryngoscope, device",
          
        },
        {
          code: 44806002,
          display: "Esophageal bougie, device",
          
        },
        {
          code: 44845007,
          display: "Golf ball, device",
          
        },
        {
          code: 44907005,
          display: "Four-wheeled all-terrain vehicle, device",
          
        },
        {
          code: 44959004,
          display: "Angioplasty balloon catheter, device",
          
        },
        {
          code: 45633005,
          display: "Peritoneal dialyzer, device",
          
        },
        {
          code: 45901004,
          display: "Penrose drain, device",
          
        },
        {
          code: 46181005,
          display: "Automatic fire extinguisher system, device",
          
        },
        {
          code: 46265007,
          display: "Artificial lashes, device",
          
        },
        {
          code: 46299005,
          display: "Sanitary belt, device",
          
        },
        {
          code: 46364009,
          display: "Clamp, device",
          
        },
        {
          code: 46440007,
          display: "Basketball, device",
          
        },
        {
          code: 46625003,
          display: "Suppository",
          
        },
        {
          code: 46666003,
          display: "Chain, device",
          
        },
        {
          code: 46949002,
          display: "Deck machinery, device",
          
        },
        {
          code: 47162009,
          display: "Mirror, device",
          
        },
        {
          code: 47326004,
          display: "Electrical utilization equipment, device",
          
        },
        {
          code: 47424002,
          display: "Apgar scoring timer, device",
          
        },
        {
          code: 47528002,
          display: "Ureteric catheter",
          
        },
        {
          code: 47731004,
          display: "Birthing chair, device",
          
        },
        {
          code: 47734007,
          display: "Chromic catgut suture",
          
        },
        {
          code: 47776004,
          display: "Mittens",
          
        },
        {
          code: 47942000,
          display: "Proctoscope, device",
          
        },
        {
          code: 48066006,
          display: "Circular portable saw, device",
          
        },
        {
          code: 48096001,
          display: "Bathtub rails, device",
          
        },
        {
          code: 48240003,
          display: "Training equipment, device",
          
        },
        {
          code: 48246009,
          display: "Studgun, device",
          
        },
        {
          code: 48295009,
          display: "Vascular filter, device",
          
        },
        {
          code: 48473008,
          display: "Protective body armor, device",
          
        },
        {
          code: 48822005,
          display: "Bilirubin light, device",
          
        },
        {
          code: 48990009,
          display: "Strap, device",
          
        },
        {
          code: 49448001,
          display: "Razor, device",
          
        },
        {
          code: 49890001,
          display: "Hospital cart, device",
          
        },
        {
          code: 50121007,
          display: "Glasses",
          
        },
        {
          code: 50457005,
          display: "Workover rig service to oil well, device",
          
        },
        {
          code: 50483000,
          display: "Oil rig",
          
        },
        {
          code: 50851003,
          display: "Penile tumescence monitor, device",
          
        },
        {
          code: 51016001,
          display: "Hammer, device",
          
        },
        {
          code: 51086006,
          display: "Shower curtain, device",
          
        },
        {
          code: 51324004,
          display: "Stripper, device",
          
        },
        {
          code: 51685009,
          display: "Roller skate, device",
          
        },
        {
          code: 51791000,
          display: "Measuring tape, device",
          
        },
        {
          code: 51832004,
          display: "Valved tube, device",
          
        },
        {
          code: 51883004,
          display: "Sling, device",
          
        },
        {
          code: 52124006,
          display: "Central line",
          
        },
        {
          code: 52161002,
          display: "Molten lava",
          
        },
        {
          code: 52291003,
          display: "Gloves",
          
        },
        {
          code: 52520009,
          display: "Ladder, device",
          
        },
        {
          code: 52537002,
          display: "Aspirator collection canister, device",
          
        },
        {
          code: 52624007,
          display: "Radiofrequency generator, device",
          
        },
        {
          code: 52773007,
          display: "Ski, device",
          
        },
        {
          code: 52809000,
          display: "Nasopharyngeal catheter, device",
          
        },
        {
          code: 52893008,
          display: "Blood gas/pH analyzer, device",
          
        },
        {
          code: 53167006,
          display: "Platform suspended boom, device",
          
        },
        {
          code: 53177008,
          display: "Nasal balloon, device",
          
        },
        {
          code: 53217009,
          display: "Artificial lung, device",
          
        },
        {
          code: 53350007,
          display: "Prosthesis, device",
          
        },
        {
          code: 53535004,
          display: "Retractor, device",
          
        },
        {
          code: 53639001,
          display: "Stethoscope, device",
          
        },
        {
          code: 53671008,
          display: "Gastric balloon, device",
          
        },
        {
          code: 53996008,
          display: "Penile prosthesis, device",
          
        },
        {
          code: 54234007,
          display: "Cryogenic analgesia unit, device",
          
        },
        {
          code: 54638004,
          display: "Towel, device",
          
        },
        {
          code: 54953005,
          display: "Computerized axial tomography scanner, device",
          
        },
        {
          code: 55091003,
          display: "Blood coagulation analyzer, device",
          
        },
        {
          code: 55206006,
          display: "Suture button, device",
          
        },
        {
          code: 55216003,
          display: "Amnioscope, device",
          
        },
        {
          code: 55337009,
          display: "Auscultoscope, device",
          
        },
        {
          code: 55567004,
          display: "Bassinet, device",
          
        },
        {
          code: 55658008,
          display: "Hot object",
          
        },
        {
          code: 55986002,
          display: "Tong, device",
          
        },
        {
          code: 56144002,
          display: "Back braces, device",
          
        },
        {
          code: 56353002,
          display: "Staple, device",
          
        },
        {
          code: 56547001,
          display: "Trephine, device",
          
        },
        {
          code: 56896002,
          display: "Pacemaker catheter, device",
          
        },
        {
          code: 56961003,
          display: "Cardiac transvenous pacemaker, device",
          
        },
        {
          code: 57118008,
          display: "Perfusion pump, device",
          
        },
        {
          code: 57134006,
          display: "Clinical instrument",
          
        },
        {
          code: 57368009,
          display: "Contact lens",
          
        },
        {
          code: 57395004,
          display: "Physical restraint equipment, device",
          
        },
        {
          code: 57730005,
          display: "Abrasive grinding, device",
          
        },
        {
          code: 58153004,
          display: "Android, device",
          
        },
        {
          code: 58253008,
          display: "Suction catheter, device",
          
        },
        {
          code: 58514003,
          display: "Infant scale, device",
          
        },
        {
          code: 58878002,
          display: "Protective vest, device",
          
        },
        {
          code: 58938008,
          display: "WC - Wheelchair",
          
        },
        {
          code: 59102007,
          display: "Ice bag, device",
          
        },
        {
          code: 59127000,
          display: "Apnea alarm, device",
          
        },
        {
          code: 59153008,
          display: "Barge, device",
          
        },
        {
          code: 59160002,
          display: "Chipguard, device",
          
        },
        {
          code: 59181002,
          display: "Oxygen analyzer, device",
          
        },
        {
          code: 59432006,
          display: "Ligature, device",
          
        },
        {
          code: 59746007,
          display: "Needle holder, device",
          
        },
        {
          code: 59772003,
          display: "Culdoscope, device",
          
        },
        {
          code: 59782002,
          display: "Speculum, device",
          
        },
        {
          code: 59833007,
          display: "Collapsible balloon, device",
          
        },
        {
          code: 60054005,
          display: "SB - Seat belt",
          
        },
        {
          code: 60110001,
          display: "Wig, device",
          
        },
        {
          code: 60150003,
          display: "Skipole, device",
          
        },
        {
          code: 60161006,
          display: "Acupuncture needle, device",
          
        },
        {
          code: 60185003,
          display: "Carbon dioxide absorber, device",
          
        },
        {
          code: 60311007,
          display: "Leather boots",
          
        },
        {
          code: 60773001,
          display: "Injector",
          
        },
        {
          code: 60806001,
          display: "Whirlpool bath",
          
        },
        {
          code: 60957001,
          display: "Otoscope",
          
        },
        {
          code: 61330002,
          display: "Nasopharyngeal airway device",
          
        },
        {
          code: 61512008,
          display: "Tennis racket",
          
        },
        {
          code: 61835000,
          display: "Dilator",
          
        },
        {
          code: 61968008,
          display: "Syringe",
          
        },
        {
          code: 61979003,
          display: "Antiembolic device",
          
        },
        {
          code: 62336005,
          display: "Electric cable",
          
        },
        {
          code: 62495008,
          display: "Gamma counter",
          
        },
        {
          code: 62614002,
          display: "Overhead and gantry crane",
          
        },
        {
          code: 62980002,
          display: "Tubular bandage",
          
        },
        {
          code: 63112008,
          display: "Bone wire",
          
        },
        {
          code: 63173005,
          display: "Hat band",
          
        },
        {
          code: 63289001,
          display: "Metal nail",
          
        },
        {
          code: 63336000,
          display: "Bone plug",
          
        },
        {
          code: 63548003,
          display: "Derrick",
          
        },
        {
          code: 63562005,
          display: "Cervical collar",
          
        },
        {
          code: 63619003,
          display: "Fiberoptic cable",
          
        },
        {
          code: 63653004,
          display: "Medical device",
          
        },
        {
          code: 63797009,
          display: "Traction unit",
          
        },
        {
          code: 63839002,
          display: "Electroejaculator",
          
        },
        {
          code: 63995005,
          display: "Bandage",
          
        },
        {
          code: 64174005,
          display: "Snowmobile",
          
        },
        {
          code: 64255007,
          display: "Esophageal balloon",
          
        },
        {
          code: 64565002,
          display: "Air tool",
          
        },
        {
          code: 64571008,
          display: "Hair clipper",
          
        },
        {
          code: 64883003,
          display: "Inhalation analgesia unit",
          
        },
        {
          code: 64973003,
          display: "Scissors",
          
        },
        {
          code: 64989000,
          display: "Escalator",
          
        },
        {
          code: 65053001,
          display: "Electrical battery",
          
        },
        {
          code: 65105002,
          display: "Surgical drapes",
          
        },
        {
          code: 65268008,
          display: "Chart recorder",
          
        },
        {
          code: 65473004,
          display: "Microscope",
          
        },
        {
          code: 65577000,
          display: "X-ray shield",
          
        },
        {
          code: 65818007,
          display: "Stent",
          
        },
        {
          code: 66222000,
          display: "Hospital robot",
          
        },
        {
          code: 66415006,
          display: "Audiometric testing equipment",
          
        },
        {
          code: 66435007,
          display: "Electric bed",
          
        },
        {
          code: 66494009,
          display: "Face cloth",
          
        },
        {
          code: 67270000,
          display: "Hip prosthesis",
          
        },
        {
          code: 67387001,
          display: "Coronary perfusion catheter",
          
        },
        {
          code: 67670006,
          display: "Radiographic-tomographic unit",
          
        },
        {
          code: 67777003,
          display: "Moving walk",
          
        },
        {
          code: 67829007,
          display: "Esophagoscope",
          
        },
        {
          code: 67920005,
          display: "Aerial lift",
          
        },
        {
          code: 67966000,
          display: "Enema tube",
          
        },
        {
          code: 68080007,
          display: "Radiographic unit",
          
        },
        {
          code: 68181008,
          display: "Vibrating electric heating pad",
          
        },
        {
          code: 68183006,
          display: "Bone screw",
          
        },
        {
          code: 68276009,
          display: "Bottle",
          
        },
        {
          code: 68325009,
          display: "Sound",
          
        },
        {
          code: 68597009,
          display: "Support belt",
          
        },
        {
          code: 68685003,
          display: "Household robot",
          
        },
        {
          code: 68842005,
          display: "Gastroduodenoscope",
          
        },
        {
          code: 69670004,
          display: "Patient utensil kit",
          
        },
        {
          code: 69805005,
          display: "Insulin pump",
          
        },
        {
          code: 69922008,
          display: "Tracheostomy button",
          
        },
        {
          code: 70080007,
          display: "Bayonet",
          
        },
        {
          code: 70300000,
          display: "Skull tongs",
          
        },
        {
          code: 70303003,
          display: "Freezer",
          
        },
        {
          code: 70453008,
          display: "Sled",
          
        },
        {
          code: 70665002,
          display: "Blood pressure cuff",
          
        },
        {
          code: 70793005,
          display: "Recreation equipment",
          
        },
        {
          code: 70872004,
          display: "Wash basin",
          
        },
        {
          code: 71384000,
          display: "Warmer",
          
        },
        {
          code: 71483007,
          display: "Diving stage",
          
        },
        {
          code: 71545009,
          display: "Humidifier",
          
        },
        {
          code: 71601002,
          display: "Proctosigmoidoscope",
          
        },
        {
          code: 71667001,
          display: "Bone wax",
          
        },
        {
          code: 71948003,
          display: "Autoclave",
          
        },
        {
          code: 72070000,
          display: "Ring",
          
        },
        {
          code: 72188006,
          display: "Tissue expander",
          
        },
        {
          code: 72302000,
          display: "Lead cable",
          
        },
        {
          code: 72506001,
          display: "Implantable defibrillator",
          
        },
        {
          code: 72742007,
          display: "Aspirator collection bottle",
          
        },
        {
          code: 73027007,
          display: "Infant incubator",
          
        },
        {
          code: 73534004,
          display: "Artificial skin",
          
        },
        {
          code: 73562006,
          display: "Transilluminator",
          
        },
        {
          code: 73571002,
          display: "Intravenous analgesia unit",
          
        },
        {
          code: 73618007,
          display: "Power saw",
          
        },
        {
          code: 73878004,
          display: "Hand saw",
          
        },
        {
          code: 73985004,
          display: "Face protection in construction industry",
          
        },
        {
          code: 74094004,
          display: "Belt",
          
        },
        {
          code: 74108008,
          display: "Recorder",
          
        },
        {
          code: 74300007,
          display: "Sanitary pad",
          
        },
        {
          code: 74444006,
          display: "AL - Artificial limb",
          
        },
        {
          code: 74566002,
          display: "Crutch",
          
        },
        {
          code: 74884005,
          display: "Boatswain's chair",
          
        },
        {
          code: 75075000,
          display: "Shoring and bracing (masonry and woodwork)",
          
        },
        {
          code: 75187009,
          display: "Local anesthesia kit",
          
        },
        {
          code: 75192006,
          display: "Arterial cannula",
          
        },
        {
          code: 75751006,
          display: "Manual respirator",
          
        },
        {
          code: 75780002,
          display: "Artificial kidney",
          
        },
        {
          code: 75963008,
          display: "Skateboard",
          
        },
        {
          code: 76091005,
          display: "Stainless steel wire suture",
          
        },
        {
          code: 76123001,
          display: "Glass tube",
          
        },
        {
          code: 76428000,
          display: "Elbow joint prosthesis",
          
        },
        {
          code: 76433001,
          display: "Apron",
          
        },
        {
          code: 76664007,
          display: "Artificial pancreas",
          
        },
        {
          code: 76705002,
          display: "Applicator stick",
          
        },
        {
          code: 76825006,
          display: "Abrasive wheel machinery",
          
        },
        {
          code: 76937009,
          display: "Guillotine",
          
        },
        {
          code: 77444004,
          display: "Pins",
          
        },
        {
          code: 77541009,
          display: "Band",
          
        },
        {
          code: 77720000,
          display: "Clips",
          
        },
        {
          code: 77755003,
          display: "Chemical fiber cloth",
          
        },
        {
          code: 77777004,
          display: "Bone staple",
          
        },
        {
          code: 78279003,
          display: "Nail clipper",
          
        },
        {
          code: 78498003,
          display: "Testicular prosthesis",
          
        },
        {
          code: 78641001,
          display: "Nylon suture",
          
        },
        {
          code: 78886001,
          display: "Electronic monitor",
          
        },
        {
          code: 79051006,
          display: "Greenfield filter",
          
        },
        {
          code: 79068005,
          display: "Needle",
          
        },
        {
          code: 79218005,
          display: "Vehicle-mounted work platform",
          
        },
        {
          code: 79287008,
          display: "Tampon",
          
        },
        {
          code: 79401009,
          display: "Chute",
          
        },
        {
          code: 79438009,
          display: "Foot protection",
          
        },
        {
          code: 79481007,
          display: "Swing or sliding cut-off saw",
          
        },
        {
          code: 79593001,
          display: "Transvenous electrode",
          
        },
        {
          code: 79618001,
          display: "Storage tank",
          
        },
        {
          code: 79811009,
          display: "Electric blanket",
          
        },
        {
          code: 79834000,
          display: "Hickman line",
          
        },
        {
          code: 79952001,
          display: "Swan-Ganz catheter, device",
          
        },
        {
          code: 80278003,
          display: "Pediatric bed",
          
        },
        {
          code: 80404000,
          display: "Chain fall",
          
        },
        {
          code: 80617005,
          display: "Analysers",
          
        },
        {
          code: 80664005,
          display: "Motor home",
          
        },
        {
          code: 80853009,
          display: "Tendon hammer",
          
        },
        {
          code: 80950008,
          display: "Oven",
          
        },
        {
          code: 81293006,
          display: "Textile material",
          
        },
        {
          code: 81317009,
          display: "Socket wrench",
          
        },
        {
          code: 81320001,
          display: "Enzyme immunoassay analyzer",
          
        },
        {
          code: 81826000,
          display: "All-terrain vehicle",
          
        },
        {
          code: 81892008,
          display: "Radial saw",
          
        },
        {
          code: 82379000,
          display: "Hemostat",
          
        },
        {
          code: 82449006,
          display: "Peripheral intravenous catheter",
          
        },
        {
          code: 82657000,
          display: "Bony tissue forceps",
          
        },
        {
          code: 82830000,
          display: "Robotic arm",
          
        },
        {
          code: 82879008,
          display: "Safety belt",
          
        },
        {
          code: 83059008,
          display: "Tube",
          
        },
        {
          code: 83315005,
          display: "Audio analgesia unit",
          
        },
        {
          code: 83320005,
          display: "Dip tank",
          
        },
        {
          code: 83369007,
          display: "Plastic shoes",
          
        },
        {
          code: 83517001,
          display: "Robot",
          
        },
        {
          code: 83903000,
          display: "Man lift",
          
        },
        {
          code: 84023008,
          display: "Ski tow",
          
        },
        {
          code: 84330009,
          display: "Pliers",
          
        },
        {
          code: 84444002,
          display: "Chain saw",
          
        },
        {
          code: 84546002,
          display: "Barricade",
          
        },
        {
          code: 84599008,
          display: "Detonating cord",
          
        },
        {
          code: 84610002,
          display: "Implantable dental prosthesis",
          
        },
        {
          code: 84683006,
          display: "Aortic valve prosthesis",
          
        },
        {
          code: 84756000,
          display: "Adhesive tape",
          
        },
        {
          code: 85106006,
          display: "Boring machine",
          
        },
        {
          code: 85329008,
          display: "Abortion pump",
          
        },
        {
          code: 85455005,
          display: "Cart",
          
        },
        {
          code: 85684007,
          display: "Engraving press",
          
        },
        {
          code: 86056006,
          display: "Golf club",
          
        },
        {
          code: 86174004,
          display: "Laparoscope",
          
        },
        {
          code: 86184003,
          display: "Electrocardiographic monitor and recorder",
          
        },
        {
          code: 86407004,
          display: "Table",
          
        },
        {
          code: 86453006,
          display: "Defibrillator paddle",
          
        },
        {
          code: 86572008,
          display: "Arteriovenous shunt catheter",
          
        },
        {
          code: 86768006,
          display: "Balloon pump",
          
        },
        {
          code: 86816008,
          display: "Diving ladder",
          
        },
        {
          code: 86967005,
          display: "Tool",
          
        },
        {
          code: 87088005,
          display: "Soldering iron",
          
        },
        {
          code: 87140005,
          display: "Clothing material",
          
        },
        {
          code: 87405001,
          display: "Cane",
          
        },
        {
          code: 87710003,
          display: "Physical restraint structure",
          
        },
        {
          code: 87717000,
          display: "Tester",
          
        },
        {
          code: 87851008,
          display: "Blood cell counter and analyzer",
          
        },
        {
          code: 88063004,
          display: "Footwear",
          
        },
        {
          code: 88168006,
          display: "Maximum security cell",
          
        },
        {
          code: 88208003,
          display: "Intravenous anesthesia administration set",
          
        },
        {
          code: 88765001,
          display: "Artificial tissue",
          
        },
        {
          code: 88959008,
          display: "Hypodermic needle",
          
        },
        {
          code: 89149003,
          display: "Stretcher",
          
        },
        {
          code: 89236003,
          display: "Leather shoes",
          
        },
        {
          code: 89509004,
          display: "Blood culture analyzer",
          
        },
        {
          code: 90003000,
          display: "Magnetic resonance imaging unit",
          
        },
        {
          code: 90035000,
          display: "Alcohol sponge",
          
        },
        {
          code: 90082007,
          display: "Cast cutter",
          
        },
        {
          code: 90134004,
          display: "Metal periosteal implant",
          
        },
        {
          code: 90412006,
          display: "Colonoscope",
          
        },
        {
          code: 90504001,
          display: "Auricular prosthesis",
          
        },
        {
          code: 90913005,
          display: "Rubber shoes",
          
        },
        {
          code: 90948003,
          display: "Abrasive blast by cleaning nozzles",
          
        },
        {
          code: 91294003,
          display: "Thomas collar",
          
        },
        {
          code: 91318002,
          display: "Hyperbaric chamber",
          
        },
        {
          code: 91535004,
          display: "Basin",
          
        },
        {
          code: 91537007,
          display: "Hospital bed",
          
        },
        {
          code: 102303004,
          display: "Vascular prosthesis",
          
        },
        {
          code: 102304005,
          display: "Measuring ruler",
          
        },
        {
          code: 102305006,
          display: "Intramedullary reamer",
          
        },
        {
          code: 102306007,
          display: "Reamer",
          
        },
        {
          code: 102307003,
          display: "Surgical knife",
          
        },
        {
          code: 102308008,
          display: "Scalpel",
          
        },
        {
          code: 102309000,
          display: "Surgical saw",
          
        },
        {
          code: 102310005,
          display: "Gigli's wire saw",
          
        },
        {
          code: 102311009,
          display: "Starck dilator",
          
        },
        {
          code: 102312002,
          display: "Atherectomy device",
          
        },
        {
          code: 102313007,
          display: "Rotational atherectomy device",
          
        },
        {
          code: 102314001,
          display: "Embolization coil",
          
        },
        {
          code: 102315000,
          display: "Embolization ball",
          
        },
        {
          code: 102316004,
          display: "Embolization particulate",
          
        },
        {
          code: 102317008,
          display: "Guiding catheter",
          
        },
        {
          code: 102318003,
          display: "Implantable venous catheter",
          
        },
        {
          code: 102319006,
          display: "Percutaneous transluminal angioplasty balloon",
          
        },
        {
          code: 102320000,
          display: "Detachable balloon",
          
        },
        {
          code: 102321001,
          display: "Operating microscope",
          
        },
        {
          code: 102322008,
          display: "External prosthesis for sonographic procedure",
          
        },
        {
          code: 102323003,
          display: "Water bag prosthesis for imaging procedure",
          
        },
        {
          code: 102324009,
          display: "Saline bag prosthesis for imaging procedure",
          
        },
        {
          code: 102325005,
          display: "Gel prosthesis for imaging procedure",
          
        },
        {
          code: 102326006,
          display: "Dagger",
          
        },
        {
          code: 102327002,
          display: "Dirk",
          
        },
        {
          code: 102328007,
          display: "Sword",
          
        },
        {
          code: 102384007,
          display: "Motor vehicle airbag",
          
        },
        {
          code: 102385008,
          display: "Front airbag",
          
        },
        {
          code: 102386009,
          display: "Front driver airbag",
          
        },
        {
          code: 102387000,
          display: "Front passenger airbag",
          
        },
        {
          code: 102388005,
          display: "Side airbag",
          
        },
        {
          code: 102402008,
          display: "Snowboard",
          
        },
        {
          code: 102403003,
          display: "Water ski",
          
        },
        {
          code: 105784003,
          display: "Life support equipment",
          
        },
        {
          code: 105785002,
          display: "Adhesive, bandage AND/OR suture",
          
        },
        {
          code: 105787005,
          display: "Belt AND/OR binder",
          
        },
        {
          code: 105788000,
          display: "Probe, sound, bougie AND/OR airway",
          
        },
        {
          code: 105789008,
          display: "Cannula, tube AND/OR catheter",
          
        },
        {
          code: 105790004,
          display: "Bag, balloon AND/OR bottle",
          
        },
        {
          code: 105791000,
          display: "Pump, injector AND/OR aspirator",
          
        },
        {
          code: 105792007,
          display: "Analgesia AND/OR anesthesia unit",
          
        },
        {
          code: 105793002,
          display: "Monitor, alarm AND/OR stimulator",
          
        },
        {
          code: 105794008,
          display: "Scope AND/OR camera",
          
        },
        {
          code: 105809003,
          display: "Physical restraint equipment AND/OR structure",
          
        },
        {
          code: 108874005,
          display: "Silicone plug",
          
        },
        {
          code: 109184000,
          display: "Pregnancy testing kit",
          
        },
        {
          code: 109226007,
          display: "Dental pin",
          
        },
        {
          code: 109227003,
          display: "Hand joint prosthesis",
          
        },
        {
          code: 109228008,
          display: "Knee joint prosthesis",
          
        },
        {
          code: 111041008,
          display: "Artificial nails",
          
        },
        {
          code: 111042001,
          display: "Artificial organ",
          
        },
        {
          code: 111043006,
          display: "Medical tuning fork",
          
        },
        {
          code: 111044000,
          display: "Bone tap",
          
        },
        {
          code: 111045004,
          display: "Exerciser",
          
        },
        {
          code: 111047007,
          display: "Urethral bougie",
          
        },
        {
          code: 111048002,
          display: "Rhinoscope",
          
        },
        {
          code: 111052002,
          display: "Protective breast plate",
          
        },
        {
          code: 111060001,
          display: "Industrial sewing machine",
          
        },
        {
          code: 111062009,
          display: "Food waste disposal equipment",
          
        },
        {
          code: 115961006,
          display: "Soft Cast",
          
        },
        {
          code: 115962004,
          display: "Fiberglass cast",
          
        },
        {
          code: 116146000,
          display: "Blood product unit",
          
        },
        {
          code: 116204000,
          display: "Catheter tip",
          
        },
        {
          code: 116205004,
          display: "Blood bag",
          
        },
        {
          code: 116206003,
          display: "Plasma bag",
          
        },
        {
          code: 116250002,
          display: "Filter",
          
        },
        {
          code: 116251003,
          display: "Wick",
          
        },
        {
          code: 118294000,
          display: "Solid-state laser",
          
        },
        {
          code: 118295004,
          display: "Gas laser",
          
        },
        {
          code: 118296003,
          display: "Chemical laser",
          
        },
        {
          code: 118297007,
          display: "Excimer laser",
          
        },
        {
          code: 118298002,
          display: "Dye laser",
          
        },
        {
          code: 118299005,
          display: "Diode laser",
          
        },
        {
          code: 118301003,
          display: "Nd:YVO>4< laser",
          
        },
        {
          code: 118302005,
          display: "Nd:YLF laser",
          
        },
        {
          code: 118303000,
          display: "Nd:Glass laser",
          
        },
        {
          code: 118304006,
          display: "Chromium sapphire laser device",
          
        },
        {
          code: 118305007,
          display: "Er:Glass laser",
          
        },
        {
          code: 118306008,
          display: "Erbium-YAG laser",
          
        },
        {
          code: 118307004,
          display: "Ho:YLF laser",
          
        },
        {
          code: 118308009,
          display: "Holmium-YAG laser",
          
        },
        {
          code: 118309001,
          display: "Ti:sapphire laser device",
          
        },
        {
          code: 118310006,
          display: "Alexandrite laser",
          
        },
        {
          code: 118311005,
          display: "Argon laser",
          
        },
        {
          code: 118312003,
          display: "CO2 laser",
          
        },
        {
          code: 118313008,
          display: "He laser",
          
        },
        {
          code: 118314002,
          display: "Helium cadmium laser",
          
        },
        {
          code: 118315001,
          display: "HeNe laser",
          
        },
        {
          code: 118316000,
          display: "Krypton laser",
          
        },
        {
          code: 118317009,
          display: "Neon gas laser",
          
        },
        {
          code: 118318004,
          display: "Nitrogen gas laser",
          
        },
        {
          code: 118319007,
          display: "Xenon gas laser",
          
        },
        {
          code: 118320001,
          display: "Copper vapor laser",
          
        },
        {
          code: 118321002,
          display: "Gold vapor laser",
          
        },
        {
          code: 118322009,
          display: "DF laser",
          
        },
        {
          code: 118323004,
          display: "DF-CO>2< laser device",
          
        },
        {
          code: 118324005,
          display: "HF laser",
          
        },
        {
          code: 118325006,
          display: "ArF laser",
          
        },
        {
          code: 118326007,
          display: "KrF laser",
          
        },
        {
          code: 118327003,
          display: "KrCl laser",
          
        },
        {
          code: 118328008,
          display: "XeCl laser",
          
        },
        {
          code: 118329000,
          display: "XeFl laser",
          
        },
        {
          code: 118330005,
          display: "Free electron laser",
          
        },
        {
          code: 118331009,
          display: "Tunable dye laser",
          
        },
        {
          code: 118332002,
          display: "Tunable dye argon laser",
          
        },
        {
          code: 118333007,
          display: "Gallium arsenide laser",
          
        },
        {
          code: 118334001,
          display: "Gallium aluminum arsenide laser",
          
        },
        {
          code: 118335000,
          display: "Lead-salt laser",
          
        },
        {
          code: 118336004,
          display: "Rhodamine 6G dye laser",
          
        },
        {
          code: 118337008,
          display: "Coumarin C30 dye laser",
          
        },
        {
          code: 118338003,
          display: "Coumarin 102 dye laser",
          
        },
        {
          code: 118342000,
          display: "Diode pumped laser",
          
        },
        {
          code: 118343005,
          display: "Flashlamp pumped laser device",
          
        },
        {
          code: 118346002,
          display: "Pulsed dye laser",
          
        },
        {
          code: 118347006,
          display: "QS laser",
          
        },
        {
          code: 118348001,
          display: "Flashlamp pulsed dye laser",
          
        },
        {
          code: 118349009,
          display: "CW CO>2< laser",
          
        },
        {
          code: 118350009,
          display: "High energy pulsed CO>2< laser",
          
        },
        {
          code: 118351008,
          display: "Frequency doubled Nd:YAG laser",
          
        },
        {
          code: 118354000,
          display: "Continuous wave laser",
          
        },
        {
          code: 118355004,
          display: "Pulsed laser",
          
        },
        {
          code: 118356003,
          display: "Metal vapor laser",
          
        },
        {
          code: 118357007,
          display: "KTP laser",
          
        },
        {
          code: 118371004,
          display: "Ion laser",
          
        },
        {
          code: 118372006,
          display: "Plastic implant",
          
        },
        {
          code: 118373001,
          display: "Silastic implant",
          
        },
        {
          code: 118374007,
          display: "Silicone implant",
          
        },
        {
          code: 118375008,
          display: "Cardiac septum prosthesis",
          
        },
        {
          code: 118376009,
          display: "Thermocouple",
          
        },
        {
          code: 118377000,
          display: "Biopsy needle",
          
        },
        {
          code: 118378005,
          display: "Pacemaker pulse generator",
          
        },
        {
          code: 118379002,
          display: "Automatic implantable cardioverter sensing electrodes",
          
        },
        {
          code: 118380004,
          display: "Implantable defibrillator leads",
          
        },
        {
          code: 118381000,
          display: "Implantable cardioverter leads",
          
        },
        {
          code: 118382007,
          display: "Neuropacemaker device",
          
        },
        {
          code: 118383002,
          display: "External fixation device",
          
        },
        {
          code: 118384008,
          display: "Long arm splint",
          
        },
        {
          code: 118385009,
          display: "Short arm splint",
          
        },
        {
          code: 118386005,
          display: "Figure of eight plaster cast",
          
        },
        {
          code: 118387001,
          display: "Halo jacket",
          
        },
        {
          code: 118388006,
          display: "Body cast, shoulder to hips",
          
        },
        {
          code: 118389003,
          display: "Body cast, shoulder to hips including head, Minerva type",
          
        },
        {
          code: 118390007,
          display: "Body cast, shoulder to hips including one thigh",
          
        },
        {
          code: 118391006,
          display: "Body cast, shoulder to hips including both thighs",
          
        },
        {
          code: 118392004,
          display: "Shoulder cast",
          
        },
        {
          code: 118393009,
          display: "Long arm cylinder",
          
        },
        {
          code: 118394003,
          display: "Forearm cylinder",
          
        },
        {
          code: 118396001,
          display: "Cylinder cast, thigh to ankle",
          
        },
        {
          code: 118397005,
          display: "Long leg cast",
          
        },
        {
          code: 118398000,
          display: "Long leg cast, walker or ambulatory type",
          
        },
        {
          code: 118399008,
          display: "Long leg cast, brace type",
          
        },
        {
          code: 118400001,
          display: "Short leg cast below knee to toes",
          
        },
        {
          code: 118401002,
          display: "Short leg cast below knee to toes, walking or ambulatory type",
          
        },
        {
          code: 118402009,
          display: "Clubfoot cast",
          
        },
        {
          code: 118403004,
          display: "Clubfoot cast, short leg",
          
        },
        {
          code: 118404005,
          display: "Clubfoot cast, long leg",
          
        },
        {
          code: 118405006,
          display: "Spica cast",
          
        },
        {
          code: 118406007,
          display: "Hip spica cast, both legs",
          
        },
        {
          code: 118407003,
          display: "Hip spica cast, one leg",
          
        },
        {
          code: 118408008,
          display: "Hip spica cast, one and one-half spica",
          
        },
        {
          code: 118409000,
          display: "Patellar tendon bearing cast",
          
        },
        {
          code: 118410005,
          display: "Boot cast",
          
        },
        {
          code: 118411009,
          display: "Sugar tong cast",
          
        },
        {
          code: 118412002,
          display: "Gauntlet cast",
          
        },
        {
          code: 118413007,
          display: "Complete cast",
          
        },
        {
          code: 118414001,
          display: "Pressure dressing",
          
        },
        {
          code: 118415000,
          display: "Packing material",
          
        },
        {
          code: 118416004,
          display: "Wound packing material",
          
        },
        {
          code: 118418003,
          display: "Trocar",
          
        },
        {
          code: 118419006,
          display: "Umbrella device",
          
        },
        {
          code: 118420000,
          display: "Atrial septal umbrella",
          
        },
        {
          code: 118421001,
          display: "King-Mills umbrella device",
          
        },
        {
          code: 118422008,
          display: "Mobitz-Uddin umbrella device",
          
        },
        {
          code: 118423003,
          display: "Rashkind umbrella device",
          
        },
        {
          code: 118424009,
          display: "Reservoir device",
          
        },
        {
          code: 118425005,
          display: "Ventricular reservoir",
          
        },
        {
          code: 118426006,
          display: "Ommaya reservoir",
          
        },
        {
          code: 118427002,
          display: "Rickham reservoir",
          
        },
        {
          code: 118428007,
          display: "Flexible fiberoptic endoscope",
          
        },
        {
          code: 118429004,
          display: "Flexible fiberoptic laryngoscope with strobe",
          
        },
        {
          code: 118643004,
          display: "Cast",
          
        },
        {
          code: 122456005,
          display: "Laser",
          
        },
        {
          code: 123636009,
          display: "SS - Silk suture",
          
        },
        {
          code: 126064005,
          display: "Gastrostomy tube, device",
          
        },
        {
          code: 126065006,
          display: "Jejunostomy tube, device",
          
        },
        {
          code: 128981007,
          display: "Baffle",
          
        },
        {
          code: 129113006,
          display: "Intra-aortic balloon pump",
          
        },
        {
          code: 129121000,
          display: "Tracheostomy tube",
          
        },
        {
          code: 129247000,
          display: "Fine biopsy needle",
          
        },
        {
          code: 129248005,
          display: "Core biopsy needle",
          
        },
        {
          code: 129460009,
          display: "Compression paddle",
          
        },
        {
          code: 129462001,
          display: "Catheter guide wire",
          
        },
        {
          code: 129463006,
          display: "J wire",
          
        },
        {
          code: 129464000,
          display: "Medical administrative equipment",
          
        },
        {
          code: 129465004,
          display: "Medical record",
          
        },
        {
          code: 129466003,
          display: "Patient chart",
          
        },
        {
          code: 129467007,
          display: "Identification plate",
          
        },
        {
          code: 134823007,
          display: "Sterile absorbent dressing pad",
          
        },
        {
          code: 134963007,
          display: "Wound drainage pouch dressing",
          
        },
        {
          code: 170615005,
          display: "Home nebulizer",
          
        },
        {
          code: 182562006,
          display: "Plaster jacket",
          
        },
        {
          code: 182563001,
          display: "Shoulder spica",
          
        },
        {
          code: 182564007,
          display: "Humeral U-slab",
          
        },
        {
          code: 182565008,
          display: "Long arm slab",
          
        },
        {
          code: 182566009,
          display: "Humeral hanging slab",
          
        },
        {
          code: 182567000,
          display: "Forearm slab",
          
        },
        {
          code: 182568005,
          display: "Scaphoid cast",
          
        },
        {
          code: 182569002,
          display: "Bennett cast",
          
        },
        {
          code: 182570001,
          display: "Hip spica",
          
        },
        {
          code: 182571002,
          display: "Long leg spica",
          
        },
        {
          code: 182572009,
          display: "Below knee non-weight-bearing cast",
          
        },
        {
          code: 182573004,
          display: "Below knee weight-bearing cast",
          
        },
        {
          code: 182574005,
          display: "Plaster stripper",
          
        },
        {
          code: 182576007,
          display: "Humeral brace",
          
        },
        {
          code: 182577003,
          display: "Functional elbow brace",
          
        },
        {
          code: 182578008,
          display: "Forearm brace",
          
        },
        {
          code: 182579000,
          display: "Hip brace",
          
        },
        {
          code: 182580002,
          display: "Femoral brace",
          
        },
        {
          code: 182581003,
          display: "Tibial brace",
          
        },
        {
          code: 182587004,
          display: "Body support",
          
        },
        {
          code: 182588009,
          display: "Spinal frame",
          
        },
        {
          code: 182589001,
          display: "Corset support",
          
        },
        {
          code: 182590005,
          display: "Cardiac bed",
          
        },
        {
          code: 182591009,
          display: "Water bed",
          
        },
        {
          code: 182592002,
          display: "High air loss bed",
          
        },
        {
          code: 182839003,
          display: "Automated drug microinjector",
          
        },
        {
          code: 183116000,
          display: "Dental aid",
          
        },
        {
          code: 183125006,
          display: "Ear fitting hearing aid",
          
        },
        {
          code: 183135000,
          display: "Mobility aid",
          
        },
        {
          code: 183141007,
          display: "Inshoe orthosis",
          
        },
        {
          code: 183143005,
          display: "Surgical stockings",
          
        },
        {
          code: 183144004,
          display: "Antiembolic stockings",
          
        },
        {
          code: 183146002,
          display: "ZF - Zimmer frame",
          
        },
        {
          code: 183147006,
          display: "Tripod",
          
        },
        {
          code: 183148001,
          display: "RGO - Reciprocating gait orthosis",
          
        },
        {
          code: 183149009,
          display: "Hip guidance orthosis",
          
        },
        {
          code: 183150009,
          display: "Standing frame",
          
        },
        {
          code: 183152001,
          display: "Hip abduction orthosis",
          
        },
        {
          code: 183153006,
          display: "Hip-knee-ankle-foot orthosis",
          
        },
        {
          code: 183154000,
          display: "Knee-ankle-foot orthosis",
          
        },
        {
          code: 183155004,
          display: "Flexible knee support",
          
        },
        {
          code: 183156003,
          display: "Collateral ligament brace",
          
        },
        {
          code: 183157007,
          display: "Anterior cruciate ligament brace",
          
        },
        {
          code: 183158002,
          display: "Posterior cruciate ligament brace",
          
        },
        {
          code: 183159005,
          display: "Ground reaction orthosis",
          
        },
        {
          code: 183160000,
          display: "Rigid ankle-foot orthosis",
          
        },
        {
          code: 183161001,
          display: "Flexible ankle-foot orthosis",
          
        },
        {
          code: 183162008,
          display: "Double below-knee iron",
          
        },
        {
          code: 183164009,
          display: "Inside iron",
          
        },
        {
          code: 183165005,
          display: "Outside iron",
          
        },
        {
          code: 183166006,
          display: "Inside T-strap",
          
        },
        {
          code: 183170003,
          display: "Hindquarter prosthesis",
          
        },
        {
          code: 183171004,
          display: "Hip disarticulation prosthesis",
          
        },
        {
          code: 183172006,
          display: "Above knee prosthesis",
          
        },
        {
          code: 183173001,
          display: "Through knee prosthesis",
          
        },
        {
          code: 183174007,
          display: "Below knee prosthesis",
          
        },
        {
          code: 183175008,
          display: "Syme's prosthesis",
          
        },
        {
          code: 183176009,
          display: "Midfoot amputation prosthesis",
          
        },
        {
          code: 183177000,
          display: "Shoe filler",
          
        },
        {
          code: 183183002,
          display: "Milwaukee brace",
          
        },
        {
          code: 183184008,
          display: "Boston brace",
          
        },
        {
          code: 183185009,
          display: "Jewett brace",
          
        },
        {
          code: 183187001,
          display: "Halo device",
          
        },
        {
          code: 183188006,
          display: "Four poster brace",
          
        },
        {
          code: 183189003,
          display: "Rigid collar",
          
        },
        {
          code: 183190007,
          display: "Flexible collar",
          
        },
        {
          code: 183192004,
          display: "Shoulder abduction brace",
          
        },
        {
          code: 183193009,
          display: "Elbow brace",
          
        },
        {
          code: 183194003,
          display: "Passive wrist extension splint",
          
        },
        {
          code: 183195002,
          display: "Active wrist extension splint",
          
        },
        {
          code: 183196001,
          display: "Passive finger extension splint",
          
        },
        {
          code: 183197005,
          display: "Active finger extension splint",
          
        },
        {
          code: 183198000,
          display: "Kleinert traction",
          
        },
        {
          code: 183199008,
          display: "Passive thumb splint",
          
        },
        {
          code: 183200006,
          display: "Active thumb splint",
          
        },
        {
          code: 183202003,
          display: "Shin splint",
          
        },
        {
          code: 183204002,
          display: "Excretory control aid",
          
        },
        {
          code: 183235008,
          display: "Facial non-surgical prosthesis",
          
        },
        {
          code: 183236009,
          display: "Breast non-surgical prosthesis",
          
        },
        {
          code: 183240000,
          display: "Patient-propelled wheelchair",
          
        },
        {
          code: 183241001,
          display: "Pedal powered wheelchair",
          
        },
        {
          code: 183248007,
          display: "Attendant powered wheelchair",
          
        },
        {
          code: 183249004,
          display: "Wheelchair seating",
          
        },
        {
          code: 183250004,
          display: "Molded wheelchair seat",
          
        },
        {
          code: 183251000,
          display: "Matrix seat",
          
        },
        {
          code: 201706006,
          display: "Intracranial pressure transducer",
          
        },
        {
          code: 223394001,
          display: "Equipment for positioning",
          
        },
        {
          code: 224684009,
          display: "Top security prison",
          
        },
        {
          code: 224685005,
          display: "Category B prison",
          
        },
        {
          code: 224686006,
          display: "Low security prison",
          
        },
        {
          code: 224823002,
          display: "Street lighting",
          
        },
        {
          code: 224824008,
          display: "Sign posting",
          
        },
        {
          code: 224825009,
          display: "Street name sign",
          
        },
        {
          code: 224826005,
          display: "Building name sign",
          
        },
        {
          code: 224827001,
          display: "Pedestrian direction sign",
          
        },
        {
          code: 224828006,
          display: "Traffic sign",
          
        },
        {
          code: 224898003,
          display: "Orthotic device",
          
        },
        {
          code: 224899006,
          display: "Walking aid",
          
        },
        {
          code: 224900001,
          display: "Communication aid",
          
        },
        {
          code: 228167008,
          display: "Corset",
          
        },
        {
          code: 228235002,
          display: "Slippers",
          
        },
        {
          code: 228236001,
          display: "Mules",
          
        },
        {
          code: 228237005,
          display: "Slippersox",
          
        },
        {
          code: 228239008,
          display: "Trainers",
          
        },
        {
          code: 228240005,
          display: "Plimsolls",
          
        },
        {
          code: 228241009,
          display: "Sandals",
          
        },
        {
          code: 228242002,
          display: "Gum boots",
          
        },
        {
          code: 228243007,
          display: "Chappel",
          
        },
        {
          code: 228259007,
          display: "Fastening",
          
        },
        {
          code: 228260002,
          display: "Velcro",
          
        },
        {
          code: 228261003,
          display: "Buckle",
          
        },
        {
          code: 228262005,
          display: "Zipper",
          
        },
        {
          code: 228264006,
          display: "Small button",
          
        },
        {
          code: 228265007,
          display: "Medium button",
          
        },
        {
          code: 228266008,
          display: "Large button",
          
        },
        {
          code: 228267004,
          display: "Press stud",
          
        },
        {
          code: 228268009,
          display: "Hook and eye",
          
        },
        {
          code: 228270000,
          display: "Laces",
          
        },
        {
          code: 228271001,
          display: "Shoe laces",
          
        },
        {
          code: 228731007,
          display: "Radiotherapy equipment and appliances",
          
        },
        {
          code: 228732000,
          display: "Beam direction shell",
          
        },
        {
          code: 228733005,
          display: "Head and neck beam direction shell",
          
        },
        {
          code: 228734004,
          display: "Body beam direction shell",
          
        },
        {
          code: 228735003,
          display: "Beam modifier",
          
        },
        {
          code: 228736002,
          display: "Surface bolus",
          
        },
        {
          code: 228737006,
          display: "Surface compensator",
          
        },
        {
          code: 228738001,
          display: "Cutout",
          
        },
        {
          code: 228739009,
          display: "Shielding block",
          
        },
        {
          code: 228740006,
          display: "Lung block",
          
        },
        {
          code: 228741005,
          display: "Humerus block",
          
        },
        {
          code: 228742003,
          display: "Scrotal block",
          
        },
        {
          code: 228743008,
          display: "Kidney block",
          
        },
        {
          code: 228744002,
          display: "Eye block",
          
        },
        {
          code: 228745001,
          display: "Bite block",
          
        },
        {
          code: 228746000,
          display: "Wedge filter",
          
        },
        {
          code: 228747009,
          display: "Kilovoltage grid",
          
        },
        {
          code: 228748004,
          display: "Brachytherapy implant",
          
        },
        {
          code: 228749007,
          display: "Single plane implant",
          
        },
        {
          code: 228750007,
          display: "Two plane implant",
          
        },
        {
          code: 228751006,
          display: "Semicircular implant",
          
        },
        {
          code: 228752004,
          display: "Regular volume implant",
          
        },
        {
          code: 228753009,
          display: "Irregular volume implant",
          
        },
        {
          code: 228754003,
          display: "Brachytherapy surface mold",
          
        },
        {
          code: 228755002,
          display: "Two plane mold",
          
        },
        {
          code: 228756001,
          display: "Single plane mold",
          
        },
        {
          code: 228757005,
          display: "Cylinder mold",
          
        },
        {
          code: 228759008,
          display: "Adhesive felt mold",
          
        },
        {
          code: 228760003,
          display: "Elastoplast mold",
          
        },
        {
          code: 228761004,
          display: "Collimator",
          
        },
        {
          code: 228762006,
          display: "Multileaf collimator",
          
        },
        {
          code: 228763001,
          display: "Asymmetric jaws collimator",
          
        },
        {
          code: 228765008,
          display: "Standard collimator",
          
        },
        {
          code: 228766009,
          display: "Form of brachytherapy source",
          
        },
        {
          code: 228767000,
          display: "Wire source",
          
        },
        {
          code: 228768005,
          display: "Seeds source",
          
        },
        {
          code: 228770001,
          display: "Hairpins source",
          
        },
        {
          code: 228771002,
          display: "Needles source",
          
        },
        {
          code: 228772009,
          display: "Pellets source",
          
        },
        {
          code: 228773004,
          display: "Capsules source",
          
        },
        {
          code: 228774005,
          display: "Chains source",
          
        },
        {
          code: 228775006,
          display: "Tubes source",
          
        },
        {
          code: 228776007,
          display: "Rods source",
          
        },
        {
          code: 228777003,
          display: "Grains source",
          
        },
        {
          code: 228778008,
          display: "Plaque source",
          
        },
        {
          code: 228869008,
          display: "Manual wheelchair",
          
        },
        {
          code: 229772003,
          display: "Bed",
          
        },
        {
          code: 229839006,
          display: "Functional foot orthosis",
          
        },
        {
          code: 229840008,
          display: "Non-functional foot orthosis",
          
        },
        {
          code: 229841007,
          display: "Detachable pad for the foot",
          
        },
        {
          code: 229842000,
          display: "Detachable toe prop",
          
        },
        {
          code: 229843005,
          display: "Detachable horseshoe pad",
          
        },
        {
          code: 243135003,
          display: "Spacer",
          
        },
        {
          code: 243719003,
          display: "Near low vision aid - integral eyeglass magnifier",
          
        },
        {
          code: 243720009,
          display: "Near low vision aid - clip-on eyeglass magnifier",
          
        },
        {
          code: 243722001,
          display: "Near low vision aid - integral eyeglass telescope",
          
        },
        {
          code: 243723006,
          display: "Near low vision aid - clip-on eyeglass telescope",
          
        },
        {
          code: 255296002,
          display: "Wedge",
          
        },
        {
          code: 255712000,
          display: "Television",
          
        },
        {
          code: 255716002,
          display: "Latex rubber gloves",
          
        },
        {
          code: 256245006,
          display: "Textiles",
          
        },
        {
          code: 256246007,
          display: "Cotton - textile",
          
        },
        {
          code: 256247003,
          display: "Flax",
          
        },
        {
          code: 256562002,
          display: "Cotton wool",
          
        },
        {
          code: 256563007,
          display: "Cotton wool roll",
          
        },
        {
          code: 256564001,
          display: "Cotton wool pledget",
          
        },
        {
          code: 256589007,
          display: "Dental rubber dam",
          
        },
        {
          code: 256590003,
          display: "Endodontic sponge",
          
        },
        {
          code: 256593001,
          display: "Orthodontic elastic",
          
        },
        {
          code: 256641009,
          display: "Ribbon gauze",
          
        },
        {
          code: 256642002,
          display: "Wet ribbon gauze",
          
        },
        {
          code: 256643007,
          display: "Dry ribbon gauze",
          
        },
        {
          code: 257192006,
          display: "Aid to vision",
          
        },
        {
          code: 257193001,
          display: "Telescopic eyeglasses",
          
        },
        {
          code: 257194007,
          display: "Video",
          
        },
        {
          code: 257211007,
          display: "Cylinder cutter",
          
        },
        {
          code: 257212000,
          display: "Rotary cutter",
          
        },
        {
          code: 257213005,
          display: "Rotary cutter with steel blades",
          
        },
        {
          code: 257214004,
          display: "Rotary cutter with plastic blades",
          
        },
        {
          code: 257215003,
          display: "Nail instrument",
          
        },
        {
          code: 257216002,
          display: "Flexible endoscope",
          
        },
        {
          code: 257217006,
          display: "Rigid endoscope",
          
        },
        {
          code: 257218001,
          display: "Flexible cystoscope",
          
        },
        {
          code: 257219009,
          display: "Rigid cystoscope",
          
        },
        {
          code: 257220003,
          display: "Hysteroscope",
          
        },
        {
          code: 257221004,
          display: "Flexible hysteroscope",
          
        },
        {
          code: 257222006,
          display: "Rigid hysteroscope",
          
        },
        {
          code: 257223001,
          display: "Contact hysteroscope",
          
        },
        {
          code: 257224007,
          display: "Panoramic hysteroscope",
          
        },
        {
          code: 257225008,
          display: "Flexible bronchoscope",
          
        },
        {
          code: 257226009,
          display: "Rigid bronchoscope",
          
        },
        {
          code: 257227000,
          display: "Standard laryngoscope",
          
        },
        {
          code: 257228005,
          display: "Fiberlight anesthetic laryngoscope",
          
        },
        {
          code: 257229002,
          display: "Pharyngeal mirror",
          
        },
        {
          code: 257230007,
          display: "Obstetric forceps",
          
        },
        {
          code: 257231006,
          display: "Barnes forceps",
          
        }
      ];

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
