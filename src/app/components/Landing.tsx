import { Link } from "react-router";
import { GlassCard } from "./GlassCard";
import { Activity, Users, TrendingUp, Play } from "lucide-react";
import { motion } from "motion/react";

export function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl font-extralight text-white mb-6 tracking-tight">
            Resonance
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 font-light mb-12">
            See what the room feels.
          </p>

          <Link
            to="/atmosphere-map"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-white/20 text-white backdrop-blur-xl hover:from-blue-500/30 hover:to-teal-500/30 transition-all duration-300"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            Start Environment Scan
          </Link>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-500/20">
                  <Activity className="text-blue-400" size={24} />
                </div>
                <div className="text-right">
                  <div className="text-4xl font-light text-white mb-1">7.2</div>
                  <div className="text-xs text-white/50">out of 10</div>
                </div>
              </div>
              <h3 className="text-lg text-white/90 mb-2">Emotional Atmosphere Index</h3>
              <p className="text-sm text-white/50">Real-time emotional climate assessment</p>
              <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GlassCard className="p-8" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-teal-500/20">
                  <Users className="text-teal-400" size={24} />
                </div>
                <div className="text-right">
                  <div className="text-4xl font-light text-white mb-1">8.4</div>
                  <div className="text-xs text-white/50">out of 10</div>
                </div>
              </div>
              <h3 className="text-lg text-white/90 mb-2">Conversation Harmony Score</h3>
              <p className="text-sm text-white/50">Group interaction quality metric</p>
              <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "84%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard className="p-8" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <TrendingUp className="text-amber-400" size={24} />
                </div>
                <div className="text-right">
                  <div className="text-4xl font-light text-white mb-1">3.1</div>
                  <div className="text-xs text-white/50">out of 10</div>
                </div>
              </div>
              <h3 className="text-lg text-white/90 mb-2">Stress Level Indicator</h3>
              <p className="text-sm text-white/50">Ambient tension monitoring</p>
              <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "31%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Emotional Heatmap Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-light text-white mb-8">Live Environment Overview</h2>
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/30">
              {/* People Silhouettes with Emotional Halos */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(96, 165, 250, 0) 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-12 bg-blue-400/60 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(45, 212, 191, 0.4) 0%, rgba(45, 212, 191, 0) 70%)",
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-12 bg-teal-400/60 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(96, 165, 250, 0) 70%)",
                }}
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.6, 0.85, 0.6],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-12 bg-blue-400/60 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0) 70%)",
                }}
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.6, 0.75, 0.6],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-12 bg-amber-400/60 rounded-full" />
                </div>
              </motion.div>

              {/* Ambient Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
