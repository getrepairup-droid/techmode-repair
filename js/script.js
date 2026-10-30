/**
 * TechMode Repair — Console Repair Landing Page Engine
 * Built for Google Ads High-Intent Traffic & Mobile Conversions
 * Verified for https://techmodeusa.com/ | Cedar Hill, TX
 */

document.addEventListener('DOMContentLoaded', () => {
  initConsoleTriage();
  initQuoteForm();
  initFaqAccordion();
  initPhoneFormatting();
  initMobileBarKeyboardHandling();
});

/* ==========================================================================
   1. INTERACTIVE CONSOLE TRIAGE & DIAGNOSIS ENGINE
   ========================================================================== */
const CONSOLE_DATA = {
  ps: {
    name: 'PlayStation (PS5 & PS4)',
    icon: 'https://techmodeusa.com/wp-content/uploads/2025/12/playstationlogoicon.jpeg',
    models: 'PS5 Disc/Digital, PS5 Slim, PS4 Pro, PS4',
    symptoms: [
      {
        id: 'hdmi',
        label: 'Broken HDMI / No Display',
        hint: 'White light on, TV says No Signal, bent pins inside port',
        procedure: 'Precision HDMI 2.1 port desoldering & replacement under 40x stereo microscope, ESD diode testing, and full 4K 120Hz display verification.',
        turnaround: 'Same-day service available (typically 1–2 hours with parts in stock)',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'overheating',
        label: 'Overheating / Loud Fan / Shuts Down',
        hint: 'System turns off during graphic-intensive games, fan jet noise',
        procedure: 'Full internal teardown, APU liquid metal oxidation cleaning & barrier resealing, heatsink lint extraction, and high-temp thermal pad inspection.',
        turnaround: 'Same-day service available',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'power',
        label: 'No Power / Beeps Once & Shuts Off',
        hint: 'Blue Light of Death (BLOD), clicking power supply, won’t beep',
        procedure: 'Board-level multimeter circuit probing, 12V rail short-circuit analysis, Southbridge/PMIC inspection, or power supply unit replacement.',
        turnaround: '1–2 business days for bench board diagnostic',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'disc',
        label: 'Disc Drive Error / Won’t Read',
        hint: 'Discs won’t insert, grinding sound, unrecognized disc error',
        procedure: 'Mechanical roller realignment, laser optical pickup lens cleaning or replacement, daughterboard logic pairing preserved.',
        turnaround: 'Same-day to 24 hours depending on model',
        warranty: 'Qualifying repair warranty included'
      }
    ]
  },
  xbox: {
    name: 'Xbox (Series X/S & One)',
    icon: 'https://techmodeusa.com/wp-content/uploads/2025/12/xboxlogoicon.png',
    models: 'Xbox Series X, Xbox Series S, Xbox One X, Xbox One S',
    symptoms: [
      {
        id: 'hdmi',
        label: 'HDMI Port Damaged / Black Screen',
        hint: 'Series X/S powers on, power light stays solid white, no video',
        procedure: 'Dual-board separation for Series X, precision micro-soldered HDMI port installation, pin-to-trace impedance testing, 4K HDR stress test.',
        turnaround: 'Same-day service available (typically 2–3 hours)',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'overheating',
        label: 'Thermal Shutdown / Loud Fan',
        hint: 'System shuts down with "Console was shut down to prevent overheating" alert',
        procedure: 'Vapor chamber heatsink de-clogging, thermal paste replacement with premium non-conductive compound, axial fan testing.',
        turnaround: 'Same-day service available',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'power',
        label: 'No Power / Turns Off After 5 Seconds',
        hint: 'Chimes when pressing power button then immediately shuts off',
        procedure: 'Internal power supply diagnostic, MOSFET voltage regulator testing, motherboard short-circuit trace repair.',
        turnaround: '1–2 business days diagnostic',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'green-screen',
        label: 'Green Screen of Death / Boot Loop',
        hint: 'Stuck on green Xbox boot screen or E100/E101 system error',
        procedure: 'Internal NVMe / SSD health diagnostic, safe offline OS software restoration, game save preservation priority.',
        turnaround: 'Same-day to 24 hours',
        warranty: 'Qualifying repair warranty included'
      }
    ]
  },
  switch: {
    name: 'Nintendo Switch (OLED & Lite)',
    icon: 'https://techmodeusa.com/wp-content/uploads/2025/12/nintendologoicon.png',
    models: 'Switch OLED, Switch V1/V2, Switch Lite',
    symptoms: [
      {
        id: 'charging-port',
        label: 'Won’t Charge / Bent USB-C Port',
        hint: 'Won’t turn on, battery percentage doesn’t climb, loose charging cord',
        procedure: 'Surface-mount double-row USB-C 24-pin port replacement, solder bridge inspection under microscope, fast charge protocol testing.',
        turnaround: 'Same-day to 24 hours',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'm92t36',
        label: 'Black Screen / Blown M92T36 Power IC',
        hint: 'Plugged in third-party dock or surge, console draws 0.00A–0.40A',
        procedure: 'Board-level microsoldering replacement of M92T36 Power Management IC, BQ24193 battery charger chip, and shorted filter capacitors.',
        turnaround: '1–2 business days',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'screen',
        label: 'Cracked Screen / Touch Failure',
        hint: 'Glass shattered, ink blotches on LCD/OLED panel, touch unresponsive',
        procedure: 'Digitizer & OLED/LCD display assembly replacement, dust-free frame lamination, touchscreen digitizer calibration.',
        turnaround: 'Same-day service available',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'game-card',
        label: 'Game Card Error / Headphone Jack',
        hint: '"The game card could not be read", headphone jack audio static',
        procedure: 'Game cartridge reader daughterboard inspection, bent contact pin repair, or modular board replacement.',
        turnaround: 'Same-day service available',
        warranty: 'Qualifying repair warranty included'
      }
    ]
  },
  controllers: {
    name: 'Controllers & Handhelds',
    icon: 'https://techmodeusa.com/wp-content/uploads/2025/11/cropped-TechMode-Repair.png',
    models: 'PS5 DualSense / Edge, Xbox Elite, Joy-Con, Steam Deck',
    symptoms: [
      {
        id: 'stick-drift',
        label: 'Thumbstick Drift / Wandering Aim',
        hint: 'Crosshair moves on its own, joystick potentiometer worn down',
        procedure: 'Old analog potentiometers desoldered; upgraded with precision magnetic Hall-Effect sensor sticks (immune to future wear and drift) and calibrated.',
        turnaround: 'Same-day to 24 hours',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'stick-bumper',
        label: 'Broken Bumper / Sticky Trigger',
        hint: 'L1/R1 tactile switch snapped, trigger spring popped, face buttons stick',
        procedure: 'Microswitch replacement, internal trigger spring mechanism renewal, tactile feedback restoration.',
        turnaround: 'Same-day service available',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'controller-usb',
        label: 'Loose Controller Charging Port',
        hint: 'Cable wiggles out, controller only charges if held at an angle',
        procedure: 'USB-C daughterboard soldering, reinforced structural grounding pads to prevent future pull-out damage.',
        turnaround: 'Same-day service available',
        warranty: 'Qualifying repair warranty included'
      },
      {
        id: 'steamdeck',
        label: 'Steam Deck / Handheld Console Issue',
        hint: 'Fan buzzing, SSD upgrade request, battery replacement, screen fix',
        procedure: 'Handheld diagnostic, thermal repaste, M.2 2230 NVMe clone & upgrade, battery replacement.',
        turnaround: 'Same-day to 48 hours depending on parts',
        warranty: 'Qualifying repair warranty included'
      }
    ]
  }
};

let currentConsoleKey = 'ps';
let currentSymptomIndex = 0;

function initConsoleTriage() {
  const tabs = document.querySelectorAll('.triage-tab-btn');
  const symptomContainer = document.getElementById('symptom-chips-container');
  
  if (!tabs.length || !symptomContainer) return;

  // Tab click listener
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      currentConsoleKey = tab.getAttribute('data-console');
      currentSymptomIndex = 0;
      renderSymptoms();
      updateDiagnosisCard();
    });
  });

  // Initial render
  renderSymptoms();
  updateDiagnosisCard();

  // "Get Quote for This Repair" button trigger
  const applyBtn = document.getElementById('apply-triage-to-quote');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const consoleInfo = CONSOLE_DATA[currentConsoleKey];
      const symptomInfo = consoleInfo.symptoms[currentSymptomIndex];
      
      const deviceInput = document.getElementById('form-device');
      const problemInput = document.getElementById('form-problem');

      if (deviceInput) {
        deviceInput.value = `${consoleInfo.name} (${consoleInfo.models.split(',')[0]})`;
      }
      if (problemInput) {
        problemInput.value = `Issue: ${symptomInfo.label}\nDetails: ${symptomInfo.hint}`;
      }

      // Smooth scroll to form
      const quoteSection = document.getElementById('quote-form');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
        
        // Highlight form briefly
        const formCard = document.querySelector('.quote-form-card');
        if (formCard) {
          formCard.style.boxShadow = '0 0 0 3px var(--color-primary), var(--shadow-xl)';
          setTimeout(() => {
            formCard.style.boxShadow = '';
          }, 1500);
        }

        // Focus on name input
        const nameInput = document.getElementById('form-name');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 600);
        }
      }
    });
  }
}

function renderSymptoms() {
  const container = document.getElementById('symptom-chips-container');
  if (!container) return;

  const currentConsole = CONSOLE_DATA[currentConsoleKey];
  container.innerHTML = '';

  currentConsole.symptoms.forEach((symptom, idx) => {
    const chip = document.createElement('div');
    chip.className = `symptom-chip ${idx === currentSymptomIndex ? 'selected' : ''}`;
    chip.setAttribute('data-index', idx);
    chip.innerHTML = `
      <div class="symptom-name">${symptom.label}</div>
      <div class="symptom-hint">${symptom.hint}</div>
    `;

    chip.addEventListener('click', () => {
      document.querySelectorAll('.symptom-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      currentSymptomIndex = idx;
      updateDiagnosisCard();
    });

    container.appendChild(chip);
  });
}

function updateDiagnosisCard() {
  const currentConsole = CONSOLE_DATA[currentConsoleKey];
  const symptom = currentConsole.symptoms[currentSymptomIndex];

  const deviceBadge = document.getElementById('triage-device-badge');
  const titleEl = document.getElementById('triage-diagnosis-title');
  const descEl = document.getElementById('triage-diagnosis-desc');
  const turnaroundEl = document.getElementById('triage-turnaround');
  const warrantyEl = document.getElementById('triage-warranty');

  if (deviceBadge) deviceBadge.textContent = currentConsole.name;
  if (titleEl) titleEl.textContent = symptom.label;
  if (descEl) descEl.textContent = symptom.procedure;
  if (turnaroundEl) turnaroundEl.textContent = symptom.turnaround;
  if (warrantyEl) warrantyEl.textContent = symptom.warranty;

  // Add subtle pulse effect
  const panel = document.querySelector('.triage-output-panel');
  if (panel) {
    panel.classList.remove('animate-fade-in');
    void panel.offsetWidth; // trigger reflow
    panel.classList.add('animate-fade-in');
  }
}

/* ==========================================================================
   2. HIGH-CONVERTING QUOTE REQUEST FORM HANDLER (FormSubmit AJAX Integration)
   ========================================================================== */

/**
 * Configure your FormSubmit recipient email here.
 * Official TechMode contact: info@techmodeusa.com
 * FormSubmit endpoint: https://formsubmit.co/ajax/info@techmodeusa.com
 */
const FORMSUBMIT_RECIPIENT_EMAIL = 'info@techmodeusa.com';

function initQuoteForm() {
  const form = document.getElementById('console-repair-form');
  const alertBox = document.getElementById('form-status-alert');
  if (!form || !alertBox) return;

  // Listen for service card clicks to prefill form
  const serviceLinks = document.querySelectorAll('.service-cta-link');
  serviceLinks.forEach(link => {
    link.addEventListener('click', () => {
      const card = link.closest('.service-card');
      if (card) {
        const title = card.querySelector('.service-title');
        const problemInput = document.getElementById('form-problem');
        if (title && problemInput && !problemInput.value) {
          problemInput.value = `Inquiry regarding: ${title.textContent.trim()}`;
        }
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const phoneInput = document.getElementById('form-phone');
    const deviceInput = document.getElementById('form-device');
    const problemInput = document.getElementById('form-problem');
    const submitBtn = document.getElementById('form-submit-btn');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const device = deviceInput ? deviceInput.value.trim() : '';
    const problem = problemInput ? problemInput.value.trim() : '';

    // Validation
    if (!name || !phone) {
      showAlert('error', 'Please provide both your Name and Phone Number so our technicians can contact you.');
      if (!name && nameInput) nameInput.focus();
      else if (!phone && phoneInput) phoneInput.focus();
      return;
    }

    if (phone.replace(/\D/g, '').length < 10) {
      showAlert('error', 'Please enter a valid 10-digit phone number (e.g. 817-449-4211) so we can text or call you.');
      if (phoneInput) phoneInput.focus();
      return;
    }

    if (!device) {
      showAlert('error', 'Please let us know your Console Model (e.g. PS5, Xbox Series X, Nintendo Switch).');
      if (deviceInput) deviceInput.focus();
      return;
    }

    // UI Loading State
    const originalBtnContent = submitBtn ? submitBtn.innerHTML : 'Send Repair Request';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite; margin-right: 8px;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Sending to TechMode Shop...</span>
      `;
    }

    // Prepare FormSubmit AJAX Payload
    const payload = {
      "Customer Name": name,
      "Phone Number": phone,
      "Console Model": device,
      "Issue Description": problem || "General console diagnosis requested",
      "_subject": `New Console Repair Quote: ${device} - ${name}`,
      "_template": "table",
      "_captcha": "false"
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === 'true' || result.success === true || response.status === 200)) {
        // Success presentation grounded in TechMode's real shop workflow
        showAlert(
          'success',
          `<div style="display:flex;align-items:flex-start;gap:12px;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" style="flex-shrink:0;margin-top:2px;">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <strong style="font-size:1.0625rem;display:block;margin-bottom:6px;color:#15803d;">Quote Request Received!</strong>
              <p style="margin-bottom:8px;line-height:1.5;">Thank you, <strong>${escapeHtml(name)}</strong>. We received your repair inquiry for your <strong>${escapeHtml(device)}</strong>.</p>
              <p style="margin-bottom:12px;line-height:1.5;">Our Cedar Hill bench technicians will review your issue and reach out to you at <strong>${escapeHtml(phone)}</strong> shortly with your estimate and turnaround time.</p>
              <div style="background:#f0fdf4;padding:12px 14px;border-radius:8px;border:1px solid #bbf7d0;font-size:0.875rem;color:#166534;line-height:1.45;">
                <strong>Need immediate bench service?</strong><br>
                Walk in to our Cedar Hill shop today: <strong>140 W FM 1382 Rd, Ste 177</strong> (Mon–Sat 10am–6pm) or call our technicians directly at <a href="tel:8174494211" style="font-weight:700;color:#15803d;text-decoration:underline;">(817) 449-4211</a>.
              </div>
            </div>
          </div>`
        );

        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('loading');
          submitBtn.innerHTML = `
            <span>Quote Submitted Successfully!</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          `;
          setTimeout(() => {
            submitBtn.innerHTML = originalBtnContent;
          }, 6000);
        }
      } else {
        throw new Error(result.message || 'FormSubmit response was not successful');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback triggered:', err);
      showAlert(
        'error',
        `<div style="display:flex;align-items:flex-start;gap:12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" style="flex-shrink:0;margin-top:2px;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div>
            <strong style="display:block;margin-bottom:4px;color:#b91c1c;">Direct Contact Option</strong>
            <p style="margin-bottom:8px;line-height:1.45;">We couldn't connect to the quote server at this moment. You can get an instant estimate by calling our technicians directly:</p>
            <p style="margin-bottom:10px;"><a href="tel:8174494211" style="font-size:1.125rem;font-weight:800;color:#b91c1c;text-decoration:underline;">📞 (817) 449-4211</a></p>
            <p style="font-size:0.8125rem;color:var(--color-ink-muted);">Or visit the workshop: <strong>140 W FM 1382 Rd, Suite 177, Cedar Hill, TX 75104</strong></p>
          </div>
        </div>`
      );

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  });

  function showAlert(type, messageHtml) {
    alertBox.className = `form-status-alert ${type}`;
    alertBox.innerHTML = messageHtml;
    alertBox.style.display = 'block';
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, (m) => {
      switch (m) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#039;';
        default: return m;
      }
    });
  }
}

/* ==========================================================================
   3. AUTO-FORMAT PHONE NUMBER AS USER TYPES
   ========================================================================== */
function initPhoneFormatting() {
  const phoneInput = document.getElementById('form-phone');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', (e) => {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
  });
}

/* ==========================================================================
   4. FAQ ACCORDION ENHANCEMENTS
   ========================================================================== */
function initFaqAccordion() {
  const detailsList = document.querySelectorAll('.faq-item details');
  detailsList.forEach(targetDetail => {
    targetDetail.addEventListener('toggle', () => {
      if (targetDetail.open) {
        detailsList.forEach(detail => {
          if (detail !== targetDetail && detail.open) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   5. MOBILE BAR BEHAVIOR (Hide on Virtual Keyboard Open)
   ========================================================================== */
function initMobileBarKeyboardHandling() {
  const mobileBar = document.querySelector('.mobile-sticky-bar');
  if (!mobileBar) return;

  const formInputs = document.querySelectorAll('input, textarea, select');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      if (window.innerWidth < 768) {
        mobileBar.style.display = 'none';
      }
    });
    input.addEventListener('blur', () => {
      if (window.innerWidth < 768) {
        mobileBar.style.display = '';
      }
    });
  });
}
