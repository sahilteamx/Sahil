// All text on the site comes from Sahil's resume (Sahil_Shekh_Automotive_Diagnostic_Resume_Final.pdf).
// Edit this file to change content. Do not add claims that are not in the resume.

export const PROFILE = {
  name: "Sahil Shekh",
  role: "Automotive Diagnostic & Electrical Technician",
  level: "Fresher",
  location: "Deoria, Uttar Pradesh",
  phone: "8601600591",
  phoneHref: "tel:+918601600591",
  whatsappHref: "https://wa.me/918601600591",
  email: "shaikhsahilsiddiqui@gmail.com",
  emailHref: "mailto:shaikhsahilsiddiqui@gmail.com",
  resumePath: "./Sahil_Shekh_Resume.pdf",
  summary:
    "Entry-level Automotive Diagnostic & Electrical Technician with 6 months of hands-on automotive training in vehicle electrical systems, wiring, mechanical service, diagnostic scanning, sensor/actuator testing and ECM-related diagnostics. Also gained limited workshop practical exposure on routine vehicle service and electrical checks.",
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "diagnostics",
    title: "Automotive diagnostics",
    items: [
      "DTC reading & clearing, live-data analysis, actuator tests, ECU/ECM identification and basic adaptation/calibration",
      "Wiring-diagram based circuit tracing, connector/pin identification and power/ground/signal testing",
      "Diagnostic scanner operation and practical electrical fault diagnosis",
      "Oscilloscope waveform testing for CKP/CMP and ABS signals",
    ],
  },
  {
    id: "electrical",
    title: "Automotive electrical & wiring",
    items: [
      "Fuse and 4-pin/5-pin relay testing; supply, ground and control-side checks",
      "Headlight wiring with relay-based circuits; indicator/hazard wiring inspection",
      "Reverse-light circuit and switch/sensor testing",
      "Horn diagnosis, wiring repair and horn replacement on customer vehicles",
      "Wiper motor, washer system and multi-speed circuit testing",
      "Power-window motor/switch testing, including bypass/direct operation testing",
      "ORVM/folding-mirror connector and pin testing",
      "Ignition-switch B+, ACC, IGN and START circuit testing",
      "Central locking, push-button locking and actuator/circuit testing",
      "GPS tracker installation with B+, ACC and ground identification",
      "Dashboard/instrument-cluster dismantling and refitting",
    ],
  },
  {
    id: "engine-electrical",
    title: "Engine electrical & sensors",
    items: [
      "VSS, CKP and CMP sensor testing",
      "Sensor connector, supply, ground and signal checks; practical testing exposure on other sensors",
      "ABS sensor testing, including oscilloscope signal checking",
      "Electric throttle-body removal/refitting, wiring/signal testing and adaptation/calibration",
      "IAC (Idle Air Control) valve practical checking/testing",
      "EGR valve, purge valve and actuator/solenoid testing",
      "2/3/4-wire ignition-coil testing and step-up ignition system practical",
      "Fuel-pump connector, supply/ground, wiring and operation testing; ECM-controlled relay circuit checking",
      "Radiator-fan direct testing and ECM-controlled relay/signal diagnosis",
      "Glow-plug and glow-plug module/relay testing",
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical & service",
    items: [
      "Complete car service including brake service and suspension/running-pad service",
      "Petrol and diesel demo-engine complete dismantling and reassembly",
      "Demo gearbox complete dismantling and reassembly, including shafts, gears, bearings, synchronizers and related components",
      "Wheel alignment, tyre balancing and tyre removal/refitting; 10 days of continuous practical practice",
      "AC service: compressor/clutch testing, gas filling, leakage testing, cooling-coil/evaporator and blower removal/testing",
      "DPF regeneration using diagnostic scanner",
      "Alternator and starter-motor dismantling, component inspection, reassembly and bench testing",
      "Alternator B+ output, ground, charging voltage, regulator and rectifier/diode testing",
      "Starter solenoid, terminal 30/50, ground and starting-circuit testing",
    ],
  },
  {
    id: "keys",
    title: "Key & security systems",
    items: [
      "Key programming/matching and immobilizer-related practical exposure",
      "Xhorse VVDI practical use",
      "Xhorse Panda practical use",
      "Key cutting and decoding using photo-based and conventional methods",
    ],
  },
  {
    id: "workshop",
    title: "Workshop practical exposure",
    items: [
      "Assisted with routine vehicle service and inspection",
      "Practical exposure to automotive electrical testing and basic fault diagnosis",
      "Assisted with brake, suspension and other routine service operations",
      "Limited practical exposure to customer-vehicle electrical checks and workshop procedures",
    ],
  },
];

export const HIGHLIGHTS: string[] = [
  "Complete petrol and diesel demo-engine dismantling/reassembly at component and fastener level.",
  "Complete demo-gearbox dismantling/reassembly with shaft, gear, bearing and synchronizer components.",
  "DPF regeneration and routine diagnostic-scanner work performed during training.",
];

export const ALIGNMENT_DAYS = {
  days: "10",
  text: "consecutive days of wheel alignment and tyre-balancing practical work.",
};

// A short flow built only from skills listed in the resume.
export const APPROACH: { title: string; text: string }[] = [
  {
    title: "Read the codes and live data",
    text: "Use the diagnostic scanner to read DTCs, check live data and run actuator tests.",
  },
  {
    title: "Find the circuit",
    text: "Use the wiring diagram to trace the circuit and identify the connector and pins.",
  },
  {
    title: "Test power, ground and signal",
    text: "Check supply, ground and signal at the connector, one point at a time.",
  },
  {
    title: "Confirm the signal",
    text: "Look at sensor waveforms such as CKP, CMP and ABS on an oscilloscope.",
  },
  {
    title: "Repair and test again",
    text: "Repair the wiring or replace the part, then test the circuit again.",
  },
];

export const TRAINING = {
  org: "Trust Automobile",
  course: "Car Mechanic & Car Wiring Training",
  duration: "6 months",
  focus: ["Mechanical systems", "Automotive electrical", "Wiring", "Diagnostics", "ECM-related systems"],
};

export const EDUCATION = {
  title: "12th Pass",
  board: "Uttar Pradesh Board",
};
