/**
 * mnemonicware ident - transparent, dependency-free SVG motion logo.
 * Usage: <script src="mnemonicware-ident.js" defer></script>
 *        <mnemonicware-ident autoplay style="width:min(900px,100%)"></mnemonicware-ident>
 * API: .play(), .pause(), .resume(), .stop(), .seek(0..1)
 * Attributes: autoplay, loop, duration (milliseconds, default 3800)
 * CSS variables: --mnw-red, --mnw-ink, --mnw-white
 * Events: ident-end
 */
(() => {
  'use strict';
  if (customElements.get('mnemonicware-ident')) return;
  const glyphPath = "M4.59 0H14.93V-25.84C14.93 -32.03 18.91 -35.4 23.58 -35.4C28.18 -35.4 31.46 -32.32 31.46 -27.6V0H41.51V-26.58C41.51 -31.75 44.75 -35.4 50 -35.4C54.43 -35.4 58.04 -32.85 58.04 -27.11V0H68.41V-28.59C68.41 -38.76 62.1 -44.17 53.89 -44.17C47.58 -44.17 42.41 -40.97 40.11 -35.97C38.31 -40.93 33.51 -44.17 27.64 -44.17C22.19 -44.17 17.23 -41.38 14.6 -35.81V-43.31H4.59ZM89.5 -24.49C89.5 -31.87 93.56 -35.11 98.97 -35.11C104.51 -35.11 107.71 -31.79 107.71 -25.43V0H118.08V-27.07C118.08 -38.19 111.69 -44.17 102.62 -44.17C96.67 -44.17 92.29 -41.55 89.33 -36.67V-43.31H79.16V0H89.5ZM147.99 0.98C158.12 0.98 166.16 -4.88 167.8 -13.37H158.12C156.93 -9.68 153.44 -7.18 148.23 -7.18C141.26 -7.18 137.24 -11.89 136.99 -18.95H168.33V-21.78C168.33 -35.07 160.04 -44.3 147.57 -44.3C135.43 -44.3 126.86 -34.78 126.86 -21.62C126.86 -8.49 134.98 0.98 147.99 0.98ZM137.07 -26.09C137.77 -32.28 141.75 -36.09 147.74 -36.09C153.73 -36.09 157.75 -32.28 158.4 -26.09ZM176.94 0H187.28V-25.84C187.28 -32.03 191.26 -35.4 195.93 -35.4C200.53 -35.4 203.81 -32.32 203.81 -27.6V0H213.86V-26.58C213.86 -31.75 217.1 -35.4 222.35 -35.4C226.78 -35.4 230.39 -32.85 230.39 -27.11V0H240.76V-28.59C240.76 -38.76 234.45 -44.17 226.24 -44.17C219.93 -44.17 214.76 -40.97 212.46 -35.97C210.66 -40.93 205.86 -44.17 199.99 -44.17C194.54 -44.17 189.58 -41.38 186.95 -35.81V-43.31H176.94ZM270.87 0.98C283.62 0.98 292.24 -8.16 292.24 -21.62C292.24 -35.07 283.62 -44.3 270.87 -44.3C258.11 -44.3 249.5 -35.07 249.5 -21.62C249.5 -8.16 258.11 0.98 270.87 0.98ZM270.87 -7.67C264.18 -7.67 259.96 -12.96 259.96 -21.62C259.96 -30.31 264.22 -35.64 270.87 -35.64C277.47 -35.64 281.74 -30.27 281.74 -21.62C281.74 -13 277.51 -7.67 270.87 -7.67ZM311.31 -24.49C311.31 -31.87 315.37 -35.11 320.79 -35.11C326.32 -35.11 329.52 -31.79 329.52 -25.43V0H339.9V-27.07C339.9 -38.19 333.5 -44.17 324.44 -44.17C318.49 -44.17 314.1 -41.55 311.15 -36.67V-43.31H300.97V0H311.31ZM350.69 0H361.02V-43.31H350.69ZM355.85 -49.75C359.38 -49.75 362.05 -52.29 362.05 -55.66C362.05 -58.98 359.38 -61.52 355.85 -61.52C352.33 -61.52 349.66 -58.98 349.66 -55.66C349.66 -52.29 352.33 -49.75 355.85 -49.75ZM390.96 0.98C401.91 0.98 409.87 -6.07 410.61 -15.54H400.4C399.41 -10.75 396.5 -7.63 391.09 -7.63C384.28 -7.63 380.26 -13.08 380.26 -21.62C380.26 -30.19 384.32 -35.68 391.09 -35.68C396.46 -35.68 399.7 -32.44 400.48 -27.81H410.61C409.71 -37.45 401.83 -44.3 390.96 -44.3C378.29 -44.3 369.8 -34.99 369.8 -21.62C369.8 -8.24 378.29 0.98 390.96 0.98ZM428.66 0H439.32L444.65 -18.05C445.84 -22.07 446.91 -26.29 447.98 -30.52C449.08 -26.29 450.15 -22.07 451.3 -18.05L456.55 0H467.29L480.71 -43.31H469.71L465.24 -26.87C463.89 -21.74 462.62 -16.24 461.39 -10.87C460.03 -16.24 458.72 -21.74 457.33 -26.87L452.77 -43.31H443.22L438.62 -26.87C437.19 -21.7 435.88 -16.16 434.52 -10.79C433.21 -16.16 431.98 -21.7 430.63 -26.87L426.16 -43.31H415.29ZM500.85 0.7C507.9 0.7 511.55 -2.26 513.6 -6.11H513.77V0H523.94V-29.53C523.94 -38.55 517.25 -44.17 505.97 -44.17C494.65 -44.17 487.6 -38.47 487.11 -29.86H497.07C497.36 -33.51 500.72 -36.13 505.77 -36.13C510.73 -36.13 513.68 -33.51 513.68 -29.82V-29.49C513.68 -26.54 510.94 -26.41 502.9 -25.51C493.95 -24.57 485.87 -22.15 485.87 -12.3C485.87 -3.65 492.23 0.7 500.85 0.7ZM503.39 -6.97C498.88 -6.97 495.96 -8.98 495.96 -12.39C495.96 -16.32 499.74 -17.92 504.17 -18.58C508.43 -19.24 512.45 -19.89 513.72 -20.71V-16.04C513.72 -10.99 510.16 -6.97 503.39 -6.97ZM534.68 0H545.02V-24.53C545.02 -31.29 548.83 -34.7 553.76 -34.7C555.81 -34.7 557.86 -34.49 558.64 -34.37V-43.56C557.82 -43.64 556.67 -43.72 555.27 -43.72C549.7 -43.72 546.37 -41.1 544.77 -36.13H544.65V-43.31H534.68ZM585.3 0.98C595.43 0.98 603.47 -4.88 605.11 -13.37H595.43C594.24 -9.68 590.75 -7.18 585.54 -7.18C578.57 -7.18 574.55 -11.89 574.31 -18.95H605.64V-21.78C605.64 -35.07 597.36 -44.3 584.89 -44.3C572.75 -44.3 564.17 -34.78 564.17 -21.62C564.17 -8.49 572.3 0.98 585.3 0.98ZM574.39 -26.09C575.08 -32.28 579.06 -36.09 585.05 -36.09C591.04 -36.09 595.06 -32.28 595.72 -26.09Z";
  const clamp = (v, min=0, max=1) => Math.max(min, Math.min(max, v));
  const mix = (a,b,t) => a+(b-a)*t;
  const ease = t => { t=clamp(t); return 1 - Math.pow(1-t, 3); };
  const smooth = t => { t=clamp(t); return t*t*(3-2*t); };
  const progress = (t,a,b) => clamp((t-a)/(b-a));
  const spring = t => { t=clamp(t); return 1 - Math.exp(-7*t)*Math.cos(11*t); };

  class MnemonicwareIdent extends HTMLElement {
    static get observedAttributes() { return ['duration']; }
    constructor() {
      super();
      this.attachShadow({mode:'open'});
      this.shadowRoot.innerHTML = `
        <style>
          :host { display:block; width:100%; aspect-ratio:1000 / 260; background:transparent; contain:layout style; }
          svg { width:100%; height:100%; display:block; overflow:visible; }
          .white { fill:var(--mnw-white,#F4F5F7); }
          .red { fill:var(--mnw-red,#F04459); }
          .ink { fill:var(--mnw-ink,#171A22); }
          #frame { fill:none; stroke:var(--mnw-white,#F4F5F7); stroke-width:6; stroke-linejoin:miter; }
        </style>
        <svg viewBox="0 0 1000 260" role="img" aria-label="mnemonicware Logo-Animation">
          <defs>
            <clipPath id="reveal"><rect id="reveal-rect" x="0" y="-100" width="0" height="180"/></clipPath>
            <clipPath id="square-clip"><rect x="-54" y="-54" width="108" height="108"/></clipPath>
          </defs>
          <g id="wordmark" transform="translate(588 157)">
            <g clip-path="url(#reveal)"><path class="white" d="${glyphPath}"/></g>
          </g>
          <g id="symbol-translate" transform="translate(500 130)">
            <g id="symbol-scale" transform="scale(0.01)">
              <g id="symbol-rotate">
                <rect class="ink" x="-54" y="-54" width="108" height="108"/>
                <g clip-path="url(#square-clip)"><rect class="red" id="fill" x="-54" y="-54" width="108" height="108"/></g>
                <rect id="frame" x="-54" y="-54" width="108" height="108" opacity="0"/>
              </g>
            </g>
          </g>
        </svg>`;
      this.$ = Object.fromEntries(['wordmark','reveal-rect','symbol-translate','symbol-scale','symbol-rotate','fill','frame']
        .map(id => [id, this.shadowRoot.getElementById(id)]));
      this._raf = 0; this._elapsed = 0; this._start = 0; this._playing = false;
      this._boundTick = this._tick.bind(this);
    }
    connectedCallback() {
      this.seek(0);
      if (this.hasAttribute('autoplay')) {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) this.seek(1);
        else this.play();
      }
    }
    disconnectedCallback() { this.pause(); }
    get duration() {
      const ms = Number(this.getAttribute('duration'));
      return Number.isFinite(ms) && ms >= 500 ? ms : 3800;
    }
    attributeChangedCallback(name) {
      if (name === 'duration' && this.isConnected) this.seek(this._elapsed / this.duration);
    }
    play() { this.pause(); this._elapsed=0; this.seek(0); this.resume(); }
    resume() {
      if (this._playing) return;
      if (this._elapsed >= this.duration) this._elapsed=0;
      this._start=performance.now()-this._elapsed;
      this._playing=true;
      this._raf=requestAnimationFrame(this._boundTick);
    }
    pause() { this._playing=false; if(this._raf) cancelAnimationFrame(this._raf); this._raf=0; }
    stop() { this.pause(); this.seek(0); }
    seek(normalizedTime) {
      this._elapsed = clamp(normalizedTime)*this.duration;
      this._render(this._elapsed / this.duration * 3800);
      if(this._playing) this._start=performance.now()-this._elapsed;
    }
    _tick(now) {
      if (!this._playing) return;
      if (now < this._start) { // Hold the final frame during the loop gap.
        this._raf=requestAnimationFrame(this._boundTick);
        return;
      }
      this._elapsed = now-this._start;
      if (this._elapsed >= this.duration) {
        this.seek(1);
        this.pause();
        this.dispatchEvent(new CustomEvent('ident-end'));
        if (this.hasAttribute('loop')) {
          // A short still frame before looping; no setTimeout needed.
          this._elapsed=-600;
          this._start=performance.now()+600;
          this._playing=true;
          this._raf=requestAnimationFrame(this._boundTick);
        }
        return;
      }
      this._render(this._elapsed/this.duration*3800);
      this._raf=requestAnimationFrame(this._boundTick);
    }
    _render(ms) {
      const grow=spring(progress(ms,90,780));
      const iconScale=ms<90?0.001:ms<780?Math.max(0.001, mix(0.001,1,grow)):1;
      const tilt=ease(progress(ms,810,1610));
      const drain=smooth(progress(ms,930,1670));
      const move=ease(progress(ms,840,1620));
      const reveal=smooth(progress(ms,940,1630));
      const settle=smooth(progress(ms,2970,3260));
      const iconX=mix(500,190,move) + (1-settle)*Math.sin(Math.PI*progress(ms,2700,3250))*1.7;
      this.$['symbol-translate'].setAttribute('transform', `translate(${iconX.toFixed(3)} 130)`);
      this.$['symbol-scale'].setAttribute('transform', `scale(${iconScale.toFixed(4)})`);
      this.$['symbol-rotate'].setAttribute('transform', `rotate(${(45*tilt).toFixed(3)})`);
      const red=this.$['fill'];
      red.setAttribute('x',mix(-54,-10,drain).toFixed(2));
      red.setAttribute('y',mix(-54,-46,drain).toFixed(2));
      red.setAttribute('width',mix(108,58,drain).toFixed(2));
      red.setAttribute('height',mix(108,58,drain).toFixed(2));
      this.$['frame'].setAttribute('opacity',smooth(progress(ms,950,1500)).toFixed(3));
      this.$['wordmark'].setAttribute('transform',`translate(${(iconX+88).toFixed(3)} 157)`);
      this.$['reveal-rect'].setAttribute('width',(630*reveal).toFixed(3));
    }
  }
  customElements.define('mnemonicware-ident',MnemonicwareIdent);
})();
