import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SiteData from './SiteData';

let meta = [];

Object.keys(SiteData.head).forEach(key => {
    if(key === 'meta' || key === 'link'){
        const CustomTag = `${key}`;
        SiteData.head[key].forEach((item,index) => {
            meta.push(<CustomTag key={key+index} {...item} />);
        });
    } else {
        const CustomTag = `${key}`;
        meta.push(<CustomTag key={key}> {SiteData.head[key]} </CustomTag>);
    }
});

const head = ReactDOM.createRoot(document.head);
head.render(
    <>
    {meta}
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);