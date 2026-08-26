"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Globe2,
  Zap,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ServiceHeroVisual() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#081d2d]">

          {/* =====================================================
              BACKGROUND GLOW
          ===================================================== */}

          <motion.div
            className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#ff8b2c]/10 blur-[100px]"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[100px]"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2 lg:p-14">

            {/* ===================================================
                LEFT CONTENT
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >

              <motion.p
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <Sparkles className="h-4 w-4" />
                BUILD FOR THE WEB
              </motion.p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Your website should do more than just look good.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                We create digital experiences that combine strong visual
                design, fast performance and thoughtful user journeys to help
                your business turn visitors into customers.
              </p>

              {/* Feature cards */}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">

                {[
                  {
                    icon: Globe2,
                    title: "Responsive",
                  },
                  {
                    icon: Zap,
                    title: "Fast",
                  },
                  {
                    icon: Code2,
                    title: "Scalable",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.25 + index * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors duration-300 hover:border-[#ff8b2c]/40"
                    >
                      <Icon className="h-5 w-5 text-[#ff8b2c]" />

                      <p className="mt-3 text-sm font-semibold">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}

              </div>
            </motion.div>

            {/* ===================================================
                RIGHT VISUAL
            =================================================== */}

            <motion.div
              className="relative min-h-[320px] md:min-h-[420px]"
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >

              {/* Main visual */}

              <motion.div
                className="absolute inset-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#061827] shadow-2xl"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: 0.5,
                }}
              >

                <Image
                  src="/images/services/web-development-solutions.webp"
                  alt="Web development solutions and responsive website design"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-65 transition duration-700 hover:scale-105 hover:opacity-80"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#061827] via-[#061827]/30 to-transparent" />

                {/* =================================================
                    BROWSER BAR
                ================================================= */}

                <div className="absolute left-5 right-5 top-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <div className="ml-3 h-2 flex-1 rounded-full bg-white/10" />

                </div>

                {/* =================================================
                    WEBSITE MOCK CONTENT
                ================================================= */}

                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  <div className="h-3 w-24 rounded-full bg-[#ff8b2c]/80" />

                  <div className="mt-4 h-8 w-3/4 rounded-lg bg-white/80" />

                  <div className="mt-3 h-3 w-1/2 rounded-full bg-white/20" />

                  <div className="mt-6 flex gap-3">

                    <div className="h-9 w-28 rounded-full bg-[#ff8b2c]" />

                    <div className="h-9 w-24 rounded-full border border-white/20 bg-white/5" />

                  </div>

                </motion.div>

              </motion.div>

              {/* =================================================
                  FLOATING CARD 1
              ================================================= */}

              <motion.div
                className="absolute -left-2 top-12 z-10 rounded-2xl border border-white/10 bg-[#0b2235]/90 p-4 shadow-2xl backdrop-blur-xl md:left-0"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff8b2c]/10">
                    <Code2 className="h-5 w-5 text-[#ff8b2c]" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Development
                    </p>

                    <p className="text-sm font-bold">
                      Clean & Scalable
                    </p>
                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  FLOATING CARD 2
              ================================================= */}

              <motion.div
                className="absolute -bottom-2 right-0 z-10 rounded-2xl border border-white/10 bg-[#0b2235]/90 p-4 shadow-2xl backdrop-blur-xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10">

                    <Zap className="h-5 w-5 text-green-400" />

                  </div>

                  <div>

                    <p className="text-xs text-slate-500">
                      Performance
                    </p>

                    <p className="text-sm font-bold">
                      Fast Experience
                    </p>

                  </div>

                  <ArrowUpRight className="ml-2 h-4 w-4 text-slate-500" />

                </div>

              </motion.div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}