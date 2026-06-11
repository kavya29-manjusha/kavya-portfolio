import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    const trail = document.createElement("div");

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0",
      left: "0",
      pointerEvents: "none",
      zIndex: "99999",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #6D5BFF, #4FD1C5)",
      boxShadow: "0 0 18px rgba(109,91,255,0.7)",
      transition: "width 0.15s ease, height 0.15s ease, border-radius 0.15s ease",
      width: "12px",
      height: "12px",
    });

    Object.assign(trail.style, {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      position: "fixed",
      top: "0",
      left: "0",
      pointerEvents: "none",
      zIndex: "99998",
      transform: "translate(-50%, -50%)",
      border: "2px solid rgba(79, 209, 197, 0.4)",
      boxShadow: "0 0 20px rgba(79, 209, 197, 0.2)",
    });

    document.body.appendChild(cursor);
    document.body.appendChild(trail);

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    let lastX = 0;
    let lastY = 0;
    let speed = 0;

    // 🔊 SINGLE AUDIO CONTEXT (FIX)
    let audioCtx;

    const initAudio = () => {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
    };

    const playClickSound = () => {
      try {
        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(350, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtx.currentTime + 0.15
        );

        oscillator.connect(gain);
        gain.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.15);
      } catch (err) {}
    };

    const triggerHaptic = () => {
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }
    };

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      speed = Math.hypot(mouseX - lastX, mouseY - lastY);

      lastX = mouseX;
      lastY = mouseY;

      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";

      if (speed > 20) {
        cursor.style.width = "28px";
        cursor.style.height = "8px";
        cursor.style.borderRadius = "20px";
        cursor.style.transform = "translate(-50%, -50%) rotate(15deg)";
      } else {
        cursor.style.width = "12px";
        cursor.style.height = "12px";
        cursor.style.borderRadius = "50%";
        cursor.style.transform = "translate(-50%, -50%) rotate(0deg)";
      }
    };

    const createSparks = (x, y) => {
      const count = 12;

      for (let i = 0; i < count; i++) {
        const spark = document.createElement("div");

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 70 + 20;

        Object.assign(spark.style, {
          position: "fixed",
          left: x + "px",
          top: y + "px",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #4FD1C5, #6D5BFF, transparent)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: "99997",
          opacity: "1",
          transition: "transform 600ms ease-out, opacity 600ms ease-out",
        });

        document.body.appendChild(spark);

        requestAnimationFrame(() => {
          spark.style.transform = `translate(${Math.cos(angle) * distance}px,
                                            ${Math.sin(angle) * distance}px)
                                            scale(0.2)`;
          spark.style.opacity = "0";
        });

        setTimeout(() => spark.remove(), 650);
      }
    };

    const click = (e) => {
      initAudio(); // 🔥 IMPORTANT FIX

      createSparks(e.clientX, e.clientY);
      playClickSound();
      triggerHaptic();
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;

      trail.style.left = trailX + "px";
      trail.style.top = trailY + "px";

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
      cursor.remove();
      trail.remove();
    };
  }, []);

  return null;
}

export default Cursor;