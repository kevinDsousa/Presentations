import React, { useRef, useEffect } from "react";
import { createWebContainer, useWebContainer } from "@webcontainers/react";
import "@webcontainers/webcontainers.css";

const WebContainer = () => {
  const containerRef = useRef(null);
  const { container, error, isLoading } = useWebContainer(
    containerRef,
    "https://exemplo.com/"
  );

  useEffect(() => {
    if (container) {
      container.start();
    }
    return () => {
      if (container) {
        container.stop();
      }
    };
  }, [container]);

  return (
    <div>
      <h2>Meu container da web</h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Erro ao carregar o container: {error.message}</p>
      ) : (
        <div ref={containerRef} className="webcontainer"></div>
      )}
    </div>
  );
};

const MyWebContainer = createWebContainer(WebContainer);

export default MyWebContainer;
