import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { School, Building2, Globe, Wifi, Waves, Sparkles, Users } from "lucide-react";

export function FutureVision() {
  const ecosystemNodes = [
    { id: 1, x: 25, y: 30, type: "school", label: "Schools", icon: School, count: "1.2K", color: "blue" },
    { id: 2, x: 65, y: 25, type: "workplace", label: "Workplaces", icon: Building2, count: "3.5K", color: "teal" },
    { id: 3, x: 45, y: 60, type: "public", label: "Public Spaces", icon: Globe, count: "850", color: "purple" },
  ];

  const getNodeColor = (color: string) => {
    switch (color) {
      case "blue":
        return { bg: "rgba(96, 165, 250, 0.3)", border: "rgba(96, 165, 250, 0.6)", text: "text-blue-400" };
      case "teal":
        return { bg: "rgba(45, 212, 191, 0.3)", border: "rgba(45, 212, 191, 0.6)", text: "text-teal-400" };
      case "purple":
        return { bg: "rgba(168, 85, 247, 0.3)", border: "rgba(168, 85, 247, 0.6)", text: "text-purple-400" };
      default:
        return { bg: "rgba(156, 163, 175, 0.3)", border: "rgba(156, 163, 175, 0.6)", text: "text-gray-400" };
    }
  };

  return (
    <div className="min-h-screen py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 mb-8"
            >
              <Sparkles className="text-blue-400" size={48} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-extralight text-white mb-6"
            >
              Future Vision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4"
            >
              Emotional awareness at planetary scale
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/60 max-w-3xl mx-auto"
            >
              Imagine a world where spaces understand and respond to collective emotional needs—creating environments that nurture well-being, foster connection, and prevent conflict before it emerges.
            </motion.p>
          </div>

          {/* Global Network Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-2xl font-light text-white mb-8 text-center">
                Resonance Global Network
              </h2>
              <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-950 to-blue-950/50">
                {/* Network Grid */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-10 grid-rows-10 h-full">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div key={i} className="border border-white/20" />
                    ))}
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(96, 165, 250, 0.6)" />
                      <stop offset="100%" stopColor="rgba(45, 212, 191, 0.6)" />
                    </linearGradient>
                    <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(45, 212, 191, 0.6)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 0.6)" />
                    </linearGradient>
                    <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                      <stop offset="100%" stopColor="rgba(96, 165, 250, 0.6)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Connecting lines between nodes */}
                  <motion.line
                    x1="25%" y1="30%" x2="65%" y2="25%"
                    stroke="url(#line1)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.line
                    x1="65%" y1="25%" x2="45%" y2="60%"
                    stroke="url(#line2)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, delay: 1.2 }}
                  />
                  <motion.line
                    x1="45%" y1="60%" x2="25%" y2="30%"
                    stroke="url(#line3)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, delay: 1.4 }}
                  />
                </svg>

                {/* Ecosystem Nodes */}
                {ecosystemNodes.map((node, index) => {
                  const colors = getNodeColor(node.color);
                  const Icon = node.icon;
                  
                  return (
                    <motion.div
                      key={node.id}
                      className="absolute"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    >
                      {/* Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{
                          width: "200px",
                          height: "200px",
                          background: `radial-gradient(circle, ${colors.bg} 0%, transparent 70%)`,
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      />

                      {/* Node Circle */}
                      <div
                        className="relative w-32 h-32 rounded-full flex items-center justify-center backdrop-blur-xl border-2"
                        style={{
                          backgroundColor: colors.bg,
                          borderColor: colors.border,
                        }}
                      >
                        <div className="text-center">
                          <Icon className={`${colors.text} mx-auto mb-2`} size={32} />
                          <div className={`text-lg ${colors.text} mb-1`}>{node.count}</div>
                          <div className="text-xs text-white/70">{node.label}</div>
                        </div>
                      </div>

                      {/* Data Packets */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white"
                        animate={{
                          x: [0, 50, 0],
                          y: [0, -30, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 1.2,
                        }}
                      />
                    </motion.div>
                  );
                })}

                {/* Center Hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      width: "150px",
                      height: "150px",
                      background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/40 to-teal-500/40 border-2 border-white/30 backdrop-blur-xl flex items-center justify-center">
                    <Wifi className="text-white" size={32} />
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Network Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Connected Spaces", value: "5,550", icon: Globe, color: "blue" },
              { label: "Daily Users", value: "2.4M", icon: Users, color: "teal" },
              { label: "Emotional Insights", value: "18.6M", icon: Waves, color: "purple" },
              { label: "Active Networks", value: "142", icon: Wifi, color: "indigo" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center" hover>
                    <Icon className={`text-${stat.color}-400 mx-auto mb-3`} size={32} />
                    <div className="text-3xl font-light text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Vision Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-2xl font-light text-white mb-8 text-center">
                Building the Future Together
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Preventive Well-being",
                    description: "Detect and address emotional distress before it escalates. Create spaces that actively support mental health and emotional balance.",
                    icon: School,
                  },
                  {
                    title: "Collective Intelligence",
                    description: "Aggregate anonymous emotional patterns to understand society's emotional climate and respond with compassionate policy and design.",
                    icon: Building2,
                  },
                  {
                    title: "Empathetic Cities",
                    description: "Urban environments that adapt to the emotional needs of communities, creating calmer, more connected public spaces for everyone.",
                    icon: Globe,
                  },
                ].map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <div key={index}>
                      <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 border border-white/20 w-14 h-14 flex items-center justify-center mb-4">
                        <Icon className="text-blue-400" size={24} />
                      </div>
                      <h3 className="text-lg text-white mb-3">{principle.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{principle.description}</p>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Closing Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-16 text-center"
          >
            <GlassCard className="p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
              <Waves className="text-blue-400 mx-auto mb-6" size={48} />
              <p className="text-xl md:text-2xl font-light text-white/90 mb-6 leading-relaxed max-w-4xl mx-auto">
                "A world where technology doesn't just connect us—it helps us understand each other. Where buildings breathe with their occupants. Where cities feel their communities. Where emotional intelligence becomes infrastructure."
              </p>
              <p className="text-lg text-white/50 italic">
                The future is empathetic. The future is Resonance.
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
