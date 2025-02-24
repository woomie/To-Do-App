import React from 'react';

function Toggle() {

  function darkMode(){
    const element = document.body;
    element.classList.toggle("dark-mode")
  }
  return (
    <div className="toggle">
      <input type="checkbox" id="check" onClick = {darkMode}/>
      <label for="check" class="slider">
      </label>
    </div>

  )
}

export default Toggle;
