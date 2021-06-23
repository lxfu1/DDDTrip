/**
 * @fileoverview This file contains functions every webgl program will need
 * a version of one way or another.
 *
 * Instead of setting up a context manually it is recommended to
 * use. This will check for success or failure. On failure it
 * will attempt to present an approriate message to the user.
 *
 *       gl = WebGLUtils.setupWebGL(canvas);
 *
 * For animated WebGL apps use of setTimeout or setInterval are
 * discouraged. It is recommended you structure your rendering
 * loop like this.
 *
 *       function render() {
 *         window.requestAnimationFrame(render, canvas);
 *
 *         // do rendering
 *         ...
 *       }
 *       render();
 *
 * This will call your rendering function up to the refresh rate
 * of your display but will stop rendering if your app is not
 * visible.
 */

export const getWebGLUtils = () => {
    /**
     * Creates the HTLM for a failure message
     * @param {string} canvasContainerId id of container of the canvas.
     * @return {string} The html.
     */
     const makeFailHTML =  (msg: string) => {
      return `<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">${msg}</div>`
    };
  
    /**
     * Mesasge for getting a webgl browser
     * @type {string}
     */
    const GET_A_WEBGL_BROWSER =
      "" +
      "This page requires a browser that supports WebGL.<br/>" +
      '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>';
  
    /**
     * Mesasge for need better hardware
     * @type {string}
     */
    const OTHER_PROBLEM =
      "" +
      "It doesn't appear your computer can support WebGL.<br/>" +
      '<a href="http://get.webgl.org">Click here for more information.</a>';
  
    /**
     * Creates a webgl context. If creation fails it will
     * change the contents of the container of the <canvas>
     * tag to an error message with the correct links for WebGL.
     * @param {Element} canvas. The canvas element to create a
     *     context from.
     * @param {WebGLContextCreationAttirbutes} opt_attribs Any
     *     creation attributes you want to pass in.
     * @param {function:(msg)} opt_onError An function to call
     *     if there is an error during creation.
     * @return {WebGLRenderingContext} The created context.
     */
    const setupWebGL =  (canvas: HTMLCanvasElement, opt_attribs?: WebGLContextAttributes, opt_onError?: Function) => {
      const handleCreationError = (msg: string) => {
        const container = document.getElementsByTagName("body")[0];
        if (container) {
          let str = window.WebGLRenderingContext
            ? OTHER_PROBLEM
            : GET_A_WEBGL_BROWSER;
          if (msg) {
            str += "<br/><br/>Status: " + msg;
          }
          container.innerHTML = makeFailHTML(str);
        }
      }
  
      opt_onError = opt_onError || handleCreationError;
  
      if (canvas.addEventListener) {
        canvas.addEventListener(
          "webglcontextcreationerror",
           (event: Event) => {
            opt_onError?.(event);
          },
          false
        );
      }
      const context = create3DContext(canvas, opt_attribs);
      if (!context) {
        if (!window.WebGLRenderingContext) {
          opt_onError("");
        } else {
          opt_onError("");
        }
      }
  
      return context;
    };
  
    /**
     * Creates a webgl context.
     * @param {!Canvas} canvas The canvas tag to get context from. If one is not passed in one will be created.
     * @return {!WebGLContext} The created context.
     */
    const create3DContext = (canvas: HTMLCanvasElement, opt_attribs?: WebGLContextAttributes) => {
      const names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
      let context = null;
      for (let ii = 0; ii < names.length; ++ii) {
        try {
          context = canvas.getContext(names[ii], opt_attribs);
        } catch (e) {}
        if (context) {
          break;
        }
      }
      return context;
    };
  
    return {
      create3DContext: create3DContext,
      setupWebGL: setupWebGL,
    };
}

