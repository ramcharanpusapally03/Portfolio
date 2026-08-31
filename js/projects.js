/**
 * Projects Data & Modal Management
 * Ramcharan Pusapally Developer Portfolio
 */

const projectsData = [
  {
    id: "driver-drowsiness",
    title: "Real-Time Driver Drowsiness Detection & Alert System",
    category: "iot",
    categoryLabel: "IoT & Embedded Systems",
    duration: "5 – 6 weeks",
    featured: true,
    badge: "Hardware & IoT",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    summary: "An intelligent multi-sensor embedded safety system that actively detects driver eye-closure duration and abnormal heart rate spikes in real-time, instantly triggering multi-level audio/visual alerts and emergency GSM SMS dispatches.",
    metrics: [
      { label: "Detection Accuracy", value: "93%+" },
      { label: "SMS Alert Latency", value: "3–5 sec" },
      { label: "Sensors Integrated", value: "Multi-modal" },
      { label: "Simulation", value: "Proteus Ready" }
    ],
    techStack: [
      "Arduino Uno",
      "IR Eye-Blink Sensor",
      "Pulse Rate Sensor",
      "SIM800L GSM Module",
      "16×2 I2C LCD",
      "Buzzer & LEDs",
      "Arduino IDE",
      "C/C++",
      "Proteus Simulation"
    ],
    architecture: {
      overview: "The system runs a continuous sensing loop on the Arduino Uno microcontroller. It polls input from an IR optical eye-blink sensor (calibrated for eyelid closure duration) and an optical pulse sensor (tracking BPM variations).",
      stages: [
        {
          step: "1. Sensing & Acquisition",
          desc: "IR Eye-Blink sensor captures blink duration; Pulse sensor samples PPG pulse waves to compute real-time Beats Per Minute (BPM)."
        },
        {
          step: "2. Decision Thresholds",
          desc: "If eye closure exceeds a calibrated 2-second threshold OR heart rate deviates outside safe baseline limits (Bradycardia/Tachycardia), drowsiness flag is triggered."
        },
        {
          step: "3. Local Multi-Level Alert",
          desc: "Immediately activates high-decibel piezoceramic buzzer and flashing red strobe LEDs; status is printed to 16x2 I2C LCD screen."
        },
        {
          step: "4. Remote Emergency Dispatch",
          desc: "Issues AT commands to SIM800L GSM module over UART to transmit critical SOS alert SMS with vehicle ID and driver vitals to emergency contacts."
        }
      ]
    },
    highlights: [
      "Designed and simulated full circuit schematic in Proteus before physical hardware assembly.",
      "Engineered low-latency C/C++ firmware avoiding blocking delays with interrupt-driven pulse timers.",
      "Achieved 93%+ detection accuracy across day/night ambient lighting conditions."
    ]
  },
  {
    id: "environmental-awareness",
    title: "CDP - Environmental Awareness (Times Foundations X LPU)",
    category: "data",
    categoryLabel: "Community & Data Analytics",
    duration: "June 2026 – July 2026",
    featured: true,
    badge: "Community & Impact",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    summary: "A community-focused sustainability initiative executed in partnership with Times Foundations and Lovely Professional University. Led digital data collection, environmental impact analysis, and grassroots sustainability advocacy.",
    metrics: [
      { label: "Community Reach", value: "300+ People" },
      { label: "Data Records", value: "Multi-Household" },
      { label: "Key Focus", value: "Green Practices" },
      { label: "Outcome", value: "Certified Impact" }
    ],
    techStack: [
      "MS Excel",
      "Digital Data Collection",
      "Google Forms / Sheets",
      "Statistical Analysis",
      "Team Leadership",
      "Public Communication"
    ],
    architecture: {
      overview: "Collaborative community project aimed at surveying urban waste segregation, plastic reduction adoption, and household energy conservation habits using structured digital survey instruments.",
      stages: [
        {
          step: "1. Survey Design & Mobilization",
          desc: "Created structured digital questionnaires targeting waste disposal habits and green energy awareness."
        },
        {
          step: "2. Data Aggregation & Excel Modeling",
          desc: "Synthesized community survey responses using Microsoft Excel pivot tables, trend formulas, and visual dashboards."
        },
        {
          step: "3. Community Workshop & Outreach",
          desc: "Delivered interactive awareness presentations encouraging actionable recycling, compost adoption, and resource conservation."
        }
      ]
    },
    highlights: [
      "Strengthened leadership, stakeholder communication, and field coordination skills.",
      "Analyzed trends across demographic segments to identify key friction points in sustainable habit adoption.",
      "Awarded Certificate of Recognition from Times Foundations & LPU."
    ]
  },
  {
    id: "fullstack-react-portfolio",
    title: "Full Stack React & Modern Web Showcase",
    category: "web",
    categoryLabel: "Full Stack Web Development",
    duration: "Ongoing",
    featured: false,
    badge: "Web & Full Stack",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    summary: "A modular, responsive web architecture built with modern JavaScript (ES6+), React component principles, Tailwind CSS, and Database Management System (DBMS) integration.",
    metrics: [
      { label: "Lighthouse Score", value: "98+" },
      { label: "Architecture", value: "Component-Based" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Persistence", value: "DBMS & State" }
    ],
    techStack: [
      "React",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "DBMS / SQL",
      "Git & GitHub"
    ],
    architecture: {
      overview: "Architected modern web interfaces using clean reusable components, reactive state management, asynchronous data fetching, and fluid glassmorphism UI patterns.",
      stages: [
        {
          step: "1. UI/UX & Responsive Layout",
          desc: "Mobile-first layout system with dynamic dark/light themes, accessible color contrast, and glassmorphic micro-interactions."
        },
        {
          step: "2. State & Component Lifecycle",
          desc: "Encapsulated logic using React Hooks, event-driven state propagation, and clean modular code."
        },
        {
          step: "3. Database & API Integration",
          desc: "Structured relational DBMS schema design for data storage, normalization, and CRUD operations."
        }
      ]
    },
    highlights: [
      "Clean modular code structure adhering to modern ES6+ and React conventions.",
      "Comprehensive certification from 'Learning Full Stack React' (Mar 2026).",
      "Optimized for smooth 60fps animations, mobile touch interactions, and SEO."
    ]
  }
];

// Modal handling functions
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modalBackdrop || !modalContent) return;

  // Build modal HTML
  let techTagsHTML = project.techStack.map(t => 
    `<span class="px-2.5 py-1 text-xs rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono">${t}</span>`
  ).join('');

  let metricsHTML = project.metrics.map(m => `
    <div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
      <div class="text-xs text-slate-400 font-medium">${m.label}</div>
      <div class="text-lg font-bold text-sky-400 mt-1">${m.value}</div>
    </div>
  `).join('');

  let stagesHTML = project.architecture.stages.map(s => `
    <div class="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
      <div class="text-sm font-semibold text-slate-200">${s.step}</div>
      <div class="text-xs text-slate-400 mt-1">${s.desc}</div>
    </div>
  `).join('');

  let highlightsHTML = project.highlights.map(h => `
    <li class="flex items-start text-xs sm:text-sm text-slate-300 gap-2">
      <i class="fa-solid fa-check-circle text-emerald-400 mt-0.5"></i>
      <span>${h}</span>
    </li>
  `).join('');

  modalContent.innerHTML = `
    <!-- Header -->
    <div class="flex items-start justify-between border-b border-slate-800 pb-4">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full border ${project.badgeColor}">
            ${project.badge}
          </span>
          <span class="text-xs text-slate-400 font-mono"><i class="fa-regular fa-clock mr-1"></i>${project.duration}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-white">${project.title}</h3>
      </div>
      <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <!-- Body Scrollable -->
    <div class="mt-5 space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
      <!-- Summary -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">Executive Summary</h4>
        <p class="text-sm text-slate-300 leading-relaxed">${project.summary}</p>
      </div>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        ${metricsHTML}
      </div>

      <!-- Tech Stack -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">Technologies & Tools</h4>
        <div class="flex flex-wrap gap-1.5">
          ${techTagsHTML}
        </div>
      </div>

      <!-- Architecture Breakdown -->
      <div class="space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-sky-400">System Flow & Architecture</h4>
        <p class="text-xs sm:text-sm text-slate-300">${project.architecture.overview}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          ${stagesHTML}
        </div>
      </div>

      <!-- Key Outcomes & Highlights -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">Key Outcomes</h4>
        <ul class="space-y-2">
          ${highlightsHTML}
        </ul>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
      <button onclick="closeProjectModal()" class="px-4 py-2 text-sm rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition">
        Close
      </button>
      <a href="#contact" onclick="closeProjectModal()" class="px-4 py-2 text-sm rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition flex items-center gap-1.5">
        <i class="fa-solid fa-envelope"></i> Inquire About Project
      </a>
    </div>
  `;

  modalBackdrop.classList.remove('hidden');
  modalBackdrop.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.add('hidden');
    modalBackdrop.classList.remove('flex');
  }
  document.body.style.overflow = 'auto';
}

// Project Filter Logic
function filterProjects(category) {
  const buttons = document.querySelectorAll('.project-filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('bg-sky-500', 'text-slate-950', 'font-semibold');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300');
    } else {
      btn.classList.remove('bg-sky-500', 'text-slate-950', 'font-semibold');
      btn.classList.add('bg-slate-800/80', 'text-slate-300');
    }
  });

  const cards = document.querySelectorAll('.project-card-item');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
