"use client";

import React, { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const maxParticles = 60;
    const connectionDist = 120;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Float very slowly
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.radius = Math.random() * 2 + 1.5;
      }

      update(w: number, h: number) {
        if (prefersReducedMotion) return;
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > w) this.vx = -this.vx;
        if (this.y < 0 || this.y > h) this.vy = -this.vy;
      }

      draw(cCtx: CanvasRenderingContext2D) {
        cCtx.beginPath();
        cCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Primary brand color `#0F766E` with subtle opacity
        cCtx.fillStyle = "rgba(15, 118, 110, 0.4)";
        cCtx.fill();
      }
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawConnections = (cCtx: CanvasRenderingContext2D) => {
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            cCtx.beginPath();
            cCtx.moveTo(p1.x, p1.y);
            cCtx.lineTo(p2.x, p2.y);
            // Opacity based on proximity
            const alpha = (1 - dist / connectionDist) * 0.12;
            cCtx.strokeStyle = `rgba(15, 118, 110, ${alpha})`;
            cCtx.lineWidth = 1;
            cCtx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid scanlines
      ctx.strokeStyle = "rgba(15, 118, 110, 0.015)";
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      drawConnections(ctx);

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(loop);
      }
    };

    init();
    loop();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
