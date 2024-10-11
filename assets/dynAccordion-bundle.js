import { j as jsxRuntimeExports, a9 as Row, aa as Col, X as Accordion, ab as ReactDOM } from 'shared';

const DynAcc = () => {
    const contentRoot = document.getElementById('accordion-content');
    if (!contentRoot)
        return null;
    // Remove the original content after extracting it
    contentRoot.remove();
    // Get all headings (accordion labels) and paragraphs (accordion panels)
    const labels = Array.from(contentRoot.getElementsByTagName('h3'));
    const panels = Array.from(contentRoot.getElementsByTagName('p'));
    // Ensure we have the same number of labels and panels
    if (labels.length !== panels.length)
        return null;
    return (jsxRuntimeExports.jsx(Row, { justifyContent: "center", children: jsxRuntimeExports.jsx(Col, { sm: 10, children: jsxRuntimeExports.jsx(Accordion, { level: 4, isBare: true, children: labels.map((label, index) => (jsxRuntimeExports.jsxs(Accordion.Section, { children: [jsxRuntimeExports.jsx(Accordion.Header, { children: jsxRuntimeExports.jsx(Accordion.Label, { children: label.textContent }) }), jsxRuntimeExports.jsx(Accordion.Panel, { children: jsxRuntimeExports.jsx("div", { children: panels[index].textContent }) })] }, index))) }) }) }));
};
// Mount the accordion when DOM is loaded
const mountAccordion = () => {
    const root = document.getElementById('accordion-root');
    if (root) {
        ReactDOM.render(jsxRuntimeExports.jsx(DynAcc, {}), root);
    }
};
if (document.readyState === 'complete' || document.readyState !== 'loading') {
    mountAccordion();
}
else {
    document.addEventListener('DOMContentLoaded', mountAccordion);
}

export { DynAcc as default };
