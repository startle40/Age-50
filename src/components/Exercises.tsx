import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const exercises = [
  {
    id: 'bicep-curl',
    title: 'Bicep Curl',
    benefit: 'Pulling strength & carrying',
    description: 'The foundation of pulling. Helps with grocery bags and pulling open heavy doors.',
    instructions: 'Stand tall, elbows tucked. Curl weights toward shoulders slowly. Pause at the top. Lower slowly.',
    reps: '10–12 reps',
    sets: '3 sets',
    image: 'https://picsum.photos/seed/bicep/600/400'
  },
  {
    id: 'tricep-extension',
    title: 'Tricep Extension',
    benefit: 'Pushing out of chairs',
    description: 'Critical for pushing movements like getting up from a chair or a surface.',
    instructions: 'Hold weight with both hands overhead. Bend elbows to 90 degrees behind head. Press back up.',
    reps: '10–12 reps',
    sets: '3 sets',
    image: 'https://picsum.photos/seed/tricep/600/400'
  },
  {
    id: 'lateral-raise',
    title: 'Lateral Raise',
    benefit: 'Reaching & balance',
    description: 'Targets shoulder stability for reaching sideways and maintaining balance.',
    instructions: 'Raise arms out to sides until shoulder height. Slight bend in elbows. Lower slowly.',
    reps: '10 reps',
    sets: '3 sets',
    image: 'https://picsum.photos/seed/shoulders/600/400'
  },
  {
    id: 'hammer-curl',
    title: 'Hammer Curl',
    benefit: 'Grip & longevity',
    description: 'Increases grip strength—one of the strongest predictors of overall longevity.',
    instructions: 'Same as bicep curl but with palms facing inward throughout. Engages forearms.',
    reps: '10–12 reps',
    sets: '3 sets',
    image: 'https://picsum.photos/seed/hammer/600/400'
  }
];

export default function Exercises() {
  return (
    <section id="exercises" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl mb-4">The Four Core Movements</h2>
            <p className="text-slate-600 text-lg">These are the only exercises you need. Focus on form, control, and consistency over heavy weights.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl">
            <p className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-1">Recommended Starting Weight</p>
            <p className="text-slate-700 font-medium">Beginners: 2–5 lbs Dumbbells</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {exercises.map((ex, index) => (
            <motion.div 
              key={ex.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-bg rounded-[2.5rem] overflow-hidden border border-slate-100"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={ex.image} 
                  alt={ex.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{ex.reps}</span>
                  <span className="bg-brand-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{ex.sets}</span>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <div className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">{ex.benefit}</div>
                <h3 className="text-3xl mb-4">{ex.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{ex.description}</p>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-brand-primary text-sm uppercase mb-3">Professional Technique</h4>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{ex.instructions}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
