import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Building2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ContactSectionProps {
  data: PortfolioData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [messageIntent, setMessageIntent] = useState('Internship Opportunity');
  const [messageBody, setMessageBody] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailAddress = data.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const emailTemplates = [
    {
      title: 'Summer Internship / Trainee Role',
      subject: 'Internship Opportunity for Adarsh Jaiswal (BBA)',
      body: `Hi Adarsh,\n\nI reviewed your portfolio and was impressed by your case study on quick-commerce unit economics and your BBA coursework at Vedanta College. We have an upcoming internship/trainee opportunity in our team and would like to connect with you.\n\nBest regards,`,
    },
    {
      title: 'Project Collaboration / Research',
      subject: 'Collaboration on Business Research Project',
      body: `Hi Adarsh,\n\nI came across your business projects and would love to explore a joint case study / research initiative with you.\n\nBest regards,`,
    },
    {
      title: 'Mentorship / Informational Chat',
      subject: 'Informational Chat with Adarsh Jaiswal',
      body: `Hi Adarsh,\n\nI’d be happy to connect for a quick 15-minute informational conversation to discuss early-career business pathways and share industry perspectives.\n\nBest regards,`,
    },
  ];

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${messageIntent} - Inquiry from ${senderName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${senderName || 'N/A'}\nOrganization: ${senderOrg || 'N/A'}\nIntent: ${messageIntent}\n\nMessage:\n${messageBody}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Contact Call to Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                08. Direct Connection
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Let's Connect & Collaborate
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                I am actively seeking <strong className="text-white">Summer Internships</strong>, management trainee opportunities, and business research collaborations where analytical rigor and disciplined execution make an impact.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="bg-stone-800/80 p-5 rounded-lg border border-stone-700/80 space-y-3">
              <div className="text-xs text-stone-400 font-semibold uppercase tracking-wider">
                Direct Email Channel
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-amber-300 font-mono-code text-sm sm:text-base hover:underline truncate"
                >
                  {emailAddress}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-stone-700 hover:bg-stone-600 text-stone-200 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] text-emerald-400 font-medium">
                  Copied to clipboard!
                </div>
              )}
            </div>

            {/* Social / Professional links */}
            <div className="flex items-center gap-4 text-xs font-medium text-stone-300">
              <a
                href={data.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1"
              >
                <Linkedin className="w-4 h-4 text-stone-400" />
                <span>LinkedIn Profile</span>
                <ArrowRight className="w-3 h-3 text-stone-500" />
              </a>

              <span className="text-stone-600">·</span>

              <span className="text-stone-400">
                Vedanta College, Mumbai
              </span>
            </div>

            {/* Quick 1-Click Email Intent Templates */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                1-Click Pre-Drafted Email
              </div>
              <div className="space-y-2">
                {emailTemplates.map((tmpl, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${emailAddress}?subject=${encodeURIComponent(tmpl.subject)}&body=${encodeURIComponent(tmpl.body)}`}
                    className="block p-3 rounded bg-stone-800/60 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-400/50 transition-all text-xs group"
                  >
                    <div className="font-semibold text-stone-200 group-hover:text-amber-300 flex items-center justify-between">
                      <span>{tmpl.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact / Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-stone-800/90 border border-stone-700 rounded-xl p-6 sm:p-8">
              <h3 className="font-serif-title text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                Fill in your details below to instantly open your email client pre-addressed to {emailAddress}.
              </p>

              <form onSubmit={handleSendForm} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-stone-900 border border-stone-700 rounded p-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      placeholder="e.g. Strategy Advisory / Vedanta Alumni"
                      className="w-full bg-stone-900 border border-stone-700 rounded p-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    Inquiry Intent
                  </label>
                  <select
                    value={messageIntent}
                    onChange={(e) => setMessageIntent(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded p-2.5 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Internship Opportunity">Summer Internship / Trainee Opportunity</option>
                    <option value="Academic Collaboration">Academic / Case Study Collaboration</option>
                    <option value="Informational Interview">Informational Interview / Mentorship</option>
                    <option value="General Professional Connection">General Professional Connection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    placeholder="Describe the opportunity, role requirements, or topic you would like to discuss with Adarsh..."
                    className="w-full bg-stone-900 border border-stone-700 rounded p-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft & Send via Email</span>
                </button>

                {formSubmitted && (
                  <p className="text-center text-xs text-emerald-400 font-medium pt-2">
                    Email composer launched! If your mail client did not open automatically, write directly to {emailAddress}.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
