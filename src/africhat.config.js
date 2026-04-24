export const afriChatConfig = {
  version: 1,
  site: {
    name: "Portfolio Assistant de Mr Esaie",
    defaultLanguage: "fr",
    supportedLanguages: ["fr", "en"],
  },
  branding: {
    name: "Portfolio Assistant de Mr Esaie",
    welcomeMessage: "Salut ! Je suis l'assistant IA de ce portfolio. Pose-moi des questions sur les projets ou les compétences !",
    accentColor: "#007bff", // Mets ici la couleur dominante de ton site
    launcherLabel: "Discuter avec mon assistant IA",
    iconPreset: "afri-benin-green", 
    iconSize: "medium",
  },
  assistant: {
    voice: "alloy",
    audioEnabled: true,
  },
  integration: {
    mode: "floating",
    position: "bottom-right", // Classique et efficace
    zIndex: 9999,
  },
  api: {
    chatEndpoint: "https://ptvwtwdwvshpxersscpf.supabase.co/functions/v1/widget-chat",
    ttsEndpoint: "https://ptvwtwdwvshpxersscpf.supabase.co/functions/v1/widget-tts",
    realtimeTokenEndpoint: "https://ptvwtwdwvshpxersscpf.supabase.co/functions/v1/widget-realtime-token",
    siteKey: "afc_live_msOQQsctgRBt.OOIfwMBcoCL2FOF9NNgIMaPUQWtRukURK9CFGcGE", 
  },
};