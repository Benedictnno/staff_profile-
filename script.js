/* ========================================
   UNIVERSITY STAFF PROFILING SYSTEM
   My CSC 208 JavaScript - Making things interactive!
   ======================================== */

// ========================================
// HELPER FUNCTIONS - Making my life easier
// ========================================

/**
 * Shortcut for document.querySelector - saves me from typing that long thing every time
 * @param {string} sel - CSS selector string
 * @returns {Element|null} - The first matching element
 */
const $ = sel => document.querySelector(sel);

/**
 * Shortcut for document.querySelectorAll - gets all matching elements as an array
 * @param {string} sel - CSS selector string
 * @returns {Array} - Array of matching elements
 */
const $$ = sel => Array.from(document.querySelectorAll(sel));

/**
 * Converts user input to proper URL format
 * Sometimes people just type "facebook.com/username" instead of the full URL
 * @param {string} val - Input value (could be handle or full URL)
 * @returns {string} - Properly formatted URL or empty string
 */
const toURL = (val) => {
  if (!val) return "";
  
  try {
    // If they didn't include https://, I'll add it for them
    if (!/^https?:\/\//i.test(val)) {
      if (val.includes("facebook")) return `https://${val}`;
      if (val.includes("twitter") || val.includes("x.com")) return `https://${val}`;
      if (val.includes("instagram")) return `https://${val}`;
      if (val.includes("youtube")) return `https://${val}`;
      return `https://${val}`;
    }
    return new URL(val).toString();
  } catch {
    return ""; // If something goes wrong, just return empty string
  }
};

/**
 * Returns SVG icon markup for social media platforms
 * I copied these SVG paths from somewhere - they're the official icons
 * @param {string} name - Platform name (facebook, twitter, instagram, youtube)
 * @returns {string} - SVG markup or empty string
 */
const icon = (name) => ({
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.563 9.9v-7h-2.41V12h2.41V9.797c0-2.386 1.423-3.705 3.6-3.705 1.043 0 2.134.186 2.134.186v2.35h-1.202c-1.186 0-1.555.737-1.555 1.49V12h2.646l-.423 2.9h-2.223v7A10.002 10.002 0 0 0 22 12Z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25H21.1l-6.14 7.02 7.214 9.48H16.24l-4.28-5.6-4.894 5.6H3.21l6.58-7.53L2.86 2.25h4.99l3.86 5.12 4.534-5.12Zm-1.75 17.52h1.62L7.63 4.35H5.89l10.603 15.42Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.67.512a5.4 5.4 0 0 1 1.95 1.27 5.4 5.4 0 0 1 1.27 1.95c.272.7.457 1.5.512 2.67.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.27 1.95 5.4 5.4 0 0 1-1.95 1.27c-.7.272-1.5.457-2.67.512-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.95-1.27 5.4 5.4 0 0 1-1.27-1.95c-.272-.7-.457-1.5-.512-2.67C2.175 15.58 2.163 15.196 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.512-2.67a5.4 5.4 0 0 1 1.27-1.95 5.4 5.4 0 0 1 1.95-1.27c.7-.272 1.5-.457 2.67-.512C8.416 2.175 8.8 2.163 12 2.163Zm0 1.62c-3.15 0-3.52.012-4.76.07-.98.045-1.51.21-1.86.35-.47.183-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.305.88-.35 1.86-.058 1.24-.07 1.61-.07 4.76s.012 3.52.07 4.76c.045.98.21 1.51.35 1.86.183.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.305 1.86.35 1.24.058 1.61.07 4.76.07s3.52-.012 4.76-.07c.98-.045 1.51-.21 1.86-.35.47-.183.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.305-.88.35-1.86.058-1.24.07-1.61.07-4.76s-.012-3.52-.07-4.76c-.045-.98-.21-1.51-.35-1.86a3.79 3.79 0 0 0-.75-1.15 3.79 3.79 0 0 0-1.15-.75c-.35-.14-.88-.305-1.86-.35-1.24-.058-1.61-.07-4.76-.07Zm0 2.835a5.382 5.382 0 1 1 0 10.764 5.382 5.382 0 0 1 0-10.764Zm0 1.62a3.763 3.763 0 1 0 0 7.526 3.763 3.763 0 0 0 0-7.526Zm5.44-2.22a1.26 1.26 0 1 1 0 2.52 1.26 1.26 0 0 1 0-2.52Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.23-1.64-.95-2.36c-.91-.95-1.93-.96-2.4-1.02C16.99 2.5 12 2.5 12 2.5h-.01s-4.99 0-8.14.32c-.47.06-1.5.07-2.41 1.02C.73 4.56.5 6.2.5 6.2S.27 8.12.27 10.05v1.86c0 1.93.23 3.85.23 3.85s.23 1.64.95 2.36c.91.95 2.1.92 2.64 1.02 1.92.18 8 .23 8 .23s4.99-.01 8.14-.33c.47-.06 1.49-.07 2.4-1.02.72-.72.95-2.36.95-2.36s.23-1.92.23-3.85v-1.86c0-1.93-.23-3.85-.23-3.85ZM9.75 14.5V7.9l6.44 3.3-6.44 3.3Z"/></svg>'
})[name] || '';

// ========================================
// TAG INPUT COMPONENT - For adding/removing tags
// ========================================

/**
 * Creates a tag input component for areas of specialization and hobbies
 * This was tricky to get right - users can add/remove tags with keyboard shortcuts
 * @param {Element} containerEl - Container element to render tags
 * @param {Element} inputEl - Input element for typing new tags
 * @returns {Object} - Object with add() and list() methods
 */
function tagInput(containerEl, inputEl) {
  const tags = [];
  
  /**
   * Renders all tags in the container with remove buttons
   * Each tag gets a little X button to delete it
   */
  const render = () => {
    containerEl.innerHTML = '';
    tags.forEach((tag, index) => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag';
      tagElement.innerHTML = `${tag} <button title="Remove" aria-label="Remove ${tag}">×</button>`;
      
      // When they click the X, remove the tag
      tagElement.querySelector('button').onclick = () => {
        tags.splice(index, 1);
        render();
        updateProfile(); // Update the profile preview
      };
      
      containerEl.appendChild(tagElement);
    });
  };
  
  /**
   * Adds a new tag to the list
   * @param {string} val - Tag value to add
   */
  const add = (val) => {
    const trimmedVal = (val || '').trim();
    if (!trimmedVal) return;
    if (tags.includes(trimmedVal)) return; // Don't add duplicates
    if (tags.length >= 20) return; // Don't let them add too many tags
    
    tags.push(trimmedVal);
    inputEl.value = '';
    render();
    updateProfile();
  };
  
  // Handle keyboard events - this makes the tag input feel more natural
  inputEl.addEventListener('keydown', (e) => {
    // Press Enter or comma to add the tag
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      add(inputEl.value);
    }
    
    // Press Backspace on empty input to remove the last tag
    if (e.key === 'Backspace' && !inputEl.value && tags.length) {
      tags.pop();
      render();
      updateProfile();
    }
  });
  
  return {
    add,
    list: () => [...tags] // Return a copy so they can't mess with the original
  };
}

// ========================================
// SKILLS MANAGEMENT - For the skill bars
// ========================================

// Keep track of all the skills
const skillsState = [];
const skillsArea = $('#skillsArea');

/**
 * Adds a new skill row with name input and percentage slider
 * @param {string} prefName - Pre-filled skill name
 * @param {number} prefValue - Pre-filled skill percentage (0-100)
 */
function addSkillRow(prefName = '', prefValue = 50) {
  if (skillsState.length >= 5) return; // Only allow 5 skills max
  
  const row = document.createElement('div');
  row.className = 'skill-row';
  row.innerHTML = `
    <input type="text" list="skillsOptions" placeholder="Skill (e.g., Problem Solving)" class="skill-name" value="${prefName}">
    <div>
      <input type="range" min="0" max="100" value="${prefValue}" class="skill-val" />
      <div class="hint"><span class="val">${prefValue}</span>%</div>
    </div>`;
  
  // Create skill object with getters for name and value
  const skillObj = {
    el: row,
    get name() {
      return row.querySelector('.skill-name').value.trim();
    },
    get val() {
      return +row.querySelector('.skill-val').value;
    }
  };
  
  // Update percentage display when slider changes
  row.querySelector('.skill-val').addEventListener('input', (e) => {
    row.querySelector('.val').textContent = e.target.value;
    updateProfile();
  });
  
  // Update profile when skill name changes
  row.querySelector('.skill-name').addEventListener('input', updateProfile);
  
  skillsState.push(skillObj);
  skillsArea.appendChild(row);
  updateProfile();
}

// ========================================
// PHOTO PREVIEW FUNCTIONALITY
// ========================================

const avatarBox = $('#avatarBox');

/**
 * Updates the photo preview when user selects an image
 * @param {File} file - Selected image file
 */
function updatePhoto(file) {
  if (!file) {
    avatarBox.innerHTML = '<span class="subtle">Photo preview</span>';
    return;
  }
  
  const img = document.createElement('img');
  img.alt = 'Official/Smiling Picture';
  
  // Use FileReader to convert file to data URL for preview
  const reader = new FileReader();
  reader.onload = e => {
    img.src = e.target.result;
    avatarBox.innerHTML = '';
    avatarBox.appendChild(img);
  };
  reader.readAsDataURL(file);
}

// ========================================
// FORM VALIDATION
// ========================================

/**
 * Validates all form fields and shows error messages
 * @returns {boolean} - True if all validations pass
 */
function validate() {
  let isValid = true;
  
  // Required text fields validation
  const requiredFields = [
    ['#name', '#err-name'],
    ['#department', '#err-dept'],
    ['#degree', '#err-degree'],
    ['#university', '#err-university']
  ];
  
  requiredFields.forEach(([fieldSelector, errorSelector]) => {
    const value = $(fieldSelector).value.trim();
    const isFieldValid = !!value;
    $(errorSelector).classList.toggle('hidden', isFieldValid);
    if (!isFieldValid) isValid = false;
  });
  
  // Phone number validation (10-15 digits)
  const phoneNum = $('#phone').value.replace(/\D/g, '');
  const isPhoneValid = phoneNum.length >= 10 && phoneNum.length <= 15;
  $('#err-phone').classList.toggle('hidden', isPhoneValid);
  if (!isPhoneValid) isValid = false;
  
  // Email validation (basic regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test($('#email').value.trim());
  $('#err-email').classList.toggle('hidden', isEmailValid);
  if (!isEmailValid) isValid = false;
  
  // Areas of specialization validation
  const hasAreas = areas.list().length > 0;
  $('#err-areas').classList.toggle('hidden', hasAreas);
  if (!hasAreas) isValid = false;
  
  // Photo upload validation
  const hasPhoto = $('#photo').files && $('#photo').files[0];
  $('#err-photo').classList.toggle('hidden', !!hasPhoto);
  if (!hasPhoto) isValid = false;
  
  return isValid;
}

// ========================================
// PROFILE RENDERING
// ========================================

/**
 * Updates the profile preview with current form data
 * This function runs whenever form data changes
 */
function updateProfile() {
  // Basic information fields
  $('#nameOut').textContent = $('#name').value || 'Your Name';
  $('#statusOut').textContent = $('#status').value;
  $('#departmentOut').textContent = $('#department').value || '—';
  $('#staffIdOut').textContent = $('#staffId').value || '—';
  $('#bioOut').textContent = $('#bio').value || 'Your personal statement will appear here.';
  $('#leadershipOut').textContent = $('#leadership').value ? 
    `Leadership Position: ${$('#leadership').value}` : '—';
  
  // Areas of specialization as pill tags
  const areasOut = $('#areasOut');
  areasOut.innerHTML = '';
  areas.list().forEach(area => {
    const span = document.createElement('span');
    span.className = 'pill';
    span.textContent = area;
    areasOut.appendChild(span);
  });
  
  // Professional skills with progress bars
  const skillsOut = $('#skillsOut');
  skillsOut.innerHTML = '';
  skillsState.forEach(skill => {
    if (!skill.name) return;
    
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '8px';
    wrapper.innerHTML = `
      <div style="display:flex; justify-content:space-between">
        <strong>${skill.name}</strong>
        <span class="subtle">${skill.val}%</span>
      </div>
      <div class="skill-progress">
        <span style="width:${skill.val}%"></span>
      </div>`;
    skillsOut.appendChild(wrapper);
  });
  
  // Education information
  const degree = $('#degree').value;
  const university = $('#university').value;
  $('#eduOut').innerHTML = (degree || university) ? 
    `<div><strong>${degree || ''}</strong></div><div>${university || ''}</div>` : '—';
  
  // Motivation responses
  $('#motGroupOut').textContent = $('#motGroup').value || '—';
  $('#motResearchOut').textContent = $('#motResearch').value || '—';
  $('#motExperienceOut').textContent = $('#motExperience').value || '—';
  
  // Hobbies as pill tags
  const hobbyOut = $('#hobbyOut');
  hobbyOut.innerHTML = '';
  hobbies.list().forEach(hobby => {
    const span = document.createElement('span');
    span.className = 'pill';
    span.textContent = hobby;
    hobbyOut.appendChild(span);
  });
  
  // Social media links with icons
  const socialOut = $('#socialOut');
  socialOut.innerHTML = '';
  const socialPlatforms = [
    ['facebook', 'Facebook'],
    ['twitter', 'Twitter'],
    ['instagram', 'Instagram'],
    ['youtube', 'YouTube']
  ];
  
  socialPlatforms.forEach(([id, label]) => {
    const url = toURL($('#' + id).value.trim());
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.innerHTML = `${icon(id)} <span>${label}</span>`;
      socialOut.appendChild(link);
    }
  });
  
  // Welcome address preview for leadership positions
  updateWelcomePreview();
  
  // Contact information
  const phone = $('#phone').value.trim();
  const email = $('#email').value.trim();
  $('#phoneOut').textContent = phone || '—';
  $('#emailOut').textContent = email || '—';
  $('#emailOut').href = email ? `mailto:${email}` : '#';
}

/**
 * Updates the welcome address preview section
 * Only shows when user has a leadership position selected
 */
function updateWelcomePreview() {
  const hasLeadership = !!$('#leadership').value;
  const welcome = $('#welcome').value.trim();
  const bio = $('#bio').value.trim();
  const phone = $('#phone').value.trim();
  const email = $('#email').value.trim();
  const name = $('#name').value.trim();
  const department = $('#department').value.trim();
  const photoFile = $('#photo').files[0];
  
  if (hasLeadership && name && department && (welcome || bio)) {
    const section = document.createElement('div');
    section.style.display = 'grid';
    section.style.gridTemplateColumns = '160px 1fr';
    section.style.gap = '16px';
    
    // Photo section
    const left = document.createElement('div');
    left.className = 'avatar';
    if (photoFile) {
      const reader = new FileReader();
      reader.onload = e => {
        left.innerHTML = `<img src="${e.target.result}" alt="Official photo"/>`;
      };
      reader.readAsDataURL(photoFile);
    } else {
      left.textContent = 'Photo';
    }
    
    // Content section
    const right = document.createElement('div');
    right.innerHTML = `
      <h3 style="margin:0 0 4px">${name}</h3>
      <div class="subtle" style="margin-bottom:8px">${department}</div>
      <p>${welcome || bio}</p>
      <div class="divider"></div>
      <div>
        <strong>Contact:</strong> 
        ${phone ? `<span style='margin-left:6px'>${phone}</span>` : ''} 
        ${email ? `<span style='margin-left:10px'>•</span> <a href='mailto:${email}' style='color:var(--text)'>${email}</a>` : ''}
      </div>`;
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(left);
    wrapper.appendChild(right);
    
    $('#welcomePreview').innerHTML = '';
    $('#welcomePreview').appendChild(wrapper);
  } else {
    $('#welcomePreview').textContent = 'Select a Leadership Position and write a Welcome Address to generate this page.';
  }
}

// ========================================
// WELCOME ADDRESS PAGE GENERATOR
// ========================================

/**
 * Opens welcome address in a new printable window
 * Creates a complete HTML page with the staff member's information
 */
function openWelcomePage() {
  if (!validate()) {
    alert('Fill required fields (including photo) first.');
    return;
  }
  
  const name = $('#name').value.trim();
  const department = $('#department').value.trim();
  const welcome = $('#welcome').value.trim() || $('#bio').value.trim();
  const phone = $('#phone').value.trim();
  const email = $('#email').value.trim();
  const photoFile = $('#photo').files[0];
  
  if (!($('#leadership').value)) {
    alert('Choose a Leadership Position to create the Welcome Address page.');
    return;
  }
  
  /**
   * Creates and opens the welcome page window
   * @param {string} imgSrc - Base64 image source or empty string
   */
  const openWindow = (imgSrc = '') => {
    const html = `<!doctype html>
<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <title>Welcome Address – ${name}</title>
  <style>
    body {
      font-family: Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial;
      background: #0f1220;
      color: #e9edf5;
      margin: 0;
    }
    .wrap {
      max-width: 860px;
      margin: 40px auto;
      padding: 24px;
      background: #13182a;
      border-radius: 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 18px;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 14px;
    }
    .muted {
      color: #a7b0c0;
    }
    .divider {
      height: 1px;
      background: rgba(255,255,255,.12);
      margin: 14px 0;
    }
    a {
      color: #e9edf5;
    }
  </style>
</head>
<body>
  <div class='wrap'>
    <h1 style='margin-top:0'>Welcome Address</h1>
    <div class='grid'>
      <div>${imgSrc ? `<img src='${imgSrc}' alt='Official photo'/>` : ''}</div>
      <div>
        <h2 style='margin:0 0 6px'>${name}</h2>
        <div class='muted' style='margin-bottom:8px'>${department}</div>
        <p style='white-space:pre-wrap'>${welcome}</p>
        <div class='divider'></div>
        <div>
          <strong>Contact:</strong> 
          ${phone ? `<span style='margin-left:6px'>${phone}</span>` : ''} 
          ${email ? `<span style='margin:0 8px'>•</span> <a href='mailto:${email}'>${email}</a>` : ''}
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
    
    const newWindow = window.open('about:blank');
    newWindow.document.write(html);
    newWindow.document.close();
  };
  
  // Handle photo if available
  if (photoFile) {
    const reader = new FileReader();
    reader.onload = e => openWindow(e.target.result);
    reader.readAsDataURL(photoFile);
  } else {
    openWindow();
  }
}

// ========================================
// EXAMPLE DATA LOADER
// ========================================

/**
 * Loads example data based on the PDF specification
 * Fills all form fields with sample data for testing
 */
function loadExampleData() {
  // Basic information
  $('#name').value = 'OLALEYE Adebowale';
  $('#bio').value = 'Inquisitive computer science specialist with 8+ years of experience. Working to leverage strong research and programming skills as a developer for Microsoft. Led a team of 11 researchers at Jeolinks Technology Limited. Delivered projects 15% before deadline, with 10% fewer errors than other teams. Trained 25 programmers and developers in web application development skills.';
  $('#department').value = 'Computer Science';
  $('#staffId').value = '2203044523';
  $('#leadership').value = 'Student Heads/President';
  $('#status').value = 'Student President';
  $('#welcome').value = 'Hi, I\'m Adebowale, I\'m a researcher and computing strategist who helps experts, authors, and coaches go from "hidden gem" to admired industry leader…and even household name.';
  
  // Areas of specialization
  ['Research Specialist', 'Web Development', 'Data Modeling', 'Integrated Research'].forEach(area => areas.add(area));
  
  // Professional skills
  skillsArea.innerHTML = '';
  skillsState.length = 0;
  const exampleSkills = [
    ['Problem Solving', 77],
    ['Collaboration', 54],
    ['Work Ethics', 65],
    ['Critical Thinking', 75],
    ['Design Thinking', 54]
  ];
  exampleSkills.forEach(([name, value]) => addSkillRow(name, value));
  
  // Education
  $('#degree').value = 'MSc in Computer Science';
  $('#university').value = 'King\'s College, London';
  
  // Hobbies
  ['Gaming', 'Writing', 'Traveling', 'Sketching'].forEach(hobby => hobbies.add(hobby));
  
  // Motivation responses
  $('#motGroup').value = 'Student Government Association (SGA): Provides leadership opportunity and represents student interests.';
  $('#motResearch').value = 'Artificial Intelligence/Machine Learning Labs: often attract significant funding and talent due to strong career prospects for students.';
  $('#motExperience').value = 'Hackathons/Competitions: Participating in coding challenges, learning from failures, and showcasing problem‑solving skills.';
  
  // Contact information
  $('#phone').value = '+234-80904562231';
  $('#email').value = 'Olaleye.adebowale22@gmail.com';
  
  // Social media
  $('#facebook').value = 'https://facebook.com/olaleye-adebowale';
  $('#twitter').value = 'https://twitter.com/olaleyeadebowale22';
  $('#instagram').value = 'https://instagram.com/olaleye_adebowale11';
  
  updateProfile();
  alert('Example data loaded. Remember to upload a photo.');
}

// ========================================
// EVENT LISTENERS & INITIALIZATION
// ========================================

// Initialize tag input components
const areas = tagInput($('#areasTags'), $('#areaInput'));
const hobbies = tagInput($('#hobbyTags'), $('#hobbyInput'));

// Button event handlers
$('#addAreaBtn').onclick = () => areas.add($('#areaInput').value);
$('#addHobbyBtn').onclick = () => hobbies.add($('#hobbyInput').value);
$('#addSkillBtn').onclick = () => addSkillRow('', 60);
$('#viewProfile').onclick = () => {
  if (validate()) {
    document.getElementById('profileSection').scrollIntoView({ behavior: 'smooth' });
  }
};
$('#jumpTop').onclick = () => {
  document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
};
$('#loadExample').onclick = loadExampleData;
$('#openWelcome').onclick = openWelcomePage;

// Photo input handler
$('#photo').addEventListener('change', (e) => updatePhoto(e.target.files[0]));

// Live form updates - update profile as user types
$$('#profileForm input, #profileForm textarea, #profileForm select').forEach(element => {
  element.addEventListener('input', updateProfile);
});

// Form submission validation
$('#profileForm').addEventListener('submit', (e) => {
  if (!validate()) {
    e.preventDefault();
    alert('Please fix the highlighted fields.');
  }
});

// ========================================
// INITIALIZATION
// ========================================

// Add initial skill row and update profile on page load
addSkillRow('', 70);
updateProfile();
