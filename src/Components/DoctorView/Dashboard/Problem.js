import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';

function Problem() {

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
          code: 160245001,
          display: "No current problems or disability",
          
        }
      ];

    const codeProps = {
        options: code,
        getOptionLabel: (option) => option.display,
    };

    const evidenceCode = [
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

    const stageSummary = [
        {
          code: 786005,
          display: "Clinical stage I B",
          
        },
        {
          code: 1523005,
          display: "Clinical stage IV B",
          
        },
        {
          code: 2640006,
          display: "Clinical stage 4",
          
        },
        {
          code: 2786004,
          display: "Epithelial ovarian tumor, International Federation of Gynecology and Obstetrics stage III",
          
        },
        {
          code: 5701003,
          display: "Lymphoma stage IIe",
          
        },
        {
          code: 5856006,
          display: "N3 stage",
          
        },
        {
          code: 6123003,
          display: "pT4 stage",
          
        },
        {
          code: 6534007,
          display: "Epithelial ovarian tumor, FIGO stage IIA",
          
        },
        {
          code: 13104003,
          display: "Clinical stage I",
          
        },
        {
          code: 14410001,
          display: "Tumor stage T3",
          
        },
        {
          code: 14926007,
          display: "pM1: Distant metastasis",
          
        },
        {
          code: 14927003,
          display: "FIGO VC stage II",
          
        },
        {
          code: 15076001,
          display: "pN2 category",
          
        },
        {
          code: 15540006,
          display: "International Federation of Gynecology and Obstetrics cervical cancer (FIGO CC) stage I",
          
        },
        {
          code: 15542003,
          display: "Clinical stage I C",
          
        },
        {
          code: 17076002,
          display: "pMX: Distant metastasis cannot be assessed",
          
        },
        {
          code: 17691001,
          display: "Clinical stage I S",
          
        },
        {
          code: 17816005,
          display: "Clinical stage II B",
          
        },
        {
          code: 19408000,
          display: "pM0: No distant metastasis",
          
        },
        {
          code: 21917009,
          display: "pN0 category",
          
        },
        {
          code: 22079002,
          display: "N4 category",
          
        },
        {
          code: 22364004,
          display: "International Federation of Gynecology and Obstetrics vulvar carcinoma (FIGO VC) stage III",
          
        },
        {
          code: 23351008,
          display: "Tumor stage T1",
          
        },
        {
          code: 25654007,
          display: "International Federation of Gynecology and Obstetrics cervical cancer (FIGO CC) stage Ib",
          
        },
        {
          code: 27167007,
          display: "Metastasis stage MX",
          
        },
        {
          code: 30382004,
          display: "International Federation of Gynecology and Obstetrics endometrial cancer (FIGO EC) stage II",
          
        },
        {
          code: 30440004,
          display: "Lymphoma stage I",
          
        },
        {
          code: 30893008,
          display: "Metastasis stage M0",
          
        },
        {
          code: 31747005,
          display: "Modified Dukes stage B1",
          
        },
        {
          code: 33177002,
          display: "Clinical stage IV C",
          
        },
        {
          code: 33907000,
          display: "Clinical stage III E",
          
        },
        {
          code: 34537009,
          display: "International Federation of Gynecology and Obstetrics endometrial cancer (FIGO EC) stage IV",
          
        },
        {
          code: 35440002,
          display: "Clinical stage I D",
          
        },
        {
          code: 36018006,
          display: "Epithelial ovarian tumor, International Federation of Gynecology and Obstetrics stage IA",
          
        },
        {
          code: 37415008,
          display: "Epithelial ovarian tumor, International Federation of Gynecology and Obstetrics stage IC",
          
        },
        {
          code: 39617003,
          display: "Clinical stage II C",
          
        },
        {
          code: 39880006,
          display: "pT0 category",
          
        },
        {
          code: 43189003,
          display: "pTX category",
          
        },
        {
          code: 44255004,
          display: "Lymphoma stage IIIe",
          
        },
        {
          code: 44401000,
          display: "Tumor stage Tis",
          
        },
        {
          code: 45552005,
          display: "pN1 category",
          
        },
        {
          code: 46059003,
          display: "Node stage N2",
          
        },
        {
          code: 46333007,
          display: "Clinical stage 1 A",
          
        },
        {
          code: 46756001,
          display: "International Federation of Gynecology and Obstetrics endometrial cancer (FIGO EC) stage I A",
          
        },
        {
          code: 48105005,
          display: "Clinical stage 3 C",
          
        },
        {
          code: 49182004,
          display: "pN3 category",
          
        },
        {
          code: 49219005,
          display: "International Federation of Gynecology and Obstetrics cervical cancer (FIGO CC) stage Ia",
          
        },
        {
          code: 50237009,
          display: "International Federation of Gynecology and Obstetrics endometrial cancer (FIGO EC) stage I",
          
        },
        {
          code: 50283003,
          display: "Clinical stage III",
          
        },
        {
          code: 52708004,
          display: "International Federation of Gynecology and Obstetrics cervical cancer (FIGO CC) stage III",
          
        },
        {
          code: 52774001,
          display: "Clinical stage 2 A",
          
        },
        {
          code: 52865009,
          display: "Clinical stage IV D",
          
        },
        {
          code: 53173007,
          display: "Modified Dukes stage B2",
          
        },
        {
          code: 53623008,
          display: "Node stage N1",
          
        },
        {
          code: 53786006,
          display: "pT1 category",
          
        },
        {
          code: 54452005,
          display: "pNX category",
          
        },
        {
          code: 54498006,
          display: "Modified Dukes stage C1",
          
        },
        {
          code: 55336000,
          display: "Clinical stage III D",
          
        },
        {
          code: 55440008,
          display: "Metastasis stage M1",
          
        },
        {
          code: 56380009,
          display: "Clinical stage I E",
          
        },
        {
          code: 56587006,
          display: "International Federation of Gynecology and Obstetrics vulvar carcinoma (FIGO VC) stage I",
          
        },
        {
          code: 56769006,
          display: "Modified Dukes stage A",
          
        },
        {
          code: 56944001,
          display: "Lymphoma stage III",
          
        },
        {
          code: 57306005,
          display: "Modified Dukes stage C2",
          
        },
        {
          code: 57605004,
          display: "Modified Dukes stage D",
          
        },
        {
          code: 58790005,
          display: "Tumor stage T0",
          
        },
        {
          code: 60275007,
          display: "FIGO EC stage I B",
          
        },
        {
          code: 60333009,
          display: "Clinical stage II",
          
        },
        {
          code: 62455006,
          display: "N0 stage",
          
        },
        {
          code: 64062008,
          display: "Clinical stage III B",
          
        },
        {
          code: 64202001,
          display: "Clinical stage IV E",
          
        },
        {
          code: 64574000,
          display: "Epithelial ovarian tumor, FIGO stage IIB",
          
        },
        {
          code: 64737002,
          display: "Epithelial ovarian tumor, FIGO stage IB",
          
        },
        {
          code: 64877001,
          display: "Clinical stage III S",
          
        },
        {
          code: 65235001,
          display: "Epithelial ovarian tumor, FIGO stage I",
          
        },
        {
          code: 65306007,
          display: "FIGO VM stage II",
          
        },
        {
          code: 65536004,
          display: "FIGO VM stage III",
          
        },
        {
          code: 65565005,
          display: "T4 stage",
          
        },
        {
          code: 66445009,
          display: "Lymphoma stage IV",
          
        },
        {
          code: 67101007,
          display: "TX stage",
          
        },
        {
          code: 67673008,
          display: "T2 stage",
          
        },
        {
          code: 68240008,
          display: "FIGO CC stage II",
          
        },
        {
          code: 69605008,
          display: "Clinical stage II E",
          
        },
        {
          code: 70046009,
          display: "FIGO VM stage I",
          
        },
        {
          code: 70664003,
          display: "Clinical stage IV S",
          
        },
        {
          code: 71725004,
          display: "Clinical stage IV A",
          
        },
        {
          code: 72780008,
          display: "FIGO VC stage IV",
          
        },
        {
          code: 73055006,
          display: "FIGO VM stage V",
          
        },
        {
          code: 73082003,
          display: "Clinical stage III A",
          
        },
        {
          code: 73511008,
          display: "Epithelial ovarian tumor, FIGO stage IV",
          
        },
        {
          code: 74053007,
          display: "Lymphoma stage IIIs",
          
        },
        {
          code: 75339006,
          display: "Lymphoma stage III 2",
          
        },
        {
          code: 76422004,
          display: "Lymphoma stage II",
          
        },
        {
          code: 78199001,
          display: "Epithelial ovarian tumor, FIGO stage IIC",
          
        },
        {
          code: 78607009,
          display: "Epithelial ovarian tumor, FIGO stage II",
          
        },
        {
          code: 79420006,
          display: "Node stage NX",
          
        },
        {
          code: 80588003,
          display: "FIGO VM stage IV",
          
        },
        {
          code: 80663004,
          display: "pN4 stage",
          
        },
        {
          code: 80898003,
          display: "pT2 stage",
          
        },
        {
          code: 80975007,
          display: "FIGO EC stage III",
          
        },
        {
          code: 81822003,
          display: "FIGO CC stage IV",
          
        },
        {
          code: 84633001,
          display: "Lymphoma stage IIIse",
          
        },
        {
          code: 84921008,
          display: "pTis stage",
          
        },
        {
          code: 87977001,
          display: "International Federation of Gynecology and Obstetrics cervical cancer stage Ib occ",
          
        },
        {
          code: 89487002,
          display: "Lymphoma stage Ie",
          
        },
        {
          code: 90321006,
          display: "Clinical stage II S",
          
        },
        {
          code: 90402004,
          display: "pT3 stage",
          
        },
        {
          code: 112240001,
          display: "Clinical stage II D",
          
        },
        {
          code: 112241002,
          display: "Lymphoma stage III 1",
          
        },
        {
          code: 258297005,
          display: "Metastasis stage M2",
          
        },
        {
          code: 258298000,
          display: "Metastasis stage M3",
          
        },
        {
          code: 258299008,
          display: "Metastasis stage M4",
          
        },
        {
          code: 261646003,
          display: "Tumor stage T1a",
          
        },
        {
          code: 261647007,
          display: "Tumor stage T1a1",
          
        },
        {
          code: 261648002,
          display: "Tumor stage T1a2",
          
        },
        {
          code: 261649005,
          display: "Tumor stage T1b",
          
        },
        {
          code: 261650005,
          display: "Tumor stage T1c",
          
        },
        {
          code: 261651009,
          display: "Tumor stage T2a",
          
        },
        {
          code: 261652002,
          display: "Tumor stage T2b",
          
        },
        {
          code: 261653007,
          display: "Tumor stage T2c",
          
        },
        {
          code: 261654001,
          display: "Tumor stage T3a",
          
        },
        {
          code: 261655000,
          display: "Tumor stage T3b",
          
        },
        {
          code: 261656004,
          display: "Tumor stage T3bi",
          
        },
        {
          code: 261657008,
          display: "Tumor stage T3bii",
          
        },
        {
          code: 261658003,
          display: "Tumor stage T3c",
          
        },
        {
          code: 261659006,
          display: "Tumor stage T4a",
          
        },
        {
          code: 261660001,
          display: "Tumor stage T4b",
          
        },
        {
          code: 261661002,
          display: "Tumor stage T4c",
          
        },
        {
          code: 261662009,
          display: "Tumor stage T4d",
          
        },
        {
          code: 261927002,
          display: "Metastasis stage M1a",
          
        },
        {
          code: 261928007,
          display: "Metastasis stage M1b",
          
        },
        {
          code: 261929004,
          display: "Metastasis stage M1c",
          
        },
        {
          code: 261967001,
          display: "Node stage N2a",
          
        },
        {
          code: 261968006,
          display: "Node stage N2b",
          
        },
        {
          code: 261969003,
          display: "Node stage N2c",
          
        },
        {
          code: 277672002,
          display: "Node stage N1a",
          
        },
        {
          code: 277674001,
          display: "Node stage N1b",
          
        },
        {
          code: 277744001,
          display: "Metastasis stage pM1",
          
        },
        {
          code: 277772008,
          display: "Node stage N1bi",
          
        },
        {
          code: 277776006,
          display: "Node stage N1bii",
          
        },
        {
          code: 277777002,
          display: "Node stage N1biii",
          
        },
        {
          code: 277778007,
          display: "Node stage N1biv",
          
        },
        {
          code: 313108002,
          display: "Tumor stage T1mic",
          
        },
        {
          code: 313110000,
          display: "Tumor stage T1b1",
          
        },
        {
          code: 313111001,
          display: "Tumor stage T1b2",
          
        },
        {
          code: 313145008,
          display: "Tumor stage Tis pu",
          
        },
        {
          code: 313146009,
          display: "Tumor stage Tis pd",
          
        },
        {
          code: 369793000,
          display: "Tis (--): Carcinoma in situ (endometrium / uterine cervix)",
          
        },
        {
          code: 369794006,
          display: "T1 (I): Cervical carcinoma confined to uterus",
          
        },
        {
          code: 369795007,
          display: "T1a (IA): Invasive carcinoma of uterine cervix diagnosed by microscopy only",
          
        },
        {
          code: 369796008,
          display: "T1a1 (IA1): Tumor of uterine cervix with stromal invasion < 3.0 mm in depth and horizontal spread < 7.0 mm",
          
        },
        {
          code: 369797004,
          display: "T1a2 (IA2): Tumor of uterine cervix with stromal invasion > 3.0 mm but < 5.0 mm in depth and horizontal spread < 7.0 mm",
          
        },
        {
          code: 369798009,
          display: "T1b (IB): Tumor of uterine cervix with clinically visible lesion confined to the cervix or microscopic lesion greater than T1a2/IA2",
          
        },
        {
          code: 369799001,
          display: "T1b1 (IB1): Tumor of uterine cervix, clinically visible lesion < 4.0 mm in greatest dimension",
          
        },
        {
          code: 369800002,
          display: "T1b2 (IB2): Tumor of uterine cervix, clinically visible lesion > 4.0 mm in greatest dimension",
          
        },
        {
          code: 369801003,
          display: "T2 (II): Tumor of uterine cervix invades beyond the uterus but not to pelvic wall or to lower third of vagina",
          
        },
        {
          code: 369802005,
          display: "T2a (IIA): Tumor of uterine cervix, T2 without parametrial invasion",
          
        },
        {
          code: 369803000,
          display: "T2b (IIB): Tumor of uterine cervix, T2 with parametrial invasion",
          
        },
        {
          code: 369804006,
          display: "T3 (III): Tumor of uterine cervix extends to the pelvic wall and/or involves the lower third of the vagina and/or causes hydronephrosis or nonfunctioning kidney",
          
        },
        {
          code: 369805007,
          display: "T3a (IIIA): Tumor of uterine cervix involves lower third of vagina, but not pelvic wall",
          
        },
        {
          code: 369806008,
          display: "T4 (IVA): Tumor of uterine cervix/vagina invades mucosa of bladder or rectum and/or extends beyond true pelvis",
          
        },
        {
          code: 369807004,
          display: "T1 (I): Endometrial tumor confined to corpus uteri",
          
        },
        {
          code: 369808009,
          display: "T1a (IA): Tumor limited to endometrium",
          
        },
        {
          code: 369809001,
          display: "T1b (IB): Endometrial tumor invades up to or less than one half of the endometrium",
          
        },
        {
          code: 369810006,
          display: "T1c (IC): Endometrial tumor invades to more than one half of the endometrium",
          
        },
        {
          code: 369811005,
          display: "T2 (II): Endometrial tumor invades cervix, but does not extend beyond uterus",
          
        },
        {
          code: 369812003,
          display: "T2a (IIA): Endometrial tumor with endocervical glandular involvement",
          
        },
        {
          code: 369813008,
          display: "T2b (IIB): Endometrial tumor with cervical stromal invasion",
          
        },
        {
          code: 369814002,
          display: "T3 (III): Endometrial tumor with local and/or regional spread as specified in T3a, b, N1 and FIGO IIIA, B, and C below or adnexa (direct extension or metastasis) and/or cancer cells in ascites or peritoneal washings",
          
        },
        {
          code: 369815001,
          display: "T3b (IIIB): Endometrial tumor with vaginal involvement (direct extension or metastasis)",
          
        },
        {
          code: 369816000,
          display: "T4 (IVA): Endometrial tumor invades bladder mucosa and/or bowel mucosa",
          
        },
        {
          code: 369817009,
          display: "T1 (I): Tumor confined to vagina",
          
        },
        {
          code: 369818004,
          display: "T2 (II): Vaginal tumor invades paravaginal tissues but not to pelvic wall",
          
        },
        {
          code: 369819007,
          display: "T3 (III): Vaginal tumor extends to pelvic wall",
          
        },
        {
          code: 369820001,
          display: "T1 (I): Tumor limited to fallopian tube(s)",
          
        },
        {
          code: 369821002,
          display: "T1a (IA): Tumor limited to one fallopian tube without penetrating the serosal surface, no ascites",
          
        },
        {
          code: 369822009,
          display: "T1b (IB): Tumor limited to both tubes without penetrating the serosal surface: no ascites",
          
        },
        {
          code: 369823004,
          display: "T1c (IC): Tumor limited to one or both tube(s) with extension into or through the tubal serosa; or with malignant cells in ascites or peritoneal washings: FALLOPIAN TUBE: Salpingectomy",
          
        },
        {
          code: 369824005,
          display: "T2 (II): Fallopian tube tumor involves one or both tube(s) with pelvic extension",
          
        },
        {
          code: 369825006,
          display: "T2a (IIA): Fallopian tube tumor with extension and/or metastasis to the uterus and/or ovaries",
          
        },
        {
          code: 369826007,
          display: "T2b (IIB): Fallopian tube/ovarian tumor with extension to other pelvic structures",
          
        },
        {
          code: 369827003,
          display: "T2c (IIC): Fallopian tube/ovarian tumor with pelvic extension (T2a or b) with malignant cells in ascites or peritoneal washings",
          
        },
        {
          code: 369828008,
          display: "T3 and/or N1 (III): Fallopian tube tumor involves one or both tube(s) with peritoneal implants outside the pelvis and/or regional lymph node metastasis",
          
        },
        {
          code: 369829000,
          display: "T3a (IIIA): Fallopian tube/ovarian tumor with microscopic peritoneal metastasis beyond pelvis",
          
        },
        {
          code: 369830005,
          display: "T3b (IIIB): Fallopian tube/ovarian tumor with macroscopic peritoneal metastasis beyond pelvis < 2 cm in greatest dimension",
          
        },
        {
          code: 369831009,
          display: "T3c (IIIC): Fallopian tube/ovarian tumor with peritoneal metastasis beyond pelvis > 2 cm in greatest dimension and/or regional lymph node metastasis",
          
        },
        {
          code: 369832002,
          display: "T1: Clinically inapparent prostate tumor not palpable or visible by imaging",
          
        },
        {
          code: 369833007,
          display: "T1a: Prostate tumor incidental histologic finding in 5% or less of tissue resected",
          
        },
        {
          code: 369834001,
          display: "T1b: Prostate tumor incidental histologic finding in > 5% of tissue resected",
          
        },
        {
          code: 369835000,
          display: "T1c: Tumor identified by needle biopsy because of elevated prostate specific antigen: PROSTATE: Biopsy/transurethral resection: PROSTATE: Resection",
          
        },
        {
          code: 369836004,
          display: "T2a: Prostate tumor involves one lobe",
          
        },
        {
          code: 369837008,
          display: "T3: Prostate tumor extends through the prostatic capsule",
          
        },
        {
          code: 369838003,
          display: "T3a: Prostate tumor with extracapsular extension (unilateral or bilateral)",
          
        },
        {
          code: 369839006,
          display: "T3b: Prostate tumor invades the seminal vesicle(s)",
          
        },
        {
          code: 369840008,
          display: "T2: Aerodigestive tract tumor causing bone erosion or destruction, except for the posterior antral wall, including extension into hard palate and/or middle nasal meatus",
          
        },
        {
          code: 369841007,
          display: "T1: Aerodigestive tract tumor < 2 cm in greatest dimension",
          
        },
        {
          code: 369842000,
          display: "T1: Aerodigestive tract tumor confined to ethmoid with or without bone erosion",
          
        },
        {
          code: 369843005,
          display: "T1: Aerodigestive tract tumor confined to nasopharynx",
          
        },
        {
          code: 369844004,
          display: "T1: Tumor limited to one subsite of hypo-pharynx and < 2 cm in greatest dimension",
          
        },
        {
          code: 369845003,
          display: "T1: Tumor limited to one subsite of supraglottis with normal vocal cord mobility",
          
        },
        {
          code: 369846002,
          display: "T1: Tumor limited to subglottis",
          
        },
        {
          code: 369847006,
          display: "T1: Tumor limited to the antral mucosa with no erosion or destruction of bone",
          
        },
        {
          code: 369848001,
          display: "T1: Tumor limited to vocal cord(s) (may involve anterior or posterior commissure) with normal mobility",
          
        },
        {
          code: 369849009,
          display: "T1a: Tumor limited to one vocal cord",
          
        },
        {
          code: 369850009,
          display: "T1b: Tumor involves both vocal cords",
          
        },
        {
          code: 369851008,
          display: "T2: Aerodigestive tract tumor > 2 cm but < 4 cm in greatest dimension",
          
        },
        {
          code: 369852001,
          display: "T2: Aerodigestive tract tumor > 2 cm but < 4 cm in greatest dimension without extraparenchymal extension",
          
        },
        {
          code: 369853006,
          display: "T2: Aerodigestive tract tumor extends into nasal cavity",
          
        },
        {
          code: 369854000,
          display: "T2: Aerodigestive tract tumor extends to soft tissue of oropharynx and/or nasal fossa",
          
        },
        {
          code: 369855004,
          display: "T2: Aerodigestive tract tumor extends to supraglottis and/or subglottis, and/or with impaired vocal cord mobility",
          
        },
        {
          code: 369856003,
          display: "T2: Aerodigestive tract tumor extends to vocal cord(s) with normal or impaired mobility",
          
        },
        {
          code: 369857007,
          display: "T2: Aerodigestive tract tumor invades more than one subsite of hypopharynx or an adjacent site, or measures > 2 cm but < 4 cm in greatest dimension, without fixation of hemilarynx",
          
        },
        {
          code: 369858002,
          display: "T2: Aerodigestive tract tumor invades mucosa of >1 adjacent subsite of supraglottis/glottis/region outside supraglottis, (mucosa of base of tongue/vallecula/medial wall of piriform sinus) without fixation of larynx",
          
        },
        {
          code: 369859005,
          display: "T2a: Aerodigestive tract tumor without parapharyngeal extension",
          
        },
        {
          code: 369860000,
          display: "T2b: Aerodigestive tract tumor with parapharyngeal extension",
          
        },
        {
          code: 369861001,
          display: "T3: Aerodigestive tract tumor > 4 cm in greatest dimension",
          
        },
        {
          code: 369862008,
          display: "T3: Aerodigestive tract tumor extends to anterior orbit and/or maxillary sinus",
          
        },
        {
          code: 369863003,
          display: "T3: Aerodigestive tract tumor having extraparenchymal extension without seventh nerve involvement, and/or > 4 cm but < 6 cm in greatest dimension",
          
        },
        {
          code: 369864009,
          display: "T3: Aerodigestive tract tumor invades any of the following: bone of posterior wall of maxillary sinus, subcutaneous tissues, skin of cheek, floor or medial wall of orbit, infratemporal fossa, pterygoid plates, ethmoid sinuses",
          
        },
        {
          code: 369865005,
          display: "T3: Aerodigestive tumor invades bony structures and/or paranasal sinuses",
          
        },
        {
          code: 369866006,
          display: "T3: Aerodigestive tract tumor limited to larynx with vocal cord fixation",
          
        },
        {
          code: 369867002,
          display: "T3: Aerodigestive tract tumor limited to larynx with vocal cord fixation and/or invades any of the following: postcricoid area, pre-epiglottic tissues, deep base of tongue",
          
        },
        {
          code: 369868007,
          display: "T3: Aerodigestive tract tumor measures > 4 cm in greatest dimension, or with fixation of hemilarynx",
          
        },
        {
          code: 369869004,
          display: "T4: Lip: Tumor invades adjacent structures (cortical bone, inferior alveolar nerve, floor of mouth, skin of face)",
          
        },
        {
          code: 369870003,
          display: "T4: Oral Cavity: Tumor invades adjacent structures (cortical bone, deep (extrinsic) muscle of tongue, maxillary sinus, skin)",
          
        },
        {
          code: 369871004,
          display: "T4: Aerodigestive tract tumor invades adjacent structures (pterygoid muscles, mandible, hard palate, deep muscle of tongue, larynx)",
          
        },
        {
          code: 369872006,
          display: "T4: Aerodigestive tract tumor invades adjacent structures (thyroid/cricoid cartilage, carotid artery, soft tissues of neck, prevertebral fascia/muscles, thyroid and/or esophagus)",
          
        },
        {
          code: 369873001,
          display: "T4: Aerodigestive tumor invades base of skull, seventh nerve, and/or exceeds 6 cm in greatest dimension",
          
        },
        {
          code: 369874007,
          display: "T4: Aerodigestive tract tumor invades orbital contents beyond the floor or medial wall including apex and/or any of the following: cribriform plate, base of skull, nasopharynx, sphenoid sinus, frontal sinus",
          
        },
        {
          code: 369875008,
          display: "T4: Tumor invades through cricoid or thyroid cartilage and/or extends into other tissues beyond the larynx (trachea, soft tissues of neck, thyroid, esophagus)",
          
        },
        {
          code: 369876009,
          display: "T4: Tumor invades through thyroid cartilage and/or extends to other tissues beyond the larynx (trachea, soft tissues of neck, pharynx)",
          
        },
        {
          code: 369877000,
          display: "T4: Tumor invades through thyroid cartilage, and/or extends into soft tissues of the neck, thyroid, and/or esophagus",
          
        },
        {
          code: 369878005,
          display: "T4: Aerodigestive tract tumor with intracranial extension and/or involvement of cranial nerves, infratemporal fossa, hypopharynx or orbit",
          
        },
        {
          code: 369879002,
          display: "T4: Aerodigestive tract tumor with intracranial extension, orbital extension including apex, involving sphenoid and/or frontal sinus and/or skin of nose",
          
        },
        {
          code: 369880004,
          display: "T1: Lung tumor 3 cm or less in greatest dimension, surrounded by lung or visceral pleura, without bronchoscopic evidence of invasion more proximal than the lobar bronchus",
          
        },
        {
          code: 369881000,
          display: "T2:Lung tumor with any of these features:>3cm in greatest dimension, involves main bronchus >2cm distal to carina; invades visceral pleura; assoc with atelectasis/obstructive pneumonitis extends to hilar region, does not involve entire lung",
          
        },
        {
          code: 369882007,
          display: "T3: Lung tumor of any size associated atelectasis or obstructive pneumonitis of the entire lung",
          
        },
        {
          code: 369883002,
          display: "T3: Lung tumor of any size in the main bronchus < 2 cm distal to the carina but without involvement of the carina",
          
        },
        {
          code: 369884008,
          display: "T3: Lung tumor of any size that directly invades any of the following: chest wall (including superior sulcus tumors); diaphragm; mediastinal pleura; parietal pericardium",
          
        },
        {
          code: 369885009,
          display: "T4: Lung tumor of any size that invades any of the following: mediastinum; heart; great vessels; trachea; esophagus; vertebral body; carina",
          
        },
        {
          code: 369886005,
          display: "T4: Lung tumor of any size with a malignant pleural effusion",
          
        },
        {
          code: 369887001,
          display: "T4: Lung tumor of any size with separate tumor nodule(s) in same lobe",
          
        },
        {
          code: 369888006,
          display: "T1: Kidney tumor < 7.0 cm in greatest dimension limited to the kidney",
          
        },
        {
          code: 369889003,
          display: "T2: Renal tumor > 7.0 cm in greatest dimension limited to the kidney",
          
        },
        {
          code: 369890007,
          display: "T3: Renal tumor extends into major veins or invades the adrenal gland or perinephric tissues but not beyond Gerota fascia",
          
        },
        {
          code: 369891006,
          display: "T3a: Renal tumor invades the adrenal gland or perinephric tissues but not beyond Gerota fascia",
          
        },
        {
          code: 369892004,
          display: "T3b: Renal tumor grossly extends into the renal vein(s) or vena cava below the diaphragm",
          
        },
        {
          code: 369893009,
          display: "T3c: Renal tumor grossly extends into the vena cava above the diaphragm",
          
        },
        {
          code: 369894003,
          display: "T4: Renal tumor invades beyond Gerota fascia",
          
        },
        {
          code: 369895002,
          display: "T1: Breast tumor <= 2 cm in greatest dimension",
          
        },
        {
          code: 369896001,
          display: "T1mic: Microinvasion <= 0.1 cm in greatest dimension: BREAST: Complete excision less than total mastectomy, total mastectomy, modified radical mastectomy, radical mastectomy",
          
        },
        {
          code: 369897005,
          display: "T1a: Breast tumor >0.1 cm but <= 0.5 cm in greatest dimension",
          
        },
        {
          code: 369898000,
          display: "T1b: Breast tumor >0.5 cm but <= 1 cm in greatest dimension",
          
        },
        {
          code: 369899008,
          display: "T1c: >1 cm but <= 2 cm in greatest dimension: BREAST: Complete excision less than total mastectomy, total mastectomy, modified radical mastectomy, radical mastectomy",
          
        },
        {
          code: 369900003,
          display: "T2: Breast tumor > 2 cm but <= 5 cm in greatest dimension",
          
        },
        {
          code: 369901004,
          display: "T3: Breast tumor >5 cm in greatest dimension",
          
        },
        {
          code: 369902006,
          display: "T4: Breast tumor of any size with direct extension to chest wall or skin",
          
        },
        {
          code: 369903001,
          display: "T4a: Breast tumor with extension to chest wall",
          
        },
        {
          code: 369904007,
          display: "T4b: Edema (including peau d'orange) or ulceration of the skin of the breast or satellite skin nodules confined to the same breast",
          
        },
        {
          code: 369905008,
          display: "T4c: Breast tumor, both T4a and T4b",
          
        },
        {
          code: 369906009,
          display: "T4d: Inflammatory carcinoma (breast)",
          
        },
        {
          code: 369907000,
          display: "Tis: Carcinoma in situ, breast: Intraductal carcinoma, lobular carcinoma in situ, or Paget disease of the nipple with no tumor",
          
        },
        {
          code: 369909002,
          display: "T1: Tumor invades lamina propria or submucosa",
          
        },
        {
          code: 369910007,
          display: "T1a: Esophagus/stomach tumor invades lamina propria",
          
        },
        {
          code: 369911006,
          display: "T1b: Esophagus/stomach tumor invades submucosa",
          
        },
        {
          code: 369912004,
          display: "T2: Tumor invades muscularis propria",
          
        },
        {
          code: 369913009,
          display: "T3: Esophageal tumor invades adventitia",
          
        },
        {
          code: 369914003,
          display: "T4: Tumor directly invades adjacent structures",
          
        },
        {
          code: 369915002,
          display: "T2: Stomach tumor invades muscularis propria or subserosa",
          
        },
        {
          code: 369916001,
          display: "T2a: Stomach tumor invades muscularis propria",
          
        },
        {
          code: 369917005,
          display: "T2b: Stomach tumor invades subserosa",
          
        },
        {
          code: 369918000,
          display: "T3: Stomach tumor penetrates serosa without invasion of adjacent structures",
          
        },
        {
          code: 369919008,
          display: "T4a: Colon/rectum tumor directly invades other organs or structures",
          
        },
        {
          code: 369920002,
          display: "T1: Tumor invades submucosa (colon/rectum)",
          
        },
        {
          code: 369921003,
          display: "T3: Colon/rectum tumor invades through the muscularis propria into the subserosa or the nonperitonealized pericolic or perirectal soft tissues",
          
        },
        {
          code: 369922005,
          display: "T4b: Colon/rectum tumor penetrates the visceral peritoneum",
          
        },
        {
          code: 369923000,
          display: "Tis (0): Carcinoma in situ (vagina)",
          
        },
        {
          code: 369924006,
          display: "Tis (0): Carcinoma in situ (limited to fallopian tube mucosa)",
          
        },
        {
          code: 369925007,
          display: "Tis: Epithelium only (carcinoma in situ, no invasion)",
          
        },
        {
          code: 369926008,
          display: "T1: Tumor limited to ampulla of Vater or sphincter of Oddi",
          
        },
        {
          code: 369927004,
          display: "T2: Ampulla tumor invades duodenal wall",
          
        },
        {
          code: 369928009,
          display: "T3: Ampulla tumor invades 2 cm or less into pancreas",
          
        },
        {
          code: 369929001,
          display: "T4: Ampulla tumor invades >2 cm into pancreas and/or into other adjacent organs",
          
        },
        {
          code: 369930006,
          display: "T1: Tumor limited to pancreas and < 2 cm in greatest dimension",
          
        },
        {
          code: 369931005,
          display: "T2: Tumor limited to pancreas and > 2 cm in greatest dimension",
          
        },
        {
          code: 369932003,
          display: "T3: Pancreatic tumor extends directly to any of the following: duodenum; bile duct; peripancreatic tissues",
          
        },
        {
          code: 369933008,
          display: "T4: Pancreas tumor extends directly to any of the following: stomach; spleen; colon; adjacent large vessels",
          
        },
        {
          code: 369934002,
          display: "Tis: Carcinoma in situ (\"flat tumor\" of urinary bladder)",
          
        },
        {
          code: 369935001,
          display: "T1: Urinary tract tumor invades subepithelial connective tissue",
          
        },
        {
          code: 369936000,
          display: "T2: Urinary bladder tumor invades muscle",
          
        },
        {
          code: 369937009,
          display: "T2: Renal pelvis/ureter tumor invades the muscularis",
          
        },
        {
          code: 369938004,
          display: "T2a: Urinary bladder tumor invades superficial muscle (inner half)",
          
        },
        {
          code: 369939007,
          display: "T2b: Urinary bladder tumor invades deep muscle (outer half)",
          
        },
        {
          code: 369940009,
          display: "T3: Ureteral tumor invades beyond muscularis into periureteric fat",
          
        },
        {
          code: 369941008,
          display: "T3: Renal pelvis tumor invades beyond muscularis peripelvic fat or the renal parenchyma",
          
        },
        {
          code: 369942001,
          display: "T3: Urinary bladder tumor invades perivesical tissue",
          
        },
        {
          code: 369943006,
          display: "T3a: Bladder tumor invades perivesical tissue microscopically",
          
        },
        {
          code: 369944000,
          display: "T3b: Bladder tumor invades perivesical tissue macroscopically (extravesicular mass)",
          
        },
        {
          code: 369945004,
          display: "T4: Urinary bladder tumor invades any of the following: prostate, uterus, vagina, pelvic wall abdominal wall",
          
        },
        {
          code: 369946003,
          display: "T4: Renal pelvis/ureter tumor invades adjacent organs, or through the kidney into the perinephric fat",
          
        },
        {
          code: 369947007,
          display: "T4a: Bladder tumor invades prostate or uterus or vagina",
          
        },
        {
          code: 369948002,
          display: "T4b: Bladder tumor invades pelvic wall or abdominal wall",
          
        },
        {
          code: 369949005,
          display: "Ta: Noninvasive papillary carcinoma (urinary tract)",
          
        },
        {
          code: 369950005,
          display: "Tis: Intratubular germ cell neoplasia (carcinoma in situ, testis)",
          
        },
        {
          code: 369951009,
          display: "T1: Testicular tumor limited to the testis and epididymis without vascular/lymphatic invasion (tumor may invade tunica albuginea but not tunica vaginalis)",
          
        },
        {
          code: 369952002,
          display: "T2: Testicular tumor limited to the testis and epididymis with vascular/lymphatic invasion or tumor extending through tunica albuginea with involvement of tunica vaginalis",
          
        },
        {
          code: 369953007,
          display: "T3: Testicular tumor invades spermatic cord with or without vascular/lymphatic invasion",
          
        },
        {
          code: 369954001,
          display: "T4: Testicular tumor invades scrotum with or without vascular/lymphatic invasion",
          
        },
        {
          code: 369955000,
          display: "T1 (I): Trophoblastic disease confined to uterus",
          
        },
        {
          code: 369956004,
          display: "T1 (IA): Trophoblastic disease confined to uterus with no risk factors",
          
        },
        {
          code: 369957008,
          display: "T1 (IB): Trophoblastic disease confined to uterus with one risk factor",
          
        },
        {
          code: 369958003,
          display: "T1 (IC): Trophoblastic disease confined to uterus with two risk factors",
          
        },
        {
          code: 369959006,
          display: "T2 (II): Trophoblast: gestational trophoblastic tumor extends outside of the uterus but is limited to the genital structures (adnexa, vagina, broad ligament)",
          
        },
        {
          code: 369960001,
          display: "T2 (IIA): Trophoblast: GTT involving genital structure without risk factors",
          
        },
        {
          code: 369961002,
          display: "T2 (IIB): Trophoblast: gestational trophoblastic tumor extends outside of the uterus but limited to genital structures with one risk factor",
          
        },
        {
          code: 369962009,
          display: "T2 (IIC): Trophoblast: gestational trophoblastic tumor extends outside of the uterus but limited to genital structures with two risk factors",
          
        },
        {
          code: 369963004,
          display: "T1: Tumor limited to ipsilateral parietal and/or visceral pleura",
          
        },
        {
          code: 369964005,
          display: "T2: Pleural tumor invades any of the following: ipsilateral lung, endothoracic fascia, diaphragm, or pericardium",
          
        },
        {
          code: 369965006,
          display: "T3: Pleural tumor invades any of the following: ipsilateral chest wall muscle, ribs, or media-stinal organs or tissues",
          
        },
        {
          code: 369966007,
          display: "T4: Pleural tumor directly extends to any of the following: contralateral pleura, contralateral lung, peritoneum, intra-abdominal organs, cervical tissues",
          
        },
        {
          code: 369967003,
          display: "T1: Tumor size < 1 cm, limited to thyroid",
          
        },
        {
          code: 369968008,
          display: "T2: Tumor > 1 cm but < 4 cm, limited to thyroid",
          
        },
        {
          code: 369969000,
          display: "T3: Thyroid tumor > 4 cm, limited to thyroid",
          
        },
        {
          code: 369970004,
          display: "T4: Thyroid tumor of any size extending beyond the thyroid capsule",
          
        },
        {
          code: 369971000,
          display: "T1a (IA): Tumor limited to one ovary, capsule intact, no tumor on ovarian surface",
          
        },
        {
          code: 369972007,
          display: "T1b (IB): Tumor limited to both ovaries: capsule intact, no tumor on ovarian surface",
          
        },
        {
          code: 369973002,
          display: "T1c (IC): Tumor limited to one or both ovaries with any of the following: capsule ruptured, tumor on ovarian surface, malignant cells in ascites or peritoneal washings: OVARY: Resection",
          
        },
        {
          code: 369974008,
          display: "T2: Ovarian tumor involves one or both ovaries with pelvic extension",
          
        },
        {
          code: 369975009,
          display: "T2a (IIA): Ovarian tumor with extension and/or implants on uterus and/or tube(s)",
          
        },
        {
          code: 369976005,
          display: "T3 and/or N1 (III): Ovarian tumor involves one or both ovaries with microscopically confirmed peritoneal metastasis outside the pelvis and/or regional lymph node metastasis",
          
        },
        {
          code: 369977001,
          display: "T3b (IIIB): Tumor of uterine cervix extends to pelvic wall and/or causes hydronephrosis or nonfunctioning kidney",
          
        },
        {
          code: 369978006,
          display: "T2: Tumor confined within the prostate",
          
        },
        {
          code: 369979003,
          display: "T1: Aerodigestive tract tumor < 2 cm in greatest dimension without extraparenchymal extension",
          
        },
        {
          code: 369980000,
          display: "Tis: Tumor invades lamina propria (gastrointestinal tumor)",
          
        },
        {
          code: 369981001,
          display: "Tis: Tumor invades muscularis mucosae (colon/rectum)",
          
        },
        {
          code: 369982008,
          display: "T1: Solitary liver tumor < 2 cm; no vascular invasion",
          
        },
        {
          code: 369983003,
          display: "N1: Metastasis to movable ipsilateral axillary lymph node(s)",
          
        },
        {
          code: 369984009,
          display: "N1a: Only micrometastasis, none > 0.2 cm in greatest dimension",
          
        },
        {
          code: 369985005,
          display: "N1b: Metastasis to lymph node(s), any > 0.2 cm in greatest dimension",
          
        },
        {
          code: 369986006,
          display: "N1bi: Metastasis in 1 to 3 lymph nodes, any > 0.2 cm and all < 2 cm in greatest dimension",
          
        },
        {
          code: 369987002,
          display: "N1bii: Metastasis in 4 or more lymph nodes, any > 0.2 cm and all < 2 cm in greatest dimension",
          
        },
        {
          code: 369988007,
          display: "N1biii: Extension of tumor beyond the capsule of a lymph node metastasis, < 2 cm in greatest dimension",
          
        },
        {
          code: 369989004,
          display: "N1biv: Metastasis to a lymph node > 2 cm in greatest dimension",
          
        },
        {
          code: 369990008,
          display: "Clinical axillary lymph node metastases - matted",
          
        },
        {
          code: 369991007,
          display: "N3: Metastasis to ipsilateral internal mammary lymph node(s)",
          
        },
        {
          code: 369992000,
          display: "N1: Metastasis in 1-3 lymph nodes",
          
        },
        {
          code: 369993005,
          display: "N2: Metastasis in 4 or more lymph nodes",
          
        },
        {
          code: 369994004,
          display: "N1a: 1-3 nodes involved",
          
        },
        {
          code: 369995003,
          display: "N1b: 4-7 nodes involved",
          
        },
        {
          code: 369996002,
          display: "N1c: >7 nodes involved",
          
        },
        {
          code: 369997006,
          display: "N1: Metastasis in 1-6 perigastric lymph nodes",
          
        },
        {
          code: 369998001,
          display: "N2: Metastasis in 7-15 perigastric lymph nodes",
          
        },
        {
          code: 369999009,
          display: "N3: Metastasis in >15 perigastric lymph nodes",
          
        },
        {
          code: 370000006,
          display: "N1: Metastasis in a single lymph node, < 2 cm in greatest dimension",
          
        },
        {
          code: 370001005,
          display: "N1: Metastasis in a single lymph node, <= 2 cm in greatest dimension",
          
        },
        {
          code: 370002003,
          display: "N2: Metastasis in a single lymph node, > 2 cm but <= 5 cm in greatest dimension, or multiple lymph nodes, none > 5 cm in greatest dimension",
          
        },
        {
          code: 370003008,
          display: "N3: Metastasis in a lymph node > 5 cm in greatest dimension",
          
        },
        {
          code: 370004002,
          display: "N1: Metastasis in a single ipsilateral lymph node, < 3 cm in greatest dimension",
          
        },
        {
          code: 370005001,
          display: "N1: Unilateral metastasis in lymph node(s) > 6 cm in greatest dimension, above supraclavicular fossa",
          
        },
        {
          code: 370006000,
          display: "N2: Metastasis in a single ipsilat lymph node >3cm but <6cm in greatest dimension; or in multiple ipsilat lymph nodes, none >6cm in greatest dimension; or in bilat or contralat lymph nodes, none >6cm in greatest dimension",
          
        },
        {
          code: 370007009,
          display: "N2: Bilateral metastasis in lymph node(s) > 6 cm in greatest dimension, above supraclavicular fossa",
          
        },
        {
          code: 370008004,
          display: "N2a: Metastasis in a single ipsilateral lymph node, > 3 cm but < 6 cm in greatest dimension",
          
        },
        {
          code: 370009007,
          display: "N2b: Metastasis in multiple ipsilateral lymph nodes, none > 6 cm in greatest dimension",
          
        },
        {
          code: 370010002,
          display: "N2c: Metastasis in bilateral or contralateral lymph nodes, none > 6 cm in greatest dimension",
          
        },
        {
          code: 370011003,
          display: "N3: Metastasis in lymph node(s)",
          
        },
        {
          code: 370012005,
          display: "N3a: > 6 cm in dimension",
          
        },
        {
          code: 370013000,
          display: "N3b: extension to supraclavicular fossa",
          
        },
        {
          code: 370014006,
          display: "N3: Metastasis in a lymph node > 6 cm in greatest dimension",
          
        },
        {
          code: 370015007,
          display: "N1: Metastasis in ipsilateral peribronchial and/or ipsilateral hilar lymph nodes, including intrapulmonary nodes involved by direct extension of the primary tumor",
          
        },
        {
          code: 370016008,
          display: "N2: Metastasis in ipsilateral mediastinal and/or subcarinal lymph node(s)",
          
        },
        {
          code: 370017004,
          display: "N3: Metastasis in contralateral mediastinal, contralateral hilar, ipsilateral or contralateral scalene or supraclavicular lymph node(s)",
          
        },
        {
          code: 370018009,
          display: "N1: Metastasis in a single lymph node",
          
        },
        {
          code: 370019001,
          display: "N2: Metastasis in more than one regional lymph node",
          
        },
        {
          code: 370020007,
          display: "N1: Metastasis with a lymph node mass less than 2 cm in greatest dimension and 5 or fewer positive nodes, none larger than 2 cm in greatest dimension",
          
        },
        {
          code: 370021006,
          display: "N2: Metastasis with a lymph node mass >2 cm but <= 5 cm in greatest dimension, or more than 5 nodes positive, none > 5 cm; or evidence of extranodal extension of tumor",
          
        },
        {
          code: 370022004,
          display: "N3: Metastasis with a lymph node mass > 5 cm in greatest dimension",
          
        },
        {
          code: 370023009,
          display: "N1: Metastasis in regional lymph node or nodes",
          
        },
        {
          code: 370024003,
          display: "N1: Pelvic or inguinal lymph node metastasis",
          
        },
        {
          code: 370025002,
          display: "N1a: Metastasis in ipsilateral cervical lymph node(s)",
          
        },
        {
          code: 370026001,
          display: "N1b: Metastasis in bilateral, midline, or contralateral cervical or mediastinal lymph node(s)",
          
        },
        {
          code: 370027005,
          display: "N1a: Metastasis in single regional lymph node",
          
        },
        {
          code: 370028000,
          display: "N1b: Metastasis in multiple regional lymph nodes",
          
        },
        {
          code: 370029008,
          display: "M1 (IV): Distant metastasis",
          
        },
        {
          code: 370030003,
          display: "M1 (IVB): Distant metastasis",
          
        },
        {
          code: 370031004,
          display: "M1: Distant metastasis [includes metastasis to ipsilateral supraclavicular lymph nodes]",
          
        },
        {
          code: 370032006,
          display: "M1: Distant metastasis, includes separate tumor nodule(s) in a different lobe (ipsilateral or contralateral)",
          
        },
        {
          code: 370033001,
          display: "M1a: Non-regional lymph node or pulmonary metastasis",
          
        },
        {
          code: 370034007,
          display: "M1a: non-regional lymph node metastasis",
          
        },
        {
          code: 370035008,
          display: "M1a (III): gestational trophoblastic tumor extends to the lungs with or without genital tract involvement",
          
        },
        {
          code: 370036009,
          display: "M1a (IIIA): gestational trophoblastic tumor extends to the lungs with or without genital tract involvement without risk factors",
          
        },
        {
          code: 370037000,
          display: "M1a (IIIB): gestational trophoblastic tumor extends to the lungs with or without genital tract involvement with one risk factor",
          
        },
        {
          code: 370038005,
          display: "M1a (IIIC): gestational trophoblastic tumor extends to the lungs with or without genital tract involvement with two risk factors",
          
        },
        {
          code: 370039002,
          display: "M1b (IV): All other metastatic sites",
          
        },
        {
          code: 370040000,
          display: "M1b (IVA): All other metastatic sites without risk factors",
          
        },
        {
          code: 370041001,
          display: "M1b (IVB): All other metastatic sites with one risk factor",
          
        },
        {
          code: 370042008,
          display: "M1b (IVC): All other metastatic sites with two risk factors",
          
        },
        {
          code: 370043003,
          display: "M1b: Bone(s)",
          
        },
        {
          code: 370044009,
          display: "M1b: Distant metastasis other than to non-regional lymph nodes and lungs",
          
        },
        {
          code: 370045005,
          display: "M1c: Other site(s)",
          
        },
        {
          code: 370046006,
          display: "T3a,b: Colon/rectum tumor invades <=5 mm beyond the border of the muscularis propria",
          
        },
        {
          code: 370047002,
          display: "T3c,d: Colon/rectum tumor invades >5 mm beyond the border of the muscularis propria",
          
        },
        {
          code: 370072002,
          display: "Direct invasion of adrenal (T3a)",
          
        },
        {
          code: 370123006,
          display: "N1: Regional lymph node metastasis",
          
        },
        {
          code: 372436009,
          display: "N1: Metastasis in perirectal lymph node or nodes",
          
        },
        {
          code: 372437000,
          display: "N2: Metastasis to unilateral internal iliac and/or inguinal lymph node(s)",
          
        },
        {
          code: 373150000,
          display: "pNX: Regional lymph nodes cannot be assessed (e.g., previously removed, or not removed for pathologic study) (breast)",
          
        },
        {
          code: 373151001,
          display: "pN0: No regional lymph node metastasis histologically (i.e., none greater than 0.2 mm), no additional examination for isolated tumor cells (breast)",
          
        },
        {
          code: 373156006,
          display: "pN1: Metastasis in 1 to 3 axillary lymph nodes, and/or in internal mammary nodes with microscopic disease detected by sentinel lymph node dissection but not clinically apparent (breast)",
          
        },
        {
          code: 373157002,
          display: "pN1mi: Micrometastasis (greater than 0.2 mm, none greater than 2.0 mm) (breast)",
          
        },
        {
          code: 373158007,
          display: "pN1mi(i+): Micrometastasis detected only by IHC (breast)",
          
        },
        {
          code: 373159004,
          display: "pN1a: Metastasis in 1 to 3 axillary lymph nodes (breast)",
          
        },
        {
          code: 373160009,
          display: "pN1b: Metastasis in internal mammary lymph nodes with microscopic disease detected by sentinel lymph node dissection but not clinically apparent (breast)",
          
        },
        {
          code: 373161008,
          display: "pN1c: Metastasis in 1 to 3 axillary lymph nodes and in internal mammary lymph nodes with microscopic disease detected by sentinel lymph node dissection but not clinically apparent (breast)",
          
        },
        {
          code: 373162001,
          display: "pN2: Metastasis in 4 to 9 axillary lymph nodes, or in clinically apparent internal mammary lymph nodes in the absence of axillary lymph node metastasis (breast)",
          
        },
        {
          code: 373163006,
          display: "pN2a: Metastasis in 4 to 9 axillary lymph nodes (at least one tumor deposit greater than 2.0 mm) (breast)",
          
        },
        {
          code: 373164000,
          display: "pN2b: Metastasis in clinically apparent internal mammary lymph nodes in the absence of axillary lymph node metastasis (breast)",
          
        },
        {
          code: 373165004,
          display: "pN3a: Metastasis in 10 or more axillary lymph nodes (at least one tumor deposit greater than 2.0 mm), or metastasis to infraclavicular lymph nodes (breast)",
          
        },
        {
          code: 373166003,
          display: "pN3c: Metastasis in ipsilateral supraclavicular lymph nodes (breast)",
          
        },
        {
          code: 373167007,
          display: "pN3b: Tumor of breast with metastasis as per AJCC 6th Edition definition (breast)",
          
        },
        {
          code: 373169005,
          display: "pM0: No distant metastasis from breast tumor",
          
        },
        {
          code: 373170006,
          display: "pMX: Distant metastasis cannot be assessed (breast)",
          
        },
        {
          code: 373171005,
          display: "pM1: Distant metastasis (breast)",
          
        },
        {
          code: 373172003,
          display: "pT1: Tumor 2 cm or less in greatest dimension (breast)",
          
        },
        {
          code: 373173008,
          display: "pTX: Primary tumor cannot be assessed (breast)",
          
        },
        {
          code: 373174002,
          display: "pT0: No evidence of primary tumor (breast)",
          
        },
        {
          code: 373175001,
          display: "pTis: Carcinoma in situ (breast)",
          
        },
        {
          code: 373176000,
          display: "pTis: Ductal carcinoma in situ (breast)",
          
        },
        {
          code: 373177009,
          display: "pTis: Lobular carcinoma in situ (breast)",
          
        },
        {
          code: 373178004,
          display: "pTis: Paget's disease of the nipple with no tumor",
          
        },
        {
          code: 373179007,
          display: "pT1mic: Microinvasion <= 0.1 cm in greatest dimension (breast)",
          
        },
        {
          code: 373180005,
          display: "pT1a: Tumor >0.1 cm but <= 0.5 cm in greatest dimension (breast)",
          
        },
        {
          code: 373182002,
          display: "pT2: Tumor > 2 cm but <= 5 cm in greatest dimension (breast)",
          
        },
        {
          code: 373183007,
          display: "pT1c: Tumor more than 1 cm but not more than 2 cm in greatest dimension (breast)",
          
        },
        {
          code: 373184001,
          display: "pT3: Tumor >5 cm in greatest dimension (breast)",
          
        },
        {
          code: 373185000,
          display: "pT4: Tumor of any size with direct extension to chest wall or skin (breast)",
          
        },
        {
          code: 373186004,
          display: "pT4a: Tumor of any size with extension to chest wall, not including pectoralis muscle (breast)",
          
        },
        {
          code: 373187008,
          display: "pT4b: Tumor of any size with edema (including peau d'orange) or ulceration of the skin of the breast or satellite skin nodules confined to the same breast",
          
        },
        {
          code: 373189006,
          display: "pT4c: Tumor of any size with direct extension to chest wall (not including pectoralis muscle) and edema (including peau d'orange) or ulceration of the skin of the breast or satellite skin nodules confined to the same breast",
          
        },
        {
          code: 373190002,
          display: "pT4d: Inflammatory carcinoma (breast)",
          
        },
        {
          code: 373199001,
          display: "pTis: Tumor invades muscularis mucosae (colon/rectum)",
          
        },
        {
          code: 373200003,
          display: "pT1: Tumor invades submucosa (colon/rectum)",
          
        },
        {
          code: 373201004,
          display: "pTis: Tumor invades lamina propria (colon/rectum)",
          
        },
        {
          code: 373204007,
          display: "pT1b: Tumor >0.5 cm but <= 1 cm in greatest dimension (breast)",
          
        },
        {
          code: 384612007,
          display: "pT4a: Tumor directly invades other organs or structures (colon/rectum)",
          
        },
        {
          code: 384613002,
          display: "pT4b: Tumor penetrates visceral peritoneum (colon/rectum)",
          
        },
        {
          code: 384748000,
          display: "pM1: Distant metastasis, includes separate tumor nodule(s) in a different lobe (ipsilateral or contralateral) (lung)",
          
        },
        {
          code: 384749008,
          display: "pN1: Metastasis in ipsilateral peribronchial and/or ipsilateral hilar lymph nodes, including intrapulmonary nodes involved by direct extension of the primary tumor (lung)",
          
        },
        {
          code: 384750008,
          display: "pN2: Metastasis to ipsilateral mediastinal and/or subcarinal lymph nodes(s) (lung)",
          
        },
        {
          code: 384751007,
          display: "pN3: Metastasis to contralateral mediastinal, contralateral hilar, ipsilateral or contralateral scalene, or supraclavicular lymph nodes(s) (lung)",
          
        },
        {
          code: 384753005,
          display: "pT1: Tumor 3 cm or less in greatest dimension, surrounded by lung or visceral pleura, without bronchoscopic evidence of invasion more proximal than the lobar bronchus (i.e., not in the main bronchus) (lung)",
          
        },
        {
          code: 384754004,
          display: "pT2: Tumor of lung as per AJCC 6th Edition definition (lung)",
          
        },
        {
          code: 384755003,
          display: "pT3:Tumor directly invades any of following:chest wall,diaphragm,mediastinal pleura,parietal pericardium;or tumor in main bronchus<2 cm distal to carina(not involving it);or assoc atelectasis or obstructive pneumonitis of whole lung",
          
        },
        {
          code: 384756002,
          display: "pT4: Tumor of lung as per AJCC 6th Edition definition (lung)",
          
        },
        {
          code: 384757006,
          display: "pTX: Primary tumor cannot be assessed, or tumor proven by the presence of malignant cells in sputum or bronchial washings but not visualized by imaging or bronchoscopy (lung)",
          
        },
        {
          code: 384983005,
          display: "pT2: Organ confined (prostate)",
          
        },
        {
          code: 384984004,
          display: "pT2a: Unilateral, one-half of one lobe or less (prostate)",
          
        },
        {
          code: 384985003,
          display: "pT2b: Unilateral, involving more than one-half of lobe but not both lobes (prostate)",
          
        },
        {
          code: 384986002,
          display: "pT2c: Bilateral disease (prostate)",
          
        },
        {
          code: 384987006,
          display: "pT3: Extraprostatic extension (prostate)",
          
        },
        {
          code: 384988001,
          display: "pT3a: Extraprostatic extension (prostate)",
          
        },
        {
          code: 384989009,
          display: "pT3b: Seminal vesicle invasion (prostate)",
          
        },
        {
          code: 384990000,
          display: "pT4: Invasion of bladder AND/OR rectum (prostate)",
          
        },
        {
          code: 385301007,
          display: "pT1: Tumor 2 cm or less in greatest dimension (anal canal)",
          
        },
        {
          code: 385302000,
          display: "pT2: Tumor more than 2 cm but not more than 5 cm in greatest dimension (anal canal)",
          
        },
        {
          code: 385303005,
          display: "pT3: Tumor more than 5 cm in greatest dimension (anal canal)",
          
        },
        {
          code: 385304004,
          display: "pT4: Tumor of any size invades adjacent organ(s), e.g., vagina, urethra, bladder (anal canal)",
          
        },
        {
          code: 385306002,
          display: "pN1: Metastasis in perirectal lymph node(s) (anal canal)",
          
        },
        {
          code: 385307006,
          display: "pN2: Metastasis in unilateral internal iliac AND/OR inguinal lymph node(s) (anal canal)",
          
        },
        {
          code: 385308001,
          display: "pN3: Metastasis in perirectal and inguinal lymph nodes AND/OR bilateral internal iliac AND/OR inguinal lymph nodes (anal canal)",
          
        },
        {
          code: 385316005,
          display: "pT1: Tumor invades lamina propria or submucosa (stomach)",
          
        },
        {
          code: 385317001,
          display: "pT1a: Tumor invades lamina propria (stomach)",
          
        },
        {
          code: 385318006,
          display: "pT1b: Tumor invades submucosa (stomach)",
          
        },
        {
          code: 385319003,
          display: "pT2: Tumor invades muscularis propria or subserosa (stomach)",
          
        },
        {
          code: 385320009,
          display: "pT2a: Tumor invades muscularis propria (stomach)",
          
        },
        {
          code: 385321008,
          display: "pT2b: Tumor invades subserosa (stomach)",
          
        },
        {
          code: 385322001,
          display: "pT3: Tumor penetrates serosa (visceral peritoneum) without invasion of adjacent structures (stomach)",
          
        },
        {
          code: 385323006,
          display: "pT4: Tumor invades adjacent structures (stomach)",
          
        },
        {
          code: 385324000,
          display: "pN1: Metastasis in 1 to 6 regional (perigastric) lymph nodes (stomach)",
          
        },
        {
          code: 385325004,
          display: "pN2: Metastasis in 7 to 15 regional (perigastric) lymph nodes (stomach)",
          
        },
        {
          code: 385326003,
          display: "pN3: Metastasis in more than 15 regional (perigastric) lymph nodes (stomach)",
          
        },
        {
          code: 385358008,
          display: "Dukes stage finding",
          
        },
        {
          code: 385360005,
          display: "Modified Dukes stage finding",
          
        },
        {
          code: 385362002,
          display: "FIGO stage finding for gynecological malignancy",
          
        },
        {
          code: 385364001,
          display: "FIGO ovarian tumor stage finding",
          
        },
        {
          code: 385366004,
          display: "FIGO stage finding for epithelial tumor of ovary",
          
        },
        {
          code: 385368003,
          display: "FIGO stage finding for cervical carcinoma",
          
        },
        {
          code: 385370007,
          display: "FIGO stage finding for vulvar carcinoma",
          
        },
        {
          code: 385372004,
          display: "FIGO stage finding for vulvar melanoma",
          
        },
        {
          code: 385374003,
          display: "FIGO uterine tumor stage finding",
          
        },
        {
          code: 385376001,
          display: "FIGO stage finding for endometrial carcinoma",
          
        },
        {
          code: 385378000,
          display: "pM category finding",
          
        },
        {
          code: 385379008,
          display: "TNM tumor staging finding",
          
        },
        {
          code: 385380006,
          display: "Metastasis stage finding",
          
        },
        {
          code: 385381005,
          display: "pN category finding",
          
        },
        {
          code: 385382003,
          display: "Node stage finding",
          
        },
        {
          code: 385385001,
          display: "pT category finding",
          
        },
        {
          code: 385389007,
          display: "Lymphoma stage finding",
          
        },
        {
          code: 385392006,
          display: "Colon/rectum TNM finding",
          
        },
        {
          code: 385415005,
          display: "Anal canal TNM finding",
          
        },
        {
          code: 385416006,
          display: "Prostate TNM finding",
          
        },
        {
          code: 385417002,
          display: "Breast TNM finding",
          
        },
        {
          code: 385418007,
          display: "Lung TNM finding",
          
        },
        {
          code: 394939004,
          display: "Dukes stage A",
          
        },
        {
          code: 394940002,
          display: "Dukes stage B",
          
        },
        {
          code: 394941003,
          display: "Dukes stage C1",
          
        },
        {
          code: 394942005,
          display: "Dukes stage C2",
          
        },
        {
          code: 394943000,
          display: "Dukes stage D",
          
        },
        {
          code: 395705003,
          display: "pTis: Carcinoma in situ, intraepithelial (colon/rectum)",
          
        },
        {
          code: 395706002,
          display: "pT2: Tumor invades muscularis propria (colon/rectum)",
          
        },
        {
          code: 395707006,
          display: "pT3: Tumor invades through the muscularis propria into the subserosa or into non-peritonealized pericolic or perirectal tissues (colon/rectum)",
          
        },
        {
          code: 395708001,
          display: "pT3a,b: Tumor invades through the muscularis propria into the subserosa or into non-peritonealized pericolic or perirectal tissues, invades 5 mm or less beyond the border of the muscularis propria (colon/rectum)",
          
        },
        {
          code: 395709009,
          display: "pT3c,d: Tumor invades through the muscularis propria into the subserosa or into non-peritonealized pericolic or perirectal tissues, invades greater than 5 mm beyond the border of the muscularis propria (colon/rectum)",
          
        },
        {
          code: 395710004,
          display: "pT4: Tumor directly invades other organs or structures and/or perforates visceral peritoneum (colon/rectum)",
          
        },
        {
          code: 395711000,
          display: "pN1: Metastasis in 1 to 3 regional lymph nodes (colon/rectum)",
          
        },
        {
          code: 395712007,
          display: "pN2: Metastasis in 4 or more regional lymph nodes (colon/rectum)",
          
        },
        {
          code: 396082002,
          display: "pT1: Tumor 7 cm or less in greatest dimension, limited to the kidney (kidney)",
          
        },
        {
          code: 396083007,
          display: "Kidney TNM finding",
          
        },
        {
          code: 396084001,
          display: "pT1a: Tumor 4 cm or less in greatest dimension, limited to the kidney (kidney)",
          
        },
        {
          code: 396085000,
          display: "pT1b: Tumor more than 4 cm but not more than 7 cm in greatest dimension, limited to the kidney (kidney)",
          
        },
        {
          code: 396086004,
          display: "pT2: Tumor more than 7 cm in greatest dimension, limited to the kidney (kidney)",
          
        },
        {
          code: 396087008,
          display: "pT3: Tumor extends into major veins or invades adrenal gland or perirenal and/or renal sinus fat but not beyond Gerota's fascia (kidney)",
          
        },
        {
          code: 396088003,
          display: "pT3a: Tumor directly invades adrenal gland or perirenal and/or renal sinus fat but not beyond Gerota's fascia (kidney)",
          
        },
        {
          code: 396089006,
          display: "pT3b: Tumor grossly extends into the renal vein or its segmental (muscle-containing) branches, or vena cava below the diaphragm (kidney)",
          
        },
        {
          code: 396090002,
          display: "pT3c: Tumor grossly extends into vena cava above diaphragm or invades the wall of the vena cava (kidney)",
          
        },
        {
          code: 396091003,
          display: "pT4: Tumor invades beyond Gerota's fascia (kidney)",
          
        },
        {
          code: 396092005,
          display: "pN1: Metastasis in a single regional lymph node (kidney)",
          
        },
        {
          code: 396093000,
          display: "pN2: Metastasis in more than one regional lymph node (kidney)",
          
        },
        {
          code: 396094006,
          display: "Ampulla of Vater TNM finding",
          
        },
        {
          code: 396095007,
          display: "pT1: Tumor limited to ampulla of Vater or sphincter of Oddi (ampulla of Vater)",
          
        },
        {
          code: 396096008,
          display: "pT2: Tumor invades duodenal wall (ampulla of Vater)",
          
        },
        {
          code: 396097004,
          display: "pT3: Tumor invades pancreas (ampulla of Vater)",
          
        },
        {
          code: 396098009,
          display: "pT4: Tumor invades peripancreatic soft tissues or other adjacent organs or structures (ampulla of Vater)",
          
        },
        {
          code: 396099001,
          display: "Liver TNM finding",
          
        },
        {
          code: 396100009,
          display: "pT1: Solitary tumor without vascular invasion (liver, including intrahepatic bile ducts)",
          
        },
        {
          code: 396101008,
          display: "pT2: Solitary tumor with vascular invasion or multiple tumors none more than 5 cm (liver, including intrahepatic bile ducts)",
          
        },
        {
          code: 396102001,
          display: "pT3: Multiple tumors more than 5 cm or tumor involving a major branch of the portal or hepatic vein(s) (liver, including intrahepatic bile ducts)",
          
        },
        {
          code: 396103006,
          display: "pT4: Tumor(s) with direct invasion of adjacent organs other than the gallbladder or with perforation of visceral peritoneum (liver, including intrahepatic bile ducts)",
          
        },
        {
          code: 396282005,
          display: "Uterine cervix TNM finding",
          
        },
        {
          code: 396283000,
          display: "pT1 (I): Cervical carcinoma confined to uterus (extension to corpus should be disregarded) (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396287004,
          display: "pT1a (IA): Invasive carcinoma diagnosed only by microscopy. All macroscopically visible lesions (even with superficial invasion) are pT1b/IB (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396288009,
          display: "pT1a1 (IA1): Measured stromal invasion 3.0 mm or less in depth and 7.0 mm or less in horizontal spread (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396289001,
          display: "pT1a2 (IA2): Measured stromal invasion more than 3.0 mm and not more than 5.0 mm in depth and 7.0 mm or less horizontal spread (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396290005,
          display: "pT1b (IB): Clinically visible lesion confined to the cervix or microscopic lesion greater than T1a2/IA2 (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396291009,
          display: "pT1b1 (IB1): Clinically visible lesion 4.0 cm or less in greatest dimension (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396292002,
          display: "pT1b2 (IB2): Clinically visible lesion more than 4.0 cm in greatest dimension (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396294001,
          display: "pT2 (II): Cervical carcinoma invades beyond uterus but not to pelvic wall or to lower third of vagina (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396297008,
          display: "pT2a (IIA): Tumor without parametrial invasion (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396298003,
          display: "pT2b (IIB): Tumor with parametrial invasion (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396299006,
          display: "pT3 (III): Tumor extends to pelvic wall and/or involves lower third of vagina and/or causes hydronephrosis or non-functioning kidney (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396300003,
          display: "pT3a (IIIA): Tumor involves lower third of vagina, no extension to pelvic wall (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396301004,
          display: "pT3b (IIIB): Tumor extends to pelvic wall and/or causes hydronephrosis or non-functioning kidney (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396302006,
          display: "pT4 (IVA): Tumor invades mucosa of bladder or rectum and/or extends beyond true pelvis (bullous edema is not sufficient evidence to classify a tumor as pT4) (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 396303001,
          display: "pM1 (IVB): Distant metastasis (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396311006,
          display: "Corpus uteri TNM finding",
          
        },
        {
          code: 396312004,
          display: "pT1 (I): Tumor confined to corpus uteri (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396313009,
          display: "pT1a (IA): Tumor limited to endometrium (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396314003,
          display: "pT1b (IB): Tumor invades less than one-half of the myometrium (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396315002,
          display: "pT1c (IC): Tumor invades one-half or more of the myometrium (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396316001,
          display: "pT2 (II): Tumor invades cervix but does not extend beyond uterus (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396317005,
          display: "pT2a (IIA): Tumor limited to the glandular epithelium of the endocervix. There is no evidence of connective tissue stromal invasion (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396318000,
          display: "pT2b (IIB): Invasion of the stromal connective tissue of the cervix (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396319008,
          display: "pT3 (III): Local and/or regional spread as specified in pT3a, pT3b, pN1, and FIGO IIIA, IIIB, and IIIC (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396320002,
          display: "pT3a (IIIA): Tumor involves serosa, AND/OR adnexa (direct extension or metastasis) AND/OR cancer cells in ascites or peritoneal washings (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396321003,
          display: "pT3b (IIIB): Involvement of vagina (direct extension or metastasis), rectal or bladder wall (without mucosal involvement), or pelvic wall(s) (frozen pelvis) (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396322005,
          display: "pT4 (IVA): Tumor invades bladder mucosa and/or bowel mucosa (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396323000,
          display: "pN1 (IIIC): Regional lymph node metastasis (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 396368008,
          display: "Skin melanoma TNM finding",
          
        },
        {
          code: 396369000,
          display: "pTis: Melanoma in situ (melanoma of the skin)",
          
        },
        {
          code: 396370004,
          display: "pT1: Melanoma 1.0 mm or less in thickness, with or without ulceration (melanoma of the skin)",
          
        },
        {
          code: 396371000,
          display: "pT1a: Melanoma 1.0 mm or less in thickness and level II or III, no ulceration (melanoma of the skin)",
          
        },
        {
          code: 396372007,
          display: "pT1b: Melanoma 1.0 mm or less in thickness and level IV or V or with ulceration (melanoma of the skin)",
          
        },
        {
          code: 396373002,
          display: "pT2: Melanoma 1.01 to 2.0 mm in thickness, with or without ulceration (melanoma of the skin)",
          
        },
        {
          code: 396374008,
          display: "pT2a: Melanoma 1.01 to 2.0 mm in thickness, no ulceration (melanoma of the skin)",
          
        },
        {
          code: 396375009,
          display: "pT2b: Melanoma 1.01 to 2.0 mm in thickness, with ulceration (melanoma of the skin)",
          
        },
        {
          code: 396376005,
          display: "pT3: Melanoma 2.01 to 4.0 mm in thickness, with or without ulceration (melanoma of the skin)",
          
        },
        {
          code: 396377001,
          display: "pT3a: Melanoma 2.01 to 4.0 mm in thickness, no ulceration (melanoma of the skin)",
          
        },
        {
          code: 396378006,
          display: "pT3b: Melanoma 2.01 to 4.0 mm in thickness, with ulceration (melanoma of the skin)",
          
        },
        {
          code: 396379003,
          display: "pT4: Melanoma greater than 4.0 mm in thickness, with or without ulceration (melanoma of the skin)",
          
        },
        {
          code: 396380000,
          display: "pT4a: Melanoma greater than 4.0 mm in thickness, no ulceration (melanoma of the skin)",
          
        },
        {
          code: 396381001,
          display: "pT4b: Melanoma greater than 4.0 mm in thickness, with ulceration (melanoma of the skin)",
          
        },
        {
          code: 396382008,
          display: "pN1: Metastasis in one regional lymph node (melanoma of the skin)",
          
        },
        {
          code: 396383003,
          display: "pN1a: Clinically occult (microscopic) metastasis (melanoma of the skin)",
          
        },
        {
          code: 396384009,
          display: "pN1b: Clinically apparent (macroscopic) metastasis (melanoma of the skin)",
          
        },
        {
          code: 396385005,
          display: "pN2: Metastasis in 2 to 3 regional nodes or intralymphatic regional metastasis without nodal metastasis (melanoma of the skin)",
          
        },
        {
          code: 396386006,
          display: "pN2a: Clinically occult (microscopic) metastasis (melanoma of the skin)",
          
        },
        {
          code: 396387002,
          display: "pN2b: Clinically apparent (macroscopic) metastasis (melanoma of the skin)",
          
        },
        {
          code: 396388007,
          display: "pN2c: Satellite or in-transit metastasis without nodal metastasis (melanoma of the skin)",
          
        },
        {
          code: 396389004,
          display: "pN3: Metastasis in four or more regional nodes, or matted metastatic nodes, or in-transit metastasis or satellite(s) with metastasis in regional node(s) (melanoma of the skin)",
          
        },
        {
          code: 396390008,
          display: "pM1a: Metastasis to skin, subcutaneous tissues, or distant lymph nodes (melanoma of the skin)",
          
        },
        {
          code: 396391007,
          display: "pM1b: Metastasis to lung (melanoma of the skin)",
          
        },
        {
          code: 396392000,
          display: "pM1c: Metastasis to visceral site other than lung or distant metastasis at any site associated with an elevated serum lactic dehydrogenase (LDH) (melanoma of the skin)",
          
        },
        {
          code: 396492004,
          display: "Carcinoma of skin (excluding eyelid, vulva, penis, and melanomas) TNM finding",
          
        },
        {
          code: 396493009,
          display: "pT1: Tumor 2 cm or less in greatest dimension (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396494003,
          display: "pT1a: Tumor 2 cm or less in greatest dimension, limited to dermis or 2 mm or less in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396495002,
          display: "pT1b: Tumor 2 cm or less in greatest dimension, limited to dermis and greater than 2 mm in thickness, but not more than 6 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396496001,
          display: "pT1c: Tumor 2 cm or less in greatest dimension, invading the subcutis and/or greater than 6 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396497005,
          display: "pT2: Tumor more than 2 cm, but not more than 5 cm, in greatest dimension (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396498000,
          display: "pT2a: Tumor more than 2 cm, but not more than 5 cm, in greatest dimension, limited to dermis or greater than 2 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396499008,
          display: "pT2b: Tumor more than 2 cm, but not more than 5 cm, in greatest dimension, limited to dermis and greater than 2 mm in thickness, but not more than 6 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396500004,
          display: "pT2c: Tumor more than 2 cm, but not more than 5 cm, in greatest dimension, invading the subcutis and/or greater than 6 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396501000,
          display: "pT3: Tumor more than 5 cm in greatest dimension (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396502007,
          display: "pT3a: Tumor more than 5 cm in greatest dimension, limited to dermis or not more than 2 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396503002,
          display: "pT3b: Tumor more than 5 cm in greatest dimension, limited to dermis and greater than 2 mm in thickness, but not more than 6 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396504008,
          display: "pT3c: Tumor more than 5 cm in greatest dimension, invading the subcutis and/or greater than 6 mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396506005,
          display: "pT4: Tumor invades deep extradermal structures (i.e. cartilage, skeletal muscle, or bone) (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396507001,
          display: "pT4b: Tumor invades deep extradermal structures (i.e. cartilage, skeletal muscle, or bone) greater than 6mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396508006,
          display: "pT4a: Tumor invades deep extradermal structures (i.e. cartilage, skeletal muscle, or bone) not more than 6mm in thickness (carcinoma of skin excluding eyelid, vulva, penis, and melanomas)",
          
        },
        {
          code: 396532004,
          display: "Stage I: Tumor confined to gland, 5 cm or less (adrenal cortical carcinoma)",
          
        },
        {
          code: 396533009,
          display: "Stage II: Tumor confined to gland, greater than 5 cm (adrenal cortical carcinoma)",
          
        },
        {
          code: 396534003,
          display: "Stage III: Extraglandular extension of tumor without other organ involvement (adrenal cortical carcinoma)",
          
        },
        {
          code: 396535002,
          display: "Stage IV: Distant metastasis or extension into other organs (adrenal cortical carcinoma)",
          
        },
        {
          code: 396566008,
          display: "Oropharynx TNM finding",
          
        },
        {
          code: 396567004,
          display: "pT1: Tumor 2 cm or less in greatest dimension (oropharynx)",
          
        },
        {
          code: 396568009,
          display: "Upper aerodigestive tract TNM finding",
          
        },
        {
          code: 396569001,
          display: "pT2: Tumor more than 2 cm but not more than 4 cm in greatest dimension (oropharynx)",
          
        },
        {
          code: 396570000,
          display: "pT3: Tumor more than 4 cm in greatest dimension (oropharynx)",
          
        },
        {
          code: 396571001,
          display: "pT4a: Tumor invades the larynx, deep/extrinsic muscle of tongue, medial pterygoid muscle, hard palate, or mandible (oropharynx)",
          
        },
        {
          code: 396572008,
          display: "pT4b: Tumor invades lateral pterygoid muscle, pterygoid plates, lateral nasopharynx, or skull base or encases carotid artery (oropharynx)",
          
        },
        {
          code: 396573003,
          display: "Lip and oral cavity TNM finding",
          
        },
        {
          code: 396574009,
          display: "pT2: Tumor more than 2 cm but not more than 4 cm in greatest dimension (lip and oral cavity)",
          
        },
        {
          code: 396575005,
          display: "pT1: Tumor 2 cm or less in greatest dimension (lip and oral cavity)",
          
        },
        {
          code: 396576006,
          display: "pT1: Tumor 2 cm or less in greatest dimension",
          
        },
        {
          code: 396577002,
          display: "pT3: Tumor more than 4 cm in greatest dimension (lip and oral cavity)",
          
        },
        {
          code: 396578007,
          display: "pT4a: Tumor invades through cortical bone, inferior alveolar nerve, floor of mouth, or skin of face, i.e., chin or nose (lip)",
          
        },
        {
          code: 396579004,
          display: "pT4a: Tumor invades through cortical bone, into deep (extrinsic) muscle of tongue (genioglossus, hyoglossus, palatoglossus, and styloglossus), maxillary sinus, or skin of face (oral cavity)",
          
        },
        {
          code: 396580001,
          display: "pT4b: Tumor involves masticator space, pterygoid plates, or skull base and/or encases internal carotid artery (lip and oral cavity)",
          
        },
        {
          code: 396581002,
          display: "Hypopharyngeal TNM finding",
          
        },
        {
          code: 396582009,
          display: "Nasopharynx TNM finding",
          
        },
        {
          code: 396583004,
          display: "pT1: Tumor confined to the nasopharynx (nasopharynx)",
          
        },
        {
          code: 396584005,
          display: "pT2a: Tumor extends to the soft tissues of the oropharnyx and/or nasal cavity without parapharyngeal extension (nasopharynx)",
          
        },
        {
          code: 396585006,
          display: "pT2: Tumor extends to the soft tissues (nasopharynx)",
          
        },
        {
          code: 396586007,
          display: "pT2b: Tumor extends to the soft tissues of the oropharnyx and/or nasal cavity with parapharyngeal extension (nasopharynx)",
          
        },
        {
          code: 396587003,
          display: "pT3: Tumor involves bony structures and/or paranasal sinuses (nasopharynx)",
          
        },
        {
          code: 396588008,
          display: "pT4: Tumor with intracranial extension, and/or involvement of cranial nerves, infratemporal fossa, hypopharynx, orbit, or masticator space (nasopharynx)",
          
        },
        {
          code: 396589000,
          display: "pT1: Tumor limited to one subsite of hypopharynx and 2 cm or less in greatest dimension (hypopharynx)",
          
        },
        {
          code: 396590009,
          display: "pT2: Tumor invades more than one subsite of hypopharynx or an adjacent site, or measures more than 2 cm but not more than 4 cm in greatest diameter without fixation of hemilarynx (hypopharynx)",
          
        },
        {
          code: 396591008,
          display: "pT3: Tumor measures more than 4 cm in greatest dimension or with fixation of hemilarynx (hypopharynx)",
          
        },
        {
          code: 396592001,
          display: "pT4a: Tumor invades thyroid/cricoid cartilage, hyoid bone, thyroid gland, esophagus or central compartment of soft tissue (hypopharynx)",
          
        },
        {
          code: 396593006,
          display: "pT4b: Tumor invades prevertebral fascia, encases carotid artery, or involves mediastinal structures (hypopharynx)",
          
        },
        {
          code: 396594000,
          display: "Supraglottis TNM finding",
          
        },
        {
          code: 396595004,
          display: "pT1: Tumor limited to one subsite of supraglottis with normal vocal cord mobility (larynx, supraglottis)",
          
        },
        {
          code: 396596003,
          display: "pT2: Tumor invades mucosa of more than one adjacent subsite of supraglottis or glottis or region outside the supraglottis (e.g., mucosa of base of tongue, vallecula, medial wall of pyriform sinus) without fixation of the larynx",
          
        },
        {
          code: 396597007,
          display: "pT3: Tumor limited to the larynx with vocal cord fixation and/or invades any of the following: postcrocoid area, pre-epiglottic tissues, paraglottic space, and/or minor thyroid cartilage erosion (e.g., inner cortex) (larynx, supraglottis)",
          
        },
        {
          code: 396598002,
          display: "pT4a: Tumor invades through the thyroid cartilage and/or invades tissues beyond the larynx (e.g., trachea, soft tissues of the neck including deep extrinsic muscle of the tongue, strap muscles, thyroid, or esophagus) (larynx, supraglottis)",
          
        },
        {
          code: 396599005,
          display: "pT4b: Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures (larynx, supraglottis)",
          
        },
        {
          code: 396600008,
          display: "Glottis TNM finding",
          
        },
        {
          code: 396601007,
          display: "pT1: Tumor limited to the vocal cord(s) (may involve anterior or posterior commissure) with normal mobility (larynx, glottis)",
          
        },
        {
          code: 396602000,
          display: "pT1a: Tumor limited to one vocal cord (may involve anterior or posterior commissure) with normal mobility (larynx, glottis)",
          
        },
        {
          code: 396603005,
          display: "pT1b: Tumor involves both vocal cords (may involve anterior or posterior commissure) with normal mobility (larynx, glottis)",
          
        },
        {
          code: 396604004,
          display: "pT2: Tumor extends to the supraglottis AND/OR subglottis, AND/OR with impaired vocal cord mobility (larynx, glottis)",
          
        },
        {
          code: 396605003,
          display: "pT3: Tumor limited to the larynx with vocal cord fixation, and/or invades the paraglottic space, and/or minor thyroid cartilage erosion (larynx, glottis)",
          
        },
        {
          code: 396606002,
          display: "pT4a: Tumor invades through thyroid cartilage and/or invades tissues beyond the larynx (e.g., trachea, soft tissues of the neck including deep intrinsic muscle of the tongue, strap muscles, thyroid, or esophagus) (larynx, glottis)",
          
        },
        {
          code: 396607006,
          display: "pT4b: Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures (larynx, glottis)",
          
        },
        {
          code: 396608001,
          display: "Subglottis TNM finding",
          
        },
        {
          code: 396609009,
          display: "pT1: Tumor limited to the subglottis (larynx, subglottis)",
          
        },
        {
          code: 396610004,
          display: "pT2: Tumor extends to vocal cord(s) with normal or impaired mobility (larynx, subglottis)",
          
        },
        {
          code: 396611000,
          display: "pT3: Tumor limited to larynx with vocal cord fixation (larynx, subglottis)",
          
        },
        {
          code: 396612007,
          display: "pT4a: Tumor invades cricoid or thyroid cartilage and/or invades tissues beyond the larynx (e.g., trachea, soft tissues of the neck including deep extrinsic muscle of the tongue, strap muscles, thyroid, or esophagus) (larynx, subglottis)",
          
        },
        {
          code: 396613002,
          display: "pT4b: Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures (larynx, subglottis)",
          
        },
        {
          code: 396614008,
          display: "Maxillary sinus TNM finding",
          
        },
        {
          code: 396615009,
          display: "pT1: Tumor limited to the maxillary sinus mucosa with no erosion or destruction of bone (maxillary sinus)",
          
        },
        {
          code: 396616005,
          display: "pT2: Tumor causing bone erosion or destruction including extension into the hard palate and/or middle nasal meatus, except extension to posterior wall of maxillary sinus and pterygoid plates (maxillary sinus)",
          
        },
        {
          code: 396617001,
          display: "pT3: Tumor invades any of the following: bone of the posterior wall of maxillary sinus, subcutaneous tissues, floor or medial wall of orbit, pterygoid fossa, ethmoid sinuses (maxillary sinus)",
          
        },
        {
          code: 396618006,
          display: "pT4a: Tumor invades anterior orbital contents, skin of cheek, pterygoid plates, infratemporal fossa, cribriform plate, sphenoid or frontal sinuses (maxillary sinus)",
          
        },
        {
          code: 396619003,
          display: "pT4b: Tumor invades any of the following: orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve, nasopharynx, or clivus (maxillary sinus)",
          
        },
        {
          code: 396621008,
          display: "Nasal cavity and ethmoid sinus TNM finding",
          
        },
        {
          code: 396622001,
          display: "pT1: Tumor restricted to any one subsite, with or without bony invasion (nasal cavity and ethmoid sinus)",
          
        },
        {
          code: 396623006,
          display: "pT2: Tumor invading two subsites in a single region or extending to involve an adjacent region within the nasoethmoidal complex, with or without bony invasion (nasal cavity and ethmoid sinus)",
          
        },
        {
          code: 396624000,
          display: "pT3: Tumor extends to invade the medial wall or floor of the orbit, maxillary sinus, palate, or cribriform plate (nasal cavity and ethmoid sinus)",
          
        },
        {
          code: 396625004,
          display: "pT4a: Tumor invades any of the following: anterior orbital contents, skin of nose or cheek, minimal extension to anterior cranial fossa, pterygoid plates, sphenoid or frontal sinuses (nasal cavity and ethmoid sinus)",
          
        },
        {
          code: 396626003,
          display: "pT4b: Tumor invades any of the following: orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve, nasopharynx, or clivus (nasal cavity and ethmoid sinus)",
          
        },
        {
          code: 396632008,
          display: "pN1: Metastasis in a single ipsilateral lymph node, 3 cm or less in greatest dimension (upper aerodigestive tract)",
          
        },
        {
          code: 396633003,
          display: "pN2a: Metastasis in a single ipsilateral lymph node, more than 3 cm but not more than 6 cm in greatest dimension (upper aerodigestive tract)",
          
        },
        {
          code: 396634009,
          display: "pN2c: Metastasis in bilateral or contralateral lymph nodes, none more than 6 cm in greatest dimension (upper aerodigestive tract)",
          
        },
        {
          code: 396635005,
          display: "pN2b: Metastasis in multiple ipsilateral lymph nodes, none more than 6 cm in greatest dimension (upper aerodigestive tract)",
          
        },
        {
          code: 396636006,
          display: "pN3: Metastasis in a lymph node, more than 6 cm in greatest dimension (upper aerodigestive tract)",
          
        },
        {
          code: 396637002,
          display: "pN1: Unilateral metastasis in lymph node(s), 6 cm or less in greatest dimension, above the supraclavicular fossa (nasopharynx)",
          
        },
        {
          code: 396638007,
          display: "pN2: Bilateral metastasis in lymph node(s), 6 cm or less in greatest dimension, above the supraclavicular fossa (nasopharynx)",
          
        },
        {
          code: 396639004,
          display: "pN3: Metastasis in a lymph node(s), more than 6 cm in dimension, and/or to supraclavicular fossa (nasopharynx)",
          
        },
        {
          code: 396640002,
          display: "pN3a: Metastasis in a lymph node(s), more than 6 cm in dimension (nasopharynx)",
          
        },
        {
          code: 396641003,
          display: "pN3b: Metastasis in lymph node(s) residing wholly or in part in the supraclavicular fossa (nasopharynx)",
          
        },
        {
          code: 396648009,
          display: "Major salivary gland TNM finding",
          
        },
        {
          code: 396650001,
          display: "pT1: Tumor 2 cm or less in greatest dimension without extraparenchymal extension (major salivary glands)",
          
        },
        {
          code: 396651002,
          display: "pT2: Tumor more than 2 cm but not more than 4 cm in greatest dimension without extraparenchymal extension (major salivary glands)",
          
        },
        {
          code: 396653004,
          display: "pT3: Tumor more than 4 cm and/or tumor having extraparenchymal extension (major salivary glands)",
          
        },
        {
          code: 396657003,
          display: "pT4a: Tumor invades skin, mandible, ear canal, and/or facial nerve (major salivary glands)",
          
        },
        {
          code: 396658008,
          display: "pT4b: Tumor invades skull base and/or pterygoid plates and/or encases carotid artery (major salivary glands)",
          
        },
        {
          code: 396666004,
          display: "Urinary bladder, ureter, or renal pelvis TNM finding",
          
        },
        {
          code: 396667008,
          display: "pTa: Non-invasive papillary carcinoma (urinary bladder, ureter, renal pelvis)",
          
        },
        {
          code: 396668003,
          display: "pTis: Flat carcinoma in situ (urinary bladder, ureter, renal pelvis)",
          
        },
        {
          code: 396669006,
          display: "pT1: Tumor invades subepithelial connective tissue (urinary bladder, ureter, renal pelvis)",
          
        },
        {
          code: 396670007,
          display: "pT2: Tumor invades muscularis propria (urinary bladder, ureter, renal pelvis)",
          
        },
        {
          code: 396671006,
          display: "pT2a: Tumor invades superficial muscle (inner half) (urinary bladder)",
          
        },
        {
          code: 396672004,
          display: "pT2b: Tumor invades deep muscle (outer half) (urinary bladder)",
          
        },
        {
          code: 396673009,
          display: "pT3: Tumor invades perivesical tissue (urinary bladder)",
          
        },
        {
          code: 396674003,
          display: "pT3a: Tumor invades perivesical tissue microscopically (urinary bladder)",
          
        },
        {
          code: 396675002,
          display: "pT3b: Tumor invades perivesical tissue macroscopically (extravesical mass) (urinary bladder)",
          
        },
        {
          code: 396676001,
          display: "pT4: Tumor invades any of the following: prostate, uterus, vagina, pelvic wall, abdominal wall (urinary bladder)",
          
        },
        {
          code: 396677005,
          display: "pT4a: Tumor invades prostate or uterus or vagina (urinary bladder)",
          
        },
        {
          code: 396678000,
          display: "pT4b: Tumor invades pelvic wall or abdominal wall (urinary bladder)",
          
        },
        {
          code: 396679008,
          display: "pN1: Metastasis in a single lymph node, 2 cm or less in greatest dimension (urinary bladder, ureter, renal pelvis)",
          
        },
        {
          code: 396680006,
          display: "pN2: Metastasis in a single lymph node, more than 2 cm but not more than 5 cm in greatest dimension; or multiple lymph nodes, none more than 5 cm in greatest dimension (urinary bladder, ureter, renal pelvis)",
          
        },
        {
          code: 396681005,
          display: "pT3: Tumor invades beyond muscularis into periureteric fat or renal parenchyma (renal pelvis)",
          
        },
        {
          code: 396682003,
          display: "pT4: Tumor invades adjacent organs, or through the kidney into the perinephric fat (renal pelvis and ureter)",
          
        },
        {
          code: 396683008,
          display: "pT3: Tumor invades beyond muscularis into periureteric fat (ureter)",
          
        },
        {
          code: 396684002,
          display: "pT2: Tumor invades muscularis (renal pelvis and ureter)",
          
        },
        {
          code: 396726006,
          display: "Testis TNM finding",
          
        },
        {
          code: 396727002,
          display: "pTis: Intratubular germ cell neoplasia (carcinoma in situ) (testis)",
          
        },
        {
          code: 396728007,
          display: "pT1: Tumor limited to the testis and epididymis without vascular/lymphatic invasion; tumor may invade into the tunica albuginea but not the tunica vaginalis (testis)",
          
        },
        {
          code: 396729004,
          display: "pT2: Tumor limited to the testis and epididymis with vascular/lymphatic invasion, or tumor extending through the tunica albuginea with involvement of the tunica vaginalis (testis)",
          
        },
        {
          code: 396730009,
          display: "pT3: Tumor invades the spermatic cord with or without vascular/lymphatic invasion (testis)",
          
        },
        {
          code: 396731008,
          display: "pT4: Tumor invades the scrotum with or without vascular/lymphatic invasion (testis)",
          
        },
        {
          code: 396732001,
          display: "pN1: Metastasis with a lymph node mass 2 cm or less in greatest dimension and less than or equal to 5 nodes positive, none more than 2 cm in greatest dimension (testis)",
          
        },
        {
          code: 396733006,
          display: "pN2: Metastasis with a lymph node mass more than 2 cm but not more than 5 cm in greatest dimension; or more than 5 nodes positive, none more than 5 cm; or evidence of extranodal extension of tumor (testis)",
          
        },
        {
          code: 396734000,
          display: "pN3: Metastasis with a lymph node mass more than 5 cm in greatest dimension (testis)",
          
        },
        {
          code: 396735004,
          display: "pM1a: Non-regional nodal or pulmonary metastasis (testis)",
          
        },
        {
          code: 396736003,
          display: "pM1b: Distant metastasis other than to non-regional lymph nodes and lungs (testis)",
          
        },
        {
          code: 396797009,
          display: "Exocrine pancreas TNM finding",
          
        },
        {
          code: 396798004,
          display: "pT1: Tumor limited to the pancreas, 2 cm or less in greatest dimension (exocrine pancreas)",
          
        },
        {
          code: 396799007,
          display: "pT2: Tumor limited to the pancreas, more than 2 cm in greatest dimension (exocrine pancreas)",
          
        },
        {
          code: 396800006,
          display: "pT3: Tumor extends beyond the pancreas but without involvement of the celiac axis or the superior mesenteric artery (exocrine pancreas)",
          
        },
        {
          code: 396801005,
          display: "pN1a: Metastasis in single regional lymph node (exocrine pancreas)",
          
        },
        {
          code: 396802003,
          display: "pN1b: Metastasis in multiple regional lymph node(s) (exocrine pancreas)",
          
        },
        {
          code: 396803008,
          display: "pT4: Tumor involves the celiac axis or the superior mesenteric artery (exocrine pancreas)",
          
        },
        {
          code: 396907008,
          display: "Thymic epithelial neoplasm stage finding",
          
        },
        {
          code: 396908003,
          display: "Stage I: Grossly and microscopically encapsulated (thymus gland)",
          
        },
        {
          code: 396909006,
          display: "Stage IIa: Microscopic transcapsular invasion (thymus gland)",
          
        },
        {
          code: 396910001,
          display: "Stage IIb: Macroscopic capsular invasion into thymic or surrounding fat, or grossly adherent to, but not breaking through, mediastinal pleura or pericardium (thymus gland)",
          
        },
        {
          code: 396911002,
          display: "Stage III: Macroscopic invasion of neighboring organs (thymus gland)",
          
        },
        {
          code: 396912009,
          display: "Stage IVa: Pleural or pericardial dissemination (thymus gland)",
          
        },
        {
          code: 396913004,
          display: "Stage IVb: Hematogenous or lymphatic dissemination (thymus gland)",
          
        },
        {
          code: 396960007,
          display: "Retinoblastoma TNM finding",
          
        },
        {
          code: 396961006,
          display: "pT1: Tumor confined to the retina, vitreous, or subretinal space. No optic nerve or choroidal invasion (retinoblastoma)",
          
        },
        {
          code: 396962004,
          display: "pT2: Minimal invasion of the optic nerve and/or optic coats (retinoblastoma)",
          
        },
        {
          code: 396963009,
          display: "pT2a: Tumor invades optic nerve up to, but not through, the level of the lamina cribrosa (retinoblastoma)",
          
        },
        {
          code: 396964003,
          display: "pT2b: Tumor invades choroid focally (retinoblastoma)",
          
        },
        {
          code: 396965002,
          display: "pT2c: Tumor invades optic nerve up to, but not through, the level of the lamina cribrosa and invades the choroid focally (retinoblastoma)",
          
        },
        {
          code: 396966001,
          display: "pT3: Significant invasion of the optic nerve and/or optic coats (retinoblastoma)",
          
        },
        {
          code: 396967005,
          display: "pT3a: Tumor invades optic nerve through the level of the lamina cribrosa but not to the line of resection (retinoblastoma)",
          
        },
        {
          code: 396968000,
          display: "pT3b: Tumor massively invades the choroid (retinoblastoma)",
          
        },
        {
          code: 396969008,
          display: "pT3c: Tumor invades the optic nerve through the level of the lamina cribrosa but not to the line of resection and massively invades the choroid (retinoblastoma)",
          
        },
        {
          code: 396970009,
          display: "pT4: Extraocular tumor extension which includes sites as per AJCC 6th Edition definition (retinoblastoma)",
          
        },
        {
          code: 396971008,
          display: "pM1a: Distant metastasis to bone marrow (retinoblastoma)",
          
        },
        {
          code: 396972001,
          display: "pM1b: Distant metastasis to sites other than bone marrow (retinoblastoma)",
          
        },
        {
          code: 397025005,
          display: "Stomach TNM finding",
          
        },
        {
          code: 397026006,
          display: "pT1: Tumor invades lamina propria or submucosa (esophagus)",
          
        },
        {
          code: 397027002,
          display: "Esophagus TNM finding",
          
        },
        {
          code: 397029004,
          display: "pT1a: Tumor invades lamina propria (esophagus)",
          
        },
        {
          code: 397030009,
          display: "pT1b: Tumor invades submucosa (esophagus)",
          
        },
        {
          code: 397031008,
          display: "pT2: Tumor invades muscularis propria (esophagus)",
          
        },
        {
          code: 397032001,
          display: "pT3: Tumor invades adventitia (esophagus)",
          
        },
        {
          code: 397033006,
          display: "pT4: Tumor invades adjacent structures (esophagus)",
          
        },
        {
          code: 397036003,
          display: "pN1a: Metastasis in 1 to 3 regional lymph nodes (esophagus)",
          
        },
        {
          code: 397037007,
          display: "pN1b: Metastasis in 4 to 7 regional lymph nodes (esophagus)",
          
        },
        {
          code: 397038002,
          display: "pN1c: Metastasis in more than 7 regional lymph nodes (esophagus)",
          
        },
        {
          code: 397039005,
          display: "pM1a: Metastasis in celiac lymph nodes (lower thoracic esophagus)",
          
        },
        {
          code: 397040007,
          display: "pM1a: Distant metastasis not applicable (midthoracic esophagus)",
          
        },
        {
          code: 397041006,
          display: "pM1a: Metastasis in cervical nodes (upper thoracic esophagus)",
          
        },
        {
          code: 397042004,
          display: "pM1b: Distant metastasis to site other than celiac lymph nodes (lower thoracic esophagus)",
          
        },
        {
          code: 397043009,
          display: "pM1b: Nonregional lymph nodes AND/OR other distant metastasis (midthoracic esophagus)",
          
        },
        {
          code: 397044003,
          display: "pM1b: Distant metastasis to site other than cervical nodes (upper thoracic esophagus)",
          
        },
        {
          code: 397058001,
          display: "Small intestine TNM finding",
          
        },
        {
          code: 397059009,
          display: "pT1: Tumor invades lamina propria or submucosa (small intestine)",
          
        },
        {
          code: 397088005,
          display: "pT2: Tumor invades muscularis propria (small intestine)",
          
        },
        {
          code: 397089002,
          display: "pT3: Tumor invades through the muscularis propria into the subserosa or into the nonperitonealized perimuscular tissue (mesentery or retroperitoneum) with extension 2 cm or less (small intestine)",
          
        },
        {
          code: 397090006,
          display: "pT4: Tumor perforates the visceral peritoneum or directly invades other organs or structures (small intestine)",
          
        },
        {
          code: 397092003,
          display: "Gallbladder TNM finding",
          
        },
        {
          code: 397093008,
          display: "pT1: Tumor invades lamina propria or muscle layer (gallbladder)",
          
        },
        {
          code: 397094002,
          display: "pT1a: Tumor invades lamina propria (gallbladder)",
          
        },
        {
          code: 397095001,
          display: "pT1b: Tumor invades muscle layer (gallbladder)",
          
        },
        {
          code: 397096000,
          display: "pT2: Tumor invades perimuscular connective tissue; no extension beyond serosa or into liver (gallbladder)",
          
        },
        {
          code: 397097009,
          display: "pT3: Tumor perforates the serosa (visceral peritoneum) and/or directly invades the liver and/or one other adjacent organ or structure, such as the stomach, duodenum, colon, pancreas, omentum, or extrahepatic bile ducts (gallbladder)",
          
        },
        {
          code: 397098004,
          display: "pT4: Tumor invades main portal vein or hepatic artery or invades two or more extrahepatic organs or structures (gallbladder)",
          
        },
        {
          code: 397101000,
          display: "Vagina TNM finding",
          
        },
        {
          code: 397102007,
          display: "pT1 (I): Tumor confined to vagina (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397103002,
          display: "pT2 (II): Tumor invades paravaginal tissues but not to pelvic wall (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397104008,
          display: "pT3 (III): Tumor extends to pelvic wall (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397105009,
          display: "pT4 (IVA): Tumor invades mucosa of the bladder or rectum and/or extends beyond the true pelvis (bullous edema is not sufficient evidence to classify a tumor as T4) (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397106005,
          display: "pM1 (IVB): Distant metastasis (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397107001,
          display: "pN1: Pelvic or inguinal lymph node metastasis (vagina)",
          
        },
        {
          code: 397119009,
          display: "Vulva TNM finding",
          
        },
        {
          code: 397120003,
          display: "pT1 (I): Tumor confined to the vulva or vulva and perineum, 2 cm or less in greatest dimension (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397121004,
          display: "pT1a (IA): Tumor confined to the vulva or vulva and perineum, 2 cm or less in greatest dimension, and with stromal invasion no greater than 1 mm (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397122006,
          display: "pT1b (IB): Tumor confined to the vulva or vulva and perineum, 2 cm or less in greatest dimension, and with stromal invasion greater than 1 mm (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397123001,
          display: "pT2 (II): Tumor confined to the vulva or vulva and perineum, more than 2 cm in greatest dimension (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397124007,
          display: "pT3 (III): Tumor of any size with contiguous spread to the lower urethra and/or vagina or anus (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397125008,
          display: "pT4 (IVA): Tumor invades any of the following: upper urethra, bladder mucosa, rectal mucosa, or is fixed to the pubic bone (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397126009,
          display: "pN1: Unilateral regional lymph node metastasis (vulva)",
          
        },
        {
          code: 397127000,
          display: "pN2: Bilateral regional lymph node metastasis (vulva)",
          
        },
        {
          code: 397146004,
          display: "Extrahepatic bile ducts TNM finding",
          
        },
        {
          code: 397147008,
          display: "pT1: Tumor confined to the bile duct histologically (extrahepatic bile ducts)",
          
        },
        {
          code: 397148003,
          display: "pT2: Tumor invades beyond the wall of bile duct (extrahepatic bile ducts)",
          
        },
        {
          code: 397149006,
          display: "pT3: Tumor invades the liver, gallbladder, pancreas, and/or ipsilateral branches of the portal vein (right or left) or hepatic artery (right or left) (extrahepatic bile ducts)",
          
        },
        {
          code: 397150006,
          display: "pT4: Tumor invades any of the following: main portal vein or its branches bilaterally, common hepatic artery, or other adjacent structures, such as the colon, stomach, duodenum, or abdominal wall (extrahepatic bile ducts)",
          
        },
        {
          code: 397213002,
          display: "pM1a: Distant metastasis to non-regional lymph node(s) (prostate)",
          
        },
        {
          code: 397214008,
          display: "pM1b: Distant metastasis to bone(s) (prostate)",
          
        },
        {
          code: 397215009,
          display: "pM1c: Distant metastasis site other than bone or non-regional lymph node(s) (prostate)",
          
        },
        {
          code: 397316007,
          display: "Ovary TNM finding",
          
        },
        {
          code: 397317003,
          display: "pM1 (IV): Distant metastasis (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397360007,
          display: "pT3a (IIIA): Tumor involves serosa, AND/OR adnexa (direct extension or metastasis) (TNM category and FIGO stage) (corpus uteri)",
          
        },
        {
          code: 397367005,
          display: "pN1 (III): Pelvic or inguinal lymph node metastasis (pT1-pT3) (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397368000,
          display: "pN1 (IVA): Pelvic or inguinal lymph node metastasis (pT4) (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397369008,
          display: "pN1 (IVB): Pelvic or inguinal lymph node metastasis (pT1-pT4, pM1) (TNM category and FIGO stage) (vagina)",
          
        },
        {
          code: 397370009,
          display: "pN1 (III): Unilateral regional lymph node metastasis (pT1-pT3) (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397371008,
          display: "pN1 (IVA): Unilateral regional lymph node metastasis (pT4) (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397372001,
          display: "pN1 (IVB): Unilateral regional lymph node metastasis (pT1-pT4, pM1) (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397373006,
          display: "pN2 (IVA): Bilateral regional lymph node metastasis (pT1-pT4) (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397374000,
          display: "pN2 (IVB): Bilateral regional lymph node metastasis (pT1-pT4, pM1) (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397375004,
          display: "pM1 (IVB): Distant metastasis (including pelvic lymph node metastasis) (TNM category and FIGO stage) (vulva)",
          
        },
        {
          code: 397385003,
          display: "Thoracic mesothelioma TNM finding",
          
        },
        {
          code: 397386002,
          display: "pT1: Tumor involves ipsilateral parietal pleura, with or without focal involvement of visceral pleura (thoracic mesothelioma)",
          
        },
        {
          code: 397387006,
          display: "pT1a: Tumor involves ipsilateral parietal (mediastinal, diaphragmatic) pleura. No involvement of the visceral pleura (thoracic mesothelioma)",
          
        },
        {
          code: 397388001,
          display: "pT1b: Tumor involves ipsilateral parietal (mediastinal, diaphragmatic) pleura, with focal involvement of the visceral pleura (thoracic mesothelioma)",
          
        },
        {
          code: 397389009,
          display: "pT2: Tumor involves any of the ipsilateral pleural surfaces with at least one of the following: confluent visceral pleural tumor (including fissure), invasion of diaphragmatic muscle, invasion of lung parenchyma (thoracic mesothelioma)",
          
        },
        {
          code: 397390000,
          display: "pN1: Metastasis in the ipsilateral bronchopulmonary and/or hilar lymph node(s) (thoracic mesothelioma)",
          
        },
        {
          code: 397391001,
          display: "pN2: Metastasis in the subcarinal lymph node(s) and/or the ipsilateral internal mammary or mediastinal lymph node(s) (thoracic mesothelioma)",
          
        },
        {
          code: 397392008,
          display: "pN3: Metastasis in the contralateral mediastinal, internal mammary, or hilar lymph node(s), and/or the ipsilateral or contralateral supraclavicular or scalene lymph node(s) (thoracic mesothelioma)",
          
        },
        {
          code: 397393003,
          display: "pT3: Tumor involves any of the ipsilateral pleural surfaces plus additional sites as by AJCC 6th Edition definition (thoracic mesothelioma)",
          
        },
        {
          code: 397465003,
          display: "pT4: Tumor involves any of the ipsilateral pleural surfaces plus additional sites as by AJCC 6th Edition definition (thoracic mesothelioma)",
          
        },
        {
          code: 397470005,
          display: "Gestational trophoblast TNM finding",
          
        },
        {
          code: 397471009,
          display: "pT1 (I): Tumor confined to uterus (TNM category and FIGO stage) (gestational trophoblast)",
          
        },
        {
          code: 397472002,
          display: "pT2 (II): Tumor extends outside of uterus but limited to genital structures (ovary, tube, vagina, broad ligaments) (TNM category and FIGO stage) (gestational trophoblast)",
          
        },
        {
          code: 397473007,
          display: "pM1a (III): Tumor extends to the lungs with or without genital tract involvement (TNM category and FIGO stage) (gestational trophoblast)",
          
        },
        {
          code: 397474001,
          display: "pM1b (IV): Distant metastasis other than lung (TNM category and FIGO stage) (gestational trophoblast)",
          
        },
        {
          code: 397489005,
          display: "pT1 (I): Tumor limited to ovaries (one or both) (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397490001,
          display: "pT1a (IA): Tumor limited to one ovary; capsule intact, no tumor on ovarian surface. No malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397491002,
          display: "pT1b (IB): Tumor limited to both ovaries; capsule intact, no tumor on ovarian surface. No malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397492009,
          display: "pT1c (IC): Tumor limited to one or both ovaries with any of the following: capsule ruptured, tumor on ovarian surface, malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397493004,
          display: "pT2 (II): Tumor involves one or both ovaries with pelvic extension AND/OR implants (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397494005,
          display: "pT2a (IIA): Extension to AND/OR implants on uterus AND/OR tube(s). No malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397495006,
          display: "pT2b (IIB): Extension to AND/OR implants on other pelvic tissues. No malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397496007,
          display: "pT2c (IIC): Pelvic extension AND/OR implants (T2a or T2b/IIA or IIB) with malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397497003,
          display: "pT3 and/or N1 (III): Tumor involves one or both ovaries with microscopically confirmed peritoneal metastasis outside the pelvis (including liver capsule metastasis) and/or regional lymph node metastasis (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397498008,
          display: "pT3a (IIIA): Microscopic peritoneal metastasis beyond pelvis (no macroscopic tumor) (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397499000,
          display: "pT3b (IIIB): Macroscopic peritoneal metastasis beyond pelvis 2 cm or less in greatest dimension (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397500009,
          display: "pT3c AND/OR N1 (IIIC): Peritoneal metastasis beyond pelvis more than 2 cm in greatest dimension AND/OR regional lymph node metastasis (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 397501008,
          display: "Any T/any N and M1 (IV): Growth involving one or both ovaries with distant metastasis. (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 399378007,
          display: "pT2a (IIA): Tumor involves one or both fallopian tubes with extension and/or metastasis to the uterus and/or ovaries (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399393006,
          display: "pT3: Tumor more than 4 cm in greatest dimension limited to the thyroid or any tumor with minimal extrathyroid extension (e.g., extension to sternothyroid muscle or perithyroid soft tissues) (thyroid)",
          
        },
        {
          code: 399397007,
          display: "pT2: Tumor greater than 10 mm but not more than 16 mm in greatest basal diameter and between 2.5 and 10 mm in maximum height (thickness) (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399400003,
          display: "pT3: Tumor having extraparenchymal extension, and/or more than 4 cm but not more than 6 cm in greatest dimension, without seventh nerve involvement (major salivary glands)",
          
        },
        {
          code: 399401004,
          display: "Insufficient tissue to assess highest pT category",
          
        },
        {
          code: 399404007,
          display: "pT3b (IIIB): Tumor involves one or both fallopian tubes, with macroscopic peritoneal metastasis outside the pelvis 2 cm or less in greatest dimension (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399410007,
          display: "pT3c (IIIC): Tumor involves one or both fallopian tubes, with peritoneal metastasis outside the pelvis more than 2 cm in diameter (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399413009,
          display: "Thyroid TNM finding",
          
        },
        {
          code: 399425007,
          display: "pT1a (IA): Tumor limited to one fallopian tube, without penetrating the serosal surface; no ascites (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399439007,
          display: "pT1: Tumor 2 cm or less in greatest dimension limited to the thyroid (thyroid)",
          
        },
        {
          code: 399446003,
          display: "pT4b: Tumor invades prevertebral fascia or encases carotid artery or mediastinal vessels (thyroid)",
          
        },
        {
          code: 399448002,
          display: "pT1: Tumor 10 mm or less in greatest diameter and 2.5 mm or less in greatest height (thickness) (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399452002,
          display: "pM1b: Distant metastasis (esophagus)",
          
        },
        {
          code: 399453007,
          display: "No pT1 category, insufficient tissue (prostate)",
          
        },
        {
          code: 399454001,
          display: "pT1c (IC): Tumor limited to one or both tubes with extension onto or through the tubal serosa, or with malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399461002,
          display: "pT1b: Tumor 10 mm or less in greatest diameter and 2.5 mm or less in greatest height (thickness) with microscopic extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399474008,
          display: "pT2a: Tumor confluent with or extending into the ciliary body and/or choroid with melanomalytic glaucoma (iris) (uveal melanoma)",
          
        },
        {
          code: 399478006,
          display: "pT1 (I): Tumor limited to the fallopian tube(s) (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399481001,
          display: "pN1a: Metastasis to level VI (pretracheal, paratracheal, and prelaryngeal/Delphian lymph nodes) (thyroid)",
          
        },
        {
          code: 399493005,
          display: "pT1c: Tumor 10 mm or less in greatest diameter and 2.5 mm or less in greatest height (thickness) with macroscopic extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399501001,
          display: "pT1: Tumor limited to the iris (iris) (uveal melanoma)",
          
        },
        {
          code: 399508007,
          display: "pT4b: Extrathyroidal anaplastic carcinoma - surgically unresectable (anaplastic carcinoma) (thyroid)",
          
        },
        {
          code: 399511008,
          display: "pT1b: Tumor limited to the iris (more than 3 clock hours in size) (iris) (uveal melanoma)",
          
        },
        {
          code: 399516003,
          display: "pT1a: Tumor 10 mm or less in greatest diameter and 2.5 mm or less in greatest height (thickness) without microscopic extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399517007,
          display: "Tumor stage cannot be determined",
          
        },
        {
          code: 399518002,
          display: "pT2: Tumor more than 2 cm but not more than 4 cm in greatest dimension limited to the thyroid (thyroid)",
          
        },
        {
          code: 399519005,
          display: "pT2a: Tumor 10 mm to 16 mm in greatest basal diameter and between 2.5 and 10 mm in maximum height (thickness) without microscopic extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399543008,
          display: "pT2c: Tumor 10 mm to 16 mm in greatest basal diameter and between 2.5 and 10 mm in maximum height (thickness) with macroscopic extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399553009,
          display: "pN3: Metastasis in a lymph node, more than 5 cm in greatest dimension (urinary bladder, ureter, renal pelvis)",
          
        },
        {
          code: 399557005,
          display: "pT3: Tumor confluent with or extending into the ciliary body and/or choroid with scleral extension (iris) (uveal melanoma)",
          
        },
        {
          code: 399575006,
          display: "pT4a: Intrathyroidal anaplastic carcinoma - surgically resectable (anaplastic carcinoma) (thyroid)",
          
        },
        {
          code: 399594001,
          display: "pM1a: Distant metastasis (esophagus)",
          
        },
        {
          code: 399597008,
          display: "pT1a: Tumor limited to the iris (not more than 3 clock hours in size) (iris) (uveal melanoma)",
          
        },
        {
          code: 399602001,
          display: "pT1c: Tumor limited to the iris with melanomalytic glaucoma (iris) (uveal melanoma)",
          
        },
        {
          code: 399605004,
          display: "FIGO stage finding for fallopian tube tumor",
          
        },
        {
          code: 399610000,
          display: "pT3: Tumor more than 16 mm in greatest diameter and/or greater than 10 mm in maximum height (thickness) without extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399615005,
          display: "pT2: Tumor confluent with or extending into the ciliary body and/or choroid (iris) (uveal melanoma)",
          
        },
        {
          code: 399616006,
          display: "pT2b: Tumor 10 mm to 16 mm in greatest basal diameter and between 2.5 and 10 mm in maximum height (thickness) with microscopic extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399621009,
          display: "pT3a (IIIA): Tumor involves one or both fallopian tubes, with microscopic peritoneal metastasis outside the pelvis (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399623007,
          display: "pT4a: Tumor of any size extending beyond the thyroid capsule to invade subcutaneous soft tissues, larynx, trachea, esophagus, or recurrent laryngeal nerve (thyroid)",
          
        },
        {
          code: 399630001,
          display: "pT category not identified",
          
        },
        {
          code: 399636007,
          display: "pT3c and/or N1 (IIIC): Tumor involves one or both fallopian tubes, with peritoneal metastasis outside the pelvis more than 2 cm in diameter AND/OR regional lymph node metastasis (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399641004,
          display: "pT2 (II): Tumor involves one or both fallopian tubes with pelvic extension (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399674004,
          display: "pT3a: Tumor confluent with or extending into the ciliary body and/or choroid with scleral extension and melanomalytic glaucoma (iris) (uveal melanoma)",
          
        },
        {
          code: 399678001,
          display: "pT3 (III): Tumor involves one or both fallopian tubes, with peritoneal implants outside the pelvis (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399679009,
          display: "pT4: Tumor with extraocular extension (iris) (uveal melanoma)",
          
        },
        {
          code: 399688000,
          display: "Fallopian tube TNM finding",
          
        },
        {
          code: 399690004,
          display: "pT2b (IIB): Tumor involves one or both fallopian tubes with extension to other pelvic structures (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399696005,
          display: "pT3 and/or N1 (III): Tumor involves one or both fallopian tubes, with peritoneal implants outside the pelvis AND/OR regional lymph node metastasis (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399697001,
          display: "pT2c (IIC): Tumor involves one or both fallopian tubes with pelvic extension with malignant cells in ascites or peritoneal washings (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399704006,
          display: "pN1b: Metastasis to unilateral, bilateral, or contralateral cervical or superior mediastinal lymph nodes (thyroid)",
          
        },
        {
          code: 399705007,
          display: "Uveal melanoma TNM finding",
          
        },
        {
          code: 399729000,
          display: "pT4: Tumor more than 16 mm in greatest diameter and/or greater than 10 mm in maximum height (thickness) with extraocular extension (ciliary body and choroid) (uveal melanoma)",
          
        },
        {
          code: 399736004,
          display: "pT1b (IB): Tumor limited to both tubes, without penetrating the serosal surface; no ascites (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 399749009,
          display: "Any T/Any N and M1 (IV): Distant metastasis including presence of malignant cells in pleural fluid or parenchymal hepatic metastasis (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 404180008,
          display: "pT3: Tumor invades beyond muscularis into peripelvic fat or renal parenchyma (renal pelvis)",
          
        },
        {
          code: 404181007,
          display: "pM1 (IV): Distant metastasis (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 404182000,
          display: "pM1 (IVB): Distant metastasis (TNM category and FIGO stage) (uterine cervix)",
          
        },
        {
          code: 405917009,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group finding",
          
        },
        {
          code: 405918004,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group not applicable",
          
        },
        {
          code: 405919007,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group cannot be assessed",
          
        },
        {
          code: 405957007,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IA: localized tumor, confined to site of origin, completely resected",
          
        },
        {
          code: 405958002,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IB: localized tumor, infiltrating beyond site of origin, completely resected",
          
        },
        {
          code: 405959005,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IIA: localized tumor, gross total resection, but with microscopic residual disease",
          
        },
        {
          code: 405960000,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IIB: Locally extensive tumor (spread to regional lymph nodes), completely resected",
          
        },
        {
          code: 405961001,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IIC: Locally extensive tumor (spread to regional lymph nodes), gross total resection, but microscopic residual disease",
          
        },
        {
          code: 405962008,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IIIA: Localized or locally extensive tumor, gross residual disease after biopsy only",
          
        },
        {
          code: 405963003,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IIIB: Localized or locally extensive tumor, gross residual disease after major resection (greater than 50% debulking)",
          
        },
        {
          code: 405964009,
          display: "Intergroup rhabdomyosarcoma study post-surgical clinical group IV: Any size primary tumor, with or without regional lymph node involvement, with distant metastases, without respect to surgical approach to primary tumor",
          
        },
        {
          code: 405992004,
          display: "pN1 (IIIC): Regional lymph node metastasis (TNM category and FIGO stage) (ovary)",
          
        },
        {
          code: 406001009,
          display: "pT4b: Tumor invades lateral pterygoid muscle, pterygoid plates, lateral nasopharynx, or skull base or encases internal carotid artery (oropharynx)",
          
        },
        {
          code: 406088001,
          display: "pN0(i-): No regional lymph node metastasis histologically, negative morphologic findings for isolated tumor cells (breast)",
          
        },
        {
          code: 406089009,
          display: "pN0(i+): No regional lymph node metastasis histologically, positive morphologic findings for isolated tumor cells, no cluster greater than 0.2 mm (breast)",
          
        },
        {
          code: 406090000,
          display: "pN0(mol-): No regional lymph node metastasis histologically, negative nonmorphologic (molecular) findings for isolated tumor cells (breast)",
          
        },
        {
          code: 406091001,
          display: "pN0(mol+): No regional lymph node metastasis histologically, positive nonmorphologic (molecular) findings for isolated tumor cells (breast)",
          
        },
        {
          code: 406092008,
          display: "pN1 (IIIC): Regional lymph node metastasis (TNM category and FIGO stage) (fallopian tube)",
          
        },
        {
          code: 409721000,
          display: "International neuroblastoma staging system stage finding",
          
        },
        {
          code: 409722007,
          display: "International neuroblastoma staging system stage 1",
          
        },
        {
          code: 409723002,
          display: "International neuroblastoma staging system stage 2A",
          
        },
        {
          code: 409724008,
          display: "International neuroblastoma staging system stage 2B",
          
        },
        {
          code: 409725009,
          display: "International neuroblastoma staging system stage 3",
          
        },
        {
          code: 409726005,
          display: "International neuroblastoma staging system stage 4",
          
        },
        {
          code: 409727001,
          display: "International neuroblastoma staging system stage 4S",
          
        },
        {
          code: 409747009,
          display: "pT1a: Tumor 5 cm or less in greatest dimension, superficial tumor (extraosseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409748004,
          display: "pT1: Tumor 5 cm or less in greatest dimension (extraosseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409749007,
          display: "pT1b: Tumor 5 cm or less in greatest dimension, deep tumor (extraosseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409750007,
          display: "pT2: Tumor more than 5 cm in greatest dimension (extraosseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409751006,
          display: "pT2a: Tumor more than 5 cm in greatest dimension, superficial tumor (extraosseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409752004,
          display: "pT2b: Tumor more than 5 cm in greatest dimension, deep tumor (extraosseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409753009,
          display: "pT1: Tumor 8 cm or less in greatest dimension (osseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409754003,
          display: "pT2: Tumor more than 8 cm in greatest dimension (osseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409755002,
          display: "pT3: Discontinuous tumors in the primary bone site (osseous primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409756001,
          display: "Primitive neuroectodermal tumor/Ewing's sarcoma TNM finding",
          
        },
        {
          code: 409758000,
          display: "pM1a: Distant metastasis to lung (primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 409759008,
          display: "pM1b: Distant metastasis to site other than lung (primitive neuroectodermal tumor/Ewing's sarcoma)",
          
        },
        {
          code: 422375001,
          display: "Carcinoma of colon, stage III",
          
        },
        {
          code: 422399001,
          display: "Infiltrating ductal carcinoma of breast, stage 1",
          
        },
        {
          code: 422479008,
          display: "Infiltrating ductal carcinoma of breast, stage 2",
          
        },
        {
          code: 422581008,
          display: "Carcinoma of colon, stage II",
          
        },
        {
          code: 422679002,
          display: "Seminoma of testis, stage 3",
          
        },
        {
          code: 422807001,
          display: "pT4: Tumor directly invades other organs or structures and/or perforates visceral peritoneum (appendix)",
          
        },
        {
          code: 422901001,
          display: "pTis: Carcinoma in situ, intraepithelial (appendix)",
          
        },
        {
          code: 422985007,
          display: "Carcinoma of colon, stage IV",
          
        },
        {
          code: 423003009,
          display: "pT3: Tumor invades through the muscularis propria into the subserosa or into mesoappendix (appendix)",
          
        },
        {
          code: 423055005,
          display: "pTis: Carcinoma in situ, invasion of lamina propria (appendix)",
          
        },
        {
          code: 423114009,
          display: "Infiltrating ductal carcinoma of breast, stage 3",
          
        },
        {
          code: 423274005,
          display: "Carcinoma of ovary, stage 4",
          
        },
        {
          code: 423480004,
          display: "Carcinoma of ovary, stage 3",
          
        },
        {
          code: 423645007,
          display: "Seminoma of testis, stage 2",
          
        },
        {
          code: 423697000,
          display: "Seminoma of testis, stage 4",
          
        },
        {
          code: 423816008,
          display: "Seminoma of testis, stage 1",
          
        },
        {
          code: 424078005,
          display: "Adenocarcinoma of lung, stage I",
          
        },
        {
          code: 424229006,
          display: "Infiltrating ductal carcinoma of breast, stage 4",
          
        },
        {
          code: 424454009,
          display: "Adenocarcinoma of lung, stage III",
          
        },
        {
          code: 424486004,
          display: "Carcinoma of ovary, stage 2",
          
        },
        {
          code: 424600001,
          display: "Carcinoma of ovary, stage 1",
          
        },
        {
          code: 424632001,
          display: "Adenocarcinoma of lung, stage II",
          
        },
        {
          code: 424842001,
          display: "pT1: Tumor invades submucosa (appendix)",
          
        },
        {
          code: 424993006,
          display: "Adenocarcinoma of lung, stage IV",
          
        },
        {
          code: 425008003,
          display: "pT2: Tumor invades muscularis propria (appendix)",
          
        },
        {
          code: 425037004,
          display: "Low grade lymphoma, stage 1",
          
        },
        {
          code: 425213009,
          display: "Carcinoma of colon, stage I",
          
        },
        {
          code: 425566006,
          display: "pT1b: Tumor 5 cm or less in greatest dimension, deep tumor (soft tissue)",
          
        },
        {
          code: 426288003,
          display: "pM1b: Distant metastasis to site other than lung (bone)",
          
        },
        {
          code: 426554005,
          display: "pT2b: Tumor more than 5 cm in greatest dimension, deep tumor (soft tissue)",
          
        },
        {
          code: 426561009,
          display: "Bone TNM finding",
          
        },
        {
          code: 426613005,
          display: "pT2a: Tumor more than 5 cm in greatest dimension, superficial tumor (soft tissue)",
          
        },
        {
          code: 426616002,
          display: "pT2: Tumor more than 8 cm in greatest dimension (bone)",
          
        },
        {
          code: 426897009,
          display: "pT1: Tumor 8 cm or less in greatest dimension (bone)",
          
        },
        {
          code: 426917009,
          display: "pM1a: Distant metastasis to lung (bone)",
          
        },
        {
          code: 427209003,
          display: "pT3: Discontinuous tumors in the primary bone site (bone)",
          
        },
        {
          code: 427495001,
          display: "pT1a: Tumor 5 cm or less in greatest dimension, superficial tumor (soft tissue)",
          
        },
        {
          code: 427535001,
          display: "Soft tissue TNM finding",
          
        },
        {
          code: 443335006,
          display: "pN0(i-) category",
          
        },
        {
          code: 443357004,
          display: "pT1a category",
          
        },
        {
          code: 443452006,
          display: "pN2b category",
          
        },
        {
          code: 443479005,
          display: "pT3d category",
          
        },
        {
          code: 443486002,
          display: "pN0(i+) category",
          
        },
        {
          code: 443505003,
          display: "pT4d category",
          
        },
        {
          code: 443506002,
          display: "pT1b category",
          
        },
        {
          code: 443599002,
          display: "pN1b category",
          
        },
        {
          code: 443600004,
          display: "pT1mic category",
          
        },
        {
          code: 443604008,
          display: "pT4a category",
          
        },
        {
          code: 443606005,
          display: "pT3a category",
          
        },
        {
          code: 443642002,
          display: "pT1c category",
          
        },
        {
          code: 443674009,
          display: "pT3c category",
          
        },
        {
          code: 443716008,
          display: "pN1a category",
          
        },
        {
          code: 443721006,
          display: "pT4c category",
          
        },
        {
          code: 443736009,
          display: "pT4b category",
          
        },
        {
          code: 443743003,
          display: "pN1c category",
          
        },
        {
          code: 443784000,
          display: "pT3c,d category",
          
        },
        {
          code: 443812002,
          display: "pT2a category",
          
        },
        {
          code: 443815000,
          display: "pT3a,b category",
          
        },
        {
          code: 443817008,
          display: "pT3b category",
          
        },
        {
          code: 443823003,
          display: "pN3c category",
          
        },
        {
          code: 443824009,
          display: "pN1mi category",
          
        },
        {
          code: 443839005,
          display: "pM1c category",
          
        },
        {
          code: 443840007,
          display: "pM1b category",
          
        },
        {
          code: 443841006,
          display: "pM1a category",
          
        },
        {
          code: 443866005,
          display: "pN3a category",
          
        },
        {
          code: 443867001,
          display: "pN2a category",
          
        },
        {
          code: 443875007,
          display: "pN0(mol+) category",
          
        },
        {
          code: 443893008,
          display: "pN2c category",
          
        }
      ];

    const stageSummaryProps = {
        options: stageSummary,
        getOptionLabel: (option) => option.display,
    };

    const stageType = [
        {
          code: 261023001,
          display: "Pathological staging (qualifier value)",
          
        },
        {
          code: 260998006,
          display: "Clinical staging (qualifier value)",
          
        },
        {
          code: 13808002,
          display: "WR stage 3",
          
        },
        {
          code: 15972002,
          display: "Walter Reed (WR) stage 2",
          
        },
        {
          code: 42114005,
          display: "Walter Reed (WR) stage 1",
          
        },
        {
          code: 66470009,
          display: "WR stage 5",
          
        },
        {
          code: 74542008,
          display: "WR stage 4",
          
        },
        {
          code: 83200007,
          display: "WR stage 6",
          
        },
        {
          code: 106241006,
          display: "Gleason's microscopic prostatic carcinoma grading system",
          
        },
        {
          code: 106242004,
          display: "Walter Reed staging of prostatic cancer",
          
        },
        {
          code: 106244003,
          display: "FIGO staging system for endometrial carcinoma",
          
        },
        {
          code: 106245002,
          display: "FIGO Vulva tumor staging",
          
        },
        {
          code: 106246001,
          display: "FIGO staging system for vulvar melanoma",
          
        },
        {
          code: 106247005,
          display: "FIGO staging system for epithelial tumor of ovary",
          
        },
        {
          code: 106250008,
          display: "FIGO Cervical tumor staging",
          
        },
        {
          code: 106252000,
          display: "Lymphoma staging descriptors",
          
        },
        {
          code: 110375007,
          display: "Overlapping tumor",
          
        },
        {
          code: 134438001,
          display: "Canadian Cardiovascular Society classification of angina",
          
        },
        {
          code: 135831005,
          display: "Cardiovascular Limitations and Symptoms Profile angina score",
          
        },
        {
          code: 135832003,
          display: "Cardiovascular Limitations and Symptoms Profile ankle swelling score",
          
        },
        {
          code: 135833008,
          display: "Cardiovascular limitations and symptoms profile shortness of breath score",
          
        },
        {
          code: 135877001,
          display: "Stroke risk",
          
        },
        {
          code: 160723003,
          display: "Housing dependency scale",
          
        },
        {
          code: 165270003,
          display: "Physical disability assessment score",
          
        },
        {
          code: 165271004,
          display: "Physical disability admission score",
          
        },
        {
          code: 165272006,
          display: "Physical disability inpatient score",
          
        },
        {
          code: 165273001,
          display: "Physical disability discharge score",
          
        },
        {
          code: 165274007,
          display: "Physical disability outpatient score",
          
        },
        {
          code: 165275008,
          display: "Physical disability DV score",
          
        },
        {
          code: 251893009,
          display: "Symptom ratings",
          
        },
        {
          code: 251894003,
          display: "Exertion rating",
          
        },
        {
          code: 251895002,
          display: "Leg fatigue rating",
          
        },
        {
          code: 251896001,
          display: "Breathlessness rating",
          
        },
        {
          code: 251897005,
          display: "Chest pain rating",
          
        },
        {
          code: 254292007,
          display: "Tumor staging",
          
        },
        {
          code: 254293002,
          display: "TNM tumor staging system",
          
        },
        {
          code: 254294008,
          display: "Tumor-node-metastasis (TNM) head and neck tumor staging",
          
        },
        {
          code: 254295009,
          display: "Tumor-node-metastasis (TNM) lip and oral cavity tumor staging",
          
        },
        {
          code: 254296005,
          display: "Tumor-node-metastasis (TNM) oropharynx tumor staging",
          
        },
        {
          code: 254297001,
          display: "Tumor-node-metastasis (TNM) nasopharynx tumor staging",
          
        },
        {
          code: 254298006,
          display: "Tumor-node-metastasis (TNM) hypopharynx tumor staging",
          
        },
        {
          code: 254299003,
          display: "Tumor-node-metastasis (TNM) supraglottic larynx tumor staging",
          
        },
        {
          code: 254300006,
          display: "Tumor-node-metastasis (TNM) glottic larynx tumor staging",
          
        },
        {
          code: 254301005,
          display: "Tumor-node-metastasis (TNM) subglottic larynx tumor staging",
          
        },
        {
          code: 254302003,
          display: "Tumor-node-metastasis (TNM) maxillary sinus tumor staging",
          
        },
        {
          code: 254303008,
          display: "Tumor-node-metastasis (TNM) salivary glands tumor staging",
          
        },
        {
          code: 254304002,
          display: "Tumor-node-metastasis (TNM) thyroid gland tumor staging",
          
        },
        {
          code: 254305001,
          display: "Tumor-node-metastasis (TNM) digestive system tumor staging",
          
        },
        {
          code: 254306000,
          display: "Tumor-node-metastasis (TNM) esophagus tumor staging",
          
        },
        {
          code: 254307009,
          display: "Tumor-node-metastasis (TNM) stomach tumor staging",
          
        },
        {
          code: 254309007,
          display: "Tumor-node-metastasis (TNM) Small intestine tumor staging",
          
        },
        {
          code: 254310002,
          display: "Tumor-node-metastasis (TNM) Colon and rectum tumor staging",
          
        },
        {
          code: 254311003,
          display: "Tumor-node-metastasis (TNM) anal canal tumor staging",
          
        },
        {
          code: 254312005,
          display: "Tumor-node-metastasis (TNM) liver tumor staging",
          
        },
        {
          code: 254313000,
          display: "Tumor-node-metastasis (TNM) gallbladder tumor staging",
          
        },
        {
          code: 254314006,
          display: "Tumor-node-metastasis (TNM) extrahepatic bile ducts tumor staging",
          
        },
        {
          code: 254315007,
          display: "Tumor-node-metastasis (TNM) ampulla of vater tumor staging",
          
        },
        {
          code: 254316008,
          display: "Tumor-node-metastasis (TNM) pancreas tumor staging",
          
        },
        {
          code: 254317004,
          display: "Tumor-node-metastasis (TNM) lung and pleural tumor staging",
          
        },
        {
          code: 254318009,
          display: "Tumor-node-metastasis (TNM) lung tumor staging",
          
        },
        {
          code: 254319001,
          display: "Tumor-node-metastasis (TNM) pleural mesothelioma tumor staging",
          
        },
        {
          code: 254320007,
          display: "Tumor-node-metastasis (TNM) bone and soft tissue tumor staging",
          
        },
        {
          code: 254321006,
          display: "Tumor-node-metastasis (TNM) bone tumor staging",
          
        },
        {
          code: 254322004,
          display: "Tumor-node-metastasis (TNM) soft tissues tumor staging",
          
        },
        {
          code: 254323009,
          display: "Tumor-node-metastasis (TNM) skin tumor staging",
          
        },
        {
          code: 254324003,
          display: "Tumor-node-metastasis (TNM) carcinoma of skin tumor staging",
          
        },
        {
          code: 254325002,
          display: "Tumor-node-metastasis (TNM) malignant melanoma of skin staging",
          
        },
        {
          code: 254326001,
          display: "Tumor-node-metastasis (TNM) breast tumor staging",
          
        },
        {
          code: 254327005,
          display: "Tumor-node-metastasis (TNM) gynecological tumor staging",
          
        },
        {
          code: 254328000,
          display: "Tumor-node-metastasis (TNM) vulva tumor staging",
          
        },
        {
          code: 254329008,
          display: "Tumor-node-metastasis (TNM) vaginal tumor staging",
          
        },
        {
          code: 254330003,
          display: "Tumor-node-metastasis (TNM) cervix uteri tumor staging",
          
        },
        {
          code: 254331004,
          display: "Tumor-node-metastasis (TNM) corpus uteri tumor staging",
          
        },
        {
          code: 254332006,
          display: "Tumor-node-metastasis (TNM) ovary tumor staging",
          
        },
        {
          code: 254333001,
          display: "Tumor-node-metastasis (TNM) urological tumor staging",
          
        },
        {
          code: 254334007,
          display: "Tumor-node-metastasis (TNM) penis tumor staging",
          
        },
        {
          code: 254335008,
          display: "Tumor-node-metastasis (TNM) Prostate tumor staging",
          
        },
        {
          code: 254336009,
          display: "Tumor-node-metastasis (TNM) testis tumor staging",
          
        },
        {
          code: 254337000,
          display: "Tumor-node-metastasis (TNM) kidney tumor staging",
          
        },
        {
          code: 254338005,
          display: "Tumor-node-metastasis (TNM) renal pelvis and ureter tumor staging",
          
        },
        {
          code: 254339002,
          display: "Tumor-node-metastasis (TNM) urinary bladder tumor staging",
          
        },
        {
          code: 254340000,
          display: "Tumor-node-metastasis (TNM) urethra tumor staging",
          
        },
        {
          code: 254341001,
          display: "Tumor-node-metastasis (TNM) ophthalmic tumor staging",
          
        },
        {
          code: 254342008,
          display: "Tumor-node-metastasis (TNM) carcinoma of eyelid staging",
          
        },
        {
          code: 254343003,
          display: "Tumor-node-metastasis (TNM) malignant melanoma of eyelid staging",
          
        },
        {
          code: 254344009,
          display: "Tumor-node-metastasis (TNM) carcinoma of conjunctiva staging",
          
        },
        {
          code: 254345005,
          display: "Tumor-node-metastasis (TNM) malignant melanoma of conjunctiva staging",
          
        },
        {
          code: 254346006,
          display: "Tumor-node-metastasis (TNM) malignant melanoma of uvea staging",
          
        },
        {
          code: 254347002,
          display: "Tumor-node-metastasis (TNM) malignant melanoma of iris staging",
          
        },
        {
          code: 254348007,
          display: "Tumor-node-metastasis (TNM) malignant melanoma of ciliary body staging",
          
        },
        {
          code: 254349004,
          display: "Tumor-node-metastasis (TNM) malignant melanoma of choroid staging",
          
        },
        {
          code: 254350004,
          display: "Tumor-node-metastasis (TNM) retinoblastoma staging",
          
        },
        {
          code: 254351000,
          display: "Tumor-node-metastasis (TNM) sarcoma of orbit staging",
          
        },
        {
          code: 254352007,
          display: "Tumor-node-metastasis (TNM) lacrimal gland carcinoma staging",
          
        },
        {
          code: 254353002,
          display: "Tumor-node-metastasis (TNM) brain tumor staging",
          
        },
        {
          code: 254354008,
          display: "Tumor-node-metastasis (TNM) Hodgkin's disease staging",
          
        },
        {
          code: 254355009,
          display: "Tumor-node-metastasis (TNM) non-Hodgkin's lymphoma staging",
          
        },
        {
          code: 254356005,
          display: "Tumor-node-metastasis (TNM) pediatric tumor staging",
          
        },
        {
          code: 254357001,
          display: "Tumor-node-metastasis (TNM) Wilms' tumor staging",
          
        },
        {
          code: 254358006,
          display: "Tumor-node-metastasis (TNM) neuroblastoma staging",
          
        },
        {
          code: 254359003,
          display: "Tumor-node-metastasis (TNM) soft tissue sarcoma staging",
          
        },
        {
          code: 254360008,
          display: "Dukes staging system",
          
        },
        {
          code: 254361007,
          display: "Astler-Coller staging system",
          
        },
        {
          code: 254362000,
          display: "Modified Astler-Coller staging system",
          
        },
        {
          code: 254363005,
          display: "International neuroblastoma staging system",
          
        },
        {
          code: 254364004,
          display: "NWTS - National Wilms' tumor study staging system",
          
        },
        {
          code: 254365003,
          display: "Siopel liver staging system",
          
        },
        {
          code: 254366002,
          display: "Stannard staging system for retinoblastoma",
          
        },
        {
          code: 254368001,
          display: "United Kingdom children's cancer study group central nervous system tumor staging system",
          
        },
        {
          code: 254370005,
          display: "St Jude malignant histiocytosis tumor staging system",
          
        },
        {
          code: 254371009,
          display: "St Jude non-Hodgkin lymphoma staging system",
          
        },
        {
          code: 254372002,
          display: "Ann Arbor lymphoma staging system",
          
        },
        {
          code: 254373007,
          display: "Ann Arbor Hodgkin disease tumor staging system",
          
        },
        {
          code: 254374001,
          display: "Ann Arbor non-Hodgkin lymphoma tumor staging system",
          
        },
        {
          code: 254375000,
          display: "Cotswolds Hodgkin disease tumor staging system",
          
        },
        {
          code: 254376004,
          display: "Testicular tumor staging systems",
          
        },
        {
          code: 254378003,
          display: "Walter Reed testicular tumor staging system",
          
        },
        {
          code: 254379006,
          display: "Indiana University testicular tumor staging system",
          
        },
        {
          code: 254380009,
          display: "Marshall Modification of Jewett-Strong staging system for urinary bladder tumor",
          
        },
        {
          code: 254381008,
          display: "American Urological Association staging system for prostate cancer",
          
        },
        {
          code: 254382001,
          display: "Trophoblastic malignancy staging system",
          
        },
        {
          code: 254383006,
          display: "FIGO staging system of gynecological malignancy",
          
        },
        {
          code: 254384000,
          display: "FIGO Vaginal tumor staging system",
          
        },
        {
          code: 254385004,
          display: "FIGO uterine tumor staging system",
          
        },
        {
          code: 254386003,
          display: "FIGO ovarian tumor staging system",
          
        },
        {
          code: 254387007,
          display: "HIV - Human immunodeficiency virus infection classification systems",
          
        },
        {
          code: 258232002,
          display: "Cancer staging",
          
        },
        {
          code: 258233007,
          display: "Generic tumor staging descriptor",
          
        },
        {
          code: 258234001,
          display: "Tumor-node-metastasis (TNM) tumor staging classifications",
          
        },
        {
          code: 258235000,
          display: "International Union Against Cancer (UICC)",
          
        },
        {
          code: 258236004,
          display: "American Joint Committee on Cancer (AJCC)",
          
        },
        {
          code: 258244004,
          display: "G status",
          
        },
        {
          code: 258246002,
          display: "L status",
          
        },
        {
          code: 258247006,
          display: "V status",
          
        },
        {
          code: 258257007,
          display: "Additional tumor staging descriptor",
          
        },
        {
          code: 258258002,
          display: "(f)",
          
        },
        {
          code: 258259005,
          display: "is",
          
        },
        {
          code: 258260000,
          display: "(d)",
          
        },
        {
          code: 258267002,
          display: "Generic tumor risk status stages",
          
        },
        {
          code: 258268007,
          display: "Low risk tumor",
          
        },
        {
          code: 258269004,
          display: "Medium risk tumor",
          
        },
        {
          code: 258270003,
          display: "High risk tumor",
          
        },
        {
          code: 258271004,
          display: "Specific tumor staging descriptor",
          
        },
        {
          code: 258272006,
          display: "Liver tumor staging descriptor",
          
        },
        {
          code: 258273001,
          display: "Liver tumor size index",
          
        },
        {
          code: 258276009,
          display: "Timing of liver tumor staging",
          
        },
        {
          code: 258279002,
          display: "Lymphoma staging symptom status values",
          
        },
        {
          code: 258280004,
          display: "Lymphomatous extranodal involvement status values",
          
        },
        {
          code: 258281000,
          display: "Spleen-positive minimal lymphomatous extranodal involvement",
          
        },
        {
          code: 258282007,
          display: "Spleen-positive extensive lymphomatous extranodal involvement",
          
        },
        {
          code: 258283002,
          display: "Lymphomatous nodal involvement",
          
        },
        {
          code: 258284008,
          display: "Stannards retinoblastoma stages",
          
        },
        {
          code: 258285009,
          display: "Optic nerve tumor invasion status in retinoblastoma staging",
          
        },
        {
          code: 258286005,
          display: "Choroidal tumor invasion status in retinoblastoma staging",
          
        },
        {
          code: 258292004,
          display: "Lymph nodal tumor invasion status in retinoblastoma staging",
          
        },
        {
          code: 258293009,
          display: "Brain tumor invasion status in retinoblastoma staging",
          
        },
        {
          code: 258301001,
          display: "Langerhans cell histiocytosis stage",
          
        },
        {
          code: 258302008,
          display: "Number of organ systems involved with Langerhans cell histiocytosis",
          
        },
        {
          code: 258303003,
          display: "Single system involvement",
          
        },
        {
          code: 258304009,
          display: "Multisystem involvement",
          
        },
        {
          code: 258305005,
          display: "Organ failure due to Langerhans cell histiocytosis",
          
        },
        {
          code: 258306006,
          display: "Vital organ failure",
          
        },
        {
          code: 258307002,
          display: "Non-vital organ failure",
          
        },
        {
          code: 258309004,
          display: "Generic lymph node tumor invasion status stage",
          
        },
        {
          code: 258310009,
          display: "Neck node tumor involvement",
          
        },
        {
          code: 258311008,
          display: "M+",
          
        },
        {
          code: 258312001,
          display: "Axillary lymph node level",
          
        },
        {
          code: 258313006,
          display: "Level I",
          
        },
        {
          code: 258314000,
          display: "Midaxilla",
          
        },
        {
          code: 258315004,
          display: "Level III",
          
        },
        {
          code: 258316003,
          display: "Retroperitoneal lymph node tumor invasion status",
          
        },
        {
          code: 258318002,
          display: "Generic anatomical site tumor invasion status",
          
        },
        {
          code: 258319005,
          display: "Lung involvement stages",
          
        },
        {
          code: 258320004,
          display: "Lung stage L2",
          
        },
        {
          code: 258321000,
          display: "Lung stage L3",
          
        },
        {
          code: 258322007,
          display: "H+",
          
        },
        {
          code: 258323002,
          display: "Liver sectors",
          
        },
        {
          code: 258324008,
          display: "Liver sector 1",
          
        },
        {
          code: 258325009,
          display: "Liver sector 2",
          
        },
        {
          code: 258326005,
          display: "Liver sector 3",
          
        },
        {
          code: 258327001,
          display: "Liver sector 4",
          
        },
        {
          code: 258328006,
          display: "Markers for liver tumor staging",
          
        },
        {
          code: 261663004,
          display: "Tumor stage Ta",
          
        },
        {
          code: 261731003,
          display: "Central nervous system (CNS) metastases",
          
        },
        {
          code: 261789009,
          display: "Extra central nervous system metastases",
          
        },
        {
          code: 261985008,
          display: "No metastases",
          
        },
        {
          code: 263487004,
          display: "Borg scale",
          
        },
        {
          code: 263638005,
          display: "Endometriosis classification of American Fertility Society",
          
        },
        {
          code: 273249006,
          display: "Assessment scales",
          
        },
        {
          code: 273251005,
          display: "Aachen aphasia test",
          
        },
        {
          code: 273252003,
          display: "ABC chart",
          
        },
        {
          code: 273253008,
          display: "ABC test for movement",
          
        },
        {
          code: 273254002,
          display: "AIS - Abbreviated injury scale",
          
        },
        {
          code: 273255001,
          display: "Abbreviated mental test",
          
        },
        {
          code: 273256000,
          display: "AIMS - Abnormal involuntary movement scale",
          
        },
        {
          code: 273257009,
          display: "Acute physiology and chronic health evaluation",
          
        },
        {
          code: 273258004,
          display: "APACHE II - Acute physiology and chronic health evaluation II",
          
        },
        {
          code: 273259007,
          display: "Acute physiology and chronic health evaluation III",
          
        },
        {
          code: 273260002,
          display: "Addiction severity index",
          
        },
        {
          code: 273261003,
          display: "Adult personality rating schedule",
          
        },
        {
          code: 273262005,
          display: "ABS - Affect balance scale",
          
        },
        {
          code: 273263000,
          display: "Acquired immunodeficiency syndrome (AIDS) risk behavior knowledge test",
          
        },
        {
          code: 273264006,
          display: "ADS - Alcohol dependence scale",
          
        },
        {
          code: 273265007,
          display: "Alcohol use disorders identification test",
          
        },
        {
          code: 273266008,
          display: "Alcohol use inventory",
          
        },
        {
          code: 273267004,
          display: "Allen cognitive level screening tool",
          
        },
        {
          code: 273268009,
          display: "Allen cognitive performance test",
          
        },
        {
          code: 273269001,
          display: "Alzheimer disease assessment scale",
          
        },
        {
          code: 273270000,
          display: "American Society of Anesthesiologists physical status classification",
          
        },
        {
          code: 273271001,
          display: "Amsterdam-Nijmegen Everyday Language Test",
          
        },
        {
          code: 273272008,
          display: "Anomalous sentence repetition test - Weeks",
          
        },
        {
          code: 273273003,
          display: "Anomalous sentence test - Kopelman",
          
        },
        {
          code: 273274009,
          display: "Anorexic attitudes questionnaire",
          
        },
        {
          code: 273275005,
          display: "ABS - Anorexic behavior scales",
          
        },
        {
          code: 273276006,
          display: "Aphasia language performance scales",
          
        },
        {
          code: 273277002,
          display: "Whurr - Aphasia screening test",
          
        },
        {
          code: 273279004,
          display: "Apraxia battery for adults",
          
        },
        {
          code: 273280001,
          display: "Arizona battery for communication disorders of dementia",
          
        },
        {
          code: 273281002,
          display: "AIMS I - Arthritis impact measurement scale I",
          
        },
        {
          code: 273282009,
          display: "Arthritis impact measurement scale II",
          
        },
        {
          code: 273283004,
          display: "ASEPSIS score for wound infection",
          
        },
        {
          code: 273284005,
          display: "Ashworth assessment scale",
          
        },
        {
          code: 273285006,
          display: "Assessing reading difficulties",
          
        },
        {
          code: 273286007,
          display: "Assessment and therapy program for dysfluent children",
          
        },
        {
          code: 273287003,
          display: "Assessment of intelligibility",
          
        },
        {
          code: 273288008,
          display: "Assessment of motor and process skills",
          
        },
        {
          code: 273289000,
          display: "AOF - Assessment of occupational function",
          
        },
        {
          code: 273290009,
          display: "Assessment protocol of pragmatic linguistic skills",
          
        },
        {
          code: 273291008,
          display: "Aston index",
          
        },
        {
          code: 273292001,
          display: "Attributional style questionnaire",
          
        },
        {
          code: 273293006,
          display: "Auditory comprehension test for sentences",
          
        },
        {
          code: 273294000,
          display: "Augmentative communication profile",
          
        },
        {
          code: 273295004,
          display: "Autistic features checklist",
          
        },
        {
          code: 273296003,
          display: "Autobiographical memory interview",
          
        },
        {
          code: 273298002,
          display: "Bamford Kowal and Bench non-picture related",
          
        },
        {
          code: 273299005,
          display: "BKBPR - Bamford Kowal and Bench picture related",
          
        },
        {
          code: 273300002,
          display: "Bangor dyslexia test",
          
        },
        {
          code: 273301003,
          display: "Bankson language test",
          
        },
        {
          code: 273302005,
          display: "Barthel index",
          
        },
        {
          code: 273305007,
          display: "Bayley scale of infant development",
          
        },
        {
          code: 273306008,
          display: "Beck depression inventory",
          
        },
        {
          code: 273307004,
          display: "Beck anxiety standardized rating scale",
          
        },
        {
          code: 273308009,
          display: "BEST - Bedside evaluation and screening test of aphasia",
          
        },
        {
          code: 273309001,
          display: "Beery-Buktenica test of visual motor integration",
          
        },
        {
          code: 273310006,
          display: "Behavior and mood disturbance scale",
          
        },
        {
          code: 273311005,
          display: "Behavior assessment battery",
          
        },
        {
          code: 273312003,
          display: "Behavior problem checklist",
          
        },
        {
          code: 273313008,
          display: "Behavior rating scale",
          
        },
        {
          code: 273314002,
          display: "Behavioral inattention test",
          
        },
        {
          code: 273315001,
          display: "BOS - Behavioral observation schedule",
          
        },
        {
          code: 273316000,
          display: "Behavioral screening questionnaire",
          
        },
        {
          code: 273317009,
          display: "Bennett test of manual dexterity",
          
        },
        {
          code: 273319007,
          display: "Bexley-Maudsley automated psychological screening",
          
        },
        {
          code: 273320001,
          display: "Binge eating scale",
          
        },
        {
          code: 273321002,
          display: "BORB - Birmingham object recognition battery",
          
        },
        {
          code: 273322009,
          display: "Blakely dyspraxia assessment",
          
        },
        {
          code: 273323004,
          display: "Blessed dementia rating scale",
          
        },
        {
          code: 273324005,
          display: "Blissymbols test",
          
        },
        {
          code: 273325006,
          display: "Body shape questionnaire",
          
        },
        {
          code: 273326007,
          display: "Boehm test of basic concepts",
          
        },
        {
          code: 273327003,
          display: "Booker heterotopic ossification score",
          
        },
        {
          code: 273328008,
          display: "Boston aphasia scale",
          
        },
        {
          code: 273329000,
          display: "Boston diagnostic aphasia examination",
          
        },
        {
          code: 273330005,
          display: "Boston naming test",
          
        },
        {
          code: 273331009,
          display: "Bracken test of basic concept scale",
          
        },
        {
          code: 273332002,
          display: "Brief activities of daily living",
          
        },
        {
          code: 273333007,
          display: "BDRS - Brief depression rating scale",
          
        },
        {
          code: 273334001,
          display: "Bristol language assessment scale",
          
        },
        {
          code: 273335000,
          display: "British ability scales",
          
        },
        {
          code: 273336004,
          display: "BASR - British ability scales - revised",
          
        },
        {
          code: 273337008,
          display: "British ability scales reading test",
          
        },
        {
          code: 273338003,
          display: "BAS - British ability scales spelling test",
          
        },
        {
          code: 273339006,
          display: "British isles lupus assessment group score",
          
        },
        {
          code: 273341007,
          display: "Bryant and Bradley rhyming task",
          
        },
        {
          code: 273342000,
          display: "Buffalo assessment profile - Wilson",
          
        },
        {
          code: 273343005,
          display: "Bulimia test",
          
        },
        {
          code: 273344004,
          display: "Bulimic investigation test - Edinburgh",
          
        },
        {
          code: 273345003,
          display: "Bus story",
          
        },
        {
          code: 273347006,
          display: "Cage questionnaire",
          
        },
        {
          code: 273348001,
          display: "California personality inventory",
          
        },
        {
          code: 273349009,
          display: "Callier-Azusa scale",
          
        },
        {
          code: 273350009,
          display: "Camberwell assessment for the needs of the elderly",
          
        },
        {
          code: 273351008,
          display: "CAB - Cambridge apraxia battery",
          
        },
        {
          code: 273352001,
          display: "Cantril ladder assessment",
          
        },
        {
          code: 273353006,
          display: "CELI - Carrow elicited language inventory",
          
        },
        {
          code: 273354000,
          display: "Carrow screening test of auditory comprehension",
          
        },
        {
          code: 273355004,
          display: "Chailey Heritage lying assessment",
          
        },
        {
          code: 273356003,
          display: "Chailey Heritage seating assessment",
          
        },
        {
          code: 273357007,
          display: "Checklist of communicative competence",
          
        },
        {
          code: 273358002,
          display: "Checklist of conversational abilities",
          
        },
        {
          code: 273359005,
          display: "Checklist of listening behaviors",
          
        },
        {
          code: 273360000,
          display: "OT - Chessington occupational therapy neurological assessment battery",
          
        },
        {
          code: 273361001,
          display: "Child assessment schedule",
          
        },
        {
          code: 273362008,
          display: "CDS - Child depression scale",
          
        },
        {
          code: 273363003,
          display: "Children's coma scale",
          
        },
        {
          code: 273364009,
          display: "Crohn disease activity index",
          
        },
        {
          code: 273365005,
          display: "CAPE - Clifton assessment procedures for the elderly",
          
        },
        {
          code: 273366006,
          display: "Clinical anxiety scale",
          
        },
        {
          code: 273367002,
          display: "Clinical dementia rating scale",
          
        },
        {
          code: 273368007,
          display: "CEDRI - Clinical eating disorder rating instrument",
          
        },
        {
          code: 273369004,
          display: "Clinical evaluation of language function revised",
          
        },
        {
          code: 273370003,
          display: "Clinical evaluation of language function revised - screening test",
          
        },
        {
          code: 273371004,
          display: "Clinical evaluation of language function revised - preschool test",
          
        },
        {
          code: 273372006,
          display: "Clinical observation of motor and postural skills",
          
        },
        {
          code: 273373001,
          display: "CAAP - Cocaine abuse assessment profile",
          
        },
        {
          code: 273374007,
          display: "Cognitions questionnaire",
          
        },
        {
          code: 273375008,
          display: "Cognitive failures questionnaire",
          
        },
        {
          code: 273376009,
          display: "CASP - Communication assessment profile for adults with a mental handicap",
          
        },
        {
          code: 273377000,
          display: "Communicative abilities in daily living",
          
        },
        {
          code: 273378005,
          display: "CIDI - Composite international diagnostic interview",
          
        },
        {
          code: 273379002,
          display: "Comprehensive drinker profile",
          
        },
        {
          code: 273380004,
          display: "CRIS - Comprehensive injury scale",
          
        },
        {
          code: 273381000,
          display: "Comprehensive occupational therapy evaluation scale",
          
        },
        {
          code: 273382007,
          display: "CES - Compulsive eating scale",
          
        },
        {
          code: 273383002,
          display: "Constant and Murley shoulder assessment score",
          
        },
        {
          code: 273384008,
          display: "Consumer satisfaction questionnaire",
          
        },
        {
          code: 273385009,
          display: "Co-op function charts",
          
        },
        {
          code: 273386005,
          display: "PFCT - Cooper personalized fluency control therapy",
          
        },
        {
          code: 273387001,
          display: "Coping responses inventory",
          
        },
        {
          code: 273388006,
          display: "Crichton vocabulary scale",
          
        },
        {
          code: 273389003,
          display: "Daily activities questionnaire",
          
        },
        {
          code: 273390007,
          display: "Dallas pain questionnaire",
          
        },
        {
          code: 273391006,
          display: "Daniels and Diack reading tests",
          
        },
        {
          code: 273392004,
          display: "Daniels and Diack graded word spelling test",
          
        },
        {
          code: 273393009,
          display: "De Gangi-Berk sensory functioning in infants",
          
        },
        {
          code: 273394003,
          display: "Delighted-terrible faces scale",
          
        },
        {
          code: 273395002,
          display: "Denver development scale",
          
        },
        {
          code: 273396001,
          display: "Denver developmental subscale - gross motor",
          
        },
        {
          code: 273397005,
          display: "Denver developmental subscale - language",
          
        },
        {
          code: 273398000,
          display: "Denver developmental subscale - personal/social",
          
        },
        {
          code: 273399008,
          display: "Denver developmental subscale - fine motor/adaptive",
          
        },
        {
          code: 273400001,
          display: "Denver development scale screening test",
          
        },
        {
          code: 273401002,
          display: "Denver development scale screening test - schedule for growing skills",
          
        },
        {
          code: 273402009,
          display: "Depression anxiety scale",
          
        },
        {
          code: 273403004,
          display: "Depression self rating scale",
          
        },
        {
          code: 273408008,
          display: "Dermatology life quality index",
          
        },
        {
          code: 273409000,
          display: "DSFI - Derogatis sexual functioning inventory",
          
        },
        {
          code: 273411009,
          display: "Diabetes clinic satisfaction questionnaire",
          
        },
        {
          code: 273412002,
          display: "DTSQ - Diabetes treatment satisfaction questionnaire",
          
        },
        {
          code: 273413007,
          display: "Diabetes wellbeing questionnaire",
          
        },
        {
          code: 273414001,
          display: "DICA - Diagnostic interview for children and adolescents",
          
        },
        {
          code: 273415000,
          display: "Diagnostic interview schedule",
          
        },
        {
          code: 273416004,
          display: "DSDT - Diagnostic speech discrimination test",
          
        },
        {
          code: 273417008,
          display: "Diagnostic survey for eating disorders",
          
        },
        {
          code: 273418003,
          display: "DINE - Dietary instrument for nutrition education questionnaire",
          
        },
        {
          code: 273419006,
          display: "Digit sequence learning",
          
        },
        {
          code: 273420000,
          display: "Disability assessment schedule",
          
        },
        {
          code: 273421001,
          display: "Disability rating scale",
          
        },
        {
          code: 273422008,
          display: "Discourse abilities profile",
          
        },
        {
          code: 273423003,
          display: "Dol scale",
          
        },
        {
          code: 273424009,
          display: "Doyle articular index",
          
        },
        {
          code: 273425005,
          display: "Drinking problem scale",
          
        },
        {
          code: 273426006,
          display: "DAST - Drug abuse screening test",
          
        },
        {
          code: 273427002,
          display: "Dubowitz score",
          
        },
        {
          code: 273428007,
          display: "Duke UNC health profile",
          
        },
        {
          code: 273429004,
          display: "Dundee cardiovascular risk score",
          
        },
        {
          code: 273430009,
          display: "Durrell test of listening comprehension",
          
        },
        {
          code: 273431008,
          display: "Eakin index",
          
        },
        {
          code: 273432001,
          display: "Eating attitudes test",
          
        },
        {
          code: 273433006,
          display: "EAT 26 - Abbreviated eating attitudes test",
          
        },
        {
          code: 273434000,
          display: "EBRS - Eating behavior rating scale",
          
        },
        {
          code: 273435004,
          display: "Eating disorders inventory",
          
        },
        {
          code: 273436003,
          display: "Eating inventory",
          
        },
        {
          code: 273437007,
          display: "Eastern Cooperative Oncology Group (ECOG) scale for physical assessment",
          
        },
        {
          code: 273438002,
          display: "Edinburgh articulation test",
          
        },
        {
          code: 273439005,
          display: "EFCP - Edinburgh functional communication profile",
          
        },
        {
          code: 273440007,
          display: "Revised Edinburgh functional communication profile",
          
        },
        {
          code: 273441006,
          display: "Edinburgh postnatal depression scale",
          
        },
        {
          code: 273442004,
          display: "Edmans ADL index - Edmans activities of daily living index",
          
        },
        {
          code: 273443009,
          display: "Elia normogram",
          
        },
        {
          code: 273444003,
          display: "British picture vocabulary scale",
          
        },
        {
          code: 273445002,
          display: "Enthesitis index",
          
        },
        {
          code: 273446001,
          display: "European Organization for Research and Treatment of Cancer (EORTC) - Quality of life questionnaire",
          
        },
        {
          code: 273447005,
          display: "EuroQOL",
          
        },
        {
          code: 273448000,
          display: "Extended activities of daily living scale",
          
        },
        {
          code: 273449008,
          display: "EPI - Eysenck personality inventory",
          
        },
        {
          code: 273450008,
          display: "Facial recognition test",
          
        },
        {
          code: 273451007,
          display: "Fagerstrom tolerance questionnaire",
          
        },
        {
          code: 273452000,
          display: "RTQ - Revised tolerance questionnaire",
          
        },
        {
          code: 273453005,
          display: "Fagerstrom test for nicotine dependence",
          
        },
        {
          code: 273454004,
          display: "Fear of acquired immunodeficiency syndrome scale",
          
        },
        {
          code: 273455003,
          display: "Fear survey schedule",
          
        },
        {
          code: 273456002,
          display: "Feeding assessment schedule",
          
        },
        {
          code: 273457006,
          display: "Feelings of fatness questionnaire",
          
        },
        {
          code: 273458001,
          display: "FTT - Finger tapping test",
          
        },
        {
          code: 273459009,
          display: "FIRST screening test",
          
        },
        {
          code: 273460004,
          display: "Frankel grading system for spinal cord injury",
          
        },
        {
          code: 273461000,
          display: "FAI - Frenchay activities index",
          
        },
        {
          code: 273462007,
          display: "Frenchay aphasia screening test",
          
        },
        {
          code: 273463002,
          display: "FDA - Frenchay dysarthria assessment",
          
        },
        {
          code: 273465009,
          display: "Fullerton language test for adolescents",
          
        },
        {
          code: 273466005,
          display: "Functional assessment measure",
          
        },
        {
          code: 273467001,
          display: "Functional communication assessment for physically handicapped children",
          
        },
        {
          code: 273468006,
          display: "Functional communication profile",
          
        },
        {
          code: 273469003,
          display: "FIM - Functional independence measure",
          
        },
        {
          code: 273470002,
          display: "Functional limitation profile",
          
        },
        {
          code: 273471003,
          display: "FMPS - Functional meal preparation scale",
          
        },
        {
          code: 273472005,
          display: "Functional status index",
          
        },
        {
          code: 273473000,
          display: "FSST - Fundamental speech skills test",
          
        },
        {
          code: 273474006,
          display: "Galveston orientation and amnesia test",
          
        },
        {
          code: 273475007,
          display: "Gathercole - non-word repetition task",
          
        },
        {
          code: 273477004,
          display: "General assessment of neurological impairment",
          
        },
        {
          code: 273478009,
          display: "General clerical test",
          
        },
        {
          code: 273479001,
          display: "General health questionnaire",
          
        },
        {
          code: 273480003,
          display: "GWBS - General wellbeing schedule",
          
        },
        {
          code: 273481004,
          display: "Geriatric depression scale",
          
        },
        {
          code: 273482006,
          display: "German test of wordfinding",
          
        },
        {
          code: 273483001,
          display: "Glasgow abbreviated mental test score",
          
        },
        {
          code: 273484007,
          display: "Glasgow outcome scale",
          
        },
        {
          code: 273485008,
          display: "Goldman cardiac risk index",
          
        },
        {
          code: 273486009,
          display: "Goldman Fristoe test",
          
        },
        {
          code: 273487000,
          display: "Golombrok-Rust inventory of sexual satisfaction",
          
        },
        {
          code: 273488005,
          display: "Goodenough draw-a-man test",
          
        },
        {
          code: 273489002,
          display: "Goodenough norms",
          
        },
        {
          code: 273490006,
          display: "Grade-Rough-Breathy-Asthenic-Strain (GRBAS) scale",
          
        },
        {
          code: 273492003,
          display: "Graded naming test",
          
        },
        {
          code: 273493008,
          display: "Graham-Kendall memory for designs test",
          
        },
        {
          code: 273494002,
          display: "Grammatical analysis of elicited language",
          
        },
        {
          code: 273495001,
          display: "Grammatical contrasts test",
          
        },
        {
          code: 273496000,
          display: "Gunzberg primary progress assessment chart of social development",
          
        },
        {
          code: 273497009,
          display: "Gunzberg progress assessment chart of social development number 1",
          
        },
        {
          code: 273498004,
          display: "Gunzberg progress assessment chart of social development number 2",
          
        },
        {
          code: 273499007,
          display: "Hachinski ischemia score",
          
        },
        {
          code: 273500003,
          display: "Hall and Baker rehabilitation evaluation",
          
        },
        {
          code: 273501004,
          display: "Halstead-Reitan battery",
          
        },
        {
          code: 273502006,
          display: "Hamb hip score",
          
        },
        {
          code: 273503001,
          display: "Hamilton rating scale for depression",
          
        },
        {
          code: 273504007,
          display: "Lorr's modified multidimensional scale for rating psychiatric patients",
          
        },
        {
          code: 273505008,
          display: "Hampshire assessment for living with others",
          
        },
        {
          code: 273507000,
          display: "Hanen early language program",
          
        },
        {
          code: 273508005,
          display: "Harvey and Bradshaw index",
          
        },
        {
          code: 273509002,
          display: "Hauser ambulatory categories",
          
        },
        {
          code: 273510007,
          display: "Health assessment questionnaire",
          
        },
        {
          code: 273511006,
          display: "MHAQ - Modified health assessment questionnaire",
          
        },
        {
          code: 273512004,
          display: "Healthcare assessment questionnaire - Sidney Benjamin",
          
        },
        {
          code: 273513009,
          display: "Health of the Nation Outcome Scale (generic version)",
          
        },
        {
          code: 273514003,
          display: "Health status index",
          
        },
        {
          code: 273515002,
          display: "Hearing handicap inventory for the elderly",
          
        },
        {
          code: 273516001,
          display: "HHS - Hearing handicap scale",
          
        },
        {
          code: 273517005,
          display: "Hidden figures test",
          
        },
        {
          code: 273520002,
          display: "Hopelessness scale",
          
        },
        {
          code: 273521003,
          display: "Hopkins symptom checklist",
          
        },
        {
          code: 273522005,
          display: "Hornsby articulation test",
          
        },
        {
          code: 273523000,
          display: "Hornsby test of language development",
          
        },
        {
          code: 273524006,
          display: "Hospital anxiety and depression scale",
          
        },
        {
          code: 273525007,
          display: "Hospital trauma index",
          
        },
        {
          code: 273526008,
          display: "Human interaction assessment",
          
        },
        {
          code: 273527004,
          display: "Illinois test of psycholinguistic abilities",
          
        },
        {
          code: 273528009,
          display: "IISI - Illness-injury severity index",
          
        },
        {
          code: 273529001,
          display: "Illness behavior questionnaire",
          
        },
        {
          code: 273530006,
          display: "Impact of event scale",
          
        },
        {
          code: 273531005,
          display: "Index of independence in activities of daily living",
          
        },
        {
          code: 273533008,
          display: "ISS - Injury severity score",
          
        },
        {
          code: 273534002,
          display: "Instrumental ADL",
          
        },
        {
          code: 273535001,
          display: "INREAL - Inter-reactive language analysis",
          
        },
        {
          code: 273536000,
          display: "Interaction checklist for augmentative communication",
          
        },
        {
          code: 273537009,
          display: "Interest checklist",
          
        },
        {
          code: 273538004,
          display: "IOWA low back rating scale",
          
        },
        {
          code: 273539007,
          display: "IOWA structured psychiatric interview",
          
        },
        {
          code: 273540009,
          display: "Ischemia score",
          
        },
        {
          code: 273542001,
          display: "Jarman index",
          
        },
        {
          code: 273543006,
          display: "Jebsen hand function test",
          
        },
        {
          code: 273544000,
          display: "Jones word order test",
          
        },
        {
          code: 273546003,
          display: "Karnofsky index",
          
        },
        {
          code: 273547007,
          display: "Katz activities of daily living",
          
        },
        {
          code: 273548002,
          display: "KASR - Katz adjustment scale - relatives form",
          
        },
        {
          code: 273549005,
          display: "Kendrick battery for detection of dementia in the elderly",
          
        },
        {
          code: 273550005,
          display: "Kenny index of ADL",
          
        },
        {
          code: 273551009,
          display: "Kielhofner role checklist",
          
        },
        {
          code: 273552002,
          display: "Kirwan Thompson articular index",
          
        },
        {
          code: 273553007,
          display: "Klein-Bell Activities of Daily Living scale",
          
        },
        {
          code: 273554001,
          display: "Kurtzke multiple sclerosis rating scale",
          
        },
        {
          code: 273555000,
          display: "LCS - Lambeth communication scale",
          
        },
        {
          code: 273556004,
          display: "Lambeth disability screening questionnaire",
          
        },
        {
          code: 273557008,
          display: "Lamh assessment checklist",
          
        },
        {
          code: 273558003,
          display: "Language assessment remediation and screening procedure",
          
        },
        {
          code: 273559006,
          display: "Lansbury articular index",
          
        },
        {
          code: 273560001,
          display: "Last six months of drinking questionnaire",
          
        },
        {
          code: 273561002,
          display: "Learning development aids - handwriting assessment",
          
        },
        {
          code: 273562009,
          display: "Leeds scales for the self-assessment of anxiety and depression",
          
        },
        {
          code: 273564005,
          display: "Leiter international performance scale",
          
        },
        {
          code: 273565006,
          display: "Lequesne index",
          
        },
        {
          code: 273566007,
          display: "Lequesne index - hip",
          
        },
        {
          code: 273567003,
          display: "Lequesne index - knee",
          
        },
        {
          code: 273568008,
          display: "Letter cancelation test",
          
        },
        {
          code: 273569000,
          display: "Life events and difficulties scale",
          
        },
        {
          code: 273570004,
          display: "Life events inventory",
          
        },
        {
          code: 273571000,
          display: "Life satisfaction index",
          
        },
        {
          code: 273572007,
          display: "LSIA - Life satisfaction index A",
          
        },
        {
          code: 273573002,
          display: "Life satisfaction index B",
          
        },
        {
          code: 273574008,
          display: "LSIZ - Life satisfaction index Z",
          
        },
        {
          code: 273575009,
          display: "Likert scale",
          
        },
        {
          code: 273576005,
          display: "Lincoln rehabilitation assessment",
          
        },
        {
          code: 273577001,
          display: "Lindamood auditory conceptualization test",
          
        },
        {
          code: 273578006,
          display: "Lowenstein occupational therapy cognitive assessment",
          
        },
        {
          code: 273580000,
          display: "London hospital pain chart assessment",
          
        },
        {
          code: 273581001,
          display: "Luria neuropsychological battery",
          
        },
        {
          code: 273582008,
          display: "MacAndrew scale",
          
        },
        {
          code: 273583003,
          display: "MacMillan reading test",
          
        },
        {
          code: 273584009,
          display: "Make-a-picture story test",
          
        },
        {
          code: 273585005,
          display: "Mallampati scale",
          
        },
        {
          code: 273586006,
          display: "Master questionnaire",
          
        },
        {
          code: 273587002,
          display: "Revised Master questionnaire",
          
        },
        {
          code: 273588007,
          display: "Matson assessment",
          
        },
        {
          code: 273589004,
          display: "McConkey score",
          
        },
        {
          code: 273590008,
          display: "McCormick miniature toy discrimination test",
          
        },
        {
          code: 273591007,
          display: "McCormick miniature toy discrimination test - automated",
          
        },
        {
          code: 273592000,
          display: "McCormick miniature toy discrimination test - manual",
          
        },
        {
          code: 273593005,
          display: "McGill pain chart questionnaire",
          
        },
        {
          code: 273594004,
          display: "MHIQ - McMaster health index questionnaire",
          
        },
        {
          code: 273595003,
          display: "McTears assessment of conversation",
          
        },
        {
          code: 273596002,
          display: "Medical outcomes study short form general health survey",
          
        },
        {
          code: 273597006,
          display: "Medical outcomes study short form general health survey - 36",
          
        },
        {
          code: 273598001,
          display: "MOS SF - 20 - Medical outcomes study short form general health survey - 20",
          
        },
        {
          code: 273599009,
          display: "Medical Research Council motor power scale",
          
        },
        {
          code: 273600007,
          display: "Medical Research Council questionnaire",
          
        },
        {
          code: 273601006,
          display: "Mental status questionnaire",
          
        },
        {
          code: 273602004,
          display: "Mental test quotient",
          
        },
        {
          code: 273603009,
          display: "Mental test score - long version",
          
        },
        {
          code: 273604003,
          display: "Merle d'Aubigne - Charnley hip score",
          
        },
        {
          code: 273608000,
          display: "Michigan alcoholism screening test",
          
        },
        {
          code: 273609008,
          display: "BMAST - Brief Michigan alcoholism screening test",
          
        },
        {
          code: 273610003,
          display: "Short Michigan alcoholism screening test",
          
        },
        {
          code: 273611004,
          display: "MEAMS - Middlesex elderly assessment of mental state",
          
        },
        {
          code: 273613001,
          display: "Midlands spelling test",
          
        },
        {
          code: 273614007,
          display: "Mill Hill vocabulary scale",
          
        },
        {
          code: 273615008,
          display: "Miller assessment for preschoolers",
          
        },
        {
          code: 273616009,
          display: "Milwaukee evaluation of daily living skills",
          
        },
        {
          code: 273617000,
          display: "Mini-mental state examination",
          
        },
        {
          code: 273619002,
          display: "Modified mini-mental state 3MS examination",
          
        },
        {
          code: 273621007,
          display: "Minnesota test for differential diagnosis of aphasia",
          
        },
        {
          code: 273622000,
          display: "Shortened Schuell - Shortened Minnesota test for differential diagnosis of aphasia",
          
        },
        {
          code: 273623005,
          display: "Modified card sorting test",
          
        },
        {
          code: 273624004,
          display: "MISS - Modified injury severity scale",
          
        },
        {
          code: 273625003,
          display: "Modified word learning test",
          
        },
        {
          code: 273626002,
          display: "Monterey fluency program",
          
        },
        {
          code: 273627006,
          display: "Mood adjective checklist",
          
        },
        {
          code: 273628001,
          display: "Morgan-Barry auditory discrimination and attention test",
          
        },
        {
          code: 273629009,
          display: "Morningside rehabilitation status scale",
          
        },
        {
          code: 273630004,
          display: "Mortality probability model",
          
        },
        {
          code: 273631000,
          display: "Mortality prediction model II",
          
        },
        {
          code: 273632007,
          display: "MFS - Motives for smoking scale",
          
        },
        {
          code: 273633002,
          display: "Motor assessment scale",
          
        },
        {
          code: 273634008,
          display: "Motricity index",
          
        },
        {
          code: 273635009,
          display: "Mount Wilga high level language screening assessment",
          
        },
        {
          code: 273636005,
          display: "Movement of upper limb evaluation",
          
        },
        {
          code: 273637001,
          display: "Multilevel informal language inventory",
          
        },
        {
          code: 273638006,
          display: "Multilingual aphasia examination",
          
        },
        {
          code: 273639003,
          display: "Munich alcoholism test",
          
        },
        {
          code: 273640001,
          display: "NART - National adult reading test",
          
        },
        {
          code: 273641002,
          display: "Neale analysis of reading ability",
          
        },
        {
          code: 273642009,
          display: "Nelson schedule of growing skills",
          
        },
        {
          code: 273643004,
          display: "Neurobehavioral cognitive status examination",
          
        },
        {
          code: 273644005,
          display: "Neuropsychological battery",
          
        },
        {
          code: 273645006,
          display: "Newcastle articulation test",
          
        },
        {
          code: 273646007,
          display: "Newcastle dyspraxia assessment",
          
        },
        {
          code: 273647003,
          display: "Newcastle phonology assessment",
          
        },
        {
          code: 273648008,
          display: "Nine hole peg test",
          
        },
        {
          code: 273649000,
          display: "Norris functional scale",
          
        },
        {
          code: 273650000,
          display: "Northwest syntax screening test",
          
        },
        {
          code: 273651001,
          display: "Northwick Park index of independence in activities of daily living",
          
        },
        {
          code: 273652008,
          display: "NHP - Nottingham health profile",
          
        },
        {
          code: 273654009,
          display: "Nuffield dyspraxia assessment",
          
        },
        {
          code: 273656006,
          display: "Object naming test",
          
        },
        {
          code: 273657002,
          display: "Occasions for smoking scale",
          
        },
        {
          code: 273658007,
          display: "Occupational case analysis interview and rating scale",
          
        },
        {
          code: 273659004,
          display: "Occupational performance history interview",
          
        },
        {
          code: 273660009,
          display: "Odstock hand assessment",
          
        },
        {
          code: 273661008,
          display: "Office of Population Census and Surveys (OPCS) disability scales",
          
        },
        {
          code: 273662001,
          display: "Office of Population Census and Surveys (OPCS) behavior disability scale",
          
        },
        {
          code: 273663006,
          display: "Office of Population Census and Surveys (OPCS) communication disability scale",
          
        },
        {
          code: 273664000,
          display: "Office of Population Census and Surveys (OPCS) consciousness disability scale",
          
        },
        {
          code: 273665004,
          display: "Office of Population Census and Surveys (OPCS) continence disability scale",
          
        },
        {
          code: 273666003,
          display: "Office of Population Census and Surveys (OPCS) dexterity disability scale",
          
        },
        {
          code: 273667007,
          display: "Office of Population Census and Surveys (OPCS) disfigurement disability scale",
          
        },
        {
          code: 273668002,
          display: "Office of Population Census and Surveys (OPCS) eating, drinking and digestion disability scale",
          
        },
        {
          code: 273669005,
          display: "Office of Population Census and Surveys (OPCS) hearing disability scale",
          
        },
        {
          code: 273670006,
          display: "Office of Population Census and Surveys (OPCS) intellectual functioning disability scale",
          
        },
        {
          code: 273671005,
          display: "Office of Population Census and Surveys (OPCS) locomotion disability scale",
          
        },
        {
          code: 273672003,
          display: "Office of Population Census and Surveys (OPCS) personal care disability scale",
          
        },
        {
          code: 273673008,
          display: "Office of Population Census and Surveys (OPCS) reaching and stretching disability scale",
          
        },
        {
          code: 273674002,
          display: "Office of Population Census and Surveys (OPCS) seeing disability scale",
          
        },
        {
          code: 273675001,
          display: "Oswestry disability index",
          
        },
        {
          code: 273676000,
          display: "Oswestry pain questionnaire",
          
        },
        {
          code: 273677009,
          display: "Oxford grading scale for muscle strength",
          
        },
        {
          code: 273680005,
          display: "Padua inventory",
          
        },
        {
          code: 273681009,
          display: "Pediatric clinical test of sensory integration and balance",
          
        },
        {
          code: 273682002,
          display: "Pediatric oral skills profile",
          
        },
        {
          code: 273683007,
          display: "PRISM - Pediatric risk of mortality",
          
        },
        {
          code: 273684001,
          display: "Pediatric trauma score",
          
        },
        {
          code: 273685000,
          display: "Pain diary",
          
        },
        {
          code: 273686004,
          display: "Pantomime test",
          
        },
        {
          code: 273687008,
          display: "Partners in augmentative communication training",
          
        },
        {
          code: 273688003,
          display: "Patient activity checklist",
          
        },
        {
          code: 273689006,
          display: "Patient satisfaction score",
          
        },
        {
          code: 273690002,
          display: "16PF - Personality factor questionnaire",
          
        },
        {
          code: 273691003,
          display: "Phonological Evaluation and Transcription of Audio-Visual Language (PETAL) speech assessment procedure",
          
        },
        {
          code: 273692005,
          display: "Peabody picture vocabulary test",
          
        },
        {
          code: 273693000,
          display: "PSI - Perceptions of stuttering inventory",
          
        },
        {
          code: 273694006,
          display: "Performance test of activities of daily living",
          
        },
        {
          code: 273695007,
          display: "Personality assessment schedule",
          
        },
        {
          code: 273696008,
          display: "Philadelphia geriatric center morale scale",
          
        },
        {
          code: 273697004,
          display: "Phonological assessment of child speech",
          
        },
        {
          code: 273699001,
          display: "PIP developmental charts",
          
        },
        {
          code: 273701001,
          display: "Picture pointing test",
          
        },
        {
          code: 273702008,
          display: "Porch index of communicative ability",
          
        },
        {
          code: 273703003,
          display: "PANSS - Positive and negative syndrome scale",
          
        },
        {
          code: 273704009,
          display: "Pragmatics profile",
          
        },
        {
          code: 273705005,
          display: "Pragmatics profile of early communication skills",
          
        },
        {
          code: 273706006,
          display: "Preschool behavior check list",
          
        },
        {
          code: 273707002,
          display: "Pre-school Boehm",
          
        },
        {
          code: 273709004,
          display: "Pre-speech assessment scale",
          
        },
        {
          code: 273711008,
          display: "Preschool language scale",
          
        },
        {
          code: 273712001,
          display: "Previous intelligence quotient assessment by pronunciation",
          
        },
        {
          code: 273713006,
          display: "Probability of death score",
          
        },
        {
          code: 273714000,
          display: "Problem oriented medical record",
          
        },
        {
          code: 273715004,
          display: "PRISM - Profile in semantics",
          
        },
        {
          code: 273716003,
          display: "Profile of communicative appropriateness",
          
        },
        {
          code: 273717007,
          display: "Profile of mood states",
          
        },
        {
          code: 273718002,
          display: "PALPA - Psycholinguistic assessments of language processing in aphasia",
          
        },
        {
          code: 273719005,
          display: "Psychological adjustment to illness scale",
          
        },
        {
          code: 273720004,
          display: "PULSES profile",
          
        },
        {
          code: 273721000,
          display: "Purdue pegboard scale",
          
        },
        {
          code: 273722007,
          display: "Pyramids and palm trees test",
          
        },
        {
          code: 273723002,
          display: "Tetraplegia index of function",
          
        },
        {
          code: 273724008,
          display: "QALYs - Quality adjusted life years",
          
        },
        {
          code: 273725009,
          display: "Quality of life scale",
          
        },
        {
          code: 273726005,
          display: "Quality of wellbeing scale",
          
        },
        {
          code: 273727001,
          display: "Rancho scale - levels of cognitive functioning",
          
        },
        {
          code: 273728006,
          display: "Rand functional limitations battery",
          
        },
        {
          code: 273729003,
          display: "Rankin scale",
          
        },
        {
          code: 273730008,
          display: "Rappaport disability rating scale",
          
        },
        {
          code: 273731007,
          display: "Rating communicative behavior in head injured adults",
          
        },
        {
          code: 273732000,
          display: "Ravens colored progressive matrices",
          
        },
        {
          code: 273733005,
          display: "Ravens standard progressive matrices",
          
        },
        {
          code: 273735003,
          display: "Read word discrimination test",
          
        },
        {
          code: 273736002,
          display: "Reading comprehension battery for aphasia",
          
        },
        {
          code: 273737006,
          display: "RFES - Reasons for eating scale",
          
        },
        {
          code: 273738001,
          display: "Reasons for smoking scale",
          
        },
        {
          code: 273739009,
          display: "Bzoch and League test",
          
        },
        {
          code: 273740006,
          display: "RMT - Recognition memory test",
          
        },
        {
          code: 273741005,
          display: "Relatives' stress scale",
          
        },
        {
          code: 273742003,
          display: "RI - Renal index",
          
        },
        {
          code: 273743008,
          display: "RAPT - Renfrew action picture test",
          
        },
        {
          code: 273744002,
          display: "Renfrew articulation test",
          
        },
        {
          code: 273745001,
          display: "Renfrew wordfinding",
          
        },
        {
          code: 273746000,
          display: "Repertory grid",
          
        },
        {
          code: 273747009,
          display: "Reporters tests",
          
        },
        {
          code: 273748004,
          display: "Resistance to change grid",
          
        },
        {
          code: 273749007,
          display: "Respiratory index",
          
        },
        {
          code: 273750007,
          display: "Restrained eating inventory",
          
        },
        {
          code: 273751006,
          display: "Revised Iowa scale for rating severity",
          
        },
        {
          code: 273752004,
          display: "Reynell developmental language scales",
          
        },
        {
          code: 273753009,
          display: "Reynell receptive language assessment",
          
        },
        {
          code: 273754003,
          display: "Reynell expressive language assessment",
          
        },
        {
          code: 273756001,
          display: "Reynell Zinkin language scale for the visually impaired",
          
        },
        {
          code: 273757005,
          display: "Right hemisphere battery",
          
        },
        {
          code: 273758000,
          display: "Ritchie articular index",
          
        },
        {
          code: 273759008,
          display: "Rivermead activities of daily living index",
          
        },
        {
          code: 273761004,
          display: "RBMT - Rivermead behavioral memory test",
          
        },
        {
          code: 273762006,
          display: "RMA - Rivermead motor assessment",
          
        },
        {
          code: 273763001,
          display: "Rivermead perceptual assessment battery",
          
        },
        {
          code: 273764007,
          display: "Robertson dysarthria assessment",
          
        },
        {
          code: 273765008,
          display: "Robertson dysarthria profile",
          
        },
        {
          code: 273766009,
          display: "Roehampton activities of daily living for amputees",
          
        },
        {
          code: 273767000,
          display: "Rose Summers pragmatic profile",
          
        },
        {
          code: 273768005,
          display: "Ross information processing assessment",
          
        },
        {
          code: 273769002,
          display: "Rosser classification of illness states",
          
        },
        {
          code: 273770001,
          display: "Roth and Spekman list of communicative intentions",
          
        },
        {
          code: 273771002,
          display: "Rotterdam symptom check list",
          
        },
        {
          code: 273772009,
          display: "Routine task inventory",
          
        },
        {
          code: 273774005,
          display: "Rutter behavior questionnaire",
          
        },
        {
          code: 273775006,
          display: "Rutter A scale",
          
        },
        {
          code: 273776007,
          display: "Rutter B scale",
          
        },
        {
          code: 273777003,
          display: "Rutter B2 scale",
          
        },
        {
          code: 273778008,
          display: "S scale Andrews and Cutler",
          
        },
        {
          code: 273779000,
          display: "Salford reading test",
          
        },
        {
          code: 273780002,
          display: "Samaritan orientation test",
          
        },
        {
          code: 273781003,
          display: "Sandwell bilingual comprehension test",
          
        },
        {
          code: 273782005,
          display: "Santa Clara valley medical center functional assessment measure",
          
        },
        {
          code: 273783000,
          display: "Savary Miller scale",
          
        },
        {
          code: 273784006,
          display: "Scale of early communication skills for hearing impaired children",
          
        },
        {
          code: 273785007,
          display: "Schwachmann score",
          
        },
        {
          code: 273786008,
          display: "Schedules for clinical assessment in neuropsychiatry",
          
        },
        {
          code: 273787004,
          display: "Schnijders Ooman test for deaf children",
          
        },
        {
          code: 273788009,
          display: "Schofield equation",
          
        },
        {
          code: 273789001,
          display: "Schonell graded word reading test",
          
        },
        {
          code: 273790005,
          display: "Schonell graded word spelling test",
          
        },
        {
          code: 273791009,
          display: "Scissor skills checklist",
          
        },
        {
          code: 273792002,
          display: "Screening for developmental apraxia of speech",
          
        },
        {
          code: 273793007,
          display: "Screening test for auditory processing disorders",
          
        },
        {
          code: 273795000,
          display: "SIPT",
          
        },
        {
          code: 273797008,
          display: "SCT - Sentence comprehension test",
          
        },
        {
          code: 273798003,
          display: "Serial sevens test",
          
        },
        {
          code: 273799006,
          display: "Severity of alcohol dependence questionnaire",
          
        },
        {
          code: 273800005,
          display: "SODQ - Severity of opiate dependence questionnaire",
          
        },
        {
          code: 273801009,
          display: "Shaper index",
          
        },
        {
          code: 273802002,
          display: "Short alcohol dependence data",
          
        },
        {
          code: 273803007,
          display: "Short orientation - memory - concentration test",
          
        },
        {
          code: 273804001,
          display: "Short orientation-memory-concentration test - alternative version",
          
        },
        {
          code: 273805000,
          display: "Short-term memory test",
          
        },
        {
          code: 273806004,
          display: "Shulman test of pragmatic skills",
          
        },
        {
          code: 273807008,
          display: "Sickness impact profile",
          
        },
        {
          code: 273809006,
          display: "Silvers cerebral function test",
          
        },
        {
          code: 273811002,
          display: "Simplified acute physiology score",
          
        },
        {
          code: 273812009,
          display: "Simplified acute physiology scale II",
          
        },
        {
          code: 273813004,
          display: "SCQ - Situational confidence questionnaire",
          
        },
        {
          code: 273814005,
          display: "Situations for eating scale",
          
        },
        {
          code: 273815006,
          display: "Smith cognitive questionnaire",
          
        },
        {
          code: 273816007,
          display: "Social adjustment scale",
          
        },
        {
          code: 273817003,
          display: "SAS II - Social adjustment scale II",
          
        },
        {
          code: 273818008,
          display: "Social adjustment scale self - report",
          
        },
        {
          code: 273819000,
          display: "Social behavior assessment scale",
          
        },
        {
          code: 273820006,
          display: "Social support questionnaire",
          
        },
        {
          code: 273821005,
          display: "Social use of language program",
          
        },
        {
          code: 273822003,
          display: "STAP - South Tyneside assessment of phonology",
          
        },
        {
          code: 273823008,
          display: "South Tyneside assessment of syntactic structures",
          
        },
        {
          code: 273824002,
          display: "FGP - Southern California figure ground visual perception test",
          
        },
        {
          code: 273825001,
          display: "Southern California postrotary nystagmus test",
          
        },
        {
          code: 273826000,
          display: "Southern California sensory integration test",
          
        },
        {
          code: 273827009,
          display: "Spare time activities questionnaire",
          
        },
        {
          code: 273828004,
          display: "Special hospitals assessment of personality",
          
        },
        {
          code: 273829007,
          display: "Speech intelligibility assessment procedure",
          
        },
        {
          code: 273830002,
          display: "Spielberger state-trait anxiety inventory",
          
        },
        {
          code: 273831003,
          display: "Quality of life index",
          
        },
        {
          code: 273833000,
          display: "St George hospital respiratory questionnaire",
          
        },
        {
          code: 273834006,
          display: "St Thomas disability questionnaire",
          
        },
        {
          code: 273835007,
          display: "SAP - Standardized assessment of personality",
          
        },
        {
          code: 273836008,
          display: "Terman Merrill scale",
          
        },
        {
          code: 273837004,
          display: "Steinbrocker functional classification",
          
        },
        {
          code: 273838009,
          display: "Stimulus response inventory",
          
        },
        {
          code: 273839001,
          display: "Stocker probe technique for diagnosis and treatment of stuttering in young children",
          
        },
        {
          code: 273840004,
          display: "Stockton geriatric rating scale",
          
        },
        {
          code: 273841000,
          display: "Story completion test",
          
        },
        {
          code: 273842007,
          display: "Structured observation test of function",
          
        },
        {
          code: 273843002,
          display: "Structured clinical interview for Diagnostic and Statistical Manual of Mental Disorders-Third Edition Revised",
          
        },
        {
          code: 273844008,
          display: "Structured interview for Diagnostic and Statistical Manual of Mental Disorders, Third Edition, personality disorders",
          
        },
        {
          code: 273845009,
          display: "Stuttering intervention program",
          
        },
        {
          code: 273846005,
          display: "Stuttering prediction instrument",
          
        },
        {
          code: 273847001,
          display: "Stuttering severity instrument",
          
        },
        {
          code: 273848006,
          display: "Stycar hearing test",
          
        },
        {
          code: 273849003,
          display: "Subjective global assessment",
          
        },
        {
          code: 273850003,
          display: "Substance use disorder diagnostic schedule",
          
        },
        {
          code: 273851004,
          display: "Sue Spence assessment",
          
        },
        {
          code: 273852006,
          display: "Suicide risk scale",
          
        },
        {
          code: 273853001,
          display: "Sunnybrook cord injury scale",
          
        },
        {
          code: 273854007,
          display: "Supplementary language test",
          
        },
        {
          code: 273856009,
          display: "Swollen joint count",
          
        },
        {
          code: 273857000,
          display: "Symbol digit modalities test",
          
        },
        {
          code: 273858005,
          display: "Symbolic play test",
          
        },
        {
          code: 273859002,
          display: "Symptom checklist",
          
        },
        {
          code: 273860007,
          display: "SLT - Synonym learning test",
          
        },
        {
          code: 273861006,
          display: "Systematic fluency training for young children",
          
        },
        {
          code: 273862004,
          display: "Systemic lupus activity measure",
          
        },
        {
          code: 273863009,
          display: "SLEDAI - Systemic lupus erythematosus disease activity index",
          
        },
        {
          code: 273864003,
          display: "Tamb test",
          
        },
        {
          code: 273865002,
          display: "Tender joint count",
          
        },
        {
          code: 273867005,
          display: "Test for auditory perception of speech",
          
        },
        {
          code: 273868000,
          display: "TACL - Test of auditory comprehension of language",
          
        },
        {
          code: 273869008,
          display: "Test of auditory discrimination",
          
        },
        {
          code: 273870009,
          display: "Test of language competence",
          
        },
        {
          code: 273871008,
          display: "Test of language development 2",
          
        },
        {
          code: 273872001,
          display: "Test of motor impairment - Stott-Moyes-Henderson",
          
        },
        {
          code: 273873006,
          display: "Test of pragmatic skills",
          
        },
        {
          code: 273874000,
          display: "Test of reception of grammar",
          
        },
        {
          code: 273875004,
          display: "TSA - Test of syntactic abilities",
          
        },
        {
          code: 273876003,
          display: "Test of word finding in discourse",
          
        },
        {
          code: 273877007,
          display: "Test of word knowledge",
          
        },
        {
          code: 273878002,
          display: "Therapeutic intervention scoring system",
          
        },
        {
          code: 273879005,
          display: "TLFB - Time line follow back",
          
        },
        {
          code: 273880008,
          display: "Time trade off analysis",
          
        },
        {
          code: 273881007,
          display: "Token test",
          
        },
        {
          code: 273882000,
          display: "Trail making test",
          
        },
        {
          code: 273883005,
          display: "Trauma index",
          
        },
        {
          code: 273884004,
          display: "Trauma score",
          
        },
        {
          code: 273885003,
          display: "RTS - Revised trauma score",
          
        },
        {
          code: 273886002,
          display: "Trauma and injury severity score",
          
        },
        {
          code: 273887006,
          display: "Triage index",
          
        },
        {
          code: 273888001,
          display: "Valentine auditory memory test",
          
        },
        {
          code: 273889009,
          display: "Valpar 17 pre-vocational readiness battery",
          
        },
        {
          code: 273891001,
          display: "Vernon Cloze procedure reading test",
          
        },
        {
          code: 273892008,
          display: "Vernon graded word reading test",
          
        },
        {
          code: 273893003,
          display: "Vineland maturity scales adapted for the blind",
          
        },
        {
          code: 273894009,
          display: "Vineland social maturity scale",
          
        },
        {
          code: 273895005,
          display: "Vineland subquotient - general self-help",
          
        },
        {
          code: 273896006,
          display: "Vineland subquotient - communication",
          
        },
        {
          code: 273897002,
          display: "Vineland subquotient - locomotion",
          
        },
        {
          code: 273898007,
          display: "Vineland subquotient - occupation",
          
        },
        {
          code: 273899004,
          display: "Vineland subquotient - self-help in eating",
          
        },
        {
          code: 273900009,
          display: "Vineland subquotient - socialization",
          
        },
        {
          code: 273901008,
          display: "Vineland behavioral assessment",
          
        },
        {
          code: 273902001,
          display: "Visick symptom grade",
          
        },
        {
          code: 273903006,
          display: "VAS - Visual analog scale",
          
        },
        {
          code: 273904000,
          display: "Visual analog pain scale",
          
        },
        {
          code: 273905004,
          display: "Visual and perceptual assessment program",
          
        },
        {
          code: 273906003,
          display: "Visual object and spatial perception test",
          
        },
        {
          code: 273908002,
          display: "Voice assessment sheet - Martin",
          
        },
        {
          code: 273909005,
          display: "Voice evaluation form",
          
        },
        {
          code: 273910000,
          display: "Voice skills assessment",
          
        },
        {
          code: 273912008,
          display: "Waddell disability index",
          
        },
        {
          code: 273913003,
          display: "Wakefield self-assessment depression inventory",
          
        },
        {
          code: 273914009,
          display: "Ward behavior rating scale",
          
        },
        {
          code: 273915005,
          display: "Warner dysphagia assessment",
          
        },
        {
          code: 273916006,
          display: "Wechsler adult intelligence scale",
          
        },
        {
          code: 273917002,
          display: "Wechsler adult intelligence test - revised",
          
        },
        {
          code: 273918007,
          display: "Wechsler intelligence scale for children",
          
        },
        {
          code: 273919004,
          display: "Wechsler intelligence non-verbal performance assessment",
          
        },
        {
          code: 273920005,
          display: "Wechsler intelligence verbal assessment",
          
        },
        {
          code: 273921009,
          display: "Logical memory paragraph recall",
          
        },
        {
          code: 273922002,
          display: "Wechsler pre-school and primary scale of intelligence",
          
        },
        {
          code: 273923007,
          display: "Weigl - Goldstein - Scheerer color form sorting test",
          
        },
        {
          code: 273924001,
          display: "Wepman Auditory Sequential Memory Test",
          
        },
        {
          code: 273925000,
          display: "Wepman Auditory Discrimination Test",
          
        },
        {
          code: 273926004,
          display: "Wessex revised portage language checklist",
          
        },
        {
          code: 273927008,
          display: "Western aphasia battery",
          
        },
        {
          code: 273928003,
          display: "WPTAS - Westmead Post-Traumatic Amnesia Scale",
          
        },
        {
          code: 273929006,
          display: "World Health Organization (WHO) depression scale",
          
        },
        {
          code: 273930001,
          display: "World Health Organization (WHO) handicap scale",
          
        },
        {
          code: 273931002,
          display: "World Health Organization (WHO) classification of impairments, disabilities and handicap scale",
          
        },
        {
          code: 273932009,
          display: "World Health Organization (WHO) economic self-sufficiency handicap scale",
          
        },
        {
          code: 273933004,
          display: "World Health Organization (WHO) mobility handicap scale",
          
        },
        {
          code: 273934005,
          display: "World Health Organization (WHO) occupation handicap scale",
          
        },
        {
          code: 273935006,
          display: "World Health Organization (WHO) orientation handicap scale",
          
        },
        {
          code: 273936007,
          display: "World Health Organization (WHO) physical independence handicap scale",
          
        },
        {
          code: 273937003,
          display: "World Health Organization (WHO) social integration handicap scale",
          
        },
        {
          code: 273938008,
          display: "Winslow feeding checklist",
          
        },
        {
          code: 273939000,
          display: "Wisconsin card sorting test",
          
        },
        {
          code: 273940003,
          display: "SDS - Zung self-rating depression scale",
          
        },
        {
          code: 273941004,
          display: "Zung anxiety status inventory",
          
        },
        {
          code: 273942006,
          display: "Zung self-rating anxiety scale",
          
        },
        {
          code: 277318003,
          display: "(m)",
          
        },
        {
          code: 277457005,
          display: "Histological grading systems",
          
        },
        {
          code: 277459008,
          display: "Daumas-Duport grading system",
          
        },
        {
          code: 277460003,
          display: "World Health Organization (WHO) central nervous system (CNS) tumor grading system",
          
        },
        {
          code: 277645005,
          display: "Additional TNM descriptors",
          
        },
        {
          code: 277646006,
          display: "a - At autopsy",
          
        },
        {
          code: 277647002,
          display: "r - Tumor recurrence",
          
        },
        {
          code: 277649004,
          display: "y - During therapy/following treatment",
          
        },
        {
          code: 277650004,
          display: "m - Multiple tumors",
          
        },
        {
          code: 277652007,
          display: "f - Family history",
          
        },
        {
          code: 277676004,
          display: "d - Retinal involvement",
          
        },
        {
          code: 278241006,
          display: "Node stage G1 in retinoblastoma",
          
        },
        {
          code: 278242004,
          display: "Node stage G2 in retinoblastoma",
          
        },
        {
          code: 278247005,
          display: "Lung stage L1",
          
        },
        {
          code: 278699003,
          display: "Parsonnet score",
          
        },
        {
          code: 278896008,
          display: "Short form McGill pain questionnaire",
          
        },
        {
          code: 278897004,
          display: "Waterlow pressure sore risk score",
          
        },
        {
          code: 278898009,
          display: "Norton score",
          
        },
        {
          code: 279101002,
          display: "Verbal rating scale",
          
        },
        {
          code: 281113000,
          display: "Health of the Nation Outcome Scale - summated (generic version)",
          
        },
        {
          code: 281114006,
          display: "Health of the Nation Outcome Scale subscale (generic version)",
          
        },
        {
          code: 281115007,
          display: "Health of the Nation Outcome Scale item 1 - aggressive/disruptive behavior",
          
        },
        {
          code: 281116008,
          display: "Health of the Nation Outcome Scale item 2 - non-accidental self injury",
          
        },
        {
          code: 281117004,
          display: "HoNOS item 3 - alcohol/drug problem",
          
        },
        {
          code: 281118009,
          display: "Health of the Nation Outcome Scale item 4 - cognitive problems",
          
        },
        {
          code: 281119001,
          display: "HoNOS item 5",
          
        },
        {
          code: 281120007,
          display: "Health of the Nation Outcome Scale item 6 - hallucinations/delusions",
          
        },
        {
          code: 281121006,
          display: "HoNOS item 7",
          
        },
        {
          code: 281122004,
          display: "Health of the Nation Outcome Scale item 8 - other mental/behavioral problems",
          
        },
        {
          code: 281123009,
          display: "HoNOS item 9",
          
        },
        {
          code: 281124003,
          display: "HoNOS item 10",
          
        },
        {
          code: 281125002,
          display: "Health of the Nation Outcome scale item 11 - living conditions",
          
        },
        {
          code: 281126001,
          display: "HoNOS item 12",
          
        },
        {
          code: 281400004,
          display: "Ramsay sedation scale",
          
        },
        {
          code: 281692008,
          display: "Griffiths mental developmental scale",
          
        },
        {
          code: 281693003,
          display: "Gessell developmental scale",
          
        },
        {
          code: 281844006,
          display: "Health of the Nation Outcome subscale A",
          
        },
        {
          code: 281845007,
          display: "HoNOS subscale B",
          
        },
        {
          code: 281846008,
          display: "Health of the Nation Outcome subscale C",
          
        },
        {
          code: 281848009,
          display: "HoNOS subscale D",
          
        },
        {
          code: 281849001,
          display: "Health of the Nation Outcome Scale item (generic version)",
          
        },
        {
          code: 282402005,
          display: "V - Hepatic vein marker",
          
        },
        {
          code: 282403000,
          display: "P - Portal vein marker",
          
        },
        {
          code: 282404006,
          display: "E - Extrahepatic marker",
          
        },
        {
          code: 282405007,
          display: "M - Metastatic marker",
          
        },
        {
          code: 282436004,
          display: "E - Extralymphatic organ involvement marker",
          
        },
        {
          code: 282437008,
          display: "S - Splenic involvement marker",
          
        },
        {
          code: 282466006,
          display: "Suicide intent score scale",
          
        },
        {
          code: 282467002,
          display: "Suicide intent score scale - summated",
          
        },
        {
          code: 282468007,
          display: "Suicide intent score subscale",
          
        },
        {
          code: 282469004,
          display: "Suicide intent score subscale - attempt circumstances",
          
        },
        {
          code: 282470003,
          display: "Suicide intent score subscale - self report",
          
        },
        {
          code: 282471004,
          display: "Suicide intent score subscale - risk",
          
        },
        {
          code: 284061009,
          display: "Global assessment of functioning - 1993 Diagnostic and Statistical Manual of Mental Disorders, Fourth Edition adaptation",
          
        },
        {
          code: 284064001,
          display: "BPRS - Brief psychiatric rating scale - 1962",
          
        },
        {
          code: 284464005,
          display: "Health of the Nation Outcome Scales",
          
        },
        {
          code: 285713000,
          display: "GEMS - Guide to early movement skills checklist",
          
        },
        {
          code: 285714006,
          display: "BSTS - Bereweeke skill teaching system checklist",
          
        },
        {
          code: 300991009,
          display: "Webster score",
          
        },
        {
          code: 302029005,
          display: "Ferriman and Galway score",
          
        },
        {
          code: 303807002,
          display: "Rule of nines",
          
        },
        {
          code: 304705008,
          display: "American Association on Mental Retardation (AAMR) adaptive behavior scale",
          
        },
        {
          code: 304706009,
          display: "Acceptance of illness scale",
          
        },
        {
          code: 304707000,
          display: "Anomalous sentences repetition test",
          
        },
        {
          code: 304708005,
          display: "Arthritis impact measurement scale",
          
        },
        {
          code: 304709002,
          display: "Attitudes towards doctors and medicine scale",
          
        },
        {
          code: 304710007,
          display: "Beck hopelessness scale",
          
        },
        {
          code: 304711006,
          display: "Beck anxiety inventory",
          
        },
        {
          code: 304712004,
          display: "Beck scale for suicide ideation",
          
        },
        {
          code: 304713009,
          display: "BPCQ - Beliefs about pain control questionnaire",
          
        },
        {
          code: 304714003,
          display: "Bellak children's apperception test",
          
        },
        {
          code: 304715002,
          display: "Bender visual motor gestalt test",
          
        },
        {
          code: 304716001,
          display: "Bruininks-Oseretsky test of motor proficiency",
          
        },
        {
          code: 304717005,
          display: "Cancer attitude inventory",
          
        },
        {
          code: 304718000,
          display: "Child depression scale, second research edition",
          
        },
        {
          code: 304719008,
          display: "Children's health locus of control scale",
          
        },
        {
          code: 304720002,
          display: "CECS - Courtauld emotional control scale",
          
        },
        {
          code: 304721003,
          display: "Middlesex hospital questionnaire",
          
        },
        {
          code: 304722005,
          display: "Culture-free self-esteem inventory",
          
        },
        {
          code: 304723000,
          display: "Delusions-symptoms-states inventory",
          
        },
        {
          code: 304724006,
          display: "Eysenck personality questionnaire",
          
        },
        {
          code: 304725007,
          display: "Family relations test",
          
        },
        {
          code: 304726008,
          display: "Forced choice ratings of health-related attributes",
          
        },
        {
          code: 304727004,
          display: "Framingham anger measure",
          
        },
        {
          code: 304728009,
          display: "Framingham type A behavior pattern measure",
          
        },
        {
          code: 304729001,
          display: "Fuld object memory evaluation",
          
        },
        {
          code: 304730006,
          display: "Functional performance record",
          
        },
        {
          code: 304731005,
          display: "General preventative health behaviors checklist",
          
        },
        {
          code: 304732003,
          display: "Hassles scale",
          
        },
        {
          code: 304733008,
          display: "Health knowledge measurement",
          
        },
        {
          code: 304734002,
          display: "Health value scale",
          
        },
        {
          code: 304735001,
          display: "Illinois test of psycholinguistic abilities, revised edition",
          
        },
        {
          code: 304736000,
          display: "Inventory of drinking situations",
          
        },
        {
          code: 304738004,
          display: "Kaufman assessment battery for children",
          
        },
        {
          code: 304739007,
          display: "Life experiences checklist",
          
        },
        {
          code: 304740009,
          display: "LOT - Life orientation test",
          
        },
        {
          code: 304741008,
          display: "Luria-Nebraska neuropsychological battery, children's revision",
          
        },
        {
          code: 304742001,
          display: "Luria-Nebraska neuropsychological battery, form 1",
          
        },
        {
          code: 304743006,
          display: "Marlow-Crowne scale",
          
        },
        {
          code: 304744000,
          display: "MISS - Medical interview satisfaction scale",
          
        },
        {
          code: 304745004,
          display: "Mental adjustment to cancer scale",
          
        },
        {
          code: 304746003,
          display: "Merril-Palmer preschool performance scale",
          
        },
        {
          code: 304747007,
          display: "Motivation analysis test",
          
        },
        {
          code: 304748002,
          display: "Multidimensional health locus of control scale",
          
        },
        {
          code: 304749005,
          display: "Object relations technique",
          
        },
        {
          code: 304750005,
          display: "Pain coping strategies questionnaire",
          
        },
        {
          code: 304751009,
          display: "PILL - Pennebaker inventory of linguid languidness",
          
        },
        {
          code: 304752002,
          display: "Perceived control of insulin-dependent diabetes",
          
        },
        {
          code: 304753007,
          display: "PSS - Perceived stress scale",
          
        },
        {
          code: 304754001,
          display: "Personality deviance scale",
          
        },
        {
          code: 304755000,
          display: "PANAS - Positive and negative affect schedule",
          
        },
        {
          code: 304756004,
          display: "Prejudicial evaluation and social interaction scale",
          
        },
        {
          code: 304757008,
          display: "Profile of mood states, bipolar",
          
        },
        {
          code: 304758003,
          display: "Quick neurological screening test",
          
        },
        {
          code: 304759006,
          display: "Raven progressive matrices and vocabulary scales",
          
        },
        {
          code: 304760001,
          display: "RLOC - Recovery locus of control scale",
          
        },
        {
          code: 304761002,
          display: "Reported health behaviors checklist",
          
        },
        {
          code: 304762009,
          display: "Revised token test",
          
        },
        {
          code: 304763004,
          display: "Reynell developmental language scales, second revision",
          
        },
        {
          code: 304764005,
          display: "Reynell Zinkin scale for young visually handicapped children",
          
        },
        {
          code: 304765006,
          display: "Rogers personal adjustment inventory, revised",
          
        },
        {
          code: 304766007,
          display: "RSES - Rosenberg self-esteem scale",
          
        },
        {
          code: 304767003,
          display: "Rust inventory of schizotypal cognitions",
          
        },
        {
          code: 304768008,
          display: "Satisfaction with life scale",
          
        },
        {
          code: 304769000,
          display: "Screening test for the Luria-Nebraska neuropsychological battery",
          
        },
        {
          code: 304770004,
          display: "Short form social support questionnaire",
          
        },
        {
          code: 304771000,
          display: "SOS - Significant others scale",
          
        },
        {
          code: 304772007,
          display: "Snijders-Oomen non-verbal intelligence scale, revised",
          
        },
        {
          code: 304773002,
          display: "Stanford Binet intelligence scale, fourth edition",
          
        },
        {
          code: 304774008,
          display: "Stanford Binet form L/M",
          
        },
        {
          code: 304775009,
          display: "State-trait anger expression inventory",
          
        },
        {
          code: 304776005,
          display: "Stroop neuropsychological screening test",
          
        },
        {
          code: 304777001,
          display: "Symbolic play test, second edition",
          
        },
        {
          code: 304778006,
          display: "Token test for children",
          
        },
        {
          code: 304779003,
          display: "Uplifts scale",
          
        },
        {
          code: 304780000,
          display: "Varni-Thompson pediatric pain questionnaire",
          
        },
        {
          code: 304781001,
          display: "Vineland adaptive behavior scales",
          
        },
        {
          code: 304915008,
          display: "Duke treadmill score",
          
        },
        {
          code: 307791002,
          display: "Strange situation test",
          
        },
        {
          code: 307792009,
          display: "Rey figure test",
          
        },
        {
          code: 307793004,
          display: "Test of everyday attention",
          
        },
        {
          code: 307794005,
          display: "Test of everyday attention - adult",
          
        },
        {
          code: 307795006,
          display: "Test of everyday attention - child",
          
        },
        {
          code: 307801002,
          display: "Rivermead behavioral memory test - adult version",
          
        },
        {
          code: 307802009,
          display: "Rivermead behavioral memory test - child version",
          
        },
        {
          code: 307803004,
          display: "Wechsler objective numerical dimensions test",
          
        },
        {
          code: 307804005,
          display: "WOLD - Wechsler objective language dimensions test",
          
        },
        {
          code: 307805006,
          display: "Health of the Nation Outcome Scale for children",
          
        },
        {
          code: 307806007,
          display: "Health of the Nation Outcome Scale for adolescents",
          
        },
        {
          code: 307807003,
          display: "Maudsley addiction profile",
          
        },
        {
          code: 309593006,
          display: "Education score - diabetes",
          
        },
        {
          code: 311404002,
          display: "Attention process training questionnaire",
          
        },
        {
          code: 311405001,
          display: "Rating scale of attentional behavior",
          
        },
        {
          code: 311406000,
          display: "Everyday memory questionnaire",
          
        },
        {
          code: 311457001,
          display: "Behavior assessment of the dysexecutive syndrome",
          
        },
        {
          code: 311458006,
          display: "Doors and people assessment",
          
        },
        {
          code: 311471009,
          display: "Extended 2 & 7 test",
          
        },
        {
          code: 311472002,
          display: "Alphabet number alteration test",
          
        },
        {
          code: 311473007,
          display: "Vigil/W test",
          
        },
        {
          code: 311474001,
          display: "Attentional capacity test",
          
        },
        {
          code: 311475000,
          display: "Consonant trigrams test",
          
        },
        {
          code: 311477008,
          display: "Buschke selective reminding test",
          
        },
        {
          code: 311478003,
          display: "California verbal learning test",
          
        },
        {
          code: 311480009,
          display: "Williams memory assessment scales",
          
        },
        {
          code: 311481008,
          display: "Wechsler memory scale revised",
          
        },
        {
          code: 311483006,
          display: "Association for neuropsychological research and development prospective memory test",
          
        },
        {
          code: 311484000,
          display: "PASAT - Paced auditory stimulation test",
          
        },
        {
          code: 311485004,
          display: "Category test",
          
        },
        {
          code: 311486003,
          display: "Profile of executive control system",
          
        },
        {
          code: 311512008,
          display: "Brixton test",
          
        },
        {
          code: 311513003,
          display: "Hayling test",
          
        },
        {
          code: 311514009,
          display: "Microcog - assessment of cognitive function",
          
        }
      ];

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
