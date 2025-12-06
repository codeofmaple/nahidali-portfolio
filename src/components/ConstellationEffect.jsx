import { useEffect, useRef } from 'react';

const ConstellationEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let w, h, points;
        let animationId;

        const init = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            points = [];
            for (let i = 0; i < 100; i++) {
                points.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Star color

            points.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
                ctx.fill();

                point.x += point.vx;
                point.y += point.vy;

                // Bounce off edges
                if (point.x < 0 || point.x > w) point.vx *= -1;
                if (point.y < 0 || point.y > h) point.vy *= -1;
            });

            // Draw lines
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const p1 = points[i];
                    const p2 = points[j];
                    const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        // Dynamic opacity based on distance
                        ctx.strokeStyle = `rgba(100, 116, 139, ${1 - distance / 150})`;
                        ctx.stroke();
                    }
                }
            }
            animationId = requestAnimationFrame(draw);
        };

        init();
        draw();

        const handleResize = () => init();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default ConstellationEffect;