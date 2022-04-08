import React from 'react';
import './style.scss';


const Header = () => {
  return (
    <header className="header">
      <div className="slider">
        <h1 className="slider_title">The Power of Simplicity</h1>
        <p className="slider_text">Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
        <a className="slider_link">Learn</a>
        <ul className="slider_controls">
					<li className="slider_dot"></li>
					<li className="slider_dot"></li>
					<li className="slider_dot slider_dot--active"></li>
					<li className="slider_dot"></li>
					<li className="slider_dot"></li>
				</ul>
      </div>
    </header>
  )
}
export default Header;