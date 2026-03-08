import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { Shield, Eye, Lock, Users, CheckCircle2, BarChart3 } from "lucide-react";

export function EthicsPrivacy() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 border border-white/20 mb-6"
            >
              <Shield className="text-blue-400" size={40} />
            </motion.div>
            <h1 className="text-4xl font-light text-white mb-3">Ethics & Privacy</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Emotional awareness built on trust, transparency, and respect
            </p>
          </div>

          {/* Privacy Guarantees */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-white mb-6">Privacy Guarantees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-blue-500/20 mb-4">
                      <Eye className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-lg text-white mb-3">No Facial Recognition</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      We analyze emotional fields, not individual faces. Your identity remains completely anonymous.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-teal-400">
                      <CheckCircle2 size={16} />
                      <span>Guaranteed</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-teal-500/20 mb-4">
                      <Users className="text-teal-400" size={32} />
                    </div>
                    <h3 className="text-lg text-white mb-3">No Identity Tracking</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      We don't store personal data or track individuals across locations. Only aggregate patterns.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-teal-400">
                      <CheckCircle2 size={16} />
                      <span>Guaranteed</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-purple-500/20 mb-4">
                      <Lock className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-lg text-white mb-3">Only Emotional Fields</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      We measure atmospheric signals like tone, rhythm, and proximity—not what you say or do.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-teal-400">
                      <CheckCircle2 size={16} />
                      <span>Guaranteed</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* Consent System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-light text-white mb-6">Consent System</h2>
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg text-white mb-4">Opt-In Required</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    All spaces must explicitly enable Resonance sensing. No passive or background monitoring without clear consent.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Clear signage at all sensing locations",
                      "Digital consent for workplace environments",
                      "Ability to opt-out at any time",
                      "Transparent data usage policies",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-4">Data Retention</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    Emotional field data is processed in real-time and discarded immediately. We retain only anonymized aggregate trends.
                  </p>
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-light text-white mb-1">0 days</div>
                        <div className="text-xs text-white/50">Individual data retention</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-white mb-1">30 days</div>
                        <div className="text-xs text-white/50">Aggregate trends only</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bias Monitoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-light text-white mb-6">Bias Monitoring Dashboard</h2>
            <GlassCard className="p-8">
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                We continuously monitor our algorithms for potential bias across demographics, cultures, and contexts. Our commitment is to fair and equitable emotional intelligence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Gender Parity", score: 98.2, status: "excellent" },
                  { label: "Cultural Fairness", score: 96.8, status: "excellent" },
                  { label: "Age Inclusivity", score: 94.5, status: "good" },
                  { label: "Accessibility", score: 97.1, status: "excellent" },
                ].map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <motion.circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke={metric.status === "excellent" ? "#14b8a6" : "#60a5fa"}
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                          animate={{
                            strokeDashoffset: 2 * Math.PI * 40 * (1 - metric.score / 100),
                          }}
                          transition={{ duration: 1, delay: 0.8 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-xl font-light text-white">{metric.score}%</div>
                      </div>
                    </div>
                    <div className="text-sm text-white/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Transparency Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <GlassCard className="p-8 bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-500/20 flex-shrink-0">
                  <BarChart3 className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-3">Our Transparency Commitment</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    Resonance operates on principles of radical transparency. Every month, we publish detailed reports on:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Algorithm performance and accuracy",
                      "Bias detection and mitigation efforts",
                      "Third-party privacy audits",
                      "User consent and opt-out rates",
                      "Data usage and retention practices",
                      "Ethical review board decisions",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-white/70">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-white/50 italic">
                      "Technology that reads emotions must be held to the highest ethical standards. We believe trust is earned through transparency, not promises."
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
