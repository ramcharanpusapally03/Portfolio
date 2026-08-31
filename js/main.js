/**
 * Main Application Logic & Interactive Features
 * Ramcharan Pusapally Developer Portfolio
 */

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  setPortfolioTheme(savedTheme);
}

function setPortfolioTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  themeIcons.forEach(icon => {
    if (theme === 'light') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun', 'text-amber-400');
    } else {
      icon.classList.remove('fa-sun', 'text-amber-400');
      icon.classList.add('fa-moon', 'text-sky-400');
    }
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  setPortfolioTheme(next);
  showToast(`Switched to ${next} theme`, 'info');
}

// Dynamic Typing Effect
class TypeWriter {
  constructor(element, words, wait = 2000) {
    this.element = element;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="wrap">${this.txt}</span><span class="typing-cursor">|</span>`;

    let typeSpeed = 100;
    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Toast Notifications System
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'fa-circle-check text-emerald-400';
  if (type === 'error') icon = 'fa-circle-exclamation text-rose-400';
  if (type === 'info') icon = 'fa-circle-info text-sky-400';

  toast.innerHTML = `
    <i class="fa-solid ${icon} text-lg"></i>
    <div class="text-xs sm:text-sm font-medium text-slate-100">${message}</div>
  `;

  container.appendChild(toast);
  
  // Trigger slide-in
  setTimeout(() => toast.classList.add('show'), 20);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// Copy to Clipboard Helper
function copyToClipboard(text, label = 'Content') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`, 'success');
  }).catch(() => {
    showToast('Failed to copy to clipboard', 'error');
  });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');
  if (!mobileMenu) return;

  const isHidden = mobileMenu.classList.contains('hidden');
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    if (menuIcon) menuIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    mobileMenu.classList.add('hidden');
    if (menuIcon) menuIcon.classList.replace('fa-xmark', 'fa-bars');
  }
}

// Scroll Spy for Navigation Highlighting
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-sky-400', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-sky-400', 'font-bold');
      }
    });

    // Back to top button visibility
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
        backToTop.classList.remove('opacity-100');
      }
    }
  });
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  // Generate mailto link
  const mailtoUrl = `mailto:ramcharanpusapally3@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  
  // Show prompt and trigger mail client
  showToast('Opening your default mail client...', 'info');
  window.location.href = mailtoUrl;

  // Reset form
  e.target.reset();
  showToast('Message initialized! Looking forward to connecting with you.', 'success');
}

// Certificate Modal Viewer
const certificateData = {
  react: {
    title: "Learning Full Stack React",
    issuer: "Professional Coursework / Accreditation",
    issueDate: "March 2026",
    skills: ["React.js", "Component Architecture", "Hooks & State", "Full-Stack Integration", "Modern ES6+"],
    description: "Comprehensive mastery of full-stack React application architecture, state lifecycles, RESTful API integration, dynamic UI rendering, and database connectivity."
  },
  leadership: {
    title: "Basics of Leadership Styles & Theories",
    issuer: "Leadership & Management Certification",
    issueDate: "October 2025",
    skills: ["Team Leadership", "Transformational Theory", "Situational Adaptability", "Conflict Resolution", "Strategic Communication"],
    description: "In-depth training on foundational leadership models, team motivation strategies, situational leadership theory, and effective cross-functional group dynamics."
  }
};

function openCertModal(certKey) {
  const cert = certificateData[certKey];
  if (!cert) return;

  const modal = document.getElementById('cert-modal');
  const modalContent = document.getElementById('cert-modal-content');
  if (!modal || !modalContent) return;

  const skillBadges = cert.skills.map(s => 
    `<span class="px-2.5 py-1 text-xs rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">${s}</span>`
  ).join('');

  modalContent.innerHTML = `
    <div class="flex items-start justify-between border-b border-slate-800 pb-4">
      <div>
        <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <i class="fa-solid fa-certificate mr-1"></i> Verified Certificate
        </span>
        <h3 class="text-xl sm:text-2xl font-bold text-white mt-2">${cert.title}</h3>
        <p class="text-xs text-slate-400 mt-1">${cert.issuer} • <span class="text-sky-400">${cert.issueDate}</span></p>
      </div>
      <button onclick="closeCertModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="mt-5 space-y-4 text-slate-300 text-sm">
      <p class="leading-relaxed">${cert.description}</p>
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">Key Competencies</h4>
        <div class="flex flex-wrap gap-1.5">${skillBadges}</div>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
      <button onclick="closeCertModal()" class="px-4 py-2 text-sm rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition">
        Close
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  document.body.style.overflow = 'auto';
}

// Resume Viewer Modal
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollSpy();

  // Initialize Dynamic Typing
  const typeTarget = document.querySelector('.typewriter-target');
  if (typeTarget) {
    const words = [
      "Computer Science Engineer",
      "Full-Stack React Enthusiast",
      "IoT & Embedded Systems Developer",
      "Problem Solver & Tech Innovator"
    ];
    new TypeWriter(typeTarget, words, 2200);
  }

  // Smooth scroll for nav anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          toggleMobileMenu();
        }
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form listener
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
});
