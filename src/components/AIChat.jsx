import { useEffect } from "react";
import { createMyAfriChat } from "my-africhat";
import { afriChatConfig } from "../africhat.config";

export default function AIChat() {
  useEffect(() => {
    // Initialisation au montage du composant
    const widget = createMyAfriChat(afriChatConfig);
    widget.mount();

    // Nettoyage au démontage pour éviter les fuites de mémoire
    return () => {
      if (widget && typeof widget.destroy === 'function') {
        widget.destroy();
      }
    };
  }, []);

  return null; // Ce composant n'affiche rien lui-même, il lance le widget
}