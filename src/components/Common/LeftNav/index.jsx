import React from 'react';
import SkillBlock from './SkillBlock';
import './styles.scss';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div className="left-nav">
        <SkillBlock />
      </div>
    );
  }
}


// {/*<ul className="c-accordion-menu">*/}
//   {/*<li className="c-accordion-menu__block">*/}
//     {/*<input type="checkbox" name="tech-skills" id="tech-skills"/>*/}
//     {/*<label htmlFor="tech-skills" className="c-accordion-menu__button">tech skills</label>*/}
//     {/*<ul className="c-accordion-menu__submenu">*/}
//       {/*<li className="c-accordion-menu__submenu-block">*/}
//         {/*<input type="checkbox" name="tech-skills-theme-1" id="tech-skills-theme-1"/>*/}
//         {/*<label htmlFor="tech-skills-theme-1" className="c-accordion-menu__submenu-button">[Тема 1_]*/}
//
//           {/*<div className="admin-editor__instruments">*/}
//             {/*/!*<i className="admin-editor__edit">*!/*/}
//             {/*/!*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">*!/*/}
//             {/*/!*<g>*!/*/}
//             {/*/!*<path d="M30.276,1.722C29.168,0.611,27.69,0,26.121,0s-3.045,0.61-4.154,1.72L4.294,19.291c-0.105,0.104-0.185,0.229-0.235,0.367     l-4,11c-0.129,0.355-0.046,0.756,0.215,1.031C0.466,31.891,0.729,32,1,32c0.098,0,0.196-0.014,0.293-0.044l9.949-3.052     c0.156-0.047,0.298-0.133,0.414-0.248l18.621-18.621C31.389,8.926,32,7.448,32,5.878C31.999,4.309,31.389,2.832,30.276,1.722z      M10.092,27.165l-3.724,1.144c-0.217-0.637-0.555-1.201-1.016-1.662c-0.401-0.399-0.866-0.709-1.356-0.961L5.7,21H8v2     c0,0.553,0.447,1,1,1h1.765L10.092,27.165z M24.812,12.671L12.628,24.855l0.35-1.647c0.062-0.296-0.012-0.603-0.202-0.837     C12.586,22.136,12.301,22,12,22h-2v-2c0-0.552-0.448-1-1-1H7.422L19.315,7.175l0.012,0.011c0.732-0.733,1.707-1.136,2.742-1.136     s2.011,0.403,2.742,1.136s1.138,1.707,1.138,2.743C25.949,10.965,25.546,11.938,24.812,12.671z M28.862,8.621L27.93,9.554     c-0.09-1.429-0.683-2.761-1.703-3.782c-1.021-1.022-2.354-1.614-3.787-1.703l0.938-0.931l0.002-0.002     C24.11,2.403,25.085,2,26.121,2s2.01,0.403,2.741,1.136C29.596,3.869,30,4.843,30,5.878C30,6.915,29.598,7.889,28.862,8.621z      M22.293,8.293l-10,10c-0.391,0.391-0.391,1.023,0,1.414C12.487,19.902,12.744,20,13,20s0.511-0.098,0.707-0.293l10-10     c0.391-0.391,0.391-1.023,0-1.414C23.315,7.902,22.684,7.902,22.293,8.293z" fill="#f5910f"></path>*!/*/}
//             {/*/!*</g>*!/*/}
//             {/*/!*</svg>*!/*/}
//             {/*/!*</i>*!/*/}
//             {/*/!*<i className="admin-editor__delete">*!/*/}
//             {/*/!*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 21.9 21.9" enable-background="new 0 0 21.9 21.9" width="100%" height="100%">*!/*/}
//             {/*/!*<path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" fill="#f07e0c"></path>*!/*/}
//             {/*/!*</svg>*!/*/}
//             {/*/!*</i>*!/*/}
//           {/*</div>*/}
//           {/*<div className="c-notifications c-notifications-hidden-theme">[Тема 1_]</div>*/}
//         {/*</label>*/}
//         {/*<ul className="c-accordion-menu__submenu">*/}
//           {/*{items.map(item => (*/}
//             {/*<li className="c-accordion-menu__submenu-item"*/}
//                 {/*key={item.module}*/}
//             {/*>*/}
//               {/*<NavLink*/}
//                 {/*exact*/}
//                 {/*data={item.module}*/}
//                 {/*to={item.link}*/}
//               {/*>*/}
//                 {/*{item.text}*/}
//               {/*</NavLink>*/}
//             {/*</li>*/}
//           {/*))}*/}
//
//           {/*/!*<li className="c-accordion-menu__submenu-item" data="theory"></li>*!/*/}
//           {/*/!*<li className="c-accordion-menu__submenu-item" data="materials">Материалы</li>*!/*/}
//           {/*/!*<li className="c-accordion-menu__submenu-item" data="tests">Тесты</li>*!/*/}
//           {/*/!*<li className="c-accordion-menu__submenu-item" data="homework">ДЗ</li>*!/*/}
//           {/*/!*<li className="c-accordion-menu__submenu-item" data="my-bookmarks"></li>*!/*/}
//         {/*</ul>*/}
//       {/*</li>*/}
//
//       {/*/!*<li className="c-accordion-menu__submenu-block">*!/*/}
//       {/*/!*<input type="checkbox" name="tech-skills-theme-2" id="tech-skills-theme-2"/>*!/*/}
//       {/*/!*<label htmlFor="tech-skills-theme-2" className="c-accordion-menu__submenu-button">[Тема 2_]*!/*/}
//
//       {/*/!*<div className="admin-editor__instruments">*!/*/}
//       {/*/!*/!*<i className="admin-editor__edit">*!/*!/*/}
//       {/*/!*/!*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">*!/*!/*/}
//       {/*/!*/!*<g>*!/*!/*/}
//       {/*/!*/!*<path d="M30.276,1.722C29.168,0.611,27.69,0,26.121,0s-3.045,0.61-4.154,1.72L4.294,19.291c-0.105,0.104-0.185,0.229-0.235,0.367     l-4,11c-0.129,0.355-0.046,0.756,0.215,1.031C0.466,31.891,0.729,32,1,32c0.098,0,0.196-0.014,0.293-0.044l9.949-3.052     c0.156-0.047,0.298-0.133,0.414-0.248l18.621-18.621C31.389,8.926,32,7.448,32,5.878C31.999,4.309,31.389,2.832,30.276,1.722z      M10.092,27.165l-3.724,1.144c-0.217-0.637-0.555-1.201-1.016-1.662c-0.401-0.399-0.866-0.709-1.356-0.961L5.7,21H8v2     c0,0.553,0.447,1,1,1h1.765L10.092,27.165z M24.812,12.671L12.628,24.855l0.35-1.647c0.062-0.296-0.012-0.603-0.202-0.837     C12.586,22.136,12.301,22,12,22h-2v-2c0-0.552-0.448-1-1-1H7.422L19.315,7.175l0.012,0.011c0.732-0.733,1.707-1.136,2.742-1.136     s2.011,0.403,2.742,1.136s1.138,1.707,1.138,2.743C25.949,10.965,25.546,11.938,24.812,12.671z M28.862,8.621L27.93,9.554     c-0.09-1.429-0.683-2.761-1.703-3.782c-1.021-1.022-2.354-1.614-3.787-1.703l0.938-0.931l0.002-0.002     C24.11,2.403,25.085,2,26.121,2s2.01,0.403,2.741,1.136C29.596,3.869,30,4.843,30,5.878C30,6.915,29.598,7.889,28.862,8.621z      M22.293,8.293l-10,10c-0.391,0.391-0.391,1.023,0,1.414C12.487,19.902,12.744,20,13,20s0.511-0.098,0.707-0.293l10-10     c0.391-0.391,0.391-1.023,0-1.414C23.315,7.902,22.684,7.902,22.293,8.293z" fill="#f5910f"></path>*!/*!/*/}
//       {/*/!*/!*</g>*!/*!/*/}
//       {/*/!*/!*</svg>*!/*!/*/}
//       {/*/!*/!*</i>*!/*!/*/}
//       {/*/!*/!*<i className="admin-editor__delete">*!/*!/*/}
//       {/*/!*/!*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 21.9 21.9" enable-background="new 0 0 21.9 21.9" width="100%" height="100%">*!/*!/*/}
//       {/*/!*/!*<path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" fill="#f07e0c"></path>*!/*!/*/}
//       {/*/!*/!*</svg>*!/*!/*/}
//       {/*/!*/!*</i>*!/*!/*/}
//       {/*/!*</div>*!/*/}
//       {/*/!*<div className="c-notifications c-notifications-hidden-theme">[Тема 2_]</div>*!/*/}
//       {/*/!*</label>*!/*/}
//       {/*/!*<ul className="c-accordion-menu__submenu">*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="theory">Теория</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="materials">Материалы</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="tests">Тесты</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="homework">ДЗ</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="my-bookmarks">Мои закладки</li>*!/*/}
//       {/*/!*</ul>*!/*/}
//       {/*/!*</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-block">*!/*/}
//       {/*/!*<input type="checkbox" name="tech-skills-theme-3" id="tech-skills-theme-3"/>*!/*/}
//       {/*/!*<label htmlFor="tech-skills-theme-3" className="c-accordion-menu__submenu-button">[Тема 3_]*!/*/}
//
//       {/*/!*<div className="admin-editor__instruments">*!/*/}
//       {/*/!*<i className="admin-editor__edit">*!/*/}
//       {/*/!*/!*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">*!/*!/*/}
//       {/*/!*/!*<g>*!/*!/*/}
//       {/*/!*/!*<path d="M30.276,1.722C29.168,0.611,27.69,0,26.121,0s-3.045,0.61-4.154,1.72L4.294,19.291c-0.105,0.104-0.185,0.229-0.235,0.367     l-4,11c-0.129,0.355-0.046,0.756,0.215,1.031C0.466,31.891,0.729,32,1,32c0.098,0,0.196-0.014,0.293-0.044l9.949-3.052     c0.156-0.047,0.298-0.133,0.414-0.248l18.621-18.621C31.389,8.926,32,7.448,32,5.878C31.999,4.309,31.389,2.832,30.276,1.722z      M10.092,27.165l-3.724,1.144c-0.217-0.637-0.555-1.201-1.016-1.662c-0.401-0.399-0.866-0.709-1.356-0.961L5.7,21H8v2     c0,0.553,0.447,1,1,1h1.765L10.092,27.165z M24.812,12.671L12.628,24.855l0.35-1.647c0.062-0.296-0.012-0.603-0.202-0.837     C12.586,22.136,12.301,22,12,22h-2v-2c0-0.552-0.448-1-1-1H7.422L19.315,7.175l0.012,0.011c0.732-0.733,1.707-1.136,2.742-1.136     s2.011,0.403,2.742,1.136s1.138,1.707,1.138,2.743C25.949,10.965,25.546,11.938,24.812,12.671z M28.862,8.621L27.93,9.554     c-0.09-1.429-0.683-2.761-1.703-3.782c-1.021-1.022-2.354-1.614-3.787-1.703l0.938-0.931l0.002-0.002     C24.11,2.403,25.085,2,26.121,2s2.01,0.403,2.741,1.136C29.596,3.869,30,4.843,30,5.878C30,6.915,29.598,7.889,28.862,8.621z      M22.293,8.293l-10,10c-0.391,0.391-0.391,1.023,0,1.414C12.487,19.902,12.744,20,13,20s0.511-0.098,0.707-0.293l10-10     c0.391-0.391,0.391-1.023,0-1.414C23.315,7.902,22.684,7.902,22.293,8.293z" fill="#f5910f"></path>*!/*!/*/}
//       {/*/!*/!*</g>*!/*!/*/}
//       {/*/!*/!*</svg>*!/*!/*/}
//       {/*/!*</i>*!/*/}
//       {/*/!*<i className="admin-editor__delete">*!/*/}
//       {/*/!*/!*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 21.9 21.9" enable-background="new 0 0 21.9 21.9" width="100%" height="100%">*!/*!/*/}
//       {/*/!*/!*<path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" fill="#f07e0c"></path>*!/*!/*/}
//       {/*/!*/!*</svg>*!/*!/*/}
//       {/*/!*</i>*!/*/}
//       {/*/!*</div>*!/*/}
//       {/*/!*<div className="c-notifications c-notifications-hidden-theme">[Тема 3_]</div>*!/*/}
//       {/*/!*</label>*!/*/}
//       {/*/!*<ul className="c-accordion-menu__submenu">*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="theory">Теория</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="materials">Материалы</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="tests">Тесты</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="homework">ДЗ</li>*!/*/}
//       {/*/!*<li className="c-accordion-menu__submenu-item" data="my-bookmarks">Мои закладки</li>*!/*/}
//       {/*/!*</ul>*!/*/}
//       {/*/!*</li>*!/*/}
//       {/*<div id="add-material" className="c-accordion-menu__button_add-material"></div>*/}
//     {/*</ul>*/}
//   {/*</li>*/}
//   {/*<li className="c-accordion-menu__block">*/}
//     {/*<input type="checkbox" name="soft-skills" id="soft-skills"/>*/}
//     {/*<label htmlFor="soft-skills" className="c-accordion-menu__button">soft skills</label>*/}
//     {/*<ul className="c-accordion-menu__submenu">*/}
//       {/*<li className="c-accordion-menu__submenu-block">*/}
//         {/*<input type="checkbox" name="soft-skills-themes" id="soft-skills-theme-1"/>*/}
//         {/*<label htmlFor="soft-skills-theme-1" className="c-accordion-menu__submenu-button">[Тема 1_]</label>*/}
//       {/*</li>*/}
//       {/*<li className="c-accordion-menu__submenu-block">*/}
//         {/*<input type="checkbox" name="soft-skills-themes" id="soft-skills-theme-2"/>*/}
//         {/*<label htmlFor="soft-skills-theme-2" className="c-accordion-menu__submenu-button">[Тема 2_]</label>*/}
//       {/*</li>*/}
//       {/*<li className="c-accordion-menu__submenu-block">*/}
//         {/*<input type="checkbox" name="soft-skills-themes" id="soft-skills-theme-3"/>*/}
//         {/*<label htmlFor="soft-skills-theme-3" className="c-accordion-menu__submenu-button">[Тема 3_]</label>*/}
//       {/*</li>*/}
//     {/*</ul>*/}
//   {/*</li>*/}
//   {/*<li className="c-accordion-menu__block">*/}
//     {/*<input type="checkbox" name="english" id="english"/>*/}
//     {/*<label htmlFor="english" className="c-accordion-menu__button c-accordion-menu__button_last">english</label>*/}
//     {/*<ul className="c-accordion-menu__submenu">*/}
//       {/*<li className="c-accordion-menu__submenu-block">*/}
//         {/*<input type="checkbox" name="english-themes" id="english-theme-1"/>*/}
//         {/*<label htmlFor="english-theme-1" className="c-accordion-menu__submenu-button">[Тема 1_]</label>*/}
//       {/*</li>*/}
//       {/*<li className="c-accordion-menu__submenu-block">*/}
//         {/*<input type="checkbox" name="english-themes" id="english-theme-2"/>*/}
//         {/*<label htmlFor="english-theme-2" className="c-accordion-menu__submenu-button">[Тема 2_]</label>*/}
//       {/*</li>*/}
//       {/*<li className="c-accordion-menu__submenu-block">*/}
//         {/*<input type="checkbox" name="english-themes" id="english-theme-3"/>*/}
//         {/*<label htmlFor="english-theme-3" className="c-accordion-menu__submenu-button">[Тема 3_]</label>*/}
//       {/*</li>*/}
//     {/*</ul>*/}
//   {/*</li>*/}
// {/*</ul>*/}
