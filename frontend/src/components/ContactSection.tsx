import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-racing-red/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-racing-red" />
              <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-racing-red">
                Get In Touch
              </span>
            </div>
            <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-foreground leading-none mb-6">
              Contact
              <br />
              <span className="text-racing-red">Us</span>
            </h2>
            <p className="font-body text-silver text-lg leading-relaxed mb-10">
              Have a question about a specific model? Looking for a rare find? Our team of enthusiasts is here to help you build the collection of your dreams.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: 'Location', value: 'Motorsport District, Racing City' },
                { icon: Mail, label: 'Email', value: 'hello@toydriveShop.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 0-RACING' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-racing-red/10 border border-racing-red/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-racing-red" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xs tracking-widest uppercase text-silver/50 mb-0.5">
                      {label}
                    </div>
                    <div className="font-body text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-charcoal-light border border-charcoal-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-racing-red mb-4" />
                <h3 className="font-heading font-black text-2xl uppercase tracking-wide text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-silver mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-racing-red/40 text-racing-red hover:bg-racing-red/10 font-heading font-bold text-xs tracking-widest uppercase rounded-none"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-heading font-bold text-xs tracking-widest uppercase text-silver">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="John Doe"
                    className="bg-charcoal border-charcoal-border focus:border-racing-red rounded-none text-foreground placeholder:text-silver/30 font-body"
                  />
                  {errors.name && (
                    <p className="text-xs text-racing-red font-body">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-heading font-bold text-xs tracking-widest uppercase text-silver">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="john@example.com"
                    className="bg-charcoal border-charcoal-border focus:border-racing-red rounded-none text-foreground placeholder:text-silver/30 font-body"
                  />
                  {errors.email && (
                    <p className="text-xs text-racing-red font-body">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="font-heading font-bold text-xs tracking-widest uppercase text-silver">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Tell us about the model you're looking for..."
                    rows={5}
                    className="bg-charcoal border-charcoal-border focus:border-racing-red rounded-none text-foreground placeholder:text-silver/30 font-body resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-racing-red font-body">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-racing-red hover:bg-racing-red-light text-white font-heading font-bold text-sm tracking-widest uppercase py-6 rounded-none border-0 transition-all duration-200 hover:shadow-red-glow disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
