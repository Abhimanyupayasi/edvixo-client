"use client";

import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  Code2,
  CreditCard,
  Eye,
  Globe2,
  Heart,
  Layers,
  LayoutDashboard,
  MessageCircle,
  Monitor,
  Package,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

type ServiceHeroVisualProps = {
  service: {
    slug: string;
    title: string;
    heroTitle: string;
    heroDescription: string;
    serviceLabel: string;
    trustChips: string[];
  };
};

export default function ServiceHeroVisual({
  service,
}: ServiceHeroVisualProps) {
  const isWeb = service.slug === "web-development";
  const isApp = service.slug === "app-development";
  const isEcom = service.slug === "ecom-development";
  const isDesign = service.slug === "design";
  const isMisc = service.slug === "miscellaneous";

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#081d2d]">

          {/* =====================================================
              BACKGROUND GLOW
          ===================================================== */}

          <motion.div
            className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#ff8b2c]/10 blur-[120px]"
            animate={{
              x: [0, 35, 0],
              y: [0, 20, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]"
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

          <div className="relative grid items-center gap-12 p-6 md:p-10 lg:grid-cols-2 lg:p-14">

            {/* ===================================================
                LEFT CONTENT
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
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

                {service.serviceLabel}
              </motion.p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                {service.heroTitle}
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                {service.heroDescription}
              </p>

              {/* =================================================
                  SERVICE FEATURE CHIPS
              ================================================= */}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {service.trustChips.slice(0, 3).map((chip, index) => {
                  const icons = [
                    Globe2,
                    Zap,
                    Code2,
                  ];

                  const Icon = icons[index] || Sparkles;

                  return (
                    <motion.div
                      key={chip}
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
                        {chip}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ===================================================
                RIGHT SIDE
            =================================================== */}

            <motion.div
              className="relative min-h-[480px]"
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

              {/* =================================================
                  WEB DEVELOPMENT
              ================================================= */}

              {isWeb && <WebVisual />}

              {/* =================================================
                  APP DEVELOPMENT
              ================================================= */}

              {isApp && <AppVisual />}

              {/* =================================================
                  ECOMMERCE
              ================================================= */}

              {isEcom && <EcommerceVisual />}

              {/* =================================================
                  DESIGN
              ================================================= */}

              {isDesign && <DesignVisual />}

              {/* =================================================
                  MISCELLANEOUS
              ================================================= */}

              {isMisc && <MiscellaneousVisual />}

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   WEB DEVELOPMENT VISUAL
=============================================================== */

function WebVisual() {
  return (
    <div className="relative h-full min-h-[460px]">

      {/* Browser */}

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
      >

        {/* Browser top */}

        <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

          <div className="ml-3 h-2 flex-1 rounded-full bg-white/10" />
        </div>

        {/* Website */}

        <div className="p-7">

          <div className="flex items-center justify-between">

            <div className="h-5 w-24 rounded bg-[#ff8b2c]" />

            <div className="flex gap-2">
              <div className="h-2 w-10 rounded bg-white/20" />
              <div className="h-2 w-10 rounded bg-white/20" />
              <div className="h-2 w-10 rounded bg-white/20" />
            </div>

          </div>

          <div className="mt-14">

            <motion.div
              className="h-8 w-4/5 rounded-lg bg-white/80"
              animate={{
                width: ["75%", "85%", "75%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <div className="mt-4 h-3 w-3/5 rounded bg-white/20" />

            <div className="mt-7 flex gap-3">
              <div className="h-10 w-28 rounded-full bg-[#ff8b2c]" />
              <div className="h-10 w-24 rounded-full border border-white/20" />
            </div>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-3">

            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="h-20 rounded-xl border border-white/10 bg-white/[0.035]"
                whileHover={{
                  y: -5,
                }}
              />
            ))}

          </div>

        </div>

      </motion.div>

      {/* Development card */}

      <FloatingCard
        icon={<Code2 className="h-5 w-5 text-[#ff8b2c]" />}
        label="DEVELOPMENT"
        title="Clean & Scalable"
        className="left-0 top-12"
      />

      {/* Performance */}

      <FloatingCard
        icon={<Zap className="h-5 w-5 text-green-400" />}
        label="PERFORMANCE"
        title="Fast Experience"
        className="bottom-8 right-0"
      />

    </div>
  );
}

/* ===============================================================
   APP DEVELOPMENT VISUAL
=============================================================== */

function AppVisual() {
  return (
    <div className="relative flex min-h-[480px] items-center justify-center">

      {/* Glow */}

      <div className="absolute h-80 w-80 rounded-full bg-[#ff8b2c]/10 blur-[90px]" />

      {/* Phone */}

      <motion.div
        className="relative z-10 w-[245px] overflow-hidden rounded-[2.6rem] border-[6px] border-[#1b3448] bg-[#061827] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.03,
          rotate: 0,
        }}
      >

        {/* Phone speaker */}

        <div className="flex justify-center pt-2">
          <div className="h-1.5 w-20 rounded-full bg-white/10" />
        </div>

        {/* App header */}

        <div className="flex items-center justify-between px-5 pb-4 pt-5">

          <div>
            <p className="text-[9px] text-slate-500">
              GOOD MORNING
            </p>

            <p className="mt-1 text-sm font-bold">
              Welcome back
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff8b2c]/10">
            <User className="h-4 w-4 text-[#ff8b2c]" />
          </div>

        </div>

        {/* Search */}

        <div className="px-5">

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">

            <Search className="h-3.5 w-3.5 text-slate-500" />

            <span className="text-[9px] text-slate-500">
              Search services...
            </span>

          </div>

        </div>

        {/* Main app card */}

        <motion.div
          className="mx-5 mt-5 rounded-2xl bg-[#ff8b2c] p-4"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >

          <div className="flex justify-between">

            <div>
              <p className="text-[9px] text-white/70">
                FEATURED
              </p>

              <p className="mt-2 text-sm font-black text-white">
                Book a Service
              </p>
            </div>

            <Smartphone className="h-6 w-6 text-white/80" />

          </div>

          <div className="mt-4 rounded-full bg-white px-4 py-2 text-center text-[9px] font-bold text-[#071827]">
            Get Started
          </div>

        </motion.div>

        {/* Activity */}

        <div className="px-5 pt-5">

          <div className="flex items-center justify-between">

            <p className="text-xs font-bold">
              Recent Activity
            </p>

            <MoreHorizontalIcon />

          </div>

          <div className="mt-3 space-y-2">

            {[
              ["Appointment confirmed", "2 min ago"],
              ["New message", "12 min ago"],
              ["Profile updated", "1 hr ago"],
            ].map(([title, time], index) => (

              <motion.div
                key={title}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3"
                animate={{
                  x: [0, index % 2 === 0 ? 3 : -3, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ff8b2c]/10">
                  <Check className="h-3.5 w-3.5 text-[#ff8b2c]" />
                </div>

                <div>
                  <p className="text-[9px] font-semibold">
                    {title}
                  </p>

                  <p className="text-[8px] text-slate-500">
                    {time}
                  </p>
                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Bottom navigation */}

        <div className="mt-5 flex justify-around border-t border-white/10 px-3 py-4">

          <span className="text-[#ff8b2c]">●</span>
          <span className="text-slate-600">●</span>
          <span className="text-slate-600">●</span>
          <span className="text-slate-600">●</span>

        </div>

      </motion.div>

      {/* Notification */}

      <FloatingCard
        icon={<Bell className="h-5 w-5 text-[#ff8b2c]" />}
        label="NOTIFICATION"
        title="Booking Confirmed"
        className="right-0 top-10"
      />

      {/* Connected */}

      <FloatingCard
        icon={<Zap className="h-5 w-5 text-green-400" />}
        label="APP EXPERIENCE"
        title="Fast & Connected"
        className="bottom-8 left-0"
      />

    </div>
  );
}

/* ===============================================================
   ECOMMERCE VISUAL
=============================================================== */

function EcommerceVisual() {
  const products = [
    {
      name: "Premium Product",
      price: "$129",
    },
    {
      name: "Smart Collection",
      price: "$89",
    },
    {
      name: "New Arrival",
      price: "$149",
    },
  ];

  return (
    <div className="relative min-h-[480px]">

      {/* Glow */}

      <motion.div
        className="absolute right-10 top-10 h-80 w-80 rounded-full bg-[#ff8b2c]/10 blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      {/* Store */}

      <motion.div
        className="absolute inset-5 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#061827] shadow-2xl"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >

        {/* Store header */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <div className="flex items-center gap-2">

            <Store className="h-5 w-5 text-[#ff8b2c]" />

            <span className="font-bold">
              STORE
            </span>

          </div>

          <div className="flex items-center gap-4">

            <Search className="h-4 w-4 text-slate-500" />

            <div className="relative">

              <ShoppingCart className="h-5 w-5" />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff8b2c] text-[8px] font-bold">
                3
              </span>

            </div>

          </div>

        </div>

        {/* Store heading */}

        <div className="px-6 pt-7">

          <p className="text-[9px] font-bold uppercase tracking-widest text-[#ff8b2c]">
            FEATURED COLLECTION
          </p>

          <h3 className="mt-2 text-2xl font-black">
            Discover something new.
          </h3>

        </div>

        {/* Products */}

        <div className="grid grid-cols-3 gap-3 px-6 pt-6">

          {products.map((product, index) => (

            <motion.div
              key={product.name}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-3"
              animate={{
                y: [0, index % 2 === 0 ? -5 : 5, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
            >

              <div className="flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff8b2c]/30 to-white/5">

                <Package className="h-9 w-9 text-[#ff8b2c]" />

              </div>

              <p className="mt-3 truncate text-[10px] font-semibold">
                {product.name}
              </p>

              <div className="mt-2 flex items-center justify-between">

                <span className="text-xs font-bold">
                  {product.price}
                </span>

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff8b2c]">
                  <ArrowUpRight className="h-3 w-3" />
                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Checkout bar */}

        <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b2235] p-4">

          <div>

            <p className="text-[9px] text-slate-500">
              CART TOTAL
            </p>

            <p className="mt-1 font-bold">
              $367
            </p>

          </div>

          <motion.div
            className="rounded-full bg-[#ff8b2c] px-5 py-2 text-[9px] font-bold"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            Checkout
          </motion.div>

        </div>

      </motion.div>

      {/* Payment card */}

      <FloatingCard
        icon={<CreditCard className="h-5 w-5 text-[#ff8b2c]" />}
        label="PAYMENT"
        title="Secure Checkout"
        className="right-0 top-10"
      />

      {/* Order card */}

      <FloatingCard
        icon={<ShoppingCart className="h-5 w-5 text-green-400" />}
        label="ORDER"
        title="Order Confirmed"
        className="bottom-8 left-0"
      />

    </div>
  );
}

/* ===============================================================
   DESIGN VISUAL
=============================================================== */

function DesignVisual() {
  return (
    <div className="relative min-h-[480px]">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Main design workspace */}

      <motion.div
        className="absolute inset-5 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#061827] shadow-2xl"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >

        {/* Toolbar */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

          <div className="flex items-center gap-2">

            <Palette className="h-5 w-5 text-[#ff8b2c]" />

            <span className="text-sm font-bold">
              Design Studio
            </span>

          </div>

          <div className="flex gap-2">

            <div className="h-6 w-6 rounded-lg bg-white/10" />
            <div className="h-6 w-6 rounded-lg bg-[#ff8b2c]" />

          </div>

        </div>

        {/* Workspace */}

        <div className="grid grid-cols-[80px_1fr]">

          {/* Tools */}

          <div className="space-y-4 border-r border-white/10 p-4">

            <LayoutDashboard className="h-4 w-4 text-[#ff8b2c]" />
            <Layers className="h-4 w-4 text-slate-500" />
            <Monitor className="h-4 w-4 text-slate-500" />
            <Eye className="h-4 w-4 text-slate-500" />

          </div>

          {/* Canvas */}

          <div className="p-5">

            <div className="rounded-2xl bg-[#0b2235] p-5">

              <div className="flex justify-between">

                <div>

                  <div className="h-3 w-16 rounded bg-[#ff8b2c]" />

                  <motion.div
                    className="mt-4 h-7 rounded bg-white/80"
                    animate={{
                      width: ["65%", "75%", "65%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />

                  <div className="mt-3 h-2 w-3/5 rounded bg-white/20" />

                </div>

                <div className="h-14 w-14 rounded-2xl bg-[#ff8b2c]/20" />

              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">

                <div className="h-20 rounded-xl bg-white/[0.04]" />
                <div className="h-20 rounded-xl bg-[#ff8b2c]/10" />

              </div>

            </div>

            {/* Color palette */}

            <div className="mt-4 flex gap-2">

              <div className="h-8 w-8 rounded-full bg-[#ff8b2c]" />
              <div className="h-8 w-8 rounded-full bg-white/80" />
              <div className="h-8 w-8 rounded-full bg-slate-600" />
              <div className="h-8 w-8 rounded-full bg-purple-400" />

            </div>

          </div>

        </div>

      </motion.div>

      {/* UI card */}

      <FloatingCard
        icon={<Palette className="h-5 w-5 text-[#ff8b2c]" />}
        label="UI / UX"
        title="Designed With Purpose"
        className="right-0 top-10"
      />

      {/* Prototype card */}

      <FloatingCard
        icon={<Eye className="h-5 w-5 text-purple-400" />}
        label="PROTOTYPE"
        title="Interactive Experience"
        className="bottom-8 left-0"
      />

    </div>
  );
}

/* ===============================================================
   MISCELLANEOUS VISUAL
=============================================================== */

function MiscellaneousVisual() {
  return (
    <div className="relative min-h-[480px]">

      {/* Glow */}

      <motion.div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ff8b2c]/10 blur-[100px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      />

      {/* Dashboard */}

      <motion.div
        className="absolute inset-5 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#061827] shadow-2xl"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <div className="flex items-center gap-3">

            <LayoutDashboard className="h-5 w-5 text-[#ff8b2c]" />

            <div>

              <p className="text-[9px] text-slate-500">
                BUSINESS CONTROL
              </p>

              <p className="text-sm font-bold">
                Dashboard
              </p>

            </div>

          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff8b2c]/10">
            <User className="h-4 w-4 text-[#ff8b2c]" />
          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-3 p-5">

          {[
            ["24/7", "Availability"],
            ["128", "Bookings"],
            ["94%", "Growth"],
          ].map(([value, label], index) => (

            <motion.div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              whileHover={{
                y: -5,
              }}
            >

              <p className="text-lg font-black text-[#ff8b2c]">
                {value}
              </p>

              <p className="mt-1 text-[8px] text-slate-500">
                {label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Chart */}

        <div className="mx-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[9px] text-slate-500">
                BUSINESS ACTIVITY
              </p>

              <p className="mt-1 text-sm font-bold">
                Performance
              </p>

            </div>

            <TrendingUp className="h-5 w-5 text-green-400" />

          </div>

          <div className="mt-6 flex h-24 items-end gap-2">

            {[35, 55, 42, 72, 58, 80, 68, 92].map(
              (height, index) => (

                <motion.div
                  key={index}
                  className="flex-1 rounded-t-lg bg-[#ff8b2c]/70"
                  initial={{
                    height: 0,
                  }}
                  whileInView={{
                    height: `${height}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                />

              )
            )}

          </div>

        </div>

        {/* Bottom tools */}

        <div className="grid grid-cols-3 gap-3 p-5">

          <div className="flex items-center gap-2 rounded-xl border border-white/10 p-3">

            <Users className="h-4 w-4 text-[#ff8b2c]" />

            <span className="text-[9px]">
              Customers
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 p-3">

            <MessageCircle className="h-4 w-4 text-green-400" />

            <span className="text-[9px]">
              WhatsApp
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 p-3">

            <BarChart3 className="h-4 w-4 text-purple-400" />

            <span className="text-[9px]">
              Analytics
            </span>

          </div>

        </div>

      </motion.div>

      {/* Booking */}

      <FloatingCard
        icon={<Check className="h-5 w-5 text-green-400" />}
        label="BOOKING"
        title="Appointment Confirmed"
        className="right-0 top-10"
      />

      {/* Business */}

      <FloatingCard
        icon={<TrendingUp className="h-5 w-5 text-[#ff8b2c]" />}
        label="BUSINESS"
        title="Everything Connected"
        className="bottom-8 left-0"
      />

    </div>
  );
}

/* ===============================================================
   REUSABLE FLOATING CARD
=============================================================== */

function FloatingCard({
  icon,
  label,
  title,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  className: string;
}) {
  return (
    <motion.div
      className={`absolute z-20 rounded-2xl border border-white/10 bg-[#0b2235]/95 p-4 shadow-2xl backdrop-blur-xl ${className}`}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0],
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

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">
          {icon}
        </div>

        <div>

          <p className="text-[9px] text-slate-500">
            {label}
          </p>

          <p className="text-xs font-bold">
            {title}
          </p>

        </div>

        <ArrowUpRight className="ml-1 h-4 w-4 text-slate-500" />

      </div>

    </motion.div>
  );
}

/* ===============================================================
   SMALL ICON
=============================================================== */

function MoreHorizontalIcon() {
  return (
    <div className="flex gap-1">

      <span className="h-1 w-1 rounded-full bg-slate-500" />
      <span className="h-1 w-1 rounded-full bg-slate-500" />
      <span className="h-1 w-1 rounded-full bg-slate-500" />

    </div>
  );
}