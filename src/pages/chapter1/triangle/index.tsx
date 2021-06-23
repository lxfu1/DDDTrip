import { useEffect, useRef } from "react";
import { getWebGLContext, initShaders } from "@/util";
import { initVertexBuffers } from "../util";
import vshader from "./vshader.glsl";
import fshader from "./fshader.glsl";

export const Triangle = () => {
  const container: React.LegacyRef<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    if (container.current) {
      const gl = getWebGLContext(container.current);
      initShaders(gl, vshader, fshader);
      const n = initVertexBuffers(gl);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  }, []);

  return <canvas ref={container}></canvas>;
};
