// Target all tab navigation buttons and tab panel sections
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 1. Deactivate active styling on previous tab buttons
    tabs.forEach(btn => btn.classList.remove('active'));
    // 2. Hide all existing content panels
    contents.forEach(content => content.classList.remove('active'));

    // 3. Highlight the clicked tab button
    tab.classList.add('active');
    // 4. Reveal the corresponding target section panel
    const targetTab = tab.getAttribute('data-tab');
    document.getElementById(targetTab).classList.add('active');
  });
});
