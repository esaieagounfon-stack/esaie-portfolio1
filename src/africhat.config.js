export const afriChatConfig = {
  branding: {
    name: "Portfolio Assistant de Mr Esaie",
    welcomeMessage: "Salut ! Je suis l'assitant IA de ce portfolio. Pose-moi des questions sur les projets ou les compétences !",
    accentColor: "#007bff", // Mets ici la couleur dominante de ton site
    launcherLabel: "Discuter avec mon assistant IA",
    iconPreset: "afri-classic-outline", 
    iconSize: "medium",
  },
  integration: {
    mode: "fullScreen",
    position: "bottom-right", // Classique et efficace
    zIndex: 9999,
  },
  api: {
    chatEndpoint: "https://ptvwtwdwvshpxersscpf.supabase.co/functions/v1/widget-chat",
    // On récupère la clé depuis les variables d'environnement
    siteKey: import.meta.env.afc_live_msOQQsctgRBt.OOIfwMBcoCL2FOF9NNgIMaPUQWtRukURK9CFGcGE, 
  },
};