Hooks.on("renderChatMessage", (chatMessage, html, messageData) => {
    injectMessageTag(chatMessage, html, messageData);
});

Hooks.on("preCreateChatMessage", (msg, data, options, userId) => {
    let indicator = undefined
    let whisper = undefined
    const isDmgRoll = msg.flags.pf2e?.context?.type === "damage-roll";    
    const isHealing = msg.rolls[0]?._formula?.includes("healing");
    const isGm = msg.author.isGM
    const isBlind = msg.blind
    const isSelfRoll = msg.whisper == userId
    const isRoll = msg.rolls?.length > 0;
    const isWhisper = msg.whisper.length > 0;
    if (isDmgRoll && isGm) {
        const settingsShowGMdmg = game.settings.get("chat-indicators-plus", "autoRevealGMDamage");
        if (settingsShowGMdmg) {
            indicator = game.i18n.localize("lang.autoReveal")
            whisper = []              
        }
    } else if (isHealing && !isGm) {
        indicator = game.i18n.localize("lang.autoReveal")
        whisper = []
    } else if (isBlind) {
        indicator = game.i18n.localize("lang.RollBlind")
    } else if (isSelfRoll) {
        indicator = game.i18n.localize("lang.RollSelf")
    } else if (isRoll && isWhisper) {
        indicator = game.i18n.localize("lang.RollPrivate")
    } else if (!isRoll && isWhisper) {
        indicator = game.i18n.localize("lang.Whisper")
    } else if (isRoll) {
        indicator = game.i18n.localize("lang.Public")
    }

    if (indicator) {
        const msgUpdate = {
            flags: {
            "chat-indicators-plus": {
              indicator
            }
          }
        };
    if (whisper) msgUpdate.whisper = whisper;
    msg.updateSource(msgUpdate);
    }
  });

function injectMessageTag(chatMessage, html, messageData) {
    const timestampTag = html.find(".message-timestamp");

    const indicatorElement = $("<span>");
    indicatorElement.addClass("chat-mode-indicator");

    const msgFlag = chatMessage.getFlag("chat-indicators-plus", "indicator")

    // Inject tag to the left of the timestamp
    if (msgFlag) {
        indicatorElement.text(msgFlag)
        timestampTag.before(indicatorElement);
        return
    }
}