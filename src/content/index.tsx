import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import css from './index.css?inline';
import TailwindComponent from './TailwindComponent';
import DaisyComponent from './DaisyComponent';

// ADD YOUR TARGET ID
const SOME_TARGET_ID = '';

const waitForElement = (id: string, callback: (el: HTMLElement) => void) => {
    const el = document.getElementById(id);
    if (el) {
        callback(el);
        return;
    }

    const observer = new MutationObserver(() => {
        const found = document.getElementById(id);
        if (found) {
            observer.disconnect();
            callback(found);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

waitForElement(SOME_TARGET_ID, (el) => {
    // Create a shadow DOM and attach this app's root to it.
    const shadowRoot = document.createElement('div');
    el.prepend(shadowRoot);
    const shadowDOM = shadowRoot.attachShadow({ mode: 'open' });
    const appRoot = document.createElement('div');
    shadowDOM.append(appRoot);

    // Reset original DOM styles
    const styleReset = document.createElement('style');
    shadowDOM.append(styleReset);
    styleReset.textContent = `:host {all: initial;}`;

    createRoot(appRoot).render(
        <StrictMode>
            <style type='text/css'>{css}</style>
            <TailwindComponent />
            <DaisyComponent />
        </StrictMode>
    );
});
