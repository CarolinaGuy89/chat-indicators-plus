Hooks.on("i18nInit", () => {

  game.settings.register("chat-indicators-plus", "autoRevealGMDamage", {
    name: "Overide GM Damage rolls to be public",
    hint: "Do you want GM Damage rolls always made shown as public?",
    scope: "world",     
    config: true,        
    requiresReload: true, 
    type: String,
    choices: {           
        0: "Use Default",
        1: "Public GM Damage rolls"
      },
    default: 0
  })
  
game.settings.register("chat-indicators-plus", "autoRevealPlayerHeal", {
    name: "Overide player heals to be public",
    hint: "Do you want the player rolled heals to be shown as public?",
    scope: "world",  
    config: true,        
    requiresReload: true, 
    type: String,
    choices: {
        0: "Use Default",
        1: "Public player heals"
      },
    default: 0
  })
});