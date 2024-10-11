import { j as jsxRuntimeExports, a9 as Row, aa as Col, X as Accordion, ab as ReactDOM } from 'shared';

// Rename the component to start with an uppercase letter
const AccExample = () => (jsxRuntimeExports.jsx(Row, { justifyContent: "center", children: jsxRuntimeExports.jsx(Col, { sm: 10, children: jsxRuntimeExports.jsxs(Accordion, { level: 4, isBare: true, children: [jsxRuntimeExports.jsxs(Accordion.Section, { children: [jsxRuntimeExports.jsx(Accordion.Header, { children: jsxRuntimeExports.jsx(Accordion.Label, { children: "How do you start gardening?" }) }), jsxRuntimeExports.jsx(Accordion.Panel, { children: jsxRuntimeExports.jsx("div", { contentEditable: true, children: "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale." }) })] }), jsxRuntimeExports.jsxs(Accordion.Section, { children: [jsxRuntimeExports.jsx(Accordion.Header, { children: jsxRuntimeExports.jsx(Accordion.Label, { children: "What are the basics of gardening?" }) }), jsxRuntimeExports.jsx(Accordion.Panel, { children: "Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery." })] }), jsxRuntimeExports.jsxs(Accordion.Section, { children: [jsxRuntimeExports.jsx(Accordion.Header, { children: jsxRuntimeExports.jsx(Accordion.Label, { children: "What are the best tools?" }) }), jsxRuntimeExports.jsx(Accordion.Panel, { children: "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori." })] })] }) }) }));
// Function to mount the accordion into the DOM
const mountAccordion = () => {
    const root = document.getElementById('accordion-root');
    if (root) {
        console.log("Root");
        ReactDOM.render(jsxRuntimeExports.jsx(AccExample, {}), root); // Use the renamed component here
    }
};
// Ensure the component renders when the DOM is fully loaded
if (document.readyState === 'complete' || document.readyState !== 'loading') {
    mountAccordion();
}
else {
    document.addEventListener('DOMContentLoaded', mountAccordion);
}

export { AccExample as default };
