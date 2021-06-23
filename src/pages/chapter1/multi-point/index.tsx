import { useEffect, useRef } from "react";
import { getWebGLContext, initShaders } from "@/util";
import { initVertexBuffers } from "../util";
import vshader from "./vshader.glsl";
import fshader from "./fshader.glsl";

export const MultiPoint = () => {
  const container: React.LegacyRef<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    if (container.current) {
      // Get gl content
      const gl = getWebGLContext(container.current);
      // Set VSHADER adn FSHADER
      initShaders(gl, vshader, fshader);
      // Set vertices and bindBuffer
      const n = initVertexBuffers(gl);
      // Set background color. If not specified the default (255, 255, 255, 1)
      gl.clearColor(0, 0, 0, 1);
      // Clear color buffer
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.POINGTS, 0, n);
    }
  }, []);

  return <canvas ref={container}></canvas>;
};
