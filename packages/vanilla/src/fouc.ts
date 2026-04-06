const reveal = () => requestAnimationFrame(() => document.body.classList.add('ready'));

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(reveal, 0));
} else {
    setTimeout(reveal, 0);
}
