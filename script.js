function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Copied!';
    button.classList.add('copied');
    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('copied');
    }, 1000);
  }).catch(err => {
    console.error('Clipboard copy failed', err);
  });
}

function showSortingPage(page) {
  const buttons = document.querySelectorAll('.tab-buttons button');
  buttons.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === page - 1);
  });
  document.getElementById('sortingPage1').classList.add('hidden');
  document.getElementById('sortingPage2').classList.add('hidden');
  document.getElementById(`sortingPage${page}`).classList.remove('hidden');
}

const sortingButtonsPage1 = [
  {
    label: "All Resources",
    image: "fat.animal.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bone.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fat.animal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "leather"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diesel_barrel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosives"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "skull.wolf"
  }
]
`
  },
  {
    label: "All Components",
    image: "techparts.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cctv.camera"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "targeting.computer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsigns"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fuse"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalpipe"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalspring"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smgbody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "semibody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "riflebody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalblade"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sewingkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tarp"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "propanetank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sheetmetal"
  }
]`
  },
  {
    label: "All Guns",
    image: "rifle.ak.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.lr300"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lmg.m249"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.bolt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.m39"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "multiplegrenadelauncher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hmlmg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.l96"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.pump"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.python"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "military flamethrower"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.prototype17"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.spas12"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rocket.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "speargun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "minigun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.m4"
  }
]`
  },
  {
    label: "All Ammos",
    image: "ammo.rifle.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.slug"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.buckshot"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.incendiary"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.sam"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "submarine.torpedo.straight"
  }
]`
  },
  {
    label: "All Medical",
    image: "syringe.medical.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bandage"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largemedkit"
  }
]`
  },
  {
    label: "All Clothing",
    image: "hoodie.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood.armor.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.mask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largebackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smallbackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.wolf"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "attire.ninja.suit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "nightvisiongoggles"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  }
]`
  },
  {
    label: "All Food",
    image: "bearmeat.cooked.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fish.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "meat.boar"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bearmeat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "deermeat.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wolfmeat.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chicken.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "egg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fish.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "meat.pork.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chicken.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "deermeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wolfmeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bearmeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "corn"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pumpkin"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wheat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "oretea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "woodtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scraptea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purecoolingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purewarmingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "healingtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pureharvestingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "maxhealthtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "radiationresisttea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purecraftingtea_quality"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "mushroom"
  }
]`
  },
  {
    label: "All Explosives",
    image: "ammo.rocket.basic.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.basic"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.mlrs"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.he"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.explosive"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.timed"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosives"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.satchel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.beancan"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rocket.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.sam"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.seeker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "trap.landmine"
  }
]`
  },
  {
    label: "Power & Logic",
    image: "wiretool.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.andswitch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.blocker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.button"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.counter"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.doorcontroller"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.branch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.hbhfsensor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.solarpanel.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.laserdetector"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.medium"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.memorycell"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.orswitch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.random.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.broadcaster"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.receiver"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.combiner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.seismicsensor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.fuelgenerator.small"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.small"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.alarm"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.splitter"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "storage.monitor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.teslacoil"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.timer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "generator.wind.scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.xorswitch"
  }
]`
  },
  {
    label: "Seeds",
    image: "seed.hemp.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.corn"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.hemp"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.potato"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.yellow.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.white.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.red.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.pumpkin"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.green.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.blue.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.wheat"
  }
]`
  },
  {
    label: "Oil Rig Grubbing",
    image: "speargun.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.wetsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.mask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "speargun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "speargun.spear"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "knife.combat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largemedkit"
  }
]`
  }
];

const sortingButtonsPage2 = [
  {
    label: "Facemasks",
    image: "metal.facemask.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.wolf"
  }
]`
  },
  {
    label: "Chestplates",
    image: "metal.plate.torso.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood.armor.jacket"
  }
]`
  },
  {
    label: "Kilts",
    image: "roadsign.kilt.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "clothing.mod.armorinsert_metal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "clothing.mod.armorinsert_wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "clothing.mod.armorinsert_asbestos"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood.armor.pants"
  }
]
`
  },
  {
    label: "Gloves",
    image: "tactical.gloves.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "burlap.gloves"
  }
]
`
  },
  {
    label: "Hoodies",
    image: "hoodie.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  }
]`
  },
  {
    label: "Pants",
    image: "pants.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  }
]
`
  },
  {
    label: "Heavy",
    image: "heavy.plate.helmet.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.mask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.wetsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.miner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.candle"
  }
]
`
  },
  {
    label: "Backpack",
    image: "largebackpack.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largebackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "nightvisiongoggles"
  }
]
`
  },
  {
    label: "Hazmat",
    image: "hazmatsuit.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  }
]
`
  },
  {
    label: "Tools",
    image: "jackhammer.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jackhammer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "axe.salvaged"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "icepick.salvaged"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chainsaw"
  }
]
`
  },
  {
    label: "Supplies",
    image: "bed.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bed"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ladder.wooden.wall"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "barricade.wood.cover"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wall.external.high.stone"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wall.external.high"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gates.external.high.wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gates.external.high.stone"
  }
]
`
  },
  {
    label: "Electrical",
    image: "electric.battery.rechargable.large.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "workbench2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "workbench3"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hammer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.branch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.blocker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "autoturret"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.splitter"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.small"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.medium"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.combiner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fluid.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pipetool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hosetool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wiretool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.furnace"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.receiver"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.broadcaster"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.solarpanel.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "storage.monitor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.alarm"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "generator.wind.scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cupboard.tool"
  }
]
`
  },
  {
    label: "Construction",
    image: "hammer.png",
    message: `[
  {
    "TargetCategory": 1,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": ""
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "samsite"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "drone"
  }
]
`
  },
  {
    label: "AKs",
    image: "rifle.ak.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  }
]
`
  },
  {
    label: "LR",
    image: "rifle.lr300.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.lr300"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hmlmg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lmg.m249"
  }
]
`
  },
  {
    label: "Bolt",
    image: "rifle.bolt.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.bolt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.l96"
  }
]
`
  },
  {
    label: "Semi",
    image: "rifle.semiauto.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.m39"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  }
]
`
  },
  {
    label: "Tommy",
    image: "smg.thompson.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  }
]
`
  },
  {
    label: "Python",
    image: "pistol.python.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.python"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.double"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.m4"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.pump"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.prototype17"
  }
]
`
  },
  {
    label: "Launcher",
    image: "rocket.launcher.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rocket.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.he"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "multiplegrenadelauncher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.buckshot"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.seeker"
  }
]
`
  },
  {
    label: "Attachments",
    image: "weapon.mod.holosight.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.flashlight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.lasersight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.simplesight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.muzzlebrake"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.holosight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.small.scope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.extendedmags"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.muzzleboost"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.8x.scope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.silencer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.burstmodule"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.gascompressionovedrive"
  }
]
`
  },
  {
    label: "Cards",
    image: "keycard_red.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_red"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_blue"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_green"
  }
]
`
  },
  {
    label: "Pistol",
    image: "ammo.pistol.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.slug"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.handmade.shell"
  }
]
`
  },
  {
    label: "5.5",
    image: "ammo.rifle.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.explosive"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.incendiary"
  }
]
`
  },
  {
    label: "Medstick",
    image: "syringe.medical.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  }
]
`
  },
  {
    label: "Medkit",
    image: "largemedkit.png",
    message: `[
  {
    "TargetCategory": 6,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": ""
  }
]
`
  },
  {
    label: "Cloth",
    image: "cloth.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "leather"
  }
]
`
  },
  {
    label: "Low Grade",
    image: "lowgradefuel.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diesel_barrel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 21000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fat.animal"
  }
]
`
  },
  {
    label: "Gun Powder",
    image: "gunpowder.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.bee"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosives"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 6000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.mlrs"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "aiming.module.mlrs"
  }
]
`
  },
  {
    label: "Frags",
    image: "metal.fragments.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  }
]
`
  },
  {
    label: "HQM",
    image: "metal.refined.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  }
]
`
  },
  {
    label: "Wood",
    image: "wood.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  }
]
`
  },
  {
    label: "Comps 1",
    image: "metalpipe.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gears"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cctv.camera"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "targeting.computer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalpipe"
  }
]
`
  },
  {
    label: "Comps 2",
    image: "sewingkit.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sewingkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tarp"
  }
]
`
  },
  {
    label: "Comps 3",
    image: "roadsigns.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sheetmetal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "propanetank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalblade"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsigns"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fuse"
  }
]
`
  },
  {
    label: "Comps 4",
    image: "riflebody.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smgbody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "semibody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "riflebody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalspring"
  }
]
`
  },
  {
    label: "Boom",
    image: "ammo.rocket.basic.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.basic"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.timed"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.satchel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.explosive"
  }
]
`
  }
];

const lockerButtons = [
  {
    label: 'AK Set',
    image: 'rifle.ak.png',
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 128,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 8,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  }
]`
  },
  {
    label: "Tommy Set",
    image: "smg.thompson.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 128,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 8,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  }
]`},
  {
    label: "Other Items Slot 3",
    image: "jacket.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "burlap.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "barricade.wood.cover"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  }
]`},
  {
    label: "Mega Locker",
    image: "jacket.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 150,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 24,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 150,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 100,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "barricade.wood.cover"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "nightvisiongoggles"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largebackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  }
]`}
];

const crafterButtons = [
  {
    label: "Under Workbench",
    image: "workbench3.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 500,
    "BufferAmount": 0,
    "MinAmountInInput": 500,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 500,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 100,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "leather"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sewingkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsigns"
  }
]`
  },
  {
    label: "Seal Boxes",
    image: "hammer.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 4000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 4000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "building.planner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hammer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wiretool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 64,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 64,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 100,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.smoke"
  }
]`
  },
  {
    label: "Ammo/Meds In",
    image: "cloth.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 500,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  }
]`
  },
  {
    label: "Ammo/Meds Out",
    image: "syringe.medical.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 1,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 512,
    "BufferAmount": 0,
    "MinAmountInInput": 1,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 512,
    "BufferAmount": 0,
    "MinAmountInInput": 1,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  }
]`
  }
];

const diagramButtons = [
  {
    label: 'Auto Furnaces',
    image: 'furnace.large.png',
    fullImage: 'AutoSmelterv4.gif',
    buttons: [
      {
        label: 'Conveyor1',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  }
]`
      },
      {
        label: 'Conveyor2',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  }
]`
      },
      {
        label: 'Conveyor3',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  }
]`
      },
      {
        label: 'Conveyor4',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 11,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 22,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 6,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  }
]`
      }
    ]
  },
  {
    label: 'Electric Furnaces',
    image: 'electric.furnace.png',
    fullImage: 'electricfurnaces.gif',
    buttons: [
      {
        label: 'Conveyor1',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  }
]`
      },
      {
        label: 'Conveyor2',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  }
]`
      }
    ]
  }
];

function createButtons(containerId, buttons, action) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  buttons.forEach(btn => {
    const button = document.createElement('button');
    button.innerHTML = btn.image ? `<img src="${btn.image}" alt=""> ${btn.label}` : btn.label;
    button.onclick = () => action(btn, button);
    container.appendChild(button);
  });
}

createButtons('sortingPage1', sortingButtonsPage1, (btn, el) => copyToClipboard(btn.message, el));
createButtons('sortingPage2', sortingButtonsPage2, (btn, el) => copyToClipboard(btn.message, el));
createButtons('lockerButtons', lockerButtons, (btn, el) => copyToClipboard(btn.message, el));
createButtons('crafterButtons', crafterButtons, (btn, el) => copyToClipboard(btn.message, el));

function showDiagramAndButtons(diagram) {
  const img = document.getElementById('diagramImage');
  img.src = diagram.fullImage;
  img.classList.remove('hidden');

  const container = document.getElementById('diagramSpecialButtons');
  container.innerHTML = '';
  diagram.buttons.forEach(btn => {
    const button = document.createElement('button');
    button.textContent = btn.label;
    button.onclick = () => copyToClipboard(btn.message, button);
    container.appendChild(button);
  });
}

createButtons('diagramButtons', diagramButtons, (btn) => showDiagramAndButtons(btn));
showSortingPage(1);