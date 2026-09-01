const storageKey = 'capstone-settings';
const settingsForm = document.querySelector('#settings-form');
const formStatus = document.querySelector('#form-status');

function getSavedSettings() {
    try {
        return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch {
        return {};
    }
}

function saveSettings(settings) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(settings));
        return true;
    } catch {
        return false;
    }
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function applyTheme(theme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.dataset.theme = theme === 'dark' || (theme === 'system' && prefersDark) ? 'dark' : 'light';
}

function loadSettings() {
    const savedSettings = getSavedSettings();
    const fields = settingsForm.elements;
    if (savedSettings.name) fields.name.value = savedSettings.name;
    if (savedSettings.email) fields.email.value = savedSettings.email;
    if (savedSettings.theme) fields.theme.value = savedSettings.theme;
    if (savedSettings.language) fields.language.value = savedSettings.language;
    fields.notifications.checked = savedSettings.notifications === true;
    applyTheme(fields.theme.value);
}

function setFieldError(fieldName, message) {
    const field = settingsForm.elements[fieldName];
    const error = document.querySelector(`#${fieldName}-error`);
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    field.setAttribute('aria-errormessage', message ? `${fieldName}-error` : '');
    error.textContent = message;
}

function validateSettings() {
    const fields = settingsForm.elements;
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const password = fields.password.value;
    const errors = {};

    if (!name) {
        errors.name = 'Enter your full name.';
    } else if (name.length < 1) {
        errors.name = 'Full name cannot be blank.';
    }

    if (!email) {
        errors.email = 'Enter your email address.';
    } else if (!isValidEmail(email)) {
        errors.email = 'Enter a valid email address.';
    }

    if (!password) {
        errors.password = 'Enter a new password.';
    } else if (password.length < 8) {
        errors.password = 'Use at least 8 characters.';
    }

    ['name', 'email', 'password'].forEach((fieldName) => setFieldError(fieldName, errors[fieldName] || ''));
    return { errors, name, email, password };
}

settingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = '';
    const result = validateSettings();

    if (Object.keys(result.errors).length > 0) {
        const firstInvalid = settingsForm.querySelector('[aria-invalid="true"]');
        firstInvalid.focus();
        formStatus.textContent = 'Please review the highlighted fields.';
        return;
    }

    const fields = settingsForm.elements;
    const saved = saveSettings({
        name: result.name,
        email: result.email,
        theme: fields.theme.value,
        language: fields.language.value,
        notifications: fields.notifications.checked
    });
    fields.password.value = '';
    applyTheme(fields.theme.value);
    formStatus.textContent = saved ? 'Settings saved successfully.' : 'Settings updated for this session. Browser storage is unavailable.';
});

['name', 'email', 'password'].forEach((fieldName) => {
    settingsForm.elements[fieldName].addEventListener('input', () => setFieldError(fieldName, ''));
});
settingsForm.elements.theme.addEventListener('change', (event) => applyTheme(event.target.value));
loadSettings();