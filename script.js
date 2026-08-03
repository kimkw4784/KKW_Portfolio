/* ==========================================================================
   1. BACKGROUND GRADIENT TRANSITION (Intersection Observer)
   ========================================================================== */
const body = document.body;
const project2Section = document.getElementById('project-2');

if (project2Section) {
  const observerOptions = {
    root: null, // Viewport
    rootMargin: '-30% 0px -30% 0px', // Trigger when 30% of the section is visible
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        body.classList.add('theme-green');
      } else {
        // If we scroll back up and out of Project 2, revert to Navy
        if (entry.boundingClientRect.top > 0) {
          body.classList.remove('theme-green');
        }
      }
    });
  }, observerOptions);

  observer.observe(project2Section);
}

/* script.js - TAB SWITCHING ENHANCEMENT */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetTabId = btn.dataset.tab;

    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false'); // 접근성 보완
    });
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true'); // 접근성 보완

    const targetContent = document.getElementById(targetTabId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

function switchCodeTab(event, tabId) {
  // 모든 탭 버튼 및 컨텐츠 비활성화
  const parent = event.currentTarget.closest('.code-tab-container');
  parent.querySelectorAll('.code-tab-btn').forEach(btn => btn.classList.remove('active'));
  parent.querySelectorAll('.code-tab-content').forEach(content => content.classList.remove('active'));

  // 클릭된 탭 및 컨텐츠 활성화
  event.currentTarget.classList.add('active');
  parent.querySelector(`#${tabId}`).classList.add('active');
}