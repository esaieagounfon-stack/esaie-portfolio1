export const afriChatConfig = {
  version: 1,
  site: {
    name: "Portfolio Assistant de Esaie",
    defaultLanguage: "fr",
    supportedLanguages: ["fr", "en"],
  },
  branding: {
    name: "Portfolio Assistant de Esaie",
    welcomeMessage: "Salut ! Je suis l'assistant IA de ce portfolio. Pose-moi une question !",
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
    chatEndpoint: "https://ptvvdtwdxophgwrascpf.supabase.co/functions/v1/widget-chat",
    ttsEndpoint: "https://ptvvdtwdxophgwrascpf.supabase.co/functions/v1/widget-tts",
    realtimeTokenEndpoint: "https://ptvvdtwdxophgwrascpf.supabase.co/functions/v1/widget-realtime-token",
    siteKey: import.meta.env.VITE_AFRICHAT_SITE_KEY,
  },
};