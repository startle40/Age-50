import { motion } from 'motion/react';
import { TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function TheProblem() {
  return (
    <section className="py-24 bg-brand-bg border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">The Science of Strength After 60</h2>
          <p className="text-slate-600 text-lg">Understanding Sarcopenia and how to reverse it through simple movement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-xl mb-3">Muscle Loss is Real</h3>
            <p className="text-slate-600 leading-relaxed">
              After age 60, we naturally lose 3–5% of muscle mass per decade. This affects balance and daily independence.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl mb-3">The "Hidden" Signs</h3>
            <p className="text-slate-600 leading-relaxed">
              Struggling to open jars or feeling tired while putting groceries away are early signs your arm strength needs attention.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl mb-3">Entirely Reversible</h3>
            <p className="text-slate-600 leading-relaxed">
              Studies show that consistent, low-impact resistance training can stop and even reverse muscle loss at any age.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
