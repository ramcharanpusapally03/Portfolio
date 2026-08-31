/**
 * Interactive Developer Terminal Emulator
 * Ramcharan Pusapally Developer Portfolio
 */

class PortfolioTerminal {
  constructor() {
    this.terminalOutput = document.getElementById('terminal-output');
    this.terminalInput = document.getElementById('terminal-input');
    this.history = [];
    this.historyIndex = -1;

    if (!this.terminalInput || !this.terminalOutput) return;
    this.init();
  }

  init() {
    this.printWelcomeMessage();
    this.terminalInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
    
    const terminalWindow = document.querySelector('.minimal-terminal');
    if (terminalWindow) {
      terminalWindow.addEventListener('click', () => {
        this.terminalInput.focus();
      });
    }
  }

  printWelcomeMessage() {
    const welcome = `
<span style="font-weight: bold; color: var(--text-primary);">Welcome to Ramcharan Pusapally's Developer Shell (v2.0.0)</span>
Type <span style="font-weight: bold; color: #888;">'help'</span> to see all available commands or <span style="font-weight: bold; color: #888;">'sudo hire'</span> to get in touch.
--------------------------------------------------------------------------------`;
    this.printRaw(welcome);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const command = this.terminalInput.value.trim();
      if (command) {
        this.history.push(command);
        this.historyIndex = this.history.length;
        this.executeCommand(command);
      } else {
        this.printLine(`<span style="color: #666;">ramcharan@dev:~$</span> `);
      }
      this.terminalInput.value = '';
      this.scrollToBottom();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.terminalInput.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.terminalInput.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = this.history.length;
        this.terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      this.handleAutocomplete();
    }
  }

  handleAutocomplete() {
    const current = this.terminalInput.value.trim().toLowerCase();
    const commands = ['help', 'about', 'skills', 'projects', 'education', 'certs', 'contact', 'socials', 'clear', 'sudo hire', 'date', 'whoami', 'cat resume'];
    const matches = commands.filter(c => c.startsWith(current));
    if (matches.length === 1) {
      this.terminalInput.value = matches[0];
    }
  }

  executeCommand(cmd) {
    const fullCmd = cmd.toLowerCase();
    const parts = fullCmd.split(' ');
    const primary = parts[0];

    this.printLine(`<span style="color: #666;">ramcharan@dev:~$</span> <span style="color: var(--text-primary);">${this.escapeHTML(cmd)}</span>`);

    switch (primary) {
      case 'help': this.printHelp(); break;
      case 'whoami':
      case 'about': this.printAbout(); break;
      case 'skills': this.printSkills(); break;
      case 'projects': this.printProjects(); break;
      case 'education':
      case 'edu': this.printEducation(); break;
      case 'certs':
      case 'certificates': this.printCertificates(); break;
      case 'contact': this.printContact(); break;
      case 'socials': this.printSocials(); break;
      case 'clear':
      case 'cls': this.clear(); break;
      case 'date': this.printLine(`<span style="color: var(--text-muted);">${new Date().toLocaleString()}</span>`); break;
      case 'sudo':
        if (parts[1] === 'hire') {
          this.printSudoHire();
        } else {
          this.printLine(`<span style="color: red;">sudo: permission granted, but command not recognized. Try 'sudo hire'.</span>`);
        }
        break;
      case 'cat':
        if (parts[1] === 'resume' || parts[1] === 'resume.txt') {
          this.printCatResume();
        } else {
          this.printLine(`<span style="color: red;">cat: No such file. Try 'cat resume'.</span>`);
        }
        break;
      case 'theme':
        if (parts[1] === 'dark' || parts[1] === 'light') {
          if (typeof setPortfolioTheme === 'function') {
            setPortfolioTheme(parts[1]);
            this.printLine(`<span style="color: var(--text-primary);">Theme changed to ${parts[1]} mode.</span>`);
          }
        } else {
          this.printLine(`<span style="color: var(--text-muted);">Usage: theme [dark|light]</span>`);
        }
        break;
      default:
        this.printLine(`<span style="color: red;">zsh: command not found: ${this.escapeHTML(cmd)}. Type 'help' for a list of commands.</span>`);
    }
  }

  printHelp() {
    const helpText = `
<span style="font-weight: bold; color: var(--text-primary);">Available Shell Commands:</span>
  <span style="color: var(--text-secondary);">about / whoami</span>   : View summary of Ramcharan's profile
  <span style="color: var(--text-secondary);">skills</span>           : Display core developer skills and tools
  <span style="color: var(--text-secondary);">projects</span>         : List featured hardware & software projects
  <span style="color: var(--text-secondary);">education</span>        : View academic degrees & high school scores
  <span style="color: var(--text-secondary);">contact</span>          : Get email, mobile, and direct contact details
  <span style="color: var(--text-secondary);">cat resume</span>       : View formatted text summary of resume
  <span style="color: var(--text-secondary);">theme [dark|light]</span>: Switch website visual theme
  <span style="color: var(--text-primary); font-weight:bold;">sudo hire</span>        : Initiate fast contact pipeline
  <span style="color: var(--text-secondary);">clear</span>            : Clear terminal output`;
    this.printRaw(helpText);
  }

  printAbout() {
    this.printRaw(`Ramcharan Pusapally
Computer Science Student @ Lovely Professional University
Focus: Full-Stack Web Development, IoT & Embedded Systems.
Status: Open for Internship & Project Opportunities`);
  }

  printSkills() {
    this.printRaw(`• Languages: Python (Basic), JavaScript, HTML5, CSS3, C/C++
• Backend & DB: DBMS / Relational Databases
• Hardware & IoT: Arduino Uno, SIM800L GSM, IR Sensors, Pulse Sensors, Proteus
• Tools: VS Code, Git, GitHub, Arduino IDE, MS Excel`);
  }

  printProjects() {
    this.printRaw(`1. Real-Time Driver Drowsiness Detection System (Arduino + GSM + 93%+ Accuracy)
2. CDP Environmental Awareness (Times Foundations X LPU)
3. Full Stack React Web Architecture`);
  }

  printEducation() {
    this.printRaw(`• B.Tech CSE @ Lovely Professional University (Aug 2025 - Present) | CGPA: 6.87
• Intermediate @ Jaya Junior College (91.8%)
• High School @ Jaya High School (93%)`);
  }

  printCertificates() {
    this.printRaw(`• Learning Full Stack React (Mar 2026)
• Basics of Leadership Styles & Theories (Oct 2025)`);
  }

  printContact() {
    this.printRaw(`• Email : ramcharanpusapally3@gmail.com
• Phone : +91-7815867359
• GitHub: github.com/ramcharanpusapally03
• LinkedIn: linkedin.com/in/ramcharanpusapally03`);
  }

  printSocials() { this.printContact(); }

  printSudoHire() {
    this.printRaw(`<span style="color: var(--text-primary); font-weight: bold;">[ACCESS GRANTED: HIRING PROTOCOL INITIATED]</span>
Redirecting to contact section...`);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 800);
  }

  printCatResume() {
    this.printRaw(`================ RAMCHARAN PUSAPALLY ================
Computer Science Undergrad | React & IoT Developer
Email: ramcharanpusapally3@gmail.com | Phone: +91-7815867359
=====================================================`);
  }

  clear() {
    this.terminalOutput.innerHTML = '';
  }

  printLine(html) {
    const p = document.createElement('div');
    p.style.margin = '4px 0';
    p.innerHTML = html;
    this.terminalOutput.appendChild(p);
  }

  printRaw(html) {
    const div = document.createElement('div');
    div.style.margin = '8px 0';
    div.style.whiteSpace = 'pre-wrap';
    div.innerHTML = html;
    this.terminalOutput.appendChild(div);
  }

  escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  scrollToBottom() {
    const body = document.getElementById('terminal-output');
    if (body) {
      body.scrollTop = body.scrollHeight;
      // Also scroll window if terminal is active
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioTerminal();
});
