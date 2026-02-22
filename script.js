// Matrix Background Effect
function createMatrixBackground() {
  const matrixBg = document.getElementById("matrixBg");
  const characters =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const matrixChars = characters.split("");

  function createMatrixChar() {
    const char = document.createElement("div");
    char.className = "matrix-char";
    char.textContent =
      matrixChars[Math.floor(Math.random() * matrixChars.length)];
    char.style.left = Math.random() * 100 + "vw";
    char.style.animationDuration = Math.random() * 3 + 2 + "s";
    char.style.animationDelay = Math.random() * 2 + "s";

    matrixBg.appendChild(char);

    // Remove character after animation
    setTimeout(() => {
      if (char.parentNode) {
        char.parentNode.removeChild(char);
      }
    }, 5000);
  }

  // Create characters at intervals
  setInterval(createMatrixChar, 100);
}

// Smooth scrolling for navigation links
document.querySelectorAll(".scroll-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", function () {
  // Initialize matrix background
  createMatrixBackground();

  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  fadeIns.forEach((fadeIn) => {
    observer.observe(fadeIn);
  });

  // Add typing effect to project titles
  const projectTitles = document.querySelectorAll(".project h3");
  projectTitles.forEach((title) => {
    title.addEventListener("mouseenter", function () {
      this.style.textShadow = "0 0 20px #00ff41, 0 0 40px #00ff41";
    });

    title.addEventListener("mouseleave", function () {
      this.style.textShadow = "none";
    });
  });

  // Add scanning effect to skill categories
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      this.style.borderColor = "#00cc33";
      this.style.boxShadow = "0 0 30px rgba(0, 204, 51, 0.5)";
    });

    category.addEventListener("mouseleave", function () {
      this.style.borderColor = "#00ff41";
      this.style.boxShadow = "0 0 30px rgba(0, 255, 65, 0.2)";
    });
  });

  // Add glitch effect to profile picture on hover
  const profilePic = document.querySelector(".profile-pic");
  if (profilePic) {
    // Keep natural colors; no color change on hover
  }

  // Add terminal-style cursor blink effect
  const typewriter = document.querySelector(".typewriter");
  if (typewriter) {
    setInterval(() => {
      typewriter.style.borderRightColor =
        typewriter.style.borderRightColor === "transparent"
          ? "#00ff41"
          : "transparent";
    }, 500);
  }

  // Add particle effect to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add cybersecurity-themed loading animation
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";

    setTimeout(() => {
      section.style.transition = "all 0.8s ease-out";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Add keyboard navigation support
document.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    // Add focus styles for accessibility
    document.body.classList.add("keyboard-navigation");
  }
});

// Remove keyboard navigation class when mouse is used
document.addEventListener("mousedown", function () {
  document.body.classList.remove("keyboard-navigation");
});

// Add scroll-triggered animations
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".matrix-bg");

  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }

  // Add glow effect to header on scroll
  const header = document.querySelector("header");
  if (header) {
    if (scrolled > 100) {
      header.style.boxShadow = "0 0 30px rgba(0, 255, 65, 0.5)";
    } else {
      header.style.boxShadow = "0 0 20px rgba(0, 255, 65, 0.3)";
    }
  }
});

// Add cybersecurity-themed form validation
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Encrypting...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      submitBtn.textContent = "Message Sent!";
      submitBtn.style.background = "linear-gradient(45deg, #00ff41, #00ff41)";

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = "linear-gradient(45deg, #00ff41, #00cc33)";
        this.reset();
      }, 2000);
    }, 1500);
  });
}

// Add terminal-style console effect
function addConsoleEffect() {
  const console = document.createElement("div");
  console.className = "terminal-console";
  console.innerHTML = `
        <div class="console-header">
            <span class="console-title">Terminal</span>
            <span class="console-controls">● ○ ●</span>
        </div>
        <div class="console-content">
            <p><span class="prompt">$</span> Initializing portfolio...</p>
            <p><span class="prompt">$</span> Loading matrix background...</p>
            <p><span class="prompt">$</span> System ready. Welcome, user.</p>
        </div>
    `;

  console.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 300px;
        background: rgba(0, 0, 0, 0.9);
        border: 2px solid #00ff41;
        border-radius: 10px;
        font-family: 'JetBrains Mono', monospace;
        color: #00ff41;
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.5s ease;
    `;

  document.body.appendChild(console);

  // Show console after a delay
  setTimeout(() => {
    console.style.opacity = "1";
    console.style.transform = "translateX(0)";
  }, 2000);

  // Hide console after 5 seconds
  setTimeout(() => {
    console.style.opacity = "0";
    console.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (console.parentNode) {
        console.parentNode.removeChild(console);
      }
    }, 500);
  }, 7000);
}

// Initialize console effect
document.addEventListener("DOMContentLoaded", function () {
  // Ensure page starts at top
  window.scrollTo(0, 0);

  setTimeout(addConsoleEffect, 1000);
  initializeTerminal();
  initializeSkillBars();
});

// Interactive Terminal Implementation
function initializeTerminal() {
  const terminalInput = document.getElementById("terminal-input");
  const terminalBody = document.getElementById("terminal-body");

  if (!terminalInput || !terminalBody) return;

  let commandHistory = [];
  let historyIndex = -1;

  // Available commands
  const commands = {
    help: {
      description: "Show available commands",
      execute: () => `Available commands:
  help          - Show this help message
  whoami        - Display user information
  skills        - List technical skills
  projects      - Show recent projects
  education     - Display education info
  contact       - Show contact information
  scan          - Run vulnerability scan simulation
  clear         - Clear terminal
  neofetch      - System information
  pwd           - Show current directory
  ls            - List directory contents
  cat resume    - Display resume info
  ping          - Test network connectivity
  exit          - Close terminal`,
    },

    whoami: {
      description: "Display user information",
      execute: () => `Youssef Sadek
IT Student @NJIT | Cybersecurity Enthusiast
ex Cybersecurity & Technical Operations Intern@David Zwirner`,
    },

    skills: {
      description: "List technical skills",
      execute: () => `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Languages:    Python ████████████ 90%
              JavaScript ██████████ 85%
              TypeScript ████████ 80%
              Java ███████ 75%
              C++ █████ 50%
              Bash ███████ 70%

Security:     Vulnerability Assessment ███████████ 95%
              Penetration Testing ███████ 70%
              Network Security ████████ 85%
              OpenVAS/GVM ███████████████ 99%
              Masscan █████████ 90%

Frameworks:   NestJS ████████ 85%
              React ███████ 75%
              Node.js ████████ 85%
              Prisma ███████ 75%

Tools:        Git ████████ 85%
              Linux ████████ 85%
              PagerDuty ███████ 75%`,
    },

    projects: {
      description: "Show recent projects",
      execute: () => `Recent Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[1] Enterprise Vulnerability Monitoring Platform
    │ NestJS, Node.js, Prisma, OpenVAS, React
    │ Internship at David Zwirner
    │ 50,000+ hosts scanning capability
    │ 30% throughput improvement
    
[2] GnosisLens - Oracle of Wisdom (Backend)
    │ Node.js, Express, MongoDB, Passport.js
    │ AI-powered travel scam detection
    │ Gemini AI API integration
    │ Backend-frontend integration
    
[3] Job Scraper Web Application
    │ Python, Flask, BeautifulSoup
    │ Automated LinkedIn job extraction
    │ RESTful API with Bootstrap UI
    
[4] Vulnerability Scanner Tool
    │ Python, Multithreading
    │ Custom security assessment tool
    │ Multi-target scanning capabilities`,
    },

    education: {
      description: "Display education information",
      execute: () => `Education:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 New Jersey Institute of Technology
   Information Technology, B.S.
   Expected Graduation: Aug 2026
   
📚 Relevant Coursework:
   • Network Security
   • Cryptography
   • Operating Systems
   • Ethical Hacking
   • Linux
   • System Administration
   • System Security`,
    },

    contact: {
      description: "Show contact information",
      execute: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    youssefsadekyis@gmail.com
🔗 LinkedIn: linkedin.com/in/youssef-sadek-njit/
🐱 GitHub:   github.com/Youssefciz

Available for cybersecurity internships and 
full-time opportunities starting Aug 2026.`,
    },

    scan: {
      description: "Run vulnerability scan simulation",
      execute: () => {
        return new Promise((resolve) => {
          const targets = [
            "192.168.1.1",
            "10.0.0.1",
            "172.16.0.1",
            "192.168.1.100",
          ];
          let output = `Starting vulnerability scan...\n`;
          output += `Target range: ${targets.join(", ")}\n`;
          output += `Scan type: Comprehensive\n\n`;

          setTimeout(() => {
            output += `[INFO] Masscan: Network discovery initiated\n`;
            output += `[INFO] Found 4 active hosts\n`;
            output += `[INFO] OpenVAS: Starting vulnerability assessment\n\n`;

            targets.forEach((ip, index) => {
              setTimeout(() => {
                const vulns = Math.floor(Math.random() * 5) + 1;
                const critical = Math.floor(Math.random() * 2);
                output += `[SCAN] ${ip} - ${vulns} vulnerabilities found (${critical} critical)\n`;

                if (index === targets.length - 1) {
                  output += `\n[COMPLETE] Scan finished. Report generated.\n`;
                  output += `[ALERT] ${
                    targets.length * 2
                  } total vulnerabilities detected!\n`;
                  resolve(output);
                }
              }, (index + 1) * 500);
            });
          }, 1000);
        });
      },
    },

    clear: {
      description: "Clear terminal",
      execute: () => {
        terminalBody.innerHTML = "";
        return "";
      },
    },

    neofetch: {
      description: "System information",
      execute: () => `
    ╭─────────────────────────╮
    │     Youssef@Portfolio   │
    ├─────────────────────────┤
    │ OS: Portfolio Linux     │
    │ Kernel: CyberSec 5.0    │
    │ Shell: hack/bash        │
    │ Terminal: WebTerminal   │
    │ CPU: Neural Processing  │
    │ Memory: ∞ Creativity    │
    │ Security: Fortress Mode │
    ╰─────────────────────────╯`,
    },

    pwd: {
      description: "Show current directory",
      execute: () => "/home/youssef/portfolio",
    },

    ls: {
      description: "List directory contents",
      execute: () => `total 8
drwxr-xr-x  skills/
drwxr-xr-x  projects/
drwxr-xr-x  education/
-rw-r--r--  resume.pdf
-rw-r--r--  contact.txt
-rwxr-xr-x  vulnerability_scanner.py
-rwxr-xr-x  network_monitor.js`,
    },

    ping: {
      description: "Test network connectivity",
      execute: () => `PING portfolio.local (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.045ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.041ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.039ms

--- portfolio.local ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss`,
    },

    exit: {
      description: "Close terminal",
      execute: () => {
        terminalInput.blur();
        return "Terminal session ended. Thanks for visiting!";
      },
    },
  };

  // Handle command input
  terminalInput.addEventListener("keydown", async function (e) {
    if (e.key === "Enter") {
      const command = this.value.trim().toLowerCase();
      const fullCommand = this.value.trim();

      // Add command to history
      if (command) {
        commandHistory.push(fullCommand);
        historyIndex = commandHistory.length;
      }

      // Display command
      addTerminalLine(`youssef@portfolio:~$ ${fullCommand}`);

      // Execute command
      if (command === "") {
        // Empty command
      } else if (commands[command]) {
        const result = await commands[command].execute();
        if (result) {
          addTerminalLine("", result, "terminal-output");
        }
      } else if (command.startsWith("cat ")) {
        const file = command.substring(4);
        if (file === "resume") {
          addTerminalLine(
            "",
            `📄 Resume Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Youssef Sadek
Major: Information Technology (Cybersecurity Focus)
School: New Jersey Institute of Technology
Expected Graduation: Aug 2026

Experience:
• Security Intern @ David Zwirner

Skills: Python, JavaScript, TypeScript, NestJS,
        React, Prisma, OpenVAS, Masscan`,
            "terminal-output"
          );
        } else {
          addTerminalLine(
            "",
            `cat: ${file}: No such file or directory`,
            "terminal-error"
          );
        }
      } else {
        addTerminalLine(
          "",
          `Command not found: ${command}. Type 'help' for available commands.`,
          "terminal-error"
        );
      }

      // Clear input
      this.value = "";

      // Scroll to bottom
      terminalBody.scrollTop = terminalBody.scrollHeight;
    } else if (e.key === "ArrowUp") {
      // Navigate command history up
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        this.value = commandHistory[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      // Navigate command history down
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        this.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        this.value = "";
      }
    } else if (e.key === "Tab") {
      // Tab completion
      e.preventDefault();
      const currentInput = this.value.toLowerCase();
      const matches = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(currentInput)
      );
      if (matches.length === 1) {
        this.value = matches[0];
      }
    }
  });

  function addTerminalLine(prompt = "", output = "", className = "") {
    const line = document.createElement("div");
    line.className = "terminal-line";

    if (prompt) {
      const promptSpan = document.createElement("span");
      promptSpan.className = "terminal-prompt";
      promptSpan.textContent = prompt;
      line.appendChild(promptSpan);
    }

    if (output) {
      const outputSpan = document.createElement("span");
      outputSpan.className = className || "terminal-output";
      outputSpan.textContent = output;
      if (!prompt) {
        outputSpan.style.marginLeft = "0";
      }
      line.appendChild(outputSpan);
    }

    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // Focus input when clicking on terminal
  document
    .querySelector(".terminal-container")
    .addEventListener("click", function () {
      terminalInput.focus();
    });
}

// Animated Skills Progress Bars
function initializeSkillBars() {
  const skillCategories = document.querySelectorAll(
    '.skill-category[data-animate="true"]'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillCategory(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  skillCategories.forEach((category) => {
    observer.observe(category);
  });
}

function animateSkillCategory(category) {
  const skillItems = category.querySelectorAll(".skill-item");

  // Add stagger effect to skill animations
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      animateSkillBar(item);
    }, index * 200); // 200ms delay between each skill
  });

  // Add class to trigger CSS animations
  setTimeout(() => {
    category.classList.add("animate");
  }, 100);
}

function animateSkillBar(skillItem) {
  const skillFill = skillItem.querySelector(".skill-fill");
  const skillPercentage = skillItem.querySelector(".skill-percentage");
  const targetWidth = parseInt(skillFill.getAttribute("data-width"));
  const targetPercentage = parseInt(
    skillPercentage.getAttribute("data-percentage")
  );

  // Animate the progress bar width
  setTimeout(() => {
    skillFill.style.width = targetWidth + "%";
    skillFill.classList.add("animate");
  }, 100);

  // Animate the percentage counter
  animateCounter(skillPercentage, 0, targetPercentage, 2000);

  // Add pulse effect when animation completes
  setTimeout(() => {
    skillFill.style.animation = "pulse 2s ease-in-out infinite";
  }, 2500);
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smoother animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(start + (end - start) * easeOutQuart);

    element.textContent = currentValue + "%";

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = end + "%";
      // Add glow effect when completed
      element.style.textShadow = "0 0 10px #00ff41";
    }
  }

  requestAnimationFrame(updateCounter);
}

// Enhanced hover effects for skill categories
document.addEventListener("DOMContentLoaded", function () {
  const skillCategories = document.querySelectorAll(".skill-category");

  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      // Enhance glow effects on hover
      const skillFills = this.querySelectorAll(".skill-fill");
      skillFills.forEach((fill) => {
        fill.style.boxShadow =
          "0 0 20px rgba(0, 255, 65, 1), inset 0 0 15px rgba(0, 255, 65, 0.4)";
      });

      // Enhance percentage glow
      const percentages = this.querySelectorAll(".skill-percentage");
      percentages.forEach((percentage) => {
        percentage.style.textShadow = "0 0 15px #00cc33";
      });
    });

    category.addEventListener("mouseleave", function () {
      // Return to normal glow
      const skillFills = this.querySelectorAll(".skill-fill");
      skillFills.forEach((fill) => {
        fill.style.boxShadow =
          "0 0 15px rgba(0, 255, 65, 0.8), inset 0 0 10px rgba(0, 255, 65, 0.3)";
      });

      // Return percentage glow to normal
      const percentages = this.querySelectorAll(".skill-percentage");
      percentages.forEach((percentage) => {
        percentage.style.textShadow = "0 0 10px #00ff41";
      });
    });
  });
});

