import BUILDINGS from "./buildings";

const tasks = {
  plant_sprouts: {
    display_name: "Plant Sprouts",
    building: BUILDINGS.greenhouse,
    input: {
      stamina: 1,
      water: 2,
      power: 1,
      sprout_seed: 1,
      soil: 1,
    },
    output: {
      food: [10, 14, 12],
      sprout_seed: [0, 1, 0.1],
      soil: [0, 1, 0.2],
    },
  },
  plant_lettuce: {
    display_name: "Plant Lettuce",
    building: BUILDINGS.greenhouse,
    input: {
      stamina: 2,
      water: 4,
      power: 2,
      lettuce_seed: 1,
      soil: 2,
    },
    output: {
      food: [20, 50, 35],
      lettuce_seed: [0, 1, 0.1],
      soil: [0, 1, 0.1],
    },
  },
  plant_carrots: {
    display_name: "Plant Carrots",
    building: BUILDINGS.greenhouse,
    input: {
      stamina: 3,
      water: 5,
      power: 12,
      carrot_seed: 1,
      soil: 4,
    },
    output: {
      food: [50, 70, 60],
      carrot_seed: [0, 1, 0.1],
      soil: [0, 1, 0.2],
    },
  },
  plant_sweet_potato: {
    display_name: "Plant Sweet Potato",
    building: BUILDINGS.greenhouse,
    input: {
      stamina: 4,
      water: 25,
      power: 20,
      sweet_potato_seed: 1,
      soil: 5,
    },
    output: {
      food: [90, 150, 120],
      sweet_potato_seed: [0, 1, 0.1],
      soil: [0, 1, 0.2],
    },
  },
  plant_soy: {
    display_name: "Plant Soy",
    building: BUILDINGS.greenhouse,
    level: {
      "life science": 15,
    },
    input: {
      stamina: 5,
      water: 30,
      power: 30,
      soy_seed: 1,
      soil: 7,
    },
    output: {
      food: [140, 230, 185],
      soy_seed: [0, 1, 0.1],
      soil: [0, 1, 0.2],
    },
  },
  plant_coffee: {
    display_name: "Plant Coffee",
    building: BUILDINGS.greenhouse,
    level: {
      "life science": 15,
    },
    input: {
      stamina: 2,
      water: 8,
      power: 10,
      coffee_seed: 1,
      soil: 4,
    },
    output: {
      coffee_cherry: [28, 42, 35],
      coffee_seed: [0, 1, 0.1],
      soil: [0, 1, 0.2],
    },
  },
  plant_bamboo: {
    display_name: "Plant Bamboo",
    building: BUILDINGS.greenhouse,
    level: {
      "life science": 10,
    },
    input: {
      stamina: 2,
      water: 10,
      power: 15,
      bamboo_seed: 1,
      soil: 1,
    },
    output: {
      bamboo: [16, 28, 22],
      bamboo_seed: [0, 1, 0.1],
      soil: [0, 1, 0.1],
    },
  },
  plant_sorghum: {
    display_name: "Plant Sorghum",
    building: BUILDINGS.greenhouse,
    input: {
      stamina: 2,
      water: 15,
      power: 10,
      sorghum_seed: 5,
      soil: 3,
    },
    output: {
      sorghum: [20, 34, 27],
      sorghum_seed: [0, 2, 0.3],
      soil: [0, 1, 0.1],
    },
  },
  grow_mushrooms: {
    display_name: "Grow Mushrooms",
    building: BUILDINGS.greenhouse,
    level: {
      "life science": 20,
    },
    input: {
      stamina: 5,
      water: 30,
      mushroom_spores: 1,
      soil: 2,
      sorghum: 25,
    },
    output: {
      mushrooms: [6, 15, 10.5],
    },
  },
  plant_sunflower: {
    display_name: "Plant Sunflower",
    building: BUILDINGS.greenhouse,
    input: {
      stamina: 1,
      water: 7,
      power: 15,
      sunflower_seeds: 3,
      soil: 3,
    },
    output: {
      lootlist: [
        {
          sunflower_seeds: [0.1, 1, 3],
        },
        {
          sunflower: [1, 1, 2],
        },
        {
          soil: [0.2, 1, 1],
        },
        {
          shard_glushkos_greenhouse_A: [0.0033, 1, 1],
        },
      ],
    },
  },
  make_apprentice_life_science_tools: {
    display_name: "Make Apprentice Life Science Tools",
    building: BUILDINGS.greenhouse,
    level: {
      "life science": 30,
      fabrication: 25,
    },
    input: {
      lifescience_tools_n: 1,
      metis: 3,
      water: 15,
      soil: 10,
      power: 20,
      stamina: 5,
    },
    output: {
      lifescience_tools_a: 1,
    },
  },
  capture_co2: {
    display_name: "Capture Carbon Dioxide",
    building: BUILDINGS.cad,
    input: {
      stamina: 1,
      power: 60,
    },
    output: {
      lootlist: [
        {
          carbon_dioxide: [1, 2, 5],
        },
        {
          carbon_dioxide: [0.1111, 1, 10],
        },
        {
          nitrogen: [0.1, 1, 2],
        },
        {
          argon: [0.05, 1, 2],
        },
      ],
    },
  },
  capture_co2_2: {
    display_name: "Capture Carbon Dioxide II",
    building: BUILDINGS.cad,
    level: {
      chemistry: 25,
    },
    input: {
      stamina: 3,
      power: 80,
      chemistry_tools: 2,
    },
    output: {
      lootlist: [
        {
          carbon_dioxide: [1, 3, 10],
        },
        {
          carbon_dioxide: [0.1111, 4, 9],
        },
        {
          nitrogen: [0.1, 2, 5],
        },
        {
          argon: [0.1, 2, 5],
        },
        {
          nitrogen: [1, 1, 1],
        },
      ],
    },
  },
  capture_co2_3: {
    display_name: "Capture Carbon Dioxide III",
    building: BUILDINGS.cad,
    level: {
      chemistry: 50,
    },
    input: {
      stamina: 4,
      power: 100,
      chemistry_tools: 3,
    },
    output: {
      lootlist: [
        {
          carbon_dioxide: [1, 6, 12],
        },
        {
          carbon_dioxide: [0.1111, 5, 10],
        },
        {
          nitrogen: [0.05, 3, 6],
        },
        {
          argon: [0.05, 3, 8],
        },
        {
          nitrogen: [1, 2, 2],
        },
      ],
    },
  },
  make_soil: {
    display_name: "Make Soil",
    building: BUILDINGS.cad,
    input: {
      stamina: 1,
      waste: 2,
      power: 10,
      regolith: 25,
    },
    output: {
      soil: [4, 6, 5],
    },
  },
  make_soil2: {
    display_name: "Make Soil II",
    building: BUILDINGS.cad,
    level: {
      "life science": 25,
    },
    input: {
      stamina: 2,
      waste: 10,
      power: 20,
      regolith: 100,
      lifescience_tools: 2,
    },
    output: {
      soil: [12, 20, 16],
    },
  },
  make_soil3: {
    display_name: "Make Soil III",
    building: BUILDINGS.cad,
    level: {
      "life science": 50,
    },
    input: {
      stamina: 3,
      waste: 25,
      power: 30,
      regolith: 250,
      lifescience_tools: 3,
    },
    output: {
      soil: [24, 40, 32],
    },
  },
  roast_coffee_beans: {
    display_name: "Roast Coffee Beans",
    building: BUILDINGS.cad,
    level: {
      chemistry: 25,
    },
    input: {
      stamina: 1,
      coffee_bean_green: 20,
      power: 10,
    },
    output: {
      coffee_bean_roasted: [16, 20, 18],
    },
  },
  co2_transport: {
    display_name: "CO2 Transport",
    building: BUILDINGS.cad,
    input: {
      carbon_dioxide: 50,
      power: 20,
      stamina: 2,
    },
    output: {
      dusk: [60, 75, 67.5],
    },
  },
  process_sunflower_oil: {
    display_name: "Process Sunflower Oil",
    building: BUILDINGS.cad,
    input: {
      stamina: 1,
      sunflower_seeds: 5,
      power: 20,
    },
    output: {
      sunflower_oil: [1, 2, 1.1],
    },
  },
  package_sunflower_snack: {
    display_name: "Package Sunflower Seed Snack",
    building: BUILDINGS.cad,
    input: {
      stamina: 3,
      sunflower_seeds: 12,
      power: 10,
      halite: 3,
    },
    output: {
      sunflower_seed_snack: [1, 2, 1.1],
    },
  },
  roast_sunflower_seeds: {
    display_name: "Roast Sunflower Seeds",
    building: BUILDINGS.cad,
    input: {
      stamina: 2,
      sunflower_seeds: 12,
      power: 10,
    },
    output: {
      sunflower_seeds_roasted: [1, 2, 1.1],
    },
  },
  smelt_iron: {
    display_name: "Smelt Iron",
    building: BUILDINGS.smelter,
    input: {
      regolith: 500,
      power: 40,
      stamina: 2,
    },
    output: {
      lootlist: [
        {
          smelt_iron: [1, 2, 5],
        },
        {
          smelt_iron: [0.1111, 1, 10],
        },
      ],
    },
  },
  smelt_copper: {
    display_name: "Smelt Copper",
    building: BUILDINGS.smelter,
    input: {
      regolith: 1500,
      power: 40,
      stamina: 3,
    },
    output: {
      lootlist: [
        {
          smelt_copper: [1, 2, 5],
        },
        {
          smelt_copper: [0.1111, 1, 10],
        },
        {
          barite: [0.1111, 1, 5],
        },
      ],
    },
  },
  smelt_aluminum: {
    display_name: "Smelt Aluminum",
    building: BUILDINGS.smelter,
    input: {
      regolith: 1000,
      power: 40,
      stamina: 5,
    },
    output: {
      lootlist: [
        {
          smelt_aluminum: [1, 2, 5],
        },
        {
          smelt_aluminum: [0.1111, 1, 10],
        },
      ],
    },
  },
  smelt_titanium: {
    display_name: "Smelt Titanium",
    building: BUILDINGS.smelter,
    input: {
      regolith: 2500,
      power: 40,
      stamina: 4,
    },
    output: {
      lootlist: [
        {
          smelt_titanium: [1, 2, 5],
        },
        {
          smelt_titanium: [0.1111, 1, 10],
        },
      ],
    },
  },
  smelt_steel: {
    display_name: "Smelt Steel",
    building: BUILDINGS.smelter,
    input: {
      carbon_dioxide: 10,
      smelt_iron: 15,
      power: 40,
      stamina: 3,
    },
    output: {
      lootlist: [
        {
          smelt_steel: [1, 2, 5],
        },
        {
          smelt_steel: [0.1111, 1, 10],
        },
        {
          barite: [0.1111, 1, 5],
        },
      ],
    },
  },
  smelt_glass: {
    display_name: "Smelt Glass",
    building: BUILDINGS.smelter,
    level: {
      machining: 20,
    },
    input: {
      stamina: 4,
      power: 20,
      regolith: 300,
      fabrication_tools: 1,
    },
    output: {
      lootlist: [
        {
          glass: [1, 1, 1],
        },
        {
          glass: [0.1111, 1, 3],
        },
      ],
    },
  },
  smelt_silicon_crystals: {
    display_name: "Smelt Silicon Crystals",
    building: BUILDINGS.smelter,
    input: {
      regolith: 100,
      power: 40,
      stamina: 1,
      carbon_dioxide: 3,
    },
    output: {
      siliconcrystals_raw: [1, 2, 1.1111],
    },
  },
  make_aluminum_plate: {
    display_name: "Make Aluminum Plate",
    building: BUILDINGS.machine_shop,
    input: {
      smelt_aluminum: 5,
      power: 40,
      stamina: 3,
    },
    output: {
      aluminum_plate: [2, 10, 3.833],
    },
  },
  make_titanium_plate: {
    display_name: "Make Titanium Plate",
    building: BUILDINGS.machine_shop,
    input: {
      smelt_titanium: 5,
      power: 40,
      stamina: 3,
    },
    output: {
      titanium_plate: [2, 10, 3.833],
    },
  },
  make_machined_parts: {
    display_name: "Make Machined Parts",
    building: BUILDINGS.machine_shop,
    input: {
      smelt_steel: 5,
      aluminum_plate: 5,
      power: 40,
      stamina: 5,
    },
    output: {
      machined_parts: [1, 4, 1.66],
    },
  },
  weld_rover_chassis: {
    display_name: "Weld Rover Chassis",
    building: BUILDINGS.machine_shop,
    input: {
      structural_parts: 4,
      machined_parts: 5,
      power: 120,
      stamina: 8,
    },
    output: {
      rover_chassis: [1, 2, 1.1],
    },
  },
  make_rover_wheels: {
    display_name: "Make Rover Wheels",
    building: BUILDINGS.machine_shop,
    input: {
      aluminum_plate: 2,
      titanium_plate: 2,
      power: 40,
      stamina: 4,
    },
    output: {
      rover_wheels: [1, 2, 1.1],
    },
  },
  salvage_rover: {
    display_name: "Salvage Rover (Low Level Shop)",
    building: BUILDINGS.machine_shop,
    input: {
      broken_rover: 1,
      titanum_plate: 2,
      power: 20,
      stamina: 3,
    },
    output: {
      machined_parts: [0, 5, 2],
      electronic_bits: [0, 8, 3.3],
      rover_wheels: [0, 8, 3.3],
      rover_chassis: [0, 1, 0.95],
    },
  },
  salvage_rover_maxed: {
    display_name: "Salvage Rover (High Level Shop)",
    building: BUILDINGS.machine_shop,
    input: {
      broken_rover: 1,
      titanum_plate: 2,
      power: 20,
      stamina: 3,
    },
    output: {
      machined_parts: [0, 5, 2.4],
      electronic_bits: [0, 8, 3.6],
      rover_wheels: [0, 8, 3.6],
      rover_chassis: 1,
    },
  },
  create_air_tank: {
    display_name: "Create Air Tank",
    building: BUILDINGS.machine_shop,
    level: {
      fabrication: 30,
    },
    input: {
      stamina: 8,
      power: 120,
      smelt_steel: 10,
      argon: 1,
      oxygen: 21,
      nitrogen: 78,
      fabrication_tools: 2,
    },
    output: {
      air_tank: 1,
    },
  },
  disassemble_common_solar_panel: {
    display_name: "Disassemble Common Solar Panel",
    building: BUILDINGS.machine_shop,
    level: {
      electrical: 5,
    },
    input: {
      solar_panel_22_C1: 1,
      stamina: 5,
      electrical_tools: 5,
      power: 60,
    },
    output: {
      electronic_bits: 8,
      rover_wires: 7,
      metal_bits: 6,
      shard_solar_panel_C: [1, 2, 1.5],
      aluminum_plate: 1,
    },
  },
  disassemble_uncommon_solar_panel: {
    display_name: "Disassemble Uncommon Solar Panel",
    building: BUILDINGS.machine_shop,
    level: {
      electrical: 10,
    },
    input: {
      solar_panel_22_U1: 1,
      stamina: 5,
      electrical_tools: 5,
      power: 60,
    },
    output: {
      metal_bits: [20, 25, 22.5],
      rover_wires: [15, 20, 17.5],
      shard_solar_panel_U: [2, 3, 2.5],
      electronic_bits: [1, 2, 1.5],
      aluminum_plate: [1, 2, 1.5],
      circuit_component: [1, 2, 1.5],
      glass: 2,
    },
  },
  disassemble_rare_solar_panel: {
    display_name: "Disassemble Rare Solar Panel",
    building: BUILDINGS.machine_shop,
    level: {
      electrical: 20,
    },
    input: {
      solar_panel_22_R1: 1,
      stamina: 5,
      electrical_tools: 5,
      power: 60,
    },
    output: {
      metal_bits: [12, 20, 16],
      rover_wires: 10,
      electronic_bits: 10,
      shard_solar_panel_R: [3, 5, 4],
      glass: 4,
      circuit_component: 3,
      electronics_parts: [1, 2, 1.5],
      smelt_mgs: 2,
      aluminum_plate: 2,
    },
  },
  disassemble_epic_panel: {
    display_name: "Disassemble Epic Solar Panel",
    building: BUILDINGS.machine_shop,
    level: {
      electrical: 30,
    },
    input: {
      solar_panel_22_E1: 1,
      stamina: 5,
      electrical_tools: 5,
      power: 60,
    },
    output: {
      metal_bits: [50, 60, 55],
      rover_wires: [25, 30, 27.5],
      electronic_bits: [15, 20, 17.5],
      shard_solar_panel_E: [10, 15, 12.5],
      circuit_component: [6, 7, 6.5],
      smelt_mgs: [5, 6, 5.5],
      glass: 6,
      electronics_parts: 4,
      aluminum_plate: 2,
    },
  },
  disassemble_legendary_panel: {
    display_name: "Disassemble Legendary Solar Panel",
    building: BUILDINGS.machine_shop,
    level: {
      electrical: 40,
    },
    input: {
      solar_panel_22_L1: 1,
      stamina: 5,
      electrical_tools: 5,
      power: 60,
    },
    output: {
      shard_solar_panel_L: [40, 50, 45],
      rover_wires: [25, 50, 37.5],
      electronic_bits: [10, 30, 20],
      metal_bits: [25, 30, 27.5],
      smelt_mgs: [8, 10, 9],
      circuit_component: 10,
      aluminum_plate: [8, 10, 9],
      electronics_parts: 8,
      glass: 6,
    },
  },
  make_apprentice_electrical_tools: {
    display_name: "Make Apprentice Electrical Tools",
    building: BUILDINGS.machine_shop,
    level: {
      electrical: 35,
      fabrication: 25,
    },
    input: {
      electrical_tools_n: 1,
      metis: 3,
      empty_pc: 1,
      rover_wires: 3,
      power: 20,
      stamina: 5,
    },
    output: {
      electrical_tools_a: 1,
    },
  },
  make_apprentice_machining_tools: {
    display_name: "Make Apprentice Machining Tools",
    building: BUILDINGS.machine_shop,
    level: {
      machining: 40,
      fabrication: 25,
    },
    input: {
      machining_tools_n: 1,
      metis: 5,
      metal_bits: 5,
      electronic_bits: 3,
      power: 50,
      stamina: 5,
    },
    output: {
      machining_tools_a: 1,
    },
  },
  make_electronic_bits: {
    display_name: "Make Electronic Bits",
    building: BUILDINGS.print_shop,
    level: {
      electrical: 5,
    },
    input: {
      smelt_iron: 1,
      rover_wires: 1,
      electrical_tools: 1,
      power: 40,
      stamina: 1,
    },
    output: {
      electronic_bits: [10, 20, 12.85],
      circuit_component: [0, 1, 0.1],
    },
  },
  make_electronics_parts: {
    display_name: "Make Electronics Parts",
    building: BUILDINGS.print_shop,
    level: {
      electrical: 25,
    },
    input: {
      smelt_copper: 10,
      pvc_raw: 2,
      regolith: 500,
      power: 40,
      stamina: 5,
      electrical_tools: 2,
    },
    output: {
      electronics_parts: [1, 4, 1.665],
    },
  },
  make_paper: {
    display_name: "Make Paper",
    building: BUILDINGS.print_shop,
    input: {
      pla: 4,
      bamboo: 8,
      power: 10,
      stamina: 1,
    },
    output: {
      paper: [3, 6, 4.5],
    },
  },
  make_structural_parts: {
    display_name: "Make Structural Parts",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 10,
    },
    input: {
      smelt_steel: 10,
      titanium_plate: 3,
      aluminum_plate: 5,
      power: 40,
      stamina: 4,
    },
    output: {
      structural_parts: [1, 4, 1.665],
    },
  },
  make_mushroom_cake: {
    display_name: "Make Mushroom Cake",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 10,
    },
    input: {
      mushrooms: 20,
      food: 10,
      power: 30,
      stamina: 6,
    },
    output: {
      mushroom_cake: [1, 4, 1.4],
    },
  },
  extrude_pvc_pipe: {
    display_name: "Extrude PVC Pipe",
    building: BUILDINGS.print_shop,
    input: {
      pvc_raw: 3,
      power: 20,
      stamina: 1,
    },
    output: {
      pvc_pipe: [2, 15, 4.111],
    },
  },
  make_novice_scavenging_tools: {
    display_name: "Make Novice Scavenging Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 5,
    },
    input: {
      smelt_aluminum: 1,
      bamboo: 10,
      pvc_raw: 1,
      metis: 3,
      power: 20,
      stamina: 5,
      fabrication_tools: 1,
    },
    output: {
      scavenging_tools_n: 1,
    },
  },
  make_novice_chemistry_tools: {
    display_name: "Make Novice Chemistry Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 20,
    },
    input: {
      argon: 2,
      oxygen: 5,
      pla: 5,
      metis: 5,
      dusk: 10,
      power: 20,
      stamina: 5,
      fabrication_tools: 1,
    },
    output: {
      chemistry_tools_n: 1,
    },
  },
  make_novice_electrical_tools: {
    display_name: "Make Novice Electrical Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 15,
    },
    input: {
      empty_pc: 1,
      rover_wires: 3,
      pvc_raw: 1,
      metis: 3,
      dusk: 10,
      power: 20,
      stamina: 5,
      fabrication_tools: 1,
    },
    output: {
      electrical_tools_n: 1,
    },
  },
  make_novice_fabrication_tools: {
    display_name: "Make Novice Fabrication Tools",
    building: BUILDINGS.print_shop,
    input: {
      pvc_pipe: 1,
      bamboo: 10,
      paper: 5,
      metis: 5,
      dusk: 10,
      power: 20,
      stamina: 5,
    },
    output: {
      fabrication_tools_n: 1,
    },
  },
  make_novice_life_science_tools: {
    display_name: "Make Novice Life Science Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 15,
    },
    input: {
      soil: 25,
      water: 25,
      regolith: 250,
      metis: 3,
      power: 20,
      dusk: 10,
      stamina: 5,
      fabrication_tools: 1,
    },
    output: {
      lifescience_tools_n: 1,
    },
  },
  make_novice_machining_tools: {
    display_name: "Make Novice Machining Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 20,
    },
    input: {
      smelt_steel: 1,
      metal_bits: 5,
      electronic_bits: 3,
      metis: 5,
      dusk: 10,
      power: 40,
      stamina: 5,
      fabrication_tools: 1,
    },
    output: {
      machining_tools_n: 1,
    },
  },
  make_novice_mining_tools: {
    display_name: "Make Novice Mining Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 20,
    },
    input: {
      smelt_iron: 2,
      metal_bits: 10,
      bamboo: 20,
      metis: 5,
      dusk: 10,
      power: 40,
      stamina: 5,
      fabrication_tools: 1,
    },
    output: {
      mining_tools_n: 1,
    },
  },
  make_novice_robotice_tools: {
    display_name: "Make Novice Robotics Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 25,
    },
    input: {
      metal_bits: 5,
      electronic_bits: 5,
      rover_wires: 5,
      metis: 5,
      dusk: 10,
      power: 40,
      stamina: 5,
      fabrication_tools: 2,
    },
    output: {
      robotics_tools_n: 1,
    },
  },
  make_bamboo_furniture: {
    display_name: "Make Bamboo Furniture",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 25,
    },
    input: {
      stamina: 6,
      power: 50,
      bamboo: 25,
      pla: 3,
      fabrication_tools: 2,
    },
    output: {
      bamboo_furniture: 1,
    },
  },
  make_battery_backup: {
    display_name: "Make Battery Backup",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 35,
    },
    input: {
      stamina: 5,
      power: 30,
      empty_pc: 30,
      electronics_parts: 1,
      smelt_steel: 5,
      fabrication_tools: 2,
    },
    output: {
      battery_backup: 1,
    },
  },
  alt_make_battery_backup: {
    display_name: "Alternative Make Battery Backup",
    building: BUILDINGS.print_shop,
    level: {
      electrical: 30,
    },
    input: {
      circuit_component: 8,
      full_pc: 4,
      smelt_copper: 3,
      rover_wires: 40,
      electrical_tools: 5,
      power: 100,
      stamina: 10,
    },
    output: {
      battery_backup: 1,
    },
  },
  pvc_transport: {
    display_name: "PVC Transport",
    building: BUILDINGS.print_shop,
    input: {
      stamina: 2,
      power: 20,
      pvc_pipe: 5,
    },
    output: {
      dusk: [40, 55, 47.5],
      baijiu: [0, 5, 1.5],
    },
  },
  rare_solar_shard: {
    display_name: "Make Rare Solar Shard",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 40,
    },
    input: {
      stamina: 1,
      power: 40,
      siliconcrystals_raw: 2,
      fabrication_tools: 2,
    },
    output: {
      shard_solar_panel_R: [7, 14, 10.5],
    },
  },
  craft_solar_panel: {
    display_name: "Craft Solar Panel (Gen 3)",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 60,
    },
    input: {
      power: 200,
      stamina: 5,
      smelt_mgs: 10,
      aluminum_plate: 3,
      glass: 1,
      minting_token: 3,
      fabrication_tools: 3,
    },
    output: {
      lootset: [
        {
          solar_panel_gen3_C1: [0.465, 1, 1],
        },
        {
          solar_panel_gen3_U1: [0.3, 1, 1],
        },
        {
          solar_panel_gen3_R1: [0.15, 1, 1],
        },
        {
          solar_panel_gen3_E1: [0.06, 1, 1],
        },
        {
          solar_panel_gen3_L1: [0.02, 1, 1],
        },
        {
          solar_panel_gen3_M1: [0.005, 1, 1],
        },
      ],
    },
  },
  create_engineering_bay_kit: {
    display_name: "Create Engineering Bay Kit",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 80,
    },
    input: {
      power: 80,
      stamina: 5,
      dusk: 400,
      bazaar_coin_L: 10,
      bazaar_coin_M: 10,
      minting_token: 5,
      fabrication_tools: 4,
    },
    output: {
      engineering_bay_kit: 1,
    },
  },
  "make_apprentice+_abrication_tools": {
    display_name: "Make Apprentice Fabrication Tools",
    building: BUILDINGS.print_shop,
    level: {
      fabrication: 30,
    },
    input: {
      fabrication_tools_n: 1,
      metis: 5,
      pvc_pipe: 1,
      bamboo: 5,
      paper: 2,
      power: 20,
      stamina: 5,
    },
    output: {
      fabrication_tools_a: 1,
    },
  },
  filter_water: {
    display_name: "Filter Water",
    building: BUILDINGS.water_filter,
    input: {
      power: 10,
      stamina: 1,
      ice: 40,
    },
    output: {
      water: [15, 18, 16.5],
      regolith: [3, 5, 4],
    },
  },
  filter_water2: {
    display_name: "Filter Water II",
    building: BUILDINGS.water_filter,
    level: {
      "life science": 30,
    },
    input: {
      power: 20,
      stamina: 2,
      ice: 100,
      lifescience_tools: 2,
    },
    output: {
      water: [35, 60, 47.5],
      regolith: [8, 12, 10],
    },
  },
  filter_water3: {
    display_name: "Filter Water III",
    building: BUILDINGS.water_filter,
    level: {
      "life science": 60,
    },
    input: {
      power: 30,
      stamina: 3,
      ice: 250,
      lifescience_tools: 3,
    },
    output: {
      water: [75, 125, 100],
      regolith: [12, 18, 15],
    },
  },
  ferment_coffee_beans: {
    display_name: "Ferment Coffee Beans",
    building: BUILDINGS.water_filter,
    level: {
      chemistry: 20,
    },
    input: {
      stamina: 1,
      coffee_cherry: 26,
      power: 10,
    },
    output: {
      coffee_bean_green: [20, 26, 23],
    },
  },
  ferment_sorghum: {
    display_name: "Ferment Sorghum I",
    building: BUILDINGS.water_filter,
    input: {
      stamina: 2,
      sorghum: 6,
      power: 10,
    },
    output: {
      fermented_sorghum: [5, 10, 7.5],
    },
  },
  ferment_sorghum2: {
    display_name: "Ferment Sorghum II",
    building: BUILDINGS.water_filter,
    level: {
      chemistry: 30,
    },
    input: {
      stamina: 2,
      sorghum: 12,
      power: 15,
      chemistry_tools: 1,
    },
    output: {
      fermented_sorghum: [12, 16, 14],
    },
  },
  ferment_sorghum3: {
    display_name: "Ferment Sorghum III",
    building: BUILDINGS.water_filter,
    level: {
      chemistry: 55,
    },
    input: {
      stamina: 3,
      sorghum: 24,
      power: 20,
      chemistry_tools: 2,
    },
    output: {
      fermented_sorghum: [20, 30, 25],
    },
  },
  produce_methane: {
    display_name: "Produce Methane",
    building: BUILDINGS.sab_reactor,
    level: {
      chemistry: 5,
    },
    input: {
      carbon_dioxide: 1,
      hydrogen: 4,
      power: 10,
      stamina: 2,
    },
    output: {
      methane: 1,
      water: 2,
    },
  },
  produce_methane2: {
    display_name: "Produce Methane II",
    building: BUILDINGS.sab_reactor,
    level: {
      chemistry: 40,
    },
    input: {
      carbon_dioxide: 3,
      hydrogen: 12,
      power: 20,
      stamina: 3,
      chemistry_tools: 2,
    },
    output: {
      methane: 3,
      water: 6,
    },
  },
  produce_methane3: {
    display_name: "Produce Methane III",
    building: BUILDINGS.sab_reactor,
    level: {
      chemistry: 80,
    },
    input: {
      carbon_dioxide: 8,
      hydrogen: 32,
      power: 40,
      stamina: 4,
      chemistry_tools: 3,
    },
    output: {
      methane: [5, 12, 7],
      water: 10,
    },
  },
  split_water: {
    display_name: "Split Water",
    building: BUILDINGS.sab_reactor,
    input: {
      water: 8,
      power: 10,
      stamina: 1,
    },
    output: {
      hydrogen: 3,
      oxygen: 2,
    },
  },
  split_water2: {
    display_name: "Split Water II",
    building: BUILDINGS.sab_reactor,
    level: {
      chemistry: 30,
    },
    input: {
      water: 24,
      power: 20,
      stamina: 2,
      chemistry_tools: 2,
    },
    output: {
      hydrogen: 12,
      oxygen: 6,
    },
  },
  split_water3: {
    display_name: "Split Water III",
    building: BUILDINGS.sab_reactor,
    level: {
      chemistry: 70,
    },
    input: {
      water: 48,
      power: 30,
      stamina: 3,
      chemistry_tools: 3,
    },
    output: {
      hydrogen: 24,
      oxygen: 12,
    },
  },
  make_concrete: {
    display_name: "Make Concrete",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 25,
    },
    input: {
      stamina: 3,
      power: 50,
      regolith: 1000,
      water: 100,
      sulfur: 10,
      chemistry_tools: 2,
    },
    output: {
      concrete: [5, 10, 7.5],
    },
  },
  make_pvc: {
    display_name: "Make PVC",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 10,
    },
    input: {
      methane: 3,
      hydrogen: 3,
      water: 3,
      power: 10,
      stamina: 1,
      chemistry_tools: 1,
    },
    output: {
      pvc_raw: [1, 5, 2.15],
    },
  },
  make_pvc2: {
    display_name: "Make PVC II",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 35,
    },
    input: {
      methane: 5,
      hydrogen: 5,
      water: 5,
      power: 20,
      stamina: 2,
      chemistry_tools: 2,
    },
    output: {
      pvc_raw: [2, 9, 4.2222],
    },
  },
  make_pvc3: {
    display_name: "Make PVC III",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 60,
    },
    input: {
      methane: 7,
      hydrogen: 7,
      water: 7,
      power: 30,
      stamina: 3,
      chemistry_tools: 3,
    },
    output: {
      pvc_raw: [4, 13, 6.6666],
    },
  },
  make_pla1: {
    display_name: "Make PLA I",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 5,
    },
    input: {
      fermented_sorghum: 8,
      carbon_dioxide: 2,
      power: 10,
      stamina: 1,
    },
    output: {
      pla: [3, 5, 4],
    },
  },
  make_pla2: {
    display_name: "Make PLA II",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 20,
    },
    input: {
      fermented_sorghum: 20,
      carbon_dioxide: 5,
      power: 20,
      stamina: 2,
    },
    output: {
      pla: [6, 12, 9],
    },
  },
  make_pla3: {
    display_name: "Make PLA III",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 40,
    },
    input: {
      fermented_sorghum: 35,
      carbon_dioxide: 10,
      power: 30,
      stamina: 3,
    },
    output: {
      pla: [12, 24, 18],
    },
  },
  make_perchlorate: {
    display_name: "Make Perchlorate",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 5,
    },
    input: {
      halite: 4,
      water: 5,
      power: 20,
      stamina: 2,
    },
    output: {
      perchlorate: [1, 3, 2],
    },
  },
  craft_empty_pc: {
    display_name: "Craft Empty Power Cell",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 10,
    },
    input: {
      halite: 4,
      water: 5,
      smelt_iron: 1,
      pvc_pipe: 1,
      stamina: 2,
    },
    output: {
      empty_pc: [2, 5, 2.7],
      full_pc: [0, 1, 0.5],
    },
  },
  make_metis_weave: {
    display_name: "Make Metis Weave",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 30,
    },
    input: {
      stamina: 2,
      power: 40,
      metis: 10,
      mushrooms: 8,
      waste: 5,
      water: 10,
      perchlorate: 5,
      chemistry_tools: 2,
    },
    output: {
      metis_weave: [5, 10, 7.5],
    },
  },
  repair_broken_cell: {
    display_name: "Repair Broken Power Cell",
    building: BUILDINGS.chem_lab,
    input: {
      broken_pc: 10,
      power: 20,
      stamina: 1,
    },
    output: {
      empty_pc: [1, 5, 2.25],
    },
  },
  repair_broken_cell2: {
    display_name: "Repair Broken Power Cell II",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 35,
    },
    input: {
      broken_pc: 10,
      power: 18,
      stamina: 1,
      electrical_tools: 2,
    },
    output: {
      empty_pc: [2, 6, 3.55],
    },
  },
  repair_broken_cell3: {
    display_name: "Repair Broken Power Cell III",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 50,
    },
    input: {
      broken_pc: 10,
      power: 15,
      stamina: 1,
      electrical_tools: 3,
    },
    output: {
      empty_pc: [3, 8, 4.4444],
    },
  },
  fab_electrical_grade_silicon: {
    display_name: "Process Electrical Grade Silicon",
    building: BUILDINGS.chem_lab,
    input: {
      power: 60,
      stamina: 1,
      siliconcrystals_raw: 4,
    },
    output: {
      smelt_mgs: [2, 3, 2.1111],
      siliconcrystals_raw: [0, 2, 1.5],
    },
  },
  battery_conditioning1: {
    display_name: "Battery Conditioning I",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 5,
    },
    input: {
      full_pc: 3,
      stamina: 1,
      electrical_tools: 1,
      power: 20,
    },
    output: {
      empty_pc: 3,
    },
  },
  battery_conditioning2: {
    display_name: "Battery Conditioning II",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 15,
    },
    input: {
      full_pc: 6,
      stamina: 2,
      electrical_tools: 2,
      power: 40,
    },
    output: {
      empty_pc: 6,
    },
  },
  battery_conditioning3: {
    display_name: "Battery Conditioning III",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 25,
    },
    input: {
      full_pc: 9,
      stamina: 3,
      electrical_tools: 3,
      power: 60,
    },
    output: {
      empty_pc: 9,
    },
  },
  disassemble_power_cells: {
    display_name: "Disassemble Power Cells",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 30,
    },
    input: {
      empty_pc: 3,
      electrical_tools: 2,
      power: 20,
      stamina: 2,
    },
    output: {
      rover_wires: [12, 20, 16],
      electronic_bits: [12, 20, 16],
      metal_bits: [12, 20, 16],
      halite: [2, 5, 3.5],
    },
  },
  alternative_make_electronic_parts: {
    display_name: "Alternative Make Electronic Parts",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 20,
    },
    input: {
      circuit_component: 5,
      electrical_tools: 3,
      power: 20,
      stamina: 5,
    },
    output: {
      electronics_parts: [1, 4, 1.65],
    },
  },
  alternative_fabricate_wires: {
    display_name: "Alternative Fabricate Wires",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 5,
    },
    input: {
      smelt_copper: 1,
      electrical_tools: 1,
      power: 20,
      stamina: 2,
    },
    output: {
      rover_wires: [10, 20, 12.85],
    },
  },
  alt_make_power_cell: {
    display_name: "Alternative Make Power Cell",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 35,
    },
    input: {
      halite: 3,
      water: 3,
      circuit_component: 1,
      electrical_tools: 3,
      power: 20,
      stamina: 2,
    },
    output: {
      empty_pc: [2, 6, 4],
      full_pc: [0, 4, 1.875],
    },
  },
  fabricate_circuit_component: {
    display_name: "Fabricate Circuit Component",
    building: BUILDINGS.chem_lab,
    level: {
      electrical: 15,
    },
    input: {
      electronic_bits: 5,
      rover_wires: 6,
      siliconcrystals_raw: 1,
      electrical_tools: 1,
      power: 10,
      stamina: 2,
    },
    output: {
      circuit_component: [1, 2, 1.1],
    },
  },
  make_apprentice_chemistry_tools: {
    display_name: "Make Apprentice Chemistry Tools",
    building: BUILDINGS.chem_lab,
    level: {
      chemistry: 35,
      fabrication: 25,
    },
    input: {
      chemistry_tools_n: 1,
      metis: 5,
      oxygen: 1,
      pla: 3,
      power: 20,
      stamina: 4,
    },
    output: {
      chemistry_tools_a: 1,
    },
  },
  grind_beans_s: {
    display_name: "Grind Beans (Small)",
    building: BUILDINGS.grindnbrew,
    level: {
      "life science": 5,
    },
    input: {
      stamina: 1,
      coffee_bean_roasted: 8,
      power: 10,
    },
    output: {
      coffee_ground: [3, 5, 4],
    },
  },
  grind_beans_m: {
    display_name: "Grind Beans (Medium)",
    building: BUILDINGS.grindnbrew,
    level: {
      "life science": 20,
    },
    input: {
      stamina: 1,
      coffee_bean_roasted: 16,
      power: 20,
    },
    output: {
      coffee_ground: [8, 12, 10],
    },
  },
  grind_beans_l: {
    display_name: "Grind Beans (Large)",
    building: BUILDINGS.grindnbrew,
    level: {
      "life science": 35,
    },
    input: {
      stamina: 1,
      coffee_bean_roasted: 28,
      power: 30,
    },
    output: {
      coffee_ground: [14, 20, 17],
    },
  },
  brew_coffee_s: {
    display_name: "Brew Coffee (S)",
    building: BUILDINGS.grindnbrew,
    level: {
      chemistry: 10,
    },
    input: {
      stamina: 1,
      coffee_ground: 4,
      water: 6,
      power: 15,
    },
    output: {
      coffee_brewed: [1, 2, 1.5],
    },
  },
  brew_coffee_m: {
    display_name: "Brew Coffee (M)",
    building: BUILDINGS.grindnbrew,
    level: {
      chemistry: 25,
    },
    input: {
      stamina: 2,
      coffee_ground: 10,
      water: 10,
      power: 20,
    },
    output: {
      coffee_brewed: [3, 5, 4],
    },
  },
  brew_coffee_l: {
    display_name: "Brew Coffee (L)",
    building: BUILDINGS.grindnbrew,
    level: {
      chemistry: 40,
    },
    input: {
      stamina: 3,
      coffee_ground: 16,
      water: 20,
      power: 25,
    },
    output: {
      coffee_brewed: [5, 9, 7],
    },
  },
  charge_power_cell: {
    display_name: "Charge Power Cell",
    building: BUILDINGS.solar_panel,
    input: {
      empty_pc: 1,
      stamina: 1,
    },
    output: {
      full_pc: 1,
    },
  },
  charge_power_cell2: {
    display_name: "Charge Power Cell II",
    building: BUILDINGS.solar_panel,
    level: {
      electrical: 25,
    },
    input: {
      empty_pc: 2,
      stamina: 2,
    },
    output: {
      full_pc: 2,
    },
  },
  charge_power_cell3: {
    display_name: "Charge Power Cell III",
    building: BUILDINGS.solar_panel,
    level: {
      electrical: 50,
    },
    input: {
      empty_pc: 3,
      stamina: 2,
    },
    output: {
      full_pc: 3,
    },
  },
  calibrate_power_inverter: {
    display_name: "Calibrate Power Inverter",
    building: BUILDINGS.solar_panel,
    level: {
      electrical: 15,
    },
    input: {
      stamina: 5,
      full_pc: 1,
      electrical_tools: 2,
      rover_wires: 3,
    },
    output: {
      empty_pc: 1,
      full_pc: [0, 1, 0.1],
    },
  },
  mine_regolith_1: {
    display_name: "Mine Regolith I",
    building: BUILDINGS.mining_rig,
    input: {
      power: 20,
      stamina: 2,
    },
    output: {
      regolith: [100, 200, 128.3],
      barite: [5, 10, 5.3],
      halite: [0, 5, 0.3],
      sulfur: [0, 5, 0.3],
    },
  },
  mine_regolith_2: {
    display_name: "Mine Regolith II",
    building: BUILDINGS.mining_rig,
    input: {
      power: 40,
      stamina: 3,
      barite: 3,
    },
    output: {
      lootlist: [
        {
          regolith: [1, 200, 300],
        },
        {
          regolith: [0.1111, 10, 100],
        },
        {
          barite: [0.75, 5, 10],
        },
        {
          barite: [0.1, 5, 10],
        },
        {
          halite: [0.1, 1, 5],
        },
        {
          sulfur: [0.1, 1, 5],
        },
      ],
    },
  },
  mine_regolith_3: {
    display_name: "Mine Regolith III",
    building: BUILDINGS.mining_rig,
    input: {
      power: 60,
      stamina: 5,
      barite: 10,
    },
    output: {
      regolith: [400, 700, 506.94],
      barite: [0, 5, 0.3],
      sulfur: [0, 5, 0.3],
    },
  },
  mine_ice_1: {
    display_name: "Mine Ice I",
    building: BUILDINGS.mining_rig,
    input: {
      power: 20,
      stamina: 1,
    },
    output: {
      ice: [25, 125, 53.3],
      halite: [0, 10, 0.55],
      barite: [0, 10, 0.55],
      sulfur: [0, 10, 0.55],
    },
  },
  mine_ice_2: {
    display_name: "Mine Ice II",
    building: BUILDINGS.mining_rig,
    input: {
      power: 40,
      stamina: 2,
    },
    output: {
      ice: [100, 300, 156.05],
      barite: [0, 10, 0.55],
      halite: [0, 10, 0.75],
      sulfur: [0, 10, 0.55],
    },
  },
  mine_ice_3: {
    display_name: "Mine Ice III",
    building: BUILDINGS.mining_rig,
    input: {
      power: 60,
      stamina: 4,
    },
    output: {
      ice: [250, 450, 306.94],
      sulfur: [0, 10, 0.55],
    },
  },
  make_apprentice_mining_tools: {
    display_name: "Make Apprentice Mining Tools",
    building: BUILDINGS.mining_rig,
    level: {
      mining: 35,
      fabrication: 25,
    },
    input: {
      mining_tools_n: 1,
      metis: 3,
      smelt_iron: 1,
      metal_bits: 3,
      power: 30,
      stamina: 4,
    },
    output: {
      mining_tools_a: 1,
    },
  },
  assemble_hauling_rover: {
    display_name: "Assemble Hauling Rover",
    building: BUILDINGS.rover_works,
    input: {
      machined_parts: 5,
      electronics_parts: 2,
      rover_chassis: 1,
      rover_wheels: 8,
      stamina: 8,
    },
    output: {
      rover_haul: 1,
    },
  },
  assemble_exploring_rover: {
    display_name: "Assemble Exploring Rover",
    building: BUILDINGS.rover_works,
    input: {
      machined_parts: 3,
      electronics_parts: 8,
      rover_chassis: 1,
      rover_wheels: 4,
      stamina: 8,
    },
    output: {
      rover_explore: 1,
    },
  },
  make_hauling_token_c1: {
    display_name: "Make Hauling Token (Common Lvl 1)",
    building: BUILDINGS.rover_works,
    input: {
      power: 40,
      metis: 14,
      stamina: 5,
    },
    output: {
      hauling_token: [1, 2, 1.1],
    },
  },
  make_hauling_token_e5: {
    display_name: "Make Hauling Token (Epic Lvl 5)",
    building: BUILDINGS.rover_works,
    input: {
      power: 20,
      metis: 6,
      stamina: 5,
    },
    output: {
      hauling_token: [1, 2, 1.1],
    },
  },
  make_apprentice_robotics_tools: {
    display_name: "Make Apprentice Robotics Tools",
    building: BUILDINGS.rover_works,
    level: {
      robotics: 40,
      fabrication: 25,
    },
    input: {
      robotics_tools_n: 1,
      metis: 4,
      metal_bits: 1,
      power: 30,
      stamina: 4,
    },
    output: {
      robotics_tools_a: 1,
    },
  },
  survey_area1: {
    display_name: "Survey Area I",
    building: BUILDINGS.rover_works,
    input: {
      power: 100,
      stamina: 5,
      metal_bits: 15,
      electronic_bits: 15,
      rover_wires: 15,
      barite: 10,
    },
    output: {
      surveyor_coin: 1,
    },
  },
  hauler_missions_1: {
    display_name: "Hauler Missions 1",
    building: BUILDINGS.rover_works,
    input: {
      power: 40,
    },
    output: {
      lootset: [
        {
          percent: 50,
        },
        {
          lootset: [
            {
              ice: [0.1379, 25, 150],
            },
            {
              water: [0.1379, 30, 100],
            },
            {
              smelt_iron: [0.1379, 1, 5],
            },
            {
              smelt_copper: [0.1379, 1, 5],
            },
            {
              smelt_steel: [0.1379, 1, 3],
            },
            {
              surveyor_coin: [0.0345, 1, 1],
            },
            {
              percent: 13.79,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_C: [0.0833, 1, 3],
                },
                {
                  shard_greenhouse_C: [0.0833, 1, 3],
                },
                {
                  shard_solar_panel_C: [0.0833, 1, 3],
                },
                {
                  shard_water_filter_C: [0.0833, 1, 3],
                },
                {
                  shard_cad_C: [0.0833, 1, 3],
                },
                {
                  shard_mining_rig_C: [0.0833, 1, 3],
                },
                {
                  shard_smelter_C: [0.0833, 1, 3],
                },
                {
                  shard_machine_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_sab_reactor_C: [0.0833, 1, 3],
                },
                {
                  shard_chem_lab_C: [0.0833, 1, 3],
                },
                {
                  shard_print_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_rover_works_C: [0.0833, 1, 3],
                },
              ],
            },
            {
              percent: 6.9,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_U: [0.0833, 3, 6],
                },
                {
                  shard_greenhouse_U: [0.0833, 3, 6],
                },
                {
                  shard_solar_panel_U: [0.0833, 3, 6],
                },
                {
                  shard_water_filter_U: [0.0833, 3, 6],
                },
                {
                  shard_cad_U: [0.0833, 3, 6],
                },
                {
                  shard_mining_rig_U: [0.0833, 3, 6],
                },
                {
                  shard_smelter_U: [0.0833, 3, 6],
                },
                {
                  shard_machine_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_sab_reactor_U: [0.0833, 3, 6],
                },
                {
                  shard_chem_lab_U: [0.0833, 3, 6],
                },
                {
                  shard_print_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_rover_works_U: [0.0833, 3, 6],
                },
              ],
            },
            {
              percent: 3.45,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_R: [0.0833, 5, 10],
                },
                {
                  shard_greenhouse_R: [0.0833, 5, 10],
                },
                {
                  shard_solar_panel_R: [0.0833, 5, 10],
                },
                {
                  shard_water_filter_R: [0.0833, 5, 10],
                },
                {
                  shard_cad_R: [0.0833, 5, 10],
                },
                {
                  shard_mining_rig_R: [0.0833, 5, 10],
                },
                {
                  shard_smelter_R: [0.0833, 5, 10],
                },
                {
                  shard_machine_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_sab_reactor_R: [0.0833, 5, 10],
                },
                {
                  shard_chem_lab_R: [0.0833, 5, 10],
                },
                {
                  shard_print_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_rover_works_R: [0.0833, 5, 10],
                },
              ],
            },
            {
              percent: 3.45,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_E: [0.0833, 5, 20],
                },
                {
                  shard_greenhouse_E: [0.0833, 5, 20],
                },
                {
                  shard_solar_panel_E: [0.0833, 5, 20],
                },
                {
                  shard_water_filter_E: [0.0833, 5, 20],
                },
                {
                  shard_cad_E: [0.0833, 5, 20],
                },
                {
                  shard_mining_rig_E: [0.0833, 5, 20],
                },
                {
                  shard_smelter_E: [0.0833, 5, 20],
                },
                {
                  shard_machine_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_sab_reactor_E: [0.0833, 5, 20],
                },
                {
                  shard_chem_lab_E: [0.0833, 5, 20],
                },
                {
                  shard_print_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_rover_works_E: [0.0833, 5, 20],
                },
              ],
            },
          ],
        },
        {
          repeat: 2,
        },
        {
          percent: 50,
        },
        {
          lootset: [
            {
              ice: [0.1379, 25, 150],
            },
            {
              water: [0.1379, 30, 100],
            },
            {
              smelt_iron: [0.1379, 1, 5],
            },
            {
              smelt_copper: [0.1379, 1, 5],
            },
            {
              smelt_steel: [0.1379, 1, 3],
            },
            {
              surveyor_coin: [0.0345, 1, 1],
            },
            {
              percent: 13.79,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_C: [0.0833, 1, 3],
                },
                {
                  shard_greenhouse_C: [0.0833, 1, 3],
                },
                {
                  shard_solar_panel_C: [0.0833, 1, 3],
                },
                {
                  shard_water_filter_C: [0.0833, 1, 3],
                },
                {
                  shard_cad_C: [0.0833, 1, 3],
                },
                {
                  shard_mining_rig_C: [0.0833, 1, 3],
                },
                {
                  shard_smelter_C: [0.0833, 1, 3],
                },
                {
                  shard_machine_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_sab_reactor_C: [0.0833, 1, 3],
                },
                {
                  shard_chem_lab_C: [0.0833, 1, 3],
                },
                {
                  shard_print_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_rover_works_C: [0.0833, 1, 3],
                },
              ],
            },
            {
              percent: 6.9,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_U: [0.0833, 3, 6],
                },
                {
                  shard_greenhouse_U: [0.0833, 3, 6],
                },
                {
                  shard_solar_panel_U: [0.0833, 3, 6],
                },
                {
                  shard_water_filter_U: [0.0833, 3, 6],
                },
                {
                  shard_cad_U: [0.0833, 3, 6],
                },
                {
                  shard_mining_rig_U: [0.0833, 3, 6],
                },
                {
                  shard_smelter_U: [0.0833, 3, 6],
                },
                {
                  shard_machine_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_sab_reactor_U: [0.0833, 3, 6],
                },
                {
                  shard_chem_lab_U: [0.0833, 3, 6],
                },
                {
                  shard_print_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_rover_works_U: [0.0833, 3, 6],
                },
              ],
            },
            {
              percent: 3.45,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_R: [0.0833, 5, 10],
                },
                {
                  shard_greenhouse_R: [0.0833, 5, 10],
                },
                {
                  shard_solar_panel_R: [0.0833, 5, 10],
                },
                {
                  shard_water_filter_R: [0.0833, 5, 10],
                },
                {
                  shard_cad_R: [0.0833, 5, 10],
                },
                {
                  shard_mining_rig_R: [0.0833, 5, 10],
                },
                {
                  shard_smelter_R: [0.0833, 5, 10],
                },
                {
                  shard_machine_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_sab_reactor_R: [0.0833, 5, 10],
                },
                {
                  shard_chem_lab_R: [0.0833, 5, 10],
                },
                {
                  shard_print_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_rover_works_R: [0.0833, 5, 10],
                },
              ],
            },
            {
              percent: 3.45,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_E: [0.0833, 5, 20],
                },
                {
                  shard_greenhouse_E: [0.0833, 5, 20],
                },
                {
                  shard_solar_panel_E: [0.0833, 5, 20],
                },
                {
                  shard_water_filter_E: [0.0833, 5, 20],
                },
                {
                  shard_cad_E: [0.0833, 5, 20],
                },
                {
                  shard_mining_rig_E: [0.0833, 5, 20],
                },
                {
                  shard_smelter_E: [0.0833, 5, 20],
                },
                {
                  shard_machine_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_sab_reactor_E: [0.0833, 5, 20],
                },
                {
                  shard_chem_lab_E: [0.0833, 5, 20],
                },
                {
                  shard_print_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_rover_works_E: [0.0833, 5, 20],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  hauler_missions_2: {
    display_name: "Hauler Missions 2",
    building: BUILDINGS.rover_works,
    input: {
      power: 60,
    },
    output: {
      lootset: [
        {
          repeat: 1.5,
        },
        {
          percent: 50,
        },
        {
          lootlist: [
            {
              lootset: [
                {
                  water: [0.2, 30, 100],
                },
                {
                  dusk: [0.1, 10, 40],
                },
                {
                  smelt_steel: [0.2, 1, 5],
                },
                {
                  smelt_iron: [0.2, 1, 5],
                },
                {
                  smelt_copper: [0.2, 1, 5],
                },
                {
                  surveyor_coin: [0.1, 1, 1],
                },
              ],
            },
            {
              lootset: [
                {
                  percent: 49.38,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_C: [0.0833, 1, 3],
                    },
                    {
                      shard_greenhouse_C: [0.0833, 1, 3],
                    },
                    {
                      shard_solar_panel_C: [0.0833, 1, 3],
                    },
                    {
                      shard_water_filter_C: [0.0833, 1, 3],
                    },
                    {
                      shard_cad_C: [0.0833, 1, 3],
                    },
                    {
                      shard_mining_rig_C: [0.0833, 1, 3],
                    },
                    {
                      shard_smelter_C: [0.0833, 1, 3],
                    },
                    {
                      shard_machine_shop_C: [0.0833, 1, 3],
                    },
                    {
                      shard_sab_reactor_C: [0.0833, 1, 3],
                    },
                    {
                      shard_chem_lab_C: [0.0833, 1, 3],
                    },
                    {
                      shard_print_shop_C: [0.0833, 1, 3],
                    },
                    {
                      shard_rover_works_C: [0.0833, 1, 3],
                    },
                  ],
                },
                {
                  percent: 24.69,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_U: [0.0833, 3, 6],
                    },
                    {
                      shard_greenhouse_U: [0.0833, 3, 6],
                    },
                    {
                      shard_solar_panel_U: [0.0833, 3, 6],
                    },
                    {
                      shard_water_filter_U: [0.0833, 3, 6],
                    },
                    {
                      shard_cad_U: [0.0833, 3, 6],
                    },
                    {
                      shard_mining_rig_U: [0.0833, 3, 6],
                    },
                    {
                      shard_smelter_U: [0.0833, 3, 6],
                    },
                    {
                      shard_machine_shop_U: [0.0833, 3, 6],
                    },
                    {
                      shard_sab_reactor_U: [0.0833, 3, 6],
                    },
                    {
                      shard_chem_lab_U: [0.0833, 3, 6],
                    },
                    {
                      shard_print_shop_U: [0.0833, 3, 6],
                    },
                    {
                      shard_rover_works_U: [0.0833, 3, 6],
                    },
                  ],
                },
                {
                  percent: 18.52,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_R: [0.0833, 5, 10],
                    },
                    {
                      shard_greenhouse_R: [0.0833, 5, 10],
                    },
                    {
                      shard_solar_panel_R: [0.0833, 5, 10],
                    },
                    {
                      shard_water_filter_R: [0.0833, 5, 10],
                    },
                    {
                      shard_cad_R: [0.0833, 5, 10],
                    },
                    {
                      shard_mining_rig_R: [0.0833, 5, 10],
                    },
                    {
                      shard_smelter_R: [0.0833, 5, 10],
                    },
                    {
                      shard_machine_shop_R: [0.0833, 5, 10],
                    },
                    {
                      shard_sab_reactor_R: [0.0833, 5, 10],
                    },
                    {
                      shard_chem_lab_R: [0.0833, 5, 10],
                    },
                    {
                      shard_print_shop_R: [0.0833, 5, 10],
                    },
                    {
                      shard_rover_works_R: [0.0833, 5, 10],
                    },
                  ],
                },
                {
                  percent: 7.41,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_E: [0.0833, 5, 20],
                    },
                    {
                      shard_greenhouse_E: [0.0833, 5, 20],
                    },
                    {
                      shard_solar_panel_E: [0.0833, 5, 20],
                    },
                    {
                      shard_water_filter_E: [0.0833, 5, 20],
                    },
                    {
                      shard_cad_E: [0.0833, 5, 20],
                    },
                    {
                      shard_mining_rig_E: [0.0833, 5, 20],
                    },
                    {
                      shard_smelter_E: [0.0833, 5, 20],
                    },
                    {
                      shard_machine_shop_E: [0.0833, 5, 20],
                    },
                    {
                      shard_sab_reactor_E: [0.0833, 5, 20],
                    },
                    {
                      shard_chem_lab_E: [0.0833, 5, 20],
                    },
                    {
                      shard_print_shop_E: [0.0833, 5, 20],
                    },
                    {
                      shard_rover_works_E: [0.0833, 5, 20],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          repeat: 2.5,
        },
        {
          percent: 50,
        },
        {
          lootlist: [
            {
              lootset: [
                {
                  water: [0.2, 30, 100],
                },
                {
                  dusk: [0.1, 10, 40],
                },
                {
                  smelt_steel: [0.2, 1, 5],
                },
                {
                  smelt_iron: [0.2, 1, 5],
                },
                {
                  smelt_copper: [0.2, 1, 5],
                },
                {
                  surveyor_coin: [0.1, 1, 1],
                },
              ],
            },
            {
              lootset: [
                {
                  percent: 49.38,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_C: [0.0833, 1, 3],
                    },
                    {
                      shard_greenhouse_C: [0.0833, 1, 3],
                    },
                    {
                      shard_solar_panel_C: [0.0833, 1, 3],
                    },
                    {
                      shard_water_filter_C: [0.0833, 1, 3],
                    },
                    {
                      shard_cad_C: [0.0833, 1, 3],
                    },
                    {
                      shard_mining_rig_C: [0.0833, 1, 3],
                    },
                    {
                      shard_smelter_C: [0.0833, 1, 3],
                    },
                    {
                      shard_machine_shop_C: [0.0833, 1, 3],
                    },
                    {
                      shard_sab_reactor_C: [0.0833, 1, 3],
                    },
                    {
                      shard_chem_lab_C: [0.0833, 1, 3],
                    },
                    {
                      shard_print_shop_C: [0.0833, 1, 3],
                    },
                    {
                      shard_rover_works_C: [0.0833, 1, 3],
                    },
                  ],
                },
                {
                  percent: 24.69,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_U: [0.0833, 3, 6],
                    },
                    {
                      shard_greenhouse_U: [0.0833, 3, 6],
                    },
                    {
                      shard_solar_panel_U: [0.0833, 3, 6],
                    },
                    {
                      shard_water_filter_U: [0.0833, 3, 6],
                    },
                    {
                      shard_cad_U: [0.0833, 3, 6],
                    },
                    {
                      shard_mining_rig_U: [0.0833, 3, 6],
                    },
                    {
                      shard_smelter_U: [0.0833, 3, 6],
                    },
                    {
                      shard_machine_shop_U: [0.0833, 3, 6],
                    },
                    {
                      shard_sab_reactor_U: [0.0833, 3, 6],
                    },
                    {
                      shard_chem_lab_U: [0.0833, 3, 6],
                    },
                    {
                      shard_print_shop_U: [0.0833, 3, 6],
                    },
                    {
                      shard_rover_works_U: [0.0833, 3, 6],
                    },
                  ],
                },
                {
                  percent: 18.52,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_R: [0.0833, 5, 10],
                    },
                    {
                      shard_greenhouse_R: [0.0833, 5, 10],
                    },
                    {
                      shard_solar_panel_R: [0.0833, 5, 10],
                    },
                    {
                      shard_water_filter_R: [0.0833, 5, 10],
                    },
                    {
                      shard_cad_R: [0.0833, 5, 10],
                    },
                    {
                      shard_mining_rig_R: [0.0833, 5, 10],
                    },
                    {
                      shard_smelter_R: [0.0833, 5, 10],
                    },
                    {
                      shard_machine_shop_R: [0.0833, 5, 10],
                    },
                    {
                      shard_sab_reactor_R: [0.0833, 5, 10],
                    },
                    {
                      shard_chem_lab_R: [0.0833, 5, 10],
                    },
                    {
                      shard_print_shop_R: [0.0833, 5, 10],
                    },
                    {
                      shard_rover_works_R: [0.0833, 5, 10],
                    },
                  ],
                },
                {
                  percent: 7.41,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_E: [0.0833, 5, 20],
                    },
                    {
                      shard_greenhouse_E: [0.0833, 5, 20],
                    },
                    {
                      shard_solar_panel_E: [0.0833, 5, 20],
                    },
                    {
                      shard_water_filter_E: [0.0833, 5, 20],
                    },
                    {
                      shard_cad_E: [0.0833, 5, 20],
                    },
                    {
                      shard_mining_rig_E: [0.0833, 5, 20],
                    },
                    {
                      shard_smelter_E: [0.0833, 5, 20],
                    },
                    {
                      shard_machine_shop_E: [0.0833, 5, 20],
                    },
                    {
                      shard_sab_reactor_E: [0.0833, 5, 20],
                    },
                    {
                      shard_chem_lab_E: [0.0833, 5, 20],
                    },
                    {
                      shard_print_shop_E: [0.0833, 5, 20],
                    },
                    {
                      shard_rover_works_E: [0.0833, 5, 20],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  explorer_scavenging: {
    display_name: "Explorer Scavenging",
    building: BUILDINGS.rover_works,
    input: {
      power: 80,
    },
    output: {
      lootset: [
        {
          repeat: 2,
        },
        {
          lootset: [
            {
              smelt_iron: [0.1143, 1, 3],
            },
            {
              smelt_copper: [0.1143, 1, 3],
            },
            {
              smelt_titanium: [0.0286, 1, 3],
            },
            {
              smelt_aluminum: [0.0286, 1, 3],
            },
            {
              smelt_steel: [0.1143, 1, 3],
            },
            {
              vibes: [0.2286, 1, 3],
            },
            {
              surveyor_coin: [0.0286, 1, 1],
            },
            {
              percent: 32.49,
            },
            {
              lootset: [
                {
                  sprout_seed: [0.1429, 5, 5],
                },
                {
                  bamboo_seed: [0.1429, 5, 5],
                },
                {
                  carrot_seed: [0.1429, 4, 4],
                },
                {
                  lettuce_seed: [0.1429, 3, 3],
                },
                {
                  sweet_potato_seed: [0.1429, 2, 2],
                },
                {
                  coffee_seed: [0.1429, 2, 2],
                },
                {
                  soy_seed: [0.1429, 1, 1],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  adv_explorer_scavenging: {
    display_name: "Adv. Explorer Scavenging",
    building: BUILDINGS.rover_works,
    input: {
      power: 100,
    },
    output: {
      lootlist: [
        {
          repeat: 3,
        },
        {
          lootlist: [
            {
              lootset: [
                {
                  dusk: [0.6667, 10, 55],
                },
                {
                  surveyor_coin: [0.3333, 1, 1],
                },
              ],
            },
            {
              lootset: [
                {
                  percent: 30,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_C: [0.101, 1, 3],
                    },
                    {
                      shard_greenhouse_C: [0.101, 1, 3],
                    },
                    {
                      shard_solar_panel_C: [0.101, 1, 3],
                    },
                    {
                      shard_water_filter_C: [0.101, 1, 3],
                    },
                    {
                      shard_cad_C: [0.0833, 1, 3],
                    },
                    {
                      shard_mining_rig_C: [0.0202, 1, 3],
                    },
                    {
                      shard_smelter_C: [0.0909, 1, 3],
                    },
                    {
                      shard_machine_shop_C: [0.0909, 1, 3],
                    },
                    {
                      shard_sab_reactor_C: [0.0909, 1, 3],
                    },
                    {
                      shard_chem_lab_C: [0.0909, 1, 3],
                    },
                    {
                      shard_print_shop_C: [0.0909, 1, 3],
                    },
                    {
                      shard_rover_works_C: [0.0202, 1, 3],
                    },
                  ],
                },
                {
                  percent: 25,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_U: [0.1124, 3, 6],
                    },
                    {
                      shard_greenhouse_U: [0.1124, 3, 6],
                    },
                    {
                      shard_solar_panel_U: [0.1124, 3, 6],
                    },
                    {
                      shard_water_filter_U: [0.1124, 3, 6],
                    },
                    {
                      shard_cad_U: [0.1124, 3, 6],
                    },
                    {
                      shard_mining_rig_U: [0.0225, 3, 6],
                    },
                    {
                      shard_smelter_U: [0.1011, 3, 6],
                    },
                    {
                      shard_machine_shop_U: [0.1011, 3, 6],
                    },
                    {
                      shard_sab_reactor_U: [0.1011, 3, 6],
                    },
                    {
                      shard_chem_lab_U: [0.1011, 3, 6],
                    },
                    {
                      shard_print_shop_U: [0.1011, 3, 6],
                    },
                    {
                      shard_rover_works_U: [0.0225, 3, 6],
                    },
                  ],
                },
                {
                  percent: 25,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_R: [0.1124, 5, 10],
                    },
                    {
                      shard_greenhouse_R: [0.1124, 5, 10],
                    },
                    {
                      shard_solar_panel_R: [0.1124, 5, 10],
                    },
                    {
                      shard_water_filter_R: [0.1124, 5, 10],
                    },
                    {
                      shard_cad_R: [0.1124, 5, 10],
                    },
                    {
                      shard_mining_rig_R: [0.0225, 5, 10],
                    },
                    {
                      shard_smelter_R: [0.1011, 5, 10],
                    },
                    {
                      shard_machine_shop_R: [0.1011, 5, 10],
                    },
                    {
                      shard_sab_reactor_R: [0.1011, 5, 10],
                    },
                    {
                      shard_chem_lab_R: [0.1011, 5, 10],
                    },
                    {
                      shard_print_shop_R: [0.1011, 5, 10],
                    },
                    {
                      shard_rover_works_R: [0.0225, 5, 10],
                    },
                  ],
                },
                {
                  percent: 15,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_E: [0.1124, 5, 15],
                    },
                    {
                      shard_greenhouse_E: [0.1124, 5, 15],
                    },
                    {
                      shard_solar_panel_E: [0.1124, 5, 15],
                    },
                    {
                      shard_water_filter_E: [0.1124, 5, 15],
                    },
                    {
                      shard_cad_E: [0.1124, 5, 15],
                    },
                    {
                      shard_mining_rig_E: [0.0225, 5, 15],
                    },
                    {
                      shard_smelter_E: [0.1011, 5, 15],
                    },
                    {
                      shard_machine_shop_E: [0.1011, 5, 15],
                    },
                    {
                      shard_sab_reactor_E: [0.1011, 5, 15],
                    },
                    {
                      shard_chem_lab_E: [0.1011, 5, 15],
                    },
                    {
                      shard_print_shop_E: [0.1011, 5, 15],
                    },
                    {
                      shard_rover_works_E: [0.0225, 5, 15],
                    },
                  ],
                },
                {
                  percent: 7,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_L: [0.1124, 10, 20],
                    },
                    {
                      shard_greenhouse_L: [0.1124, 10, 20],
                    },
                    {
                      shard_solar_panel_L: [0.1124, 10, 20],
                    },
                    {
                      shard_water_filter_L: [0.1124, 10, 20],
                    },
                    {
                      shard_cad_L: [0.1124, 10, 20],
                    },
                    {
                      shard_mining_rig_L: [0.0225, 10, 20],
                    },
                    {
                      shard_smelter_L: [0.1011, 10, 20],
                    },
                    {
                      shard_machine_shop_L: [0.1011, 10, 20],
                    },
                    {
                      shard_sab_reactor_L: [0.1011, 10, 20],
                    },
                    {
                      shard_chem_lab_L: [0.1011, 10, 20],
                    },
                    {
                      shard_print_shop_L: [0.1011, 10, 20],
                    },
                    {
                      shard_rover_works_L: [0.0225, 10, 20],
                    },
                  ],
                },
                {
                  percent: 3,
                },
                {
                  lootset: [
                    {
                      shard_grindnbrew_M: [0.1124, 10, 25],
                    },
                    {
                      shard_greenhouse_M: [0.1124, 10, 25],
                    },
                    {
                      shard_solar_panel_M: [0.1124, 10, 25],
                    },
                    {
                      shard_water_filter_M: [0.1124, 10, 25],
                    },
                    {
                      shard_cad_M: [0.1124, 10, 25],
                    },
                    {
                      shard_mining_rig_M: [0.0225, 10, 25],
                    },
                    {
                      shard_smelter_M: [0.1011, 10, 25],
                    },
                    {
                      shard_machine_shop_M: [0.1011, 10, 25],
                    },
                    {
                      shard_sab_reactor_M: [0.1011, 10, 25],
                    },
                    {
                      shard_chem_lab_M: [0.1011, 10, 25],
                    },
                    {
                      shard_print_shop_M: [0.1011, 10, 25],
                    },
                    {
                      shard_rover_works_M: [0.0225, 10, 25],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  "explorer_mission_1-1": {
    display_name: "Explorer Mission 1.1",
    building: BUILDINGS.rover_works,
    input: {
      power: 80,
    },
    output: {
      lootset: [
        {
          repeat: 2.5,
        },
        {
          percent: 50,
        },
        {
          lootset: [
            {
              smelt_titanium: [0.1319, 1, 5],
            },
            {
              smelt_aluminum: [0.1319, 1, 5],
            },
            {
              smelt_steel: [0.1319, 1, 5],
            },
            {
              surveyor_coin: [0.033, 1, 1],
            },
            {
              percent: 19.78,
            },
            {
              lootet: [
                {
                  shard_grindnbrew_C: [0.0833, 1, 3],
                },
                {
                  shard_greenhouse_C: [0.0833, 1, 3],
                },
                {
                  shard_solar_panel_C: [0.0833, 1, 3],
                },
                {
                  shard_water_filter_C: [0.0833, 1, 3],
                },
                {
                  shard_cad_C: [0.0833, 1, 3],
                },
                {
                  shard_mining_rig_C: [0.0833, 1, 3],
                },
                {
                  shard_smelter_C: [0.0833, 1, 3],
                },
                {
                  shard_machine_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_sab_reactor_C: [0.0833, 1, 3],
                },
                {
                  shard_chem_lab_C: [0.0833, 1, 3],
                },
                {
                  shard_print_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_rover_works_C: [0.0833, 1, 3],
                },
              ],
            },
            {
              percent: 13.19,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_U: [0.0833, 3, 6],
                },
                {
                  shard_greenhouse_U: [0.0833, 3, 6],
                },
                {
                  shard_solar_panel_U: [0.0833, 3, 6],
                },
                {
                  shard_water_filter_U: [0.0833, 3, 6],
                },
                {
                  shard_cad_U: [0.0833, 3, 6],
                },
                {
                  shard_mining_rig_U: [0.0833, 3, 6],
                },
                {
                  shard_smelter_U: [0.0833, 3, 6],
                },
                {
                  shard_machine_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_sab_reactor_U: [0.0833, 3, 6],
                },
                {
                  shard_chem_lab_U: [0.0833, 3, 6],
                },
                {
                  shard_print_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_rover_works_U: [0.0833, 3, 6],
                },
              ],
            },
            {
              percent: 10.99,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_R: [0.0833, 5, 10],
                },
                {
                  shard_greenhouse_R: [0.0833, 5, 10],
                },
                {
                  shard_solar_panel_R: [0.0833, 5, 10],
                },
                {
                  shard_water_filter_R: [0.0833, 5, 10],
                },
                {
                  shard_cad_R: [0.0833, 5, 10],
                },
                {
                  shard_mining_rig_R: [0.0833, 5, 10],
                },
                {
                  shard_smelter_R: [0.0833, 5, 10],
                },
                {
                  shard_machine_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_sab_reactor_R: [0.0833, 5, 10],
                },
                {
                  shard_chem_lab_R: [0.0833, 5, 10],
                },
                {
                  shard_print_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_rover_works_R: [0.0833, 5, 10],
                },
              ],
            },
            {
              percent: 6.59,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_E: [0.0833, 5, 20],
                },
                {
                  shard_greenhouse_E: [0.0833, 5, 20],
                },
                {
                  shard_solar_panel_E: [0.0833, 5, 20],
                },
                {
                  shard_water_filter_E: [0.0833, 5, 20],
                },
                {
                  shard_cad_E: [0.0833, 5, 20],
                },
                {
                  shard_mining_rig_E: [0.0833, 5, 20],
                },
                {
                  shard_smelter_E: [0.0833, 5, 20],
                },
                {
                  shard_machine_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_sab_reactor_E: [0.0833, 5, 20],
                },
                {
                  shard_chem_lab_E: [0.0833, 5, 20],
                },
                {
                  shard_print_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_rover_works_E: [0.0833, 5, 20],
                },
              ],
            },
            {
              percent: 4.4,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_L: [0.0833, 20, 40],
                },
                {
                  shard_greenhouse_L: [0.0833, 20, 40],
                },
                {
                  shard_solar_panel_L: [0.0833, 20, 40],
                },
                {
                  shard_water_filter_L: [0.0833, 20, 40],
                },
                {
                  shard_cad_L: [0.0833, 20, 40],
                },
                {
                  shard_mining_rig_L: [0.0833, 20, 40],
                },
                {
                  shard_smelter_L: [0.0833, 20, 40],
                },
                {
                  shard_machine_shop_L: [0.0833, 20, 40],
                },
                {
                  shard_sab_reactor_L: [0.0833, 20, 40],
                },
                {
                  shard_chem_lab_L: [0.0833, 20, 40],
                },
                {
                  shard_print_shop_L: [0.0833, 20, 40],
                },
                {
                  shard_rover_works_L: [0.0833, 20, 40],
                },
              ],
            },
            {
              percent: 2.2,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_M: [0.0833, 25, 45],
                },
                {
                  shard_greenhouse_M: [0.0833, 25, 45],
                },
                {
                  shard_solar_panel_M: [0.0833, 25, 45],
                },
                {
                  shard_water_filter_M: [0.0833, 25, 45],
                },
                {
                  shard_cad_M: [0.0833, 25, 45],
                },
                {
                  shard_mining_rig_M: [0.0833, 25, 45],
                },
                {
                  shard_smelter_M: [0.0833, 25, 45],
                },
                {
                  shard_machine_shop_M: [0.0833, 25, 45],
                },
                {
                  shard_sab_reactor_M: [0.0833, 25, 45],
                },
                {
                  shard_chem_lab_M: [0.0833, 25, 45],
                },
                {
                  shard_print_shop_M: [0.0833, 25, 45],
                },
                {
                  shard_rover_works_M: [0.0833, 25, 45],
                },
              ],
            },
          ],
        },
        {
          repeat: 3.5,
        },
        {
          percent: 50,
        },
        {
          lootset: [
            {
              smelt_titanium: [0.1319, 1, 5],
            },
            {
              smelt_aluminum: [0.1319, 1, 5],
            },
            {
              smelt_steel: [0.1319, 1, 5],
            },
            {
              surveyor_coin: [0.033, 1, 1],
            },
            {
              percent: 19.78,
            },
            {
              lootet: [
                {
                  shard_grindnbrew_C: [0.0833, 1, 3],
                },
                {
                  shard_greenhouse_C: [0.0833, 1, 3],
                },
                {
                  shard_solar_panel_C: [0.0833, 1, 3],
                },
                {
                  shard_water_filter_C: [0.0833, 1, 3],
                },
                {
                  shard_cad_C: [0.0833, 1, 3],
                },
                {
                  shard_mining_rig_C: [0.0833, 1, 3],
                },
                {
                  shard_smelter_C: [0.0833, 1, 3],
                },
                {
                  shard_machine_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_sab_reactor_C: [0.0833, 1, 3],
                },
                {
                  shard_chem_lab_C: [0.0833, 1, 3],
                },
                {
                  shard_print_shop_C: [0.0833, 1, 3],
                },
                {
                  shard_rover_works_C: [0.0833, 1, 3],
                },
              ],
            },
            {
              percent: 13.19,
            },
            {
              lootet: [
                {
                  shard_grindnbrew_U: [0.0833, 3, 6],
                },
                {
                  shard_greenhouse_U: [0.0833, 3, 6],
                },
                {
                  shard_solar_panel_U: [0.0833, 3, 6],
                },
                {
                  shard_water_filter_U: [0.0833, 3, 6],
                },
                {
                  shard_cad_U: [0.0833, 3, 6],
                },
                {
                  shard_mining_rig_U: [0.0833, 3, 6],
                },
                {
                  shard_smelter_U: [0.0833, 3, 6],
                },
                {
                  shard_machine_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_sab_reactor_U: [0.0833, 3, 6],
                },
                {
                  shard_chem_lab_U: [0.0833, 3, 6],
                },
                {
                  shard_print_shop_U: [0.0833, 3, 6],
                },
                {
                  shard_rover_works_U: [0.0833, 3, 6],
                },
              ],
            },
            {
              percent: 10.99,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_R: [0.0833, 5, 10],
                },
                {
                  shard_greenhouse_R: [0.0833, 5, 10],
                },
                {
                  shard_solar_panel_R: [0.0833, 5, 10],
                },
                {
                  shard_water_filter_R: [0.0833, 5, 10],
                },
                {
                  shard_cad_R: [0.0833, 5, 10],
                },
                {
                  shard_mining_rig_R: [0.0833, 5, 10],
                },
                {
                  shard_smelter_R: [0.0833, 5, 10],
                },
                {
                  shard_machine_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_sab_reactor_R: [0.0833, 5, 10],
                },
                {
                  shard_chem_lab_R: [0.0833, 5, 10],
                },
                {
                  shard_print_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_rover_works_R: [0.0833, 5, 10],
                },
              ],
            },
            {
              percent: 6.59,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_E: [0.0833, 5, 20],
                },
                {
                  shard_greenhouse_E: [0.0833, 5, 20],
                },
                {
                  shard_solar_panel_E: [0.0833, 5, 20],
                },
                {
                  shard_water_filter_E: [0.0833, 5, 20],
                },
                {
                  shard_cad_E: [0.0833, 5, 20],
                },
                {
                  shard_mining_rig_E: [0.0833, 5, 20],
                },
                {
                  shard_smelter_E: [0.0833, 5, 20],
                },
                {
                  shard_machine_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_sab_reactor_E: [0.0833, 5, 20],
                },
                {
                  shard_chem_lab_E: [0.0833, 5, 20],
                },
                {
                  shard_print_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_rover_works_E: [0.0833, 5, 20],
                },
              ],
            },
            {
              percent: 4.4,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_L: [0.0833, 20, 40],
                },
                {
                  shard_greenhouse_L: [0.0833, 20, 40],
                },
                {
                  shard_solar_panel_L: [0.0833, 20, 40],
                },
                {
                  shard_water_filter_L: [0.0833, 20, 40],
                },
                {
                  shard_cad_L: [0.0833, 20, 40],
                },
                {
                  shard_mining_rig_L: [0.0833, 20, 40],
                },
                {
                  shard_smelter_L: [0.0833, 20, 40],
                },
                {
                  shard_machine_shop_L: [0.0833, 20, 40],
                },
                {
                  shard_sab_reactor_L: [0.0833, 20, 40],
                },
                {
                  shard_chem_lab_L: [0.0833, 20, 40],
                },
                {
                  shard_print_shop_L: [0.0833, 20, 40],
                },
                {
                  shard_rover_works_L: [0.0833, 20, 40],
                },
              ],
            },
            {
              percent: 2.2,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_M: [0.0833, 25, 50],
                },
                {
                  shard_greenhouse_M: [0.0833, 25, 50],
                },
                {
                  shard_solar_panel_M: [0.0833, 25, 50],
                },
                {
                  shard_water_filter_M: [0.0833, 25, 50],
                },
                {
                  shard_cad_M: [0.0833, 25, 50],
                },
                {
                  shard_mining_rig_M: [0.0833, 25, 50],
                },
                {
                  shard_smelter_M: [0.0833, 25, 50],
                },
                {
                  shard_machine_shop_M: [0.0833, 25, 50],
                },
                {
                  shard_sab_reactor_M: [0.0833, 25, 50],
                },
                {
                  shard_chem_lab_M: [0.0833, 25, 50],
                },
                {
                  shard_print_shop_M: [0.0833, 25, 50],
                },
                {
                  shard_rover_works_M: [0.0833, 25, 50],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  "explorer_mission_2-1": {
    display_name: "Explorer Mission 2.1",
    building: BUILDINGS.rover_works,
    input: {
      power: 100,
    },
    output: {
      lootlist: [
        {
          repeat: 2,
        },
        {
          lootset: [
            {
              dusk: [0.137, 10, 40],
            },
            {
              smelt_titanium: [0.274, 1, 5],
            },
            {
              smelt_aluminum: [0.274, 1, 5],
            },
            {
              smelt_steel: [0.274, 1, 5],
            },
            {
              surveyor_coin: [0.0411, 1, 1],
            },
          ],
        },
        {
          repeat: 2,
        },
        {
          lootset: [
            {
              percent: 56,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_R: [0.0833, 5, 10],
                },
                {
                  shard_greenhouse_R: [0.0833, 5, 10],
                },
                {
                  shard_solar_panel_R: [0.0833, 5, 10],
                },
                {
                  shard_water_filter_R: [0.0833, 5, 10],
                },
                {
                  shard_cad_R: [0.0833, 5, 10],
                },
                {
                  shard_mining_rig_R: [0.0833, 5, 10],
                },
                {
                  shard_smelter_R: [0.0833, 5, 10],
                },
                {
                  shard_machine_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_sab_reactor_R: [0.0833, 5, 10],
                },
                {
                  shard_chem_lab_R: [0.0833, 5, 10],
                },
                {
                  shard_print_shop_R: [0.0833, 5, 10],
                },
                {
                  shard_rover_works_R: [0.0833, 5, 10],
                },
              ],
            },
            {
              percent: 24,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_E: [0.0833, 5, 20],
                },
                {
                  shard_greenhouse_E: [0.0833, 5, 20],
                },
                {
                  shard_solar_panel_E: [0.0833, 5, 20],
                },
                {
                  shard_water_filter_E: [0.0833, 5, 20],
                },
                {
                  shard_cad_E: [0.0833, 5, 20],
                },
                {
                  shard_mining_rig_E: [0.0833, 5, 20],
                },
                {
                  shard_smelter_E: [0.0833, 5, 20],
                },
                {
                  shard_machine_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_sab_reactor_E: [0.0833, 5, 20],
                },
                {
                  shard_chem_lab_E: [0.0833, 5, 20],
                },
                {
                  shard_print_shop_E: [0.0833, 5, 20],
                },
                {
                  shard_rover_works_E: [0.0833, 5, 20],
                },
              ],
            },
            {
              percent: 16,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_L: [0.0833, 20, 40],
                },
                {
                  shard_greenhouse_L: [0.0833, 20, 40],
                },
                {
                  shard_solar_panel_L: [0.0833, 20, 40],
                },
                {
                  shard_water_filter_L: [0.0833, 20, 40],
                },
                {
                  shard_cad_L: [0.0833, 20, 40],
                },
                {
                  shard_mining_rig_L: [0.0833, 20, 40],
                },
                {
                  shard_smelter_L: [0.0833, 20, 40],
                },
                {
                  shard_machine_shop_L: [0.0833, 20, 40],
                },
                {
                  shard_sab_reactor_L: [0.0833, 20, 40],
                },
                {
                  shard_chem_lab_L: [0.0833, 20, 40],
                },
                {
                  shard_print_shop_L: [0.0833, 20, 40],
                },
                {
                  shard_rover_works_L: [0.0833, 20, 40],
                },
              ],
            },
            {
              percent: 4,
            },
            {
              lootset: [
                {
                  shard_grindnbrew_M: [0.0833, 25, 50],
                },
                {
                  shard_greenhouse_M: [0.0833, 25, 50],
                },
                {
                  shard_solar_panel_M: [0.0833, 25, 50],
                },
                {
                  shard_water_filter_M: [0.0833, 25, 50],
                },
                {
                  shard_cad_M: [0.0833, 25, 50],
                },
                {
                  shard_mining_rig_M: [0.0833, 25, 50],
                },
                {
                  shard_smelter_M: [0.0833, 25, 50],
                },
                {
                  shard_machine_shop_M: [0.0833, 25, 50],
                },
                {
                  shard_sab_reactor_M: [0.0833, 25, 50],
                },
                {
                  shard_chem_lab_M: [0.0833, 25, 50],
                },
                {
                  shard_print_shop_M: [0.0833, 25, 50],
                },
                {
                  shard_rover_works_M: [0.0833, 25, 50],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  rodriguez_well: {
    display_name: "Rodriguez Well",
    building: BUILDINGS.polar_workshop,
    input: {
      power: 10,
      stamina: 1,
    },
    output: {
      water: [8, 12, 10],
    },
  },
  ice_drilling: {
    display_name: "Ice Drilling",
    building: BUILDINGS.polar_workshop,
    input: {
      power: 10,
      stamina: 1,
    },
    output: {
      ice: [14, 40, 27],
    },
  },
  stem_sets: {
    display_name: "STEM sets for Earthlings",
    building: BUILDINGS.polar_workshop,
    level: {
      fabrication: 15,
    },
    input: {
      stamina: 2,
      power: 50,
      ice: 1000,
      regolith: 1000,
      aluminum_plate: 4,
      fabrication_tools: 1,
    },
    output: {
      lootset: [
        {
          dusk: [0.011, 1500, 2000],
        },
        {
          dusk: [0.0549, 600, 800],
        },
        {
          dusk: [0.0549, 200, 300],
        },
        {
          dusk: [0.0549, 150, 200],
        },
        {
          dusk: [0.0549, 100, 150],
        },
        {
          dusk: [0.7692, 75, 100],
        },
      ],
    },
  },
  baijiu: {
    display_name: "Baijiu",
    building: BUILDINGS.tea_shop,
    input: {
      power: 10,
      fermented_sorghum: 3,
      bamboo: 2,
      water: 3,
      stamina: 3,
    },
    output: {
      baijiu: [2, 3, 2.5],
    },
  },
  mushroom_tea: {
    display_name: "Mushroom Tea",
    building: BUILDINGS.tea_shop,
    level: {
      "life science": 15,
    },
    input: {
      mushrooms: 10,
      water: 10,
      power: 20,
      stamina: 4,
    },
    output: {
      mushroom_tea: [1, 4, 1.4],
    },
  },
  baijiu_by_the_case: {
    display_name: "Baijiu By the Case",
    building: BUILDINGS.tea_shop,
    level: {
      fabrication: 10,
    },
    input: {
      baijiu: 24,
      power: 20,
      stamina: 3,
    },
    output: {
      lootset: [
        {
          dusk: [0.0338, 1000, 3000],
        },
        {
          dusk: [0.0483, 250, 500],
        },
        {
          dusk: [0.0483, 200, 250],
        },
        {
          dusk: [0.0966, 130, 200],
        },
        {
          dusk: [0.1932, 100, 170],
        },
        {
          dusk: [0.5797, 0, 100],
        },
      ],
    },
  },
  aqua_ares: {
    display_name: "AQUA ARES",
    building: BUILDINGS.tea_shop,
    level: {
      fabrication: 5,
    },
    input: {
      water: 100,
      paper: 12,
      pla: 12,
      power: 20,
      stamina: 1,
    },
    output: {
      lootset: [
        {
          dusk: [0.005, 200, 20000],
        },
        {
          dusk: [0.02, 250, 500],
        },
        {
          dusk: [0.06, 200, 210],
        },
        {
          dusk: [0.15, 150, 180],
        },
        {
          dusk: [0.3, 135, 150],
        },
        {
          dusk: [0.465, 0, 100],
        },
      ],
    },
  },
  bamboo_by_skal: {
    display_name: "Bamboo by Skal",
    building: BUILDINGS.tea_shop,
    level: {
      fabrication: 5,
    },
    input: {
      paper: 2,
      bamboo: 100,
      pla: 4,
      power: 50,
      stamina: 4,
    },
    output: {
      lootset: [
        {
          dusk: [0.005, 50, 500],
        },
        {
          dusk: [0.02, 200, 250],
        },
        {
          dusk: [0.06, 180, 200],
        },
        {
          dusk: [0.15, 50, 125],
        },
        {
          dusk: [0.3, 125, 180],
        },
        {
          dusk: [0.465, 0, 75],
        },
      ],
    },
  },
  ceramics_by_yingge: {
    display_name: "Ceramics By Yingge",
    building: BUILDINGS.tea_shop,
    level: {
      fabrication: 5,
    },
    input: {
      regolith: 2000,
      water: 100,
      pla: 10,
      power: 20,
      stamina: 2,
    },
    output: {
      lootset: [
        {
          dusk: [0.0099, 5000, 5000],
        },
        {
          dusk: [0.0198, 1000, 1000],
        },
        {
          dusk: [0.0495, 500, 500],
        },
        {
          dusk: [0.0792, 200, 200],
        },
        {
          dusk: [0.1485, 100, 100],
        },
        {
          soil: [0.6931, 1, 1],
        },
      ],
    },
  },
  freshmen_research_paper: {
    display_name: "Freshmen Research Paper",
    building: BUILDINGS.library,
    input: {
      stamina: 4,
      power: 10,
      paper: 3,
    },
    output: {
      shard_research: 2,
    },
  },
  senior_research_paper: {
    display_name: "Senior Research Paper",
    building: BUILDINGS.library,
    input: {
      stamina: 8,
      power: 20,
      paper: 6,
    },
    output: {
      shard_research: 5,
    },
  },
  graduate_research_paper: {
    display_name: "Graduate Research Paper",
    building: BUILDINGS.library,
    input: {
      stamina: 16,
      power: 30,
      paper: 15,
    },
    output: {
      shard_research: 12,
    },
  },
  study_session: {
    display_name: "Study Session",
    building: BUILDINGS.library,
    input: {
      stamina: 5,
      power: 15,
      paper: 3,
      vibes: 1,
    },
    output: {
      shard_research: [3, 5, 4],
    },
  },
  group_study_session: {
    display_name: "Group Study Session",
    building: BUILDINGS.library,
    input: {
      stamina: 10,
      power: 25,
      paper: 8,
      vibes: 2,
    },
    output: {
      shard_research: [7, 13, 10],
    },
  },
  areology_110: {
    display_name: "Areology 110",
    building: BUILDINGS.library,
    input: {
      stamina: 2,
      power: 10,
      water_rich_clay: 5,
      barite: 5,
      halite: 10,
      shard_research: 1,
    },
    output: {
      research_mining_n: 1,
    },
  },
  areology_210: {
    display_name: "Areology 210",
    building: BUILDINGS.library,
    level: {
      mining: 25,
    },
    day: ["tue", "sat"],
    input: {
      stamina: 4,
      power: 20,
      regolith: 100,
      halite: 15,
      barite: 5,
      water_rich_clay: 5,
      shard_research: 2,
      mining_tools: 2,
    },
    output: {
      research_mining_n: [2, 5, 2.55625],
      research_mining_a: [0, 1, 0.0125],
    },
  },
  areology_310: {
    display_name: "Areology 310",
    building: BUILDINGS.library,
    level: {
      mining: 50,
    },
    day: ["tue", "sat"],
    input: {
      stamina: 6,
      power: 30,
      regolith: 300,
      halite: 25,
      barite: 15,
      water_rich_clay: 15,
      shard_research: 3,
      mining_tools: 3,
    },
    output: {
      research_mining_n: [3, 8, 4.0834],
      research_mining_a: [0, 2, 0.0375],
      research_mining_j: [0, 1, 0.0083],
    },
  },
  areology_410: {
    display_name: "Areology 410",
    building: BUILDINGS.library,
    level: {
      mining: 75,
    },
    day: ["tue", "sat"],
    input: {
      stamina: 8,
      power: 40,
      regolith: 500,
      halite: 50,
      barite: 25,
      water_rich_clay: 25,
      shard_research: 5,
      mining_tools: 4,
    },
    output: {
      research_mining_n: [1, 5, 0.225],
      research_mining_a: [2, 5, 2.53125],
      research_mining_j: [0, 1, 0.0125],
      research_mining_e: [0, 1, 0.0063],
    },
  },
  areology_555: {
    display_name: "Areology 555",
    building: BUILDINGS.library,
    level: {
      mining: 100,
    },
    day: ["tue", "sat"],
    input: {
      stamina: 10,
      power: 50,
      regolith: 1000,
      halite: 100,
      barite: 75,
      water_rich_clay: 50,
      shard_research: 7,
      mining_tools: 5,
    },
    output: {
      research_mining_a: [3, 8, 4.15],
      research_mining_j: [0, 4, 0.1725],
      research_mining_e: [0, 1, 0.01],
      research_mining_m: [0, 1, 0.0025],
    },
  },
  basic_seed_study: {
    display_name: "Basic Seed Study",
    building: BUILDINGS.library,
    input: {
      research_lifescience_n: 1,
      shard_greenhouse_C: 1,
      shard_greenhouse_U: 1,
      stamina: 3,
    },
    output: {
      lootset: [
        {
          repeat: 5,
        },
        {
          sorghum_seed: [0.25, 12, 18],
        },
        {
          sprout_seed: [0.25, 3, 7],
        },
        {
          lettuce_seed: [0.25, 1, 3],
        },
        {
          sweet_potato_seed: [0.25, 1, 3],
        },
      ],
    },
  },
  advanced_seed_study: {
    display_name: "Advanced Seed Study",
    building: BUILDINGS.library,
    input: {
      research_lifescience_n: 2,
      shard_greenhouse_R: 1,
      shard_greenhouse_E: 1,
      stamina: 6,
    },
    output: {
      lootset: [
        {
          repeat: 7,
        },
        {
          bamboo_seed: [0.25, 6, 18],
        },
        {
          carrot_seed: [0.25, 2, 6],
        },
        {
          sweet_potato_seed: [0.25, 1, 3],
        },
        {
          soy_seed: [0.25, 1, 2],
        },
      ],
    },
  },
  expert_seed_study: {
    display_name: "Expert Seed Study",
    building: BUILDINGS.library,
    input: {
      research_lifescience_a: 1,
      shard_greenhouse_L: 1,
      shard_greenhouse_M: 1,
      stamina: 9,
    },
    output: {
      lootset: [
        {
          repeat: 10,
        },
        {
          mushroom_spores: [0.25, 4, 8],
        },
        {
          carrot_seed: [0.25, 3, 7],
        },
        {
          soy_seed: [0.25, 2, 4],
        },
        {
          coffee_seed: [0.25, 2, 3],
        },
      ],
    },
  },
  exobiology_101: {
    display_name: "Exobiology 101",
    building: BUILDINGS.library,
    input: {
      stamina: 2,
      power: 10,
      ice: 50,
      soil: 3,
      shard_research: 1,
    },
    output: {
      research_lifescience_n: 1,
    },
  },
  exobiology_201: {
    display_name: "Exobiology 201",
    building: BUILDINGS.library,
    level: {
      "life science": 25,
    },
    day: ["tue", "fri"],
    input: {
      stamina: 4,
      power: 20,
      ice: 100,
      water: 10,
      soil: 5,
      shard_research: 2,
      lifescience_tools: 2,
    },
    output: {
      research_lifescience_n: [2, 5, 2.55625],
      research_lifescience_a: [0, 1, 0.0125],
    },
  },
  exobiology_301: {
    display_name: "Exobiology 301",
    building: BUILDINGS.library,
    level: {
      "life science": 50,
    },
    day: ["tue", "fri"],
    input: {
      stamina: 6,
      power: 30,
      ice: 200,
      water: 25,
      soil: 25,
      shard_research: 3,
      lifescience_tools: 3,
    },
    output: {
      research_lifescience_n: [3, 8, 4.0834],
      research_lifescience_a: [0, 2, 0.0375],
      research_lifescience_j: [0, 1, 0.0083],
    },
  },
  exobiology_401: {
    display_name: "Exobiology 401",
    building: BUILDINGS.library,
    level: {
      "life science": 75,
    },
    day: ["tue", "fri"],
    input: {
      stamina: 8,
      power: 40,
      ice: 300,
      water: 30,
      soil: 30,
      shard_research: 5,
      lifescience_tools: 4,
    },
    output: {
      research_lifescience_n: [1, 5, 0.225],
      research_lifescience_a: [2, 5, 2.53125],
      research_lifescience_j: [0, 1, 0.0125],
      research_lifescience_e: [0, 1, 0.0063],
    },
  },
  exobiology_501: {
    display_name: "Exobiology 501",
    building: BUILDINGS.library,
    level: {
      "life science": 100,
    },
    day: ["tue", "fri"],
    input: {
      stamina: 10,
      power: 50,
      regolith: 600,
      ice: 600,
      water: 60,
      soil: 60,
      shard_research: 7,
      lifescience_tools: 5,
    },
    output: {
      research_lifescience_a: [3, 8, 4.15],
      research_lifescience_j: [0, 4, 0.1725],
      research_lifescience_e: [0, 1, 0.01],
      research_lifescience_m: [0, 1, 0.0025],
    },
  },
  chemistry_101: {
    display_name: "Chemistry 101",
    building: BUILDINGS.library,
    input: {
      stamina: 5,
      power: 10,
      oxygen: 2,
      perchlorate: 2,
      shard_research: 1,
    },
    output: {
      research_chemistry_n: 1,
    },
  },
  chemistry_202: {
    display_name: "Chemistry 202",
    building: BUILDINGS.library,
    level: {
      chemistry: 25,
    },
    day: ["sun", "thu"],
    input: {
      stamina: 5,
      power: 20,
      oxygen: 2,
      perchlorate: 2,
      shard_research: 2,
      chemistry_tools: 1,
    },
    output: {
      research_chemistry_n: [2, 5, 2.55625],
      research_chemistry_a: [0, 1, 0.0125],
    },
  },
  chemistry_303: {
    display_name: "Chemistry 303",
    building: BUILDINGS.library,
    level: {
      chemistry: 50,
    },
    day: ["sun", "thu"],
    input: {
      stamina: 5,
      power: 30,
      oxygen: 8,
      nitrogen: 2,
      shard_research: 3,
      chemistry_tools: 2,
    },
    output: {
      research_chemistry_n: [3, 8, 4.0834],
      research_chemistry_a: [0, 2, 0.0375],
      research_chemistry_j: [0, 1, 0.0083],
    },
  },
  chemistry_404: {
    display_name: "Chemistry 404",
    building: BUILDINGS.library,
    level: {
      chemistry: 75,
    },
    day: ["sun", "thu"],
    input: {
      stamina: 5,
      power: 40,
      argon: 2,
      nitrogen: 3,
      shard_research: 5,
      chemistry_tools: 3,
    },
    output: {
      research_chemistry_n: [1, 5, 0.225],
      research_chemistry_a: [2, 5, 2.53125],
      research_chemistry_j: [0, 1, 0.0125],
      research_chemistry_e: [0, 1, 0.0063],
    },
  },
  chemistry_505: {
    display_name: "Chemistry 505",
    building: BUILDINGS.library,
    level: {
      chemistry: 100,
    },
    day: ["sun", "thu"],
    input: {
      stamina: 5,
      power: 50,
      argon: 5,
      nitrogen: 10,
      shard_research: 7,
      chemistry_tools: 5,
    },
    output: {
      research_chemistry_a: [3, 8, 4.15],
      research_chemistry_j: [0, 4, 0.1725],
      research_chemistry_e: [0, 1, 0.01],
      research_chemistry_m: [0, 1, 0.0025],
    },
  },
  electronics_101: {
    display_name: "Electronics 101",
    building: BUILDINGS.library,
    input: {
      stamina: 2,
      power: 10,
      electronic_bits: 3,
      broken_pc: 1,
      shard_research: 1,
    },
    output: {
      research_electrical_n: 1,
    },
  },
  electronics_201: {
    display_name: "Electronics 201",
    building: BUILDINGS.library,
    level: {
      electrical: 25,
    },
    day: ["mon", "thu"],
    input: {
      stamina: 4,
      power: 20,
      electronic_bits: 2,
      broken_pc: 2,
      shard_research: 2,
      electrical_tools: 2,
    },
    output: {
      research_electrical_n: [2, 5, 2.55625],
      research_electrical_a: [0, 1, 0.0125],
    },
  },
  electronics_301: {
    display_name: "Electronics 301",
    building: BUILDINGS.library,
    level: {
      electrical: 50,
    },
    day: ["mon", "thu"],
    input: {
      stamina: 6,
      power: 30,
      electronic_bits: 3,
      broken_pc: 3,
      shard_research: 3,
      electrical_tools: 3,
    },
    output: {
      research_electrical_n: [3, 8, 4.0834],
      research_electrical_a: [0, 2, 0.0375],
      research_electrical_j: [0, 1, 0.0083],
    },
  },
  electronics_401: {
    display_name: "Electronics 401",
    building: BUILDINGS.library,
    level: {
      electrical: 75,
    },
    day: ["mon", "thu"],
    input: {
      stamina: 8,
      power: 40,
      smelt_mgs: 1,
      circuit_component: 1,
      shard_research: 5,
      electrical_tools: 4,
    },
    output: {
      research_electrical_n: [1, 5, 0.225],
      research_electrical_a: [2, 5, 2.53125],
      research_electrical_j: [0, 1, 0.0125],
      research_electrical_e: [0, 1, 0.0063],
    },
  },
  electronics_501: {
    display_name: "Electronics 501",
    building: BUILDINGS.library,
    level: {
      electrical: 100,
    },
    day: ["mon", "thu"],
    input: {
      stamina: 10,
      power: 50,
      smelt_mgs: 4,
      circuit_component: 2,
      shard_research: 7,
      electrical_tools: 5,
    },
    output: {
      research_electrical_a: [3, 8, 4.15],
      research_electrical_j: [0, 4, 0.1725],
      research_electrical_e: [0, 1, 0.01],
      research_electrical_m: [0, 1, 0.0025],
    },
  },
  study_circuit_theory: {
    display_name: "Study Circuit Theory",
    building: BUILDINGS.library,
    level: {
      electrical: 30,
    },
    input: {
      empty_pc: 1,
      broken_pc: 1,
      full_pc: 1,
      electronic_bits: 5,
      circuit_component: 1,
      electrical_tools: 3,
      power: 20,
      stamina: 2,
    },
    output: {
      research_electrical_n: 2,
    },
  },
  intro_to_fabrication: {
    display_name: "Intro to Fabrication",
    building: BUILDINGS.library,
    input: {
      stamina: 2,
      power: 10,
      smelt_iron: 1,
      shard_research: 1,
    },
    output: {
      research_fabrication_n: 1,
    },
  },
  fabrication_201: {
    display_name: "Fabrication 201: Welding",
    building: BUILDINGS.library,
    level: {
      fabrication: 25,
    },
    day: ["sun", "wed"],
    input: {
      stamina: 4,
      power: 20,
      pvc_pipe: 1,
      shard_research: 2,
      fabrication_tools: 2,
    },
    output: {
      research_fabrication_n: [2, 5, 2.55625],
      research_fabrication_a: [0, 1, 0.0125],
    },
  },
  fabrication_301: {
    display_name: "Fabrication 301: Bending",
    building: BUILDINGS.library,
    level: {
      fabrication: 50,
    },
    day: ["sun", "wed"],
    input: {
      stamina: 6,
      power: 30,
      smelt_aluminum: 3,
      shard_research: 3,
      fabrication_tools: 3,
    },
    output: {
      research_fabrication_n: [3, 8, 4.0834],
      research_fabrication_a: [0, 2, 0.0375],
      research_fabrication_j: [0, 1, 0.0083],
    },
  },
  fabrication_401: {
    display_name: "Fabrication 401: Welding",
    building: BUILDINGS.library,
    level: {
      fabrication: 75,
    },
    day: ["sun", "wed"],
    input: {
      stamina: 8,
      power: 40,
      smelt_steel: 7,
      shard_research: 5,
      fabrication_tools: 4,
    },
    output: {
      research_fabrication_n: [1, 5, 0.225],
      research_fabrication_a: [2, 5, 2.53125],
      research_fabrication_j: [0, 1, 0.0125],
      research_fabrication_e: [0, 1, 0.0063],
    },
  },
  fabrication_501: {
    display_name: "Fabrication 501: Manufacturing",
    building: BUILDINGS.library,
    level: {
      fabrication: 100,
    },
    day: ["sun", "wed"],
    input: {
      stamina: 10,
      power: 50,
      smelt_titanium: 3,
      smelt_steel: 7,
      shard_research: 7,
      fabrication_tools: 5,
    },
    output: {
      research_fabrication_a: [3, 8, 4.15],
      research_fabrication_j: [0, 4, 0.1725],
      research_fabrication_e: [0, 1, 0.01],
      research_fabrication_m: [0, 1, 0.0025],
    },
  },
  intro_to_machining: {
    display_name: "Intro to Machining",
    building: BUILDINGS.library,
    input: {
      stamina: 2,
      power: 10,
      metal_bits: 5,
      smelt_iron: 1,
      shard_research: 1,
    },
    output: {
      research_machining_n: 1,
    },
  },
  machining_201: {
    display_name: "Machining 201: Metal Stamping",
    building: BUILDINGS.library,
    level: {
      machining: 25,
    },
    day: ["wed", "sat"],
    input: {
      stamina: 4,
      power: 20,
      metal_bits: 10,
      smelt_aluminum: 1,
      shard_research: 2,
      machining_tools: 2,
    },
    output: {
      research_machining_n: [2, 5, 2.55625],
      research_machining_a: [0, 1, 0.0125],
    },
  },
  machining_301: {
    display_name: "Machining 301: Metal Forging",
    building: BUILDINGS.library,
    level: {
      machining: 50,
    },
    day: ["wed", "sat"],
    input: {
      stamina: 6,
      power: 30,
      metal_bits: 20,
      smelt_aluminum: 3,
      shard_research: 3,
      machining_tools: 3,
    },
    output: {
      research_machining_n: [3, 8, 4.0834],
      research_machining_a: [0, 2, 0.0375],
      research_machining_j: [0, 1, 0.0083],
    },
  },
  machining_401: {
    display_name: "Machining 401: Assembling",
    building: BUILDINGS.library,
    level: {
      machining: 75,
    },
    day: ["wed", "sat"],
    input: {
      stamina: 8,
      power: 40,
      smelt_steel: 7,
      shard_research: 5,
      machining_tools: 4,
    },
    output: {
      research_machining_n: [1, 5, 0.225],
      research_machining_a: [2, 5, 2.53125],
      research_machining_j: [0, 1, 0.0125],
      research_machining_e: [0, 1, 0.0063],
    },
  },
  machining_501: {
    display_name: "Machining 501: Electro-Chemical Machining",
    building: BUILDINGS.library,
    level: {
      machining: 100,
    },
    day: ["wed", "sat"],
    input: {
      stamina: 10,
      power: 50,
      smelt_titanium: 3,
      smelt_copper: 3,
      shard_research: 7,
      machining_tools: 5,
    },
    output: {
      research_machining_a: [3, 8, 4.15],
      research_machining_j: [0, 4, 0.1725],
      research_machining_e: [0, 1, 0.01],
      research_machining_m: [0, 1, 0.0025],
    },
  },
  robotics_101: {
    display_name: "Robotics 101",
    building: BUILDINGS.library,
    input: {
      stamina: 2,
      power: 10,
      rover_wires: 5,
      electronic_bits: 5,
      broken_pc: 1,
      shard_research: 1,
    },
    output: {
      research_robotics_n: 1,
    },
  },
  robotics_201: {
    display_name: "Dynamics & Kinematics",
    building: BUILDINGS.library,
    level: {
      robotics: 25,
    },
    day: ["mon", "fri"],
    input: {
      stamina: 4,
      power: 20,
      rover_wires: 5,
      electronic_bits: 5,
      broken_pc: 1,
      shard_research: 2,
      robotics_tools: 2,
    },
    output: {
      research_robotics_n: [2, 5, 2.55625],
      research_robotics_a: [0, 1, 0.0125],
    },
  },
  robotics_301: {
    display_name: "Locomotion",
    building: BUILDINGS.library,
    level: {
      robotics: 50,
    },
    day: ["mon", "fri"],
    input: {
      stamina: 6,
      power: 30,
      rover_wires: 5,
      electronic_bits: 5,
      broken_pc: 3,
      shard_research: 3,
      robotics_tools: 3,
    },
    output: {
      research_robotics_n: [3, 8, 4.0834],
      research_robotics_a: [0, 2, 0.0375],
      research_robotics_j: [0, 1, 0.0083],
    },
  },
  robotics_401: {
    display_name: "Artificial Intelligence",
    building: BUILDINGS.library,
    level: {
      robotics: 75,
    },
    day: ["mon", "fri"],
    input: {
      stamina: 8,
      power: 40,
      rover_wires: 5,
      electronic_bits: 5,
      circuit_component: 1,
      shard_research: 5,
      robotics_tools: 4,
    },
    output: {
      research_robotics_n: [1, 5, 0.225],
      research_robotics_a: [2, 5, 2.53125],
      research_robotics_j: [0, 1, 0.0125],
      research_robotics_e: [0, 1, 0.0063],
    },
  },
  robotics_501: {
    display_name: "Bionics and Biomimetics",
    building: BUILDINGS.library,
    level: {
      robotics: 100,
    },
    day: ["mon", "fri"],
    input: {
      stamina: 10,
      power: 50,
      rover_wires: 5,
      electronic_bits: 10,
      circuit_component: 3,
      shard_research: 7,
      robotics_tools: 5,
    },
    output: {
      research_robotics_a: [3, 8, 4.15],
      research_robotics_j: [0, 4, 0.1725],
      research_robotics_e: [0, 1, 0.01],
      research_robotics_m: [0, 1, 0.0025],
    },
  },
  airlock: {
    display_name: "Create Airlock",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 15,
    },
    input: {
      electronics_parts: 2,
      machined_parts: 1,
      power: 100,
      stamina: 12,
      fabrication_tools: 2,
    },
    output: {
      airlock: 1,
    },
  },
  create_shelter: {
    display_name: "Create Shelter",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 25,
    },
    input: {
      stamina: 5,
      power: 120,
      airlock: 1,
      aluminum_plate: 1,
      circuit_component: 1,
      glass: 1,
      bamboo_furniture: 1,
      fabrication_tools: 1,
    },
    output: {
      lootset: [
        {
          shelter_C1: [0, 1, 0.465],
        },
        {
          shelter_U1: [0, 1, 0.3],
        },
        {
          shelter_R1: [0, 1, 0.15],
        },
        {
          shelter_E1: [0, 1, 0.06],
        },
        {
          shelter_L1: [0, 1, 0.02],
        },
        {
          shelter_M1: [0, 1, 0.005],
        },
      ],
    },
  },
  wastezilla: {
    display_name: "Create WasteZilla",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 25,
    },
    input: {
      stamina: 12,
      electronics_parts: 2,
      aluminum_plate: 4,
      pvc_pipe: 5,
      glass: 5,
      power: 100,
      fabrication_tools: 2,
    },
    output: {
      wastezilla: 1,
    },
  },
  olympus_air_system: {
    display_name: "Olympus Air System",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 35,
    },
    input: {
      stamina: 12,
      electronics_parts: 2,
      aluminum_plate: 1,
      pvc_pipe: 4,
      air_tank: 2,
      power: 120,
      fabrication_tools: 2,
    },
    output: {
      olympus_air_system: 1,
    },
  },
  print_habitat_skeleton: {
    display_name: "Print Habitat Skeleton",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 40,
    },
    input: {
      glass: 20,
      concrete: 20,
      bamboo_furniture: 4,
      metis_weave: 10,
      power: 200,
      stamina: 16,
      fabrication_tools: 2,
    },
    output: {
      habitat_skeleton: 1,
    },
  },
  create_concrete_habitat: {
    display_name: "Create Concrete Habitat",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 50,
    },
    input: {
      habitat_kit: 1,
      olympus_air_system: 1,
      bamboo_furniture: 4,
      wastezilla: 1,
      battery_backup: 2,
      airlock: 2,
      habitat_skeleton: 1,
      power: 200,
      stamina: 20,
      fabrication_tools: 3,
    },
    output: {
      concrete_habitat_C1: 1,
    },
  },
  make_mining_shard_c: {
    display_name: "Make Mining Rig Shard (C)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 20,
    },
    input: {
      stamina: 3,
      power: 20,
      bazaar_coin_C: 1,
      dusk: 10,
      metis: 3,
      fabrication_tools: 1,
    },
    output: {
      shard_mining_rig_C: [3, 5, 4],
    },
  },
  make_mining_shard_u: {
    display_name: "Make Mining Rig Shard (U)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 30,
    },
    input: {
      stamina: 3,
      power: 40,
      bazaar_coin_U: 1,
      dusk: 10,
      metis: 3,
      fabrication_tools: 2,
    },
    output: {
      shard_mining_rig_U: [5, 10, 7.5],
    },
  },
  make_engineering_shard_c: {
    display_name: "Make Engineering Shard (C)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 50,
    },
    input: {
      stamina: 3,
      power: 40,
      bazaar_coin_E: 1,
      dusk: 20,
      metis: 4,
      fabrication_tools: 3,
    },
    output: {
      shard_engineering_bay_C: [3, 5, 4],
    },
  },
  make_engineering_shard_u: {
    display_name: "Make Engineering Shard (U)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 60,
    },
    input: {
      stamina: 3,
      power: 40,
      bazaar_coin_E: 1,
      dusk: 20,
      metis: 4,
      fabrication_tools: 3,
    },
    output: {
      shard_engineering_bay_U: [5, 10, 7.5],
    },
  },
  make_engineering_shard_r: {
    display_name: "Make Engineering Shard (R)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 70,
    },
    input: {
      stamina: 3,
      power: 40,
      bazaar_coin_E: 1,
      dusk: 20,
      metis: 4,
      fabrication_tools: 4,
    },
    output: {
      shard_engineering_bay_R: [9, 18, 13.5],
    },
  },
  make_habitat_shard_c: {
    display_name: "Make Habitat Shard (C)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 25,
    },
    input: {
      stamina: 3,
      power: 40,
      bazaar_coin_L: 1,
      dusk: 10,
      metis: 4,
      fabrication_tools: 2,
    },
    output: {
      shard_concrete_habitat_C: [3, 5, 4],
    },
  },
  make_habitat_shard_u: {
    display_name: "Make Habitat Shard (U)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 30,
    },
    input: {
      stamina: 3,
      power: 40,
      bazaar_coin_L: 1,
      dusk: 10,
      metis: 4,
      fabrication_tools: 2,
    },
    output: {
      shard_concrete_habitat_U: [5, 10, 7.5],
    },
  },
  make_habitat_shard_r: {
    display_name: "Make Habitat Shard (R)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 35,
    },
    input: {
      stamina: 3,
      power: 40,
      bazaar_coin_L: 1,
      dusk: 10,
      metis: 4,
      fabrication_tools: 2,
    },
    output: {
      shard_concrete_habitat_R: [9, 18, 13.5],
    },
  },
  make_library_shard: {
    display_name: "Make Library Shard (S)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 65,
    },
    input: {
      stamina: 4,
      power: 40,
      metis: 3,
      glass: 4,
      concrete: 2,
      fabrication_tools: 3,
    },
    output: {
      shard_library_S: 1,
    },
  },
  crafting_wires: {
    display_name: "Crafting Wires",
    building: BUILDINGS.engineering_bay,
    input: {
      stamina: 2,
      metal_bits: 6,
      electronic_bits: 5,
      fabrication_tools: 1,
    },
    output: {
      lootset: [
        {
          percent: 65,
        },
        {
          lootlist: [
            {
              rover_wires: [1, 3, 4],
            },
            {
              metal_bits: [1, 0, 2],
            },
            {
              electronic_bits: [1, 0, 2],
            },
          ],
        },
        {
          percent: 35,
        },
        {
          lootlist: [
            {
              rover_wires: [1, 6, 8],
            },
          ],
        },
      ],
    },
  },
  shredding_copper: {
    display_name: "Shredding Copper",
    building: BUILDINGS.engineering_bay,
    level: {
      machining: 3,
    },
    input: {
      stamina: 1,
      power: 10,
      smelt_copper: 1,
      metal_bits: 5,
      machining_tools: 1,
    },
    output: {
      lootset: [
        {
          percent: 60,
        },
        {
          lootlist: [
            {
              regolith: [1, 50, 100],
            },
            {
              electronic_bits: [1, 6, 8],
            },
          ],
        },
        {
          percent: 40,
        },
        {
          lootlist: [
            {
              electronic_bits: [1, 10, 18],
            },
            {
              machining_tools: [1, 1, 1],
            },
          ],
        },
      ],
    },
  },
  shredding_iron: {
    display_name: "Shredding Iron",
    building: BUILDINGS.engineering_bay,
    level: {
      machining: 1,
    },
    input: {
      stamina: 1,
      power: 10,
      smelt_iron: 3,
      water: 2,
    },
    output: {
      lootset: [
        {
          percent: 55,
        },
        {
          lootlist: [
            {
              regolith: [1, 50, 100],
            },
            {
              metal_bits: [1, 12, 14],
            },
          ],
        },
        {
          percent: 45,
        },
        {
          lootlist: [
            {
              metal_bits: [1, 20, 30],
            },
          ],
        },
      ],
    },
  },
  craft_print_shop_gen2_c: {
    display_name: "Craft Common 3D Print Shop (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 55,
    },
    input: {
      power: 200,
      stamina: 5,
      metal_bits: 10,
      aluminum_plate: 2,
      minting_token: 1,
      fabrication_tools: 3,
    },
    output: {
      print_shop_gen2_C1: 1,
    },
  },
  craft_print_shop_gen2_u: {
    display_name: "Craft Uncommon 3D Print Shop (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 60,
    },
    input: {
      power: 200,
      stamina: 5,
      metal_bits: 10,
      aluminum_plate: 2,
      metis_weave: 2,
      minting_token: 2,
      fabrication_tools: 3,
    },
    output: {
      print_shop_gen2_U1: 1,
    },
  },
  craft_print_shop_gen2_r: {
    display_name: "Craft Rare 3D Print Shop (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 65,
    },
    input: {
      power: 200,
      stamina: 5,
      metal_bits: 10,
      aluminum_plate: 3,
      metis_weave: 3,
      minting_token: 3,
      fabrication_tools: 3,
    },
    output: {
      print_shop_gen2_R1: 1,
    },
  },
  craft_CAD_kit_gen3: {
    display_name: "Craft C.A.D. Kit (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 45,
    },
    input: {
      power: 40,
      stamina: 5,
      concrete: 2,
      smelt_steel: 1,
      electronic_bits: 15,
      fabrication_tools: 2,
    },
    output: {
      cad_kit: 1,
    },
  },
  craft_CAD_gen3: {
    display_name: "Craft C.A.D. (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 55,
    },
    input: {
      power: 200,
      stamina: 5,
      cad_kit: 1,
      minting_token: 3,
      fabrication_tools: 3,
    },
    output: {
      lootset: [
        {
          cad_gen3_C1: [0, 1, 0.465],
        },
        {
          cad_gen3_U1: [0, 1, 0.3],
        },
        {
          cad_gen3_R1: [0, 1, 0.15],
        },
        {
          cad_gen3_E1: [0, 1, 0.06],
        },
        {
          cad_gen3_L1: [0, 1, 0.02],
        },
        {
          cad_gen3_M1: [0, 1, 0.005],
        },
      ],
    },
  },
  craft_chem_lab_gen2_c: {
    display_name: "Craft Common Chem Lab (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 50,
    },
    input: {
      power: 200,
      stamina: 5,
      rover_wires: 5,
      smelt_iron: 3,
      minting_token: 1,
      fabrication_tools: 3,
    },
    output: {
      chem_lab_gen2_C1: 1,
    },
  },
  craft_chem_lab_gen2_u: {
    display_name: "Craft Uncommon Chem Lab (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 55,
    },
    input: {
      power: 200,
      stamina: 5,
      rover_wires: 10,
      smelt_iron: 6,
      glass: 1,
      minting_token: 2,
      fabrication_tools: 3,
    },
    output: {
      chem_lab_gen2_U1: 1,
    },
  },
  craft_chem_lab_gen2_r: {
    display_name: "Craft Rare Chem Lab (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 60,
    },
    input: {
      power: 200,
      stamina: 5,
      rover_wires: 15,
      smelt_steel: 3,
      glass: 2,
      minting_token: 3,
      fabrication_tools: 3,
    },
    output: {
      chem_lab_gen2_R1: 1,
    },
  },
  craft_grindnbrew_gen2_C1: {
    display_name: "Craft Common Grind N' Brew (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 35,
    },
    input: {
      power: 200,
      stamina: 5,
      titanum_plate: 5,
      aluminum_plate: 3,
      machined_parts: 3,
      minting_token: 1,
      fabrication_tools: 3,
      water: 150,
    },
    output: {
      grindnbrew_gen2_C1: 1,
    },
  },
  craft_grindnbrew_gen2_U1: {
    display_name: "Craft Uncommon Grind N' Brew (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 40,
    },
    input: {
      power: 200,
      stamina: 5,
      titanum_plate: 6,
      aluminum_plate: 3,
      machined_parts: 3,
      minting_token: 2,
      fabrication_tools: 3,
      water: 150,
      metis_weave: 5,
    },
    output: {
      grindnbrew_gen2_U1: 1,
    },
  },
  craft_grindnbrew_gen2_R1: {
    display_name: "Craft Rare Grind N' Brew (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 45,
    },
    input: {
      power: 200,
      stamina: 5,
      titanum_plate: 6,
      aluminum_plate: 3,
      machined_parts: 5,
      minting_token: 3,
      fabrication_tools: 3,
      water: 150,
      metis_weave: 15,
    },
    output: {
      grindnbrew_gen2_R1: 1,
    },
  },
  craft_greenhouse_gen3_C1: {
    display_name: "Craft Common Greenhouse (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 20,
    },
    input: {
      power: 200,
      stamina: 4,
      aluminum_plate: 1,
      glass: 1,
      minting_token: 1,
      fabrication_tools: 3,
    },
    output: {
      greenhouse_gen3_C1: 1,
    },
  },
  craft_greenhouse_gen3_U1: {
    display_name: "Craft Uncommon Greenhouse (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 25,
    },
    input: {
      power: 200,
      stamina: 4,
      aluminum_plate: 2,
      glass: 2,
      minting_token: 2,
      fabrication_tools: 3,
    },
    output: {
      greenhouse_gen3_U1: 1,
    },
  },
  craft_greenhouse_gen3_R1: {
    display_name: "Craft Rare Greenhouse (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 30,
    },
    input: {
      power: 200,
      stamina: 4,
      aluminum_plate: 3,
      glass: 3,
      metis_weave: 2,
      minting_token: 3,
      fabrication_tools: 3,
    },
    output: {
      greenhouse_gen3_R1: 1,
    },
  },
  craft_mining_rig_kit_gen2: {
    display_name: "Craft Mining Rig Kit (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 85,
    },
    input: {
      power: 50,
      stamina: 5,
      structural_parts: 1,
      metal_bits: 50,
      aluminum_plate: 5,
      concrete: 10,
      fabrication_tools: 4,
    },
    output: {
      mining_rig_kit: 1,
    },
  },
  craft_mining_rig_gen2: {
    display_name: "Craft Mining Rig (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 100,
    },
    input: {
      power: 200,
      stamina: 20,
      mining_rig_kit: 1,
      minting_token: 35,
      fabrication_tools: 5,
    },
    output: {
      lootset: [
        {
          mining_rig_gen2_C1: [0, 1, 0.465],
        },
        {
          mining_rig_gen2_U1: [0, 1, 0.3],
        },
        {
          mining_rig_gen2_R1: [0, 1, 0.15],
        },
        {
          mining_rig_gen2_E1: [0, 1, 0.06],
        },
        {
          mining_rig_gen2_L1: [0, 1, 0.02],
        },
        {
          mining_rig_gen2_M1: [0, 1, 0.005],
        },
      ],
    },
  },
  craft_smelter_gen2_C1: {
    display_name: "Craft Common Smelter (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 45,
    },
    input: {
      power: 200,
      stamina: 5,
      titanum_plate: 1,
      rover_wires: 10,
      minting_token: 1,
      fabrication_tools: 3,
    },
    output: {
      smelter_gen2_C1: 1,
    },
  },
  craft_smelter_gen2_U1: {
    display_name: "Craft Uncommon Smelter (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 50,
    },
    input: {
      power: 200,
      stamina: 5,
      titanum_plate: 1,
      rover_wires: 15,
      metis_weave: 1,
      minting_token: 2,
      fabrication_tools: 3,
    },
    output: {
      smelter_gen2_U1: 1,
    },
  },
  craft_smelter_gen2_R1: {
    display_name: "Craft Rare Smelter (Gen 2)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 55,
    },
    input: {
      power: 200,
      stamina: 5,
      titanum_plate: 1,
      rover_wires: 15,
      metis_weave: 2,
      minting_token: 3,
      fabrication_tools: 3,
    },
    output: {
      smelter_gen2_R1: 1,
    },
  },
  craft_water_filter_gen3_C1: {
    display_name: "Craft Common Water Filter (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 10,
    },
    input: {
      power: 200,
      stamina: 5,
      smelt_iron: 2,
      rover_wires: 5,
      aluminum_plate: 2,
      minting_token: 1,
      fabrication_tools: 3,
    },
    output: {
      water_filter_gen3_C1: 1,
    },
  },
  craft_water_filter_gen3_U1: {
    display_name: "Craft Uncommon Water Filter (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 15,
    },
    input: {
      power: 200,
      stamina: 5,
      smelt_iron: 3,
      rover_wires: 10,
      aluminum_plate: 2,
      metis_weave: 3,
      minting_token: 2,
      fabrication_tools: 3,
    },
    output: {
      water_filter_gen3_U1: 1,
    },
  },
  craft_water_filter_gen3_R1: {
    display_name: "Craft Rare Water Filter (Gen 3)",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 20,
    },
    input: {
      power: 200,
      stamina: 5,
      smelt_steel: 5,
      rover_wires: 15,
      aluminum_plate: 2,
      metis_weave: 3,
      minting_token: 3,
      fabrication_tools: 3,
    },
    output: {
      water_filter_gen3_R1: 1,
    },
  },
  make_metis_shield_C1: {
    display_name: "Make Common Metis Shield",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 60,
    },
    input: {
      stamina: 5,
      power: 60,
      metis_weave: 10,
      smelt_steel: 2,
      minting_token: 4,
      fabrication_tools: 5,
    },
    output: {
      metis_shield_C1: 1,
    },
  },
  make_metis_shield_U1: {
    display_name: "Make Uncommon Metis Shield",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 80,
    },
    input: {
      stamina: 5,
      power: 60,
      metis_weave: 15,
      smelt_steel: 8,
      electronics_parts: 1,
      minting_token: 4,
      fabrication_tools: 5,
    },
    output: {
      metis_shield_U1: 1,
    },
  },
  make_metis_shield_R1: {
    display_name: "Make Rare Metis Shield",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 100,
    },
    input: {
      stamina: 5,
      power: 60,
      metis_weave: 25,
      smelt_steel: 15,
      electronics_parts: 4,
      machined_parts: 3,
      minting_token: 4,
      fabrication_tools: 5,
    },
    output: {
      metis_shield_R1: 1,
    },
  },
  make_metis_shield_E1: {
    display_name: "Make Epic Metis Shield",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 110,
    },
    input: {
      stamina: 5,
      power: 60,
      metis_weave: 30,
      smelt_steel: 25,
      electronics_parts: 8,
      machined_parts: 7,
      structural_parts: 2,
      minting_token: 4,
      fabrication_tools: 5,
    },
    output: {
      metis_shield_E1: 1,
    },
  },
  make_metis_shield_L1: {
    display_name: "Make Legendary Metis Shield",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 120,
    },
    input: {
      stamina: 5,
      power: 60,
      metis_weave: 50,
      smelt_steel: 30,
      electronics_parts: 16,
      machined_parts: 14,
      structural_parts: 12,
      titanium_plate: 10,
      minting_token: 4,
      fabrication_tools: 5,
    },
    output: {
      metis_shield_L1: 1,
    },
  },
  make_metis_shield_M1: {
    display_name: "Make Mythic Metis Shield",
    building: BUILDINGS.engineering_bay,
    level: {
      fabrication: 130,
    },
    input: {
      stamina: 5,
      power: 60,
      metis_weave: 80,
      smelt_steel: 80,
      electronics_parts: 35,
      machined_parts: 32,
      structural_parts: 20,
      titanium_plate: 20,
      minting_token: 4,
      fabrication_tools: 5,
    },
    output: {
      metis_shield_M1: 1,
    },
  },
  sprouts_aeroponic_experimentation: {
    display_name: "Sprouts Aeroponic Experimentation",
    building: BUILDINGS.shelter,
    input: {
      stamina: 3,
      power: 10,
      carbon_dioxide: 1,
      water: 5,
      sprout_seed: 5,
      nitrogen: 1,
      waste: 1,
      lifescience_tools: 1,
    },
    output: {
      food: [30, 40, 35],
      oxygen: [15, 35, 10],
      sprout_seed: [1, 5, 0.3],
      nitrogen: [0, 1, 0.4],
    },
  },
  extra_credit: {
    display_name: "Extra Credit",
    building: BUILDINGS.shelter,
    input: {
      stamina: 1,
      power: 5,
      coffee_brewed: 1,
    },
    output: {
      dusk: 0,
    },
  },
  where_lunch: {
    display_name: "Where Lunch?",
    building: BUILDINGS.concrete_habitat,
    input: {
      stamina: 4,
      power: 10,
      food: 100,
      water: 12,
      bazaar_coin_U: 1,
    },
    output: {
      dusk: [70, 120, 88.3333],
    },
  },
  jam_session: {
    display_name: "Jam Session",
    building: BUILDINGS.concrete_habitat,
    input: {
      stamina: 4,
      power: 10,
      baijiu: 6,
      water: 42,
      bazaar_coin_R: 1,
    },
    output: {
      lootset: [
        {
          vibes: [0.0588, 15, 25],
        },
        {
          vibes: [0.1176, 12, 15],
        },
        {
          vibes: [0.8235, 10, 12],
        },
      ],
    },
  },
  advanced_project_testing: {
    display_name: "Advanced Project Testing",
    building: BUILDINGS.concrete_habitat,
    input: {
      stamina: 4,
      power: 50,
      bazaar_coin_E: 2,
      bazaar_coin_R: 2,
      bazaar_coin_U: 2,
    },
    output: {
      lootset: [
        {
          dusk: [0.0588, 750, 1000],
        },
        {
          dusk: [0.1176, 125, 750],
        },
        {
          dusk: [0.8235, 100, 125],
        },
      ],
    },
  },
  social_science_experiments: {
    display_name: "Social Science Experiments",
    building: BUILDINGS.concrete_habitat,
    input: {
      stamina: 5,
      power: 30,
      food: 100,
      water: 50,
      bazaar_coin_C: 2,
    },
    output: {
      lootset: [
        {
          dusk: [0.0588, 500, 1000],
        },
        {
          dusk: [0.1176, 250, 500],
        },
        {
          dusk: [0.8235, 100, 200],
        },
      ],
    },
  },
  wine_down: {
    display_name: "Wine Down",
    building: BUILDINGS.concrete_habitat,
    input: {
      stamina: 2,
      power: 10,
      baijiu: 12,
      ice: 36,
      bazaar_coin_C: 1,
    },
    output: {
      lootset: [
        {
          dusk: [0.0588, 200, 300],
        },
        {
          dusk: [0.1176, 100, 200],
        },
        {
          dusk: [0.8235, 0, 100],
        },
      ],
    },
  },
  reality_tv_rights: {
    display_name: "Reality TV Rights",
    building: BUILDINGS.concrete_habitat,
    input: {
      stamina: 6,
      power: 20,
      food: 250,
      baijiu: 12,
    },
    output: {
      lootset: [
        {
          dusk: [0.0588, 150, 200],
        },
        {
          dusk: [0.1176, 100, 150],
        },
        {
          dusk: [0.8235, 80, 100],
        },
      ],
    },
  },
  mars_bnb: {
    display_name: "Mars BnB",
    building: BUILDINGS.concrete_habitat,
    input: {
      stamina: 8,
      power: 60,
      food: 500,
      water: 100,
      bazaar_coin_U: 1,
    },
    output: {
      lootlist: [
        {
          lootset: [
            {
              dusk: [0.0588, 300, 350],
            },
            {
              dusk: [0.1176, 275, 300],
            },
            {
              dusk: [0.8235, 250, 275],
            },
          ],
        },
        {
          lootset: [
            {
              resource_credit: [0.0588, 4, 5],
            },
            {
              resource_credit: [0.1176, 2, 4],
            },
            {
              resource_credit: [0.8235, 1, 2],
            },
          ],
        },
      ],
    },
  },
  scavenging_powered: {
    display_name: "Scavenging",
    building: BUILDINGS.user,
    input: {
      stamina: 1,
      power: 1,
    },
    output_speculative: true,
    output: {
      ice: 3.66,
      regolith: 3.07,
      metal_bits: 0.27,
      carrot_seed: 0.1,
      sprout_seed: 0.033,
      water_rich_clay: 0.033,
      halite: 0.3,
    },
  },
  do_job: {
    display_name: "Do Job",
    building: BUILDINGS.user,
    input: {
      stamina: 1,
    },
    output: {
      dusk: 1,
    },
  },
  repair_broken_EVA_suit: {
    display_name: "Repair Broken EVA Suit",
    building: BUILDINGS.cantina,
    level: {
      electrical: 35,
    },
    input: {
      rover_wires: 12,
      electronic_bits: 4,
      electrical_tools: 3,
      circuit_component: 1,
      stamina: 2,
    },
    output: {
      dusk: [30, 800, 64.267],
    },
  },
  make_apprentice_scavenging_tools: {
    display_name: "Make Apprentice Scavenging Tools",
    building: BUILDINGS.cantina,
    level: {
      scavenging: 30,
      fabrication: 25,
    },
    input: {
      scavenging_tools_n: 1,
      metis: 3,
      electronic_bits: 25,
      smelt_aluminum: 2,
      stamina: 4,
    },
    output: {
      scavenging_tools_Apprentice: 1,
    },
  },
  faded_collection: {
    display_name: "Faded Collection",
    building: BUILDINGS.cantina,
    day: "sun",
    input: {
      art_faded: 1,
    },
    output: {
      dusk: [2, 5, 3.5],
    },
  },
  bamboozled_sun: {
    display_name: "Bamboozled (Sunday)",
    building: BUILDINGS.cantina,
    day: "sun",
    input: {
      bamboo: 30,
      water_rich_clay: 5,
      vibes: 1,
      cantina_coin: 3,
    },
    output: {
      dusk: [20, 30, 25],
    },
  },
  hit_the_ice: {
    display_name: "Hit The Ice",
    building: BUILDINGS.cantina,
    day: ["sun", "wed"],
    input: {
      ice: 300,
      electronic_bits: 10,
      vibes: 1,
      cantina_coin: 4,
    },
    output: {
      dusk: [20, 45, 32.5],
      keycard_copper: [0, 1, 0.0074],
    },
  },
  most_of_my_friends_argon: {
    display_name: "Most of My Friends Argon",
    building: BUILDINGS.cantina,
    day: ["sun", "wed"],
    input: {
      argon: 4,
      metal_bits: 20,
      vibes: 1,
      cantina_coin: 5,
    },
    output: {
      dusk: [25, 50, 37.5],
      keycard_copper: [0, 1, 0.0033],
    },
  },
  hungry_hungry_martians: {
    display_name: "Hungry Hungry Martians",
    building: BUILDINGS.cantina,
    day: ["sun", "wed"],
    input: {
      food: 100,
      water: 20,
      vibes: 1,
      cantina_coin: 6,
    },
    output: {
      dusk: [30, 60, 45],
      keycard_copper: [0, 1, 0.006],
    },
  },
  barite_necessities_sun: {
    display_name: "Barite Necessities (Sunday)",
    building: BUILDINGS.cantina,
    day: "sun",
    input: {
      barite: 25,
      cantina_coin: 2,
    },
    output: {
      dusk: [10, 20, 15],
    },
  },
  seeding_the_way: {
    display_name: "Seeding The Way",
    building: BUILDINGS.cantina,
    day: "sun",
    input: {
      sunflower_seeds: 4,
      cantina_coin: 1,
    },
    output: {
      dusk: [3, 10, 6.5],
    },
  },
  stale_sweets: {
    display_name: "Stale Sweets",
    building: BUILDINGS.cantina,
    day: ["mon", "thu"],
    input: {
      candycane: 25,
    },
    output: {
      dusk: [2, 5, 3.5],
    },
  },
  cosmic_delivery: {
    display_name: "Cosmic Delivery",
    building: BUILDINGS.cantina,
    day: "mon",
    input: {
      fractal_shard: 1,
      water_rich_clay: 1,
      cantina_coin: 3,
    },
    output: {
      dusk: [20, 30, 25],
    },
  },
  breathing_room_mon: {
    display_name: "Breathing Room (Monday)",
    building: BUILDINGS.cantina,
    day: "mon",
    input: {
      oxygen: 50,
      electronic_bits: 5,
      cantina_coin: 4,
    },
    output: {
      dusk: [25, 45, 35],
      keycard_copper: 0.0074,
    },
  },
  salty_solution: {
    display_name: "Salty Solution",
    building: BUILDINGS.cantina,
    day: ["mon", "thu"],
    input: {
      halite: 100,
      metal_bits: 20,
      cantina_coin: 5,
    },
    output: {
      dusk: [25, 50, 37.5],
      keycard_copper: 0.0033,
    },
  },
  tasty_beverages_mon: {
    display_name: "Tasty Beverages (Monday)",
    building: BUILDINGS.cantina,
    day: "mon",
    input: {
      water: 30,
      ice: 10,
      glass: 2,
      cantina_coin: 6,
    },
    output: {
      dusk: [30, 60, 45],
      keycard_copper: 0.006,
    },
  },
  sculpting_solutions_mon: {
    display_name: "Sculpting Solutions (Monday)",
    building: BUILDINGS.cantina,
    day: "mon",
    input: {
      water_rich_clay: 8,
      cantina_coin: 5,
    },
    output: {
      dusk: [10, 20, 15],
    },
  },
  smelly_situation: {
    display_name: "Smelly Situation",
    building: BUILDINGS.cantina,
    day: "mon",
    input: {
      sulfur: 25,
      cantina_coin: 1,
    },
    output: {
      dusk: [3, 10, 6.5],
    },
  },
  bits_and_pieces_tue: {
    display_name: "Bits and Pieces (Tuesday)",
    building: BUILDINGS.cantina,
    day: "tue",
    input: {
      metal_bits: 4,
      electronic_bits: 1,
    },
    output: {
      dusk: [2, 5, 3.5],
    },
  },
  waste_disposal_tue: {
    display_name: "Waste Disposal (Tuesday)",
    building: BUILDINGS.cantina,
    day: "tue",
    input: {
      waste: 300,
      soil: 8,
      cantina_coin: 3,
    },
    output: {
      dusk: [20, 30, 25],
    },
  },
  breathing_room_tue: {
    display_name: "Breathing Room (Tuesday)",
    building: BUILDINGS.cantina,
    day: "tue",
    input: {
      oxygen: 50,
      water: 25,
      cantina_coin: 4,
    },
    output: {
      dusk: [25, 45, 35],
      keycard_copper: 0.0074,
    },
  },
  scrubbing_supplies: {
    display_name: "Scrubbing Supplies",
    building: BUILDINGS.cantina,
    day: "tue",
    input: {
      ice: 275,
      metal_bits: 25,
      cantina_coin: 5,
    },
    output: {
      dusk: [30, 50, 40],
      keycard_copper: 0.0033,
    },
  },
  electric_boogie: {
    display_name: "Electric Boogie",
    building: BUILDINGS.cantina,
    day: "tue",
    input: {
      electronic_bits: 2,
      rover_wires: 2,
      siliconcrystals_raw: 2,
      cantina_coin: 6,
    },
    output: {
      dusk: [30, 60, 45],
      keycard_copper: 0.006,
    },
  },
  sculpting_solutions_tue: {
    display_name: "Sculpting Solutions (Tuesday)",
    building: BUILDINGS.cantina,
    day: "tue",
    input: {
      water_rich_clay: 9,
      cantina_coin: 2,
    },
    output: {
      dusk: [10, 20, 15],
    },
  },
  food_donations: {
    display_name: "Food Donations",
    building: BUILDINGS.cantina,
    day: "tue",
    input: {
      food: 15,
      cantina_coin: 1,
    },
    output: {
      dusk: [3, 10, 6.5],
    },
  },
  bamboozled_wed: {
    display_name: "Bamboozled (Wednesday)",
    building: BUILDINGS.cantina,
    day: "wed",
    input: {
      bamboo: 35,
      water_rich_clay: 3,
      cantina_coin: 3,
    },
    output: {
      dusk: [20, 30, 25],
    },
  },
  odds_and_ends: {
    display_name: "Odds and Ends",
    building: BUILDINGS.cantina,
    day: "wed",
    input: {
      metal_bits: 7,
    },
    output: {
      dusk: [2, 5, 3.5],
    },
  },
  barite_necessities_wed: {
    display_name: "Barite Necessities (Wednesday)",
    building: BUILDINGS.cantina,
    day: "wed",
    input: {
      barite: 35,
      cantina_coin: 2,
    },
    output: {
      dusk: [10, 20, 15],
    },
  },
  express_o_delivery: {
    display_name: "Express-o Delivery",
    building: BUILDINGS.cantina,
    day: "wed",
    input: {
      coffee_bean_roasted: 2,
      cantina_coin: 1,
    },
    output: {
      dusk: [3, 10, 6.5],
    },
  },
  black_market_crystals: {
    display_name: "Black Market Crystals",
    building: BUILDINGS.cantina,
    day: "thu",
    input: {
      siliconcrystals_raw: 1,
      electronic_bits: 3,
      cantina_coin: 3,
    },
    output: {
      dusk: [20, 30, 25],
    },
  },
  breathing_room_thu: {
    display_name: "Breathing Room (Thursday)",
    building: BUILDINGS.cantina,
    day: "thu",
    input: {
      oxygen: 35,
      water_rich_clay: 10,
      cantina_coin: 4,
    },
    output: {
      dusk: [20, 45, 32.5],
      keycard_copper: 0.0074,
    },
  },
  tasty_beverages_thu: {
    display_name: "Tasty Beverages (Thursday)",
    building: BUILDINGS.cantina,
    day: "thu",
    input: {
      water: 125,
      ice: 1,
      glass: 2,
      cantina_coin: 6,
    },
    output: {
      dusk: [30, 60, 45],
      keycard_copper: 0.006,
    },
  },
  green_bean_profits: {
    display_name: "Green Bean Profits",
    building: BUILDINGS.cantina,
    day: "thu",
    input: {
      coffee_bean_green: 10,
      cantina_coin: 2,
    },
    output: {
      dusk: [10, 20, 15],
    },
  },
  smelly_situation2: {
    display_name: "Smelly Situation II",
    building: BUILDINGS.cantina,
    day: "thu",
    input: {
      sulfur: 20,
      cantina_coin: 1,
    },
    output: {
      dusk: [3, 10, 6.5],
    },
  },
  bits_and_pieces_fri: {
    display_name: "Bits and Pieces (Friday)",
    building: BUILDINGS.cantina,
    day: "fri",
    input: {
      metal_bits: 8,
    },
    output: {
      dusk: [2, 5, 3.5],
    },
  },
  waste_disposal_fri: {
    display_name: "Waste Disposal (Friday)",
    building: BUILDINGS.cantina,
    day: "fri",
    input: {
      waste: 300,
      water_rich_clay: 3,
      cantina_coin: 3,
    },
    output: {
      dusk: [20, 30, 25],
    },
  },
  baijiu_blitz: {
    display_name: "Baijiu Blitz",
    building: BUILDINGS.cantina,
    day: "fri",
    input: {
      baijiu: 4,
      cantina_coin: 4,
    },
    output: {
      dusk: [20, 45, 32.5],
      keycard_copper: 0.0074,
    },
  },
  transport_summer_ice: {
    display_name: "Transport Summer Ice",
    building: BUILDINGS.cantina,
    day: "fri",
    input: {
      ice: 250,
      metal_bits: 25,
      cantina_coin: 5,
    },
    output: {
      dusk: [30, 50, 40],
      keycard_copper: 0.0033,
    },
  },
  summer_scrap_collection: {
    display_name: "Summer Scrap Collection",
    building: BUILDINGS.cantina,
    day: "fri",
    input: {
      metal_bits: 20,
      rover_wires: 22,
      cantina_coin: 6,
    },
    output: {
      dusk: [30, 60, 45],
      keycard_copper: 0.006,
    },
  },
  bamboozled_fri: {
    display_name: "Bamboozled (Friday)",
    building: BUILDINGS.cantina,
    day: "fri",
    input: {
      bamboo: 35,
      water: 10,
      cantina_coin: 2,
    },
    output: {
      dusk: [10, 20, 15],
    },
  },
  spread_golden_profits: {
    display_name: "Spread Golden Profits",
    building: BUILDINGS.cantina,
    day: "fri",
    input: {
      sunflower_seeds: 4,
      cantina_coin: 1,
    },
    output: {
      dusk: [3, 10, 6.5],
    },
  },
  smelted_dreams: {
    display_name: "Smelted Dreams",
    building: BUILDINGS.cantina,
    day: "sat",
    input: {
      smelter_C1: 1,
    },
    output: {
      dusk: [2, 5, 3.5],
    },
  },
  cad_return: {
    display_name: "CAD Return",
    building: BUILDINGS.cantina,
    day: "sat",
    input: {
      cad_22_C1: 1,
      cantina_coin: 2,
    },
    output: {
      dusk: [20, 30, 25],
    },
  },
  water_filter_storage: {
    display_name: "Water Filter Storage",
    building: BUILDINGS.cantina,
    day: "sat",
    input: {
      water_filter_22_C1: 1,
      cantina_coin: 4,
    },
    output: {
      dusk: [20, 45, 32.5],
    },
  },
  greenhouse_overstock: {
    display_name: "Greenhouse Overstock",
    building: BUILDINGS.cantina,
    day: "sat",
    input: {
      greenhouse_C1: 1,
      cantina_coin: 3,
    },
    output: {
      dusk: [25, 50, 37.5],
    },
  },
  solar_panel_repo: {
    display_name: "Solar Panel Repo",
    building: BUILDINGS.cantina,
    day: "sat",
    input: {
      solar_panel_22_C1: 1,
      cantina_coin: 4,
    },
    output: {
      dusk: [30, 60, 45],
    },
  },
  chemical_redistribution: {
    display_name: "Chemical Redistribution",
    building: BUILDINGS.cantina,
    day: "sat",
    input: {
      chem_lab_C1: 1,
      cantina_coin: 2,
    },
    output: {
      dusk: [10, 20, 15],
    },
  },
  reactor_recovery: {
    display_name: "Reactor Recovery",
    building: BUILDINGS.cantina,
    day: "sat",
    input: {
      sab_reactor_C1: 1,
      cantina_coin: 1,
    },
    output: {
      dusk: [3, 10, 6.5],
    },
  },
};

export default tasks;
