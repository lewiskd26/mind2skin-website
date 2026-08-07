const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-nav');if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();


const waitlistForm = document.querySelector('[data-waitlist-form]');

if (waitlistForm) {
  const statusEl = waitlistForm.querySelector('[data-form-status]');
  const nextStepsEl = waitlistForm.querySelector('[data-next-steps]');
  const submitButton = waitlistForm.querySelector('[data-submit-button]');

  waitlistForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const endpoint = waitlistForm.getAttribute('action');

    if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
      statusEl.textContent = 'Waitlist form setup is not complete yet.';
      statusEl.className = 'form-status error';
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Joining…';
    statusEl.textContent = '';
    statusEl.className = 'form-status';
    if (nextStepsEl) nextStepsEl.hidden = true;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(waitlistForm),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      waitlistForm.reset();
      statusEl.textContent = 'Thank you — you’re on the Mind2Skin beta waitlist.';
      statusEl.className = 'form-status success';
      if (nextStepsEl) nextStepsEl.hidden = false;
    } catch (error) {
      statusEl.textContent = 'We could not submit your request. Please try again.';
      statusEl.className = 'form-status error';
      if (nextStepsEl) nextStepsEl.hidden = true;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Join the Waitlist';
    }
  });
}
