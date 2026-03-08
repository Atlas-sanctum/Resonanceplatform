import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { useState } from "react";
import { Watch, Bell, Vibrate, AlertTriangle, CheckCircle2 } from "lucide-react";

export function HapticControl() {
  const [alertSensitivity, setAlertSensitivity] = useState(65);
  const [vibrationIntensity, setVibrationIntensity] = useState(50);
  const [escalationThreshold, setEscalationThreshold] = useState(75);
  const [currentStatus, setCurrentStatus] = useState<"stabilizing" | "rising" | "calm">("stabilizing");

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-light text-white mb-3">Haptic Feedback Control</h1>
            <p className="text-white/60">Wearable wristband configuration and status</p>
          </div>

          {/* Wristband Visualization */}
          <GlassCard className="p-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                {/* Wristband */}
                <motion.div
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-8 border-white/20 flex items-center justify-center shadow-2xl"
                  animate={{
                    boxShadow: currentStatus === "rising" 
                      ? ["0 0 20px rgba(251, 146, 60, 0.3)", "0 0 40px rgba(251, 146, 60, 0.6)", "0 0 20px rgba(251, 146, 60, 0.3)"]
                      : currentStatus === "stabilizing"
                      ? ["0 0 20px rgba(45, 212, 191, 0.3)", "0 0 40px rgba(45, 212, 191, 0.6)", "0 0 20px rgba(45, 212, 191, 0.3)"]
                      : ["0 0 20px rgba(96, 165, 250, 0.3)", "0 0 30px rgba(96, 165, 250, 0.5)", "0 0 20px rgba(96, 165, 250, 0.3)"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Watch className="text-white/80" size={80} />
                </motion.div>

                {/* Status Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4"
                  style={{
                    borderColor: currentStatus === "rising" 
                      ? "rgba(251, 146, 60, 0.5)"
                      : currentStatus === "stabilizing"
                      ? "rgba(45, 212, 191, 0.5)"
                      : "rgba(96, 165, 250, 0.5)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Real-time Status */}
              <div className="text-center">
                <motion.div
                  key={currentStatus}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-2"
                >
                  {currentStatus === "rising" && (
                    <>
                      <AlertTriangle className="text-orange-400" size={20} />
                      <span className="text-orange-400">Tension Rising</span>
                    </>
                  )}
                  {currentStatus === "stabilizing" && (
                    <>
                      <CheckCircle2 className="text-teal-400" size={20} />
                      <span className="text-teal-400">Atmosphere Stabilizing</span>
                    </>
                  )}
                  {currentStatus === "calm" && (
                    <>
                      <CheckCircle2 className="text-blue-400" size={20} />
                      <span className="text-blue-400">Environment Calm</span>
                    </>
                  )}
                </motion.div>
                <p className="text-sm text-white/50">Real-time emotional feedback</p>
              </div>
            </div>
          </GlassCard>

          {/* Control Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="text-white/60" size={20} />
                <h3 className="text-white">Alert Sensitivity</h3>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={alertSensitivity}
                onChange={(e) => setAlertSensitivity(Number(e.target.value))}
                className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer mb-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between text-xs text-white/50">
                <span>Low</span>
                <span className="text-white/80">{alertSensitivity}%</span>
                <span>High</span>
              </div>
              <p className="text-xs text-white/40 mt-4">
                Controls how quickly the device alerts you to emotional changes
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Vibrate className="text-white/60" size={20} />
                <h3 className="text-white">Vibration Intensity</h3>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={vibrationIntensity}
                onChange={(e) => setVibrationIntensity(Number(e.target.value))}
                className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer mb-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between text-xs text-white/50">
                <span>Gentle</span>
                <span className="text-white/80">{vibrationIntensity}%</span>
                <span>Strong</span>
              </div>
              <p className="text-xs text-white/40 mt-4">
                Adjust the strength of haptic feedback patterns
              </p>
            </GlassCard>
          </div>

          {/* Escalation Threshold */}
          <GlassCard className="p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-white/60" size={20} />
              <h3 className="text-white">Emotional Escalation Threshold</h3>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={escalationThreshold}
              onChange={(e) => setEscalationThreshold(Number(e.target.value))}
              className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer mb-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            />
            <div className="flex justify-between text-xs text-white/50">
              <span>Sensitive</span>
              <span className="text-white/80">{escalationThreshold}%</span>
              <span>Tolerant</span>
            </div>
            <p className="text-xs text-white/40 mt-4">
              Set the threshold for triggering escalation alerts when tension rises rapidly
            </p>
          </GlassCard>

          {/* Test Controls */}
          <GlassCard className="p-6">
            <h3 className="text-white mb-4">Test Feedback Patterns</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => setCurrentStatus("calm")}
                className="px-4 py-3 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 transition-all"
              >
                Calm Pattern
              </button>
              <button
                onClick={() => setCurrentStatus("stabilizing")}
                className="px-4 py-3 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-400 hover:bg-teal-500/30 transition-all"
              >
                Stabilizing Pattern
              </button>
              <button
                onClick={() => setCurrentStatus("rising")}
                className="px-4 py-3 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 transition-all"
              >
                Rising Pattern
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
