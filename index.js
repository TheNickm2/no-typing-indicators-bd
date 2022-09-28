module.exports = (Plugin, Library) => {
  const { Logger, Patcher, WebpackModules } = Library;

  return class NoTypingIndicators extends Plugin {
    onStart() {
      Logger.log("Started");
      const TypingModule = WebpackModules.getByProps("startTyping");
      Patcher.instead(TypingModule, "startTyping", () => {});
    }

    onStop() {
      Logger.log("Stopped");
      Patcher.unpatchAll();
    }
  };
};
