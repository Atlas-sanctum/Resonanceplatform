import { GlassCard } from "./GlassCard";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mic, Camera, Activity, Waves, Brain, Map, Eye, 
  Shield, TrendingUp, Cloud, Zap, Users, Radio,
  Heart, Wind, Volume2, Target, AlertCircle, CheckCircle,
  Smartphone, Database, Lock, Settings
} from "lucide-react";
import { useState } from "react";

export function SixthSense() {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);
  const [showSignals, setShowSignals] = useState(true);

  const components = [
    {
      id: 1,
      title: "Multimodal Sensing Layer",
      subtitle: "The Sensory Organs",
      description: "Collects environmental signals through microphones, cameras, proximity sensors, and optional wearables",
      icon: Radio,
      color: "blue",
      sensors: [
        { name: "Voice Tone", icon: Mic, status: "active", value: "85%" },
        { name: "Micro-expressions", icon: Camera, status: "active", value: "92%" },
        { name: "Body Posture", icon: Activity, status: "active", value: "78%" },
        { name: "Heart Rate", icon: Heart, status: "optional", value: "72 bpm" },
      ]
    },
    {
      id: 2,
      title: "Signal Processing Engine",
      subtitle: "From Chaos to Structure",
      description: "Transforms raw sensory data into structured behavioral indicators",
      icon: Waves,
      color: "teal",
      features: [
        "Voice frequency stress markers",
        "Speech tempo changes",
        "Micro facial muscle movements",
        "Breathing irregularity",
        "Movement synchronization"
      ]
    },
    {
      id: 3,
      title: "Emotional Interpretation Models",
      subtitle: "The AI Brain",
      description: "Machine learning models synthesize signals into probabilistic emotional fields",
      icon: Brain,
      color: "purple",
      metrics: [
        { name: "Stress Index", value: 3.2, max: 10, color: "amber" },
        { name: "Conversation Harmony", value: 7.8, max: 10, color: "teal" },
        { name: "Social Cohesion", value: 8.1, max: 10, color: "blue" },
        { name: "Engagement Level", value: 6.5, max: 10, color: "green" },
        { name: "Emotional Volatility", value: 2.8, max: 10, color: "orange" }
      ]
    },
    {
      id: 4,
      title: "Emotional Field Mapping",
      subtitle: "Spatial Emotional Weather",
      description: "Constructs spatial emotional maps protecting privacy while preserving insights",
      icon: Map,
      color: "indigo",
      zones: [
        { label: "Calm", color: "blue", coverage: "45%" },
        { label: "Focus", color: "green", coverage: "30%" },
        { label: "Tension", color: "amber", coverage: "20%" },
        { label: "Conflict", color: "red", coverage: "5%" }
      ]
    },
    {
      id: 5,
      title: "User Perception Interface",
      subtitle: "The Sixth Sense",
      description: "Converts complex analysis into intuitive peripheral awareness",
      icon: Eye,
      color: "cyan",
      channels: [
        { type: "Visual Overlays", icon: Eye, desc: "Color gradients in space" },
        { type: "Haptic Feedback", icon: Activity, desc: "Gentle pulses for tension" },
        { type: "Ambient Audio", icon: Volume2, desc: "Subtle harmonic shifts" }
      ]
    },
    {
      id: 6,
      title: "Behavioral Guidance System",
      subtitle: "Intelligent Nudges",
      description: "Provides contextual interventions for conflict prevention",
      icon: Target,
      color: "green",
      nudges: [
        { type: "info", message: "Conversation intensity rising. Slow speaking tempo." },
        { type: "warning", message: "Social disengagement detected. Consider direct engagement." },
        { type: "success", message: "Room tension stabilizing." }
      ]
    },
    {
      id: 7,
      title: "Privacy & Consent Architecture",
      subtitle: "Ethical Foundation",
      description: "No identity tracking, no facial recognition, no individual labeling",
      icon: Shield,
      color: "emerald",
      principles: [
        { icon: Lock, text: "No identity tracking" },
        { icon: Eye, text: "No facial recognition", crossed: true },
        { icon: Users, text: "No individual emotional labeling" },
        { icon: CheckCircle, text: "Atmosphere mapping only" }
      ]
    },
    {
      id: 8,
      title: "Emotional Trend Analytics",
      subtitle: "Pattern Discovery",
      description: "Collects patterns to help organizations redesign social environments",
      icon: TrendingUp,
      color: "violet",
      insights: [
        "Which classrooms show disengagement",
        "Which meeting formats generate tension",
        "How workplace climate evolves over time"
      ]
    },
    {
      id: 9,
      title: "Edge + Cloud Intelligence",
      subtitle: "Distributed Computing",
      description: "Balances real-time responsiveness with privacy-preserving cloud analytics",
      icon: Cloud,
      color: "sky",
      architecture: [
        { layer: "Edge Devices", icon: Smartphone, process: "Signal capture" },
        { layer: "Real-time Inference", icon: Zap, process: "Local processing" },
        { layer: "Secure Cloud", icon: Cloud, process: "Model training" },
        { layer: "Privacy Aggregation", icon: Database, process: "Anonymized patterns" }
      ]
    },
    {
      id: 10,
      title: "Emotional Environment API",
      subtitle: "Platform Ecosystem",
      description: "Exposes emotional data to enable adaptive learning, collaborative software, and smart architecture",
      icon: Settings,
      color: "fuchsia",
      applications: [
        "Adaptive learning platforms responding to classroom mood",
        "Collaborative software detecting meeting tension",
        "Architectural systems adjusting lighting and sound"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      blue: { bg: "bg-blue-500/20", border: "border-blue-500/40", text: "text-blue-400", glow: "shadow-blue-500/20" },
      teal: { bg: "bg-teal-500/20", border: "border-teal-500/40", text: "text-teal-400", glow: "shadow-teal-500/20" },
      purple: { bg: "bg-purple-500/20", border: "border-purple-500/40", text: "text-purple-400", glow: "shadow-purple-500/20" },
      indigo: { bg: "bg-indigo-500/20", border: "border-indigo-500/40", text: "text-indigo-400", glow: "shadow-indigo-500/20" },
      cyan: { bg: "bg-cyan-500/20", border: "border-cyan-500/40", text: "text-cyan-400", glow: "shadow-cyan-500/20" },
      green: { bg: "bg-green-500/20", border: "border-green-500/40", text: "text-green-400", glow: "shadow-green-500/20" },
      emerald: { bg: "bg-emerald-500/20", border: "border-emerald-500/40", text: "text-emerald-400", glow: "shadow-emerald-500/20" },
      violet: { bg: "bg-violet-500/20", border: "border-violet-500/40", text: "text-violet-400", glow: "shadow-violet-500/20" },
      sky: { bg: "bg-sky-500/20", border: "border-sky-500/40", text: "text-sky-400", glow: "shadow-sky-500/20" },
      fuchsia: { bg: "bg-fuchsia-500/20", border: "border-fuchsia-500/40", text: "text-fuchsia-400", glow: "shadow-fuchsia-500/20" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20 mb-8"
            >
              <Brain className="text-purple-400" size={48} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-extralight text-white mb-6"
            >
              The Sixth Sense System
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
            >
              10 Critical Components Working in Harmony
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/60 max-w-3xl mx-auto"
            >
              Like measuring temperature enabled meteorology and physics, measuring emotional atmospheres enables the design of empathetic environments.
            </motion.p>
          </div>

          {/* Signal Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light text-white">Signal Flow Architecture</h2>
                <button
                  onClick={() => setShowSignals(!showSignals)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-sm transition-colors"
                >
                  {showSignals ? "Hide Flow" : "Show Flow"}
                </button>
              </div>
              
              <div className="relative h-32 flex items-center justify-between">
                <AnimatePresence>
                  {showSignals && (
                    <>
                      {/* Flow arrows */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="rgba(96, 165, 250, 0.5)" />
                          </marker>
                        </defs>
                        <motion.line
                          x1="12%" y1="50%" x2="28%" y2="50%"
                          stroke="rgba(96, 165, 250, 0.5)"
                          strokeWidth="2"
                          markerEnd="url(#arrowhead)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.8 }}
                        />
                        <motion.line
                          x1="38%" y1="50%" x2="54%" y2="50%"
                          stroke="rgba(96, 165, 250, 0.5)"
                          strokeWidth="2"
                          markerEnd="url(#arrowhead)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                        <motion.line
                          x1="64%" y1="50%" x2="80%" y2="50%"
                          stroke="rgba(96, 165, 250, 0.5)"
                          strokeWidth="2"
                          markerEnd="url(#arrowhead)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1.2 }}
                        />
                      </svg>
                      
                      {/* Flow stages */}
                      {[
                        { icon: Radio, label: "Sense", delay: 0.7 },
                        { icon: Waves, label: "Process", delay: 0.9 },
                        { icon: Brain, label: "Interpret", delay: 1.1 },
                        { icon: Eye, label: "Present", delay: 1.3 }
                      ].map((stage, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.5, delay: stage.delay }}
                          className="relative z-10 flex flex-col items-center gap-2"
                        >
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/20 backdrop-blur-xl flex items-center justify-center">
                            <stage.icon className="text-blue-400" size={24} />
                          </div>
                          <span className="text-xs text-white/60">{stage.label}</span>
                        </motion.div>
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          </motion.div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {components.map((component, index) => {
              const Icon = component.icon;
              const colors = getColorClasses(component.color);
              const isActive = activeComponent === component.id;

              return (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <GlassCard 
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      isActive ? `${colors.border} border-2 shadow-lg ${colors.glow}` : ''
                    }`}
                    hover
                    onClick={() => setActiveComponent(isActive ? null : component.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                        <Icon className={colors.text} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg text-white">{component.title}</h3>
                          <span className={`text-xs ${colors.text} font-mono`}>
                            {component.id.toString().padStart(2, '0')}
                          </span>
                        </div>
                        <p className={`text-sm ${colors.text} mb-2`}>{component.subtitle}</p>
                        <p className="text-sm text-white/60">{component.description}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-white/10">
                            {/* Component-specific content */}
                            {component.sensors && (
                              <div className="space-y-3">
                                {component.sensors.map((sensor, i) => {
                                  const SensorIcon = sensor.icon;
                                  return (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                                      <div className="flex items-center gap-3">
                                        <SensorIcon className={colors.text} size={16} />
                                        <span className="text-sm text-white">{sensor.name}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-xs text-white/60">{sensor.value}</span>
                                        <div className={`w-2 h-2 rounded-full ${
                                          sensor.status === 'active' ? 'bg-green-400' : 'bg-amber-400'
                                        }`} />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {component.features && (
                              <ul className="space-y-2">
                                {component.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                    <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-1.5`} />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {component.metrics && (
                              <div className="space-y-3">
                                {component.metrics.map((metric, i) => (
                                  <div key={i}>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-sm text-white">{metric.name}</span>
                                      <span className="text-sm text-white/60">{metric.value}/{metric.max}</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(metric.value / metric.max) * 100}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className={`h-full bg-${metric.color}-400`}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {component.zones && (
                              <div className="grid grid-cols-2 gap-3">
                                {component.zones.map((zone, i) => (
                                  <div key={i} className="p-3 rounded-lg bg-white/5">
                                    <div className={`text-sm font-medium text-${zone.color}-400 mb-1`}>
                                      {zone.label}
                                    </div>
                                    <div className="text-xs text-white/60">{zone.coverage}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {component.channels && (
                              <div className="space-y-3">
                                {component.channels.map((channel, i) => {
                                  const ChannelIcon = channel.icon;
                                  return (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                                      <ChannelIcon className={colors.text} size={16} />
                                      <div>
                                        <div className="text-sm text-white mb-1">{channel.type}</div>
                                        <div className="text-xs text-white/60">{channel.desc}</div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {component.nudges && (
                              <div className="space-y-2">
                                {component.nudges.map((nudge, i) => (
                                  <div key={i} className={`flex items-start gap-2 p-3 rounded-lg border ${
                                    nudge.type === 'success' ? 'bg-green-500/10 border-green-500/30' :
                                    nudge.type === 'warning' ? 'bg-amber-500/10 border-amber-500/30' :
                                    'bg-blue-500/10 border-blue-500/30'
                                  }`}>
                                    {nudge.type === 'success' ? <CheckCircle size={16} className="text-green-400 mt-0.5" /> :
                                     nudge.type === 'warning' ? <AlertCircle size={16} className="text-amber-400 mt-0.5" /> :
                                     <AlertCircle size={16} className="text-blue-400 mt-0.5" />}
                                    <span className="text-sm text-white/80">{nudge.message}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {component.principles && (
                              <div className="grid grid-cols-2 gap-3">
                                {component.principles.map((principle, i) => {
                                  const PrincipleIcon = principle.icon;
                                  return (
                                    <div key={i} className={`flex items-center gap-2 p-3 rounded-lg bg-white/5 ${
                                      principle.crossed ? 'opacity-50' : ''
                                    }`}>
                                      <PrincipleIcon className={colors.text} size={16} />
                                      <span className={`text-xs text-white/80 ${
                                        principle.crossed ? 'line-through' : ''
                                      }`}>{principle.text}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {component.insights && (
                              <ul className="space-y-2">
                                {component.insights.map((insight, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                    <TrendingUp className={colors.text} size={14} className="mt-0.5" />
                                    {insight}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {component.architecture && (
                              <div className="space-y-3">
                                {component.architecture.map((layer, i) => {
                                  const LayerIcon = layer.icon;
                                  return (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                                      <div className="flex items-center gap-3">
                                        <LayerIcon className={colors.text} size={16} />
                                        <span className="text-sm text-white">{layer.layer}</span>
                                      </div>
                                      <span className="text-xs text-white/60">{layer.process}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {component.applications && (
                              <ul className="space-y-2">
                                {component.applications.map((app, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                    <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-1.5`} />
                                    {app}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16"
          >
            <GlassCard className="p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30">
              <div className="text-center">
                <Wind className="text-purple-400 mx-auto mb-4" size={40} />
                <p className="text-xl font-light text-white/90 mb-4 leading-relaxed">
                  "The magic happens when multiple weak signals combine into one strong inference."
                </p>
                <p className="text-sm text-white/60">
                  Like meteorology measures weather, Resonance measures emotional climate—enabling humanity to design for empathy, cooperation, and psychological safety.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
