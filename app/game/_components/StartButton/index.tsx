// Enhanced start game button for Padhagala Raaja with cultural styling and improved user experience
// Features beautiful animations, gradient backgrounds, and bilingual text support

"use client"

import { BUTTON_TEXT } from "../../constants/game-constants";
import { useConnectionState } from "../../hooks/use-connection-state";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";

interface StartGameButtonProps {
  onGameStarted?: () => void;
  onGameEnded?: () => void;
  isGameEnded?: boolean;
}

export function StartGameButton({
  onGameStarted,
  onGameEnded,
  isGameEnded,
}: StartGameButtonProps) {
  const { isConnecting, isDisconnecting, toggleConnection } =
    useConnectionState(onGameStarted, onGameEnded);

  // Show spinner during connection process
  const showSpinner = isConnecting;
  const btnText = isGameEnded ? BUTTON_TEXT.RESTART : BUTTON_TEXT.START;

  return (
    <div className="flex justify-center">
      <button
        className="styled-button group hover:shadow-2xl transition-all duration-300 hover:scale-105"
        onClick={toggleConnection}
        disabled={isConnecting || isDisconnecting}
      >
        <>
          <span className="styled-button-text group-hover:animate-pulse">
            {isConnecting ? BUTTON_TEXT.CONNECTING : btnText}
          </span>
          <span className="styled-button-icon group-hover:rotate-12 transition-transform duration-300">
            {showSpinner ? (
              <span className="spinner"></span>
            ) : isGameEnded ? (
              <IconSparkles size={18} strokeWidth={3} className="text-white" />
            ) : (
              <IconArrowRight size={18} strokeWidth={3} className="text-white" />
            )}
          </span>
        </>
      </button>
    </div>
  );
}
