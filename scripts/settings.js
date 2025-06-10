Hooks.on("i18nInit", () => {

// game.settings.register("chat-indicators-plus", "tagPublicRolls", {
//     name: "Display indicators on public roll?",
//     hint: "Do you want [Public Roll] displayed?",
//     scope: "world",     // This specifies a client-stored setting
//     config: true,        // This specifies that the setting appears in the configuration view
//     requiresReload: true, // This will prompt the user to reload the application for the setting to take effect.
//     type: String,
//     choices: {           // If choices are defined, the resulting setting will be a select menu
//         0: "Hidden",
//         1: "Shown"
//       },
//     default: 1       // The default value for the setting
//   });

game.settings.register("chat-indicators-plus", "autoRevealGMDamage", {
    name: "Overide GM Damage rolls to be public",
    hint: "Do you want GM Damage rolls always made shown as public?",
    scope: "world",     // This specifies a client-stored setting
    config: true,        // This specifies that the setting appears in the configuration view
    requiresReload: true, // This will prompt the user to reload the application for the setting to take effect.
    type: String,
    choices: {           // If choices are defined, the resulting setting will be a select menu
        0: "Use Default",
        1: "Public GM Damage rolls"
      },
    default: 0       // The default value for the setting
  })
game.settings.register("chat-indicators-plus", "autoRevealPlayerHeal", {
    name: "Overide player heals to be public",
    hint: "Do you want the player rolled heals to be shown as public?",
    scope: "world",     // This specifies a client-stored setting
    config: true,        // This specifies that the setting appears in the configuration view
    requiresReload: true, // This will prompt the user to reload the application for the setting to take effect.
    type: String,
    choices: {           // If choices are defined, the resulting setting will be a select menu
        0: "Use Default",
        1: "Public player heals"
      },
    default: 0       // The default value for the setting
  })
});