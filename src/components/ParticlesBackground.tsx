'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-background">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            fullScreen: { enable: false },
            particles: {
              number: {
                value: 60,
              },
              color: {
                value: ['#8b5cf6', '#a78bfa', '#c4b5fd'], // Purple shades from your theme
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: { min: 0.3, max: 0.7 },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 3 },
              },
              links: {
                enable: true,
                distance: 120,
                color: '#8b5cf6', // Purple-500
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                outModes: {
                  default: 'bounce',
                },
                attract: {
                  enable: true,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
              },
            },
            interactivity: {
              detectsOn: 'window',
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5,
                    color: '#c4b5fd', // Purple-300
                  },
                },
                push: {
                  quantity: 4,
                },
              },
            },
            detectRetina: true,
            background: {
              color: 'transparent',
            },
        }}
      />
      )}
    </div>
  );
}
